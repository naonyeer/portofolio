"use client";

import { useEffect, useRef, useState } from "react";

type AudioNodes = {
  context: AudioContext;
  gain: GainNode;
  oscillators: OscillatorNode[];
  glitchTimer: number;
};

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

export default function HackerMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<AudioNodes | null>(null);

  function stopTrack() {
    const current = audioRef.current;

    if (!current) {
      return;
    }

    window.clearInterval(current.glitchTimer);
    current.gain.gain.setTargetAtTime(0, current.context.currentTime, 0.08);
    window.setTimeout(() => {
      current.oscillators.forEach((oscillator) => oscillator.stop());
      void current.context.close();
    }, 180);
    audioRef.current = null;
    setIsPlaying(false);
  }

  function playTrack() {
    const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextConstructor) {
      return;
    }

    const context = new AudioContextConstructor();
    const masterGain = context.createGain();
    const filter = context.createBiquadFilter();
    const tremolo = context.createGain();
    const lfo = context.createOscillator();
    const lfoGain = context.createGain();

    masterGain.gain.value = 0.045;
    filter.type = "lowpass";
    filter.frequency.value = 420;
    filter.Q.value = 9;
    tremolo.gain.value = 0.8;
    lfo.frequency.value = 7;
    lfoGain.gain.value = 0.32;

    lfo.connect(lfoGain);
    lfoGain.connect(tremolo.gain);
    filter.connect(tremolo);
    tremolo.connect(masterGain);
    masterGain.connect(context.destination);

    const droneSettings = [
      { frequency: 41.2, type: "sawtooth" as OscillatorType, detune: -8 },
      { frequency: 55, type: "square" as OscillatorType, detune: 5 },
      { frequency: 82.4, type: "triangle" as OscillatorType, detune: -12 },
    ];

    const oscillators = droneSettings.map((setting) => {
      const oscillator = context.createOscillator();

      oscillator.type = setting.type;
      oscillator.frequency.value = setting.frequency;
      oscillator.detune.value = setting.detune;
      oscillator.connect(filter);
      oscillator.start();

      return oscillator;
    });

    lfo.start();
    oscillators.push(lfo);

    const glitchTimer = window.setInterval(() => {
      const beep = context.createOscillator();
      const beepGain = context.createGain();
      const delay = Math.random() * 0.06;
      const startTime = context.currentTime + delay;
      const duration = 0.045 + Math.random() * 0.08;

      beep.type = "square";
      beep.frequency.value = 260 + Math.random() * 820;
      beep.detune.value = Math.random() * 60 - 30;
      beepGain.gain.setValueAtTime(0, startTime);
      beepGain.gain.linearRampToValueAtTime(0.08, startTime + 0.01);
      beepGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      beep.connect(beepGain);
      beepGain.connect(masterGain);
      beep.start(startTime);
      beep.stop(startTime + duration + 0.02);
    }, 900);

    audioRef.current = {
      context,
      gain: masterGain,
      oscillators,
      glitchTimer,
    };
    setIsPlaying(true);
  }

  useEffect(() => stopTrack, []);

  return (
    <div className="w-full border-2 border-cyan-300 bg-[#090036] p-1 font-pixel text-[11px] text-white shadow-[3px_3px_0_#000]">
      <div className="mb-2 bg-gradient-to-r from-[#2df3ff] via-[#2256ff] to-[#5024ff] px-2 py-1 font-bold leading-tight">
        <span className="block">Now</span>
        <span className="block">Playing</span>
      </div>
      <p className="text-plasma">&gt;</p>
      <p className="break-all leading-4 text-plasma">haunted_hacker.wav</p>
      <div className="mt-3 flex items-center justify-between text-lg text-white">
        <button aria-label="previous track" className="px-1" type="button">
          ◀
        </button>
        <button
          aria-label={isPlaying ? "pause scary background music" : "play scary background music"}
          className="px-1 text-xl leading-none text-white transition hover:text-acid"
          onClick={isPlaying ? stopTrack : playTrack}
          type="button"
        >
          {isPlaying ? "▮▮" : "▶"}
        </button>
        <button aria-label="next track" className="px-1" type="button">
          ▶
        </button>
      </div>
    </div>
  );
}
