import { SongClient } from "$lib/clients/song";

/** @type {import("./$types").PageLoad} */
export async function load() {

    return {

        songs: await SongClient.findSongsByUpdatedAt()
    }
}