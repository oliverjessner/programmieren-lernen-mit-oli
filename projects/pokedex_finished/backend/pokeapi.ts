export default async function pokeapi(pokemonName: string) {
    const pokeReq = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const speciesReq = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`);
    const [pokemonData, speciesData] = await Promise.all([pokeReq, speciesReq]);
    const pokemon = (await pokemonData.json()) as object;
    const species = (await speciesData.json()) as object;

    return {
        ...pokemon,
        ...species,
    };
}
