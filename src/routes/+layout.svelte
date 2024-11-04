<script lang="ts">
    import BottomNavbar from "$lib/components/bottom-navbar.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import "$lib/globals.css";
</script>

<Navbar />
<slot></slot>
<BottomNavbar />