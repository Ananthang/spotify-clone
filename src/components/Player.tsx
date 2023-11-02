"use client";
import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import React, { useEffect, useState } from "react";
import PlayContent from "./PlayContent";

function Player() {
  const player = usePlayer();
  const { song } = useGetSongById(player?.activeId);
  const songUrl = useLoadSongUrl(song!);

  if (!song || !player.activeId || !songUrl) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4"
      key={songUrl}
    >
      <PlayContent song={song} songUrl={songUrl} />
    </div>
  );
}

export default Player;
