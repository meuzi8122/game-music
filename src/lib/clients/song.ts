import type { Song } from "$lib/type";
import { client } from "./base";
import { parseSong } from "./parser";

export class SongClient {
    private static endpoint = "songs";
    private static fields = "id,title,game.id,game.title,previewUrl,artworkUrl"

    static async findSongs(keyword: string): Promise<Song[]> {
        return (
            await client.getList({ 
                endpoint: this.endpoint,
                queries: {
                    fields: this.fields,
                    /* 検索に引っ掛からないレコードがある → DB・クライアント両方で小文字にする必要あり */
                    filters: keyword ? `title[contains]${keyword}` : "",
                    orders: "sortKey"
                }
            })
        ).contents.map(content => parseSong(content));
    }

    static async findSongsByGameId(gameId: string): Promise<Song[]> {
        return (
            await client.getList({ 
                endpoint: this.endpoint,
                queries: {
                    fields: this.fields,
                    filters: `game[equals]${gameId}`,
                    orders: "sortKey"
                }
            })
        ).contents.map(content => parseSong(content));
    }

    static async findSongsByUpdatedAt(): Promise<Song[]> {
        return (
            await client.getList({ 
                endpoint: this.endpoint,
                queries: {
                    fields: this.fields,
                    limit: 10,
                    orders: "-updatedAt"
                }
            })
        ).contents.map(content => parseSong(content));
    }
}