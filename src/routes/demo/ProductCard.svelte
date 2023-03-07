<script>
    /**
	 * @type {string}
	 */
     export let thumbnail
     
    /**
	 * @type {number}
	 */
     export let id
     
    /**
	 * @type {string}
	 */
     export let title
     
    /**
	 * @type {number}
	 */
     export let price
</script>

<div class="product-card">
    <img src={thumbnail} alt="">
    <div class="product-information">
		<a href={`/single-product/${id}`}>
            {title}
		</a>
        <p>${price}</p>

    </div>
</div>

<style>
    .product-card {
		box-shadow: 0 0 3px black;
		padding-block-end: 1rem;
	}
	.product-information {
		padding-inline: 1rem;
	}
	img {
		width: 100%;
		aspect-ratio: 16 / 9;
		object-fit: cover;
	}
</style>