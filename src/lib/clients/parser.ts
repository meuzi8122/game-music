import type { Game, Song } from "$lib/type";

export function parseGame(content: any): Game {
    return {
        id: content.id,
        title: content.title,
    }
}

export function parseSong(content: any): Song {
    return {
        id: content.id, 
        title: content.title,
        game: parseGame(content.game),
        previewUrl: content.previewUrl,
        artworkUrl: content.artworkUrl
    }
}