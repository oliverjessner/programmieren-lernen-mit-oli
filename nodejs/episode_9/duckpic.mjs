import tf from '@tensorflow/tfjs-node';
import nsfw from 'nsfwjs';
import fs from 'node:fs/promises';

const model = await nsfw.load();
const img = await fs.readFile('imgs/duckpic.jpg');
const decodedImg = await tf.node.decodeImage(img, 3);
const data = await model.classify(decodedImg);

console.log(data);
