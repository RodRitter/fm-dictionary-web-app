"use client";

import useTheme, { ThemeState } from "@/hooks/useTheme";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Switch = () => {
  const [checked, setChecked] = useState(true);
  const { theme, setTheme } = useTheme((state) => state);

  useEffect(() => {
    setChecked(theme === "dark");
  }, []);

  useEffect(() => {
    setTheme(checked ? "dark" : "light");
  }, [checked]);

  const openClass = checked ? "left-[23px]" : "left-[3px]";

  return (
    <div>
      <input className="hidden" type="checkbox" checked={checked} readOnly />
      <div
        className="cursor-pointer theme-switch w-[40px] h-[20px] rounded-full relative"
        onClick={() => setChecked(!checked)}
      >
        <div
          className={`w-[14px] h-[14px] rounded-full transition-all absolute top-[3px] ${openClass}`}
        ></div>
      </div>
    </div>
  );
};

const ThemeSwitch = () => {
  return (
    <div className="flex gap-5">
      <Switch />
      <Image src="/img/icon-moon.svg" alt="Dark Mode" width={22} height={22} />
    </div>
  );
};

export default ThemeSwitch;
