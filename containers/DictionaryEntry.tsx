import PlayAudioButton from "@/components/PlayAudioButton";
import useDictionary from "@/hooks/useDictionary";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

interface SectionHeadingProps {
  children: React.ReactNode;
}

interface DictonaryEntryProps {
  result: any;
}

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <div className="my-[40px] flex items-center gap-5">
      <span className="text-[24px] leading-[29px]" data-font="sans-serif">
        {children}
      </span>
      <div className="h-line"></div>
    </div>
  );
};

const DictionaryEntry = ({ result }: DictonaryEntryProps) => {
  return (
    <div className="mt-[45px]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[63px] leading-[77px] font-bold">
            {result.word}
          </h1>
          <h2
            className="text-[24px] leading-[29px] tracking-wider mt-[8px]"
            data-font="sans-serif"
          >
            {result.phonetic}
          </h2>
        </div>

        {result.phonetics?.length && result.phonetics[0].audio && (
          <PlayAudioButton url={result.phonetics[0].audio} />
        )}
      </div>

      {result?.meanings?.map((meaning: any, index: number) => (
        <div key={index}>
          <SectionHeading>{meaning?.partOfSpeech}</SectionHeading>
          <h3 className="text-[20px] leading-[24px]">Meaning</h3>
          <ul>
            {meaning?.definitions.map((def: any, index: number) => (
              <>
                <li key={def?.defintion || index}>{def?.definition}</li>
                {def?.example && (
                  <span className="color-gray-5 block mt-0 mb-[12px]">
                    {`"${def.example}"`}
                  </span>
                )}
              </>
            ))}
          </ul>
        </div>
      ))}

      <div className="h-line"></div>

      {result?.sourceUrls &&
        result.sourceUrls.map((source: string) => (
          <div
            key={source}
            className="color-gray-5 flex gap-x-4 mt-5 text-[14px]"
          >
            <div>Source</div>
            <Link href={source} className="flex gap-x-4">
              {source}
              <Image
                src="/img/icon-new-window.svg"
                width={14}
                height={14}
                alt="Source in New Window"
              />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default DictionaryEntry;
