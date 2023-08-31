<script lang="ts">
    import { darkTheme } from '$lib/stores/theme';
</script>

<div class="inline-block">
    <input type="checkbox" bind:checked={$darkTheme} id="theme-toggle" />
    <label for="theme-toggle" />
</div>

<style lang="postcss">
    #theme-toggle {
        @apply hidden;
    }

    #theme-toggle + label {
        @apply inline-block cursor-pointer h-10 w-10 rounded-full duration-300 content-[''];
    }

    #theme-toggle:not(:checked) + label {
        @apply bg-amber-400;
    }

    #theme-toggle:checked + label {
        @apply bg-transparent;
        box-shadow: inset -14px -12px 1px 1px #ddd;
    }
</style>
