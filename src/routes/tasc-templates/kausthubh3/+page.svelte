<svelte:head>
  <title>TASC</title>
  <style>
    body {
      margin: 0;
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
      overflow-y: hidden;
    }
  </style>
</svelte:head>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Inter&family=Monoton&display=swap"
  rel="stylesheet"
/>

<nav>
  <div class="main-div px-10 m-auto text-white">
    <div
      class="flex px-4 py-1 justify-center items-center
    "
    >
      <!-- Logos -->
      <a
        href="/"
        class="flex space-x-1 absolute left-0 px-5 hover:text-slate-300"
      >
        <span class="text-bold">TASC</span>
      </a>
      <!-- Nav Items -->
      <div
        class="nav-div flex px-2 py-3 first-letter space-x-4 text-1xl font-bold"
      >
        <a class="px-4 py-1.5 bg-white text-black" href="/">Home</a>
        <a class="px-6 py-1.5" href="/">Profile</a>
        <a class="px-6 py-1.5" href="/">Support</a>
        <a class="px-6 py-1.5" href="/">Resources</a>
      </div>
      <button
        class="btn flex space-x-1 absolute right-0 px-5 py-1.5 rounded-full border border-white mr-5"
        >Sign Up</button
      >

      <input
        type="checkbox"
        name="click-ham"
        id="click-ham"
        class="flex w-8 h-8 cursor-pointer absolute right-0 mr-5 menu-btn opacity-1"
      />
      <label
        for="click-ham"
        class="flex w-4 h-4 cursor-pointer absolute right-0 mr-5"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="flex w-8 h-8 absolute right-0 mr-5 menu-icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
    <!-- <ThemeToggle2 /> Lighter themed website is for later! -->
  </div>

  <!--Mobile View! -->
</nav>

<div class="main-text"><h1>Welcome to <br /><span>TASC</span></h1></div>

<nav />

<!-- write an html component to build a responsive navbar -->

<style>
  :root {
    --primary: #282ca4;
    --secondary: #1bffff;
  }
  * {
    font-family: "Inter";
    /* border: red 1px solid; */
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

  span {
    font-family: "Monoton";
    font-weight: 400;
    background: linear-gradient(var(--primary) 0%, var(--secondary) 100%);
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .menu-icon {
    display: none;
  }

  @media (max-width: 764px) {
    .nav-div {
      display: none;
    }
    .main-div {
      margin: 30px;
    }

    .btn {
      display: none;
    }

    .menu-icon {
      display: block;
    }
  }
</style>
