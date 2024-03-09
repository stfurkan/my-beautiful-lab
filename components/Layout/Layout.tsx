import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export default function Layout({ 
  children 
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className='container mx-auto my-8 flex-1 px-16 overflow-x-hidden'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
