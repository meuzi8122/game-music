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
                    orders: "sortKey",
                    limit: 50
                }
            })
        ).contents.map(content => parseSong(content));
    }

    static async findMostPlayedSongs(): Promise<Song[]> {
        return (
            await client.getList({ 
                endpoint: this.endpoint,
                queries: {
                    fields: this.fields,
                    limit: 10,
                    orders: "-playCount"
                }
            })
        ).contents.map(content => parseSong(content));
    }

    static async updatePlayCount(id: string) {
        /* コンテンツが存在しない場合は「Error: fetch API response status: 400」エラーになる */
        const content = await client.get({ 
            endpoint: this.endpoint, 
            contentId: id,
            queries: {
                fields: "playCount"
            }
        });

        /* レスポンスにはコンテンツIDのみ含まれる */
        await client.update({
            endpoint: this.endpoint,
            contentId: id,
            content: {
                playCount: content.playCount ? content.playCount + 1 : 1
            }
        });
    }
}