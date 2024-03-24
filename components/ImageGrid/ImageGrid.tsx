"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";



export function ImageGrid({ cards }: { cards: any[]; }) {
  return (
    <div className="h-screen py-8 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
