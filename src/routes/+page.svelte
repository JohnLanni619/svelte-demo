<script>
	import Test from '$components/Test.svelte'
	import '$db/start.js'
	/**
	 * @type {{ latest_episode: any, all_episodes: any }} data
	 */
	 export let data;
	 $: ({ latest_episode, all_episodes } = data)
</script>

<h3> {latest_episode.title} </h3>

<nav>
	<ul>
		{#each all_episodes as episode }
			<li>
				<a href={`/show/${episode.number}`}>{episode.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<Test test="hello" />