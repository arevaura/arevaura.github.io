"use client";

import * as React from "react";
import {
  Disc3,
  GripHorizontal,
  Maximize2,
  Minimize2,
  Pause,
  Play,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useAudioStore } from "@/stores/useAudioStore";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DraggablePlayer() {
  const {
    tracks,
    currentTrackIndex,
    isPlaying,
    isMuted,
    volume,
    isMinimized,
    togglePlay,
    toggleMute,
    setVolume,
    toggleMinimize,
    nextTrack,
  } = useAudioStore();

  const [mounted, setMounted] = React.useState(false);
  const shouldReduceMotion = useReducedMotion();
  const currentTrack = tracks[currentTrackIndex] || tracks[0];

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      whileDrag={{ scale: 1.02, cursor: "grabbing" }}
      className="fixed bottom-6 right-6 z-40 select-none touch-none"
    >
      {isMinimized ? (
        /* Minimized Docked Widget */
        <div className="flex items-center gap-2 p-2 rounded-full border border-surface-border bg-surface/90 backdrop-blur-md shadow-2xl hover:border-primary/50 transition-all group">
          <Button
            variant="ghost"
            size="icon"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause ambient audio" : "Play ambient audio"}
            className="rounded-full w-9 h-9 p-0 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </Button>

          {/* Animated Mini Vinyl */}
          <div
            className={cn(
              "w-7 h-7 rounded-full bg-surface-muted border border-surface-border flex items-center justify-center text-primary",
              isPlaying && !shouldReduceMotion && "animate-spin [animation-duration:4s]"
            )}
          >
            <Disc3 className="w-4 h-4" />
          </div>

          {/* Equalizer Wave Bars */}
          <div className="flex items-end gap-0.5 h-4 px-1">
            <span
              className={cn(
                "w-1 bg-primary/70 rounded-full transition-all duration-300",
                isPlaying ? "h-4 animate-pulse" : "h-1"
              )}
            />
            <span
              className={cn(
                "w-1 bg-primary rounded-full transition-all duration-200 delay-75",
                isPlaying ? "h-3 animate-pulse" : "h-1"
              )}
            />
            <span
              className={cn(
                "w-1 bg-primary/80 rounded-full transition-all duration-300 delay-150",
                isPlaying ? "h-4 animate-pulse" : "h-1"
              )}
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMinimize}
            aria-label="Expand audio player"
            className="w-7 h-7 rounded-full p-0 text-muted hover:text-foreground"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </Button>
        </div>
      ) : (
        /* Expanded Player Card */
        <div
          role="region"
          aria-label="Interactive Music Player"
          className="w-72 p-5 rounded-2xl border border-surface-border bg-surface/95 backdrop-blur-xl shadow-2xl space-y-4"
        >
          {/* Header & Drag Grip */}
          <div className="flex items-center justify-between border-b border-surface-border pb-3">
            <div className="flex items-center gap-2 cursor-grab active:cursor-grabbing text-muted">
              <GripHorizontal className="w-4 h-4" />
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-muted">
                Audio Deck
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMinimize}
              aria-label="Minimize audio player"
              className="w-6 h-6 p-0 text-muted hover:text-foreground"
            >
              <Minimize2 className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Center Rotating CD Visual */}
          <div className="flex flex-col items-center justify-center py-2 space-y-3">
            <div className="relative w-28 h-28 rounded-full border-4 border-surface-border bg-gradient-to-tr from-surface-muted via-background to-surface-muted flex items-center justify-center shadow-inner">
              <div
                className={cn(
                  "w-full h-full rounded-full flex items-center justify-center",
                  isPlaying && !shouldReduceMotion && "animate-spin [animation-duration:6s]"
                )}
              >
                <div className="w-8 h-8 rounded-full border-2 border-primary/40 bg-background flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
              </div>
            </div>

            {/* Track Info */}
            <div className="text-center w-full px-2">
              <div className="text-sm font-semibold text-foreground truncate">
                {currentTrack.title}
              </div>
              <div className="text-xs text-muted font-mono truncate">
                {currentTrack.artist}
              </div>
            </div>
          </div>

          {/* Primary Controls */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <Button
              variant="primary"
              size="icon"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause track" : "Play track"}
              className="w-11 h-11 rounded-full shadow-glow"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </Button>

            <Button
              variant="secondary"
              size="icon"
              onClick={nextTrack}
              aria-label="Next track"
              className="w-9 h-9 rounded-full"
            >
              <SkipForward className="w-4 h-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              className="w-9 h-9 rounded-full text-muted hover:text-foreground"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-rose-400" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Volume Slider */}
          <div className="flex items-center gap-2 pt-2 border-t border-surface-border">
            <Volume2 className="w-3.5 h-3.5 text-muted shrink-0" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              aria-label="Volume slider"
              className="w-full h-1 bg-surface-muted rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <span className="text-[10px] font-mono text-muted w-6 text-right">
              {Math.round((isMuted ? 0 : volume) * 100)}%
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
