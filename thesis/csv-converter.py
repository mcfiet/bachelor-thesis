import pandas as pd
import os

input_dir = "csv"
output_dir = os.path.join(input_dir, "output")

# Output-Ordner erstellen, falls nicht vorhanden
os.makedirs(output_dir, exist_ok=True)

# Funktion zum Escapen spezieller LaTeX-Zeichen
def escape_latex(text):
    if pd.isna(text):
        return text
    replacements = {
        '\\': r'\\textbackslash{}',
        '%': r'\%',
        '$': r'\$',
        '#': r'\#',
        '&': r'\&',
        '_': r'\_',
        '{': r'\{',
        '}': r'\}',
        '~': r'\textasciitilde{}',
        '^': r'\textasciicircum{}',
    }
    for original, replacement in replacements.items():
        text = text.replace(original, replacement)
    return text

all_graphs = []

for filename in os.listdir(input_dir):
    if filename.endswith(".tsv"):
        filepath = os.path.join(input_dir, filename)
        df = pd.read_csv(filepath, sep="\t")

        # Leere Fehlerfelder durch 0 ersetzen und zu int konvertieren
        df["Fehleranzahl_axe"] = df["Fehleranzahl_axe"].fillna(0).astype(int)
        df["Fehleranzahl_WAVE"] = df["Fehleranzahl_WAVE"].fillna(0).astype(int)

        # Zeilen löschen, bei denen beide Fehleranzahlen 0 sind
        df_cleaned = df[~((df["Fehleranzahl_axe"] == 0) & (df["Fehleranzahl_WAVE"] == 0))].copy()

        # Beschreibung für LaTeX escapen (ohne SettingWithCopyWarning)
        df_cleaned.loc[:, "Beschreibung"] = df_cleaned["Beschreibung"].apply(escape_latex)

        # Basis-Dateiname
        base_name = os.path.splitext(filename)[0]
        base_name_parts = base_name.split("_")
        subsection_name = base_name.replace("_", " ").title()

        # x.x-Kriterien
        df_xx = df_cleaned[df_cleaned["WCAG-Kriterium"].str.match(r"^\d+\.\d+$", na=False)]
        df_xx.to_csv(os.path.join(output_dir, f"{base_name}_xx.csv"), sep="\t", index=False)

        # x.x.x.x-Kriterien
        df_xxxx = df_cleaned[df_cleaned["WCAG-Kriterium"].str.match(r"^\d+\.\d+\.\d+\.\d+$", na=False)]
        cleaned_csv_path = os.path.join(output_dir, f"{base_name}_xxxx.csv")
        df_xxxx.to_csv(cleaned_csv_path, sep="\t", index=False)

        # Sortierte X-Achse
        symbolic_coords = sorted(df_xxxx["WCAG-Kriterium"].unique(), key=lambda x: [int(part) for part in x.split('.')])
        symbolic_coords_str = ", ".join(symbolic_coords)

        # LaTeX-Code für das Diagramm
        latex_code = f"""
\\begin{{figure}}[H]
\\begin{{tikzpicture}}
\\begin{{axis}}[
    width=\\textwidth,
    height=10cm,
    ybar,
    bar width=12pt,
    xlabel={{WCAG-Kriterium}},
    ylabel={{Fehleranzahl}},
    symbolic x coords={{ {symbolic_coords_str} }},
    xtick=data,
    x tick label style={{rotate=45, anchor=east}},
    ymin=0,
    ymax=350,
    enlarge x limits=0.1,
    legend style={{cells={{anchor=west}}, legend pos=north east}},
    nodes near coords,
    nodes near coords style={{font=\\scriptsize}},
]
\\addplot table[x=WCAG-Kriterium,y=Fehleranzahl_axe,col sep=tab]{{{cleaned_csv_path}}};
\\addplot table[x=WCAG-Kriterium,y=Fehleranzahl_WAVE,col sep=tab]{{{cleaned_csv_path}}};
\\legend{{axe,WAVE}}
\\end{{axis}}
\\end{{tikzpicture}}
\\caption{{Auswertung Analyse {base_name_parts[2]}}}
\\end{{figure}}
""".strip()

        # Diagramm-Teildatei schreiben
        chart_path = os.path.join(output_dir, f"{base_name}_chart.tex")
        with open(chart_path, "w", encoding="utf-8") as f:
            f.write(latex_code)

        all_graphs.append(latex_code)

# Gesamt-LaTeX-Datei mit allen Diagrammen schreiben
all_output_path = os.path.join(output_dir, "all_graphs.tex")
with open(all_output_path, "w", encoding="utf-8") as f:
    f.write("\n\n".join(all_graphs))

print("✅ Alle LaTeX-Dateien wurden generiert – mit korrektem Escaping und ohne Warnung.")
