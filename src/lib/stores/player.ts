import type { Player, Song } from "$lib/type";
import { writable } from "svelte/store";

/* TODO: Runeを使ってグローバルステートを管理できないか */

export const player = writable<Player>({ 
    song: null,
    volume: 0,
    currentTime: 0,
    paused: true
});

export function play(song: Song) {
    player.update(_player => ({ 
        ..._player,
        song,
        paused: false,
        currentTime: 0
    }));
}

export function restart() {
    player.update(_player => ({ 
        ..._player,
        paused: !Boolean(_player.song),
    }));     
}

export function pause() {
    player.update(_player => ({ 
        ..._player,
        paused: true
    }));
}

export function stop() {
    player.update(_player => ({ 
        ..._player,
        paused: true,
        currentTime: 0
    }));
}