<script lang="ts">
    import CSSPropertySlider from './CSSPropertySlider.svelte';
    import SelectCSSProperty from './CSSProperty.svelte';
    import BoxComponent from './BoxComponent.svelte';

    import { smallBox, type FlexBoxInterface, initialFlexBox, type FlexBoxStackInterface } from './box';
    import { boxAdjust, count } from './store';

    let box: FlexBoxInterface = structuredClone(smallBox);

    $: $boxAdjust = box;

    let stack: FlexBoxStackInterface = { boxInfo: structuredClone(initialFlexBox), children: [] };
</script>

<div class="flex justify-center p-3">
    <span>Number of Items : </span>
    <input type="number" bind:value={$count} min="0" max="20" class="inline-block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
</div>

<div class="flex flex-wrap">
    <CSSPropertySlider property="width" bind:selectedValue={box['width']} />
    <CSSPropertySlider property="height" bind:selectedValue={box['height']} />
    <CSSPropertySlider property="border" bind:selectedValue={box['border']} />
    <CSSPropertySlider property="margin" bind:selectedValue={box['margin']} />
    <CSSPropertySlider property="padding" bind:selectedValue={box['padding']} />

    <SelectCSSProperty property="flex-direction" bind:selectedOption={box['flex-direction']} />
    <SelectCSSProperty property="flex-wrap" bind:selectedOption={box['flex-wrap']} />
    <SelectCSSProperty property="justify-content" bind:selectedOption={box['justify-content']} />
    <SelectCSSProperty property="align-items" bind:selectedOption={box['align-items']} />
    <SelectCSSProperty property="align-content" bind:selectedOption={box['align-content']} />
</div>

<div class="flex justify-center">
    <BoxComponent {stack} bind:box />
</div>
