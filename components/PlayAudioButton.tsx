"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface PlayAudioButtonProps {
  url: string | null;
}

const PlayAudioButton = ({ url }: PlayAudioButtonProps) => {
  const [playing, setPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);

  useEffect(() => {
    const context = new AudioContext();
    setAudioContext(context);

    if (url) {
      window
        .fetch(url)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
        .then((audioBuffer) => {
          setAudioBuffer(audioBuffer);
        });
    }
  }, [url]);

  const playSound = () => {
    if (!playing && audioContext) {
      setPlaying(true);
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioContext.destination);
      source.start();
      source.onended = () => setPlaying(false);
    }
  };

  const disabledClass = playing ? "opacity-50" : "";

  return (
    <button
      className={`bg-purple-400 hover:bg-purple-600 w-[75px] h-[75px] rounded-full flex items-center justify-center ${disabledClass}`}
      onClick={() => playSound()}
    >
      <Image src="/img/icon-play-only.svg" width={21} height={21} alt="" />
    </button>
  );
};

export default PlayAudioButton;
