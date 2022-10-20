export default async function loadMapData (name) {
    const resp = await fetch(`/data/scenes/${name}.json`);
    const json = await resp.json();

    json.layers = json.layers.map(function fixRows (layer) {
        layer.data = [...new Array(layer.height)].map(function (_, i) {
            return layer.data.slice(i * layer.width, (i + 1) * layer.width)
        });

        return layer;
    }); 

    return json;
}