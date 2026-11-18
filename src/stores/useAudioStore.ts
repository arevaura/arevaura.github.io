import { create } from "zustand";
import { Howl } from "howler";

export interface AudioTrack {
  id: string;
  title: string;
  artist: string;
  src: string;
}

export const DEFAULT_TRACKS: AudioTrack[] = [
  {
    id: "ambient-flow",
    title: "Celestial Echoes",
    artist: "Eva Jiang • Generative Ambient",
    src: "/assets/audio/ambient-loop.wav",
  },
  {
    id: "lofi-focus",
    title: "Pacific Coastline (Lo-Fi)",
    artist: "Ambient Focus Studio",
    src: "/assets/audio/ambient-loop.wav",
  },
];

interface AudioStoreState {
  tracks: AudioTrack[];
  currentTrackIndex: number;
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  isMinimized: boolean;
  howl: Howl | null;

  initHowl: () => void;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  toggleMute: () => void;
  setVolume: (volume: number) => void;
  toggleMinimize: () => void;
  nextTrack: () => void;
}

export const useAudioStore = create<AudioStoreState>((set, get) => ({
  tracks: DEFAULT_TRACKS,
  currentTrackIndex: 0,
  isPlaying: false,
  isMuted: false,
  volume: 0.4,
  isMinimized: true,
  howl: null,

  initHowl: () => {
    const { howl, tracks, currentTrackIndex, volume, isMuted } = get();
    if (howl) return;

    const track = tracks[currentTrackIndex];
    if (!track) return;

    const sound = new Howl({
      src: [track.src],
      html5: true,
      loop: true,
      volume: isMuted ? 0 : volume,
      onplay: () => set({ isPlaying: true }),
      onpause: () => set({ isPlaying: false }),
      onstop: () => set({ isPlaying: false }),
    });

    set({ howl: sound });
  },

  play: () => {
    const { initHowl } = get();
    let { howl } = get();
    if (!howl) {
      initHowl();
      howl = get().howl;
    }
    if (howl) {
      howl.play();
      set({ isPlaying: true });
    }
  },

  pause: () => {
    const { howl } = get();
    if (howl) {
      howl.pause();
      set({ isPlaying: false });
    }
  },

  togglePlay: () => {
    const { isPlaying, play, pause } = get();
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  },

  toggleMute: () => {
    const { isMuted, howl } = get();
    const nextMuted = !isMuted;
    if (howl) {
      howl.mute(nextMuted);
    }
    set({ isMuted: nextMuted });
  },

  setVolume: (newVolume: number) => {
    const clamped = Math.max(0, Math.min(1, newVolume));
    const { howl, isMuted } = get();
    if (howl && !isMuted) {
      howl.volume(clamped);
    }
    set({ volume: clamped });
  },

  toggleMinimize: () => {
    set((state) => ({ isMinimized: !state.isMinimized }));
  },

  nextTrack: () => {
    const { tracks, currentTrackIndex, howl, isPlaying, volume, isMuted } = get();
    if (howl) {
      howl.unload();
    }

    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    const nextTrack = tracks[nextIndex];

    const sound = new Howl({
      src: [nextTrack.src],
      html5: true,
      loop: true,
      volume: isMuted ? 0 : volume,
      onplay: () => set({ isPlaying: true }),
      onpause: () => set({ isPlaying: false }),
      onstop: () => set({ isPlaying: false }),
    });

    set({
      currentTrackIndex: nextIndex,
      howl: sound,
      isPlaying: isPlaying,
    });

    if (isPlaying) {
      sound.play();
    }
  },
}));
