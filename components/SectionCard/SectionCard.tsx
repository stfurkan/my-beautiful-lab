import React from 'react';
import Link from 'next/link';
import { PinContainer } from '../ui/3d-pin';
import { Meteors } from '../ui/meteors';

export function SectionCard({
  title,
  href,
  children,
} : {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="m-8 flex items-center justify-center">
      <PinContainer
        title={title}
      >
        <div className="flex basis-full flex-col pl-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[10rem] h-[10rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-300 ">
              {children}
            </span>
          </div>
          <Meteors number={10} />
        </div>
      </PinContainer>
    </Link>
  );
}
