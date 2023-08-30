<script>
  import tasc from "$lib/images/tasc-low-quality.jpg";
</script>

<svelte:head>
  <title>TASC</title>
  <style>
    :root {
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      background-color: black;
      color: white;
    }
    body {
      margin: 0;
    }
  </style>
</svelte:head>

<nav class="navbar">
  <img src={tasc} alt="tasc logo" class="brand-title" />
  <input type="checkbox" class="toggle-menu" />
  <div class="hamburger" />
  <div class="nav-links">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">Resources</a></li>
      <li><a href="/">Profile</a></li>
      <li><a href="/">Support</a></li>
    </ul>
  </div>
</nav>

<main class="background" />

<style>
  * {
    /* border: 1px solid red; */
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .background {
    background-image: url($lib/images/better.jpg);
    background-repeat: repeat;
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: darken;
    height: 100vh;
  }

  .navbar {
    flex-direction: row;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    background-image: url($lib/images/better.jpg);
    background-color: rgba(0, 0, 0, 0.6);
    background-blend-mode: darken;
    background-repeat: repeat;
    width: 100%;
    color: white;
    height: 8vh;
  }

  .brand-title {
    cursor: pointer;
    width: 60px;
    border-radius: 5px;
    position: absolute;
    left: 0;
    font-size: 1.35rem;
    margin: 1rem;
    justify-self: flex-start;
  }

  .nav-links {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .nav-links ul {
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0;
    height: 100%;
    gap: 10px;
  }

  .nav-links li {
    list-style: none;
  }

  .nav-links li a {
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 200px;
    height: 100%;
  }
  .nav-links li a:hover {
    background-color: white;
    color: black;
    transition: 0.3s;
  }
  .toggle-menu {
    opacity: 0;
    position: relative;
    top: 100%;
    width: 30px;
    display: block; /* Show checkbox for toggling menu */
  }

  .hamburger {
    position: relative;
    display: none;
    width: 30px;
    height: 3px;
    background-color: white;
    transition: 0.3s;
  }
  .hamburger::before,
  .hamburger::after {
    position: absolute;
    content: "";
    background-color: white;
    height: 3px;
  }
  .hamburger::before {
    top: -10px;
    width: 30px;
  }
  .hamburger::after {
    top: 10px;
    width: 30px;
  }

  @media (max-width: 640px) {
    .navbar {
      flex-direction: column;
      align-items: flex-start;
      padding: 1rem;
      height: auto;
    }

    .nav-links ul {
      display: none;
    }

    .brand-title {
      position: static;
      margin: 1rem 0;
    }

    .toggle-menu:checked ~ .nav-links {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }

    .toggle-menu:checked ~ .nav-links ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 2rem;
    }

    .toggle-menu:checked ~ .nav-links ul li {
      padding: 0.25rem;
    }

    .toggle-menu,
    .hamburger {
      display: flex;
      position: relative;
      align-self: flex-end;
      top: -50px;
    }
    .toggle-menu:checked ~ .hamburger {
      background-color: transparent;
    }

    .toggle-menu:checked ~ .hamburger::after {
      transform: rotate(45deg);
    }

    .toggle-menu:checked ~ .hamburger::before {
      transform: rotate(-45deg);
      top: 10px;
    }
  }
</style>
