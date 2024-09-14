<script>
	import { productList, addProduct,ispresent } from './../lib/index.js';
</script>

<div class="bg-gray-900 py-10 sm:py-10 ">
	<div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
		<div class="ml-4 flow-root lg:ml-6 w-fit">
			<a href="/cart" class="group -m-2 flex items-center p-2">
				<svg
					class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
					/>
				</svg>
				<!-- <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span> -->
			</a>
		</div>
		<ul
			role="list"
			class="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
		>
			{#each productList as i}
				<li class="rounded-2xl bg-gray-800 px-8 py-4">
					<img
						class="mx-auto h-48 w-48 rounded-full border-2 border-black md:h-56 md:w-56"
						src={i.img}
						alt=""
					/>

					<div class="p-5 text-white">
						<button
							type="submit"
							on:click={() => {
								if(ispresent(i.id)===true){
									alert("Already in cart");
									return;
								}
								else{
									addProduct(i);
								}
							}}
							class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-600 px-8 py-3 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>Add to Cart</button
						>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
