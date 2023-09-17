<script lang="ts">
  import githubIcon from '$lib/assets/github-mark-white.svg';

  export let image: string;
  export let imageAlt: string = 'profile';
  export let name: string;
  export let role: string;
  export let quote: string = '';
  export let github: string | null = null;
  export let linkedin: string | null = null;
  export let instagram: string | null = null;
  export let email: string | null = null;
</script>

<div class="flex md:flex-wrap max-w-xs md:max-w-sm m-2 p-2 bg-gray-400 dark:bg-gray-800">
  <div class="w-full overflow-hidden h-44 pr-2 md:pr-0">
    <img class="w-full h-auto" src={image} alt={imageAlt} />
  </div>
  <div class="w-full">
    <h1 class="text-base">{name}</h1>
    <h2 class="text-base font-medium dark:text-indigo-700 text-purple-800">{role}</h2>

    <div class="flex gap-5 py-2">
      <a href={github}><img src={githubIcon} alt="GithubIcon" class="w-5 h-5" /></a>
      <a href={linkedin}> <img src={githubIcon} alt="linkedinIcon" class="w-5 h-5" /></a>
      <a href={instagram}> <img src={githubIcon} alt="instagramIcon" class="w-5 h-5" /></a>
    </div>
  </div>
</div>
