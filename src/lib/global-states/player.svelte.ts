import type { Player, Song } from "$lib/type";

export function createPlayer() {
    // let player = $state<Player>({
    //     song: null
    // });

    let src = $state<string>("");

    // function play(song: Song) {
    //     //player = {...player, song}
    //     src = "http" //song.previewUrl
    // }

    return {
        get src() { return src },
        play(song: Song) { 
            src = song.previewUrl
        }
    }
}