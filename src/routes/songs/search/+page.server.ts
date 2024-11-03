import { SongClient } from "$lib/clients/song";
import { redirect } from "@sveltejs/kit";

/** @type {import("./$types").PageLoad} */
export async function load({ url }) {
    const keyword = url.searchParams.get("keyword") || "";

    return {
        keyword,
        songs: await SongClient.findSongs(keyword)
    }
}