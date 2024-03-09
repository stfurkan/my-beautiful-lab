import React from 'react';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';

export function Header() {
  return (
    <div className="flex flex-row items-center justify-between my-6 mx-16">
      <Logo />
      <Navigation />
    </div>
  );
}
