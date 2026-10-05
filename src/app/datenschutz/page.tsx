import React from "react";

export const metadata = {
  title: "Datenschutzerklärung | Vivolto GmbH",
  description: "Datenschutzerklärung der Vivolto GmbH",
  alternates: { canonical: "/datenschutz" },
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Allgemeine Hinweise
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
              Anliegen.
            </p>

            <p>
              Die nachfolgenden Informationen geben Ihnen einen Überblick darüber,
              welche personenbezogenen Daten beim Besuch unserer Website verarbeitet
              werden und zu welchem Zweck dies geschieht.
            </p>

            <p>
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
              identifiziert werden können.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Verantwortliche Stelle
          </h2>

          <div className="space-y-2 text-gray-700">
            <p className="font-semibold">Vivolto GmbH</p>
            <p>Ottostraße 14</p>
            <p>50170 Kerpen</p>
            <p>Deutschland</p>
            <p>
              <span className="font-semibold">E-Mail:</span>{" "}
              <a
                href="mailto:info@vivolto.de"
                className="text-blue-600 hover:underline"
              >
                info@vivolto.de
              </a>
            </p>
          </div>

          <p className="mt-4 text-gray-700 text-sm italic">
            Verantwortliche Stelle ist die juristische Person, die über Zwecke
            und Mittel der Verarbeitung personenbezogener Daten entscheidet.
          </p>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Hosting</h2>

          <div className="space-y-4 text-gray-700">
            <p>Unsere Website wird bei folgendem Anbieter gehostet:</p>

            <div className="bg-gray-50 p-4 rounded">
              <p className="font-semibold">Vercel Inc.</p>
              <p>440 N Barranca Ave #4133</p>
              <p>Covina, CA 91723</p>
              <p>USA</p>
            </div>

            <p>
              Beim Aufruf der Website werden durch den Hosting-Anbieter automatisch
              sogenannte Server-Logfiles erfasst. Hierbei handelt es sich insbesondere
              um:
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Browsertyp und -version</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Hostname des zugreifenden Rechners</li>
            </ul>

            <p>
              Diese Daten sind technisch erforderlich, um die Website bereitzustellen
              und die Systemsicherheit zu gewährleisten.
            </p>

            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an sicherem und stabilem Betrieb der Website).
            </p>

            <p>
              Sofern personenbezogene Daten in die USA übertragen werden, erfolgt
              dies auf Grundlage des Angemessenheitsbeschlusses der EU-Kommission
              zum EU-US Data Privacy Framework (Art. 45 DSGVO), unter dem Vercel Inc.
              zertifiziert ist.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Kontaktaufnahme per E-Mail
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Wenn Sie uns per E-Mail kontaktieren (z. B. über die Schaltfläche
              „Projekt anfragen“, die Ihr E-Mail-Programm öffnet), werden Ihre
              Angaben inklusive der von Ihnen angegebenen Kontaktdaten zum Zwecke
              der Bearbeitung Ihrer Anfrage verarbeitet.
            </p>

            <p>
              <span className="font-semibold">Rechtsgrundlage ist:</span>
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher
                Maßnahmen), sofern Ihre Anfrage auf einen Vertragsschluss abzielt
              </li>
              <li>
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter
                Bearbeitung von Anfragen)
              </li>
            </ul>

            <p>
              Die Daten werden nicht ohne Ihre Einwilligung an Dritte weitergegeben.
            </p>

            <p>
              Die gespeicherten Daten verbleiben bei uns, bis der Zweck der
              Verarbeitung entfällt oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Wetteranzeige (Open-Meteo)
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Auf der Startseite zeigen wir das aktuelle Wetter an. Die Wetterdaten
              werden von Ihrem Browser direkt beim Dienst Open-Meteo
              (https://open-meteo.com) abgerufen. Dabei wird technisch bedingt Ihre
              IP-Adresse an Open-Meteo übermittelt.
            </p>

            <p>
              Ihr Browser fragt Sie, ob die Website Ihren Standort verwenden darf.
              Nur wenn Sie zustimmen, werden die ungefähren Koordinaten Ihres
              Standorts an Open-Meteo übermittelt, um das Wetter für Ihre Region
              anzuzeigen. Lehnen Sie ab, wird das Wetter für Köln angezeigt. Wir
              selbst speichern Ihren Standort nicht.
            </p>

            <p>
              Rechtsgrundlage für die Standortabfrage ist Ihre Einwilligung
              (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG), die Sie jederzeit in
              den Einstellungen Ihres Browsers widerrufen können. Rechtsgrundlage für
              die Übermittlung der IP-Adresse ist unser berechtigtes Interesse an
              einer ansprechenden Darstellung der Website (Art. 6 Abs. 1 lit. f
              DSGVO).
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Cookies und lokale Speicherung
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Unsere Website setzt keine Tracking- oder Marketing-Cookies ein.
            </p>

            <p>
              Ihre Auswahl der Farbdarstellung (Design) wird im lokalen Speicher
              Ihres Browsers (Local Storage) abgelegt, damit sie beim nächsten Besuch
              erhalten bleibt. Diese Information verlässt Ihr Gerät nicht. Die
              Speicherung ist für den von Ihnen gewünschten Dienst unbedingt
              erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG).
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Ihre Rechte
          </h2>

          <p className="mb-4 text-gray-700">Sie haben jederzeit das Recht auf:</p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
            <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
            <li>Berichtigung unrichtiger Daten</li>
            <li>Löschung Ihrer Daten</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung</li>
            <li>Widerruf erteilter Einwilligungen</li>
          </ul>

          <p className="text-gray-700">
            Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an uns.
          </p>

          <p className="mt-4 text-gray-700">
            Sie haben zudem das Recht, sich bei einer Datenschutzaufsichtsbehörde
            zu beschweren (Art. 77 DSGVO). Für uns zuständig ist:
          </p>

          <div className="mt-2 bg-gray-50 p-4 rounded text-gray-700">
            <p className="font-semibold">
              Landesbeauftragte für Datenschutz und Informationsfreiheit
              Nordrhein-Westfalen
            </p>
            <p>Kavalleriestraße 2–4</p>
            <p>40213 Düsseldorf</p>
          </div>
        </section>

        <hr className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. SSL- bzw. TLS-Verschlüsselung
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung.
            </p>

            <p>
              Eine verschlüsselte Verbindung erkennen Sie an der Adresszeile Ihres
              Browsers („https://").
            </p>
          </div>
        </section>

        <hr className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            9. Widerspruch gegen Werbe-E-Mails
          </h2>

          <p className="text-gray-700">
            Der Nutzung der im Impressum veröffentlichten Kontaktdaten zur
            Übersendung von nicht ausdrücklich angeforderter Werbung wird hiermit
            widersprochen.
          </p>
        </section>

        <hr className="my-8" />

        <p className="text-gray-600 text-sm">Stand: Oktober 2026</p>
      </div>
    </div>
  );
}
