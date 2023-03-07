<script>
    export let episodes
</script>

<nav>
	<ul>
		{#each episodes as episode }
			<li>
				<a href={`/show/${episode.number}`}>{episode.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	li {
		padding-block: 0.5rem;
	}
	a {
		color: black;
	}
	a:visited {
		opacity: 0.5;
	}
</style>