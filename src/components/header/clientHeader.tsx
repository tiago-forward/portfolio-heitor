import { Separator } from "@radix-ui/react-separator";
import React from "react";

import Logo from "@/assets/logo.png";
import HeitorProfile from "@/assets/heitor.jpg";

import { NavLinkHeader } from "../navLinks/navLinkHeader";

export function ClientHeader() {
  const primaryNavItems = [{ id: 1, href: "/", title: "Início" }];

  const secondaryNavItems = [
    { id: 1, href: "/sobre", title: "Sobre" },
    // { id: 2, href: '/habilidades', title: 'Habilidades' },
    { id: 3, href: '/formacoes', title: 'Formações' },
    { id: 4, href: "/projetos", title: "Projetos" },
  ];

  return (
    <header className="border-t-2 border-border-header">
      <nav className="grid grid-cols-1 lg:grid-cols-5 lg:gap-4">
        <ul className="mt-8 flex flex-col items-center uppercase lg:col-span-2 lg:mt-0 lg:flex-row lg:pl-8">
          <li className="space-x-4">
            <a href="/">
              <img src={Logo} alt="Logo Heitor" className="w-[88px]" />
            </a>
          </li>
          {primaryNavItems.map((item) => (
            <li
              key={item.id}
              className="relative hidden h-full items-center md:flex"
            >
              <NavLinkHeader to={item.href} exact>
                {item.title}
              </NavLinkHeader>
            </li>
          ))}
        </ul>

        <ul className="flex items-center justify-center uppercase lg:col-span-2 lg:justify-start lg:pr-8">
          {secondaryNavItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <li key={item.id} className="relative flex h-full items-center">
                <NavLinkHeader to={item.href}>{item.title}</NavLinkHeader>
              </li>
              {(index + 1) % 2 === 0 &&
                index < secondaryNavItems.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="user-select-none center pointer-events-none h-16 w-[2px] transform-gpu [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(199,160,0,0.65)_50%,rgba(0,0,0,0)_100%)]"
                  />
                )}
            </React.Fragment>
          ))}
        </ul>

        <div className="flex h-full items-center gap-4 bg-aside-bg px-3 pb-2 lg:col-span-1">
          <div className="relative my-2 w-16 rounded-full border border-black">
            <img
              src={HeitorProfile}
              alt="Heitor Silva"
              className="rounded-full border-4 border-[#e9b874]"
            />
            <div className="flex items-center justify-center">
              <span
                className="absolute cursor-default rounded-[6px] border-2 border-[#e9b874] bg-[#2f3640] px-2 text-xs font-bold text-client-TextLevel"
                title="Idade"
              >
                30
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span
              className="cursor-default font-bold text-client-TextSecondary"
              title="Nome"
            >
              Heitor Silva
            </span>
            <div className="flex items-center gap-2">
              <div className="bola bg-green-500"></div>
              <span className="mt-1 cursor-default text-client-TextStatusOnline">
                Online
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
