<div class="flex flex-col overflow-hidden h-screen">
	<div class="flex flex-grow-0 flex-shrink-0 bg-slate-600 text-gray-100">Header (non scrollable)</div>
	<div class="flex-auto w-full overflow-scroll whitespace-nowrap hideScrollbar">
		<ul>
			<li>Menu Item Menu Entry Menu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu Entry ntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu Entry</li>
			{#each { length: 50 } as _, i}
				<li>Menu Item - {i}</li>
			{/each}
		</ul>
	</div>
	<div class="flex flex-grow-0 flex-shrink-0 bg-slate-600 text-gray-100">Footer (non scrollable)</div>
</div>

<style>
	/* Hide scrollbar for Chrome, Safari and Opera */
	.hideScrollbar::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.hideScrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
