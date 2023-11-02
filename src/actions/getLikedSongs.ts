import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Song } from "../../types";
import { cookies } from "next/headers";

const getLikedSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data: sessionData, error: sessionError } =
    await supabase.auth.getSession();

  const { data, error } = await supabase
    .from("liked_songs")
    .select("*,songs(*)")
    .eq("user_id", sessionData?.session?.user.id)
    .order("created_at", { ascending: false });
  if (error) {
    console.log(
      "🚀 ~ file: getLikedSongs.ts:19 ~ getLikedSongs ~ error:",
      error
    );
  }

  if (!data) return [];

  return data.map((likedSong) => ({ ...likedSong.songs }));
};

export default getLikedSongs;
