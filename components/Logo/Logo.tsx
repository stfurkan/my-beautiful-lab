import Link from 'next/link';
import React from 'react';

export function Logo() {
  return (
    <Link
      href="/"
      className="font-mono font-semibold text-sm sm:text-lg xl:text-2xl mr-4"
    >
      My Beautiful Lab
  </Link>
  );
}
