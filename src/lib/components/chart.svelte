<script>
	import { cardList, plus } from './../index.js';
	$: totalnums = $cardList.reduce((acc, item) => acc + item.num, 0);

</script>

<div class="bg-gray-900 py-10 sm:py-10">
	<div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
		<div class="p-5 text-white">
			<h1 class="bold bg-gray-700">Total Quantity : {totalnums}</h1>
		</div>
		<ul
			role="list"
			class="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
		>
			{#each $cardList as i}
				<li class="rounded-2xl bg-gray-800 px-8 py-4">
					<img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={i.img} alt="" />

					<div class="p-5 text-white">
						<button
							on:click={() => {
								plus(i.id);
							}}
							class="w-6 bg-slate-600 text-white"
						>
							+
						</button>
						{i.num}
						<button
							on:click={() => {
								i.num = i.num - 1;
							}}
							class="w-6 bg-slate-600 text-white"
						>
							-
						</button>
					</div>
				</li>
			{:else}
				<h1 class="text-white">Empty cart </h1>
			{/each}
		</ul>
		
	</div>
</div>
