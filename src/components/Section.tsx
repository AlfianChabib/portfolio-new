type SectionProps = {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function Section({ title, id, subtitle, children }: SectionProps) {
  const splitTitle = title.split(" ");

  return (
    <section id={id} className="max-w-7xl py-10 w-full px-2 sm:px-6 md:px-16">
      <div className="flex flex-col font-roboto items-center justify-center">
        <h1 className="space-x-2 flex relative text-2xl md:text-3xl font-semibold text-white">
          <span>{splitTitle[0]}</span>
          <span className="text-teal">{splitTitle[1]}</span>
          <span className="w-max text-gray/5 font-bold absolute scale-[2] select-none z-0">{title}</span>
        </h1>
        <p className="tracking-wide text-gray text-center text-xs md:text-sm">{subtitle}</p>
      </div>
      <div className="py-8">{children}</div>
    </section>
  );
}
