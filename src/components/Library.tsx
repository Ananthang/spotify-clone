"use client";
import React, { use } from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "../../types";
import MediaItem from "./MediaItem";
import useOnplay from "@/hooks/useOnPlay";
import useSubscribeModal from "@/hooks/useSubscribeModal";
interface LibraryProps {
  songs: Song[];
}
function Library({ songs }: LibraryProps) {
  const authModal = useAuthModal();
  const subscribeModal = useSubscribeModal();
  const uploadModal = useUploadModal();
  const { user, subscription } = useUser();
  const onPlay = useOnplay(songs);
  const onClick = () => {
    if (!user) {
      authModal.onOpen();
    }
    if (!subscription) {
      return subscribeModal.onOpen();
    }
    return uploadModal.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          size={20}
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((song) => (
          <MediaItem key={song.id} onClick={(id) => onPlay(id)} data={song} />
        ))}
      </div>
    </div>
  );
}

export default Library;
