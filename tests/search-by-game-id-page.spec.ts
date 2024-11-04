import { test, expect } from "@playwright/test";

const baseUrl = process.env.TEST_URL ?? "http://localhost:5173";


test("楽曲検索結果画面のテスト", async ({ page }) => {
    /* MicroCMS API呼び出しをモックする */
    await page.route("*/**/api/v1/songs", async ( route ) => {
        route.fulfill({
            status: 200,
            body: JSON.stringify({
                contents: [
                    {
                        id: "song-1",
                        title: "SONG_1",
                        game: {
                            id: "game-1",
                            title: "GAME_1"
                        },
                        previewUrl: "",
                        artworkUrl: ""
                    },
                    {
                        id: "song-2",
                        title: "SONG_2",
                        game: {
                            id: "game-1",
                            title: "GAME_1"
                        },
                        previewUrl: "",
                        artworkUrl: ""
                    },
                ]
            })
        })
    });

    await page.goto(`${baseUrl}/songs/games/game-1`);

    await expect(page.getByRole("heading", { level: 1 })).toHaveText("GAME_1の楽曲");

    const songTitleElements = await page.getByTestId("song-title").all();
    await expect(songTitleElements[0]).toHaveText("SONG_1");
    await expect(songTitleElements[1]).toHaveText("SONG_2");
});