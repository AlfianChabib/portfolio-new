import { socials } from "@/utils/constants";
import Link from "next/link";
import Icon from "./icon";

export default function Social() {
  return (
    <div className="hidden md:flex fixed right-0 bottom-0 z-50 min-h-screen w-20 items-center justify-center">
      <div className="hidden md:flex relative items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center space-y-6 rounded-lg shadow-md z-30 bg-background-start py-6 translate-y-20">
          {socials.map((social, index) => (
            <Link
              key={index}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-foreground transition-all hover:scale-125 duration-300"
            >
              <Icon name={social.icon} size={24} />
            </Link>
          ))}
        </div>
        <span className="border-r border absolute h-full z-20 border-gray" />
      </div>
    </div>
  );
}
