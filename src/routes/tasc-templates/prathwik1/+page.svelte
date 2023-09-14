<script lang="ts">
  import Hamburger from '$lib/components/hamburger/Hamburger.svelte';
  import MenuWrapper from './MenuWrapper.svelte';
  import PersonCard from '$lib/components/personcard/PersonCard.svelte';
  let menuToggle: boolean;

  import ThemeToggle2 from '$lib/components/theme/ThemeToggle2.svelte';

  import { darkTheme } from '$lib/stores/theme';
  import logoLight from '$lib/assets/TASCLogoLight.png';
  import logoDark from '$lib/assets/TASCLogoDark.png';
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

<nav class="flex justify-between items-center h-10 mx-5 my-3 md:mx-10 md:mb-4 md:mt-6">
  <div>
    {#if $darkTheme === false}
      <img src={logoLight} alt="TASC logo - light theme" class="h-6 md:h-8" />
    {:else}
      <img src={logoDark} alt="TASC logo - dark theme" class="h-6 md:h-8" />
    {/if}
  </div>

  <MenuWrapper {menuToggle} />

  <div class="flex">
    <ThemeToggle2 />
    <div class="contents md:hidden">
      <Hamburger bind:checked={menuToggle} />
    </div>
  </div>
</nav>

<hr class="m-4 sm:m-3 dark:border-zinc-800" />

<PersonCard />
