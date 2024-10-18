import { cn } from "@/utils/cn";
import { projects } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import Icon from "./icon";

export default function Projects() {
  return (
    <div className="flex flex-col py-6 w-full space-y-14">
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            className={cn(
              "flex relative w-full items-center",
              isEven ? "text-end justify-start" : "text-start justify-end"
            )}
          >
            <div className={cn("flex flex-col absolute max-w-2xl gap-4", isEven ? "right-0" : "left-0")}>
              <div>
                <p>Featured Project</p>
                <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
              </div>
              <div className="lg:bg-[#112240] p-8 rounded-md">
                <p className="font-roboto font-medium text-gray">{project.description}</p>
              </div>
              <ul className={cn("flex flex-wrap gap-2 md:gap-3 text-white", isEven ? "justify-end" : "justify-start")}>
                {project.techstack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
              <div className={cn("flex text-white", isEven ? "justify-end" : "justify-start")}>
                <Link href={project.github} target="_blank" className="w-max">
                  <Icon name="Github" />
                </Link>
              </div>
            </div>
            <div className="">
              <Image src={project.image} alt={project.title} width={700} height={1200} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
