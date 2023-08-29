<nav class="navbar">
  <div class="brand-title">TASC-LOGO</div>
  <div class="nav-links">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">Resources</a></li>
      <li><a href="/">Profile</a></li>
    </ul>
  </div>
</nav>

<svelte:head
  ><title>TASC</title>
  <style>
    :root {
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      background-color: black;
      color: white;
    }
  </style>
</svelte:head>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  .navbar {
    display: flex;
    position: relative;
    justify-content: space-between;
    background-color: aqua;
    align-items: center;
    padding: 5%;
  }
</style>
