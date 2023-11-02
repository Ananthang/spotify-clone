import { Song } from "../../types";
import useAuthModal from "./useAuthModal";
import usePlayer from "./usePlayer";
import useSubscribeModal from "./useSubscribeModal";
import { useUser } from "./useUser";

const useOnplay = (songs: Song[]) => {
  const player = usePlayer();
  const authModal = useAuthModal();
  const subscribeModal = useSubscribeModal();
  const { user, subscription } = useUser();

  const onPlay = (id: string) => {
    if (!user) {
      return authModal.onOpen();
    }

    if (!subscription) {
      return subscribeModal.onOpen();
    }

    const songIds = songs.map((song) => song.id);
    player.setIds(songIds);
    player.setId(id);
  };

  return onPlay;
};

export default useOnplay;
