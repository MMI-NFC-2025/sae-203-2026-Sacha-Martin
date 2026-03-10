import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

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