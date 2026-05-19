import Image from "next/image";
import { Lock, ArrowRight, Check, BarChart3, Shield, UserCheck, MapPin, Brain, Sparkles, Settings, Users, Heart, Target, MessageCircle, FileSearch, Lightbulb, Rocket, ShieldCheck } from 'lucide-react';
import { SiteHeader } from "@/components/site-header";

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

const useCases: UseCaseCardProps[] = [
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

const processFlowSteps = [
  {
    number: '1',
    title: 'Erstgespräch',
    description: 'Wir verstehen Ihre Ausgangslage, typische manuelle Aufgaben und die wichtigsten Ziele.',
    icon: MessageCircle,
    tone: 'blue',
    offset: 'high',
  },
  {
    number: '2',
    title: 'Analyse',
    description: 'Wir analysieren Prozesse, Datenquellen, Systeme und identifizieren sinnvolle Automatisierungspotenziale.',
    icon: FileSearch,
    tone: 'teal',
    offset: 'low',
  },
  {
    number: '3',
    title: 'Lösungskonzept',
    description: 'Wir bewerten Nutzen, Aufwand und Risiken und entwickeln eine klare Empfehlung für den besten Startpunkt.',
    icon: Lightbulb,
    tone: 'blue',
    offset: 'mid',
  },
  {
    number: '4',
    title: 'Umsetzung',
    description: 'Wir bauen eine schlanke Lösung, testen sie mit Ihnen und integrieren sie in Ihre bestehende Systemlandschaft.',
    icon: Settings,
    tone: 'teal',
    offset: 'low',
  },
  {
    number: '5',
    title: 'Go-live & Verbesserung',
    description: 'Nach dem Start optimieren wir die Lösung, begleiten die Nutzung und erweitern sie bei Bedarf schrittweise.',
    icon: Rocket,
    tone: 'blue',
    offset: 'high',
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

function ProcessSection() {
  return (
    <section className="process-section relative z-10 overflow-hidden px-5 pt-24 pb-20 sm:px-8 lg:px-10" id="vorgehen">
      <div className="process-inner mx-auto max-w-[1480px]">
        <header className="process-header mx-auto max-w-4xl text-center">
          <p className="process-eyebrow text-sm font-semibold uppercase tracking-[0.28em] text-[#0b63f6]">
            UNSER VORGEHEN
          </p>
          <h2 className="process-title mt-6 text-[clamp(44px,5vw,76px)] leading-[0.98] tracking-[-0.045em] font-bold text-[#081126]">
            Von der Idee zur<br />produktiven Automatisierung.
          </h2>
          <p className="process-subtitle mx-auto mt-6 max-w-3xl text-[clamp(17px,1.3vw,22px)] leading-[1.55] text-[rgba(8,17,38,0.68)]">
            Wir begleiten Sie strukturiert vom ersten Gespräch bis zur produktiven Lösung – pragmatisch, verständlich und nah am Arbeitsalltag.
          </p>
        </header>

        <div className="process-flow relative mt-16 min-h-[420px]">
          <svg
            className="process-connector absolute left-1/2 top-0 h-60 w-full -translate-x-1/2 overflow-visible"
            viewBox="0 0 1480 240"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id="processLineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0B63F6" />
                <stop offset="35%" stopColor="#079B96" />
                <stop offset="65%" stopColor="#0B63F6" />
                <stop offset="100%" stopColor="#0B63F6" />
              </linearGradient>
            </defs>
            <path
              className="process-connector-path fill-none stroke-[url(#processLineGradient)] stroke-[2.2] stroke-linecap-round opacity-85"
              d="M 20 142 C 160 92, 260 92, 380 142 S 620 192, 740 142 S 980 92, 1100 142 S 1320 192, 1460 142"
            />
          </svg>

          <ol className="process-cards relative z-10 grid grid-cols-5 gap-6" aria-label="Unser Vorgehen in fünf Schritten">
            {processFlowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.number}
                  className={`process-card-wrap ${step.offset === 'high' ? 'translate-y-0' : step.offset === 'mid' ? 'translate-y-7' : 'translate-y-[70px]'}`}
                >
                  <article className={`process-card relative min-h-[320px] rounded-[24px] border border-[rgba(8,17,38,0.08)] bg-[rgba(255,255,255,0.78)] p-8 shadow-[0_24px_70px_rgba(8,17,38,0.08)] backdrop-blur-[14px]`}>
                    <div className={`process-number absolute -top-6 left-6 flex h-13 w-13 items-center justify-center rounded-full text-2xl font-bold text-white shadow-[0_12px_28px_rgba(11,99,246,0.28)] ${step.tone === 'teal' ? 'bg-gradient-to-br from-[#079b96] to-[#08766f] shadow-[0_12px_28px_rgba(7,155,150,0.24)]' : 'bg-gradient-to-br from-[#0b63f6] to-[#0047d8]'}`}>
                      {step.number}
                    </div>
                    <div className={`process-icon-shell mx-auto mt-4 flex h-26 w-26 items-center justify-center rounded-full ${step.tone === 'teal' ? 'bg-[rgba(7,155,150,0.085)]' : 'bg-[rgba(11,99,246,0.075)]'}`}>
                      <Icon className={`process-icon h-12 w-12 stroke-[1.8] ${step.tone === 'teal' ? 'text-[#079b96]' : 'text-[#0b63f6]'}`} aria-hidden="true" />
                    </div>
                    <h3 className="process-card-title mt-6 text-center text-[clamp(21px,1.4vw,26px)] leading-[1.15] tracking-[-0.025em] font-bold text-[#081126]">
                      {step.title}
                    </h3>
                    <p className="process-card-description mt-4 text-center text-base leading-[1.55] text-[rgba(8,17,38,0.68)]">
                      {step.description}
                    </p>
                  </article>
                </li>
              );
            })}
          </ol>

          <div className="process-arrow-end absolute -right-2 bottom-[118px] z-20 flex h-14 w-14 items-center justify-center rounded-full border-1.5 border-[rgba(11,99,246,0.35)] bg-[rgba(255,255,255,0.82)] shadow-[0_12px_34px_rgba(8,17,38,0.08)] backdrop-blur-[12px]" aria-hidden="true">
            <ArrowRight size={30} strokeWidth={1.8} />
          </div>
        </div>

        <div className="process-cta-bar mx-auto mt-16 max-w-[1080px] rounded-[22px] border border-[rgba(8,17,38,0.08)] bg-[rgba(255,255,255,0.78)] p-6 shadow-[0_24px_70px_rgba(8,17,38,0.08)] backdrop-blur-[14px] sm:p-8 lg:flex lg:items-center lg:gap-6">
          <div className="process-cta-copy flex items-center gap-6 lg:flex-1">
            <div className="process-cta-icon flex h-17 w-17 items-center justify-center rounded-full bg-[rgba(11,99,246,0.075)]">
              <ShieldCheck size={36} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <p className="process-cta-text max-w-[560px] text-[clamp(18px,1.4vw,24px)] leading-[1.25] font-bold tracking-[-0.025em] text-[#081126]">
              Strukturiert, nachvollziehbar und auf Ihre bestehende Systemlandschaft abgestimmt.
            </p>
          </div>
          <div className="process-cta-divider hidden h-14 w-px bg-[rgba(8,17,38,0.12)] lg:block" />
          <a href="#kontakt" className="process-cta-button inline-flex min-w-[300px] items-center justify-center gap-3 rounded-[12px] bg-gradient-to-br from-[#0b63f6] to-[#0047d8] px-6 py-4 text-sm font-bold text-white shadow-[0_16px_36px_rgba(11,99,246,0.25)] transition hover:bg-[#0047d8] sm:min-w-[320px] lg:min-w-[300px] lg:flex-shrink-0">
            Erstgespräch vereinbaren
            <ArrowRight size={24} strokeWidth={1.9} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
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

interface UseCaseCardProps {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  resultText: string;
  graphic: 'microsoft' | 'data-ai' | 'email';
  resultIcon: string;
}

function UseCaseCard({ number, title, description, bullets, resultText, graphic, resultIcon }: UseCaseCardProps) {
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
          <div className="hero-badge hero-badge-doc absolute left-[8%] top-[18%]">
            <svg viewBox="0 0 64 64" className="hero-badge-icon" aria-hidden="true">
              <path d="M20 10h22l10 10v28a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6V16a6 6 0 0 1 6-6z" />
              <path d="M42 10v12h10" />
              <path d="M22 28h20" />
              <path d="M22 36h20" />
              <path d="M22 44h20" />
              <path d="M28 28v16" />
              <path d="M36 28v16" />
            </svg>
          </div>
          <div className="hero-badge hero-badge-workflow absolute left-[18%] bottom-[16%]">
            <svg viewBox="0 0 64 64" className="hero-badge-icon" aria-hidden="true">
              <rect x="10" y="14" width="16" height="12" rx="3" />
              <rect x="38" y="14" width="16" height="12" rx="3" />
              <rect x="24" y="38" width="16" height="12" rx="3" />
              <path d="M26 20h12" />
              <path d="M32 26v8" />
              <path d="M32 34h8" />
              <path d="M40 34l-3-3" />
              <path d="M40 34l-3 3" />
            </svg>
          </div>
          <div className="hero-badge hero-badge-email absolute right-[16%] top-[28%]">
            <svg viewBox="0 0 64 64" className="hero-badge-icon" aria-hidden="true">
              <rect x="12" y="18" width="40" height="26" rx="5" />
              <path d="M12 20l20 15 20-15" />
              <path d="M21 32l-9 12" />
              <path d="M43 32l9 12" />
              <circle cx="46" cy="18" r="6.5" />
              <path d="M46 14.5v1.7" />
              <path d="M46 19.8v1.7" />
              <path d="M42.5 18h1.7" />
              <path d="M47.8 18h1.7" />
              <path d="M43.6 15.6l1.2 1.2" />
              <path d="M47.2 19.2l1.2 1.2" />
              <path d="M48.4 15.6l-1.2 1.2" />
              <path d="M44.8 19.2l-1.2 1.2" />
            </svg>
          </div>
          <div className="hero-badge hero-badge-ai absolute right-[18%] bottom-[10%]">
            <svg viewBox="0 0 64 64" className="hero-badge-icon" aria-hidden="true">
              <circle cx="28" cy="31" r="10" />
              <path d="M35.5 38.5L46 49" />
              <path d="M44 15v7" />
              <path d="M40.5 18.5h7" />
              <path d="M18 16.5v4.5" />
              <path d="M15.75 18.75h4.5" />
              <path d="M46 28.5v3.5" />
              <path d="M44.25 30.25h3.5" />
            </svg>
          </div>
        </div>
      </div>

      <section className="relative min-h-screen px-5 pt-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SiteHeader />

          <div className="hero-section relative z-10 flex min-h-svh items-center justify-center px-5 py-24 sm:px-8 lg:px-18">
            <div className="hero-content mx-auto w-[min(92vw,1120px)] xl:w-[min(88vw,1280px)] text-center flex flex-col items-center">
              <p className="hero-eyebrow text-sm font-semibold uppercase tracking-[0.38em] text-[#1f6f73] mb-7">
                RECURA PROCESS AUTOMATION
              </p>
              <h1 className="hero-title mt-0 font-bold text-[#071528]" aria-label="KI-gestützte Automatisierung für Büroprozesse im Mittelstand.">
                <span className="title-sm" aria-hidden="true">
                  KI-gestützte<br />
                  Automatisierung<br />
                  für Büroprozesse<br />
                  im Mittelstand.
                </span>
                <span className="title-md" aria-hidden="true">
                  KI-gestützte<br />
                  Automatisierung für<br />
                  Büroprozesse im<br />
                  Mittelstand.
                </span>
                <span className="title-xl" aria-hidden="true">
                  KI-gestützte Automatisierung für<br />
                  Büroprozesse im Mittelstand.
                </span>
                <span className="title-2xl" aria-hidden="true">
                  KI-gestützte Automatisierung<br />
                  für Büroprozesse im Mittelstand.
                </span>
              </h1>
              <p className="hero-subtitle mt-9 max-w-[760px] leading-[1.55] text-[rgba(7,21,40,0.72)]">
                Wir analysieren, automatisieren und optimieren administrative Prozesse, pragmatisch, sicher und messbar.
              </p>

              <div className="hero-actions mt-11 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#kontakt"
                  style={{ color: '#fff' }}
                  className="hero-button hero-button-primary inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#0f5b5e] px-8 py-4 text-white font-semibold shadow-[0_14px_34px_rgba(15,91,94,0.18)] transition hover:bg-[#0a4a4d]"
                >
                  Erstgespräch vereinbaren →
                </a>
                <a
                  href="#leistungen"
                  className="hero-button hero-button-secondary inline-flex items-center justify-center gap-2 rounded-[14px] border border-[rgba(7,21,40,0.14)] bg-[rgba(255,255,255,0.72)] px-8 py-4 text-[#071528] font-semibold backdrop-blur-[10px] transition hover:border-[#1f6f73] hover:text-[#1f6f73]"
                >
                  Leistungen ansehen →
                </a>
              </div>

              <div className="hero-location-pill mt-6 inline-flex items-center justify-center rounded-full border border-[rgba(7,21,40,0.08)] bg-[rgba(255,255,255,0.72)] px-5 py-2 text-[rgba(7,21,40,0.62)] backdrop-blur-[10px]">
                Düsseldorf / Mönchengladbach / NRW
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="relative z-10 py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div id="use-cases" className="text-center mb-14">
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
            <a href="#vorgehen" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold text-blue-600 hover:text-blue-700">
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

        </div>
      </section>

      <ProcessSection />

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
