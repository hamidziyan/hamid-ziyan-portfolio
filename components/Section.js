import Reveal from "./Reveal";

export default function Section({ id, title, note, children }) {
  return (
    <section id={id} className="border-t border-line py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-[220px_1fr] md:gap-12">
        <div className="md:sticky md:top-24 md:self-start">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
            {note && <p className="mt-2 text-sm text-mute">{note}</p>}
          </Reveal>
        </div>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}
