import pandas as pd
import os

input_dir = "csv"
output_dir = os.path.join(input_dir, "output")

# Output-Ordner erstellen, falls nicht vorhanden
os.makedirs(output_dir, exist_ok=True)

all_graphs = []  # Für kombiniertes LaTeX-Dokument

for filename in os.listdir(input_dir):
    if filename.endswith(".tsv"):
        filepath = os.path.join(input_dir, filename)
        df = pd.read_csv(filepath, sep="\t")

        # Leere Fehlerfelder durch 0 ersetzen und zu int konvertieren
        df["Fehleranzahl_axe"] = df["Fehleranzahl_axe"].fillna(0).astype(int)
        df["Fehleranzahl_WAVE"] = df["Fehleranzahl_WAVE"].fillna(0).astype(int)

        # Zeilen löschen, bei denen beide Fehleranzahlen 0 sind
        df_cleaned = df[~((df["Fehleranzahl_axe"] == 0) & (df["Fehleranzahl_WAVE"] == 0))]

        # Basis-Dateiname ohne .tsv
        base_name = os.path.splitext(filename)[0]
        # Array von Wörtern getrennt durch "_"
        base_name_parts = base_name.split("_")
        subsection_name = base_name.replace("_", " ").title()

        # Variante 1: nur x.x
        df_xx = df_cleaned[df_cleaned["WCAG-Kriterium"].str.match(r"^\d+\.\d+$", na=False)]
        df_xx.to_csv(os.path.join(output_dir, f"{base_name}_xx.csv"), sep="\t", index=False)

        # Variante 2: nur x.x.x.x
        df_xxxx = df_cleaned[df_cleaned["WCAG-Kriterium"].str.match(r"^\d+\.\d+\.\d+\.\d+$", na=False)]
        cleaned_csv_path = os.path.join(output_dir, f"{base_name}_xxxx.csv")
        df_xxxx.to_csv(cleaned_csv_path, sep="\t", index=False)

        # Symbolic x coords für diese Datei
        symbolic_coords = sorted(df_xxxx["WCAG-Kriterium"].unique(), key=lambda x: [int(part) for part in x.split('.')])
        symbolic_coords_str = ", ".join(symbolic_coords)

        # LaTeX-Code generieren
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
\\addplot table[x=WCAG-Kriterium,y=Fehleranzahl_axe,col sep=tab] {{{cleaned_csv_path}}};
\\addplot table[x=WCAG-Kriterium,y=Fehleranzahl_WAVE,col sep=tab] {{{cleaned_csv_path}}};
\\legend{{axe,WAVE}}
\\end{{axis}}
\\end{{tikzpicture}}
\\caption{{Auswertung Analyse {base_name_parts[2]}}}
\\end{{figure}}
""".strip()

        # Einzelausgabe speichern
        chart_path = os.path.join(output_dir, f"{base_name}_chart.tex")
        with open(chart_path, "w", encoding="utf-8") as f:
            f.write(latex_code)

        # Für kombiniertes Dokument merken
        all_graphs.append(latex_code)

# Gesamtausgabe aller Grafiken in eine Datei
all_output_path = os.path.join(output_dir, "all_graphs.tex")
with open(all_output_path, "w", encoding="utf-8") as f:
    f.write("\n\n".join(all_graphs))

print("✅ Alle LaTeX-Dateien wurden generiert.")
