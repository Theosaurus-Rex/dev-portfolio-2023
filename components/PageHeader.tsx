// import Link from "next/link";

// const PageHeader = () => {
//   return (
//     <header>
//       <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
//         <div className="flex flex-col space-y-6 items-center">
//           <Link href="/">
//             <h1 className="text-3xl text-white font-bold">Theo Harris</h1>
//           </Link>
//           <div className="flex flex-row space-x-2 items-center">
//             <Link href="/" className="text-lg text-slate-300 hover:underline">
//               Home
//             </Link>
//             <p className="text-slate-300">-</p>
//             <Link
//               href="/blog"
//               className="text-lg text-slate-300 hover:underline"
//             >
//               Blog
//             </Link>
//             <p className="text-slate-300">-</p>
//             <Link
//               href="/talks"
//               className="text-lg text-slate-300 hover:underline"
//             >
//               Talks
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default PageHeader;

"use client";
import { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "Talks", href: "/talks" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="px-4 py-2 rounded-md font-semibold text-lg hover:text-purple-600 hover:bg-purple-50">
              Theo Harris
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-md text-lg font-semibold leading-6 text-gray-900 hover:text-purple-600 hover:bg-purple-50"
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="font-bold text-lg  hover:text-purple-600 hover:bg-purple-50">
                Theo Harris
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-purple-600  hover:bg-purple-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
