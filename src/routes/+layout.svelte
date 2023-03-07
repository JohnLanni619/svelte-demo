<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import Episodes from './Episodes.svelte';

    export let data;
    $: ({  all_episodes } = data)
</script>

<Header />

<main>
    <div class="main">
        <slot />
    </div>
    <aside>
        <Episodes episodes={all_episodes} />
    </aside>
</main>

<Footer />

<style>
    main {
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 20px;
    }
    aside {
        order: -1;
        background-color: white;
        color: black;
        padding-block: 1rem;
        padding-inline-end: 1rem;
        height: calc(100vh - var(--header-height) - var(--footer-height));
        overflow: auto;
    }

</style>
