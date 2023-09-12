<script lang="ts">
  import { darkTheme } from '$lib/stores/theme';
  import logoLight from '$lib/assets/TASCLogoLight.png';
  import logoDark from '$lib/assets/TASCLogoDark.png';
  import ThemeToggle2 from '$lib/components/theme/ThemeToggle2.svelte';
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
      font-family: 'Inter';
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

<nav class="navbar">
  <div class="logo">
    {#if $darkTheme === false}
      <img src={logoLight} alt="TASC logo - light theme" style="height: 2rem; flex-shrink: 0;" />
    {:else}
      <img src={logoDark} alt="TASC logo - light theme" style="height: 2rem; flex-shrink: 0;" />
    {/if}
  </div>

  <ul class="nav-links">
    <input type="checkbox" id="checkbox_toggle" />
    <label for="checkbox_toggle" class="hamburger">&#9776;</label>

    <div class="menu">
      <li><a href="#top">Home</a></li>
      <li><a href="#top">About</a></li>
      <li><a href="#top">Contact</a></li>
      <li><ThemeToggle2 /></li>
    </div>
  </ul>

  <button class="btn absolute right-0 mr-6 px-4 py-1.5 rounded-full border-2 border-white font-semibold">SignUp</button>
</nav>

<div class="main-text"><h1>Welcome to <br /><span>TASC</span></h1></div>

<style>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: #fff;
  }

  .nav-links li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    font-family: 'Monoton';
    font-weight: 400;
    background: linear-gradient(var(--primary) 0%, var(--secondary) 100%);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .nav-links li a {
    color: #fff;
    padding: 5px 10px;
  }

  /* LOGO */
  .logo {
    position: absolute;
    left: 0;
    margin-left: 25px;
    font-size: 32px;
  }

  /* NAVBAR MENU */
  .menu {
    display: flex;
    gap: 1em;
    font-size: 18px;
  }

  .menu li a:hover {
    background-color: #ffffff;
    border-radius: 5px;
    color: black;
    font-weight: 600;
    transition: 0.3s ease;
  }

  .menu li {
    padding: 5px 10px;
  }

  input[type='checkbox'] {
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

  @media (max-width: 768px) {
    .btn,
    .logo {
      margin-top: 20px;
    }
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

    input[type='checkbox']:checked ~ .menu {
      display: block;
    }

    .hamburger {
      display: block;
    }
  }
</style>
