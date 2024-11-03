import { SongClient } from "$lib/clients/song";
import { redirect } from "@sveltejs/kit";

/** @type {import("./$types").PageLoad} */
export async function load({ params }) {
    const songs = await SongClient.findSongsByGameId(params.gameId);

    if (songs.length == 0) {
        throw redirect(301, "/");
    }

    return {
        game: songs[0].game,
        songs
    }
}

/* キーワード検索と違って検索結果は変わらないので、プリレンダリングする。 */
export const prerender = true;