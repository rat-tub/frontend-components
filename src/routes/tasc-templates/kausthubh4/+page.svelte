<script lang="ts">
  import { darkTheme } from "$lib/stores/theme";
  import logoLight from "$lib/assets/TASCLogoLight.png";
  import logoDark from "$lib/assets/TASCLogoDark.png";
  import ThemeToggle2 from "$lib/components/theme/ThemeToggle2.svelte";
</script>

<svelte:head>
  <title>TASC</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter&family=Monoton&display=swap" rel="stylesheet" />

  <style>
    :root {
      --primary: #282ca4;
      --secondary: #1bffff;
    }
    * {
      font-family: "Inter";
    }
    body {
      margin: 0;
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
      overflow-y: hidden;
    }
    @media (max-width: 768px) {
      body {
        overflow-y: visible;
      }
    }
  </style>
</svelte:head>

<nav class="flex items-center justify-between p-4 text-black dark:text-white">
  <div class="order-1">
    {#if $darkTheme === false}
      <img src={logoLight} alt="TASC logo - light theme" style="height: 2rem;" />
    {:else}
      <img src={logoDark} alt="TASC logo - dark theme" style="height: 2rem;" />
    {/if}
  </div>

  <div class="order-last sm:order-2">
    <ul class="nav-links">
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      <div class="menu">
        <li class="flex justify-center items-center">
          <a href={null} class="text-black dark:text-white px-[10px] py-[5px] hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">Home</a>
        </li>
        <li class="flex justify-center items-center">
          <a href={null} class="text-black dark:text-white px-[10px] py-[5px] hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">About</a>
        </li>
        <li class="flex justify-center items-center">
          <a href={null} class="text-black dark:text-white px-[10px] py-[5px] hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black">Contact</a>
        </li>
        <li class="flex justify-center items-center"><ThemeToggle2 /></li>
      </div>
    </ul>
  </div>

  <div class="order-3 sm:order-2">
    <button class="btn px-4 py-1.5 rounded-full border-2 border-black font-semibold dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white">SignUp</button>
  </div>
</nav>

<div class="main-text"><h1>Welcome to <br /><span>TASC</span></h1></div>

<style>
  span {
    font-family: "Monoton";
    font-weight: 400;
    background: linear-gradient(var(--primary) 0%, var(--secondary) 100%);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* NAVBAR MENU */
  .menu {
    display: flex;
    gap: 1em;
    font-size: 18px;
  }

  .menu li a:hover {
    border-radius: 5px;
    font-weight: 600;
    transition: 0.3s ease;
  }

  .menu li {
    padding: 5px 10px;
  }

  input[type="checkbox"] {
    display: none;
  }

  /* HAMBURGER MENU */
  .hamburger {
    display: none;
    font-size: 24px;
    user-select: none;
    margin-top: 10px;
  }

  .main-text h1 {
    font-size: 60px;
    font-weight: bolder;
  }

  .main-text {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 639px) {
    .menu {
      display: none;
      position: absolute;
      right: 0;
      left: 0;
      text-align: center;
      padding: 16px 0;
    }

    .menu li:hover {
      /* display: inline-block; */
      transition: 0.3s ease;
    }

    .menu li + li {
      margin-top: 12px;
    }

    input[type="checkbox"]:checked ~ .menu {
      display: block;
    }

    .hamburger {
      display: block;
    }
  }
</style>
