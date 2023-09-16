<script lang="ts">
  import Hamburger from '$lib/components/hamburger/Hamburger.svelte';
  import MenuWrapper from './MenuWrapper.svelte';
  let menuToggle: boolean;

  import ThemeToggle2 from '$lib/components/theme/ThemeToggle2.svelte';

  import { darkTheme } from '$lib/stores/theme';
  import logoLight from '$lib/assets/TASCLogoLight.png';
  import logoDark from '$lib/assets/TASCLogoDark.png';
  import HRwithText from '$lib/components/hr/HRwithText.svelte';
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

<!-- bg-[#ECDBFF] dark:bg-[#000015] -->
<nav class="flex justify-between items-center h-10 mx-5 mt-3 md:mx-10 md:mb-4 md:mt-6">
  <div class="w-32">
    {#if $darkTheme === false}
      <img src={logoDark} alt="TASC logo - light theme" class="h-6 md:h-8" />
    {:else}
      <img src={logoDark} alt="TASC logo - dark theme" class="h-6 md:h-8" />
    {/if}
  </div>

  <MenuWrapper {menuToggle} />

  <div class="flex justify-end w-32">
    <ThemeToggle2 />
    <div class="contents md:hidden">
      <Hamburger bind:checked={menuToggle} />
    </div>
  </div>
</nav>

<!-- <HRwithText>DEPARTMENT of AIML</HRwithText> -->

<slot />
