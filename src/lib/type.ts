export type Song = {
    id: string;
    title: string;
    game: Game;
    artworkUrl: string;
    previewUrl: string;
}

export type Game = {
    id: string;
    title: string;
}

export type Player = {
    song: Song | null;
    paused: boolean; // trueなら一時停止
    currentTime: number;
}