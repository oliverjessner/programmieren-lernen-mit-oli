export default async function pokeapi(pokemonName: string) {
    const pokemonReq = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const speciesReq = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
    const [pokemonData, speciesData] = await Promise.all([pokemonReq, speciesReq]);
    const p = (await pokemonData.json()) as object;
    const s = (await speciesData.json()) as object;

    return { ...p, ...s };
}
