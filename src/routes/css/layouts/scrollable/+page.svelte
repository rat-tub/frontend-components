<div class="flex-container">
	<div class="nonscrollable">Header (non scrollable)</div>
	<div class="scrollable hideScrollbar">
		<ul>
			<li>Menu Item Menu Entry Menu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu Entry ntryMenu EntryMenu EntryMenu EntryMenu EntryMenu EntryMenu Entry</li>
			{#each { length: 50 } as _, i}
				<li>Menu Item - {i}</li>
			{/each}
		</ul>
	</div>
	<div class="nonscrollable">Footer (non scrollable)</div>
</div>

<style>
	.flex-container {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		height: 100vh;
	}

	.scrollable {
		width: 100%;
		flex: 1 1 auto;
		overflow: scroll;
		text-wrap: nowrap;
	}

	.nonscrollable {
		flex: 0 0 auto;
		background: #594040;
		color: white;
	}

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
