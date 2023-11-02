"use client";

import React from "react";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import { Song } from "../../types";
import useOnplay from "@/hooks/useOnPlay";

interface SearchContentProps {
  songs: Song[];
}
function SearchContent({ songs }: SearchContentProps) {
  const onPlay = useOnplay(songs);
  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-4 text-neutral-400 text-center">
        No Song available
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem
              onClick={(id) => {
                onPlay(id);
              }}
              data={song}
            />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
}

export default SearchContent;
