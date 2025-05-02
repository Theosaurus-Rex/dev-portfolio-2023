"use client";
import { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "Talks", href: "/talks" },
  // { name: "Projects", href: "/projects" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-blue font-kanit font-bold text-lg uppercase italic tracking-wider border-b-4 border-black p-2">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="px-4 py-2 rounded-md  hover:text-blue hover:bg-black">
              Theo Harris
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-3 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6 text-black cursor-pointer hover:text-blue hover:bg-black rounded-md"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-md leading-6 hover:text-blue hover:bg-black"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-blue px-6 py-6 sm:max-w-sm sm:ring-4 sm:ring-black font-kanit font-bold text-lg uppercase italic tracking-wider">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-4 p-1.5">
              <span className="font-bold hover:text-blue hover:bg-black px-3 py-2 rounded-lg">
                Theo Harris
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black hover:text-blue hover:bg-black cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y-4 divide-black ">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:text-blue hover:bg-black"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-row justify-between pt-4 mx-2">
                <SocialIcon
                  url="https://www.linkedin.com/in/theo-harris-coder/"
                  bgColor="white"
                  fgColor="black"
                  target="_blank"
                  style={{ border: "3px solid black", borderRadius: "50%" }}
                ></SocialIcon>
                <SocialIcon
                  url="https://github.com/Theosaurus-Rex"
                  bgColor="white"
                  fgColor="black"
                  target="_blank"
                  style={{ border: "3px solid black", borderRadius: "50%" }}
                ></SocialIcon>
                <SocialIcon
                  url="https://dribbble.com/Theosaurus-Rex"
                  bgColor="white"
                  fgColor="black"
                  target="_blank"
                  style={{ border: "3px solid black", borderRadius: "50%" }}
                ></SocialIcon>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
