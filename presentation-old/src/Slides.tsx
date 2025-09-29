// BFSG Präsentation – Slides (Reveal.js + React)
// Einbinden: In deiner App innerhalb von <div className="slides"> einfach <Slides /> rendern.
// Beispiel:
// <div className="slides">
//   <Slides />
// </div>

export default function Slides() {
  return (
    <>
      <section
        className="quote-slide"
        data-background="#0b1220"
        data-background-transition="fade"
      >
        <figure className="quote-card">
          <blockquote>
            Für die meisten ein nerviges Problem beim Browsen, für andere das
            Ende der Teilhabe.
          </blockquote>
          {/*<figcaption className="cite">Steve Jobs</figcaption>*/}
        </figure>
      </section>
      {/* Titel */}
      <section data-background="#0b1220" data-background-transition="fade">
        <h6 style={{ fontStyle: "italic" }}>
          Barrierefreiheit: Vom Gesetz zum Code
        </h6>
        <h4 style={{ textTransform: "none", fontWeight: "normal" }}>
          Analyse des Barrierefreiheitsstärkungsgesetzes (BFSG) sowie Konzeption
          und Implementierung in einer modernen Webanwendung
        </h4>
      </section>

      {/* 1. Einleitung & Motivation */}
      <section>
        <section>
          <h2>1. Einleitung & Motivation</h2>
          <p className="fragment">
            In Deutschland leben <strong>9,4&nbsp;%</strong> der Bevölkerung mit
            Schwerbehinderung (GdB&nbsp;&ge;&nbsp;50).
          </p>
          <p className="fragment">
            Durch Barrieren im Internet wird also ein Teil der Gesellschaft
            ausgeschlossen
          </p>
        </section>
        <section>
          <h3>Wer ist von den Barrieren betroffen?</h3>
          <ul>
            <li className="fragment">Ältere Menschen</li>
            <li className="fragment">temporär eingeschränkte Menschen</li>
            <li className="fragment">Power-User</li>
            <li className="fragment">Jeder</li>
          </ul>
        </section>
      </section>

      <section>
        <section>
          <h2>Ziel</h2>
          <p className="fragment">
            Brücke zwischen Entwickler:innen und dem <strong>BFSG</strong>{" "}
            schlagen.
          </p>
        </section>

        <section>
          <h2>Problemstellung & neue Anforderungen</h2>
          <ul>
            <li className="fragment">
              Barrierefreiheit gilt als aufwändig → wurde oft ignoriert.
            </li>
            <li className="fragment">
              Fehlende klare Vorgaben → geringe Verantwortung für Entwickler.
            </li>
            <li className="fragment">
              Neu: EU‑Richtlinie &rarr; <strong>BFSG</strong> schafft
              verbindliche Anforderungen.
            </li>
          </ul>
        </section>

        <section>
          <h2>Frage</h2>
          <p className="fragment">
            Wie lassen sich die Anforderungen des
            Barrierefreiheitsstärkungsgesetzes (BFSG) in einer modernen
            Webanwendung technisch umsetzen?
          </p>
        </section>

        <section>
          <h2>Grundlage</h2>
          <p className="fragment">
            Als Grundlage für Projekt <strong>Mrija Manager</strong>{" "}
            (barrierfreie Event‑Verwaltung).
          </p>
        </section>
      </section>

      {/* 3. Theoretische Grundlagen */}
      <section>
        <h2>3. Grundlagen – Barrierefreiheit</h2>
        <ul>
          <li className="fragment">
            Ziel: Nutzung <em>ohne besondere Erschwernis</em> und{" "}
            <em>ohne fremde Hilfe</em>.
          </li>
          <li className="fragment">
            Betroffen sind u. a. Seh‑, Hör‑, motorische und kognitive
            Einschränkungen.
          </li>
          <li className="fragment">
            Web: klare Struktur, semantisches HTML, Untertitel,
            Tastaturbedienbarkeit, leichte Sprache.
          </li>
        </ul>
      </section>

      {/* 2. Methodik */}
      <section>
        <h2>2. Forschungsmethodik & Aufbau</h2>
        <ol>
          <li className="fragment">
            Literaturrecherche (BITV&nbsp;2.0, BFSG, EU 2016/2102 & 2019/882,
            WCAG&nbsp;2.1)
          </li>
          <li className="fragment">
            Fallstudie bestehender Web‑Apps (Kriterienkatalog, axe, WAVE,
            manuelle Checks)
          </li>
          <li className="fragment">
            Prototyping (React‑App) auf Basis der Erkenntnisse
          </li>
          <li className="fragment">
            Evaluation mit denselben Kriterien & Tools
          </li>
        </ol>
      </section>

      <section>
        <h2>Gesetze & Standards</h2>
        <img src="/bfsg_eu_norm_schema.png" />
      </section>
      <section>
        <h2>Tech‑Grundlagen</h2>
        <ul>
          <li className="fragment">
            <strong>Semantic HTML</strong> vor ARIA; ARIA nur ergänzend
            einsetzen.
          </li>
          <li className="fragment">
            DOM, JavaScript, TypeScript (statische Typisierung &
            Fehlerreduktion).
          </li>
        </ul>
      </section>

      {/* 4. Technologieauswahl */}
      <section>
        <h2>4. Technologieauswahl</h2>
        <ul>
          <li className="fragment">
            <strong>React:</strong> verbreitet, komponentenbasiert, große
            Community.
          </li>
          <li className="fragment">
            <strong>MUI:</strong> umfangreiche, anpassbare UI‑Komponenten
            (Material Design, eigenes DS möglich).
          </li>
          <li className="fragment">
            <strong>Testing‑Tools:</strong> axe DevTools (~57&nbsp;% der
            WCAG‑Fehler), WAVE als Ergänzung.
          </li>
        </ul>
      </section>

      {/* 5. Analyse Bestandsseiten */}
      <section>
        <section>
          <h2>5. Analyse von Bestandsseiten</h2>
          <div
            className="fragment fade-in-then-out"
            data-fragment-index="0"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                borderRadius: 6,
                padding: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Banken und Finanzdienstleistungen
            </div>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                borderRadius: 6,
                padding: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Personenbeförderung
            </div>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                borderRadius: 6,
                padding: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Telekommunikationsdienste
            </div>
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                borderRadius: 6,
                padding: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              E-Commerce und Online-Shops
            </div>
          </div>

          <div className="fragment fade-up" data-fragment-index="2">
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.3)",
                borderRadius: 6,
                padding: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Veranstaltungsplattformen
            </div>
          </div>
        </section>
      </section>
      <section>
        <section>
          <h2>Fehlerverteilung</h2>
          <div style={{ display: "flex", gap: 20 }}>
            <img
              src="/plot1.svg"
              alt="Auswertung WCAG Kategorien"
              style={{ backgroundColor: "white" }}
            />
            <img
              src="/plot2.svg"
              alt="Auswertung WCAG Kategorien"
              style={{ backgroundColor: "white" }}
            />
          </div>
        </section>
        <section>
          <h2>Häufige Probleme (Kurz)</h2>
          <ol>
            <li className="fragment">
              <strong>Kontraste</strong> (1.4.3) – meist verletzt.
            </li>
            <li className="fragment">
              <strong>Fokus sichtbar</strong> (2.4.7) – Fokus verschwindet/kaum
              erkennbar, Traps.
            </li>
            <li className="fragment">
              <strong>Name/Rolle/Wert</strong> (4.1.2) – fehlende Labels,
              Alternativtexte (1.1.1).
            </li>
          </ol>
          <p className="fragment">
            <em>Fazit:</em> Wiederkehrende Fehler blockieren komplette Prozesse.
          </p>
        </section>
      </section>
      <section>
        <section>
          <h2>Positivbeispiele</h2>
        </section>
        <section>
          <figure>
            <img src="/good/amazon_good_shortcut-examples.png" />
            <figcaption>
              Amazon: gute Skip‑Links + Shortcut‑Schaltfläche.
            </figcaption>
          </figure>
        </section>
        <section>
          <figure>
            <img src="/good/hvv_good-contrast-theme.png" />
            <figcaption>
              HVV: Kontrastversion, klar mit ARIA beschriftet.
            </figcaption>
          </figure>
        </section>
        <section>
          <figure>
            <img src="/good/vbb_good-nav-tab.png" />
            <figcaption>
              VBB: sichtbares Untermenü bei Tastaturbedienung (2.4.1).
            </figcaption>
          </figure>
        </section>
      </section>

      {/* 6. Anforderungen & Konzept */}
      <section>
        <section>
          <h2>6. Anforderungen & Konzept</h2>
        </section>
        <section>
          <h2>Mrija-Manager als Basis</h2>
          <img className="r-stretch" src="/mrija-manager_figma.png" />
        </section>
        <section>
          <h2>Farbkonzept geprüft (Contrast Grid)</h2>
          <img className="r-stretch" src="/contrast-grid.png" />
        </section>
        <section>
          <h2>Seitenstruktur</h2>
          <img className="r-stretch" src="/mrija-manager_sitemap.png" />
        </section>
        <section>
          <h2>Eigenes Designsystem</h2>
          <p>Grenzen sichtbar machen (z. B. FAQ mit Akkordeons).</p>
          <img className="r-stretch" src="/bachelor-thesis_figma.png" />
        </section>
      </section>

      {/* 7. Implementierung – Teil 1 */}
      <section>
        <h2>7. Implementierung – Struktur & Semantik</h2>
        <ul>
          <li className="fragment">
            Korrekte Verwendung von &lt;h1&gt;–&lt;h6&gt;; keine
            „Pseudo‑Headings“.
          </li>
          <li className="fragment">
            Pro Seite ein visuell verstecktes &lt;h1&gt; (Screenreader).
          </li>
          <li className="fragment">
            Skip‑Links (2.4.1) und lang="de" (3.1.1).
          </li>
        </ul>
      </section>

      <section>
        <section>
          <h2>Navigationskonzept & Header</h2>
          <ul>
            <li className="fragment">
              Konsistente Navigation (3.2.3) im Base‑Layout.
            </li>
            <li className="fragment">
              Mobiles Menü: ausgeblendete Items sind aus dem Fokusfluss.
            </li>
            <li className="fragment">
              ARIA am Toggle (aria‑label, aria‑expanded) für
              Statuskommunikation.
            </li>
          </ul>
        </section>
        <section>
          <h3>TS Beispiel</h3>
          <pre>
            <code data-line-numbers="3,8-10">
              <table>
                <tr>
                  <td>Apples</td>
                  <td>$1</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>Oranges</td>
                  <td>$2</td>
                  <td>18</td>
                </tr>
              </table>
            </code>
          </pre>
        </section>
      </section>

      <section>
        <section>
          <h2>Account‑Dropdown</h2>
          <img className="r-stretch" src="/account-dropdown_logged-out.png" />
          <img className="r-stretch" src="/account-dropdown_logged-in.png" />
        </section>
        <section>
          <ul>
            <li className="fragment">
              Komposition MUI‑Komponenten für
              Login/Logout/Registrierung/Event‑Erstellung.
            </li>
            <li className="fragment">
              Tastatur‑Flow: erreichbar nur bei geöffnetem Menü; ESC schließt;
              W3C‑Pattern.
            </li>
          </ul>
        </section>
      </section>

      <section>
        <section>
          <h2>Formulare & Fehlermeldungen</h2>
          <div className="r-stack">
            <img
              height="500"
              className="fragment r-stretch"
              src="/eventa11y_helpertext.png"
            />
            <img
              height="500"
              className="fragment r-stretch"
              src="/eventa11y_helpertext_grey.png"
            />
          </div>
        </section>
        <section>
          <ul>
            <li className="fragment">react‑hook‑form + zod.</li>
            <li className="fragment">Jedes Feld hat Label</li>
            <li className="fragment">
              Fehler nicht nur per Farbe; Helper‑Text erklärt.
            </li>
            <li className="fragment">
              Verknüpfungen via id / aria‑describedby; aria‑invalid="true".
            </li>
          </ul>
        </section>
      </section>

      <section>
        <h2>Fehlervermeidung & Status</h2>
        <ul>
          <li className="fragment">
            Übersichtsseite vor dem Absenden (3.3.4).
          </li>
          <li className="fragment">
            Keine Kontextwechsel onFocus/onInput (3.2.1/3.2.2).
          </li>
          <li className="fragment">
            Snackbars mit role="alert", Close‑Button, ausreichendem Kontrast.
          </li>
        </ul>
      </section>

      <section>
        <h2>FAQ, Responsivität, Meldung</h2>
        <ul>
          <li className="fragment">
            FAQ als Akkordeon: korrekte ARIA‑Verknüpfungen.
          </li>
          <li className="fragment">
            Reflow (1.4.10) & Orientation (1.3.4) beachtet.
          </li>
          <li className="fragment">
            Sektion „Barriere melden“ als kontinuierliches Feedback.
          </li>
        </ul>
      </section>

      <section>
        <h2>MUI – Erkenntnisse</h2>
        <ul>
          <li className="fragment">
            <strong>Vorteile:</strong> gute Defaults, Konsistenz, OSS, Doku.
          </li>
          <li className="fragment">
            <strong>Nachteile:</strong> Styling nativ. Elemente, Kontraste/Fokus
            anpassen, interne Komplexität, Bundle‑Größe.
          </li>
        </ul>
      </section>

      {/* 8. Testing & Evaluation */}
      <section>
        <h2>8. Testing & Evaluation</h2>
        <ul>
          <li className="fragment">
            Kontinuierliche Tests während der Entwicklung.
          </li>
          <li className="fragment">
            Tools: axe DevTools & WAVE – am Ende keine gemeldeten Fehler.
          </li>
          <li className="fragment">
            Manuell: Tastatur‑Navigation, Fokuszustände, Screenreader.
          </li>
          <li className="fragment">
            Besonders kritisch: Account‑Dropdown, Helper‑Texte
            (ARIA‑Verknüpfungen).
          </li>
        </ul>
      </section>

      {/* 9. Fazit & Ausblick */}
      <section>
        <h2>9. Fazit</h2>
        <ul>
          <li className="fragment">
            Solide Wissensbasis zu BFSG, EAA 2019/882, WCAG&nbsp;2.1.
          </li>
          <li className="fragment">
            Häufige Fehler: Kontraste, Fokus, Name/Rolle/Wert.
          </li>
          <li className="fragment">
            Prototyp mit React (Next.js) & MUI; externe Libs auf A11y prüfen.
          </li>
        </ul>
      </section>

      <section>
        <h2>Kritik & Ausblick</h2>
        <ul>
          <li className="fragment">
            Besseres Progressive Enhancement (Content‑First, ohne JS
            zugänglich).
          </li>
          <li className="fragment">
            AA erfüllt; AAA teilweise – Potential für Vollumsetzung.
          </li>
          <li className="fragment">
            Nächster Schritt: Tests mit echten Nutzer:innen mit Behinderungen.
          </li>
          <li className="fragment">
            Langfristig: reale Nutzungskontexte & vollständige AAA‑Kriterien.
          </li>
        </ul>
      </section>

      <section>
        <h2>Kernbotschaft</h2>
        <ul>
          <li className="fragment">
            Barrierefreiheit ist ein <strong>Prozess</strong>, kein Zustand.
          </li>
          <li className="fragment">
            Technik hilft – entscheidend ist die <strong>Denkweise</strong>.
          </li>
          <li className="fragment">
            A11y verbessert UX für alle; von Anfang an mitdenken.
          </li>
          <li className="fragment">Betroffene Menschen aktiv einbeziehen.</li>
        </ul>
      </section>

      {/* Schluss */}
      <section data-background="#0b1220" data-background-transition="fade">
        <h2>Vielen Dank!</h2>
        <p>Fragen?</p>
      </section>
    </>
  );
}
