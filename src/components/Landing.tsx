import Link from "next/link";

export default function Landing() {
  return (
    <div className="my-28 w-full md:py-4 px-2 md:px-24 max-w-7xl">
      <p className="font-mono md:text-lg">Hi, My name is</p>
      <div className="py-4 md:py-6 space-y-2 md:space-y-4">
        <h1 className="font-medium text-white font-roboto text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl transition-all">
          M. Alfian Sholakhudin Chabib.
        </h1>
        <p className="text-gray text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium font-roboto underline">
          Fullstack Web Developer.
        </p>
      </div>
      <div className="max-w-xl py-4">
        <p className="text-gray leading-7 text-lg font-roboto font-medium">
          I am an a full-stack web developer. I started programming in 2021 and have been continuously improving my
          skills and knowledge. I am currently open to new work opportunities. For more details, you can check out my
          work on{" "}
          <Link href="https://github.com/AlfianChabib" target="_blank" rel="noreferrer" className="text-foreground">
            Github.
          </Link>{" "}
          Have a nice day!
        </p>
      </div>
      <div className="flex md:flex-row flex-col gap-4 md:gap-10 my-6 items-center">
        <Link
          href="#projects"
          className="border rounded-lg py-2 px-3 md:py-5 md:px-6 hover:scale-105 duration-300 transition-all w-max"
        >
          Check out my work!
        </Link>
        <Link
          href="/resume"
          className="border rounded-lg py-2 px-3 md:py-5 md:px-6 hover:scale-105 duration-300 transition-all w-max"
        >
          Resume
        </Link>
      </div>
    </div>
  );
}
