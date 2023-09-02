<script lang="ts">
    import CSSPropertySlider from './CSSPropertySlider.svelte';
    import CSSProperty from './CSSProperty.svelte';
    import BoxComponent from './BoxComponent.svelte';

    import { smallBox, type FlexBoxInterface, initialFlexBox, type FlexBoxStackInterface, Options } from './box';
    import { boxAdjust, count, display, unit } from './store';

    let box: FlexBoxInterface = structuredClone(smallBox);

    $: $boxAdjust = box;

    let stack: FlexBoxStackInterface = { boxInfo: structuredClone(initialFlexBox), children: [] };
</script>

<div class="flex justify-evenly p-3">
    <div class="grid grid-cols-1 sm:grid-cols-2 content-normal sm:content-center">
        <label for="child count" class="text-xs w-min max-w-fit sm:text-sm lg:text-lg">Children&nbsp;:&nbsp;</label>
        <input id="child count" type="number" bind:value={$count} min="0" max="20" class="inline-block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 content-normal sm:content-center">
        <label for="unit" class="text-xs w-min max-w-fit sm:text-sm lg:text-lg">Unit&nbsp;:&nbsp;</label>
        <select id="unit" bind:value={$unit} class="inline-block max-w-fit max p-2 mb-1 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {#each Options.unit.options as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 content-normal sm:content-center">
        <label for="display" class="text-xs w-min max-w-fit sm:text-sm lg:text-lg">Display&nbsp;:&nbsp;</label>
        <select id="display" bind:value={$display} class="inline-block max-w-fit max p-2 mb-1 text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {#each Options.display.options as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>
    </div>
</div>

<div class="flex flex-wrap justify-around">
    <CSSPropertySlider property="width" bind:selectedValue={box['width']} />
    <CSSPropertySlider property="height" bind:selectedValue={box['height']} />
    <CSSPropertySlider property="border" bind:selectedValue={box['border']} />
    <CSSPropertySlider property="margin" bind:selectedValue={box['margin']} />
    <CSSPropertySlider property="padding" bind:selectedValue={box['padding']} />

    <CSSProperty property="flex-direction" bind:selectedOption={box['flex-direction']} />
    <CSSProperty property="flex-wrap" bind:selectedOption={box['flex-wrap']} />
    <CSSProperty property="justify-content" bind:selectedOption={box['justify-content']} />
    <CSSProperty property="align-items" bind:selectedOption={box['align-items']} />
    <CSSProperty property="align-content" bind:selectedOption={box['align-content']} />
</div>

<hr class="m-2" />

<div class="flex justify-center">
    <BoxComponent {stack} bind:box />
</div>
