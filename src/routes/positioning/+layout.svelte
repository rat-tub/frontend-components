<script>
  import { base } from "$app/paths";
  import "./style.css";
</script>

<nav class=" mt-2 flex w-screen justify-center items-center text-center">
  <ul class="flex">
    <li class="mr-6">
      <a class="text-blue-500 hover:text-blue-800" href="{base}/">Home</a>
    </li>
    <li class="mr-6">
      <a
        class="text-blue-500 hover:text-blue-800"
        href="{base}/positioning/static/">Static</a
      >
    </li>
    <li class="mr-6">
      <a
        class="text-blue-500 hover:text-blue-800"
        href="{base}/positioning/relative/">Relative</a
      >
    </li>
    <li class="mr-6">
      <a
        class="text-blue-500 hover:text-blue-800"
        href="{base}/positioning/absolute">Absolute</a
      >
    </li>
    <li class="mr-6">
      <a
        class="text-blue-500 hover:text-blue-800"
        href="{base}/positioning/fixed">Fixed</a
      >
    </li>
    <li class="mr-6">
      <a
        class="text-blue-500 hover:text-blue-800"
        href="{base}/positioning/sticky">Sticky</a
      >
    </li>
  </ul>
</nav>

<slot />
