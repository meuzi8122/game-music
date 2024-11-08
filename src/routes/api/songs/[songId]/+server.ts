import { SongClient } from "$lib/clients/song";
import { json } from "@sveltejs/kit";

/** @type {import("./$types").RequestHandler} */
export async function PATCH({ params }) {
    await SongClient.updatePlayCount(params.songId);
    return json({});
}