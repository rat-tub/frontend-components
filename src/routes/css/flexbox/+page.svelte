<script lang="ts">
    let container = {
        display: 'flex',
        'flex-direction': {
            value: 'row',
            options: ['row', 'row-reverse', 'column', 'column-reverse'],
        },
        'flex-wrap': {
            value: 'wrap',
            options: ['nowrap', 'wrap', 'wrap-reverse'],
        },
        'justify-content': {
            value: 'space-between',
            options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'left', 'right'],
        },
        'align-items': {
            value: 'center',
            options: ['stretch', 'center', 'flex-start', 'flex-end', 'baseline', 'first baseline', 'last baseline', 'start', 'end', 'self-start', 'self-end', 'safe center', 'unsafe center'],
        },
        'align-content': {
            value: 'center',
            options: ['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'baseline', 'first baseline', 'last baseline', 'safe center', 'unsafe center'],
        },
        width: {
            value: 50,
            unit: 'vw',
            options: ['vw', 'vh', '%', 'px', 'em', 'rem', 'cm', 'mm', 'in', 'pt', 'pc', 'ex', 'ch', 'vmin', 'vmax'],
        },
        height: {
            value: 50,
            unit: 'vh',
            options: ['vw', 'vh', '%', 'px', 'em', 'rem', 'cm', 'mm', 'in', 'pt', 'pc', 'ex', 'ch', 'vmin', 'vmax'],
        },
        // padding: '10%',
        // border: '10px solid rgb(233, 156, 156)',
        // margin: '10%',
    };
</script>

<label>
    <p>Choose Width : {container.width.value + container.width.unit}</p>
    <input type="number" bind:value={container.width.value} min="0" max="100" class="inline-block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    <input type="range" bind:value={container.width.value} min="0" max="100" />
    <select bind:value={container.width.unit} class="inline-block p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {#each container.width.options as option}
            <option value={option}>
                {option}
            </option>
        {/each}
    </select>
</label>

<label>
    <p>Choose Height : {container.height.value + container.height.unit}</p>
    <input type="number" bind:value={container.height.value} min="0" max="100" class="inline-block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    <input type="range" bind:value={container.height.value} min="0" max="100" />
    <select bind:value={container.height.unit} class="inline-block p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        {#each container.height.options as option}
            <option value={option}>
                {option}
            </option>
        {/each}
    </select>
</label>

<div class="grid grid-cols-3">
    <label>
        <p>flex-direction</p>
        <select bind:value={container['flex-direction'].value} class="inline-block p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {#each container['flex-direction'].options as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>
    </label>

    <label>
        <p>flex-wrap</p>
        <select bind:value={container['flex-wrap'].value} class="inline-block p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {#each container['flex-wrap'].options as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>
    </label>

    <label>
        <p>justify-content</p>
        <select bind:value={container['justify-content'].value} class="inline-block p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {#each container['justify-content'].options as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>
    </label>

    <label>
        <p>align-items</p>
        <select bind:value={container['align-items'].value} class="inline-block p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {#each container['align-items'].options as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>
    </label>

    <label>
        <p>align-content</p>
        <select bind:value={container['align-content'].value} class="inline-block p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {#each container['align-content'].options as option}
                <option value={option}>
                    {option}
                </option>
            {/each}
        </select>
    </label>
</div>

<div
    class="container"
    style="display: {container.display}; 
            flex-direction: {container['flex-direction'].value};
            flex-wrap: {container['flex-wrap'].value};
            justify-content: {container['justify-content'].value};
            align-items: {container['align-items'].value};
            align-content:  {container['align-content'].value};
            width: {container.width.value + container.width.unit};
            height: {container.height.value + container.height.unit}"
>
    <div class="item">asdfasdfasdf1</div>
    <div class="item">asdf2</div>
    <div class="item">asdf3</div>
</div>

<style>
    .container {
        background-color: #ea6363;
        margin: 10px;
        border: 10px solid rgb(233, 156, 156);
        /*  padding: 10%; */
    }
    .item {
        border: 2px solid black;
        padding: 10px;
    }
</style>
