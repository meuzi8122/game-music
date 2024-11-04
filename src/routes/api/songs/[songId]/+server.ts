import { SongClient } from "$lib/clients/song";

/** @type {import(""./$types").RequestHandler} */
export async function PATCH({ params }) {
    await SongClient.updatePlayCount(params.songId);
    return new Response("ok");
}