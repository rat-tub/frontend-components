<script>
  import Flower from '$lib/images/Flower.png';
  import Perfume from '$lib/images/Perfume.png';
</script>

<ul class="navbar">
  <li class="navItem navItem-1"><a href={null}>Home</a></li>
  <li class="navItem navItem-2"><a href={null}>New Collection</a></li>
  <li class="navItem navItem-3"><a href={null}>Accessories</a></li>
</ul>

<div class="innerPage">
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit magni odit maxime, voluptatem placeat eligendi rerum excepturi, officia veniam, a aperiam illum! Vitae totam minima maxime eius nisi quibusdam libero est, velit, aliquid, eum non tempore fugit inventore molestiae maiores nemo assumenda quos dignissimos ipsa iure vel iste. Aspernatur, fuga unde! Incidunt laboriosam eligendi magni facere facilis, amet nihil ut at expedita vitae beatae, doloribus accusantium ullam, modi est doloremque! Veniam magni rem sequi ratione quo nisi molestiae illum quis? Quibusdam ea maxime repudiandae, fugit quo sit! Nam ducimus molestias, quam deleniti soluta nihil voluptate sequi enim autem, optio totam!</p>
</div>

<img class="Image" src={Flower} alt="Flower" />
<img class="Image Perfume" src={Perfume} alt="Perfume Bottle" />

<div class="PerfumeDetails">
  <div class="ItemPerfumeName">Kenzo Pink Hanae</div>
  <button class="Buy">Buy Now</button>
</div>

<svelte:head>
  <style>
    body {
      background-color: #efcdfa;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
  </style>
</svelte:head>

<style>
  a {
    position: relative;
    text-decoration: none;
    color: black;
    padding: 0 10px;
  }

  a:after {
    content: '';
    position: absolute;
    background-color: black;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -8px;
    transition: 0.5s ease-in-out;
  }

  a:hover {
    transition: 0.25s ease;
    color: #103205;
  }

  a:hover:after {
    width: 100%;
  }

  .navbar {
    list-style: none;
    display: flex;
    font-size: 18px;
    position: relative;
    justify-content: center;
    left: 48.5%;
    transform: translate(-50%, 0);
    top: 0;
  }

  .navItem {
    padding: 17px;
    font-family: 'Open Sans';
  }

  .Image {
    position: absolute;
    width: 200px;
    justify-content: center;
    align-items: center;
    left: 62%;
    transform: translate(-50%, 50%);
    top: -5%;
  }

  .Perfume {
    width: 175px;
    left: 60%;
    top: 14%;
    filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.18));
  }

  .innerPage {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    padding: 25px 25px;
    max-width: 500px;
    height: 550px;
    border-radius: 8px;
    background-color: white;
    padding-right: 12%;
  }

  .ItemPerfumeName {
    position: relative;
    align-items: center;
    left: 84.57%;
    transform: translate(-50%, 50%);
    top: -45px;
    font-weight: bold;
  }

  .Buy {
    position: relative;
    transform: translate(-50%, 50%);
    left: 39.5%;
    top: -128px;
    width: 140px;
    height: 38px;
    border-radius: 250px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: black;
    font-size: 14px;
    background-color: #efcdfa;
    border: none;
    cursor: pointer;
  }

  .Buy:hover {
    transition: 0.2s ease-in-out;
    color: white;
  }
</style>
