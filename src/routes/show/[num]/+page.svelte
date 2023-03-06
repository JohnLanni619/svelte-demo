<script>
    export let data;
    $: ({ episode } = data)
    console.log(data.episode)
</script>

<h1>{`Episode #${episode.number}. ${episode.title}`}</h1>
<a href={episode.url}>Link to Episode</a>