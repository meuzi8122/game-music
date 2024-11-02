import { test, expect } from "@playwright/test";

const baseUrl = process.env.TEST_URL ?? "http://localhost:5173";


test("楽曲一覧画面（ゲームで検索）のテスト", async ({ page }) => {
    /* MicroCMS API呼び出しをモックする */
    await page.route("*/**/api/v1/songs", async ( route ) => {
        route.fulfill({
            status: 200,
            body: JSON.stringify({
                contents: [
                    {
                        id: "test-song-1",
                        title: "TEST_SONG",
                        game: {
                            id: "test-game-1",
                            title: "TEST_GAME_1"
                        },
                        previewUrl: "",
                        artworkUrl: ""
                    },
                    {
                        id: "test-song-2",
                        title: "TEST_SONG_2",
                        game: {
                            id: "test-game-1",
                            title: "TEST_GAME_1"
                        },
                        previewUrl: "",
                        artworkUrl: ""
                    }
                ]
            })
        })
    });

    /* 楽曲一覧が表示されることを確認 */

    await page.goto(`${baseUrl}/songs/games/test-game-1`);

    const rows = await page.getByRole("row").all();
    expect(rows.length).toEqual(3)
    
    //await expect(rows[1].getByRole(""))
});