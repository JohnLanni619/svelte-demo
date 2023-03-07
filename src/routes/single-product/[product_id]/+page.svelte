<script>
    export let data;
    $: ({ product } = data)
    console.log(data)
</script>

<div>
    <h1>{product.title}</h1>
</div>