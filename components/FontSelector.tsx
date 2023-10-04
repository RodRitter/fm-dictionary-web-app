"use client";
import React, { useState } from "react";
import useFont from "@/hooks/useFont";
import Image from "next/image";
import { useClickAway } from "@uidotdev/usehooks";

const FONTS = {
  "sans-serif": "Sans Serif",
  serif: "Serif",
  monospace: "Mono",
};

const FontSelector = () => {
  const { font, setFont } = useFont();
  const [open, setOpen] = useState(false);

  const ref = useClickAway(() => {
    setOpen(false);
  });

  const onSelect = (font: string) => {
    setFont(font);
    setOpen(false);
  };

  return (
    <div className="relative font-bold">
      <button
        className="flex gap-4 cursor-pointer items-center"
        onClick={() => setOpen(!open)}
      >
        <span>{FONTS[font]}</span>
        <Image
          src="/img/icon-arrow-down.svg"
          alt="Down Arrow"
          width={14}
          height={8}
        />
      </button>
      {open && (
        <ul
          className="font-modal absolute right-0 p-6 rounded-[16px] w-[183px] z-30"
          // @ts-ignore
          ref={ref}
        >
          <li data-font="sans-serif">
            <button
              className="button-link"
              onClick={() => onSelect("sans-serif")}
            >
              Sans Serif
            </button>
          </li>
          <li data-font="serif">
            <button className="button-link" onClick={() => onSelect("serif")}>
              Serif
            </button>
          </li>
          <li data-font="monospace">
            <button
              className="button-link"
              onClick={() => onSelect("monospace")}
            >
              Mono
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default FontSelector;
