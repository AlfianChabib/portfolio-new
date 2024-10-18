import { skills } from "@/utils/constants";
import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="text-gray col-span-2 lg:col-span-1 font-roboto space-y-6 leading-6 md:leading-7 text-base md:text-lg">
        <p>
          Hi! I&apos;m Alfian, a passionate and experienced Software Engineer specializing in building efficient and
          scalable web applications. With a strong background in Express.js, Next.js, and exploring technologies like
          Docker, I focus on delivering innovative tech solutions that make a real impact.
        </p>
        <p>
          I’m driven by the desire to create products that not only work flawlessly but also provide an exceptional user
          experience. Currently, I’m working on a variety of projects, ranging from e-commerce platforms to job board
          applications, and even challenging monolithic projects.
        </p>
        {/* <p>
          I believe that great collaboration and a deep understanding of user needs are key to building outstanding
          applications. Curious to know more? Feel free to check out my projects or get in touch with me.
        </p> */}
        <p>
          My expertise includes building robust and scalable web APIs, working with databases, handling authentication
          and security, implementing efficient server-side architecture, creating responsive and visually appealing user
          interfaces, integrating APIs, handling user interactions, and optimizing web performance.
        </p>
      </div>
      <div className="col-span-2 lg:col-span-1 flex flex-col gap-6 text-white">
        <div className="flex items-center gap-2">
          <p className="text-sm text-nowrap text-foreground">
            Here are a few technologies I&apos;ve been working with:
          </p>
          <span className="w-full h-[1px] bg-gray" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-gray/10 p-4 rounded-md hover:scale-105 hover:text-foreground hover:shadow-md duration-300 transition-all select-none"
            >
              <Image src={skill.iconUrl} alt={skill.name} width={24} height={24} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
