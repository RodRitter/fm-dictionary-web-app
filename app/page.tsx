"use client";
import Divider from "@/components/Divider";
import SearchInput from "@/components/SearchInput";
import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";
import dynamic from "next/dynamic";
import DictionaryEntry from "@/containers/DictionaryEntry";
import useDictionary from "@/hooks/useDictionary";
import NotFound from "@/containers/NotFound";
import { useEffect } from "react";
import Loader from "@/components/Loader";

const NoSSRFontSelector = dynamic(() => import("../components/FontSelector"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const { result, error, loading } = useDictionary();

  useEffect(() => console.log(result, error), [result, error]);

  return (
    <main className="flex min-h-screen flex-col max-w-[777px] px-5 pb-12 m-auto">
      <Loader loading={loading} />
      <div className="py-[50px] flex justify-between">
        <Image src="/img/logo.svg" alt="Logo" width={34} height={38} />

        <div className="flex items-center gap-5">
          <NoSSRFontSelector />
          <Divider />
          <ThemeSwitch />
        </div>
      </div>

      <div>
        <SearchInput />

        {result && <DictionaryEntry result={result} />}

        {error && <NotFound result={error} />}
      </div>
    </main>
  );
}
