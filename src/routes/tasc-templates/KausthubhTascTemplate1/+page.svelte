<script>
  import bgAI from "$lib/images/bgAI.jpg";
  // This is how you import the image ig idk why it's not working
  const imgurl = new URL("$lib/images/bgAI.jpg", import.meta.url).href;
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

<!-- <img src={bgAI} alt="AI background" /> -->
<!-- I want to set a background image to this class="content" -->
<main class="content" />

<style>
  * {
    /* border: 1px solid red; */
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .navbar {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
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
    font-size: 16px;
    display: block;
    text-decoration: none;
    color: #fefdfd;
    padding: 1rem;
  }

  /* Here i set the background image to that url but it gives me error the image is not found */
  .content {
    background-image: url({imgurl});
    width: 100%;
  }
</style>
