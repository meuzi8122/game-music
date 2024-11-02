import type { Game } from "$lib/type";
import { client } from "./base";
import { parseGame } from "./parser";

export class GameClient {
    private static endpoint = "games";
    private static fields = "id,title"
    
    static async findGames(): Promise<Game[]> {
        return (
            await client.getList({ 
                endpoint: this.endpoint,
                queries: {
                    fields: this.fields,
                }
            })
        ).contents.map(content => parseGame(content));
    }
}