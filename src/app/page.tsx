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

const contactOptions = [
  {
    label: "Erstgespräch buchen",
    detail: "Platzhalter für Buchungslink",
    href: "#",
  },
  {
    label: "hello@recura-placeholder.de",
    detail: "E-Mail",
    href: "mailto:hello@recura-placeholder.de",
  },
  {
    label: "Kontaktformular",
    detail: "Antwortkanal wird später produktiv angebunden",
    href: "#kontakt",
  },
];

export default function Home() {
  return (
    <main className="pb-20">
      <section className="relative overflow-hidden px-5 pt-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.4rem] border border-[var(--line)] bg-[var(--card)] shadow-[var(--shadow)]">
          <div className="relative overflow-hidden rounded-[2.4rem] px-6 pb-18 pt-5 sm:px-8 lg:px-10">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98),_rgba(248,250,249,0.98))]" />
            <div className="absolute inset-x-0 bottom-0 h-[78%] opacity-95">
              <Image
                src="/recura-assets/background-reference.jpg"
                alt="Abstrakte Prozessvisualisierung im Hintergrund"
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[72%] bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(255,255,255,0.12)_28%,_rgba(255,255,255,0)_44%)]" />

            <div className="relative z-10">
              <header className="flex flex-col gap-5 rounded-[1.8rem] border border-[rgba(15,34,48,0.06)] bg-white/84 px-5 py-4 shadow-[0_10px_24px_rgba(15,34,48,0.04)] backdrop-blur lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 items-center overflow-hidden rounded-[1rem] bg-white">
                    <Image
                      src="/recura-assets/recura-logo.jpg"
                      alt="Recura Logo"
                      width={160}
                      height={48}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                </div>

                <nav className="flex flex-wrap items-center gap-5 text-sm text-[var(--muted-foreground)]">
                  {navigation.map((item) => (
                    <a key={item.href} href={item.href} className="transition hover:text-[var(--foreground)] hover:opacity-100">
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="#kontakt"
                    className="rounded-[0.95rem] bg-[var(--accent)] px-5 py-3 font-medium text-white shadow-[0_14px_28px_rgba(47,111,115,0.24)] transition hover:bg-[var(--accent-strong)]"
                  >
                    Erstgespräch vereinbaren →
                  </a>
                </nav>
              </header>

              <div className="relative mx-auto flex min-h-[760px] max-w-4xl flex-col items-center justify-center px-4 pb-8 pt-18 text-center sm:pt-24 lg:min-h-[860px]">
                <p className="text-sm font-medium uppercase tracking-[0.32em] text-[var(--accent)]">
                  RECURA PROCESS AUTOMATION
                </p>
                <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.07em] text-[var(--hero-title)] sm:text-6xl lg:text-[5.4rem]">
                  KI-gestützte Automatisierung für Büroprozesse im Mittelstand.
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)] sm:text-[1.24rem]">
                  Wir analysieren, automatisieren und optimieren administrative Prozesse, pragmatisch, sicher und messbar.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                  <a
                    href="#kontakt"
                    className="rounded-[1rem] bg-[var(--accent)] px-7 py-4 text-center text-base font-medium text-white shadow-[0_16px_32px_rgba(47,111,115,0.24)] transition hover:bg-[var(--accent-strong)]"
                  >
                    Erstgespräch vereinbaren →
                  </a>
                  <a
                    href="#leistungen"
                    className="rounded-[1rem] border border-[rgba(15,34,48,0.18)] bg-white/92 px-7 py-4 text-center text-base font-medium text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    Leistungen ansehen →
                  </a>
                </div>

                <div className="mt-8 inline-flex items-center rounded-full border border-[rgba(15,34,48,0.08)] bg-white/88 px-4 py-2 text-sm text-[var(--muted-foreground)] shadow-[0_10px_22px_rgba(15,34,48,0.04)] backdrop-blur">
                  Düsseldorf / Mönchengladbach / NRW
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[58%] lg:block" aria-hidden>
                  <div className="absolute left-[6%] top-[14%] flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-[rgba(47,111,115,0.92)] text-white shadow-[0_18px_38px_rgba(47,111,115,0.22)]">
                    ▥
                  </div>
                  <div className="absolute left-[18%] bottom-[14%] flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-[rgba(18,49,86,0.96)] text-white shadow-[0_18px_38px_rgba(18,49,86,0.2)]">
                    ▤
                  </div>
                  <div className="absolute right-[20%] top-[24%] flex h-14 w-14 items-center justify-center rounded-full border border-white/80 bg-white/95 text-[var(--accent)] shadow-[0_16px_32px_rgba(15,34,48,0.12)]">
                    ○
                  </div>
                  <div className="absolute right-[11%] top-[47%] flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-[rgba(18,49,86,0.96)] text-white shadow-[0_18px_38px_rgba(18,49,86,0.2)]">
                    ▤
                  </div>
                  <div className="absolute right-[16%] bottom-[8%] flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-[rgba(196,229,218,0.95)] text-[var(--accent)] shadow-[0_18px_38px_rgba(47,111,115,0.12)]">
                    ⚙
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
                className="rounded-[2.1rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_18px_50px_rgba(22,44,56,0.05)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(22,44,56,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-sm font-semibold text-[var(--accent-strong)]">
                    0{index + 1}
                  </span>
                  <span className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">{service.eyebrow}</span>
                </div>
                <div className="mt-5 flex gap-2">
                  <span className="h-2.5 w-16 rounded-full bg-[var(--accent)]" />
                  <span className="h-2.5 w-8 rounded-full bg-[var(--accent-soft)]" />
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
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  "Workflow-Automatisierung",
                  "Interne KI-Assistenten",
                  "Kommunikationsunterstützung",
                ].map((item) => (
                  <div key={item} className="rounded-[1.35rem] border border-[var(--line)] bg-[var(--card-strong)] px-4 py-4 text-sm font-medium text-[var(--foreground)]">
                    {item}
                  </div>
                ))}
              </div>
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
                  className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--card)] p-5 shadow-[0_14px_40px_rgba(22,44,56,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(22,44,56,0.08)]"
                >
                  <div className="flex h-36 items-end rounded-[1.4rem] bg-[linear-gradient(135deg,_rgba(47,111,115,0.18),_rgba(236,231,223,0.76))] p-4">
                    <div className="rounded-full bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.16em] text-[var(--accent)] backdrop-blur">
                      Team
                    </div>
                  </div>
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

          <div className="mt-8 rounded-[1.85rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_16px_36px_rgba(22,44,56,0.04)]">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Unser Anspruch</p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-[var(--muted-foreground)]">
              Technologie ist für uns kein Selbstzweck. Gute Automatisierung reduziert operative Last, bleibt für Teams nachvollziehbar und lässt sich sauber in bestehende Arbeitsweisen integrieren.
            </p>
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
              <article key={item.step} className="rounded-[1.55rem] border border-[var(--line)] bg-white/90 p-5 backdrop-blur transition hover:-translate-y-1">
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
                {contactOptions.map((option, index) => (
                  <a
                    key={option.label}
                    href={option.href}
                    className={`flex items-center justify-between rounded-[1.4rem] px-5 py-4 transition ${
                      index === 0
                        ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-strong)]"
                        : "border border-[var(--line)] text-[var(--foreground)] hover:border-[var(--accent)]"
                    }`}
                  >
                    <span>
                      <span className={`block text-sm ${index === 0 ? "opacity-80" : "text-[var(--muted-foreground)]"}`}>
                        {option.detail}
                      </span>
                      <span className="block text-base font-medium">{option.label}</span>
                    </span>
                    <span aria-hidden>{index === 0 ? "↗" : "→"}</span>
                  </a>
                ))}
              </div>
            </div>

            <form className="grid gap-4 rounded-[1.8rem] border border-[var(--line)] bg-[var(--card-strong)] p-5 shadow-[0_16px_34px_rgba(22,44,56,0.04)] sm:grid-cols-2">
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
                  className="rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white shadow-[0_14px_26px_rgba(15,34,48,0.18)] transition hover:opacity-92"
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
            <a href="#leistungen" className="transition hover:text-[var(--foreground)]">
              Leistungen
            </a>
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
