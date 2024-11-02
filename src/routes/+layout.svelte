<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import Player from "$lib/components/player.svelte";
    import "$lib/globals.css";
</script>

<Navbar />
<slot></slot>
<Player />