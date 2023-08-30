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
  <div class="brand-title">TASC-LOGO</div>
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
    background-color: rgba(0, 0, 0, 0.6); /* Fallback background color */
    background-blend-mode: darken;
    height: 100vh;
  }

  .navbar {
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    background-image: url($lib/images/better.jpg);
    background-color: rgba(0, 0, 0, 0.6); /* Fallback background color */
    background-blend-mode: darken;
    background-repeat: repeat;
    width: 100%;
    color: white;
  }

  .brand-title {
    position: absolute;
    left: 0;
    font-size: 1.35rem;
    margin: 0.5rem;
    justify-self: flex-start;
  }

  .nav-links {
    height: 100%;
  }

  .nav-links ul {
    display: flex;
    margin: 0;
    padding: 0;
  }

  .nav-links li {
    list-style: none;
  }

  .nav-links li a {
    font-size: 20px;
    font-weight: bold;
    display: block;
    text-decoration: none;
    color: #ffffff;
    padding: 1rem;
  }
</style>
