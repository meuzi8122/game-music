import type { Player, Song } from "$lib/type";
import { derived, writable } from "svelte/store";

/* TODO: Runeを使ってグローバルステートを管理できないか */

export const player = writable<Player>({ 
    song: null,
    currentTime: 0,
    paused: true
});

export const nowPlaying = derived(player, (_player) => {
    if (_player.song) {
        return `${_player.song.title} - ${_player.song.game.title}`      
    }
    return "";
});

export async function play(song: Song) {
    player.update(_player => ({ 
        song,
        paused: false,
        currentTime: 0
    }));
    
    try {
        await fetch(`/api/songs/${song.id}`, { method: "PATCH" });
    } catch (err) {
        console.log(err);
    }
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