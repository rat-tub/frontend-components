<script lang="ts">
    import { unit } from './store';
    import { Options } from './box';

    export let property: string;
    export let selectedValue: {
        value: number;
        unit: string;
    };

    $: selectedValue.unit = $unit;
</script>

<label class="flex flex-col w-min p-1">
    <p class="text-xs max-w-fit sm:text-sm">{property} : {selectedValue.value + selectedValue.unit}</p>
    <input name="value" type="number" bind:value={selectedValue.value} min={Options.unit[$unit].range[0] * Options[property].scale[0]} max={Options.unit[$unit].range[1] * Options[property].scale[0]} step={Options.unit[$unit].step * Options[property].scale[1]} class="inline-block p-2 max-w-md text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    <input name="slider" type="range" bind:value={selectedValue.value} min={Options.unit[$unit].range[0] * Options[property].scale[0]} max={Options.unit[$unit].range[1] * Options[property].scale[0]} step={Options.unit[$unit].step * Options[property].scale[1]} />
    <!-- <select bind:value={selectedValue.unit} class="inline-block w-full max-w-fit max p-2 mb-1 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {#each Options.width.options as option}
            <option value={option}>
                {option}
            </option>
        {/each}
    </select> -->
</label>
