<script>
	import '$db/start.js'
	/**
	 * @type {{ latest_episode: any, all_episodes: any }} data
	 */
	 export let data;
	 $: ({ latest_episode} = data)
</script>

<h3> {latest_episode.title} </h3>
