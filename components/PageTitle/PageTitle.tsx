import React from 'react';

export function PageTitle({ title }: { title: string }) {
  return (
    <h1
      className="font-mono tracking-wider font-bold text-center text-2xl lg:text-4xl"
    >
      ~ {title} ~
    </h1>
  );
}
