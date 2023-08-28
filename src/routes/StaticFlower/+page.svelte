<ul class="navbar">
  <li class="navItem navItem-1"><a href="/StaticFlower">Home</a></li>
  <li class="navItem navItem-2"><a href="/StaticFlower">New Collection</a></li>
  <li class="navItem navItem-3"><a href="/StaticFlower">Accessories</a></li>
</ul>

<!-- <div class="innerPage">
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nihil, neque
    accusamus asperiores sint corporis rem nemo cum ratione fuga earum
    praesentium! Consequuntur amet aspernatur, et corporis ipsam sint? Nostrum.
  </p>
</div> -->

<img class="Image" src="src/Resources/Flower.png" alt="Flower" />
<img
  class="Image Perfume"
  src="src/Resources/Perfume.png"
  alt="Perfume Bottle"
/>

<div class="PerfumeDetails">
  <div class="ItemPerfumeName">Kenzo Pink Hanae</div>
</div>

<style>
  :root {
    background-color: #efcdfa;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  a {
    position: relative;
    text-decoration: none;
    color: black;
    padding: 0 10px;
  }

  a:after {
    content: "";
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
    font-size: 25px;
    position: relative;
    justify-content: center;
    left: 50%;
    transform: translate(-50%, 0);
    top: 0;
  }

  .navItem {
    padding: 17px;
    font-family: "Open Sans";
  }

  .Image {
    position: absolute;
    width: 200px;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translate(-50%, 50%);
    top: -5%;
  }

  .Perfume {
    width: 175px;
    left: 48%;
    top: 14%;
    box-shadow: 10%;
  }

  /* .innerPage {
    display: flex;
    padding: 25px;
    max-width: 250px;
    background-color: white;
  } */

  .ItemPerfumeName {
    position: absolute;
    align-items: center;
    justify-content: center;
    left: 48.1%;
    transform: translate(-50%, 50%);
    top: 85%;
    font-weight: bold;
  }
</style>
