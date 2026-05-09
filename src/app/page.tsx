import Image from "next/image";
import { Lock, ArrowRight, Check, BarChart3, Shield, UserCheck, MapPin, Brain, Sparkles, Settings, Users, Heart, Target } from 'lucide-react';

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

const founders = [
  {
    name: "Felix Filkowski",
    education: ["M.Sc. Data Science,", "TU Dortmund"],
    focus: ["Daten, KI-Lösungen,", "technische Umsetzung"],
    badge: "Co-Founder",
    variant: 1,
  },
  {
    name: "Tobias Paschen",
    education: ["M.Sc. Economics,", "Universität zu Köln"],
    focus: ["Prozesse, Wirtschaftlichkeit,", "Geschäftslogik"],
    badge: "Co-Founder",
    variant: 2,
  },
  {
    name: "Julio Cruz",
    education: ["M.Sc.", "Wirtschaftsingenieurwesen"],
    focus: ["Vertrieb, Strategie,", "Marktansprache"],
    badge: "Co-Founder",
    variant: 3,
  },
];

const capabilities = [
  { label: 'Düsseldorf / Mönchengladbach / NRW', icon: MapPin },
  { label: 'Daten & KI', icon: Brain },
  { label: 'Prozessinnovation', icon: Sparkles },
  { label: 'Technische Umsetzung', icon: Settings },
  { label: 'Strategie & Vertrieb', icon: Users },
];

const useCases = [
  {
    number: '01',
    title: 'Microsoft-Workflows & Excel-Automatisierung',
    description:
      'Automatisieren Sie wiederkehrende Aufgaben in Microsoft 365, Excel, Outlook, Teams und SharePoint.',
    bullets: [
      'Excel-Reports automatisch aktualisieren',
      'Freigaben über Teams oder Outlook steuern',
      'SharePoint-Listen und Dokumente verbinden',
    ],
    resultText: 'Weniger manuelle Arbeit, klarere Abläufe, weniger Fehler.',
    graphic: 'microsoft',
    resultIcon: 'BarChart3',
  },
  {
    number: '02',
    title: 'Interne Daten per KI-Assistent nutzbar machen',
    description:
      'Wir machen strukturierte Daten und interne Informationen sensibel, kontrolliert und mit klaren Zugriffsrechten per KI zugänglich.',
    bullets: [
      'Chat mit Datenbanken oder Tabellen',
      'Natürliche Fragen statt komplexer SQL-Reports',
      'Antworten mit Quellen, Filtern und Berechtigungen',
    ],
    resultText: 'Schneller Zugriff auf relevante Informationen ohne manuelle Auswertung.',
    graphic: 'data-ai',
    resultIcon: 'Shield',
  },
  {
    number: '03',
    title: 'Semi-automatisierte Kommunikation für E-Mail und Kundenanfragen',
    description:
      'E-Mails und Anfragen werden automatisch klassifiziert, vorbereitet und strukturiert bearbeitet.',
    bullets: [
      'E-Mails klassifizieren und priorisieren',
      'Informationen aus Nachrichten extrahieren',
      'Antwortvorschläge und Vorlagen erzeugen',
    ],
    resultText:
      'Schnellere Bearbeitung, konsistente Kommunikation — die finale Freigabe bleibt beim Menschen.',
    graphic: 'email',
    resultIcon: 'UserCheck',
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

function ProcessGraphic({ type }: { type: 'microsoft' | 'data-ai' | 'email' }) {
  if (type === 'microsoft') return <MicrosoftWorkflowGraphic />;
  if (type === 'data-ai') return <InternalDataAIGraphic />;
  return <EmailCommunicationGraphic />;
}

function FounderAvatar({ variant }: { variant: number }) {
  const accent = variant === 1 ? '#60A5FA' : variant === 2 ? '#06B6D4' : '#2563EB';
  const fill = variant === 1 ? '#DFF6FF' : variant === 2 ? '#E0F2FE' : '#E0E7FF';

  return (
    <div className="h-[148px] w-[148px] rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(241,245,249,0.9))] p-3 shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
      <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white shadow-[0_16px_32px_rgba(15,23,42,0.08)]">
        <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
          <circle cx="60" cy="42" r="30" fill="currentColor" fillOpacity="0.08" />
          <path d="M27 74c9-14 29-16 33-16s24 2 33 16" fill="none" stroke={accent} strokeWidth="8" strokeLinecap="round" />
          <circle cx="42" cy="38" r="8" fill={accent} />
          <circle cx="78" cy="38" r="8" fill={accent} />
          <path d="M45 66c3 4 10 6 15 6s12-2 15-6" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" />
          <circle cx="60" cy="60" r="33" fill={fill} />
        </svg>
      </div>
    </div>
  );
}

function MicrosoftWorkflowGraphic() {
  return (
    <div className="relative h-full w-full">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 200">
        <path d="M120 100 C 165 100, 175 100, 220 100" fill="none" stroke="#93c5fd" strokeWidth="3" strokeDasharray="4 8" strokeLinecap="round" />
        <path d="M215 94 L225 100 L215 106" fill="none" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M320 100 C 365 100, 375 100, 420 100" fill="none" stroke="#93c5fd" strokeWidth="3" strokeDasharray="4 8" strokeLinecap="round" />
        <path d="M415 94 L425 100 L415 106" fill="none" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="absolute left-[8%] top-1/2 -translate-y-1/2">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/90 shadow-[0_14px_35px_rgba(15,23,42,0.10)] backdrop-blur-sm">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" fill="#217346"/>
            <text x="12" y="15" textAnchor="middle" fontSize="10" fill="white">X</text>
          </svg>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/90 shadow-[0_14px_35px_rgba(15,23,42,0.10)] backdrop-blur-sm">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l10 10-10 10-10-10L12 2z" fill="#126BFF"/>
          </svg>
        </div>
      </div>
      <div className="absolute right-[7%] top-1/2 -translate-y-1/2 grid grid-cols-2 gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200/70 bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#7B83EB"/>
          </svg>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200/70 bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#0078D4"/>
          </svg>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200/70 bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#0F766E"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

function InternalDataAIGraphic() {
  return (
    <div className="relative h-full w-full">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 200">
        <path d="M120 100 C 165 100, 175 100, 220 100" fill="none" stroke="#93c5fd" strokeWidth="3" strokeDasharray="4 8" strokeLinecap="round" />
        <path d="M215 94 L225 100 L215 106" fill="none" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M320 100 C 365 100, 375 100, 420 100" fill="none" stroke="#93c5fd" strokeWidth="3" strokeDasharray="4 8" strokeLinecap="round" />
        <path d="M415 94 L425 100 L415 106" fill="none" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="absolute left-[8%] top-1/2 -translate-y-1/2">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/90 shadow-[0_14px_35px_rgba(15,23,42,0.10)] backdrop-blur-sm">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" fill="#64748B"/>
            <rect x="5" y="5" width="14" height="2" fill="white"/>
            <rect x="5" y="9" width="14" height="2" fill="white"/>
            <rect x="5" y="13" width="14" height="2" fill="white"/>
          </svg>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-200/70 bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_16px_40px_rgba(37,99,235,0.25)] backdrop-blur-sm">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" fill="white" opacity="0.9"/>
            <path d="M8 12h8M12 8v8" stroke="#126BFF" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="8" cy="8" r="1.5" fill="white"/>
            <circle cx="16" cy="8" r="1.5" fill="white"/>
            <circle cx="8" cy="16" r="1.5" fill="white"/>
          </svg>
        </div>
      </div>
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/90 shadow-[0_14px_35px_rgba(15,23,42,0.10)] backdrop-blur-sm">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" fill="#64748B"/>
            <rect x="5" y="5" width="14" height="2" fill="white"/>
            <rect x="5" y="9" width="14" height="2" fill="white"/>
            <rect x="5" y="13" width="14" height="2" fill="white"/>
          </svg>
          <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l2.09 4.26L19 8.27l-3 2.91 0.71 4.13L12 15.77l-4.71 2.54L9 11.18 6 8.27l4.91-0.01L12 2z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmailCommunicationGraphic() {
  return (
    <div className="relative h-full w-full">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 200">
        <path d="M120 100 C 165 100, 175 100, 220 100" fill="none" stroke="#93c5fd" strokeWidth="3" strokeDasharray="4 8" strokeLinecap="round" />
        <path d="M215 94 L225 100 L215 106" fill="none" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M320 100 C 365 100, 375 100, 420 100" fill="none" stroke="#93c5fd" strokeWidth="3" strokeDasharray="4 8" strokeLinecap="round" />
        <path d="M415 94 L425 100 L415 106" fill="none" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="absolute left-[7%] top-1/2 -translate-y-1/2 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/90 shadow-[0_14px_35px_rgba(15,23,42,0.10)] backdrop-blur-sm">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#64748B"/>
          </svg>
        </div>
        <p className="mt-3 text-xs font-semibold tracking-wide text-slate-700">EINGEHEND</p>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex h-18 w-18 items-center justify-center rounded-full border border-slate-200/70 bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_16px_40px_rgba(37,99,235,0.25)] backdrop-blur-sm">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" fill="white" opacity="0.9"/>
            <path d="M9 12l2 2 4-4" stroke="#126BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="absolute right-[7%] top-1/2 -translate-y-1/2 text-center">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/90 shadow-[0_14px_35px_rgba(15,23,42,0.10)] backdrop-blur-sm">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#10B981"/>
            </svg>
          </div>
          <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white shadow-lg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <p className="mt-3 text-xs font-semibold tracking-wide text-slate-700">AUSGEHEND</p>
      </div>
    </div>
  );
}

function UseCaseCard({ number, title, description, bullets, resultText, graphic, resultIcon }: any) {
  const ResultIcon = resultIcon === 'BarChart3' ? BarChart3 : resultIcon === 'Shield' ? Shield : UserCheck;
  return (
    <article className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/85 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl flex flex-col h-full">
      <div className="absolute left-8 top-8 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/25">
        {number}
      </div>
      <div className="pt-10 flex flex-col h-full">
        <div className="relative mb-8 h-[clamp(150px,12vw,190px)] w-full overflow-hidden rounded-2xl">
          <ProcessGraphic type={graphic} />
        </div>
        <h3 className="text-2xl md:text-[26px] font-semibold leading-tight tracking-tight text-slate-950">
          {title}
        </h3>
        <p className="mt-5 text-base leading-7 text-slate-600">
          {description}
        </p>
        <ul className="mt-7 space-y-3 border-t border-slate-200 pt-6">
          {bullets.map((bullet: string, i: number) => (
            <li key={i} className="flex gap-3 text-base text-slate-700">
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8 flex gap-5 rounded-2xl bg-blue-50/80 p-5 ring-1 ring-blue-100">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center text-blue-600">
            <ResultIcon className="h-6 w-6" />
          </div>
          <p className="text-base leading-6 text-slate-900">
            <span className="font-semibold text-blue-600">Ergebnis:</span><br />
            {resultText}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="relative pb-20 overflow-x-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <Image
          src="/recura-assets/background-reference.jpg"
          alt="Abstrakte Prozessvisualisierung im Hintergrund"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.14),_rgba(248,250,249,0.35)_60%,_rgba(255,255,255,0.55))]" />
        <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
          <div className="absolute left-[8%] top-[18%] flex h-15 w-15 items-center justify-center rounded-full border border-white/80 bg-[rgba(47,111,115,0.94)] text-white shadow-[0_18px_38px_rgba(47,111,115,0.22)]">
            ▥
          </div>
          <div className="absolute left-[22%] bottom-[15%] flex h-15 w-15 items-center justify-center rounded-full border border-white/80 bg-[rgba(18,49,86,0.96)] text-white shadow-[0_18px_38px_rgba(18,49,86,0.2)]">
            ▤
          </div>
          <div className="absolute right-[24%] top-[28%] flex h-13 w-13 items-center justify-center rounded-full border border-white/80 bg-white/96 text-[var(--accent)] shadow-[0_16px_32px_rgba(15,34,48,0.12)]">
            ○
          </div>
          <div className="absolute right-[10%] top-[52%] flex h-15 w-15 items-center justify-center rounded-full border border-white/80 bg-[rgba(18,49,86,0.96)] text-white shadow-[0_18px_38px_rgba(18,49,86,0.2)]">
            ▤
          </div>
          <div className="absolute right-[18%] bottom-[10%] flex h-15 w-15 items-center justify-center rounded-full border border-white/80 bg-[rgba(196,229,218,0.96)] text-[var(--accent)] shadow-[0_18px_38px_rgba(47,111,115,0.12)]">
            ⚙
          </div>
        </div>
      </div>

      <section className="relative min-h-screen px-5 pt-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <header className="mb-10 flex flex-col gap-5 rounded-[1.8rem] border border-[rgba(15,34,48,0.06)] bg-white/84 px-5 py-4 shadow-[0_10px_24px_rgba(15,34,48,0.04)] backdrop-blur lg:flex-row lg:items-center lg:justify-between">
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
                className="rounded-[0.95rem] bg-[var(--accent)] px-5 py-3 font-medium text-white! shadow-[0_14px_28px_rgba(47,111,115,0.24)] transition hover:bg-[var(--accent-strong)] hover:text-white!"
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
                className="rounded-[1rem] bg-[var(--accent)] px-7 py-4 text-center text-base font-medium text-white! shadow-[0_16px_32px_rgba(47,111,115,0.24)] transition hover:bg-[var(--accent-strong)] hover:text-white!"
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

          </div>
        </div>
      </section>

      <section className="relative z-10 py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-[0.28em] text-blue-600 uppercase">
              Lösungsbeispiele
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-950">
              Automatisierung, die im Arbeitsalltag funktioniert.
            </h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg md:text-xl leading-relaxed text-slate-600">
              Wir setzen konkrete Automatisierungslösungen für wiederkehrende Büro- und Verwaltungsprozesse um — pragmatisch, sicher und passend zu Ihrer bestehenden Systemlandschaft.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <Lock className="h-7 w-7" />
              </div>
              <p className="max-w-4xl text-base md:text-lg leading-relaxed text-slate-700">
                <strong className="text-slate-950">Sicherheit & Kontrolle stehen an erster Stelle.</strong>{' '}
                Alle Lösungen werden individuell auf Ihre Anforderungen abgestimmt — mit klaren Berechtigungen, nachvollziehbaren Prozessen und vollständiger Kontrolle über Ihre Daten.
              </p>
            </div>
            <div className="hidden h-16 w-px bg-slate-200 lg:block" />
            <a className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold text-blue-600 hover:text-blue-700">
              Mehr über unser Vorgehen
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="relative z-10 overflow-hidden px-5 pt-24 pb-20 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute left-[3.5vw] top-[28%] hidden h-20 w-20 rounded-full bg-[#2F8C82] opacity-20 shadow-[0_16px_34px_rgba(47,111,115,0.2)] lg:block" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[7vw] top-[18%] hidden h-14 w-14 rounded-full bg-[#2F8C82] opacity-20 shadow-[0_14px_28px_rgba(47,111,115,0.18)] lg:block" aria-hidden="true" />
        <div className="pointer-events-none absolute right-[6.5vw] top-[48%] hidden h-16 w-16 rounded-full bg-[#0C3158] opacity-20 shadow-[0_18px_36px_rgba(15,34,48,0.2)] lg:block" aria-hidden="true" />

        <div className="mx-auto max-w-[1560px]">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#126DFF]">
              ÜBER UNS
            </p>
            <h2 className="mt-6 text-[clamp(40px,4vw,72px)] leading-[1.12] tracking-[-0.03em] font-semibold text-slate-950">
              Aus dem Rheinland. Für Unternehmen,
              <br className="hidden md:inline" />
              die Prozesse einfacher machen wollen.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-[1.65] text-slate-600 sm:text-lg">
              Wir sind ein kleines Gründerteam aus dem Raum Düsseldorf / Mönchengladbach mit Erfahrung in
              Daten, Prozessinnovation und Automatisierung in einem internationalen Unternehmensumfeld.
              Unser Anspruch ist einfach: Wir bauen Automatisierungen, die im Arbeitsalltag wirklich helfen —
              verständlich, wartbar und wirtschaftlich sinnvoll.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {founders.map((founder) => (
              <article
                key={founder.name}
                className="team-card grid min-h-[255px] grid-cols-1 gap-8 rounded-[1rem] border border-slate-200/80 bg-white/90 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] backdrop-blur-lg lg:grid-cols-[150px_1fr]"
              >
                <div className="flex items-center justify-center">
                  <FounderAvatar variant={founder.variant} />
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                      {founder.name}
                    </h3>
                    <div className="team-education text-base leading-7 text-slate-600">
                      {founder.education.map((line, index) => (
                        <span key={index} className="block">
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="h-px w-full bg-slate-200/70" />
                    <div className="flex items-start gap-4 text-slate-700">
                      <Target className="mt-1 h-6 w-6 flex-none text-[#147A7E]" />
                      <div>
                        <p className="text-sm font-semibold text-slate-950">Schwerpunkt:</p>
                        <div className="focus-text mt-2 text-base leading-7 text-slate-600">
                          {founder.focus.map((line, index) => (
                            <span key={index} className="block">
                              {line}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-3 rounded-full bg-[#147A7E]/10 px-4 py-3 text-sm font-semibold text-[#147A7E]">
                      <Users className="h-4 w-4" />
                      {founder.badge}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white/85 p-4 shadow-[0_18px_48px_rgba(15,23,42,0.08)] backdrop-blur-lg sm:p-6 lg:p-7">
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-5">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 rounded-[1.15rem] border border-transparent bg-white/90 px-4 py-4 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-200/80 ${
                      index > 0 ? 'md:border-l md:border-slate-200/80' : ''
                    }`}
                  >
                    <Icon className="h-6 w-6 text-[#0C3158]" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_48px_rgba(15,23,42,0.08)] backdrop-blur-lg sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)_1px_auto] lg:items-center">
              <div className="promise-icon-wrap flex h-20 w-20 items-center justify-center rounded-full border border-[#126DFF]/15 bg-[#126DFF]/10 text-[#07152F]">
                <Heart className="h-7 w-7" />
              </div>
              <div className="promise-copy">
                <h3 className="text-2xl font-semibold text-slate-950">Unser Versprechen</h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  Wir hören zu, denken mit und liefern Lösungen, die funktionieren —<br className="hidden sm:inline" />
                  nicht nur heute, sondern auch morgen.
                </p>
              </div>
              <div className="hidden h-20 w-px bg-slate-200 lg:block" />
              <a
                href="#kontakt"
                className="inline-flex min-w-[260px] items-center justify-center gap-3 rounded-2xl bg-[#126DFF] px-6 py-4 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(18,109,255,0.24)] transition hover:bg-[#0C4A9C] sm:min-w-[320px] lg:min-w-[260px]"
              >
                Erstgespräch vereinbaren
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
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
