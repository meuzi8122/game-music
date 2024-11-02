import type { Song } from "$lib/type";
import { client } from "./base";
import { parseSong } from "./parser";

export class SongClient {
    private static endpoint = "songs";
    private static fields = "id,title,game.id,game.title,previewUrl,artworkUrl"
    private static orders = "sortKey";

    static async findSongs(keyword: string): Promise<Song[]> {
        return (
            await client.getList({ 
                endpoint: this.endpoint,
                queries: {
                    fields: this.fields,
                    /* 検索に引っ掛からないレコードがある → DB・クライアント両方で小文字にする必要あり */
                    filters: keyword ? `name[contains]${keyword}` : "",
                    orders: this.orders
                }
            })
        ).contents.map(content => parseSong(content));
    }

    static async findSongsByGameId(gameId: string) {
        return (
            await client.getList({ 
                endpoint: this.endpoint,
                queries: {
                    fields: this.fields,
                    filters: `game[equals]${gameId}`,
                    orders: this.orders
                }
            })
        ).contents.map(content => parseSong(content));
    }

    static async getSong(id: string): Promise<Song> {
        return parseSong(
            await client.get({ 
                endpoint: this.endpoint,
                contentId: id,
                queries: {
                    fields: this.fields
                }
            })
        );
    }
}