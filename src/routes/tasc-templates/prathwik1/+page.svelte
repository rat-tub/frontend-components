<script lang="ts">
  import Hamburger from '$lib/components/hamburger/Hamburger.svelte';
  import Menu from '$lib/components/hamburger/Menu.svelte';
  import MenuItem from '$lib/components/hamburger/MenuItem.svelte';
  import TopMenuItem from '$lib/components/menu/TopMenuItem.svelte';

  import logoLight from '$lib/assets/TASCLogoLight.png';
  import logoDark from '$lib/assets/TASCLogoDark.png';

  import { darkTheme } from '$lib/stores/theme';
  import ThemeToggle2 from '$lib/components/theme/ThemeToggle2.svelte';

  let menuToggle: boolean;
</script>

<svelte:head>
  <style>
    body {
      margin: 0;
      padding: 0;

      /* font-family: 'Avenir Next', 'Avenir', sans-serif; */
    }
  </style>
</svelte:head>

<nav class="flex justify-between items-center m-5 sm:m-10">
  <div>
    {#if $darkTheme === false}
      <img src={logoLight} alt="TASC logo - light theme" class="h-6" />
    {:else}
      <img src={logoDark} alt="TASC logo - dark theme" class="h-6" />
    {/if}
  </div>

  <div class="hidden md:flex gap-6">
    <TopMenuItem>Home</TopMenuItem>
    <TopMenuItem>About</TopMenuItem>
    <TopMenuItem>Contact</TopMenuItem>
  </div>

  <div class="md:hidden">
    <Menu {menuToggle}>
      <MenuItem>Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Contact</MenuItem>
      <MenuItem href="https://github.com/tasc-nmamit" target="_blank">Github</MenuItem>
    </Menu>
  </div>

  <div class="flex">
    <ThemeToggle2 />
    <div class="contents md:hidden">
      <Hamburger bind:checked={menuToggle} />
    </div>
  </div>
</nav>
