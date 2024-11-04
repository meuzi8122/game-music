import { GameClient } from "$lib/clients/game";
import { SongClient } from "$lib/clients/song";
import { redirect } from "@sveltejs/kit";

/** @type {import("./$types").PageLoad} */
export async function load({ url }) {
    const keyword = url.searchParams.get("keyword");

    if (keyword) {
        let songs = await SongClient.findSongs(keyword);
        let songIds = new Set(songs.map(song => song.id));

        for (const game of await GameClient.findGames(keyword)) {
            for (const song of await SongClient.findSongsByGameId(game.id)) {
                if (!songIds.has(song.id)) {
                    songs.push(song);
                }
                songIds.add(song.id);
            }
        }

        return { keyword, songs }
    }
    
    redirect(301, "/");
}