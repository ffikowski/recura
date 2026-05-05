import Image from "next/image";

const navigation = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

const services = [
  {
    title: "Microsoft-Workflows & Excel-Automatisierung",
    eyebrow: "Prozessautomatisierung",
    text: "Wiederkehrende Arbeitsschritte in Microsoft 365, Excel und internen Tools sauber automatisieren, statt sie Woche für Woche manuell zu wiederholen.",
    bullets: [
      "Freigaben, Übergaben und Reporting reduzieren",
      "Excel-Prozesse stabil in Workflows überführen",
      "Saubere Dokumentation für operative Teams",
    ],
    result: "Weniger manuelle Schritte, weniger Fehler, mehr Verlässlichkeit im Tagesgeschäft.",
  },
  {
    title: "Interne Daten per KI-Assistent nutzbar machen",
    eyebrow: "Wissenssysteme",
    text: "Wissen aus Dokumenten, Tabellen und Prozessen so verfügbar machen, dass Teams schneller Antworten bekommen und weniger Suchaufwand haben.",
    bullets: [
      "Interne Wissensquellen strukturiert anbinden",
      "Antworten aus Richtlinien, PDFs und Datenbanken",
      "Sicherer Zugriff für die richtigen Teams",
    ],
    result: "Weniger Reibung im Alltag und schnellere Entscheidungen auf Basis Ihrer vorhandenen Daten.",
  },
  {
    title: "Semi-automatisierte Kommunikation",
    eyebrow: "Kommunikation",
    text: "Eingehende Anfragen, E-Mails und Standardkommunikation vorbereiten, strukturieren und an den richtigen Stellen intelligent unterstützen.",
    bullets: [
      "Anfragen vorklassifizieren und vorsortieren",
      "Antwortentwürfe und Vorlagen erzeugen",
      "Menschliche Freigabe an den kritischen Punkten",
    ],
    result: "Mehr Geschwindigkeit im Kundenkontakt, ohne Kontrolle oder Qualität aufzugeben.",
  },
];

const team = [
  {
    name: "Felix Fikowski",
    role: "Strategie, Automatisierung, Produkt",
    text: "Verbindet operative Prozesssicht mit technischer Umsetzung und sorgt dafür, dass Lösungen im Alltag wirklich getragen werden.",
  },
  {
    name: "Tobias Paschen",
    role: "Prozesse, Umsetzung, Integration",
    text: "Fokussiert auf klare Systemlogik, pragmatische Einführung und robuste Automatisierungen für reale Teams.",
  },
  {
    name: "Julio Cruz",
    role: "Technologie, KI-Systeme, Architektur",
    text: "Bringt Daten, Assistenten und Tooling so zusammen, dass moderne KI praktisch, verlässlich und wirtschaftlich einsetzbar wird.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Erstgespräch",
    text: "Wir verstehen Ziele, Engpässe und den konkreten operativen Kontext.",
  },
  {
    step: "02",
    title: "Analyse",
    text: "Bestehende Abläufe, Datenquellen und mögliche Automatisierungshebel werden gemeinsam geprüft.",
  },
  {
    step: "03",
    title: "Lösungskonzept",
    text: "Wir definieren eine pragmatische Zielarchitektur mit klaren Prioritäten und realistischem Scope.",
  },
  {
    step: "04",
    title: "Umsetzung",
    text: "Workflows, Assistenten und Schnittstellen werden mit Fokus auf Nutzbarkeit und Robustheit gebaut.",
  },
  {
    step: "05",
    title: "Go-live & Verbesserung",
    text: "Nach dem Start schärfen wir das Setup weiter und entwickeln es entlang der echten Nutzung fort.",
  },
];

const trustPoints = [
  "Praxisnah statt experimentell",
  "Saubere Freigaben und Verantwortlichkeiten",
  "Technik, Prozesse und Teams zusammengedacht",
];

export default function Home() {
  return (
    <main className="pb-20">
      <section className="relative overflow-hidden px-5 pt-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-[var(--line)] bg-[var(--card)] shadow-[var(--shadow)]">
          <div className="relative overflow-hidden rounded-[2.4rem] px-6 pb-16 pt-5 sm:px-8 lg:px-10">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(47,111,115,0.22),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(236,231,223,0.88),_transparent_40%),linear-gradient(135deg,_rgba(255,255,255,0.98),_rgba(243,247,246,0.96))]" />
              <div className="absolute inset-y-0 right-0 hidden w-[44%] overflow-hidden lg:block">
                <Image
                  src="/recura-assets/background-reference.jpg"
                  alt="Abstrakte Hintergrundszene für Recura"
                  fill
                  className="object-cover opacity-26"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(255,255,255,0.1),_rgba(245,247,246,0.8))]" />
              </div>
            </div>

            <div className="relative z-10">
              <header className="flex flex-col gap-5 border-b border-[var(--line)] pb-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-[1.2rem] border border-[var(--line)] bg-white shadow-[0_10px_24px_rgba(15,34,48,0.06)]">
                    <Image
                      src="/recura-assets/recura-logo.jpg"
                      alt="Recura Logo"
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted-foreground)]">Recura</p>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">KI-Automatisierung für den Mittelstand</p>
                  </div>
                </div>

                <nav className="flex flex-wrap items-center gap-5 text-sm text-[var(--muted-foreground)]">
                  {navigation.map((item) => (
                    <a key={item.href} href={item.href} className="transition hover:text-[var(--foreground)]">
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#kontakt"
                    className="rounded-full bg-[var(--accent)] px-5 py-3 font-medium text-white transition hover:bg-[var(--accent-strong)]"
                  >
                    Erstgespräch vereinbaren
                  </a>
                </nav>
              </header>

              <div className="grid gap-12 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pt-14">
                <div>
                  <div className="inline-flex items-center rounded-full border border-[var(--line)] bg-white/85 px-4 py-2 text-sm text-[var(--muted-foreground)] backdrop-blur">
                    Standort Deutschland · pragmatische KI-Systeme für operative Teams
                  </div>
                  <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl lg:text-[4.25rem]">
                    Wir automatisieren Prozesse dort, wo Unternehmen im Alltag Zeit verlieren.
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-xl">
                    Recura entwickelt umsetzbare KI- und Automatisierungslösungen für Unternehmen, die operative Abläufe vereinfachen, Wissen nutzbar machen und Kommunikation intelligent unterstützen.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <a
                      href="#kontakt"
                      className="rounded-full bg-[var(--accent)] px-6 py-4 text-center text-base font-medium text-white transition hover:bg-[var(--accent-strong)]"
                    >
                      Erstgespräch vereinbaren
                    </a>
                    <a
                      href="#leistungen"
                      className="rounded-full border border-[var(--line)] bg-white px-6 py-4 text-center text-base font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                    >
                      Leistungen ansehen
                    </a>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {trustPoints.map((point) => (
                      <div key={point} className="rounded-[1.55rem] border border-[var(--line)] bg-white/85 p-4 backdrop-blur">
                        <p className="text-sm font-semibold text-[var(--foreground)]">{point}</p>
                        <div className="mt-4 h-1.5 w-12 rounded-full bg-[var(--accent-soft)]" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2.1rem] border border-[var(--line)] bg-white/88 p-4 shadow-[0_24px_60px_rgba(22,44,56,0.1)] backdrop-blur">
                  <div className="overflow-hidden rounded-[1.7rem] border border-[var(--line)]">
                    <Image
                      src="/recura-assets/hero-mockup.jpg"
                      alt="Recura Hero Mockup"
                      width={1280}
                      height={960}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="px-5 pt-18 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Leistungen</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.6rem]">
              Automatisierung, Assistenten und operative Entlastung, nah an echten Prozessen.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted-foreground)]">
              Wir bauen keine abstrakten KI-Demos, sondern Lösungen, die wiederkehrende Arbeit reduzieren und Teams im Alltag messbar entlasten.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-[2.1rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_18px_50px_rgba(22,44,56,0.05)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent-strong)]">
                    0{index + 1}
                  </span>
                  <span className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">{service.eyebrow}</span>
                </div>
                <h3 className="mt-6 text-[1.65rem] font-semibold leading-tight tracking-[-0.03em] text-[var(--foreground)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)]">{service.text}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-[var(--foreground)]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-[1.5rem] border border-[var(--line)] bg-[var(--card-strong)] p-4 text-sm leading-6 text-[var(--muted-foreground)]">
                  <span className="font-semibold text-[var(--foreground)]">Ergebnis:</span> {service.result}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="px-5 pt-18 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.15rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Use Cases</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.6rem]">
                Drei typische Einsatzfelder, die sich schnell in operative Entlastung übersetzen lassen.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--muted-foreground)]">
                Besonders dort, wo viele manuelle Übergaben, Suchaufwand oder Standardkommunikation entstehen, kann eine saubere Automatisierung früh Mehrwert liefern.
              </p>
              <div className="mt-8 rounded-[1.6rem] border border-[var(--line)] bg-[var(--card-strong)] p-5 text-sm leading-7 text-[var(--muted-foreground)]">
                Mit Recura bleiben Prozesse nachvollziehbar. Kritische Punkte erhalten klare Freigaben, während Routinen im Hintergrund effizienter laufen.
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.85rem] border border-[var(--line)] bg-white shadow-[0_14px_34px_rgba(22,44,56,0.06)]">
              <Image
                src="/recura-assets/use-cases-mockup.jpg"
                alt="Mockup für die Use-Cases von Recura"
                width={1280}
                height={853}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="px-5 pt-18 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Über uns</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.6rem]">
                Ein Team mit Fokus auf pragmatische Systeme statt technischer Schaufensterprojekte.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--muted-foreground)]">
                Wir arbeiten an der Schnittstelle von Prozessen, Daten und Umsetzung. Unser Anspruch ist, dass Lösungen nicht nur gut aussehen, sondern im Alltag genutzt werden.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--foreground)]">
                {[
                  "KI-Assistenten",
                  "Microsoft-Automatisierung",
                  "Daten & Wissenssysteme",
                  "Operative Umsetzung",
                ].map((tag) => (
                  <span key={tag} className="rounded-full border border-[var(--line)] bg-white px-4 py-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--card)] p-5 shadow-[0_14px_40px_rgba(22,44,56,0.05)]"
                >
                  <div className="h-36 rounded-[1.4rem] bg-[linear-gradient(135deg,_rgba(47,111,115,0.18),_rgba(236,231,223,0.76))]" />
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">{member.name}</h3>
                  <p className="mt-2 text-sm font-medium text-[var(--accent)]">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">{member.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.85rem] border border-[var(--line)] bg-white shadow-[0_16px_36px_rgba(22,44,56,0.06)]">
            <Image
              src="/recura-assets/about-mockup.jpg"
              alt="Mockup für den Über-uns-Bereich von Recura"
              width={1280}
              height={720}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5 pt-18 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.15rem] border border-[var(--line)] bg-[linear-gradient(135deg,_rgba(47,111,115,0.1),_rgba(255,255,255,0.96))] p-6 shadow-[var(--shadow)] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Unser Vorgehen</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.6rem]">
                Klarer Ablauf von der ersten Analyse bis zum produktiven Einsatz.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--muted-foreground)]">
                Wir arbeiten strukturiert, damit Anforderungen, Umsetzung und Einführung nicht auseinanderlaufen. So entstehen Lösungen, die technisch sauber und operativ tragfähig sind.
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.85rem] border border-[var(--line)] bg-white shadow-[0_14px_34px_rgba(22,44,56,0.06)]">
              <Image
                src="/recura-assets/process-mockup.jpg"
                alt="Mockup für den Vorgehensbereich von Recura"
                width={1280}
                height={720}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {processSteps.map((item) => (
              <article key={item.step} className="rounded-[1.55rem] border border-[var(--line)] bg-white/90 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-[var(--accent)]">{item.step}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="px-5 pt-18 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.15rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Kontakt</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--foreground)] sm:text-[2.6rem]">
                Lassen Sie uns gemeinsam prüfen, wo Automatisierung für Ihr Unternehmen sinnvoll ansetzt.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--muted-foreground)]">
                Für den ersten Schritt reichen meist schon ein Zielbild, ein konkreter Engpass oder ein wiederkehrender Prozess, der heute zu viel Zeit kostet.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="#"
                  className="flex items-center justify-between rounded-[1.4rem] bg-[var(--accent)] px-5 py-4 text-white transition hover:bg-[var(--accent-strong)]"
                >
                  <span>
                    <span className="block text-sm opacity-80">Platzhalter</span>
                    <span className="block text-base font-medium">Erstgespräch buchen</span>
                  </span>
                  <span aria-hidden>↗</span>
                </a>
                <a
                  href="mailto:hello@recura-placeholder.de"
                  className="flex items-center justify-between rounded-[1.4rem] border border-[var(--line)] px-5 py-4 text-[var(--foreground)] transition hover:border-[var(--accent)]"
                >
                  <span>
                    <span className="block text-sm text-[var(--muted-foreground)]">E-Mail</span>
                    <span className="block text-base font-medium">hello@recura-placeholder.de</span>
                  </span>
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <form className="grid gap-4 rounded-[1.8rem] border border-[var(--line)] bg-[var(--card-strong)] p-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-[var(--muted-foreground)]">
                Name
                <input
                  className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
                  placeholder="Ihr Name"
                />
              </label>
              <label className="grid gap-2 text-sm text-[var(--muted-foreground)]">
                Unternehmen
                <input
                  className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
                  placeholder="Unternehmen"
                />
              </label>
              <label className="grid gap-2 text-sm text-[var(--muted-foreground)] sm:col-span-2">
                E-Mail
                <input
                  className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
                  placeholder="name@unternehmen.de"
                />
              </label>
              <label className="grid gap-2 text-sm text-[var(--muted-foreground)] sm:col-span-2">
                Worum geht es?
                <textarea
                  className="min-h-36 rounded-2xl border border-[var(--line)] bg-white px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
                  placeholder="Beschreiben Sie kurz Ihren Prozess, Ihr Ziel oder Ihre aktuelle Herausforderung."
                />
              </label>
              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                  Formular-Backend ist noch ein Platzhalter und wird später an einen realen Kanal angebunden.
                </p>
                <button
                  type="button"
                  className="rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-92"
                >
                  Anfrage senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="px-5 pt-18 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[2rem] border border-[var(--line)] bg-[var(--card)] px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-sm font-semibold text-[var(--foreground)]">Recura</p>
            <p className="mt-2 text-sm text-[var(--muted-foreground)]">
              KI-Automatisierung für den Mittelstand, pragmatisch geplant und sauber umgesetzt.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-[var(--muted-foreground)]">
            <a href="#kontakt" className="transition hover:text-[var(--foreground)]">
              Kontakt
            </a>
            <a href="/impressum" className="transition hover:text-[var(--foreground)]">
              Impressum
            </a>
            <a href="/datenschutz" className="transition hover:text-[var(--foreground)]">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
