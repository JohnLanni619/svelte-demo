<script>
	import Test from '$lib/Test.svelte';
	/**
	 * @type {{ hello: any; }}
	 */
	 export let data;
</script>

{#each data.test as value }
	<h1>{value}</h1>
{/each}

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<a href="/about">About Us</a>

<Test />