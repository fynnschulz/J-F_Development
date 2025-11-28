export default function Impressum() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-gray-200">
      <h1 className="text-3xl font-bold mb-8 text-blue-400">Impressum</h1>
      <div className="space-y-6 text-sm">
        <div>
          <strong>J&F Development GbR</strong><br />
          Vertreten durch:<br />
          <ul className="list-disc ml-6">
            <li>Fynn - Luca Schulz, geschäftsführender Gesellschafter</li>
            <li>Julian Stosse, geschäftsführender Gesellschafter</li>
          </ul>
        </div>
        <div>
          <strong>Anschrift:</strong><br />
          In der Acht 44<br />
          66333 Völklingen<br />
          Deutschland
        </div>
        <div>
          <strong>Kontakt:</strong><br />
          Telefon: +49 15168488999<br />
          E-Mail: <a href="mailto:helpjfdevelopment@gmail.com" className="text-blue-400 underline">helpjfdevelopment@gmail.com</a><br />
          Website: <a href="https://j-f-development.vercel.app" className="text-blue-400 underline">https://j-f-development.vercel.app</a><br />
        </div>
        <div>Keine Umsatzsteuer-ID vorhanden.</div>
        <div>
          <strong>Verantwortlich für den Inhalt nach §55 Abs. 2 RStV</strong><br />
          Fynn - Luca Schulz<br />
          Heiligenbornstraße 7<br />
          66359 Bous
        </div>
        <div>
          <strong>EU-Streitschlichtung</strong><br />
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
          <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-400 underline">https://ec.europa.eu/consumers/odr/</a><br />
          Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </div>
        <div>
          <strong>Haftungsausschluss (Kurzversion — rechtssicher und üblich)</strong><br />
          <strong>Haftung für Inhalte</strong><br />
          Als Diensteanbieter sind wir gemäß §7 Abs.1 TMG für eigene Inhalte auf diesen Seiten verantwortlich. Für die Richtigkeit, Vollständigkeit und Aktualität übernehmen wir jedoch keine Gewähr.<br /><br />
          <strong>Haftung für Links</strong><br />
          Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese Inhalte übernehmen wir keine Gewähr. Bei Bekanntwerden von Rechtsverletzungen entfernen wir solche Links umgehend.
        </div>
        <div>
          <strong>Urheberrecht</strong><br />
          Die durch uns erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Vervielfältigung oder Weiterverarbeitung außerhalb der Grenzen des Urheberrechts bedürfen unserer schriftlichen Zustimmung.
        </div>
      </div>
    </main>
  );
}
