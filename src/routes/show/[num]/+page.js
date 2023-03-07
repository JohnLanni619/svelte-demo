// @ts-ignore
export async function load({ fetch, params }) {
    const { num } = params
    const res = await fetch(`https://syntax.fm/api/shows/${num}`);
    const data = await res.json();
    return {
        episode: data
    };
}