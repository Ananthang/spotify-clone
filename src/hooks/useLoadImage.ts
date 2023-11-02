import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Song } from "../../types";

const useLoadImage = (song: Song) => {
  const supaBaseClient = useSupabaseClient();

  if (!song) {
    return null;
  }

  const { data } = supaBaseClient.storage
    .from("images")
    .getPublicUrl(song.image);
  return data.publicUrl;
};

export default useLoadImage;
