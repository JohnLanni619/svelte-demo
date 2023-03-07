<script>
	import ProductCard from './ProductCard.svelte';
	/**
	 * @type {{ products: any; }}
	 */
	export let data;
	const { products } = data;
</script>

<div class="product-card-container">
	{#each products as product}
		<ProductCard
			thumbnail={product.thumbnail}
			id={product.id}
			title={product.title}
			price={product.price}
		/>
	{/each}
</div>

<style>
	.product-card-container {
		--min-column-size: 20rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(var(--min-column-size), 100%), 1fr));
		gap: 1rem;
		padding: 1rem;
	}
</style>