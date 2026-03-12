import PocketBase from 'pocketbase';
const pb = new PocketBase('https://festicloze.sacha-martin.fr:443');

export async function artistesSorted() {
    const records = await pb.collection('artiste').getFullList({ sort: 'date_representation' });
    return records;
}

export async function scenesName() {
    const records = await pb.collection('scene').getFullList({ sort: 'nom_scene' });
    return records;
}

export async function artistesName() {
    const records = await pb.collection('artiste').getFullList({ sort: 'nom_artiste' });
    return records;
}

export async function artisteID(id) {
    const record = await pb.collection('artiste').getOne(id);
    return record;
}

export async function sceneID(id) {
    const record = await pb.collection('scene').getOne(id);
    return record;
}

export async function allartistebysceneId(id) {
    const records = await pb.collection('artiste').getFullList({ filter: `scene="${id}"`, sort: 'date_representation' });
    return records;
}

export async function allartistebysceneName(nom) {
    const scene = await pb.collection('scene').getFirstListItem(`nom_scene="${nom}"`);
    const records = await pb.collection('artiste').getFullList({ filter: `scene="${scene.id}"`, sort: 'date_representation' });
    return records;
}

export async function addArtiste(data) {
    const record = await pb.collection('artiste').create(data);
    return record;
}

export async function addScene(data) {
    const record = await pb.collection('scene').create(data);
    return record;
}

export async function updateArtiste(id, data) {
    const record = await pb.collection('artiste').update(id, data);
    return record;
}

export async function updateScene(id, data) {
    const record = await pb.collection('scene').update(id, data);
    return record;
}