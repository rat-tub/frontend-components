<script lang="ts">
  import Hamburger from '$lib/components/hamburger/Hamburger.svelte';
  import Menu from '$lib/components/hamburger/Menu.svelte';
  import MenuItem from '$lib/components/hamburger/MenuItem.svelte';

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

      font-family: 'Avenir Next', 'Avenir', sans-serif;
    }
  </style>
</svelte:head>

<nav>
  <div class="flex justify-between m-5 sm:m-10">
    <div>
      {#if $darkTheme === false}
        <img src={logoLight} alt="TASC logo - light theme" style="height: 2rem;" />
      {:else}
        <img src={logoDark} alt="TASC logo - dark theme" style="height: 2rem;" />
      {/if}
    </div>
    <div class="hidden md:flex gap-6">
      <li class="flex justify-center items-center">
        <a href={null} class="text-black dark:text-white px-[10px] py-[5px] hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black rounded-lg duration-350 ease-in-out">Home</a>
      </li>
      <li class="flex justify-center items-center">
        <a href={null} class="text-black dark:text-white px-[10px] py-[5px] hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black rounded-lg duration-350 ease-in-out">About</a>
      </li>
      <li class="flex justify-center items-center">
        <a href={null} class="text-black dark:text-white px-[10px] py-[5px] hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black rounded-lg duration-350 ease-in-out">Contact</a>
      </li>
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
  </div>
</nav>
