"use client";
import React from "react";
import { Song } from "../../../../types";
import SongItem from "../../../components/SongItem";
import usePlayer from "@/hooks/usePlayer";
import useOnplay from "@/hooks/useOnPlay";
interface PageContentProps {
  songs: Song[];
}
function PageContent({ songs }: PageContentProps) {
  const onPlay = useOnplay(songs);
  if (songs.length === 0) {
    return <div className="mt-4 text-center">No Song available</div>;
  } else {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 mt-4">
        {songs.map((song) => (
          <SongItem key={song.id} onClick={() => onPlay(song.id)} data={song} />
        ))}
      </div>
    );
  }
}

export default PageContent;
