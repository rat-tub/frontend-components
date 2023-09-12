<svelte:head>
  <title>TASC</title>
  <style>
    :root {
      font-family: "sans-serif";
      color: white;
    }
    body {
      margin: 0;
    }
  </style>
  <!--     background-color: rgba(0, 0, 0, 0.25);
    background-blend-mode: darken; -->
</svelte:head>
<nav style="font-family: Arial, Helvetica, sans-serif;">
  <div class="px-10 mx-auto text-white">
    <div
      class="flex px-4 py-2 justify-center items-center
    "
    >
      <!-- Logos -->
      <a
        href="/"
        class="flex space-x-1 absolute left-0 px-5 hover:text-slate-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
          />
        </svg>
        <span class="text-bold">TASC</span>
      </a>
      <!-- Nav Items -->
      <div class="flex px-2 py-3 first-letter space-x-4 text-1xl">
        <a class="px-6 py-3 hover:text-slate-400" href="/">Home</a>
        <a class="px-6 py-3 hover:text-slate-400" href="/">Profile</a>
        <a class="px-6 py-3 hover:text-slate-400" href="/">Support</a>
        <a class="px-6 py-3 hover:text-slate-400" href="/">Resources</a>
      </div>
    </div>
  </div>
  <!--Mobile View! -->
</nav>
<main class="background" />
<h1
  class="text-6xl bold text-slate-100 flex justify-center items-center border border-red-500 h-max"
>
  Welcome to TASC!
</h1>

<style>
  * {
    /* border: 1px solid red; */
  }
  .background {
    background: url($lib/images/bluebg.jpg);
    background-color: rgba(0, 0, 0, 0.65);
    background-blend-mode: darken;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
