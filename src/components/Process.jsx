import Container from "./ui/Container";
import Tag from "./ui/Tag";

function Step({ index, title, children }) {
  return (
    <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)] text-white text-sm font-bold">
        {index}
      </div>
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{children}</p>
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="bg-white py-24 lg:py-28">
      <Container variant="wide">
        <div className="mx-auto max-w-2xl text-center">
          <Tag>Process</Tag>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--ink)] sm:text-4xl">
            Four steps to people on site
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Step index={1} title="Scope & compliance">Roles, shifts, vetting depth and legal requirements agreed and documented.</Step>
          <Step index={2} title="Source & verify">Targeted sourcing, references, checks, inductions, and safety briefings.</Step>
          <Step index={3} title="Deploy & manage">Scheduling, attendance, payroll and performance oversight with regular reports.</Step>
          <Step index={4} title="Review & optimise">SLA reviews and continuous improvement to reduce churn and cost.</Step>
        </div>
      </Container>
    </section>
  );
}
