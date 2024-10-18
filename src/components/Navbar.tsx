"use client";

import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import { sections, socials } from "@/utils/constants";
import { zeroPad } from "@/utils/zeroPad";
import { AlignJustifyIcon, X } from "lucide-react";
import { useNavbarControl } from "@/hooks/useNavbarControl";
import { cn } from "@/utils/cn";
import Icon from "./icon";

export default function Navbar() {
  const { show, showShadow } = useNavbarControl();

  return (
    <Disclosure
      as="nav"
      className={cn([
        "z-50 transition-all duration-300 w-full md:py-4 px-2 md:px-24 top-0 fixed bg-donker/80 backdrop-blur",
        show && "-translate-y-24",
        showShadow && "shadow-lg",
      ])}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link href="#" className="text-[34px] font-roboto font-medium">
                  alfian_chabib
                </Link>
              </div>

              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {sections.map((section, index) => {
                    return (
                      <Link key={index} href={`#${section.id}`} className="group px-2 lg:px-4 cursor-pointer">
                        <span className="font-mono">{zeroPad(index + 1, 2)}.</span>
                        <span className="text-white group-hover:text-teal pl-2 font-mono capitalize">
                          {section.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="sm:hidden flex">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? <X aria-hidden={true} /> : <AlignJustifyIcon aria-hidden={true} />}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <Transition
            enter="transition ease duration-500 transform"
            enterFrom="opacity-100 translate-x-[100%]"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease duration-500 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-100 translate-x-[100%]"
          >
            <DisclosurePanel
              className={cn(
                "transition duration-300 sm:hidden absolute bg-donker shadow-xl",
                show && "-translate-y-24"
              )}
            >
              <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 w-screen">
                {sections.map((section, index) => {
                  return (
                    <DisclosureButton
                      as="a"
                      href={`#${section.id}`}
                      key={index}
                      className="group block py-2 px-4 cursor-pointer capitalize"
                    >
                      <span className="font-mono">{zeroPad(index + 1, 2)}.</span>
                      <span className="text-white group-hover:text-teal pl-2 font-mono">{section.label}</span>
                    </DisclosureButton>
                  );
                })}
                <span className="border-t border-gray w-full" />
                <div className="flex items-center justify-evenly px-4 py-2">
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
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
