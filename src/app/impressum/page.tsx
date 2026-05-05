export default function ImpressumPage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-8 shadow-[var(--shadow)]">
        <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">Impressum</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[var(--foreground)]">Impressum</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-[var(--muted-foreground)]">
          <p>
            Platzhalterinhalt. Die finalen Angaben für das Impressum werden im nächsten Schritt ergänzt,
            sobald die rechtlich freizugebenden Unternehmensdaten vorliegen.
          </p>
          <p>
            Recura<br />
            Musterstraße 1<br />
            10115 Berlin
          </p>
          <p>
            E-Mail: hello@recura-placeholder.de
          </p>
        </div>
      </div>
    </main>
  );
}
