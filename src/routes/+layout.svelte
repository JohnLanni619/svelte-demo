<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<style>
    .wrapper {
        flex: 1;
        position: relative;
    }
    main {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: min(1500px, 95%);
        margin-inline: auto;
    }
    aside {
        background-color: orange;
        color: white;
        position: absolute;
        right: 0;
        top: 0;
        padding-block: 2rem;
        padding-inline: 4rem;
        height: 100%;
        display: none;
    }
</style>

<Header />

<div class="wrapper">
    <main>
        <slot />
    </main>
    
    <aside>
        <h1>test</h1>
    </aside>
</div>

<Footer />
