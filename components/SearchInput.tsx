"use client";
import useDictionary from "@/hooks/useDictionary";
import Image from "next/image";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  KeyboardEvent,
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const SearchInput = () => {
  const [word, setWord] = useState("keyboard");
  const [error, setError] = useState<string | null>(null);
  const { search } = useDictionary();

  const inputRef = createRef<HTMLInputElement>();

  useEffect(() => {
    search("passion");
  }, []);

  const onKeyDown = (event: any) => {
    if (event?.key && event.key === "Enter") {
      console.log("search for...", word);
      doSearch();
    }
  };

  const doSearch = () => {
    if (word.trim() === "") {
      setError("Whoops! Can't be empty...");
    } else {
      search(word);
      setError(null);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWord((prevWord: string) => e.target.value);
  };

  return (
    <div
      className={`search-input rounded-[18px] h-[64px] relative p-[1px] ${
        error ? "error" : ""
      }`}
    >
      <input
        className="block w-full h-full px-5 font-bold text-[20px] rounded-[18px]"
        placeholder="Search for any word..."
        type="text"
        value={word}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        ref={inputRef}
      />

      {error && <div className="color-error py-2">{error}</div>}

      <button
        className="absolute right-[10px] top-1/2 -translate-y-1/2 p-2"
        onClick={doSearch}
      >
        <Image
          src="/img/icon-search.svg"
          alt="Search Icon"
          width={18}
          height={18}
        />
      </button>
    </div>
  );
};

export default SearchInput;
