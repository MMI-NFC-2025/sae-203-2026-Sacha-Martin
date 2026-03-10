import { artistesSorted, scenesName, artistesName, artisteID, sceneID, allartistebysceneId, allartistebysceneName, addArtiste, addScene, updateArtiste, updateScene } from './backend.mjs';

/* artistes par date */
// try {
//     const records = await artistesSorted();
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e);
// }

/* scenes par nom */
// try {
//     const records = await scenesName();
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e);
// }

/* artistes par nom */
// try {
//     const records = await artistesName();
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e);
// }

/* info d'un artiste par id */
// try { 
//     const records = await artisteID('sx63s1rcqc6aear'); 
//     console.log(JSON.stringify(records, null, 2)); 
// } catch (e) { 
//     console.error(e);
// }

/* info d'une scene par id */
// try { 
//     const records = await sceneID('l2jobyy15rh9ulg'); 
//     console.log(JSON.stringify(records, null, 2)); 
// } catch (e) { 
//     console.error(e);
// }

/* artistes d'une scene par id de la scene et trié par date */
// try {
//     const records = await allartistebysceneId('r329r7ol8t7xtah');
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e);
// }

/*artistes d'une scene par nom de la scene et trié par date */ 
// try {
//     const records = await allartistebysceneName('Temple Saint-Martin');
//     console.log(JSON.stringify(records, null, 2));
// } catch (e) {
//     console.error(e);
// }

/* ajouter un artiste */ 
// try {
//     const artisteData = {
//         "nom": "Sacha Martin",
//         "date_de_representation": "2026-08-29T20:00:00.000Z",
//         "scene" : "n29ly34jcyoswgb",
//         "description" : "Dresseur de pokemon hors pair",
// }; 
//     await addArtiste(artisteData);
// } catch (e) {
//     console.error(e);
// }

/* ajouter une scene */
// try {
//     const sceneData = {
//         "nom": "Château des Ducs",
//         "artistes": ["fj5u4cp6rghxh9y"],
//         "description": "Le Château des Ducs de Wurtemberg de Montbéliard est un château fort médiéval situé au cœur de Montbéliard, dans le Doubs en région Franche-Comté (aujourd’hui intégrée à Bourgogne‑Franche‑Comté). Ancienne résidence des ducs de Wurtemberg, il constitue l’un des principaux monuments historiques de la ville et abrite aujourd’hui le Musée du Château des Ducs de Wurtemberg. L’ensemble du château et ses différentes tours et bâtiments sont classés aux monuments historiques depuis le 21 juillet 1996.",
// }; 
//     await addScene(sceneData);
// } catch (e) {
//     console.error(e);
// }

/* modifier un artiste */
// try {
//     const data = {
//         "nom": "Renaud Capuçon",
//         "date_representation": "2026-03-22 16:00:00",
//         "scene": "r329r7ol8t7xtah",
//         "description": "Renaud Capuçon est un violoniste français de renommée internationale, né en 1976. Son répertoire est vaste, couvrant la musique de chambre et les grands concertos classiques (Mozart, Beethoven, Brahms) jusqu'aux créations contemporaines. Soliste très sollicité, il joue sur un instrument d'exception, le Guarneri del Gesù « Panette » de 1737, et dirige également l'Orchestre de Chambre de Lausanne.",
//     };
//     const record = await updateArtiste('0x089f3b553iezf', data);
//     console.log("Artiste mis à jour avec succès");
//     console.log(JSON.stringify(record, null, 2));
// } catch (e) {
//     console.error(e);
// }

/* modifier une scene*/
// try {
//     const data = {
//         "nom": "Temple Saint-Martin",
//         "artistes": ["sx63s1rcqc6aear"],
//         "description": "Le Temple Saint-Martin de Montbéliard est un temple protestant de style Renaissance construit au début du XVIIᵉ siècle dans le Doubs, en Franche-Comté (aujourd’hui région Bourgogne-Franche-Comté). Édifié entre 1601 et 1607 à l’époque des ducs de Wurtemberg, il est dédié à saint Martin et constitue l’un des plus anciens temples protestants de France. Le temple est classé aux monuments historiques depuis le 6 décembre 1963.",
//     };
//     const record = await updateScene('l2jobyy15rh9ulg', data);
//     console.log("Scène mise à jour avec succès");
//     console.log(JSON.stringify(record, null, 2));
// } catch (e) {
//     console.error(e);
// }