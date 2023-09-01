<script lang="ts">
    import Box from './BoxComponent.svelte';
    import { boxAdjust, count, toggle } from './store';

    import { smallStack, type FlexBoxStackInterface, type FlexBoxInterface } from './box';

    export let selected: boolean = false;
    export let stack: FlexBoxStackInterface;
    export let box: FlexBoxInterface;

    $: if (selected) stack.boxInfo = $boxAdjust;
    $: {
        $toggle, (selected = false);
    }

    /*
     * Adjust the number of children
     */
    $: {
        if (selected === true) {
            if (stack.children.length < $count) {
                stack.children = [...stack.children, structuredClone(smallStack)];
            } else if (stack.children.length > $count) {
                stack.children.pop();
                stack = stack;
            }
        }
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    on:keydown={() => {
        console.log('keydown');
    }}
    on:click|preventDefault|stopPropagation={() => {
        // toggle to inform other boxes to unselect
        $toggle = !$toggle;

        setTimeout(() => {
            // set count to the correct value! You don't want extra children
            $count = stack.children.length;

            // update the box
            box = structuredClone(stack.boxInfo);

            selected = true;
        }, 0);
    }}
    class="container"
    style="display: {stack.boxInfo.display}; 
            flex-direction: {stack.boxInfo['flex-direction']};
            flex-wrap: {stack.boxInfo['flex-wrap']};
            justify-content: {stack.boxInfo['justify-content']};
            align-items: {stack.boxInfo['align-items']};
            align-content:  {stack.boxInfo['align-content']};
            width: {stack.boxInfo.width.value + stack.boxInfo.width.unit};
            height: {stack.boxInfo.height.value + stack.boxInfo.height.unit};
            border: {stack.boxInfo.border.value + stack.boxInfo.border.unit} solid black;
            margin: {stack.boxInfo.margin.value + stack.boxInfo.margin.unit};
            padding: {stack.boxInfo.padding.value + stack.boxInfo.padding.unit}"
>
    <!-- {selected}{$count} -->
    {#each { length: stack.children.length } as _, i}
        <Box stack={structuredClone(smallStack)} bind:box />
    {/each}
</div>

<style lang="postcss">
    .container {
        @apply border-2 border-black dark:border-white bg-black dark:bg-white bg-opacity-0 hover:bg-opacity-20;
        /*  padding: 10%; */
    }
</style>
