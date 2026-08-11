// Italian counterpart of pokemon-info-data.ts - same species keys, same
// shape (PokemonInfoEntry), sourced the same way but with PokeAPI's
// Italian flavor text/move data instead of English. Stats are numbers,
// not translated text, and are identical to the English file.
import { PokemonElementType } from './types'
import { PokemonInfoEntry } from './pokemon-info-data'

export const POKEMON_INFO_DATA_IT: { [key: string]: PokemonInfoEntry } = {
  bulbasaur: {
    flavorText: 'Alla nascita gli è stato piantato sulla schiena un seme raro. La pianta sboccia e cresce con lui.',
    stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Frustata', type: PokemonElementType.grass, power: 45, description: 'Infligge danni al bersaglio con liane sottili simili a fruste.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
    ],
  },
  ivysaur: {
    flavorText: 'Dopo aver assorbito sufficienti sostanze nutrienti, il bulbo sulla schiena sboccia in un magnifico fiore.',
    stats: { hp: 60, attack: 62, defense: 63, specialAttack: 80, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'Frustata', type: PokemonElementType.grass, power: 45, description: 'Infligge danni al bersaglio con liane sottili simili a fruste.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
    ],
  },
  venusaur: {
    flavorText: 'Si riempie di energia grazie ai grandi petali del fiore, che spalanca catturando i raggi solari.',
    stats: { hp: 80, attack: 82, defense: 83, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'Frustata', type: PokemonElementType.grass, power: 45, description: 'Infligge danni al bersaglio con liane sottili simili a fruste.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
    ],
  },
  charmander: {
    flavorText: 'La fiamma che Charmander ha sulla coda indica la sua forza vitale. Se è in forma, la fiamma è vivace.',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Ira di Drago', type: PokemonElementType.dragon, power: null, description: 'Colpisce il bersaglio con un’onda d’urto generata dall’ira. Questo attacco provoca sempre un danno di 40 PS.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Ferrartigli', type: PokemonElementType.steel, power: 50, description: 'Colpisce il bersaglio con artigli d’acciaio. Può anche aumentare l’Attacco di chi la usa.' },
    ],
  },
  charmeleon: {
    flavorText: 'Fa cadere a terra il nemico colpendolo con la coda, per poi finirlo con gli artigli affilati.',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'Ira di Drago', type: PokemonElementType.dragon, power: null, description: 'Colpisce il bersaglio con un’onda d’urto generata dall’ira. Questo attacco provoca sempre un danno di 40 PS.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Ferrartigli', type: PokemonElementType.steel, power: 50, description: 'Colpisce il bersaglio con artigli d’acciaio. Può anche aumentare l’Attacco di chi la usa.' },
    ],
  },
  charizard: {
    flavorText: 'Quando emette le sue lingue di fuoco, la fiamma rossa sulla punta della coda brucia più intensamente.',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: 'Ira di Drago', type: PokemonElementType.dragon, power: null, description: 'Colpisce il bersaglio con un’onda d’urto generata dall’ira. Questo attacco provoca sempre un danno di 40 PS.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
    ],
  },
  squirtle: {
    flavorText: 'Si ritira nel suo guscio e, alla prima occasione, contrattacca colpendo il nemico con spruzzi d’acqua.',
    stats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 },
    moves: [
      { name: 'Ritirata', type: PokemonElementType.water, power: null, description: 'Il corpo si ritira nel suo duro guscio per aumentare la Difesa.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Rapigiro', type: PokemonElementType.normal, power: 50, description: 'Attacco rotante che elimina gli effetti di mosse come Legatutto, Avvolgibotta, Punte e Parassiseme.' },
      { name: 'Capocciata', type: PokemonElementType.normal, power: 130, description: 'Chi la usa ritira la testa per aumentare la Difesa e poi attacca al turno successivo.' },
    ],
  },
  wartortle: {
    flavorText: 'Quando si sente minacciato ritira la testa nella corazza, mentre la coda sporge sempre un po’.',
    stats: { hp: 59, attack: 63, defense: 80, specialAttack: 65, specialDefense: 80, speed: 58 },
    moves: [
      { name: 'Ritirata', type: PokemonElementType.water, power: null, description: 'Il corpo si ritira nel suo duro guscio per aumentare la Difesa.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Rapigiro', type: PokemonElementType.normal, power: 50, description: 'Attacco rotante che elimina gli effetti di mosse come Legatutto, Avvolgibotta, Punte e Parassiseme.' },
      { name: 'Capocciata', type: PokemonElementType.normal, power: 130, description: 'Chi la usa ritira la testa per aumentare la Difesa e poi attacca al turno successivo.' },
    ],
  },
  blastoise: {
    flavorText: 'Mette KO gli avversari schiacciandoli sotto il corpo possente. Se è in difficoltà, può ritrarsi nella corazza.',
    stats: { hp: 79, attack: 83, defense: 100, specialAttack: 85, specialDefense: 105, speed: 78 },
    moves: [
      { name: 'Ritirata', type: PokemonElementType.water, power: null, description: 'Il corpo si ritira nel suo duro guscio per aumentare la Difesa.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Rapigiro', type: PokemonElementType.normal, power: 50, description: 'Attacco rotante che elimina gli effetti di mosse come Legatutto, Avvolgibotta, Punte e Parassiseme.' },
      { name: 'Capocciata', type: PokemonElementType.normal, power: 130, description: 'Chi la usa ritira la testa per aumentare la Difesa e poi attacca al turno successivo.' },
    ],
  },
  caterpie: {
    flavorText: 'Per proteggersi emette un puzzo terribile dall’antenna sul capo, tenendo lontani i nemici.',
    stats: { hp: 45, attack: 30, defense: 35, specialAttack: 20, specialDefense: 20, speed: 45 },
    moves: [
      { name: 'Millebave', type: PokemonElementType.bug, power: null, description: 'Chi la usa produce della seta che avvolge i nemici intorno e ne riduce di molto la Velocità.' },
      { name: 'Azione', type: PokemonElementType.normal, power: 40, description: 'Attacco fisico che colpisce il bersaglio investendolo con tutto il corpo.' },
    ],
  },
  metapod: {
    flavorText: 'Ha una corazza dura come l’acciaio che protegge il suo fragile corpo. Attende immobile di evolversi.',
    stats: { hp: 50, attack: 20, defense: 55, specialAttack: 25, specialDefense: 25, speed: 30 },
    moves: [
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  butterfree: {
    flavorText: 'Adora il nettare dei fiori e riesce a localizzare i campi in cui si trova anche una minima quantità di polline.',
    stats: { hp: 60, attack: 45, defense: 50, specialAttack: 90, specialDefense: 80, speed: 70 },
    moves: [
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Ventargenteo', type: PokemonElementType.bug, power: 60, description: 'Attacca con un forte vento di polvere di squame. Tutte le statistiche di chi la usa possono salire.' },
      { name: 'Paralizzante', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una nuvola di polvere che paralizza.' },
    ],
  },
  kakuna: {
    flavorText: 'Quasi incapace di muoversi, questo Pokémon può solo indurire il proprio guscio per proteggersi.',
    stats: { hp: 45, attack: 25, defense: 50, specialAttack: 25, specialDefense: 25, speed: 35 },
    moves: [
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  weedle: {
    flavorText: 'Vive soprattutto nei boschi e nei prati. Sul capo ha un affilato e velenoso pungiglione lungo 5 cm.',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 20, specialDefense: 20, speed: 50 },
    moves: [
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Millebave', type: PokemonElementType.bug, power: null, description: 'Chi la usa produce della seta che avvolge i nemici intorno e ne riduce di molto la Velocità.' },
    ],
  },
  beedrill: {
    flavorText: 'Possiede tre aculei velenosi sulle zampe anteriori e sull’addome con cui punge i nemici ripetutamente.',
    stats: { hp: 65, attack: 90, defense: 40, specialAttack: 45, specialDefense: 80, speed: 75 },
    moves: [
      { name: 'Doppio Ago', type: PokemonElementType.bug, power: 25, description: 'Colpisce il bersaglio due volte di seguito con un paio di aghi. Può anche avvelenarlo.' },
      { name: 'Missilspillo', type: PokemonElementType.bug, power: 25, description: 'Il bersaglio viene colpito da due a cinque volte con spilli appuntiti in rapida successione.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
    ],
  },
  pidgey: {
    flavorText: 'Molto comune in boschi e foreste, sbatte le ali a livello del suolo per sollevare sabbia accecante.',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 35, specialDefense: 35, speed: 56 },
    moves: [
      { name: 'Speculmossa', type: PokemonElementType.flying, power: null, description: 'Chi la usa colpisce il bersaglio copiandone l’ultima mossa usata.' },
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
      { name: 'Turbine', type: PokemonElementType.normal, power: null, description: 'Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici.' },
    ],
  },
  pidgeotto: {
    flavorText: 'Grazie ai potenti artigli può trasportare una preda delle dimensioni di un Exeggcute per oltre 100 km.',
    stats: { hp: 63, attack: 60, defense: 55, specialAttack: 50, specialDefense: 50, speed: 71 },
    moves: [
      { name: 'Speculmossa', type: PokemonElementType.flying, power: null, description: 'Chi la usa colpisce il bersaglio copiandone l’ultima mossa usata.' },
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
      { name: 'Turbine', type: PokemonElementType.normal, power: null, description: 'Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici.' },
    ],
  },
  pidgeot: {
    flavorText: 'Quando caccia, vola velocissimo sul pelo dell’acqua e cattura ignare prede come Magikarp.',
    stats: { hp: 83, attack: 80, defense: 75, specialAttack: 70, specialDefense: 70, speed: 101 },
    moves: [
      { name: 'Speculmossa', type: PokemonElementType.flying, power: null, description: 'Chi la usa colpisce il bersaglio copiandone l’ultima mossa usata.' },
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
      { name: 'Turbine', type: PokemonElementType.normal, power: null, description: 'Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici.' },
    ],
  },
  rattata: {
    flavorText: 'Vive ovunque si trovi del cibo, cercando incessantemente qualsiasi cosa sia commestibile.',
    stats: { hp: 30, attack: 56, defense: 35, specialAttack: 25, specialDefense: 35, speed: 72 },
    moves: [
      { name: 'Iperzanna', type: PokemonElementType.normal, power: 80, description: 'Chi la usa morde il bersaglio con i suoi incisivi affilati. Può anche farlo tentennare.' },
      { name: 'Superzanna', type: PokemonElementType.normal, power: null, description: 'Chi la usa salta sul bersaglio azzannandolo con i suoi incisivi affilati e facendogli perdere metà dei PS.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
      { name: 'Colpocoda', type: PokemonElementType.normal, power: null, description: 'Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.' },
    ],
  },
  raticate: {
    flavorText: 'Si affila le zanne in perenne crescita rosicchiando cose dure. Riesce a frantumare persino i muri.',
    stats: { hp: 55, attack: 81, defense: 60, specialAttack: 50, specialDefense: 70, speed: 97 },
    moves: [
      { name: 'Iperzanna', type: PokemonElementType.normal, power: 80, description: 'Chi la usa morde il bersaglio con i suoi incisivi affilati. Può anche farlo tentennare.' },
      { name: 'Superzanna', type: PokemonElementType.normal, power: null, description: 'Chi la usa salta sul bersaglio azzannandolo con i suoi incisivi affilati e facendogli perdere metà dei PS.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
      { name: 'Colpocoda', type: PokemonElementType.normal, power: null, description: 'Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.' },
    ],
  },
  spearow: {
    flavorText: 'Molto geloso del suo territorio, svolazza in giro a gran velocità battendo le ali continuamente.',
    stats: { hp: 40, attack: 60, defense: 30, specialAttack: 31, specialDefense: 31, speed: 70 },
    moves: [
      { name: 'Perforbecco', type: PokemonElementType.flying, power: 80, description: 'Attacco a spirale con un becco aguzzo che fa da trapano.' },
      { name: 'Speculmossa', type: PokemonElementType.flying, power: null, description: 'Chi la usa colpisce il bersaglio copiandone l’ultima mossa usata.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
    ],
  },
  fearow: {
    flavorText: 'Con le sue enormi e magnifiche ali, è in grado di volare senza mai atterrare per riposarsi.',
    stats: { hp: 65, attack: 90, defense: 65, specialAttack: 61, specialDefense: 61, speed: 100 },
    moves: [
      { name: 'Perforbecco', type: PokemonElementType.flying, power: 80, description: 'Attacco a spirale con un becco aguzzo che fa da trapano.' },
      { name: 'Speculmossa', type: PokemonElementType.flying, power: null, description: 'Chi la usa colpisce il bersaglio copiandone l’ultima mossa usata.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
    ],
  },
  ekans: {
    flavorText: 'Con il tempo si fa sempre più lungo. La notte avvolge il suo corpo attorno a qualche ramo per dormire.',
    stats: { hp: 35, attack: 60, defense: 44, specialAttack: 40, specialDefense: 54, speed: 55 },
    moves: [
      { name: 'Sguardo Feroce', type: PokemonElementType.normal, power: null, description: 'Chi la usa spaventa il bersaglio con uno sguardo terrificante e ne causa la paralisi.' },
      { name: 'Acido', type: PokemonElementType.poison, power: 40, description: 'Colpisce i nemici intorno spruzzando un acido corrosivo. Può anche ridurne la Difesa Speciale.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
    ],
  },
  arbok: {
    flavorText: 'Il disegno sulla pancia rappresenta una faccia spaventosa, capace di far fuggire i nemici più pavidi.',
    stats: { hp: 60, attack: 95, defense: 69, specialAttack: 65, specialDefense: 79, speed: 80 },
    moves: [
      { name: 'Sguardo Feroce', type: PokemonElementType.normal, power: null, description: 'Chi la usa spaventa il bersaglio con uno sguardo terrificante e ne causa la paralisi.' },
      { name: 'Acido', type: PokemonElementType.poison, power: 40, description: 'Colpisce i nemici intorno spruzzando un acido corrosivo. Può anche ridurne la Difesa Speciale.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
    ],
  },
  pikachu: {
    flavorText: 'Solleva la coda per esaminare l’ambiente circostante. A volte la coda è colpita da un fulmine quando è in questa posizione.',
    stats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Schianto', type: PokemonElementType.normal, power: 80, description: 'Infligge danni al bersaglio con la coda, con una liana o simili.' },
      { name: 'Colpocoda', type: PokemonElementType.normal, power: null, description: 'Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.' },
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
    ],
  },
  raichu: {
    flavorText: 'Se l’elettricità aumenta, i muscoli sono sollecitati e diventa più aggressivo del solito.',
    stats: { hp: 60, attack: 90, defense: 55, specialAttack: 90, specialDefense: 80, speed: 110 },
    moves: [
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Colpocoda', type: PokemonElementType.normal, power: null, description: 'Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.' },
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
      { name: 'Fulmine', type: PokemonElementType.electric, power: 90, description: 'Il bersaglio viene colpito da una potente scarica elettrica che può anche paralizzarlo.' },
    ],
  },
  sandshrew: {
    flavorText: 'Vive sottoterra, scavando buche. Se minacciato, si protegge raggomitolandosi.',
    stats: { hp: 50, attack: 75, defense: 85, specialAttack: 20, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Sabbiotomba', type: PokemonElementType.ground, power: 35, description: 'Chi la usa intrappola il bersaglio in un turbine di sabbia per quattro o cinque turni.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
    ],
  },
  sandslash: {
    flavorText: 'Se scava molto velocemente gli si consumano le punte e gli artigli, ma gli ricrescono in un giorno.',
    stats: { hp: 75, attack: 100, defense: 110, specialAttack: 45, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Sabbiotomba', type: PokemonElementType.ground, power: 35, description: 'Chi la usa intrappola il bersaglio in un turbine di sabbia per quattro o cinque turni.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
    ],
  },
  nidoran_female: {
    flavorText: 'Sebbene piccolo, i suoi baffi velenosi sono molto pericolosi. La femmina ha un corno più minuto.',
    stats: { hp: 55, attack: 47, defense: 52, specialAttack: 40, specialDefense: 40, speed: 41 },
    moves: [
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Adulazione', type: PokemonElementType.dark, power: null, description: 'Adula il bersaglio e lo confonde, ma ne aumenta l’Attacco Speciale.' },
      { name: 'Doppiocalcio', type: PokemonElementType.fighting, power: 30, description: 'Colpisce il bersaglio due volte con una raffica di calci inferti con entrambi i piedi.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
    ],
  },
  nidorina: {
    flavorText: 'La femmina ha un temperamento mite. Lancia ultrasuoni capaci di incantare i nemici.',
    stats: { hp: 70, attack: 62, defense: 67, specialAttack: 55, specialDefense: 55, speed: 56 },
    moves: [
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Adulazione', type: PokemonElementType.dark, power: null, description: 'Adula il bersaglio e lo confonde, ma ne aumenta l’Attacco Speciale.' },
      { name: 'Doppiocalcio', type: PokemonElementType.fighting, power: 30, description: 'Colpisce il bersaglio due volte con una raffica di calci inferti con entrambi i piedi.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
    ],
  },
  nidoqueen: {
    flavorText: 'Con il suo corpo robusto e squamoso sbarra l’accesso alla tana e protegge i piccoli dai predatori.',
    stats: { hp: 90, attack: 92, defense: 87, specialAttack: 75, specialDefense: 85, speed: 76 },
    moves: [
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Doppiocalcio', type: PokemonElementType.fighting, power: 30, description: 'Colpisce il bersaglio due volte con una raffica di calci inferti con entrambi i piedi.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
      { name: 'Colpocoda', type: PokemonElementType.normal, power: null, description: 'Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.' },
    ],
  },
  nidoran_male: {
    flavorText: 'Esamina l’ambiente circostante tendendo le orecchie fuori dall’erba. Si protegge con il corno velenoso.',
    stats: { hp: 46, attack: 57, defense: 40, specialAttack: 40, specialDefense: 40, speed: 50 },
    moves: [
      { name: 'Incornata', type: PokemonElementType.normal, power: 65, description: 'Danneggia il bersaglio infilzandolo con un corno affilato.' },
      { name: 'Perforcorno', type: PokemonElementType.normal, power: null, description: 'Colpisce il bersaglio con un corno perforante come un trapano. Se il colpo va a segno, il Pokémon colpito va KO.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Adulazione', type: PokemonElementType.dark, power: null, description: 'Adula il bersaglio e lo confonde, ma ne aumenta l’Attacco Speciale.' },
    ],
  },
  nidorino: {
    flavorText: 'Rizza le grandi orecchie per esaminare la zona. Se avverte qualcosa, attacca immediatamente.',
    stats: { hp: 61, attack: 72, defense: 57, specialAttack: 55, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'Incornata', type: PokemonElementType.normal, power: 65, description: 'Danneggia il bersaglio infilzandolo con un corno affilato.' },
      { name: 'Perforcorno', type: PokemonElementType.normal, power: null, description: 'Colpisce il bersaglio con un corno perforante come un trapano. Se il colpo va a segno, il Pokémon colpito va KO.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Adulazione', type: PokemonElementType.dark, power: null, description: 'Adula il bersaglio e lo confonde, ma ne aumenta l’Attacco Speciale.' },
    ],
  },
  nidoking: {
    flavorText: 'Lo si riconosce dalla pelle durissima e dal corno particolarmente allungato, che contiene sostanze velenose.',
    stats: { hp: 81, attack: 102, defense: 77, specialAttack: 85, specialDefense: 75, speed: 85 },
    moves: [
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Megacorno', type: PokemonElementType.bug, power: 120, description: 'Chi la usa utilizza il suo robusto e imponente corno per colpire il bersaglio con tutto se stesso.' },
      { name: 'Doppiocalcio', type: PokemonElementType.fighting, power: 30, description: 'Colpisce il bersaglio due volte con una raffica di calci inferti con entrambi i piedi.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
    ],
  },
  clefairy: {
    flavorText: 'Si dice che vedere un gruppo di Clefairy ballare con la luna piena sia di ottimo auspicio.',
    stats: { hp: 70, attack: 45, defense: 48, specialAttack: 60, specialDefense: 65, speed: 35 },
    moves: [
      { name: 'Meteorpugno', type: PokemonElementType.steel, power: 90, description: 'Colpisce il bersaglio con un pugno veloce come una meteora. Può far salire l’Attacco di chi la usa.' },
      { name: 'Minimizzato', type: PokemonElementType.normal, power: null, description: 'Il corpo di chi la usa si comprime e diventa più piccolo. La sua capacità di elusione aumenta di molto.' },
      { name: 'Sonoqui', type: PokemonElementType.normal, power: null, description: 'Chi la usa attira l’attenzione su di sé, costringendo i nemici a sceglierlo sempre come bersaglio.' },
      { name: 'Lucelunare', type: PokemonElementType.normal, power: null, description: 'Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.' },
    ],
  },
  clefable: {
    flavorText: 'Ha un udito tanto acuto da sentire la caduta di uno spillo a 1 km di distanza. Vive su monti quieti.',
    stats: { hp: 95, attack: 70, defense: 73, specialAttack: 95, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Minimizzato', type: PokemonElementType.normal, power: null, description: 'Il corpo di chi la usa si comprime e diventa più piccolo. La sua capacità di elusione aumenta di molto.' },
      { name: 'Doppiasberla', type: PokemonElementType.normal, power: 15, description: 'Schiaffeggia il bersaglio da due a cinque volte di fila.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
      { name: 'Metronomo', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa di no con il dito e stimola il cervello a usare a caso una delle tante mosse esistenti.' },
    ],
  },
  vulpix: {
    flavorText: 'Alla nascita ha solo una coda, che con il passare del tempo sviluppa diverse diramazioni.',
    stats: { hp: 38, attack: 41, defense: 40, specialAttack: 50, specialDefense: 65, speed: 65 },
    moves: [
      { name: 'Rancore', type: PokemonElementType.ghost, power: null, description: 'Se chi la usa va KO, i PP della mossa nemica che lo ha messo fuori gioco si azzerano.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Turbofuoco', type: PokemonElementType.fire, power: 35, description: 'Intrappola il bersaglio in un turbine di fuoco che dura per quattro o cinque turni.' },
      { name: 'Colpocoda', type: PokemonElementType.normal, power: null, description: 'Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.' },
    ],
  },
  ninetales: {
    flavorText: 'Dotato di nove code e di una pelliccia dorata, si dice che viva 1000 anni.',
    stats: { hp: 73, attack: 76, defense: 75, specialAttack: 81, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Turbofuoco', type: PokemonElementType.fire, power: 35, description: 'Intrappola il bersaglio in un turbine di fuoco che dura per quattro o cinque turni.' },
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
      { name: 'Stordiraggio', type: PokemonElementType.ghost, power: null, description: 'Colpisce il bersaglio con un raggio funesto che lo confonde.' },
    ],
  },
  jigglypuff: {
    flavorText: 'Cattura l’attenzione dei nemici grazie agli enormi occhi rotondi, per poi farli addormentare con una dolce ninnananna.',
    stats: { hp: 115, attack: 45, defense: 20, specialAttack: 45, specialDefense: 25, speed: 20 },
    moves: [
      { name: 'Doppiasberla', type: PokemonElementType.normal, power: 15, description: 'Schiaffeggia il bersaglio da due a cinque volte di fila.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
      { name: 'Inibitore', type: PokemonElementType.normal, power: null, description: 'Per quattro turni impedisce al bersaglio di riutilizzare l’ultima mossa usata.' },
    ],
  },
  wigglytuff: {
    flavorText: 'Hanno un pelo così morbido che se due di loro si abbracciano non vogliono più separarsi.',
    stats: { hp: 140, attack: 70, defense: 45, specialAttack: 85, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'Doppiasberla', type: PokemonElementType.normal, power: 15, description: 'Schiaffeggia il bersaglio da due a cinque volte di fila.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
      { name: 'Inibitore', type: PokemonElementType.normal, power: null, description: 'Per quattro turni impedisce al bersaglio di riutilizzare l’ultima mossa usata.' },
      { name: 'Ricciolscudo', type: PokemonElementType.normal, power: null, description: 'Chi la usa si raggomitola per nascondere i punti deboli e aumentare la propria Difesa.' },
    ],
  },
  zubat: {
    flavorText: 'Non ha occhi, ma avverte gli ostacoli con le onde ultrasoniche che emette dalla bocca.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 30, specialDefense: 40, speed: 55 },
    moves: [
      { name: 'Velenodenti', type: PokemonElementType.poison, power: 50, description: 'Chi la usa morde il bersaglio con denti avvelenati che possono anche iperavvelenarlo.' },
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Malosguardo', type: PokemonElementType.normal, power: null, description: 'Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga.' },
      { name: 'Supersuono', type: PokemonElementType.normal, power: null, description: 'Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.' },
    ],
  },
  golbat: {
    flavorText: 'Quando attacca, non smette di succhiare l’energia della vittima, fino a diventare troppo pesante per volare.',
    stats: { hp: 75, attack: 80, defense: 70, specialAttack: 65, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'Velenodenti', type: PokemonElementType.poison, power: 50, description: 'Chi la usa morde il bersaglio con denti avvelenati che possono anche iperavvelenarlo.' },
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Malosguardo', type: PokemonElementType.normal, power: null, description: 'Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga.' },
      { name: 'Supersuono', type: PokemonElementType.normal, power: null, description: 'Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.' },
    ],
  },
  oddish: {
    flavorText: 'Di giorno vive nel freddo sottosuolo, per evitare la luce del sole. Cresce assorbendo la luce lunare.',
    stats: { hp: 45, attack: 50, defense: 55, specialAttack: 75, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Petalodanza', type: PokemonElementType.grass, power: 120, description: 'Attacca il nemico cospargendolo di petali per due o tre turni, ma chi la usa rimane confuso.' },
      { name: 'Lucelunare', type: PokemonElementType.normal, power: null, description: 'Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.' },
      { name: 'Acido', type: PokemonElementType.poison, power: 40, description: 'Colpisce i nemici intorno spruzzando un acido corrosivo. Può anche ridurne la Difesa Speciale.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
    ],
  },
  gloom: {
    flavorText: 'Puzza da levare il fiato! Tuttavia circa una persona su mille adora annusarne il fetido lezzo.',
    stats: { hp: 60, attack: 65, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'Petalodanza', type: PokemonElementType.grass, power: 120, description: 'Attacca il nemico cospargendolo di petali per due o tre turni, ma chi la usa rimane confuso.' },
      { name: 'Lucelunare', type: PokemonElementType.normal, power: null, description: 'Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.' },
      { name: 'Acido', type: PokemonElementType.poison, power: 40, description: 'Colpisce i nemici intorno spruzzando un acido corrosivo. Può anche ridurne la Difesa Speciale.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
    ],
  },
  vileplume: {
    flavorText: 'Più grandi sono i petali, maggiore è la quantità di polline tossico che contengono. La testa è molto pesante.',
    stats: { hp: 75, attack: 80, defense: 85, specialAttack: 110, specialDefense: 90, speed: 50 },
    moves: [
      { name: 'Petalodanza', type: PokemonElementType.grass, power: 120, description: 'Attacca il nemico cospargendolo di petali per due o tre turni, ma chi la usa rimane confuso.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Chi la usa rilascia un dolce profumo che cura tutti i problemi di stato propri e degli alleati.' },
      { name: 'Paralizzante', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una nuvola di polvere che paralizza.' },
      { name: 'Assorbimento', type: PokemonElementType.grass, power: 20, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
    ],
  },
  paras: {
    flavorText: 'Sul dorso di questo Pokémon nascono funghi chiamati tochukaso, che crescono insieme a lui.',
    stats: { hp: 35, attack: 70, defense: 55, specialAttack: 45, specialDefense: 55, speed: 25 },
    moves: [
      { name: 'Spora', type: PokemonElementType.grass, power: null, description: 'Nube di spore che fa sempre addormentare il bersaglio.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Chi la usa rilascia un dolce profumo che cura tutti i problemi di stato propri e degli alleati.' },
      { name: 'Paralizzante', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una nuvola di polvere che paralizza.' },
    ],
  },
  parasect: {
    flavorText: 'Parasect è controllato da un fungo ancora più grosso del suo corpo. Diffonde spore velenose.',
    stats: { hp: 60, attack: 95, defense: 80, specialAttack: 60, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'Spora', type: PokemonElementType.grass, power: null, description: 'Nube di spore che fa sempre addormentare il bersaglio.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Chi la usa rilascia un dolce profumo che cura tutti i problemi di stato propri e degli alleati.' },
      { name: 'Paralizzante', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una nuvola di polvere che paralizza.' },
    ],
  },
  venonat: {
    flavorText: 'I suoi grandi occhi sono in realtà un insieme di tanti piccoli occhi. Di notte, è attirato dalla luce.',
    stats: { hp: 60, attack: 55, defense: 50, specialAttack: 40, specialDefense: 55, speed: 45 },
    moves: [
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Paralizzante', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una nuvola di polvere che paralizza.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
    ],
  },
  venomoth: {
    flavorText: 'Sparge scaglie che paralizzano chiunque le tocchi, rendendolo incapace di stare in piedi.',
    stats: { hp: 70, attack: 65, defense: 60, specialAttack: 90, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Ventargenteo', type: PokemonElementType.bug, power: 60, description: 'Attacca con un forte vento di polvere di squame. Tutte le statistiche di chi la usa possono salire.' },
      { name: 'Paralizzante', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una nuvola di polvere che paralizza.' },
    ],
  },
  diglett: {
    flavorText: 'Vive un metro sotto terra, dove si nutre di radici. Talvolta compare in superficie.',
    stats: { hp: 10, attack: 55, defense: 25, specialAttack: 35, specialDefense: 45, speed: 95 },
    moves: [
      { name: 'Magnitudo', type: PokemonElementType.ground, power: null, description: 'Chi la usa scatena un terremoto d’intensità variabile che danneggia i Pokémon che ha intorno.' },
      { name: 'Abisso', type: PokemonElementType.ground, power: null, description: 'Chi la usa crea una spaccatura nel terreno e cerca di gettarvici dentro il bersaglio. Se va a segno, il Pokémon colpito va KO.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
    ],
  },
  dugtrio: {
    flavorText: 'Nella lotta, scava tunnel nel terreno per sorprendere il nemico attaccandolo da una direzione imprevedibile.',
    stats: { hp: 35, attack: 100, defense: 50, specialAttack: 50, specialDefense: 70, speed: 120 },
    moves: [
      { name: 'Magnitudo', type: PokemonElementType.ground, power: null, description: 'Chi la usa scatena un terremoto d’intensità variabile che danneggia i Pokémon che ha intorno.' },
      { name: 'Tripletta', type: PokemonElementType.normal, power: 80, description: 'Colpisce il bersaglio con tre sfere simultanee che possono paralizzarlo, scottarlo o congelarlo.' },
      { name: 'Abisso', type: PokemonElementType.ground, power: null, description: 'Chi la usa crea una spaccatura nel terreno e cerca di gettarvici dentro il bersaglio. Se va a segno, il Pokémon colpito va KO.' },
      { name: 'Sabbiotomba', type: PokemonElementType.ground, power: 35, description: 'Chi la usa intrappola il bersaglio in un turbine di sabbia per quattro o cinque turni.' },
    ],
  },
  meowth: {
    flavorText: 'Ama gli oggetti luccicanti. Spesso se li contende con Murkrow.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: 'Giornopaga', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con una gran quantità di monete recuperabili dopo la lotta.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Bruciapelo', type: PokemonElementType.normal, power: 40, description: 'Mossa che fa agire per primi e fa tentennare il bersaglio. Funziona solo appena scesi in campo.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  persian: {
    flavorText: 'Sebbene molto amato per il suo pelo, è difficile addomesticarlo per la volubile crudeltà.',
    stats: { hp: 65, attack: 70, defense: 60, specialAttack: 65, specialDefense: 65, speed: 115 },
    moves: [
      { name: 'Giornopaga', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con una gran quantità di monete recuperabili dopo la lotta.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Bruciapelo', type: PokemonElementType.normal, power: 40, description: 'Mossa che fa agire per primi e fa tentennare il bersaglio. Funziona solo appena scesi in campo.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  psyduck: {
    flavorText: 'È costantemente tormentato dal mal di testa che, quando si fa particolarmente intenso, gli conferisce strani poteri.',
    stats: { hp: 50, attack: 52, defense: 48, specialAttack: 65, specialDefense: 50, speed: 55 },
    moves: [
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
      { name: 'Inibitore', type: PokemonElementType.normal, power: null, description: 'Per quattro turni impedisce al bersaglio di riutilizzare l’ultima mossa usata.' },
    ],
  },
  golduck: {
    flavorText: 'Appare presso i corsi d’acqua col buio. Acquisisce poteri telecinetici se la sua fronte diventa incandescente.',
    stats: { hp: 80, attack: 82, defense: 78, specialAttack: 95, specialDefense: 80, speed: 85 },
    moves: [
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
      { name: 'Inibitore', type: PokemonElementType.normal, power: null, description: 'Per quattro turni impedisce al bersaglio di riutilizzare l’ultima mossa usata.' },
    ],
  },
  mankey: {
    flavorText: 'Se è tanto arrabbiato da non riuscire più a distinguere gli amici dai nemici, è pericoloso avvicinarsi.',
    stats: { hp: 40, attack: 80, defense: 35, specialAttack: 35, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Colpokarate', type: PokemonElementType.fighting, power: 50, description: 'Colpisce il bersaglio con un colpo netto. Probabile brutto colpo.' },
      { name: 'Incrocolpo', type: PokemonElementType.fighting, power: 100, description: 'Investe il bersaglio con un colpo sferrato con entrambe le braccia incrociate. Probabile brutto colpo.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
    ],
  },
  primeape: {
    flavorText: 'Questo Pokémon è costantemente furioso e si calma solo nella solitudine più assoluta.',
    stats: { hp: 65, attack: 105, defense: 60, specialAttack: 60, specialDefense: 70, speed: 95 },
    moves: [
      { name: 'Colpokarate', type: PokemonElementType.fighting, power: 50, description: 'Colpisce il bersaglio con un colpo netto. Probabile brutto colpo.' },
      { name: 'Incrocolpo', type: PokemonElementType.fighting, power: 100, description: 'Investe il bersaglio con un colpo sferrato con entrambe le braccia incrociate. Probabile brutto colpo.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
    ],
  },
  growlithe: {
    flavorText: 'Molto amichevole e fedele verso le persone. Allontana i nemici abbaiando e mordendoli.',
    stats: { hp: 55, attack: 70, defense: 45, specialAttack: 70, specialDefense: 50, speed: 60 },
    moves: [
      { name: 'Ruotafuoco', type: PokemonElementType.fire, power: 60, description: 'Chi la usa si copre di fuoco e carica il bersaglio. Può anche scottarlo.' },
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Lanciafiamme', type: PokemonElementType.fire, power: 90, description: 'Il bersaglio viene colpito da intense fiammate che possono anche scottarlo.' },
    ],
  },
  arcanine: {
    flavorText: 'Da sempre ammirato per la sua bellezza, corre veloce come se avesse le ali.',
    stats: { hp: 90, attack: 110, defense: 80, specialAttack: 100, specialDefense: 80, speed: 95 },
    moves: [
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Morso', type: PokemonElementType.dark, power: 60, description: 'Il bersaglio viene morso da denti affilatissimi che possono farlo tentennare.' },
    ],
  },
  poliwag: {
    flavorText: 'Dalla pelle nera, lucida, umida e sottile si intravedono gli organi interni, che formano una spirale.',
    stats: { hp: 40, attack: 50, defense: 40, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: 'Doppiasberla', type: PokemonElementType.normal, power: 15, description: 'Schiaffeggia il bersaglio da due a cinque volte di fila.' },
      { name: 'Panciamburo', type: PokemonElementType.normal, power: null, description: 'Chi la usa massimizza l’Attacco in cambio di metà dei PS massimi.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
    ],
  },
  poliwhirl: {
    flavorText: 'Capace di vivere dentro o fuori dall’acqua. Sulla terraferma suda per mantenere il suo corpo unto.',
    stats: { hp: 65, attack: 65, defense: 65, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: 'Doppiasberla', type: PokemonElementType.normal, power: 15, description: 'Schiaffeggia il bersaglio da due a cinque volte di fila.' },
      { name: 'Panciamburo', type: PokemonElementType.normal, power: null, description: 'Chi la usa massimizza l’Attacco in cambio di metà dei PS massimi.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
    ],
  },
  poliwrath: {
    flavorText: 'Ha dei muscoli tanto sviluppati da riuscire ad attraversare a nuoto interi oceani senza fermarsi.',
    stats: { hp: 90, attack: 95, defense: 95, specialAttack: 70, specialDefense: 90, speed: 70 },
    moves: [
      { name: 'Leggimente', type: PokemonElementType.normal, power: null, description: 'Chi la usa prevede i movimenti del bersaglio per mandare a segno l’attacco successivo.' },
      { name: 'Doppiasberla', type: PokemonElementType.normal, power: 15, description: 'Schiaffeggia il bersaglio da due a cinque volte di fila.' },
      { name: 'Sottomissione', type: PokemonElementType.fighting, power: 80, description: 'Chi la usa carica il bersaglio in modo spericolato, ma danneggia anche se stesso.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
    ],
  },
  abra: {
    flavorText: 'Dorme 18 ore al giorno. Anche da addormentato utilizza una serie di poteri extrasensoriali.',
    stats: { hp: 25, attack: 20, defense: 15, specialAttack: 105, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Teletrasporto', type: PokemonElementType.psychic, power: null, description: 'Fa fuggire dai Pokémon selvatici. Fuori dalla lotta porta all’ultimo Centro Pokémon visitato.' },
    ],
  },
  kadabra: {
    flavorText: 'Quando usa i poteri psichici, emette forti onde alfa che possono rovinare strumenti di precisione.',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 120, specialDefense: 70, speed: 105 },
    moves: [
      { name: 'Cinèsi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa distrae il bersaglio piegando un cucchiaio e ne riduce la precisione.' },
      { name: 'Teletrasporto', type: PokemonElementType.psychic, power: null, description: 'Fa fuggire dai Pokémon selvatici. Fuori dalla lotta porta all’ultimo Centro Pokémon visitato.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
      { name: 'Inibitore', type: PokemonElementType.normal, power: null, description: 'Per quattro turni impedisce al bersaglio di riutilizzare l’ultima mossa usata.' },
    ],
  },
  alakazam: {
    flavorText: 'Le sue cellule cerebrali si moltiplicano di continuo. Perciò ricorda qualsiasi cosa gli accada.',
    stats: { hp: 55, attack: 50, defense: 45, specialAttack: 135, specialDefense: 95, speed: 120 },
    moves: [
      { name: 'Cinèsi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa distrae il bersaglio piegando un cucchiaio e ne riduce la precisione.' },
      { name: 'Teletrasporto', type: PokemonElementType.psychic, power: null, description: 'Fa fuggire dai Pokémon selvatici. Fuori dalla lotta porta all’ultimo Centro Pokémon visitato.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
      { name: 'Inibitore', type: PokemonElementType.normal, power: null, description: 'Per quattro turni impedisce al bersaglio di riutilizzare l’ultima mossa usata.' },
    ],
  },
  machop: {
    flavorText: 'Solleva Graveler ripetutamente per mantenersi forte. Conosce ogni tipo di arte marziale.',
    stats: { hp: 70, attack: 80, defense: 50, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'Colpokarate', type: PokemonElementType.fighting, power: 50, description: 'Colpisce il bersaglio con un colpo netto. Probabile brutto colpo.' },
      { name: 'Vitaltiro', type: PokemonElementType.fighting, power: 70, description: 'Chi la usa attacca per ultimo, ma il colpo è sempre infallibile.' },
      { name: 'Incrocolpo', type: PokemonElementType.fighting, power: 100, description: 'Investe il bersaglio con un colpo sferrato con entrambe le braccia incrociate. Probabile brutto colpo.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
    ],
  },
  machoke: {
    flavorText: 'Il suo corpo muscoloso è così forte che usa una cintura antiforza per regolare i suoi movimenti.',
    stats: { hp: 80, attack: 100, defense: 70, specialAttack: 50, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'Colpokarate', type: PokemonElementType.fighting, power: 50, description: 'Colpisce il bersaglio con un colpo netto. Probabile brutto colpo.' },
      { name: 'Vitaltiro', type: PokemonElementType.fighting, power: 70, description: 'Chi la usa attacca per ultimo, ma il colpo è sempre infallibile.' },
      { name: 'Incrocolpo', type: PokemonElementType.fighting, power: 100, description: 'Investe il bersaglio con un colpo sferrato con entrambe le braccia incrociate. Probabile brutto colpo.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
    ],
  },
  machamp: {
    flavorText: 'Le braccia eccezionalmente sviluppate sono in grado di assestare 1000 pugni in soli 2 secondi.',
    stats: { hp: 90, attack: 130, defense: 80, specialAttack: 65, specialDefense: 85, speed: 55 },
    moves: [
      { name: 'Colpokarate', type: PokemonElementType.fighting, power: 50, description: 'Colpisce il bersaglio con un colpo netto. Probabile brutto colpo.' },
      { name: 'Vitaltiro', type: PokemonElementType.fighting, power: 70, description: 'Chi la usa attacca per ultimo, ma il colpo è sempre infallibile.' },
      { name: 'Incrocolpo', type: PokemonElementType.fighting, power: 100, description: 'Investe il bersaglio con un colpo sferrato con entrambe le braccia incrociate. Probabile brutto colpo.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
    ],
  },
  bellsprout: {
    flavorText: 'Sebbene abbia un corpo magrissimo, sa essere molto rapido quando si scaglia sulla preda.',
    stats: { hp: 50, attack: 75, defense: 35, specialAttack: 70, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Frustata', type: PokemonElementType.grass, power: 45, description: 'Infligge danni al bersaglio con liane sottili simili a fruste.' },
      { name: 'Acido', type: PokemonElementType.poison, power: 40, description: 'Colpisce i nemici intorno spruzzando un acido corrosivo. Può anche ridurne la Difesa Speciale.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
    ],
  },
  weepinbell: {
    flavorText: 'Si serve delle foglie laterali come lame contro i nemici. Il fluido che secerne dalla bocca scioglie qualsiasi cosa.',
    stats: { hp: 65, attack: 90, defense: 50, specialAttack: 85, specialDefense: 45, speed: 55 },
    moves: [
      { name: 'Frustata', type: PokemonElementType.grass, power: 45, description: 'Infligge danni al bersaglio con liane sottili simili a fruste.' },
      { name: 'Acido', type: PokemonElementType.poison, power: 40, description: 'Colpisce i nemici intorno spruzzando un acido corrosivo. Può anche ridurne la Difesa Speciale.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
    ],
  },
  victreebel: {
    flavorText: 'Pare che viva in grandi colonie nel cuore della giungla, ma nessuno è mai tornato da lì per raccontarlo.',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 100, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Frustata', type: PokemonElementType.grass, power: 45, description: 'Infligge danni al bersaglio con liane sottili simili a fruste.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Sfoghenergia', type: PokemonElementType.normal, power: null, description: 'Tutta l’energia accumulata in precedenza con Accumulo è rilasciata nell’attacco. Maggiore è l’energia, più danni si arrecano.' },
      { name: 'Introenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa assorbe l’energia raccolta con la mossa Accumulo e recupera PS. Maggiore è l’energia, più PS si recuperano.' },
    ],
  },
  tentacool: {
    flavorText: 'Il suo corpo è quasi interamente composto d’acqua. Emette dei raggi misteriosi dagli occhi cristallini.',
    stats: { hp: 40, attack: 40, defense: 35, specialAttack: 50, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Barriera', type: PokemonElementType.psychic, power: null, description: 'Innalza una barriera resistente che aumenta molto la Difesa.' },
      { name: 'Acido', type: PokemonElementType.poison, power: 40, description: 'Colpisce i nemici intorno spruzzando un acido corrosivo. Può anche ridurne la Difesa Speciale.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
    ],
  },
  tentacruel: {
    flavorText: 'I corti tentacoli si estendono durante la caccia per catturare e immobilizzare la preda.',
    stats: { hp: 80, attack: 70, defense: 65, specialAttack: 80, specialDefense: 120, speed: 100 },
    moves: [
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Barriera', type: PokemonElementType.psychic, power: null, description: 'Innalza una barriera resistente che aumenta molto la Difesa.' },
      { name: 'Acido', type: PokemonElementType.poison, power: 40, description: 'Colpisce i nemici intorno spruzzando un acido corrosivo. Può anche ridurne la Difesa Speciale.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
    ],
  },
  geodude: {
    flavorText: 'Si trova nei campi e in montagna. Se confuso con una roccia, può succedere di inciamparvi.',
    stats: { hp: 40, attack: 80, defense: 100, specialAttack: 30, specialDefense: 30, speed: 20 },
    moves: [
      { name: 'Magnitudo', type: PokemonElementType.ground, power: null, description: 'Chi la usa scatena un terremoto d’intensità variabile che danneggia i Pokémon che ha intorno.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Sassata', type: PokemonElementType.rock, power: 50, description: 'Chi la usa solleva una roccia e la lancia contro il bersaglio.' },
      { name: 'Esplosione', type: PokemonElementType.normal, power: 250, description: 'Chi la usa esplode per infliggere danni agli altri Pokémon attorno, ma va KO.' },
    ],
  },
  graveler: {
    flavorText: 'Di natura libera e incurante, non si preoccupa se perde dei pezzi mentre si rotola giù dai monti.',
    stats: { hp: 55, attack: 95, defense: 115, specialAttack: 45, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Magnitudo', type: PokemonElementType.ground, power: null, description: 'Chi la usa scatena un terremoto d’intensità variabile che danneggia i Pokémon che ha intorno.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Sassata', type: PokemonElementType.rock, power: 50, description: 'Chi la usa solleva una roccia e la lancia contro il bersaglio.' },
      { name: 'Esplosione', type: PokemonElementType.normal, power: 250, description: 'Chi la usa esplode per infliggere danni agli altri Pokémon attorno, ma va KO.' },
    ],
  },
  golem: {
    flavorText: 'A furia di rotolare giù dalla cima dei monti, ha formato dei solchi. Meglio evitarli.',
    stats: { hp: 80, attack: 120, defense: 130, specialAttack: 55, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Magnitudo', type: PokemonElementType.ground, power: null, description: 'Chi la usa scatena un terremoto d’intensità variabile che danneggia i Pokémon che ha intorno.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Sassata', type: PokemonElementType.rock, power: 50, description: 'Chi la usa solleva una roccia e la lancia contro il bersaglio.' },
      { name: 'Esplosione', type: PokemonElementType.normal, power: 250, description: 'Chi la usa esplode per infliggere danni agli altri Pokémon attorno, ma va KO.' },
    ],
  },
  ponyta: {
    flavorText: 'Alla nascita non riesce quasi a reggersi in piedi. Galoppando si rinforza e diventa più veloce.',
    stats: { hp: 50, attack: 85, defense: 55, specialAttack: 65, specialDefense: 65, speed: 90 },
    moves: [
      { name: 'Pestone', type: PokemonElementType.normal, power: 65, description: 'Colpisce il bersaglio con un grosso piede e può anche farlo tentennare.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Turbofuoco', type: PokemonElementType.fire, power: 35, description: 'Intrappola il bersaglio in un turbine di fuoco che dura per quattro o cinque turni.' },
      { name: 'Rimbalzo', type: PokemonElementType.flying, power: 85, description: 'Chi la usa balza in alto e ricade sul bersaglio dopo un turno. Può anche paralizzarlo.' },
    ],
  },
  rapidash: {
    flavorText: 'Pokémon molto competitivo, rincorre tutto ciò che si muove veloce, sperando di superarlo.',
    stats: { hp: 65, attack: 100, defense: 70, specialAttack: 80, specialDefense: 80, speed: 105 },
    moves: [
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Pestone', type: PokemonElementType.normal, power: 65, description: 'Colpisce il bersaglio con un grosso piede e può anche farlo tentennare.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Turbofuoco', type: PokemonElementType.fire, power: 35, description: 'Intrappola il bersaglio in un turbine di fuoco che dura per quattro o cinque turni.' },
    ],
  },
  slowpoke: {
    flavorText: 'È sempre assorto, ma nessuno sa a cosa stia pensando. Si serve della coda per pescare.',
    stats: { hp: 90, attack: 65, defense: 65, specialAttack: 40, specialDefense: 40, speed: 15 },
    moves: [
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
      { name: 'Inibitore', type: PokemonElementType.normal, power: null, description: 'Per quattro turni impedisce al bersaglio di riutilizzare l’ultima mossa usata.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'Chi la usa svuota per un po’ la mente per dimenticare i problemi. La Difesa Speciale aumenta di molto.' },
    ],
  },
  slowbro: {
    flavorText: 'Lo Shellder che gli sta attaccato non si stacca mai a causa del profumo appetitoso della coda.',
    stats: { hp: 95, attack: 75, defense: 110, specialAttack: 100, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'Ritirata', type: PokemonElementType.water, power: null, description: 'Il corpo si ritira nel suo duro guscio per aumentare la Difesa.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
      { name: 'Inibitore', type: PokemonElementType.normal, power: null, description: 'Per quattro turni impedisce al bersaglio di riutilizzare l’ultima mossa usata.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
    ],
  },
  magnemite: {
    flavorText: 'Le unità alle due estremità del corpo producono energia antigravitazionale con cui si mantiene a mezz’aria.',
    stats: { hp: 25, attack: 35, defense: 70, specialAttack: 95, specialDefense: 55, speed: 45 },
    moves: [
      { name: 'Sonicboom', type: PokemonElementType.normal, power: null, description: 'Il bersaglio viene colpito da onde acustiche devastanti che gli provocano un danno pari a 20 PS.' },
      { name: 'Localizza', type: PokemonElementType.normal, power: null, description: 'Chi la usa punta il bersaglio con precisione. La mossa successiva andrà a segno.' },
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
      { name: 'Supersuono', type: PokemonElementType.normal, power: null, description: 'Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.' },
    ],
  },
  magneton: {
    flavorText: 'Formato da vari Magnemite, è in grado di lanciare onde magnetiche ad alto voltaggio.',
    stats: { hp: 50, attack: 60, defense: 95, specialAttack: 120, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Sonicboom', type: PokemonElementType.normal, power: null, description: 'Il bersaglio viene colpito da onde acustiche devastanti che gli provocano un danno pari a 20 PS.' },
      { name: 'Localizza', type: PokemonElementType.normal, power: null, description: 'Chi la usa punta il bersaglio con precisione. La mossa successiva andrà a segno.' },
      { name: 'Tripletta', type: PokemonElementType.normal, power: 80, description: 'Colpisce il bersaglio con tre sfere simultanee che possono paralizzarlo, scottarlo o congelarlo.' },
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
    ],
  },
  farfetchd: {
    flavorText: 'Il verde gambo di porro che brandisce è la sua arma, che usa come spada.',
    stats: { hp: 52, attack: 90, defense: 55, specialAttack: 58, specialDefense: 62, speed: 60 },
    moves: [
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
      { name: 'Falsofinale', type: PokemonElementType.normal, power: 40, description: 'Chi la usa trattiene il colpo per impedire al bersaglio di andare KO, lasciandolo con almeno un PS.' },
    ],
  },
  doduo: {
    flavorText: 'Pokémon a due teste, scoperto a seguito di un’improvvisa mutazione. Può correre a 100 km/h.',
    stats: { hp: 35, attack: 85, defense: 45, specialAttack: 35, specialDefense: 35, speed: 75 },
    moves: [
      { name: 'Perforbecco', type: PokemonElementType.flying, power: 80, description: 'Attacco a spirale con un becco aguzzo che fa da trapano.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Tripletta', type: PokemonElementType.normal, power: 80, description: 'Colpisce il bersaglio con tre sfere simultanee che possono paralizzarlo, scottarlo o congelarlo.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
    ],
  },
  dodrio: {
    flavorText: 'Occorre fare attenzione a tutte le sue tre teste, altrimenti si rischia d’essere colpiti duramente.',
    stats: { hp: 60, attack: 110, defense: 70, specialAttack: 60, specialDefense: 60, speed: 110 },
    moves: [
      { name: 'Perforbecco', type: PokemonElementType.flying, power: 80, description: 'Attacco a spirale con un becco aguzzo che fa da trapano.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Tripletta', type: PokemonElementType.normal, power: 80, description: 'Colpisce il bersaglio con tre sfere simultanee che possono paralizzarlo, scottarlo o congelarlo.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
    ],
  },
  seel: {
    flavorText: 'Pokémon che vive sugli iceberg. Nuota spaccando il ghiaccio con la punta che ha sulla testa.',
    stats: { hp: 65, attack: 45, defense: 55, specialAttack: 45, specialDefense: 70, speed: 45 },
    moves: [
      { name: 'Raggiaurora', type: PokemonElementType.ice, power: 65, description: 'Colpisce il bersaglio con un raggio dai colori dell’iride. Può anche ridurne l’Attacco.' },
      { name: 'Ruggito', type: PokemonElementType.normal, power: null, description: 'Distrae i nemici intorno con un ruggito potente e ne riduce l’Attacco.' },
      { name: 'Geloraggio', type: PokemonElementType.ice, power: 90, description: 'Il bersaglio è colpito da un raggio di energia gelida che può anche congelarlo.' },
      { name: 'Salvaguardia', type: PokemonElementType.normal, power: null, description: 'Chi la usa crea un campo protettivo che evita problemi di stato per sé e gli alleati per cinque turni.' },
    ],
  },
  dewgong: {
    flavorText: 'Ha il corpo ricoperto da una candida pelliccia bianca. Più fa freddo, più questo Pokémon è attivo.',
    stats: { hp: 90, attack: 70, defense: 80, specialAttack: 70, specialDefense: 95, speed: 70 },
    moves: [
      { name: 'Purogelo', type: PokemonElementType.ice, power: null, description: 'Ondata di freddo penetrante che, se va a segno, fa andare KO il bersaglio.' },
      { name: 'Raggiaurora', type: PokemonElementType.ice, power: 65, description: 'Colpisce il bersaglio con un raggio dai colori dell’iride. Può anche ridurne l’Attacco.' },
      { name: 'Ruggito', type: PokemonElementType.normal, power: null, description: 'Distrae i nemici intorno con un ruggito potente e ne riduce l’Attacco.' },
      { name: 'Segnoraggio', type: PokemonElementType.bug, power: 75, description: 'Chi la usa attacca con uno strano raggio di luce che può anche confondere il Pokémon colpito.' },
    ],
  },
  grimer: {
    flavorText: 'Grimer è nato da fango esposto ai raggi X provenienti dalla luna. Ama nutrirsi di sostanze sudicie.',
    stats: { hp: 80, attack: 80, defense: 50, specialAttack: 40, specialDefense: 50, speed: 25 },
    moves: [
      { name: 'Fango', type: PokemonElementType.poison, power: 65, description: 'Lancio di fango malsano che arreca danno al bersaglio. Può anche avvelenarlo.' },
      { name: 'Minimizzato', type: PokemonElementType.normal, power: null, description: 'Il corpo di chi la usa si comprime e diventa più piccolo. La sua capacità di elusione aumenta di molto.' },
      { name: 'Velenogas', type: PokemonElementType.poison, power: null, description: 'Spruzza in faccia ai nemici che ha intorno una nuvola di gas tossico che avvelena.' },
      { name: 'Scudo Acido', type: PokemonElementType.poison, power: null, description: 'Chi la usa altera la sua struttura cellulare passando allo stato liquido. La Difesa sale di molto.' },
    ],
  },
  muk: {
    flavorText: 'Amano riunirsi vicino a puzzolenti liquami di scolo, rendendo il fetore ancora più intenso.',
    stats: { hp: 105, attack: 105, defense: 75, specialAttack: 65, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'Fango', type: PokemonElementType.poison, power: 65, description: 'Lancio di fango malsano che arreca danno al bersaglio. Può anche avvelenarlo.' },
      { name: 'Minimizzato', type: PokemonElementType.normal, power: null, description: 'Il corpo di chi la usa si comprime e diventa più piccolo. La sua capacità di elusione aumenta di molto.' },
      { name: 'Velenogas', type: PokemonElementType.poison, power: null, description: 'Spruzza in faccia ai nemici che ha intorno una nuvola di gas tossico che avvelena.' },
      { name: 'Scudo Acido', type: PokemonElementType.poison, power: null, description: 'Chi la usa altera la sua struttura cellulare passando allo stato liquido. La Difesa sale di molto.' },
    ],
  },
  shellder: {
    flavorText: 'La sua conchiglia dura respinge ogni tipo di attacco. È vulnerabile solo quando apre il guscio.',
    stats: { hp: 30, attack: 65, defense: 100, specialAttack: 45, specialDefense: 25, speed: 40 },
    moves: [
      { name: 'Tenaglia', type: PokemonElementType.water, power: 35, description: 'Chi la usa intrappola e stritola il bersaglio con la sua corazza spessa e forte per quattro o cinque turni.' },
      { name: 'Raggiaurora', type: PokemonElementType.ice, power: 65, description: 'Colpisce il bersaglio con un raggio dai colori dell’iride. Può anche ridurne l’Attacco.' },
      { name: 'Ritirata', type: PokemonElementType.water, power: null, description: 'Il corpo si ritira nel suo duro guscio per aumentare la Difesa.' },
      { name: 'Gelolancia', type: PokemonElementType.ice, power: 25, description: 'Chi la usa spara ghiaccioli affilati contro il bersaglio da due a cinque volte di fila.' },
    ],
  },
  cloyster: {
    flavorText: 'Ai Cloyster che vivono in mari con forti maree crescono grandi aculei affilati sui gusci.',
    stats: { hp: 50, attack: 95, defense: 180, specialAttack: 85, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Sparalance', type: PokemonElementType.normal, power: 20, description: 'Il bersaglio viene colpito da due a cinque volte con spilli appuntiti in rapida successione.' },
      { name: 'Raggiaurora', type: PokemonElementType.ice, power: 65, description: 'Colpisce il bersaglio con un raggio dai colori dell’iride. Può anche ridurne l’Attacco.' },
      { name: 'Ritirata', type: PokemonElementType.water, power: null, description: 'Il corpo si ritira nel suo duro guscio per aumentare la Difesa.' },
      { name: 'Supersuono', type: PokemonElementType.normal, power: null, description: 'Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.' },
    ],
  },
  gastly: {
    flavorText: 'Il suo corpo sottile è fatto di gas. Avvolge nemici di ogni dimensione, soffocandoli.',
    stats: { hp: 30, attack: 35, defense: 30, specialAttack: 100, specialDefense: 35, speed: 80 },
    moves: [
      { name: 'Leccata', type: PokemonElementType.ghost, power: 30, description: 'Una lingua lunga infligge danni al bersaglio e può anche paralizzarlo.' },
      { name: 'Malosguardo', type: PokemonElementType.normal, power: null, description: 'Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga.' },
      { name: 'Incubo', type: PokemonElementType.ghost, power: null, description: 'Il bersaglio addormentato ha un incubo e perde PS a ogni turno.' },
      { name: 'Destinobbligato', type: PokemonElementType.ghost, power: null, description: 'Se chi la usa va KO prima del turno successivo, chi ha sferrato il colpo da KO fa la stessa fine.' },
    ],
  },
  haunter: {
    flavorText: 'Se da soli, al buio, si ha l’impressione di essere osservati da qualcuno, si tratta di Haunter.',
    stats: { hp: 45, attack: 50, defense: 45, specialAttack: 115, specialDefense: 55, speed: 95 },
    moves: [
      { name: 'Pugnodombra', type: PokemonElementType.ghost, power: 60, description: 'Il bersaglio riceve un pugno proveniente dalle tenebre. Questa mossa è infallibile.' },
      { name: 'Leccata', type: PokemonElementType.ghost, power: 30, description: 'Una lingua lunga infligge danni al bersaglio e può anche paralizzarlo.' },
      { name: 'Malosguardo', type: PokemonElementType.normal, power: null, description: 'Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga.' },
      { name: 'Incubo', type: PokemonElementType.ghost, power: null, description: 'Il bersaglio addormentato ha un incubo e perde PS a ogni turno.' },
    ],
  },
  gengar: {
    flavorText: 'Si nasconde nell’ombra. Pare che nei luoghi in cui Gengar si cela, la temperatura si abbassi di 5 °C.',
    stats: { hp: 60, attack: 65, defense: 60, specialAttack: 130, specialDefense: 75, speed: 110 },
    moves: [
      { name: 'Pugnodombra', type: PokemonElementType.ghost, power: 60, description: 'Il bersaglio riceve un pugno proveniente dalle tenebre. Questa mossa è infallibile.' },
      { name: 'Leccata', type: PokemonElementType.ghost, power: 30, description: 'Una lingua lunga infligge danni al bersaglio e può anche paralizzarlo.' },
      { name: 'Malosguardo', type: PokemonElementType.normal, power: null, description: 'Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga.' },
      { name: 'Incubo', type: PokemonElementType.ghost, power: null, description: 'Il bersaglio addormentato ha un incubo e perde PS a ogni turno.' },
    ],
  },
  onix: {
    flavorText: 'Scava veloce nel terreno in cerca di cibo lasciando lunghi cunicoli usati poi come casa dai Diglett.',
    stats: { hp: 35, attack: 45, defense: 160, specialAttack: 30, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Sassata', type: PokemonElementType.rock, power: 50, description: 'Chi la usa solleva una roccia e la lancia contro il bersaglio.' },
      { name: 'Legatutto', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o i tentacoli di chi la usa legano e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Dragospiro', type: PokemonElementType.dragon, power: 60, description: 'Investe il bersaglio con una raffica potentissima che arreca danni. Può anche paralizzarlo.' },
      { name: 'Sabbiotomba', type: PokemonElementType.ground, power: 35, description: 'Chi la usa intrappola il bersaglio in un turbine di sabbia per quattro o cinque turni.' },
    ],
  },
  drowzee: {
    flavorText: 'Addormenta i suoi nemici e poi si nutre dei loro sogni. A volte fa indigestione di incubi.',
    stats: { hp: 60, attack: 48, defense: 45, specialAttack: 43, specialDefense: 90, speed: 42 },
    moves: [
      { name: 'Meditazione', type: PokemonElementType.psychic, power: null, description: 'Chi la usa medita per risvegliare la propria forza interiore e migliorare l’Attacco.' },
      { name: 'Velenogas', type: PokemonElementType.poison, power: null, description: 'Spruzza in faccia ai nemici che ha intorno una nuvola di gas tossico che avvelena.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
    ],
  },
  hypno: {
    flavorText: 'Ha con sé una sorta di pendolo. Una volta, per errore, si è portato via un bambino che aveva ipnotizzato.',
    stats: { hp: 85, attack: 73, defense: 70, specialAttack: 73, specialDefense: 115, speed: 67 },
    moves: [
      { name: 'Meditazione', type: PokemonElementType.psychic, power: null, description: 'Chi la usa medita per risvegliare la propria forza interiore e migliorare l’Attacco.' },
      { name: 'Velenogas', type: PokemonElementType.poison, power: null, description: 'Spruzza in faccia ai nemici che ha intorno una nuvola di gas tossico che avvelena.' },
      { name: 'Incubo', type: PokemonElementType.ghost, power: null, description: 'Il bersaglio addormentato ha un incubo e perde PS a ogni turno.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
    ],
  },
  krabby: {
    flavorText: 'Se si sente in pericolo, si circonda di bolle che produce con la bocca per sembrare più grande.',
    stats: { hp: 30, attack: 105, defense: 90, specialAttack: 25, specialDefense: 25, speed: 50 },
    moves: [
      { name: 'Martellata', type: PokemonElementType.water, power: 100, description: 'Danneggia il bersaglio servendosi di una grande tenaglia. Probabile brutto colpo.' },
      { name: 'Ghigliottina', type: PokemonElementType.normal, power: null, description: 'Attacca il bersaglio con pericolose tenaglie. Se l’attacco va a segno, il Pokémon colpito va subito KO.' },
      { name: 'Presa', type: PokemonElementType.normal, power: 55, description: 'Stringe il bersaglio in una morsa.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
    ],
  },
  kingler: {
    flavorText: 'La chela più grande sprigiona una potenza di 10.000 CV. Le dimensioni gli rendono difficili gli spostamenti.',
    stats: { hp: 55, attack: 130, defense: 115, specialAttack: 50, specialDefense: 50, speed: 75 },
    moves: [
      { name: 'Martellata', type: PokemonElementType.water, power: 100, description: 'Danneggia il bersaglio servendosi di una grande tenaglia. Probabile brutto colpo.' },
      { name: 'Ghigliottina', type: PokemonElementType.normal, power: null, description: 'Attacca il bersaglio con pericolose tenaglie. Se l’attacco va a segno, il Pokémon colpito va subito KO.' },
      { name: 'Presa', type: PokemonElementType.normal, power: 55, description: 'Stringe il bersaglio in una morsa.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
    ],
  },
  voltorb: {
    flavorText: 'Scoperto all’epoca dell’invenzione delle Poké Ball. Si pensa che i due fatti siano correlati.',
    stats: { hp: 40, attack: 30, defense: 50, specialAttack: 55, specialDefense: 55, speed: 100 },
    moves: [
      { name: 'Sonicboom', type: PokemonElementType.normal, power: null, description: 'Il bersaglio viene colpito da onde acustiche devastanti che gli provocano un danno pari a 20 PS.' },
      { name: 'Specchiovelo', type: PokemonElementType.psychic, power: null, description: 'Mossa che replica ogni attacco speciale, arrecando il doppio del danno ricevuto.' },
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
    ],
  },
  electrode: {
    flavorText: 'Può esplodere anche alla minima provocazione. Lo chiamano “Bomba Ball”.',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 80, specialDefense: 80, speed: 150 },
    moves: [
      { name: 'Sonicboom', type: PokemonElementType.normal, power: null, description: 'Il bersaglio viene colpito da onde acustiche devastanti che gli provocano un danno pari a 20 PS.' },
      { name: 'Specchiovelo', type: PokemonElementType.psychic, power: null, description: 'Mossa che replica ogni attacco speciale, arrecando il doppio del danno ricevuto.' },
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
    ],
  },
  exeggcute: {
    flavorText: 'Queste sei uova comunicano per telepatia. Si riuniscono subito anche se vengono divise.',
    stats: { hp: 60, attack: 40, defense: 80, specialAttack: 60, specialDefense: 45, speed: 40 },
    moves: [
      { name: 'Attacco Pioggia', type: PokemonElementType.normal, power: 15, description: 'Piovono enormi sfere sulla testa del bersaglio da due a cinque volte di fila.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Paralizzante', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una nuvola di polvere che paralizza.' },
    ],
  },
  exeggutor: {
    flavorText: 'Ha tre teste che ragionano autonomamente. Ma sono amichevoli e non litigano mai tra di loro.',
    stats: { hp: 95, attack: 95, defense: 85, specialAttack: 125, specialDefense: 75, speed: 55 },
    moves: [
      { name: 'Attacco Pioggia', type: PokemonElementType.normal, power: 15, description: 'Piovono enormi sfere sulla testa del bersaglio da due a cinque volte di fila.' },
      { name: 'Uovobomba', type: PokemonElementType.normal, power: 100, description: 'Colpisce il bersaglio con un grande uovo scaraventato con enorme forza.' },
      { name: 'Pestone', type: PokemonElementType.normal, power: 65, description: 'Colpisce il bersaglio con un grosso piede e può anche farlo tentennare.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
    ],
  },
  cubone: {
    flavorText: 'Indossa il teschio della madre morta come un casco. Quando si sente solo lancia urla strazianti.',
    stats: { hp: 50, attack: 50, defense: 95, specialAttack: 40, specialDefense: 50, speed: 35 },
    moves: [
      { name: 'Ossomerang', type: PokemonElementType.ground, power: 50, description: 'Chi la usa lancia l’osso che tiene. L’osso colpisce due volte e ritorna come un vero e proprio boomerang.' },
      { name: 'Ossoclava', type: PokemonElementType.ground, power: 65, description: 'Chi la usa colpisce il bersaglio con un osso e può farlo anche tentennare.' },
      { name: 'Ossoraffica', type: PokemonElementType.ground, power: 25, description: 'Chi la usa colpisce il bersaglio con un osso da due a cinque volte di fila.' },
      { name: 'Colpo', type: PokemonElementType.normal, power: 120, description: 'Assale e attacca il nemico per due o tre turni, ma confonde chi la usa.' },
    ],
  },
  marowak: {
    flavorText: 'Di piccole dimensioni, un tempo era del tutto innocuo. È diventato più aggressivo brandendo un osso come arma.',
    stats: { hp: 60, attack: 80, defense: 110, specialAttack: 50, specialDefense: 80, speed: 45 },
    moves: [
      { name: 'Ossomerang', type: PokemonElementType.ground, power: 50, description: 'Chi la usa lancia l’osso che tiene. L’osso colpisce due volte e ritorna come un vero e proprio boomerang.' },
      { name: 'Ossoclava', type: PokemonElementType.ground, power: 65, description: 'Chi la usa colpisce il bersaglio con un osso e può farlo anche tentennare.' },
      { name: 'Ossoraffica', type: PokemonElementType.ground, power: 25, description: 'Chi la usa colpisce il bersaglio con un osso da due a cinque volte di fila.' },
      { name: 'Colpo', type: PokemonElementType.normal, power: 120, description: 'Assale e attacca il nemico per due o tre turni, ma confonde chi la usa.' },
    ],
  },
  hitmonlee: {
    flavorText: 'Le zampe gli si accorciano e allungano a piacere. Con le gambe allungate, con un calcio può colpire anche nemici distanti.',
    stats: { hp: 50, attack: 120, defense: 53, specialAttack: 35, specialDefense: 110, speed: 87 },
    moves: [
      { name: 'Calciorullo', type: PokemonElementType.fighting, power: 60, description: 'Chi la usa infierisce sul bersaglio con un calcio rotante. Può anche farlo tentennare.' },
      { name: 'Calciosalto', type: PokemonElementType.fighting, power: 100, description: 'Permette di saltare in alto per attaccare con un calcio. Se non va a buon fine, chi la usa si ferisce.' },
      { name: 'Meditazione', type: PokemonElementType.psychic, power: null, description: 'Chi la usa medita per risvegliare la propria forza interiore e migliorare l’Attacco.' },
      { name: 'Leggimente', type: PokemonElementType.normal, power: null, description: 'Chi la usa prevede i movimenti del bersaglio per mandare a segno l’attacco successivo.' },
    ],
  },
  hitmonchan: {
    flavorText: 'Sferra pugni così potenti da polverizzare persino il cemento. Si riposa dopo 3 minuti di lotta.',
    stats: { hp: 50, attack: 105, defense: 79, specialAttack: 35, specialDefense: 110, speed: 76 },
    moves: [
      { name: 'Cometapugno', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con una scarica di pugni da due a cinque volte di fila.' },
      { name: 'Stramontante', type: PokemonElementType.fighting, power: 85, description: 'Chi la usa attacca il bersaglio con un montante che può arrivare fino al cielo.' },
      { name: 'Pugnorapido', type: PokemonElementType.fighting, power: 40, description: 'Chi la usa tira un pugno a una velocità impressionante e colpisce sempre per primo.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
    ],
  },
  lickitung: {
    flavorText: 'La lunga lingua intrisa di saliva appiccicosa si attacca agli oggetti e può diventare molto utile.',
    stats: { hp: 90, attack: 55, defense: 75, specialAttack: 60, specialDefense: 75, speed: 30 },
    moves: [
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Leccata', type: PokemonElementType.ghost, power: 30, description: 'Una lingua lunga infligge danni al bersaglio e può anche paralizzarlo.' },
      { name: 'Rinfrescata', type: PokemonElementType.normal, power: null, description: 'Chi la usa riposa per guarire da avvelenamento, paralisi e scottatura.' },
      { name: 'Pestone', type: PokemonElementType.normal, power: 65, description: 'Colpisce il bersaglio con un grosso piede e può anche farlo tentennare.' },
    ],
  },
  koffing: {
    flavorText: 'Il suo corpo fatto a pallone è pieno di orribili sostanze gassose, che emanano un puzzo disgustoso.',
    stats: { hp: 40, attack: 65, defense: 95, specialAttack: 60, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Fango', type: PokemonElementType.poison, power: 65, description: 'Lancio di fango malsano che arreca danno al bersaglio. Può anche avvelenarlo.' },
      { name: 'Velenogas', type: PokemonElementType.poison, power: null, description: 'Spruzza in faccia ai nemici che ha intorno una nuvola di gas tossico che avvelena.' },
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'Colpisce il bersaglio con una scarica di gas maleodoranti. Può anche avvelenarlo.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
    ],
  },
  weezing: {
    flavorText: 'Se un gemello Koffing si sgonfia, l’altro si gonfia. I gas velenosi dei due si mischiano continuamente.',
    stats: { hp: 65, attack: 90, defense: 120, specialAttack: 85, specialDefense: 70, speed: 60 },
    moves: [
      { name: 'Fango', type: PokemonElementType.poison, power: 65, description: 'Lancio di fango malsano che arreca danno al bersaglio. Può anche avvelenarlo.' },
      { name: 'Velenogas', type: PokemonElementType.poison, power: null, description: 'Spruzza in faccia ai nemici che ha intorno una nuvola di gas tossico che avvelena.' },
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'Colpisce il bersaglio con una scarica di gas maleodoranti. Può anche avvelenarlo.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
    ],
  },
  rhyhorn: {
    flavorText: 'Potente, benché non particolarmente brillante, con Azione può distruggere anche un grattacielo.',
    stats: { hp: 80, attack: 85, defense: 95, specialAttack: 30, specialDefense: 30, speed: 25 },
    moves: [
      { name: 'Incornata', type: PokemonElementType.normal, power: 65, description: 'Danneggia il bersaglio infilzandolo con un corno affilato.' },
      { name: 'Perforcorno', type: PokemonElementType.normal, power: null, description: 'Colpisce il bersaglio con un corno perforante come un trapano. Se il colpo va a segno, il Pokémon colpito va KO.' },
      { name: 'Megacorno', type: PokemonElementType.bug, power: 120, description: 'Chi la usa utilizza il suo robusto e imponente corno per colpire il bersaglio con tutto se stesso.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
    ],
  },
  rhydon: {
    flavorText: 'Protetto da una pelle-armatura, può vivere nella lava liquida a 2000 °C.',
    stats: { hp: 105, attack: 130, defense: 120, specialAttack: 45, specialDefense: 45, speed: 40 },
    moves: [
      { name: 'Incornata', type: PokemonElementType.normal, power: 65, description: 'Danneggia il bersaglio infilzandolo con un corno affilato.' },
      { name: 'Perforcorno', type: PokemonElementType.normal, power: null, description: 'Colpisce il bersaglio con un corno perforante come un trapano. Se il colpo va a segno, il Pokémon colpito va KO.' },
      { name: 'Megacorno', type: PokemonElementType.bug, power: 120, description: 'Chi la usa utilizza il suo robusto e imponente corno per colpire il bersaglio con tutto se stesso.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
    ],
  },
  chansey: {
    flavorText: 'Si dice che porti felicità. È molto altruista e condivide le uova con chi è ferito.',
    stats: { hp: 250, attack: 5, defense: 5, specialAttack: 35, specialDefense: 105, speed: 50 },
    moves: [
      { name: 'Uovobomba', type: PokemonElementType.normal, power: 100, description: 'Colpisce il bersaglio con un grande uovo scaraventato con enorme forza.' },
      { name: 'Covauova', type: PokemonElementType.normal, power: null, description: 'Chi la usa recupera metà dei propri PS massimi. Fuori dalla lotta può anche far trasferire PS agli alleati.' },
      { name: 'Minimizzato', type: PokemonElementType.normal, power: null, description: 'Il corpo di chi la usa si comprime e diventa più piccolo. La sua capacità di elusione aumenta di molto.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
    ],
  },
  tangela: {
    flavorText: 'Una moltitudine di liane brulicanti, in crescita perenne, ne ricopre il corpo celandone la vera forma.',
    stats: { hp: 65, attack: 55, defense: 115, specialAttack: 100, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Frustata', type: PokemonElementType.grass, power: 45, description: 'Infligge danni al bersaglio con liane sottili simili a fruste.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
    ],
  },
  kangaskhan: {
    flavorText: 'Tiene il cucciolo nel marsupio che ha sulla pancia e lo lascia uscire solo quando non ci sono pericoli.',
    stats: { hp: 105, attack: 95, defense: 80, specialAttack: 40, specialDefense: 80, speed: 90 },
    moves: [
      { name: 'Cometapugno', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con una scarica di pugni da due a cinque volte di fila.' },
      { name: 'Stordipugno', type: PokemonElementType.normal, power: 70, description: 'Colpisce il bersaglio con una sequenza di pugni che può anche confonderlo.' },
      { name: 'Bruciapelo', type: PokemonElementType.normal, power: 40, description: 'Mossa che fa agire per primi e fa tentennare il bersaglio. Funziona solo appena scesi in campo.' },
      { name: 'Colpocoda', type: PokemonElementType.normal, power: null, description: 'Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.' },
    ],
  },
  horsea: {
    flavorText: 'È noto per i suoi attacchi ai volatili con getti d’inchiostro dalla superficie dell’acqua.',
    stats: { hp: 30, attack: 40, defense: 70, specialAttack: 70, specialDefense: 25, speed: 60 },
    moves: [
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Dragodanza', type: PokemonElementType.dragon, power: null, description: 'Danza mistica e vigorosa che aumenta l’Attacco e la Velocità di chi la usa.' },
      { name: 'Tornado', type: PokemonElementType.dragon, power: 40, description: 'Un potente tornado si abbatte sui nemici nei paraggi. Può anche farli tentennare.' },
    ],
  },
  seadra: {
    flavorText: 'Ha il corpo ispido di aculei pungenti. Un contatto fortuito può causare uno svenimento.',
    stats: { hp: 55, attack: 65, defense: 95, specialAttack: 95, specialDefense: 45, speed: 85 },
    moves: [
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Dragodanza', type: PokemonElementType.dragon, power: null, description: 'Danza mistica e vigorosa che aumenta l’Attacco e la Velocità di chi la usa.' },
      { name: 'Tornado', type: PokemonElementType.dragon, power: 40, description: 'Un potente tornado si abbatte sui nemici nei paraggi. Può anche farli tentennare.' },
    ],
  },
  goldeen: {
    flavorText: 'Nuota alla velocità di 5 nodi. Se avverte il pericolo, contrattacca con il suo corno aguzzo.',
    stats: { hp: 45, attack: 67, defense: 60, specialAttack: 35, specialDefense: 50, speed: 63 },
    moves: [
      { name: 'Incornata', type: PokemonElementType.normal, power: 65, description: 'Danneggia il bersaglio infilzandolo con un corno affilato.' },
      { name: 'Perforcorno', type: PokemonElementType.normal, power: null, description: 'Colpisce il bersaglio con un corno perforante come un trapano. Se il colpo va a segno, il Pokémon colpito va KO.' },
      { name: 'Megacorno', type: PokemonElementType.bug, power: 120, description: 'Chi la usa utilizza il suo robusto e imponente corno per colpire il bersaglio con tutto se stesso.' },
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
    ],
  },
  seaking: {
    flavorText: 'In autunno, quando si riproduce, può essere visto risalire impetuoso fiumi e torrenti.',
    stats: { hp: 80, attack: 92, defense: 65, specialAttack: 65, specialDefense: 80, speed: 68 },
    moves: [
      { name: 'Incornata', type: PokemonElementType.normal, power: 65, description: 'Danneggia il bersaglio infilzandolo con un corno affilato.' },
      { name: 'Perforcorno', type: PokemonElementType.normal, power: null, description: 'Colpisce il bersaglio con un corno perforante come un trapano. Se il colpo va a segno, il Pokémon colpito va KO.' },
      { name: 'Megacorno', type: PokemonElementType.bug, power: 120, description: 'Chi la usa utilizza il suo robusto e imponente corno per colpire il bersaglio con tutto se stesso.' },
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
    ],
  },
  staryu: {
    flavorText: 'Anche se il corpo è lacerato, continua a rigenerarsi finché il nucleo ardente centrale rimane intatto.',
    stats: { hp: 30, attack: 45, defense: 55, specialAttack: 70, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'Camuffamento', type: PokemonElementType.normal, power: null, description: 'Modifica il tipo di chi la usa a seconda del luogo, ad esempio sull’acqua, nell’erba o in una grotta.' },
      { name: 'Minimizzato', type: PokemonElementType.normal, power: null, description: 'Il corpo di chi la usa si comprime e diventa più piccolo. La sua capacità di elusione aumenta di molto.' },
      { name: 'Cosmoforza', type: PokemonElementType.psychic, power: null, description: 'Chi la usa assorbe una forza mistica dallo spazio che aumenta la Difesa e la Difesa Speciale.' },
      { name: 'Rapigiro', type: PokemonElementType.normal, power: 50, description: 'Attacco rotante che elimina gli effetti di mosse come Legatutto, Avvolgibotta, Punte e Parassiseme.' },
    ],
  },
  starmie: {
    flavorText: 'Nel suo nucleo brillano i sette colori dell’arcobaleno. Qualcuno lo considera una pietra preziosa.',
    stats: { hp: 60, attack: 75, defense: 85, specialAttack: 100, specialDefense: 85, speed: 115 },
    moves: [
      { name: 'Rapigiro', type: PokemonElementType.normal, power: 50, description: 'Attacco rotante che elimina gli effetti di mosse come Legatutto, Avvolgibotta, Punte e Parassiseme.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
      { name: 'Pistolacqua', type: PokemonElementType.water, power: 40, description: 'Il bersaglio è colpito da un potente getto d’acqua.' },
      { name: 'Stordiraggio', type: PokemonElementType.ghost, power: null, description: 'Colpisce il bersaglio con un raggio funesto che lo confonde.' },
    ],
  },
  scyther: {
    flavorText: 'Fa a pezzi le prede con gli artigli spaventosamente affilati. Solo raramente spiega le ali per alzarsi in volo.',
    stats: { hp: 70, attack: 110, defense: 80, specialAttack: 55, specialDefense: 80, speed: 105 },
    moves: [
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
      { name: 'Falsofinale', type: PokemonElementType.normal, power: 40, description: 'Chi la usa trattiene il colpo per impedire al bersaglio di andare KO, lasciandolo con almeno un PS.' },
      { name: 'Lacerazione', type: PokemonElementType.normal, power: 70, description: 'Attacca il bersaglio con artigli, falci o altro. Probabile brutto colpo.' },
    ],
  },
  mrmime: {
    flavorText: 'Con le dita solidifica l’aria e crea pareti invisibili che respingono gli attacchi più violenti.',
    stats: { hp: 40, attack: 45, defense: 65, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: 'Meditazione', type: PokemonElementType.psychic, power: null, description: 'Chi la usa medita per risvegliare la propria forza interiore e migliorare l’Attacco.' },
      { name: 'Barriera', type: PokemonElementType.psychic, power: null, description: 'Innalza una barriera resistente che aumenta molto la Difesa.' },
      { name: 'Doppiasberla', type: PokemonElementType.normal, power: 15, description: 'Schiaffeggia il bersaglio da due a cinque volte di fila.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
    ],
  },
  electabuzz: {
    flavorText: 'La corrente elettrica attraversa la superficie del suo corpo che al buio riluce di un blu perlato.',
    stats: { hp: 65, attack: 83, defense: 57, specialAttack: 95, specialDefense: 85, speed: 105 },
    moves: [
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
      { name: 'Stridio', type: PokemonElementType.normal, power: null, description: 'Stridio assordante che riduce di molto la Difesa del bersaglio.' },
      { name: 'Tuonopugno', type: PokemonElementType.electric, power: 75, description: 'Colpisce il bersaglio con un pugno elettrico che può paralizzarlo.' },
      { name: 'Fulmisguardo', type: PokemonElementType.normal, power: null, description: 'Terrorizza i nemici intorno con uno sguardo fulminante e intimidatorio, riducendone la Difesa.' },
    ],
  },
  jynx: {
    flavorText: 'Camminando ancheggia in modo seducente. La gente può essere indotta a seguire la sua danza.',
    stats: { hp: 65, attack: 50, defense: 35, specialAttack: 115, specialDefense: 95, speed: 95 },
    moves: [
      { name: 'Demonbacio', type: PokemonElementType.normal, power: null, description: 'Chi la usa intimidisce il bersaglio con una faccia paurosa e gli schiocca un bacio che lo fa addormentare.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
      { name: 'Doppiasberla', type: PokemonElementType.normal, power: 15, description: 'Schiaffeggia il bersaglio da due a cinque volte di fila.' },
      { name: 'Polneve', type: PokemonElementType.ice, power: 40, description: 'Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli.' },
    ],
  },
  pinsir: {
    flavorText: 'Afferra la preda con le pinze e non la molla finché non l’ha tranciata. Se non ci riesce, la scaglia via.',
    stats: { hp: 65, attack: 125, defense: 100, specialAttack: 55, specialDefense: 70, speed: 85 },
    moves: [
      { name: 'Ghigliottina', type: PokemonElementType.normal, power: null, description: 'Attacca il bersaglio con pericolose tenaglie. Se l’attacco va a segno, il Pokémon colpito va subito KO.' },
      { name: 'Presa', type: PokemonElementType.normal, power: 55, description: 'Stringe il bersaglio in una morsa.' },
      { name: 'Sottomissione', type: PokemonElementType.fighting, power: 80, description: 'Chi la usa carica il bersaglio in modo spericolato, ma danneggia anche se stesso.' },
      { name: 'Legatutto', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o i tentacoli di chi la usa legano e stritolano il bersaglio per quattro o cinque turni.' },
    ],
  },
  magmar: {
    flavorText: 'È stato trovato presso il cratere di un vulcano. La sua temperatura corporea si aggira sui 1200 °C.',
    stats: { hp: 65, attack: 95, defense: 57, specialAttack: 100, specialDefense: 85, speed: 93 },
    moves: [
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'Colpisce il bersaglio con una scarica di gas maleodoranti. Può anche avvelenarlo.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Fuocopugno', type: PokemonElementType.fire, power: 75, description: 'Colpisce il bersaglio con un pugno ardente che può scottarlo.' },
    ],
  },
  tauros: {
    flavorText: 'Prima si frusta con le tre code per caricarsi, poi parte all’attacco a tutta velocità.',
    stats: { hp: 75, attack: 100, defense: 95, specialAttack: 40, specialDefense: 70, speed: 110 },
    moves: [
      { name: 'Incornata', type: PokemonElementType.normal, power: 65, description: 'Danneggia il bersaglio infilzandolo con un corno affilato.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
      { name: 'Colpo', type: PokemonElementType.normal, power: 120, description: 'Assale e attacca il nemico per due o tre turni, ma confonde chi la usa.' },
      { name: 'Colpocoda', type: PokemonElementType.normal, power: null, description: 'Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.' },
    ],
  },
  magikarp: {
    flavorText: 'La sua forza e velocità sono praticamente nulle. Si può tranquillamente definire il più debole e patetico Pokémon del mondo.',
    stats: { hp: 20, attack: 10, defense: 55, specialAttack: 15, specialDefense: 20, speed: 80 },
    moves: [
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'Chi la usa sguazza nell’acqua, senza ottenere alcun effetto.' },
      { name: 'Flagello', type: PokemonElementType.normal, power: null, description: 'Chi la usa si dimena per attaccare. È più efficace se i suoi PS sono bassi.' },
      { name: 'Azione', type: PokemonElementType.normal, power: 40, description: 'Attacco fisico che colpisce il bersaglio investendolo con tutto il corpo.' },
    ],
  },
  gyarados: {
    flavorText: 'Un antico documento riporta che Gyarados rase al suolo un villaggio in cui dilagava la violenza.',
    stats: { hp: 95, attack: 125, defense: 79, specialAttack: 60, specialDefense: 100, speed: 81 },
    moves: [
      { name: 'Ira di Drago', type: PokemonElementType.dragon, power: null, description: 'Colpisce il bersaglio con un’onda d’urto generata dall’ira. Questo attacco provoca sempre un danno di 40 PS.' },
      { name: 'Dragodanza', type: PokemonElementType.dragon, power: null, description: 'Danza mistica e vigorosa che aumenta l’Attacco e la Velocità di chi la usa.' },
      { name: 'Tornado', type: PokemonElementType.dragon, power: 40, description: 'Un potente tornado si abbatte sui nemici nei paraggi. Può anche farli tentennare.' },
      { name: 'Colpo', type: PokemonElementType.normal, power: 120, description: 'Assale e attacca il nemico per due o tre turni, ma confonde chi la usa.' },
    ],
  },
  lapras: {
    flavorText: 'Sono buoni d’animo e lottano di rado, così molti di loro sono facili prede: sono stati decimati.',
    stats: { hp: 130, attack: 85, defense: 80, specialAttack: 85, specialDefense: 95, speed: 60 },
    moves: [
      { name: 'Purogelo', type: PokemonElementType.ice, power: null, description: 'Ondata di freddo penetrante che, se va a segno, fa andare KO il bersaglio.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
      { name: 'Nebbia', type: PokemonElementType.ice, power: null, description: 'Chi la usa attira una nebbia che blocca la riduzione delle statistiche per sé e gli alleati per cinque turni.' },
    ],
  },
  eevee: {
    flavorText: 'Un Pokémon raro che si adatta agli ambienti più difficili assumendo diverse forme nell’evoluzione.',
    stats: { hp: 55, attack: 55, defense: 50, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
      { name: 'Colpocoda', type: PokemonElementType.normal, power: null, description: 'Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.' },
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
      { name: 'Staffetta', type: PokemonElementType.normal, power: null, description: 'Chi la usa è sostituito da un Pokémon della squadra, che eredita anche ogni modifica alle statistiche.' },
    ],
  },
  ditto: {
    flavorText: 'Ha la capacità di modificare la sua struttura cellulare per trasformarsi in qualsiasi cosa veda.',
    stats: { hp: 48, attack: 48, defense: 48, specialAttack: 48, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Trasformazione', type: PokemonElementType.normal, power: null, description: 'Chi la usa si trasforma in una copia esatta del bersaglio per sfruttarne le caratteristiche.' },
    ],
  },
  vaporeon: {
    flavorText: 'Preferisce stare sulla costa. In acqua le sue cellule simili a molecole acquee si possono scomporre.',
    stats: { hp: 130, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 65 },
    moves: [
      { name: 'Raggiaurora', type: PokemonElementType.ice, power: 65, description: 'Colpisce il bersaglio con un raggio dai colori dell’iride. Può anche ridurne l’Attacco.' },
      { name: 'Scudo Acido', type: PokemonElementType.poison, power: null, description: 'Chi la usa altera la sua struttura cellulare passando allo stato liquido. La Difesa sale di molto.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
      { name: 'Nube', type: PokemonElementType.ice, power: null, description: 'Chi la usa crea una nube nera che annulla ogni modifica alle statistiche di tutti i Pokémon in campo.' },
    ],
  },
  jolteon: {
    flavorText: 'Quando inizia a caricarsi di elettricità, gli si rizza ogni pelo del corpo.',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 130 },
    moves: [
      { name: 'Missilspillo', type: PokemonElementType.bug, power: 25, description: 'Il bersaglio viene colpito da due a cinque volte con spilli appuntiti in rapida successione.' },
      { name: 'Doppiocalcio', type: PokemonElementType.fighting, power: 30, description: 'Colpisce il bersaglio due volte con una raffica di calci inferti con entrambi i piedi.' },
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
    ],
  },
  flareon: {
    flavorText: 'Nel corpo conserva una tasca ardente. Prima di lottare, la sua temperatura si innalza a 900 °C.',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 95, specialDefense: 110, speed: 65 },
    moves: [
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'Colpisce il bersaglio con una scarica di gas maleodoranti. Può anche avvelenarlo.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Turbofuoco', type: PokemonElementType.fire, power: 35, description: 'Intrappola il bersaglio in un turbine di fuoco che dura per quattro o cinque turni.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
    ],
  },
  porygon: {
    flavorText: 'Questo Pokémon è il risultato di una ricerca umana. Esegue solo i movimenti più elementari.',
    stats: { hp: 65, attack: 60, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'Conversione', type: PokemonElementType.normal, power: null, description: 'Il tipo di chi la usa muta in quello della prima mossa nella lista delle sue mosse.' },
      { name: 'Conversione2', type: PokemonElementType.normal, power: null, description: 'Chi la usa cambia tipo per rendersi resistente al tipo dell’ultima mossa usata dal bersaglio.' },
      { name: 'Affilatore', type: PokemonElementType.normal, power: null, description: 'Chi la usa riduce il numero di poligoni sul proprio corpo per accentuarne gli spigoli e aumentare l’Attacco.' },
      { name: 'Localizza', type: PokemonElementType.normal, power: null, description: 'Chi la usa punta il bersaglio con precisione. La mossa successiva andrà a segno.' },
    ],
  },
  omanyte: {
    flavorText: 'Pokémon preistorico, che viveva nel mare primordiale. Nuota facendo oscillare i suoi dieci tentacoli.',
    stats: { hp: 35, attack: 40, defense: 100, specialAttack: 90, specialDefense: 55, speed: 35 },
    moves: [
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Ritirata', type: PokemonElementType.water, power: null, description: 'Il corpo si ritira nel suo duro guscio per aumentare la Difesa.' },
      { name: 'Solletico', type: PokemonElementType.normal, power: null, description: 'Chi la usa solletica il bersaglio e lo fa ridere, riducendo il suo Attacco e la sua Difesa.' },
      { name: 'Pistolacqua', type: PokemonElementType.water, power: 40, description: 'Il bersaglio è colpito da un potente getto d’acqua.' },
    ],
  },
  omastar: {
    flavorText: 'Ha tentacoli molto sviluppati, paragonabili ad arti umani. Appena irretisce la preda, la morde.',
    stats: { hp: 70, attack: 60, defense: 125, specialAttack: 115, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'Sparalance', type: PokemonElementType.normal, power: 20, description: 'Il bersaglio viene colpito da due a cinque volte con spilli appuntiti in rapida successione.' },
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Ritirata', type: PokemonElementType.water, power: null, description: 'Il corpo si ritira nel suo duro guscio per aumentare la Difesa.' },
      { name: 'Solletico', type: PokemonElementType.normal, power: null, description: 'Chi la usa solletica il bersaglio e lo fa ridere, riducendo il suo Attacco e la sua Difesa.' },
    ],
  },
  kabuto: {
    flavorText: 'Si ritiene che vivesse sulle spiagge 300 milioni di anni fa. È protetto da una conchiglia robusta.',
    stats: { hp: 30, attack: 80, defense: 90, specialAttack: 55, specialDefense: 45, speed: 55 },
    moves: [
      { name: 'Ferrostrido', type: PokemonElementType.steel, power: null, description: 'Orribile stridio, simile a quello prodotto dal metallo, che riduce di molto la Difesa Speciale del bersaglio.' },
      { name: 'Assorbimento', type: PokemonElementType.grass, power: 20, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Megassorbimento', type: PokemonElementType.grass, power: 40, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  kabutops: {
    flavorText: 'In acqua raccoglie gli arti per diventare più compatto, agitando il guscio per nuotare veloce.',
    stats: { hp: 60, attack: 115, defense: 105, specialAttack: 65, specialDefense: 70, speed: 80 },
    moves: [
      { name: 'Ferrostrido', type: PokemonElementType.steel, power: null, description: 'Orribile stridio, simile a quello prodotto dal metallo, che riduce di molto la Difesa Speciale del bersaglio.' },
      { name: 'Assorbimento', type: PokemonElementType.grass, power: 20, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Megassorbimento', type: PokemonElementType.grass, power: 40, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  aerodactyl: {
    flavorText: 'Rigenerato dal materiale organico di un dinosauro ritrovato nell’ambra. Emette versi acuti mentre vola.',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 60, specialDefense: 75, speed: 130 },
    moves: [
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Supersuono', type: PokemonElementType.normal, power: null, description: 'Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.' },
      { name: 'Forzantica', type: PokemonElementType.rock, power: 60, description: 'Colpisce il bersaglio con una forza primordiale. Può aumentare tutte le statistiche.' },
      { name: 'Morso', type: PokemonElementType.dark, power: 60, description: 'Il bersaglio viene morso da denti affilatissimi che possono farlo tentennare.' },
    ],
  },
  articuno: {
    flavorText: 'Un Pokémon uccello leggendario. Riesce a creare bufere di neve congelando l’umidità dell’aria.',
    stats: { hp: 90, attack: 85, defense: 100, specialAttack: 95, specialDefense: 125, speed: 85 },
    moves: [
      { name: 'Leggimente', type: PokemonElementType.normal, power: null, description: 'Chi la usa prevede i movimenti del bersaglio per mandare a segno l’attacco successivo.' },
      { name: 'Purogelo', type: PokemonElementType.ice, power: null, description: 'Ondata di freddo penetrante che, se va a segno, fa andare KO il bersaglio.' },
      { name: 'Polneve', type: PokemonElementType.ice, power: 40, description: 'Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli.' },
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
    ],
  },
  zapdos: {
    flavorText: 'Uccello leggendario, si dice appaia tra le nuvole scagliando enormi saette.',
    stats: { hp: 90, attack: 90, defense: 85, specialAttack: 125, specialDefense: 90, speed: 100 },
    moves: [
      { name: 'Perforbecco', type: PokemonElementType.flying, power: 80, description: 'Attacco a spirale con un becco aguzzo che fa da trapano.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
    ],
  },
  snorlax: {
    flavorText: 'Dopo aver trangugiato i suoi immancabili 400 kg di cibo quotidiani, cade in un sonno profondo.',
    stats: { hp: 160, attack: 110, defense: 65, specialAttack: 65, specialDefense: 110, speed: 30 },
    moves: [
      { name: 'Panciamburo', type: PokemonElementType.normal, power: null, description: 'Chi la usa massimizza l’Attacco in cambio di metà dei PS massimi.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
      { name: 'Blocco', type: PokemonElementType.normal, power: null, description: 'Chi la usa sbarra la strada al bersaglio impedendone la fuga o la sostituzione.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'Chi la usa svuota per un po’ la mente per dimenticare i problemi. La Difesa Speciale aumenta di molto.' },
    ],
  },
  moltres: {
    flavorText: 'Noto come uccello leggendario del fuoco, quando sbatte le ali crea scintillanti lingue infuocate.',
    stats: { hp: 90, attack: 100, defense: 90, specialAttack: 125, specialDefense: 85, speed: 90 },
    moves: [
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Aeroattacco', type: PokemonElementType.flying, power: 140, description: 'Attacco in due turni e probabile brutto colpo. Può anche far tentennare il bersaglio.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Turbofuoco', type: PokemonElementType.fire, power: 35, description: 'Intrappola il bersaglio in un turbine di fuoco che dura per quattro o cinque turni.' },
    ],
  },
  dratini: {
    flavorText: 'Detto “Pokémon miraggio” perché è stato avvistato da pochi. È facile trovare la sua pelle della muta.',
    stats: { hp: 41, attack: 64, defense: 45, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Ira di Drago', type: PokemonElementType.dragon, power: null, description: 'Colpisce il bersaglio con un’onda d’urto generata dall’ira. Questo attacco provoca sempre un danno di 40 PS.' },
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Tornado', type: PokemonElementType.dragon, power: 40, description: 'Un potente tornado si abbatte sui nemici nei paraggi. Può anche farli tentennare.' },
      { name: 'Schianto', type: PokemonElementType.normal, power: 80, description: 'Infligge danni al bersaglio con la coda, con una liana o simili.' },
    ],
  },
  dragonair: {
    flavorText: 'Pare che le sfere di cristallo diano a questo Pokémon il pieno controllo sulle condizioni atmosferiche.',
    stats: { hp: 61, attack: 84, defense: 65, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Ira di Drago', type: PokemonElementType.dragon, power: null, description: 'Colpisce il bersaglio con un’onda d’urto generata dall’ira. Questo attacco provoca sempre un danno di 40 PS.' },
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Tornado', type: PokemonElementType.dragon, power: 40, description: 'Un potente tornado si abbatte sui nemici nei paraggi. Può anche farli tentennare.' },
      { name: 'Schianto', type: PokemonElementType.normal, power: 80, description: 'Infligge danni al bersaglio con la coda, con una liana o simili.' },
    ],
  },
  dragonite: {
    flavorText: 'Nonostante la stazza, è in grado di volare. Può compiere il giro del mondo in 16 ore.',
    stats: { hp: 91, attack: 134, defense: 95, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'Ira di Drago', type: PokemonElementType.dragon, power: null, description: 'Colpisce il bersaglio con un’onda d’urto generata dall’ira. Questo attacco provoca sempre un danno di 40 PS.' },
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Tornado', type: PokemonElementType.dragon, power: 40, description: 'Un potente tornado si abbatte sui nemici nei paraggi. Può anche farli tentennare.' },
    ],
  },
  mewtwo: {
    flavorText: 'Creato da uno scienziato dopo anni di orribili esperimenti di ingegneria genetica.',
    stats: { hp: 106, attack: 110, defense: 90, specialAttack: 154, specialDefense: 90, speed: 130 },
    moves: [
      { name: 'Barriera', type: PokemonElementType.psychic, power: null, description: 'Innalza una barriera resistente che aumenta molto la Difesa.' },
      { name: 'Nebbia', type: PokemonElementType.ice, power: null, description: 'Chi la usa attira una nebbia che blocca la riduzione delle statistiche per sé e gli alleati per cinque turni.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
      { name: 'Inibitore', type: PokemonElementType.normal, power: null, description: 'Per quattro turni impedisce al bersaglio di riutilizzare l’ultima mossa usata.' },
    ],
  },
  mew: {
    flavorText: 'Poiché sa usare qualsiasi mossa, molti scienziati ritengono che Mew sia l’antenato di tutti i Pokémon.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Trasformazione', type: PokemonElementType.normal, power: null, description: 'Chi la usa si trasforma in una copia esatta del bersaglio per sfruttarne le caratteristiche.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
      { name: 'Metronomo', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa di no con il dito e stimola il cervello a usare a caso una delle tante mosse esistenti.' },
      { name: 'Forzantica', type: PokemonElementType.rock, power: 60, description: 'Colpisce il bersaglio con una forza primordiale. Può aumentare tutte le statistiche.' },
    ],
  },
  chikorita: {
    flavorText: 'Un dolce profumo si diffonde dalla sua testa. È docile e ama scaldarsi al sole.',
    stats: { hp: 45, attack: 49, defense: 65, specialAttack: 49, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Chi la usa rilascia un dolce profumo che cura tutti i problemi di stato propri e degli alleati.' },
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
      { name: 'Profumino', type: PokemonElementType.normal, power: null, description: 'Un dolce profumo che riduce di molto l’elusione dei nemici intorno a chi la usa. Fuori dalla lotta attira i Pokémon selvatici.' },
    ],
  },
  bayleef: {
    flavorText: 'Dal suo collo si propaga un profumo vivace. Esso stimola il recupero della salute.',
    stats: { hp: 60, attack: 62, defense: 80, specialAttack: 63, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Chi la usa rilascia un dolce profumo che cura tutti i problemi di stato propri e degli alleati.' },
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
      { name: 'Profumino', type: PokemonElementType.normal, power: null, description: 'Un dolce profumo che riduce di molto l’elusione dei nemici intorno a chi la usa. Fuori dalla lotta attira i Pokémon selvatici.' },
    ],
  },
  meganium: {
    flavorText: 'L’aroma che si spande dai suoi petali contiene una sostanza che placa gli istinti aggressivi.',
    stats: { hp: 80, attack: 82, defense: 100, specialAttack: 83, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'Petalodanza', type: PokemonElementType.grass, power: 120, description: 'Attacca il nemico cospargendolo di petali per due o tre turni, ma chi la usa rimane confuso.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Chi la usa rilascia un dolce profumo che cura tutti i problemi di stato propri e degli alleati.' },
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
    ],
  },
  cyndaquil: {
    flavorText: 'Spesso se ne sta appallottolato giacché timido. Se è attaccato, si difende infuocando il dorso.',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Eruzione', type: PokemonElementType.fire, power: 150, description: 'Attacco impetuoso ed esplosivo la cui potenza è proporzionale ai PS di chi lo usa.' },
      { name: 'Lavasbuffo', type: PokemonElementType.fire, power: 80, description: 'Chi la usa lancia fiamme scarlatte su tutti i Pokémon nelle vicinanze, danneggiandoli. Può anche scottarli.' },
      { name: 'Ruotafuoco', type: PokemonElementType.fire, power: 60, description: 'Chi la usa si copre di fuoco e carica il bersaglio. Può anche scottarlo.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
    ],
  },
  quilava: {
    flavorText: 'Prima di lottare mostra il dorso al nemico per impressionarlo con la potenza delle sue fiamme.',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'Eruzione', type: PokemonElementType.fire, power: 150, description: 'Attacco impetuoso ed esplosivo la cui potenza è proporzionale ai PS di chi lo usa.' },
      { name: 'Lavasbuffo', type: PokemonElementType.fire, power: 80, description: 'Chi la usa lancia fiamme scarlatte su tutti i Pokémon nelle vicinanze, danneggiandoli. Può anche scottarli.' },
      { name: 'Ruotafuoco', type: PokemonElementType.fire, power: 60, description: 'Chi la usa si copre di fuoco e carica il bersaglio. Può anche scottarlo.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
    ],
  },
  typhlosion: {
    flavorText: 'Quando è davvero arrabbiato diventa così caldo che qualsiasi cosa tocchi va subito a fuoco.',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: 'Eruzione', type: PokemonElementType.fire, power: 150, description: 'Attacco impetuoso ed esplosivo la cui potenza è proporzionale ai PS di chi lo usa.' },
      { name: 'Lavasbuffo', type: PokemonElementType.fire, power: 80, description: 'Chi la usa lancia fiamme scarlatte su tutti i Pokémon nelle vicinanze, danneggiandoli. Può anche scottarli.' },
      { name: 'Ruotafuoco', type: PokemonElementType.fire, power: 60, description: 'Chi la usa si copre di fuoco e carica il bersaglio. Può anche scottarlo.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
    ],
  },
  totodile: {
    flavorText: 'Piccolo, ma forte e deciso. Non esita ad avventarsi su qualsiasi cosa si muova.',
    stats: { hp: 50, attack: 65, defense: 64, specialAttack: 44, specialDefense: 48, speed: 43 },
    moves: [
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
      { name: 'Gelodenti', type: PokemonElementType.ice, power: 65, description: 'Chi la usa morde con denti ghiacciati. Può anche congelare o far tentennare il bersaglio.' },
      { name: 'Colpo', type: PokemonElementType.normal, power: 120, description: 'Assale e attacca il nemico per due o tre turni, ma confonde chi la usa.' },
      { name: 'Idrondata', type: PokemonElementType.water, power: 90, description: 'Chi la usa attacca agitando la coda come se fosse una violenta ondata in una tempesta furiosa.' },
    ],
  },
  feraligatr: {
    flavorText: 'Di solito si muove lentamente, ma quando attacca e morde la preda si muove a una velocità incredibile.',
    stats: { hp: 85, attack: 105, defense: 100, specialAttack: 79, specialDefense: 83, speed: 78 },
    moves: [
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
      { name: 'Gelodenti', type: PokemonElementType.ice, power: 65, description: 'Chi la usa morde con denti ghiacciati. Può anche congelare o far tentennare il bersaglio.' },
      { name: 'Colpo', type: PokemonElementType.normal, power: 120, description: 'Assale e attacca il nemico per due o tre turni, ma confonde chi la usa.' },
      { name: 'Idrondata', type: PokemonElementType.water, power: 90, description: 'Chi la usa attacca agitando la coda come se fosse una violenta ondata in una tempesta furiosa.' },
    ],
  },
  croconaw: {
    flavorText: 'Se perde un dente gliene ricresce un altro. La sua bocca contiene sempre 48 denti.',
    stats: { hp: 65, attack: 80, defense: 80, specialAttack: 59, specialDefense: 63, speed: 58 },
    moves: [
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
      { name: 'Gelodenti', type: PokemonElementType.ice, power: 65, description: 'Chi la usa morde con denti ghiacciati. Può anche congelare o far tentennare il bersaglio.' },
      { name: 'Colpo', type: PokemonElementType.normal, power: 120, description: 'Assale e attacca il nemico per due o tre turni, ma confonde chi la usa.' },
      { name: 'Idrondata', type: PokemonElementType.water, power: 90, description: 'Chi la usa attacca agitando la coda come se fosse una violenta ondata in una tempesta furiosa.' },
    ],
  },
  sentret: {
    flavorText: 'La vedetta avverte i suoi compagni del pericolo gridando e battendo la coda sul terreno.',
    stats: { hp: 35, attack: 46, defense: 34, specialAttack: 35, specialDefense: 45, speed: 20 },
    moves: [
      { name: 'Sonoqui', type: PokemonElementType.normal, power: null, description: 'Chi la usa attira l’attenzione su di sé, costringendo i nemici a sceglierlo sempre come bersaglio.' },
      { name: 'Precedenza', type: PokemonElementType.normal, power: null, description: 'Se chi la usa è più veloce del nemico, gli ruba la mossa e gliela ritorce contro con potenza persino maggiore.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
    ],
  },
  furret: {
    flavorText: 'Si addormenta avvolto nell’esile corpo della madre. Mette all’angolo i nemici con movimenti rapidi.',
    stats: { hp: 85, attack: 76, defense: 64, specialAttack: 45, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Sonoqui', type: PokemonElementType.normal, power: null, description: 'Chi la usa attira l’attenzione su di sé, costringendo i nemici a sceglierlo sempre come bersaglio.' },
      { name: 'Precedenza', type: PokemonElementType.normal, power: null, description: 'Se chi la usa è più veloce del nemico, gli ruba la mossa e gliela ritorce contro con potenza persino maggiore.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
    ],
  },
  hoothoot: {
    flavorText: 'Ha un eccezionale senso del ritmo. Tiene il tempo piegando la testa a intervalli regolari.',
    stats: { hp: 60, attack: 30, defense: 30, specialAttack: 36, specialDefense: 56, speed: 50 },
    moves: [
      { name: 'Psicotransfer', type: PokemonElementType.psychic, power: null, description: 'Con la forza psichica e la suggestione, chi la usa può trasferire i suoi problemi di stato al Pokémon colpito.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Extrasenso', type: PokemonElementType.psychic, power: 80, description: 'Chi la usa attacca con una misteriosa forza invisibile. Può far tentennare il bersaglio.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
    ],
  },
  noctowl: {
    flavorText: 'Ha degli occhi speciali con cui concentra anche la luce più fioca per poter vedere al buio.',
    stats: { hp: 100, attack: 50, defense: 50, specialAttack: 86, specialDefense: 96, speed: 70 },
    moves: [
      { name: 'Psicotransfer', type: PokemonElementType.psychic, power: null, description: 'Con la forza psichica e la suggestione, chi la usa può trasferire i suoi problemi di stato al Pokémon colpito.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Extrasenso', type: PokemonElementType.psychic, power: 80, description: 'Chi la usa attacca con una misteriosa forza invisibile. Può far tentennare il bersaglio.' },
      { name: 'Aeroattacco', type: PokemonElementType.flying, power: 140, description: 'Attacco in due turni e probabile brutto colpo. Può anche far tentennare il bersaglio.' },
    ],
  },
  ledyba: {
    flavorText: 'Quando inizia a far freddo, i Ledyba si riuniscono da ogni luogo per scaldarsi tra loro.',
    stats: { hp: 40, attack: 20, defense: 30, specialAttack: 40, specialDefense: 80, speed: 55 },
    moves: [
      { name: 'Cometapugno', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con una scarica di pugni da due a cinque volte di fila.' },
      { name: 'Pugnorapido', type: PokemonElementType.fighting, power: 40, description: 'Chi la usa tira un pugno a una velocità impressionante e colpisce sempre per primo.' },
      { name: 'Ventargenteo', type: PokemonElementType.bug, power: 60, description: 'Attacca con un forte vento di polvere di squame. Tutte le statistiche di chi la usa possono salire.' },
      { name: 'Ronzio', type: PokemonElementType.bug, power: 90, description: 'Chi la usa fa vibrare le ali creando un’onda sonora pericolosa. Può anche ridurre la Difesa Speciale del bersaglio.' },
    ],
  },
  ledian: {
    flavorText: 'Si aggira nella notte stellata lasciando cadere una scia di polvere incandescente.',
    stats: { hp: 55, attack: 35, defense: 50, specialAttack: 55, specialDefense: 110, speed: 85 },
    moves: [
      { name: 'Cometapugno', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con una scarica di pugni da due a cinque volte di fila.' },
      { name: 'Pugnorapido', type: PokemonElementType.fighting, power: 40, description: 'Chi la usa tira un pugno a una velocità impressionante e colpisce sempre per primo.' },
      { name: 'Ventargenteo', type: PokemonElementType.bug, power: 60, description: 'Attacca con un forte vento di polvere di squame. Tutte le statistiche di chi la usa possono salire.' },
      { name: 'Ronzio', type: PokemonElementType.bug, power: 90, description: 'Chi la usa fa vibrare le ali creando un’onda sonora pericolosa. Può anche ridurre la Difesa Speciale del bersaglio.' },
    ],
  },
  spinarak: {
    flavorText: 'Tesse la tela con un filo sottile ma resistente. Poi attende paziente che una preda ci finisca dentro.',
    stats: { hp: 40, attack: 60, defense: 40, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'Ragnatela', type: PokemonElementType.bug, power: null, description: 'Copre il bersaglio con un filo di seta sottile e appiccicoso. Il Pokémon colpito non può fuggire.' },
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Missilspillo', type: PokemonElementType.bug, power: 25, description: 'Il bersaglio viene colpito da due a cinque volte con spilli appuntiti in rapida successione.' },
    ],
  },
  ariados: {
    flavorText: 'Seguendo il filo che gli esce da dietro, si giunge di certo fino al suo nido.',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 70, speed: 40 },
    moves: [
      { name: 'Ragnatela', type: PokemonElementType.bug, power: null, description: 'Copre il bersaglio con un filo di seta sottile e appiccicoso. Il Pokémon colpito non può fuggire.' },
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Missilspillo', type: PokemonElementType.bug, power: 25, description: 'Il bersaglio viene colpito da due a cinque volte con spilli appuntiti in rapida successione.' },
    ],
  },
  crobat: {
    flavorText: 'Vola nel buio con le sue quattro ali in modo talmente silenzioso che è difficile notarlo anche se è vicino.',
    stats: { hp: 85, attack: 90, defense: 80, specialAttack: 70, specialDefense: 80, speed: 130 },
    moves: [
      { name: 'Velenodenti', type: PokemonElementType.poison, power: 50, description: 'Chi la usa morde il bersaglio con denti avvelenati che possono anche iperavvelenarlo.' },
      { name: 'Velenocroce', type: PokemonElementType.poison, power: 70, description: 'Attacco con zanne avvelenate che può anche avvelenare il Pokémon colpito. Probabile brutto colpo.' },
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Malosguardo', type: PokemonElementType.normal, power: null, description: 'Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga.' },
    ],
  },
  chinchou: {
    flavorText: 'Negli oscuri fondali oceanici il suo unico mezzo di comunicazione sono le luci sempre lampeggianti.',
    stats: { hp: 75, attack: 38, defense: 38, specialAttack: 56, specialDefense: 56, speed: 67 },
    moves: [
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Acquanello', type: PokemonElementType.water, power: null, description: 'Chi la usa si avvolge in un velo d’acqua. Recupera alcuni PS a ogni turno.' },
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
      { name: 'Supersuono', type: PokemonElementType.normal, power: null, description: 'Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.' },
    ],
  },
  lanturn: {
    flavorText: 'La sua luce è visibile anche quando si trova in profondità. È soprannominato “Stella degli abissi”.',
    stats: { hp: 125, attack: 58, defense: 58, specialAttack: 76, specialDefense: 76, speed: 67 },
    moves: [
      { name: 'Sfoghenergia', type: PokemonElementType.normal, power: null, description: 'Tutta l’energia accumulata in precedenza con Accumulo è rilasciata nell’attacco. Maggiore è l’energia, più danni si arrecano.' },
      { name: 'Introenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa assorbe l’energia raccolta con la mossa Accumulo e recupera PS. Maggiore è l’energia, più PS si recuperano.' },
      { name: 'Accumulo', type: PokemonElementType.normal, power: null, description: 'Chi la usa accumula energia aumentando la Difesa e la Difesa Speciale. Si può utilizzare tre volte.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
    ],
  },
  pichu: {
    flavorText: 'Quando le code dei Pichu si toccano, fanno scintille. Pare che si tratti di una prova di coraggio.',
    stats: { hp: 20, attack: 40, defense: 15, specialAttack: 35, specialDefense: 35, speed: 60 },
    moves: [
      { name: 'Dolcebacio', type: PokemonElementType.normal, power: null, description: 'Chi la usa bacia il bersaglio con una dolcezza angelica, confondendolo.' },
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Colpocoda', type: PokemonElementType.normal, power: null, description: 'Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.' },
      { name: 'Congiura', type: PokemonElementType.dark, power: null, description: 'Chi la usa stimola il cervello pensando a cose cattive. Aumenta di molto l’Attacco Speciale.' },
    ],
  },
  cleffa: {
    flavorText: 'Per il suo aspetto bizzarro, a forma di stella, c’è chi crede che provenga da una meteora.',
    stats: { hp: 50, attack: 25, defense: 28, specialAttack: 45, specialDefense: 55, speed: 15 },
    moves: [
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
      { name: 'Dolcebacio', type: PokemonElementType.normal, power: null, description: 'Chi la usa bacia il bersaglio con una dolcezza angelica, confondendolo.' },
      { name: 'Copione', type: PokemonElementType.normal, power: null, description: 'Chi la usa mima l’ultima mossa eseguita. Fallisce se non è stata ancora usata alcuna mossa.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
    ],
  },
  igglybuff: {
    flavorText: 'Anziché camminare sulle sue corte zampe, preferisce rimbalzare sul suo corpo soffice e delicato.',
    stats: { hp: 90, attack: 30, defense: 15, specialAttack: 40, specialDefense: 20, speed: 15 },
    moves: [
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
      { name: 'Dolcebacio', type: PokemonElementType.normal, power: null, description: 'Chi la usa bacia il bersaglio con una dolcezza angelica, confondendolo.' },
      { name: 'Copione', type: PokemonElementType.normal, power: null, description: 'Chi la usa mima l’ultima mossa eseguita. Fallisce se non è stata ancora usata alcuna mossa.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
    ],
  },
  togepi: {
    flavorText: 'Il suo guscio sembra ricolmo di gioia. Si dice che porti fortuna se lo si tratta bene.',
    stats: { hp: 35, attack: 20, defense: 65, specialAttack: 40, specialDefense: 65, speed: 20 },
    moves: [
      { name: 'Sonoqui', type: PokemonElementType.normal, power: null, description: 'Chi la usa attira l’attenzione su di sé, costringendo i nemici a sceglierlo sempre come bersaglio.' },
      { name: 'Dolcebacio', type: PokemonElementType.normal, power: null, description: 'Chi la usa bacia il bersaglio con una dolcezza angelica, confondendolo.' },
      { name: 'Desiderio', type: PokemonElementType.normal, power: null, description: 'Permette di recuperare metà dei PS massimi al turno successivo.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
    ],
  },
  togetic: {
    flavorText: 'S’intristisce se non si trova con persone gentili. Può restare sospeso in aria senza bisogno di muovere le ali.',
    stats: { hp: 55, attack: 40, defense: 85, specialAttack: 80, specialDefense: 105, speed: 40 },
    moves: [
      { name: 'Sonoqui', type: PokemonElementType.normal, power: null, description: 'Chi la usa attira l’attenzione su di sé, costringendo i nemici a sceglierlo sempre come bersaglio.' },
      { name: 'Dolcebacio', type: PokemonElementType.normal, power: null, description: 'Chi la usa bacia il bersaglio con una dolcezza angelica, confondendolo.' },
      { name: 'Desiderio', type: PokemonElementType.normal, power: null, description: 'Permette di recuperare metà dei PS massimi al turno successivo.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
    ],
  },
  natu: {
    flavorText: 'Poiché le sue ali non sono ancora ben sviluppate, deve saltellare. Sembra fissare sempre qualcosa.',
    stats: { hp: 40, attack: 50, defense: 45, specialAttack: 70, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Miracolvista', type: PokemonElementType.psychic, power: null, description: 'Chi la usa rende i Pokémon di tipo Buio vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Psicotransfer', type: PokemonElementType.psychic, power: null, description: 'Con la forza psichica e la suggestione, chi la usa può trasferire i suoi problemi di stato al Pokémon colpito.' },
      { name: 'Precedenza', type: PokemonElementType.normal, power: null, description: 'Se chi la usa è più veloce del nemico, gli ruba la mossa e gliela ritorce contro con potenza persino maggiore.' },
      { name: 'Fortuncanto', type: PokemonElementType.normal, power: null, description: 'Chi la usa rivolge un incantesimo al cielo, impedendo al nemico di sferrare brutti colpi alla squadra.' },
    ],
  },
  xatu: {
    flavorText: 'Quando, all’alba, inizia a meditare, riesce a rimanere immobile fino alla fine del giorno.',
    stats: { hp: 65, attack: 75, defense: 70, specialAttack: 95, specialDefense: 70, speed: 95 },
    moves: [
      { name: 'Miracolvista', type: PokemonElementType.psychic, power: null, description: 'Chi la usa rende i Pokémon di tipo Buio vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Psicotransfer', type: PokemonElementType.psychic, power: null, description: 'Con la forza psichica e la suggestione, chi la usa può trasferire i suoi problemi di stato al Pokémon colpito.' },
      { name: 'Precedenza', type: PokemonElementType.normal, power: null, description: 'Se chi la usa è più veloce del nemico, gli ruba la mossa e gliela ritorce contro con potenza persino maggiore.' },
      { name: 'Fortuncanto', type: PokemonElementType.normal, power: null, description: 'Chi la usa rivolge un incantesimo al cielo, impedendo al nemico di sferrare brutti colpi alla squadra.' },
    ],
  },
  mareep: {
    flavorText: 'Se il manto è carico d’elettricità, le sue dimensioni raddoppiano e può dare la scossa.',
    stats: { hp: 55, attack: 40, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Cottonspora', type: PokemonElementType.grass, power: null, description: 'Rilascia spore simili al cotone che si attaccano ai nemici nei paraggi e ne riducono di molto la Velocità.' },
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Gemmoforza', type: PokemonElementType.rock, power: 80, description: 'Chi la usa attacca con un raggio di luce che brilla come se fosse fatto di pietre preziose.' },
    ],
  },
  flaaffy: {
    flavorText: 'La soffice pelliccia raccoglie elettricità. Non resta fulminato grazie a uno strato di pelle gommosa.',
    stats: { hp: 70, attack: 55, defense: 55, specialAttack: 80, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'Cottonspora', type: PokemonElementType.grass, power: null, description: 'Rilascia spore simili al cotone che si attaccano ai nemici nei paraggi e ne riducono di molto la Velocità.' },
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Gemmoforza', type: PokemonElementType.rock, power: 80, description: 'Chi la usa attacca con un raggio di luce che brilla come se fosse fatto di pietre preziose.' },
    ],
  },
  ampharos: {
    flavorText: 'La punta molto luminosa della coda è visibile da grandi distanze. Fa da segnale per chi si è perso.',
    stats: { hp: 90, attack: 75, defense: 85, specialAttack: 115, specialDefense: 90, speed: 55 },
    moves: [
      { name: 'Cottonspora', type: PokemonElementType.grass, power: null, description: 'Rilascia spore simili al cotone che si attaccano ai nemici nei paraggi e ne riducono di molto la Velocità.' },
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Gemmoforza', type: PokemonElementType.rock, power: 80, description: 'Chi la usa attacca con un raggio di luce che brilla come se fosse fatto di pietre preziose.' },
    ],
  },
  bellossom: {
    flavorText: 'A volte gruppi di Bellossom sembrano danzare. Si dice che sia un rito per invocare il sole.',
    stats: { hp: 75, attack: 80, defense: 95, specialAttack: 90, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'Fendifoglia', type: PokemonElementType.grass, power: 90, description: 'Colpisce il bersaglio usando una foglia affilata come una spada. Probabile brutto colpo.' },
      { name: 'Paralizzante', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una nuvola di polvere che paralizza.' },
      { name: 'Profumino', type: PokemonElementType.normal, power: null, description: 'Un dolce profumo che riduce di molto l’elusione dei nemici intorno a chi la usa. Fuori dalla lotta attira i Pokémon selvatici.' },
      { name: 'Megassorbimento', type: PokemonElementType.grass, power: 40, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
    ],
  },
  marill: {
    flavorText: 'La pelliccia è idrorepellente. Così, rimane asciutto anche giocando nell’acqua.',
    stats: { hp: 70, attack: 20, defense: 50, specialAttack: 20, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Acquanello', type: PokemonElementType.water, power: null, description: 'Chi la usa si avvolge in un velo d’acqua. Recupera alcuni PS a ogni turno.' },
      { name: 'Bollaraggio', type: PokemonElementType.water, power: 65, description: 'Colpisce il bersaglio con una forte scarica di bolle. Può anche ridurne la Velocità.' },
      { name: 'Colpocoda', type: PokemonElementType.normal, power: null, description: 'Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.' },
      { name: 'Idrondata', type: PokemonElementType.water, power: 90, description: 'Chi la usa attacca agitando la coda come se fosse una violenta ondata in una tempesta furiosa.' },
    ],
  },
  azumarill: {
    flavorText: 'Le lunghe orecchie sono ottimi sensori. Distingue i movimenti di esseri viventi sui fondali fluviali.',
    stats: { hp: 100, attack: 50, defense: 80, specialAttack: 60, specialDefense: 80, speed: 50 },
    moves: [
      { name: 'Acquanello', type: PokemonElementType.water, power: null, description: 'Chi la usa si avvolge in un velo d’acqua. Recupera alcuni PS a ogni turno.' },
      { name: 'Bollaraggio', type: PokemonElementType.water, power: 65, description: 'Colpisce il bersaglio con una forte scarica di bolle. Può anche ridurne la Velocità.' },
      { name: 'Colpocoda', type: PokemonElementType.normal, power: null, description: 'Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.' },
      { name: 'Idrondata', type: PokemonElementType.water, power: 90, description: 'Chi la usa attacca agitando la coda come se fosse una violenta ondata in una tempesta furiosa.' },
    ],
  },
  politoed: {
    flavorText: 'Quando tre o più Politoed si trovano insieme, iniziano a cantare ad alta voce producendo un gran frastuono.',
    stats: { hp: 90, attack: 75, defense: 75, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
      { name: 'Doppiasberla', type: PokemonElementType.normal, power: 15, description: 'Schiaffeggia il bersaglio da due a cinque volte di fila.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
      { name: 'Bollaraggio', type: PokemonElementType.water, power: 65, description: 'Colpisce il bersaglio con una forte scarica di bolle. Può anche ridurne la Velocità.' },
    ],
  },
  sudowoodo: {
    flavorText: 'Sebbene finga di essere un albero, la composizione sembra più simile a quella di una roccia.',
    stats: { hp: 70, attack: 100, defense: 115, specialAttack: 30, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Mazzuolegno', type: PokemonElementType.grass, power: 120, description: 'Chi la usa si lancia con tutto il corpo contro il bersaglio, ma subisce anche considerevoli danni.' },
      { name: 'Sassata', type: PokemonElementType.rock, power: 50, description: 'Chi la usa solleva una roccia e la lancia contro il bersaglio.' },
      { name: 'Martelpugno', type: PokemonElementType.fighting, power: 100, description: 'Chi la usa colpisce il bersaglio con il suo pugno forte e pesante, ma perde Velocità.' },
      { name: 'Copione', type: PokemonElementType.normal, power: null, description: 'Chi la usa mima l’ultima mossa eseguita. Fallisce se non è stata ancora usata alcuna mossa.' },
    ],
  },
  hoppip: {
    flavorText: 'Ha un corpo così leggero che deve aggrapparsi saldamente al suolo per non volare via.',
    stats: { hp: 35, attack: 35, defense: 40, specialAttack: 35, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'Cottonspora', type: PokemonElementType.grass, power: null, description: 'Rilascia spore simili al cotone che si attaccano ai nemici nei paraggi e ne riducono di molto la Velocità.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'Chi la usa sguazza nell’acqua, senza ottenere alcun effetto.' },
    ],
  },
  skiploom: {
    flavorText: 'Il fiore sul capo si apre e si chiude con il continuo mutare della temperatura corporea.',
    stats: { hp: 55, attack: 45, defense: 50, specialAttack: 45, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'Cottonspora', type: PokemonElementType.grass, power: null, description: 'Rilascia spore simili al cotone che si attaccano ai nemici nei paraggi e ne riducono di molto la Velocità.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'Chi la usa sguazza nell’acqua, senza ottenere alcun effetto.' },
    ],
  },
  jumpluff: {
    flavorText: 'Sospinto dai venti stagionali, gira intorno al globo sparpagliando i suoi semi simili al cotone.',
    stats: { hp: 75, attack: 55, defense: 70, specialAttack: 55, specialDefense: 95, speed: 110 },
    moves: [
      { name: 'Cottonspora', type: PokemonElementType.grass, power: null, description: 'Rilascia spore simili al cotone che si attaccano ai nemici nei paraggi e ne riducono di molto la Velocità.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'Chi la usa sguazza nell’acqua, senza ottenere alcun effetto.' },
    ],
  },
  aipom: {
    flavorText: 'Vive in cima agli alberi più alti. Usando abilmente la coda, mantiene l’equilibrio quando salta di ramo in ramo.',
    stats: { hp: 55, attack: 70, defense: 55, specialAttack: 40, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'Doppiosmash', type: PokemonElementType.normal, power: 35, description: 'Chi la usa colpisce il bersaglio due volte di fila con la coda, una liana o simili.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Solletico', type: PokemonElementType.normal, power: null, description: 'Chi la usa solletica il bersaglio e lo fa ridere, riducendo il suo Attacco e la sua Difesa.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
    ],
  },
  sunkern: {
    flavorText: 'Piomba dall’alto improvvisamente. Se è attaccato da uno Spearow, agita violentemente le foglie.',
    stats: { hp: 30, attack: 30, defense: 30, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: 'Meloderba', type: PokemonElementType.grass, power: null, description: 'Una dolce melodia culla il bersaglio e lo costringe ad addormentarsi.' },
      { name: 'Radicamento', type: PokemonElementType.grass, power: null, description: 'Chi la usa mette delle radici che gli fanno recuperare PS a ogni turno. Non può essere sostituito.' },
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
      { name: 'Crescita', type: PokemonElementType.normal, power: null, description: 'Provoca la crescita immediata del corpo e l’aumento dell’Attacco e dell’Attacco Speciale di chi la usa.' },
    ],
  },
  yanma: {
    flavorText: 'Ha un campo visivo a 360 gradi senza muovere la testa. Riesce a vedere persino le prede alle sue spalle.',
    stats: { hp: 65, attack: 65, defense: 45, specialAttack: 75, specialDefense: 45, speed: 95 },
    moves: [
      { name: 'Sonicboom', type: PokemonElementType.normal, power: null, description: 'Il bersaglio viene colpito da onde acustiche devastanti che gli provocano un danno pari a 20 PS.' },
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Ronzio', type: PokemonElementType.bug, power: 90, description: 'Chi la usa fa vibrare le ali creando un’onda sonora pericolosa. Può anche ridurre la Difesa Speciale del bersaglio.' },
    ],
  },
  sunflora: {
    flavorText: 'Con l’avvicinarsi della bella stagione, i suoi petali si fanno più vivi e splendenti.',
    stats: { hp: 75, attack: 75, defense: 55, specialAttack: 105, specialDefense: 85, speed: 30 },
    moves: [
      { name: 'Meloderba', type: PokemonElementType.grass, power: null, description: 'Una dolce melodia culla il bersaglio e lo costringe ad addormentarsi.' },
      { name: 'Petalodanza', type: PokemonElementType.grass, power: 120, description: 'Attacca il nemico cospargendolo di petali per due o tre turni, ma chi la usa rimane confuso.' },
      { name: 'Radicamento', type: PokemonElementType.grass, power: null, description: 'Chi la usa mette delle radici che gli fanno recuperare PS a ogni turno. Non può essere sostituito.' },
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
    ],
  },
  wooper: {
    flavorText: 'Vive nell’acqua fredda. Quando fa freddo fuori, esce dall’acqua per cercare cibo.',
    stats: { hp: 55, attack: 45, defense: 45, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'Pantanobomba', type: PokemonElementType.ground, power: 65, description: 'Chi la usa lancia una compatta palla di fango. Può anche ridurre la precisione del Pokémon colpito.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Nebbia', type: PokemonElementType.ice, power: null, description: 'Chi la usa attira una nebbia che blocca la riduzione delle statistiche per sé e gli alleati per cinque turni.' },
      { name: 'Schianto', type: PokemonElementType.normal, power: 80, description: 'Infligge danni al bersaglio con la coda, con una liana o simili.' },
    ],
  },
  quagsire: {
    flavorText: 'È pigro per natura. Sta sul fondo dei fiumi con la bocca aperta in attesa di afferrare la preda.',
    stats: { hp: 95, attack: 85, defense: 85, specialAttack: 65, specialDefense: 65, speed: 35 },
    moves: [
      { name: 'Pantanobomba', type: PokemonElementType.ground, power: 65, description: 'Chi la usa lancia una compatta palla di fango. Può anche ridurre la precisione del Pokémon colpito.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Nebbia', type: PokemonElementType.ice, power: null, description: 'Chi la usa attira una nebbia che blocca la riduzione delle statistiche per sé e gli alleati per cinque turni.' },
      { name: 'Schianto', type: PokemonElementType.normal, power: 80, description: 'Infligge danni al bersaglio con la coda, con una liana o simili.' },
    ],
  },
  espeon: {
    flavorText: 'Mentre predice la prossima mossa del nemico, la coda biforcuta gli inizia a tremare.',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 130, specialDefense: 95, speed: 110 },
    moves: [
      { name: 'Mattindoro', type: PokemonElementType.normal, power: null, description: 'Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.' },
      { name: 'Barattoforza', type: PokemonElementType.psychic, power: null, description: 'Chi la usa sfrutta la sua forza psichica per scambiare le modifiche ad Attacco e Attacco Speciale con il bersaglio.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
    ],
  },
  umbreon: {
    flavorText: 'La luce lunare ha mutato la struttura genetica di Eevee. Si cela nel buio in attesa della preda.',
    stats: { hp: 95, attack: 65, defense: 110, specialAttack: 60, specialDefense: 130, speed: 65 },
    moves: [
      { name: 'Lucelunare', type: PokemonElementType.normal, power: null, description: 'Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.' },
      { name: 'Malosguardo', type: PokemonElementType.normal, power: null, description: 'Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga.' },
      { name: 'Barattoscudo', type: PokemonElementType.psychic, power: null, description: 'Chi la usa sfrutta la sua forza psichica per scambiare le modifiche a Difesa e Difesa Speciale con il bersaglio.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  murkrow: {
    flavorText: 'Nasconde in un luogo segreto ogni oggetto che trova. Murkrow e Meowth si derubano tra di loro.',
    stats: { hp: 60, attack: 85, defense: 42, specialAttack: 85, specialDefense: 42, speed: 91 },
    moves: [
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Malosguardo', type: PokemonElementType.normal, power: null, description: 'Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  slowking: {
    flavorText: 'Dotato di incredibile intelligenza e intuito, sa restare calmo e padrone di sé in ogni situazione.',
    stats: { hp: 95, attack: 75, defense: 80, specialAttack: 100, specialDefense: 110, speed: 30 },
    moves: [
      { name: 'Asso', type: PokemonElementType.normal, power: null, description: 'La potenza di questa mossa aumenta man mano che i suoi PP diminuiscono.' },
      { name: 'Gemmoforza', type: PokemonElementType.rock, power: 80, description: 'Chi la usa attacca con un raggio di luce che brilla come se fosse fatto di pietre preziose.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
      { name: 'Inibitore', type: PokemonElementType.normal, power: null, description: 'Per quattro turni impedisce al bersaglio di riutilizzare l’ultima mossa usata.' },
    ],
  },
  unown_a: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_b: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_c: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_d: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_e: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_f: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_g: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_h: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_i: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_j: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_k: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_l: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_m: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_n: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_o: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_p: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_q: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_r: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_s: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_t: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_u: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_v: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_w: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_x: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_y: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_z: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_exclamation: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  unown_question: {
    flavorText: 'Il corpo piatto e sottile sta sempre attaccato ai muri. Pare che la forma abbia un preciso significato.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
    ],
  },
  misdreavus: {
    flavorText: 'Si nutre delle preoccupazioni che assorbe con le sue sfere rosse. Di giorno dorme nell’oscurità.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 85, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'Rancore', type: PokemonElementType.ghost, power: null, description: 'Se chi la usa va KO, i PP della mossa nemica che lo ha messo fuori gioco si azzerano.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
      { name: 'Malosguardo', type: PokemonElementType.normal, power: null, description: 'Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga.' },
      { name: 'Psiconda', type: PokemonElementType.psychic, power: null, description: 'Colpisce il bersaglio con una strana onda psichica. Ha un’intensità variabile.' },
    ],
  },
  wobbuffet: {
    flavorText: 'Odia la luce e gli shock. Se è attaccato, gonfia il corpo per preparare il contrattacco.',
    stats: { hp: 190, attack: 33, defense: 58, specialAttack: 33, specialDefense: 58, speed: 33 },
    moves: [
      { name: 'Specchiovelo', type: PokemonElementType.psychic, power: null, description: 'Mossa che replica ogni attacco speciale, arrecando il doppio del danno ricevuto.' },
      { name: 'Destinobbligato', type: PokemonElementType.ghost, power: null, description: 'Se chi la usa va KO prima del turno successivo, chi ha sferrato il colpo da KO fa la stessa fine.' },
      { name: 'Contrattacco', type: PokemonElementType.fighting, power: null, description: 'Mossa che contrasta ogni attacco fisico, arrecando il doppio del danno ricevuto.' },
      { name: 'Salvaguardia', type: PokemonElementType.normal, power: null, description: 'Chi la usa crea un campo protettivo che evita problemi di stato per sé e gli alleati per cinque turni.' },
    ],
  },
  girafarig: {
    flavorText: 'La testa che ha sulla coda rimane vigile mentre dorme. La coda, infatti, non ha bisogno di riposare.',
    stats: { hp: 70, attack: 80, defense: 65, specialAttack: 90, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Pestone', type: PokemonElementType.normal, power: 65, description: 'Colpisce il bersaglio con un grosso piede e può anche farlo tentennare.' },
      { name: 'Doppiosmash', type: PokemonElementType.normal, power: 35, description: 'Chi la usa colpisce il bersaglio due volte di fila con la coda, una liana o simili.' },
      { name: 'Barattoforza', type: PokemonElementType.psychic, power: null, description: 'Chi la usa sfrutta la sua forza psichica per scambiare le modifiche ad Attacco e Attacco Speciale con il bersaglio.' },
    ],
  },
  pineco: {
    flavorText: 'Inspessisce il guscio aggiungendo strati di corteccia. Non lo impensierisce l’aumento di peso.',
    stats: { hp: 50, attack: 65, defense: 90, specialAttack: 35, specialDefense: 35, speed: 15 },
    moves: [
      { name: 'Rapigiro', type: PokemonElementType.normal, power: 50, description: 'Attacco rotante che elimina gli effetti di mosse come Legatutto, Avvolgibotta, Punte e Parassiseme.' },
      { name: 'Punte', type: PokemonElementType.ground, power: null, description: 'Chi la usa piazza sul terreno una trappola di punte che danneggia i nemici quando scendono in campo.' },
      { name: 'Coleomorso', type: PokemonElementType.bug, power: 60, description: 'Chi la usa morde il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti.' },
      { name: 'Esplosione', type: PokemonElementType.normal, power: 250, description: 'Chi la usa esplode per infliggere danni agli altri Pokémon attorno, ma va KO.' },
    ],
  },
  forretress: {
    flavorText: 'È incassato in una conchiglia d’acciaio. A parte gli occhi scrutatori, nessuno sa cosa ci sia all’interno.',
    stats: { hp: 75, attack: 90, defense: 140, specialAttack: 60, specialDefense: 60, speed: 40 },
    moves: [
      { name: 'Cristalcolpo', type: PokemonElementType.steel, power: 65, description: 'Chi la usa rilascia fasci d’energia dal corpo levigato. Può anche ridurre la precisione del bersaglio.' },
      { name: 'Rapigiro', type: PokemonElementType.normal, power: 50, description: 'Attacco rotante che elimina gli effetti di mosse come Legatutto, Avvolgibotta, Punte e Parassiseme.' },
      { name: 'Punte', type: PokemonElementType.ground, power: null, description: 'Chi la usa piazza sul terreno una trappola di punte che danneggia i nemici quando scendono in campo.' },
      { name: 'Fielepunte', type: PokemonElementType.poison, power: null, description: 'Chi la usa piazza una trappola di punte che avvelenano i nemici che scendono in campo.' },
    ],
  },
  dunsparce: {
    flavorText: 'Se lo si scopre, questo Pokémon fugge all’indietro scavando furiosamente nel terreno con la coda.',
    stats: { hp: 100, attack: 70, defense: 70, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Sguardo Feroce', type: PokemonElementType.normal, power: null, description: 'Chi la usa spaventa il bersaglio con uno sguardo terrificante e ne causa la paralisi.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
      { name: 'Trespolo', type: PokemonElementType.flying, power: null, description: 'Chi la usa sta fermo e riposa, recuperando metà dei propri PS massimi.' },
    ],
  },
  gligar: {
    flavorText: 'Di solito sta attaccato agli scogli. Attacca la preda spalancando le ali e planando.',
    stats: { hp: 65, attack: 75, defense: 105, specialAttack: 35, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Ghigliottina', type: PokemonElementType.normal, power: null, description: 'Attacca il bersaglio con pericolose tenaglie. Se l’attacco va a segno, il Pokémon colpito va subito KO.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  steelix: {
    flavorText: 'Temprato dalla pressione e dal calore sotterraneo, il suo corpo è più duro di qualsiasi metallo.',
    stats: { hp: 75, attack: 85, defense: 200, specialAttack: 55, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Sassata', type: PokemonElementType.rock, power: 50, description: 'Chi la usa solleva una roccia e la lancia contro il bersaglio.' },
      { name: 'Legatutto', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o i tentacoli di chi la usa legano e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Dragospiro', type: PokemonElementType.dragon, power: 60, description: 'Investe il bersaglio con una raffica potentissima che arreca danni. Può anche paralizzarlo.' },
    ],
  },
  snubbull: {
    flavorText: 'Ha uno spirito attivo e giocoso. A molti piace giocherellare con lui per i suoi modi affettuosi.',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'Leccata', type: PokemonElementType.ghost, power: 30, description: 'Una lingua lunga infligge danni al bersaglio e può anche paralizzarlo.' },
      { name: 'Fulmindenti', type: PokemonElementType.electric, power: 65, description: 'Chi la usa morde con denti elettrificati che possono anche paralizzare o far tentennare il bersaglio.' },
      { name: 'Gelodenti', type: PokemonElementType.ice, power: 65, description: 'Chi la usa morde con denti ghiacciati. Può anche congelare o far tentennare il bersaglio.' },
      { name: 'Rogodenti', type: PokemonElementType.fire, power: 65, description: 'Chi la usa morde con denti infuocati. Può anche scottare o far tentennare il bersaglio.' },
    ],
  },
  granbull: {
    flavorText: 'Malgrado il suo aspetto, è molto timido. Se si arrabbia, tuttavia, colpisce con le sue enormi zanne.',
    stats: { hp: 90, attack: 120, defense: 75, specialAttack: 60, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'Leccata', type: PokemonElementType.ghost, power: 30, description: 'Una lingua lunga infligge danni al bersaglio e può anche paralizzarlo.' },
      { name: 'Fulmindenti', type: PokemonElementType.electric, power: 65, description: 'Chi la usa morde con denti elettrificati che possono anche paralizzare o far tentennare il bersaglio.' },
      { name: 'Gelodenti', type: PokemonElementType.ice, power: 65, description: 'Chi la usa morde con denti ghiacciati. Può anche congelare o far tentennare il bersaglio.' },
      { name: 'Rogodenti', type: PokemonElementType.fire, power: 65, description: 'Chi la usa morde con denti infuocati. Può anche scottare o far tentennare il bersaglio.' },
    ],
  },
  qwilfish: {
    flavorText: 'Per sparare le punte velenose, gonfia il corpo bevendo più di 10 l d’acqua in una volta.',
    stats: { hp: 65, attack: 95, defense: 85, specialAttack: 55, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'Minimizzato', type: PokemonElementType.normal, power: null, description: 'Il corpo di chi la usa si comprime e diventa più piccolo. La sua capacità di elusione aumenta di molto.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Sfoghenergia', type: PokemonElementType.normal, power: null, description: 'Tutta l’energia accumulata in precedenza con Accumulo è rilasciata nell’attacco. Maggiore è l’energia, più danni si arrecano.' },
      { name: 'Missilspillo', type: PokemonElementType.bug, power: 25, description: 'Il bersaglio viene colpito da due a cinque volte con spilli appuntiti in rapida successione.' },
    ],
  },
  scizor: {
    flavorText: 'Le chele, che contengono acciaio, possono fare a pezzi qualsiasi oggetto afferrino.',
    stats: { hp: 70, attack: 130, defense: 100, specialAttack: 55, specialDefense: 80, speed: 65 },
    moves: [
      { name: 'Pugnoscarica', type: PokemonElementType.steel, power: 40, description: 'Chi la usa attacca con una scarica di pugni veloci come proiettili. Con questa mossa si colpisce per primi.' },
      { name: 'Ventagliente', type: PokemonElementType.normal, power: 80, description: 'Chi la usa genera un turbine al primo turno e attacca al secondo. Probabile brutto colpo.' },
      { name: 'Doppiosmash', type: PokemonElementType.normal, power: 35, description: 'Chi la usa colpisce il bersaglio due volte di fila con la coda, una liana o simili.' },
      { name: 'Fintoattacco', type: PokemonElementType.normal, power: 30, description: 'Mossa che colpisce anche un bersaglio che ha usato Protezione o Individua, annullandone gli effetti.' },
    ],
  },
  shuckle: {
    flavorText: 'Il suo guscio è come un vaso nel quale conserva le bacche, che a un certo punto si trasformano in un denso succo.',
    stats: { hp: 20, attack: 10, defense: 230, specialAttack: 10, specialDefense: 230, speed: 5 },
    moves: [
      { name: 'Ingannoforza', type: PokemonElementType.psychic, power: null, description: 'Mossa psichica che permette a chi la usa di scambiare i valori delle sue statistiche di Attacco e Difesa.' },
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Ritirata', type: PokemonElementType.water, power: null, description: 'Il corpo si ritira nel suo duro guscio per aumentare la Difesa.' },
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
    ],
  },
  heracross: {
    flavorText: 'Questo potente Pokémon infilza con il corno la pancia del nemico, sollevandolo e lanciandolo lontano.',
    stats: { hp: 80, attack: 125, defense: 75, specialAttack: 40, specialDefense: 95, speed: 85 },
    moves: [
      { name: 'Incornata', type: PokemonElementType.normal, power: 65, description: 'Danneggia il bersaglio infilzandolo con un corno affilato.' },
      { name: 'Megacorno', type: PokemonElementType.bug, power: 120, description: 'Chi la usa utilizza il suo robusto e imponente corno per colpire il bersaglio con tutto se stesso.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Fintoattacco', type: PokemonElementType.normal, power: 30, description: 'Mossa che colpisce anche un bersaglio che ha usato Protezione o Individua, annullandone gli effetti.' },
    ],
  },
  sneasel: {
    flavorText: 'Mangia uova rubate dai nidi. Attacca i nemici nei punti deboli con i suoi artigli uncinati.',
    stats: { hp: 55, attack: 95, defense: 55, specialAttack: 35, specialDefense: 75, speed: 115 },
    moves: [
      { name: 'Geloscheggia', type: PokemonElementType.ice, power: 40, description: 'Chi la usa crea dei pezzi di ghiaccio e li lancia. Con questa mossa si colpisce per primi.' },
      { name: 'Picchiaduro', type: PokemonElementType.dark, power: null, description: 'Chi la usa chiama in aiuto i Pokémon della squadra: più ce ne sono, maggiore è il numero di attacchi.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  teddiursa: {
    flavorText: 'Se trova del miele la sua mezzaluna diventa più luminosa. Si lecca le zampe intrise di miele.',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Leccata', type: PokemonElementType.ghost, power: 30, description: 'Una lingua lunga infligge danni al bersaglio e può anche paralizzarlo.' },
      { name: 'Profumino', type: PokemonElementType.normal, power: null, description: 'Un dolce profumo che riduce di molto l’elusione dei nemici intorno a chi la usa. Fuori dalla lotta attira i Pokémon selvatici.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  ursaring: {
    flavorText: 'Con la sua capacità di distinguere qualsiasi odore, trova cibo nel terreno anche a grandi profondità.',
    stats: { hp: 90, attack: 130, defense: 75, specialAttack: 75, specialDefense: 75, speed: 55 },
    moves: [
      { name: 'Leccata', type: PokemonElementType.ghost, power: 30, description: 'Una lingua lunga infligge danni al bersaglio e può anche paralizzarlo.' },
      { name: 'Martelpugno', type: PokemonElementType.fighting, power: 100, description: 'Chi la usa colpisce il bersaglio con il suo pugno forte e pesante, ma perde Velocità.' },
      { name: 'Profumino', type: PokemonElementType.normal, power: null, description: 'Un dolce profumo che riduce di molto l’elusione dei nemici intorno a chi la usa. Fuori dalla lotta attira i Pokémon selvatici.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
    ],
  },
  slugma: {
    flavorText: 'Comune nelle aree vulcaniche, striscia in giro lentamente, sempre alla ricerca di luoghi caldi.',
    stats: { hp: 40, attack: 40, defense: 40, specialAttack: 70, specialDefense: 40, speed: 20 },
    moves: [
      { name: 'Lavasbuffo', type: PokemonElementType.fire, power: 80, description: 'Chi la usa lancia fiamme scarlatte su tutti i Pokémon nelle vicinanze, danneggiandoli. Può anche scottarli.' },
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'Colpisce il bersaglio con una scarica di gas maleodoranti. Può anche avvelenarlo.' },
      { name: 'Sassata', type: PokemonElementType.rock, power: 50, description: 'Chi la usa solleva una roccia e la lancia contro il bersaglio.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
    ],
  },
  magcargo: {
    flavorText: 'A volte intense fiamme partono dal fragile guscio e avvolgono tutto il suo corpo.',
    stats: { hp: 60, attack: 50, defense: 120, specialAttack: 90, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'Lavasbuffo', type: PokemonElementType.fire, power: 80, description: 'Chi la usa lancia fiamme scarlatte su tutti i Pokémon nelle vicinanze, danneggiandoli. Può anche scottarli.' },
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'Colpisce il bersaglio con una scarica di gas maleodoranti. Può anche avvelenarlo.' },
      { name: 'Sassata', type: PokemonElementType.rock, power: 50, description: 'Chi la usa solleva una roccia e la lancia contro il bersaglio.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
    ],
  },
  swinub: {
    flavorText: 'Sfrega il muso sul terreno per scovare del cibo. Talvolta scopre sorgenti d’acqua calda.',
    stats: { hp: 50, attack: 50, defense: 40, specialAttack: 30, specialDefense: 30, speed: 50 },
    moves: [
      { name: 'Pantanobomba', type: PokemonElementType.ground, power: 65, description: 'Chi la usa lancia una compatta palla di fango. Può anche ridurre la precisione del Pokémon colpito.' },
      { name: 'Geloscheggia', type: PokemonElementType.ice, power: 40, description: 'Chi la usa crea dei pezzi di ghiaccio e li lancia. Con questa mossa si colpisce per primi.' },
      { name: 'Polneve', type: PokemonElementType.ice, power: 40, description: 'Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli.' },
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
    ],
  },
  piloswine: {
    flavorText: 'Ha le zampe corte, ma grazie agli zoccoli ruvidi, riesce a non scivolare neppure sul ghiaccio.',
    stats: { hp: 100, attack: 100, defense: 80, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Pantanobomba', type: PokemonElementType.ground, power: 65, description: 'Chi la usa lancia una compatta palla di fango. Può anche ridurre la precisione del Pokémon colpito.' },
      { name: 'Polneve', type: PokemonElementType.ice, power: 40, description: 'Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli.' },
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
    ],
  },
  corsola: {
    flavorText: 'Sul suo capo crescono dei coralli molto fragili. Se un ramo si spezza e cade, viene rigenerato nell’arco di tre giorni.',
    stats: { hp: 65, attack: 55, defense: 95, specialAttack: 65, specialDefense: 95, speed: 35 },
    moves: [
      { name: 'Sparalance', type: PokemonElementType.normal, power: 20, description: 'Il bersaglio viene colpito da due a cinque volte con spilli appuntiti in rapida successione.' },
      { name: 'Fortuncanto', type: PokemonElementType.normal, power: null, description: 'Chi la usa rivolge un incantesimo al cielo, impedendo al nemico di sferrare brutti colpi alla squadra.' },
      { name: 'Rinfrescata', type: PokemonElementType.normal, power: null, description: 'Chi la usa riposa per guarire da avvelenamento, paralisi e scottatura.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
    ],
  },
  remoraid: {
    flavorText: 'La sua precisione è straordinaria. Può colpire una preda in movimento anche a più di 100 m.',
    stats: { hp: 35, attack: 65, defense: 35, specialAttack: 65, specialDefense: 35, speed: 65 },
    moves: [
      { name: 'Localizza', type: PokemonElementType.normal, power: null, description: 'Chi la usa punta il bersaglio con precisione. La mossa successiva andrà a segno.' },
      { name: 'Raggiaurora', type: PokemonElementType.ice, power: 65, description: 'Colpisce il bersaglio con un raggio dai colori dell’iride. Può anche ridurne l’Attacco.' },
      { name: 'Bollaraggio', type: PokemonElementType.water, power: 65, description: 'Colpisce il bersaglio con una forte scarica di bolle. Può anche ridurne la Velocità.' },
      { name: 'Psicoraggio', type: PokemonElementType.psychic, power: 65, description: 'Colpisce il bersaglio con un raggio speciale. Può anche confonderlo.' },
    ],
  },
  octillery: {
    flavorText: 'Ama rintanarsi nei vasi o nelle fessure della roccia, da dove attacca sparando getti d’inchiostro.',
    stats: { hp: 75, attack: 105, defense: 75, specialAttack: 105, specialDefense: 75, speed: 45 },
    moves: [
      { name: 'Octazooka', type: PokemonElementType.water, power: 65, description: 'Chi la usa spruzza inchiostro in faccia al bersaglio. Può anche ridurne la precisione.' },
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Strizzata', type: PokemonElementType.normal, power: null, description: 'Chi la usa stritola con forza il bersaglio. Più PS ha il Pokémon colpito, maggiore è la potenza della mossa.' },
      { name: 'Raggiaurora', type: PokemonElementType.ice, power: 65, description: 'Colpisce il bersaglio con un raggio dai colori dell’iride. Può anche ridurne l’Attacco.' },
    ],
  },
  delibird: {
    flavorText: 'Trascina il cibo avvolgendolo nella coda e ha l’abitudine di condividerlo con chi si perde fra le montagne.',
    stats: { hp: 45, attack: 55, defense: 45, specialAttack: 65, specialDefense: 45, speed: 75 },
    moves: [
      { name: 'Regalino', type: PokemonElementType.normal, power: null, description: 'Chi la usa dà un regalo bomba al bersaglio. A volte, però, può fargli recuperare PS.' },
    ],
  },
  mantine: {
    flavorText: 'Prende velocità nuotando e, quando è pronto, usa le onde come trampolini per saltare a volte anche fino a 100 m.',
    stats: { hp: 85, attack: 40, defense: 70, specialAttack: 80, specialDefense: 140, speed: 70 },
    moves: [
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Acquanello', type: PokemonElementType.water, power: null, description: 'Chi la usa si avvolge in un velo d’acqua. Recupera alcuni PS a ogni turno.' },
      { name: 'Supersuono', type: PokemonElementType.normal, power: null, description: 'Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.' },
    ],
  },
  skarmory: {
    flavorText: 'Facendo il nido tra i rovi, le ali dei suoi piccoli si rinforzano per i graffi causati dalle spine.',
    stats: { hp: 65, attack: 80, defense: 140, specialAttack: 40, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Ferrostrido', type: PokemonElementType.steel, power: null, description: 'Orribile stridio, simile a quello prodotto dal metallo, che riduce di molto la Difesa Speciale del bersaglio.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
      { name: 'Punte', type: PokemonElementType.ground, power: null, description: 'Chi la usa piazza sul terreno una trappola di punte che danneggia i nemici quando scendono in campo.' },
    ],
  },
  houndour: {
    flavorText: 'All’alba, i suoi sinistri urli riecheggiano nell’aria. In questo modo demarca il territorio.',
    stats: { hp: 45, attack: 60, defense: 30, specialAttack: 80, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'Colpisce il bersaglio con una scarica di gas maleodoranti. Può anche avvelenarlo.' },
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Gridodilotta', type: PokemonElementType.normal, power: null, description: 'Chi la usa emette un forte verso per darsi coraggio e aumentare l’Attacco.' },
      { name: 'Picchiaduro', type: PokemonElementType.dark, power: null, description: 'Chi la usa chiama in aiuto i Pokémon della squadra: più ce ne sono, maggiore è il numero di attacchi.' },
    ],
  },
  houndoom: {
    flavorText: 'Molto tempo fa, si riteneva che le sue urla sinistre coincidessero con la chiamata della morte.',
    stats: { hp: 75, attack: 90, defense: 50, specialAttack: 110, specialDefense: 80, speed: 95 },
    moves: [
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'Colpisce il bersaglio con una scarica di gas maleodoranti. Può anche avvelenarlo.' },
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Gridodilotta', type: PokemonElementType.normal, power: null, description: 'Chi la usa emette un forte verso per darsi coraggio e aumentare l’Attacco.' },
      { name: 'Picchiaduro', type: PokemonElementType.dark, power: null, description: 'Chi la usa chiama in aiuto i Pokémon della squadra: più ce ne sono, maggiore è il numero di attacchi.' },
    ],
  },
  phanpy: {
    flavorText: 'Dà colpi con il muso in segno di affetto, ma è così forte che può far volare la gente in questo modo.',
    stats: { hp: 90, attack: 60, defense: 60, specialAttack: 40, specialDefense: 40, speed: 40 },
    moves: [
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Schianto', type: PokemonElementType.normal, power: 80, description: 'Infligge danni al bersaglio con la coda, con una liana o simili.' },
      { name: 'Ultimascelta', type: PokemonElementType.normal, power: 140, description: 'Per usare questa mossa, bisogna prima avvalersi in lotta di tutte le altre mosse conosciute.' },
      { name: 'Flagello', type: PokemonElementType.normal, power: null, description: 'Chi la usa si dimena per attaccare. È più efficace se i suoi PS sono bassi.' },
    ],
  },
  kingdra: {
    flavorText: 'Si dice che si nasconda in grotte sottacqua. Il suo sbadiglio può provocare dei vortici.',
    stats: { hp: 75, attack: 95, defense: 95, specialAttack: 95, specialDefense: 95, speed: 85 },
    moves: [
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Dragodanza', type: PokemonElementType.dragon, power: null, description: 'Danza mistica e vigorosa che aumenta l’Attacco e la Velocità di chi la usa.' },
      { name: 'Tornado', type: PokemonElementType.dragon, power: 40, description: 'Un potente tornado si abbatte sui nemici nei paraggi. Può anche farli tentennare.' },
    ],
  },
  donphan: {
    flavorText: 'Ha zanne dure e affilate e la pelle grinzosa. La sua Azione è così forte da abbattere una casa.',
    stats: { hp: 90, attack: 120, defense: 120, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Incornata', type: PokemonElementType.normal, power: 65, description: 'Danneggia il bersaglio infilzandolo con un corno affilato.' },
      { name: 'Magnitudo', type: PokemonElementType.ground, power: null, description: 'Chi la usa scatena un terremoto d’intensità variabile che danneggia i Pokémon che ha intorno.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Rapigiro', type: PokemonElementType.normal, power: 50, description: 'Attacco rotante che elimina gli effetti di mosse come Legatutto, Avvolgibotta, Punte e Parassiseme.' },
    ],
  },
  porygon2: {
    flavorText: 'Ricerche avanzate hanno potenziato le sue capacità. Ora può fare movimenti che non erano programmati.',
    stats: { hp: 85, attack: 80, defense: 90, specialAttack: 105, specialDefense: 95, speed: 60 },
    moves: [
      { name: 'Conversione', type: PokemonElementType.normal, power: null, description: 'Il tipo di chi la usa muta in quello della prima mossa nella lista delle sue mosse.' },
      { name: 'Conversione2', type: PokemonElementType.normal, power: null, description: 'Chi la usa cambia tipo per rendersi resistente al tipo dell’ultima mossa usata dal bersaglio.' },
      { name: 'Localizza', type: PokemonElementType.normal, power: null, description: 'Chi la usa punta il bersaglio con precisione. La mossa successiva andrà a segno.' },
      { name: 'Tripletta', type: PokemonElementType.normal, power: 80, description: 'Colpisce il bersaglio con tre sfere simultanee che possono paralizzarlo, scottarlo o congelarlo.' },
    ],
  },
  stantler: {
    flavorText: 'Chi fissa le sue corna riceve una strana sensazione, quasi come se venisse risucchiato.',
    stats: { hp: 73, attack: 95, defense: 62, specialAttack: 85, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Precedenza', type: PokemonElementType.normal, power: null, description: 'Se chi la usa è più veloce del nemico, gli ruba la mossa e gliela ritorce contro con potenza persino maggiore.' },
      { name: 'Pestone', type: PokemonElementType.normal, power: 65, description: 'Colpisce il bersaglio con un grosso piede e può anche farlo tentennare.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
    ],
  },
  smeargle: {
    flavorText: 'Quando è adulto tende a farsi lasciare orme di zampe sul dorso dai propri compagni.',
    stats: { hp: 55, attack: 20, defense: 35, specialAttack: 20, specialDefense: 45, speed: 75 },
    moves: [
      { name: 'Schizzo', type: PokemonElementType.normal, power: null, description: 'Permette a chi la usa di imparare l’ultima mossa usata dal bersaglio. La nuova mossa appresa sostituisce Schizzo.' },
    ],
  },
  tyrogue: {
    flavorText: 'Sempre traboccante di energia. Per rinforzarsi continua a combattere anche dopo aver perso.',
    stats: { hp: 35, attack: 35, defense: 35, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Bruciapelo', type: PokemonElementType.normal, power: 40, description: 'Mossa che fa agire per primi e fa tentennare il bersaglio. Funziona solo appena scesi in campo.' },
      { name: 'Azione', type: PokemonElementType.normal, power: 40, description: 'Attacco fisico che colpisce il bersaglio investendolo con tutto il corpo.' },
      { name: 'Altruismo', type: PokemonElementType.normal, power: null, description: 'Mossa che aumenta la potenza dell’attacco di un alleato.' },
    ],
  },
  hitmontop: {
    flavorText: 'Combatte mentre gira come una trottola. La forza centrifuga decuplica il suo potere distruttivo.',
    stats: { hp: 50, attack: 95, defense: 95, specialAttack: 35, specialDefense: 110, speed: 70 },
    moves: [
      { name: 'Triplocalcio', type: PokemonElementType.fighting, power: 10, description: 'Chi la usa sferra fino a tre calci consecutivi la cui potenza aumenta a ogni colpo.' },
      { name: 'Calciorullo', type: PokemonElementType.fighting, power: 60, description: 'Chi la usa infierisce sul bersaglio con un calcio rotante. Può anche farlo tentennare.' },
      { name: 'Rapigiro', type: PokemonElementType.normal, power: 50, description: 'Attacco rotante che elimina gli effetti di mosse come Legatutto, Avvolgibotta, Punte e Parassiseme.' },
      { name: 'Fintoattacco', type: PokemonElementType.normal, power: 30, description: 'Mossa che colpisce anche un bersaglio che ha usato Protezione o Individua, annullandone gli effetti.' },
    ],
  },
  smoochum: {
    flavorText: 'Le labbra sono la parte più sensibile del corpo, il primo organo con cui analizza nuovi oggetti.',
    stats: { hp: 45, attack: 30, defense: 15, specialAttack: 85, specialDefense: 65, speed: 65 },
    moves: [
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
      { name: 'Fortuncanto', type: PokemonElementType.normal, power: null, description: 'Chi la usa rivolge un incantesimo al cielo, impedendo al nemico di sferrare brutti colpi alla squadra.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
      { name: 'Polneve', type: PokemonElementType.ice, power: 40, description: 'Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli.' },
    ],
  },
  magby: {
    flavorText: 'È di piccole dimensioni, ma la temperatura del suo corpo è di 600 °C. Quando respira emette scintille da naso e bocca.',
    stats: { hp: 45, attack: 75, defense: 37, specialAttack: 70, specialDefense: 55, speed: 83 },
    moves: [
      { name: 'Lavasbuffo', type: PokemonElementType.fire, power: 80, description: 'Chi la usa lancia fiamme scarlatte su tutti i Pokémon nelle vicinanze, danneggiandoli. Può anche scottarli.' },
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'Colpisce il bersaglio con una scarica di gas maleodoranti. Può anche avvelenarlo.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
    ],
  },
  elekid: {
    flavorText: 'Genera elettricità roteando le braccia. Tuttavia, non riesce a immagazzinare l’energia creata.',
    stats: { hp: 45, attack: 63, defense: 37, specialAttack: 65, specialDefense: 55, speed: 95 },
    moves: [
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
      { name: 'Stridio', type: PokemonElementType.normal, power: null, description: 'Stridio assordante che riduce di molto la Difesa del bersaglio.' },
    ],
  },
  miltank: {
    flavorText: 'Se ha appena avuto un piccolo, il latte che produce è molto più nutriente del normale.',
    stats: { hp: 95, attack: 80, defense: 105, specialAttack: 40, specialDefense: 70, speed: 100 },
    moves: [
      { name: 'Buonlatte', type: PokemonElementType.normal, power: null, description: 'Chi la usa recupera metà dei propri PS massimi. Fuori dalla lotta può anche far trasferire PS agli alleati.' },
      { name: 'Svegliopacca', type: PokemonElementType.fighting, power: 70, description: 'Questa mossa infligge un danno doppio a un bersaglio addormentato, ma allo stesso tempo lo risveglia.' },
      { name: 'Pestone', type: PokemonElementType.normal, power: 65, description: 'Colpisce il bersaglio con un grosso piede e può anche farlo tentennare.' },
      { name: 'Rintoccasana', type: PokemonElementType.normal, power: null, description: 'Chi la usa produce uno scampanellio che cura i problemi di stato suoi e dei Pokémon alleati.' },
    ],
  },
  blissey: {
    flavorText: 'Le uova che depone sono piene di felicità. Un assaggio rende chiunque allegro.',
    stats: { hp: 255, attack: 10, defense: 10, specialAttack: 75, specialDefense: 135, speed: 55 },
    moves: [
      { name: 'Uovobomba', type: PokemonElementType.normal, power: 100, description: 'Colpisce il bersaglio con un grande uovo scaraventato con enorme forza.' },
      { name: 'Covauova', type: PokemonElementType.normal, power: null, description: 'Chi la usa recupera metà dei propri PS massimi. Fuori dalla lotta può anche far trasferire PS agli alleati.' },
      { name: 'Minimizzato', type: PokemonElementType.normal, power: null, description: 'Il corpo di chi la usa si comprime e diventa più piccolo. La sua capacità di elusione aumenta di molto.' },
      { name: 'Curardore', type: PokemonElementType.psychic, power: null, description: 'Chi la usa va KO, ma il Pokémon che lo sostituisce recupera tutti i PS e guarisce dai problemi di stato.' },
    ],
  },
  raikou: {
    flavorText: 'Grazie alle nubi di pioggia che ha con sé lancia fulmini a volontà. Pare che sia arrivato con un lampo.',
    stats: { hp: 90, attack: 85, defense: 75, specialAttack: 115, specialDefense: 100, speed: 115 },
    moves: [
      { name: 'Extrasenso', type: PokemonElementType.psychic, power: 80, description: 'Chi la usa attacca con una misteriosa forza invisibile. Può far tentennare il bersaglio.' },
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
    ],
  },
  entei: {
    flavorText: 'Un Pokémon che corre in lungo e in largo. Si dice che nasca ogni volta che si forma un nuovo vulcano.',
    stats: { hp: 115, attack: 115, defense: 85, specialAttack: 90, specialDefense: 75, speed: 100 },
    moves: [
      { name: 'Eruzione', type: PokemonElementType.fire, power: 150, description: 'Attacco impetuoso ed esplosivo la cui potenza è proporzionale ai PS di chi lo usa.' },
      { name: 'Lavasbuffo', type: PokemonElementType.fire, power: 80, description: 'Chi la usa lancia fiamme scarlatte su tutti i Pokémon nelle vicinanze, danneggiandoli. Può anche scottarli.' },
      { name: 'Pestone', type: PokemonElementType.normal, power: 65, description: 'Colpisce il bersaglio con un grosso piede e può anche farlo tentennare.' },
      { name: 'Extrasenso', type: PokemonElementType.psychic, power: 80, description: 'Chi la usa attacca con una misteriosa forza invisibile. Può far tentennare il bersaglio.' },
    ],
  },
  suicune: {
    flavorText: 'Corre per tutto il mondo per purificare l’acqua contaminata. Si allontana con i venti del nord.',
    stats: { hp: 100, attack: 75, defense: 115, specialAttack: 90, specialDefense: 115, speed: 85 },
    moves: [
      { name: 'Raggiaurora', type: PokemonElementType.ice, power: 65, description: 'Colpisce il bersaglio con un raggio dai colori dell’iride. Può anche ridurne l’Attacco.' },
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
      { name: 'Specchiovelo', type: PokemonElementType.psychic, power: null, description: 'Mossa che replica ogni attacco speciale, arrecando il doppio del danno ricevuto.' },
      { name: 'Extrasenso', type: PokemonElementType.psychic, power: 80, description: 'Chi la usa attacca con una misteriosa forza invisibile. Può far tentennare il bersaglio.' },
    ],
  },
  larvitar: {
    flavorText: 'Si nutre di terra. Dopo aver divorato una montagna intera, si addormenta per poter crescere.',
    stats: { hp: 50, attack: 64, defense: 50, specialAttack: 45, specialDefense: 50, speed: 41 },
    moves: [
      { name: 'Colpo', type: PokemonElementType.normal, power: 120, description: 'Assale e attacca il nemico per due o tre turni, ma confonde chi la usa.' },
      { name: 'Neropulsar', type: PokemonElementType.dark, power: 80, description: 'Chi la usa emana un’aura impregnata di oscuri pensieri. Può anche far tentennare il Pokémon colpito.' },
      { name: 'Stridio', type: PokemonElementType.normal, power: null, description: 'Stridio assordante che riduce di molto la Difesa del bersaglio.' },
      { name: 'Morso', type: PokemonElementType.dark, power: 60, description: 'Il bersaglio viene morso da denti affilatissimi che possono farlo tentennare.' },
    ],
  },
  pupitar: {
    flavorText: 'Il suo corpo è duro come la roccia. Riesce a muoversi come un razzo espellendo gas con tutta la sua forza.',
    stats: { hp: 70, attack: 84, defense: 70, specialAttack: 65, specialDefense: 70, speed: 51 },
    moves: [
      { name: 'Colpo', type: PokemonElementType.normal, power: 120, description: 'Assale e attacca il nemico per due o tre turni, ma confonde chi la usa.' },
      { name: 'Neropulsar', type: PokemonElementType.dark, power: 80, description: 'Chi la usa emana un’aura impregnata di oscuri pensieri. Può anche far tentennare il Pokémon colpito.' },
      { name: 'Stridio', type: PokemonElementType.normal, power: null, description: 'Stridio assordante che riduce di molto la Difesa del bersaglio.' },
      { name: 'Morso', type: PokemonElementType.dark, power: 60, description: 'Il bersaglio viene morso da denti affilatissimi che possono farlo tentennare.' },
    ],
  },
  tyranitar: {
    flavorText: 'Anche una sola delle sue mani può far tremare la terra e sbriciolare le montagne.',
    stats: { hp: 100, attack: 134, defense: 110, specialAttack: 95, specialDefense: 100, speed: 61 },
    moves: [
      { name: 'Fulmindenti', type: PokemonElementType.electric, power: 65, description: 'Chi la usa morde con denti elettrificati che possono anche paralizzare o far tentennare il bersaglio.' },
      { name: 'Gelodenti', type: PokemonElementType.ice, power: 65, description: 'Chi la usa morde con denti ghiacciati. Può anche congelare o far tentennare il bersaglio.' },
      { name: 'Colpo', type: PokemonElementType.normal, power: 120, description: 'Assale e attacca il nemico per due o tre turni, ma confonde chi la usa.' },
      { name: 'Rogodenti', type: PokemonElementType.fire, power: 65, description: 'Chi la usa morde con denti infuocati. Può anche scottare o far tentennare il bersaglio.' },
    ],
  },
  lugia: {
    flavorText: 'Dorme in una fossa negli abissi marini. Con un battito d’ali provoca una tempesta di 40 giorni.',
    stats: { hp: 106, attack: 90, defense: 130, specialAttack: 90, specialDefense: 154, speed: 110 },
    moves: [
      { name: 'Aerocolpo', type: PokemonElementType.flying, power: 100, description: 'Colpisce il bersaglio con un vortice d’aria per danneggiarlo. Probabile brutto colpo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Dragofuria', type: PokemonElementType.dragon, power: 100, description: 'Chi la usa attacca con fare minaccioso e in questo modo può anche far tentennare il bersaglio.' },
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
    ],
  },
  hooh: {
    flavorText: 'Narra la leggenda che il suo corpo brilli di sette colori. Volando lascia un arcobaleno dietro di sé.',
    stats: { hp: 106, attack: 130, defense: 90, specialAttack: 110, specialDefense: 154, speed: 90 },
    moves: [
      { name: 'Magifuoco', type: PokemonElementType.fire, power: 100, description: 'Colpisce il bersaglio con un fuoco mistico di enorme intensità che può anche causargli una scottatura.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
      { name: 'Turbine', type: PokemonElementType.normal, power: null, description: 'Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici.' },
    ],
  },
  celebi: {
    flavorText: 'Questo Pokémon viaggia attraverso il tempo. Le foreste in cui appare prosperano rigogliose.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Chi la usa impedisce ai nemici che ha intorno di utilizzare mosse o abilità recupera-PS per cinque turni.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
      { name: 'Curardore', type: PokemonElementType.psychic, power: null, description: 'Chi la usa va KO, ma il Pokémon che lo sostituisce recupera tutti i PS e guarisce dai problemi di stato.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
    ],
  },
  treecko: {
    flavorText: 'Riesce a scalare rapidamente anche pareti verticali. Rileva l’umidità attraverso la coda per prevedere il tempo dell’indomani.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 65, specialDefense: 55, speed: 70 },
    moves: [
      { name: 'Assorbimento', type: PokemonElementType.grass, power: 20, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Megassorbimento', type: PokemonElementType.grass, power: 40, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
      { name: 'Schianto', type: PokemonElementType.normal, power: 80, description: 'Infligge danni al bersaglio con la coda, con una liana o simili.' },
    ],
  },
  grovyle: {
    flavorText: 'I muscoli delle zampe estremamente sviluppati gli permettono di saltare fino a grandi altezze.',
    stats: { hp: 50, attack: 65, defense: 45, specialAttack: 85, specialDefense: 65, speed: 95 },
    moves: [
      { name: 'Fendifoglia', type: PokemonElementType.grass, power: 90, description: 'Colpisce il bersaglio usando una foglia affilata come una spada. Probabile brutto colpo.' },
      { name: 'Assorbimento', type: PokemonElementType.grass, power: 20, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
      { name: 'Schianto', type: PokemonElementType.normal, power: 80, description: 'Infligge danni al bersaglio con la coda, con una liana o simili.' },
    ],
  },
  sceptile: {
    flavorText: 'Le foglie che crescono sulle sue braccia tagliano anche grandi alberi. Nel suo habitat, è imbattibile.',
    stats: { hp: 70, attack: 85, defense: 65, specialAttack: 105, specialDefense: 85, speed: 120 },
    moves: [
      { name: 'Fendifoglia', type: PokemonElementType.grass, power: 90, description: 'Colpisce il bersaglio usando una foglia affilata come una spada. Probabile brutto colpo.' },
      { name: 'Assorbimento', type: PokemonElementType.grass, power: 20, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
      { name: 'Schianto', type: PokemonElementType.normal, power: 80, description: 'Infligge danni al bersaglio con la coda, con una liana o simili.' },
    ],
  },
  torchic: {
    flavorText: 'Nel ventre ha una sacca di fuoco che brucia in continuazione. Se lo si abbraccia, emana calore.',
    stats: { hp: 45, attack: 60, defense: 40, specialAttack: 70, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'Speculmossa', type: PokemonElementType.flying, power: null, description: 'Chi la usa colpisce il bersaglio copiandone l’ultima mossa usata.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Turbofuoco', type: PokemonElementType.fire, power: 35, description: 'Intrappola il bersaglio in un turbine di fuoco che dura per quattro o cinque turni.' },
    ],
  },
  combusken: {
    flavorText: 'Possiede l’abilità di sferrare anche dieci calci al secondo. Emette urla strazianti per intimorire i nemici.',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 85, specialDefense: 60, speed: 55 },
    moves: [
      { name: 'Stramontante', type: PokemonElementType.fighting, power: 85, description: 'Chi la usa attacca il bersaglio con un montante che può arrivare fino al cielo.' },
      { name: 'Speculmossa', type: PokemonElementType.flying, power: null, description: 'Chi la usa colpisce il bersaglio copiandone l’ultima mossa usata.' },
      { name: 'Doppiocalcio', type: PokemonElementType.fighting, power: 30, description: 'Colpisce il bersaglio due volte con una raffica di calci inferti con entrambi i piedi.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
    ],
  },
  blaziken: {
    flavorText: 'Riesce a superare un edificio di 30 piani con un salto. I suoi pugni di fuoco inceneriscono il nemico.',
    stats: { hp: 80, attack: 120, defense: 70, specialAttack: 110, specialDefense: 70, speed: 80 },
    moves: [
      { name: 'Stramontante', type: PokemonElementType.fighting, power: 85, description: 'Chi la usa attacca il bersaglio con un montante che può arrivare fino al cielo.' },
      { name: 'Calciardente', type: PokemonElementType.fire, power: 85, description: 'Chi la usa tira un calcio. Probabile brutto colpo. Può anche scottare il bersaglio.' },
      { name: 'Speculmossa', type: PokemonElementType.flying, power: null, description: 'Chi la usa colpisce il bersaglio copiandone l’ultima mossa usata.' },
      { name: 'Doppiocalcio', type: PokemonElementType.fighting, power: 30, description: 'Colpisce il bersaglio due volte con una raffica di calci inferti con entrambi i piedi.' },
    ],
  },
  marshtomp: {
    flavorText: 'Grazie alle zampe vigorose, si muove con disinvoltura anche nel fango. Dorme immerso nella melma.',
    stats: { hp: 70, attack: 85, defense: 70, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Fanghiglia', type: PokemonElementType.water, power: 90, description: 'Chi la usa attacca i nemici che ha intorno con un getto di fango che può anche ridurne la precisione.' },
      { name: 'Pistolacqua', type: PokemonElementType.water, power: 40, description: 'Il bersaglio è colpito da un potente getto d’acqua.' },
    ],
  },
  mudkip: {
    flavorText: 'La grande pinna sulla coda gli conferisce una straordinaria accelerazione in acqua. È minuto, ma forte.',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Pistolacqua', type: PokemonElementType.water, power: 40, description: 'Il bersaglio è colpito da un potente getto d’acqua.' },
      { name: 'Mulinello', type: PokemonElementType.water, power: 35, description: 'Intrappola il bersaglio in un turbine d’acqua per quattro o cinque turni infliggendo danni a ogni turno.' },
    ],
  },
  swampert: {
    flavorText: 'Ha braccia dure come roccia, capaci di frantumare in mille pezzi un masso con un colpo solo.',
    stats: { hp: 100, attack: 110, defense: 90, specialAttack: 85, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Fanghiglia', type: PokemonElementType.water, power: 90, description: 'Chi la usa attacca i nemici che ha intorno con un getto di fango che può anche ridurne la precisione.' },
      { name: 'Pistolacqua', type: PokemonElementType.water, power: 40, description: 'Il bersaglio è colpito da un potente getto d’acqua.' },
    ],
  },
  poochyena: {
    flavorText: 'Pokémon di natura ostinata. Insegue la preda prescelta finché questa non è esausta.',
    stats: { hp: 35, attack: 55, defense: 35, specialAttack: 30, specialDefense: 30, speed: 35 },
    moves: [
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Gridodilotta', type: PokemonElementType.normal, power: null, description: 'Chi la usa emette un forte verso per darsi coraggio e aumentare l’Attacco.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
      { name: 'Morso', type: PokemonElementType.dark, power: 60, description: 'Il bersaglio viene morso da denti affilatissimi che possono farlo tentennare.' },
    ],
  },
  mightyena: {
    flavorText: 'La sua eccezionale obbedienza verso gli Allenatori esperti deriva dall’antica abitudine di vivere in branchi.',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Gridodilotta', type: PokemonElementType.normal, power: null, description: 'Chi la usa emette un forte verso per darsi coraggio e aumentare l’Attacco.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
      { name: 'Morso', type: PokemonElementType.dark, power: 60, description: 'Il bersaglio viene morso da denti affilatissimi che possono farlo tentennare.' },
    ],
  },
  zigzagoon: {
    flavorText: 'Avanza a zigzag. È bravo a trovare strumenti nell’erba e sul terreno.',
    stats: { hp: 38, attack: 30, defense: 41, specialAttack: 30, specialDefense: 41, speed: 60 },
    moves: [
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Panciamburo', type: PokemonElementType.normal, power: null, description: 'Chi la usa massimizza l’Attacco in cambio di metà dei PS massimi.' },
      { name: 'Missilspillo', type: PokemonElementType.bug, power: 25, description: 'Il bersaglio viene colpito da due a cinque volte con spilli appuntiti in rapida successione.' },
    ],
  },
  linoone: {
    flavorText: 'Quando corre in rettilineo può raggiungere i 100 km/h, ma le curve non sono il suo forte.',
    stats: { hp: 78, attack: 70, defense: 61, specialAttack: 50, specialDefense: 61, speed: 100 },
    moves: [
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Panciamburo', type: PokemonElementType.normal, power: null, description: 'Chi la usa massimizza l’Attacco in cambio di metà dei PS massimi.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
    ],
  },
  wurmple: {
    flavorText: 'Ama mangiare le foglie. Se Starly lo attacca, si difende con gli aculei che ha sulla parte posteriore.',
    stats: { hp: 45, attack: 45, defense: 35, specialAttack: 20, specialDefense: 30, speed: 20 },
    moves: [
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Millebave', type: PokemonElementType.bug, power: null, description: 'Chi la usa produce della seta che avvolge i nemici intorno e ne riduce di molto la Velocità.' },
      { name: 'Azione', type: PokemonElementType.normal, power: 40, description: 'Attacco fisico che colpisce il bersaglio investendolo con tutto il corpo.' },
    ],
  },
  silcoon: {
    flavorText: 'Si appende ai rami con fili di seta. Aspetta l’evoluzione bevendo l’acqua piovana che si posa sulla seta.',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  beautifly: {
    flavorText: 'Sulle ali ha splendidi, vividi colori. Succhia il dolce polline dai fiori allungando la bocca sottile.',
    stats: { hp: 60, attack: 70, defense: 50, specialAttack: 100, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Mattindoro', type: PokemonElementType.normal, power: null, description: 'Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.' },
      { name: 'Ventargenteo', type: PokemonElementType.bug, power: 60, description: 'Attacca con un forte vento di polvere di squame. Tutte le statistiche di chi la usa possono salire.' },
      { name: 'Paralizzante', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una nuvola di polvere che paralizza.' },
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
    ],
  },
  cascoon: {
    flavorText: 'Il corpo di soffice seta si indurisce nel corso del tempo. Quando appaiono crepe, l’evoluzione è vicina.',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  dustox: {
    flavorText: 'Pokémon notturno. Attirato dalla luce dei lampioni, divora le foglie degli alberi lungo i viali.',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 50, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'Lucelunare', type: PokemonElementType.normal, power: null, description: 'Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.' },
      { name: 'Ventargenteo', type: PokemonElementType.bug, power: 60, description: 'Attacca con un forte vento di polvere di squame. Tutte le statistiche di chi la usa possono salire.' },
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
      { name: 'Turbine', type: PokemonElementType.normal, power: null, description: 'Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici.' },
    ],
  },
  lotad: {
    flavorText: 'Sembra una pianta acquatica e viene usato come traghetto dai Pokémon che non sanno nuotare.',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 40, specialDefense: 50, speed: 30 },
    moves: [
      { name: 'Nebbia', type: PokemonElementType.ice, power: null, description: 'Chi la usa attira una nebbia che blocca la riduzione delle statistiche per sé e gli alleati per cinque turni.' },
      { name: 'Assorbimento', type: PokemonElementType.grass, power: 20, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Megassorbimento', type: PokemonElementType.grass, power: 40, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Naturforza', type: PokemonElementType.normal, power: null, description: 'Mossa che fa uso della forza della natura. Il suo effetto varia in base all’ambiente.' },
    ],
  },
  lombre: {
    flavorText: 'Vive in riva a specchi d’acqua, in aree soleggiate. Di giorno dorme su di un letto di alghe, mentre la notte è attivo.',
    stats: { hp: 60, attack: 50, defense: 50, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Assorbimento', type: PokemonElementType.grass, power: 20, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Bruciapelo', type: PokemonElementType.normal, power: 40, description: 'Mossa che fa agire per primi e fa tentennare il bersaglio. Funziona solo appena scesi in campo.' },
    ],
  },
  ludicolo: {
    flavorText: 'Se ascolta musica allegra, tutto il suo corpo si rivitalizza e non riesce a evitare di ballare.',
    stats: { hp: 80, attack: 70, defense: 70, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'Assorbimento', type: PokemonElementType.grass, power: 20, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Naturforza', type: PokemonElementType.normal, power: null, description: 'Mossa che fa uso della forza della natura. Il suo effetto varia in base all’ambiente.' },
      { name: 'Sgomento', type: PokemonElementType.ghost, power: 30, description: 'Chi la usa attacca il bersaglio emettendo un verso terrificante. Può anche farlo tentennare.' },
      { name: 'Ruggito', type: PokemonElementType.normal, power: null, description: 'Distrae i nemici intorno con un ruggito potente e ne riduce l’Attacco.' },
    ],
  },
  seedot: {
    flavorText: 'Si attacca ai rami degli alberi usando il picciolo che ha sul capo. Talvolta il vento lo fa cadere.',
    stats: { hp: 40, attack: 40, defense: 50, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: 'Crescita', type: PokemonElementType.normal, power: null, description: 'Provoca la crescita immediata del corpo e l’aumento dell’Attacco e dell’Attacco Speciale di chi la usa.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
      { name: 'Sintesi', type: PokemonElementType.grass, power: null, description: 'Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.' },
      { name: 'Esplosione', type: PokemonElementType.normal, power: 250, description: 'Chi la usa esplode per infliggere danni agli altri Pokémon attorno, ma va KO.' },
    ],
  },
  nuzleaf: {
    flavorText: 'Il fischio del suo flauto di foglia mette a disagio chi lo sente. Vive nelle foreste più fitte.',
    stats: { hp: 70, attack: 70, defense: 40, specialAttack: 60, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'Ventagliente', type: PokemonElementType.normal, power: 80, description: 'Chi la usa genera un turbine al primo turno e attacca al secondo. Probabile brutto colpo.' },
      { name: 'Extrasenso', type: PokemonElementType.psychic, power: 80, description: 'Chi la usa attacca con una misteriosa forza invisibile. Può far tentennare il bersaglio.' },
      { name: 'Crescita', type: PokemonElementType.normal, power: null, description: 'Provoca la crescita immediata del corpo e l’aumento dell’Attacco e dell’Attacco Speciale di chi la usa.' },
      { name: 'Bruciapelo', type: PokemonElementType.normal, power: 40, description: 'Mossa che fa agire per primi e fa tentennare il bersaglio. Funziona solo appena scesi in campo.' },
    ],
  },
  shiftry: {
    flavorText: 'Un tempo era un temuto guardiano della foresta. Sa leggere nella mente del nemico, anticipandolo.',
    stats: { hp: 90, attack: 100, defense: 60, specialAttack: 90, specialDefense: 60, speed: 80 },
    moves: [
      { name: 'Crescita', type: PokemonElementType.normal, power: null, description: 'Provoca la crescita immediata del corpo e l’aumento dell’Attacco e dell’Attacco Speciale di chi la usa.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
      { name: 'Naturforza', type: PokemonElementType.normal, power: null, description: 'Mossa che fa uso della forza della natura. Il suo effetto varia in base all’ambiente.' },
    ],
  },
  taillow: {
    flavorText: 'È molto coraggioso e affronta spavaldo i nemici più forti. Migra verso i paesi caldi.',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
      { name: 'Focalenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un profondo respiro e si concentra per rendere più probabili i brutti colpi.' },
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
    ],
  },
  swellow: {
    flavorText: 'Se le due penne sulla coda sono ritte, significa che è in buona salute. Si libra elegantemente nel cielo.',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 75, specialDefense: 50, speed: 125 },
    moves: [
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Beccata', type: PokemonElementType.flying, power: 35, description: 'Colpisce il bersaglio con il becco appuntito o con un corno.' },
      { name: 'Focalenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un profondo respiro e si concentra per rendere più probabili i brutti colpi.' },
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
    ],
  },
  wingull: {
    flavorText: 'Segue i venti marini con le sue lunghe ali e si libra in volo come un aliante. Si riposa piegando le ali.',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 55, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Nebbia', type: PokemonElementType.ice, power: null, description: 'Chi la usa attira una nebbia che blocca la riduzione delle statistiche per sé e gli alleati per cinque turni.' },
      { name: 'Supersuono', type: PokemonElementType.normal, power: null, description: 'Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
    ],
  },
  pelipper: {
    flavorText: 'Immerge il suo enorme becco nel mare, raccogliendo acqua e numerose prede.',
    stats: { hp: 60, attack: 50, defense: 100, specialAttack: 95, specialDefense: 70, speed: 65 },
    moves: [
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Sfoghenergia', type: PokemonElementType.normal, power: null, description: 'Tutta l’energia accumulata in precedenza con Accumulo è rilasciata nell’attacco. Maggiore è l’energia, più danni si arrecano.' },
      { name: 'Introenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa assorbe l’energia raccolta con la mossa Accumulo e recupera PS. Maggiore è l’energia, più PS si recuperano.' },
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
    ],
  },
  ralts: {
    flavorText: 'Se con le corna avverte emozioni positive di persone o Pokémon, il suo corpo si scalda leggermente.',
    stats: { hp: 28, attack: 25, defense: 25, specialAttack: 45, specialDefense: 35, speed: 40 },
    moves: [
      { name: 'Teletrasporto', type: PokemonElementType.psychic, power: null, description: 'Fa fuggire dai Pokémon selvatici. Fuori dalla lotta porta all’ultimo Centro Pokémon visitato.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
      { name: 'Divinazione', type: PokemonElementType.psychic, power: 120, description: 'Due turni dopo l’utilizzo di questa mossa, il bersaglio viene attaccato con energia psichica.' },
    ],
  },
  kirlia: {
    flavorText: 'Lo spirito gioioso è alla base dei suoi poteri psicocinetici. Quando è felice si lancia in danze e piroette.',
    stats: { hp: 38, attack: 35, defense: 35, specialAttack: 65, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'Teletrasporto', type: PokemonElementType.psychic, power: null, description: 'Fa fuggire dai Pokémon selvatici. Fuori dalla lotta porta all’ultimo Centro Pokémon visitato.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
      { name: 'Divinazione', type: PokemonElementType.psychic, power: 120, description: 'Due turni dopo l’utilizzo di questa mossa, il bersaglio viene attaccato con energia psichica.' },
    ],
  },
  gardevoir: {
    flavorText: 'Quando il suo Allenatore è in pericolo usa tutto il suo potere psichico per creare un piccolo buco nero.',
    stats: { hp: 68, attack: 65, defense: 65, specialAttack: 125, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'Teletrasporto', type: PokemonElementType.psychic, power: null, description: 'Fa fuggire dai Pokémon selvatici. Fuori dalla lotta porta all’ultimo Centro Pokémon visitato.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
      { name: 'Divinazione', type: PokemonElementType.psychic, power: 120, description: 'Due turni dopo l’utilizzo di questa mossa, il bersaglio viene attaccato con energia psichica.' },
    ],
  },
  surskit: {
    flavorText: 'Normalmente vivono negli stagni, ma dopo un acquazzone è possibile trovarli anche in città, nelle pozzanghere.',
    stats: { hp: 40, attack: 30, defense: 32, specialAttack: 50, specialDefense: 52, speed: 65 },
    moves: [
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Nebbia', type: PokemonElementType.ice, power: null, description: 'Chi la usa attira una nebbia che blocca la riduzione delle statistiche per sé e gli alleati per cinque turni.' },
      { name: 'Profumino', type: PokemonElementType.normal, power: null, description: 'Un dolce profumo che riduce di molto l’elusione dei nemici intorno a chi la usa. Fuori dalla lotta attira i Pokémon selvatici.' },
    ],
  },
  masquerain: {
    flavorText: 'Le sue antenne presentano un motivo a occhi. Con le quattro ali riesce a volare in ogni direzione.',
    stats: { hp: 70, attack: 60, defense: 62, specialAttack: 100, specialDefense: 82, speed: 80 },
    moves: [
      { name: 'Ventargenteo', type: PokemonElementType.bug, power: 60, description: 'Attacca con un forte vento di polvere di squame. Tutte le statistiche di chi la usa possono salire.' },
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Paralizzante', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una nuvola di polvere che paralizza.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
    ],
  },
  shroomish: {
    flavorText: 'Predilige le aree umide. Di giorno resta immobile nell’ombra della foresta. Dal capo rilascia polvere tossica.',
    stats: { hp: 60, attack: 40, defense: 60, specialAttack: 40, specialDefense: 60, speed: 35 },
    moves: [
      { name: 'Spora', type: PokemonElementType.grass, power: null, description: 'Nube di spore che fa sempre addormentare il bersaglio.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Paralizzante', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una nuvola di polvere che paralizza.' },
      { name: 'Crescita', type: PokemonElementType.normal, power: null, description: 'Provoca la crescita immediata del corpo e l’aumento dell’Attacco e dell’Attacco Speciale di chi la usa.' },
    ],
  },
  breloom: {
    flavorText: 'Tirando pugni, i suoi cortissimi arti si allungano. Usa una tecnica simile a quella dei pugili professionisti.',
    stats: { hp: 60, attack: 130, defense: 80, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: 'Stramontante', type: PokemonElementType.fighting, power: 85, description: 'Chi la usa attacca il bersaglio con un montante che può arrivare fino al cielo.' },
      { name: 'Pugnorapido', type: PokemonElementType.fighting, power: 40, description: 'Chi la usa tira un pugno a una velocità impressionante e colpisce sempre per primo.' },
      { name: 'Leggimente', type: PokemonElementType.normal, power: null, description: 'Chi la usa prevede i movimenti del bersaglio per mandare a segno l’attacco successivo.' },
      { name: 'Paralizzante', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una nuvola di polvere che paralizza.' },
    ],
  },
  nincada: {
    flavorText: 'Poiché passa quasi tutta l’esistenza sottoterra, è quasi cieco. Usa le antenne per orientarsi.',
    stats: { hp: 31, attack: 45, defense: 90, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Leggimente', type: PokemonElementType.normal, power: null, description: 'Chi la usa prevede i movimenti del bersaglio per mandare a segno l’attacco successivo.' },
      { name: 'Sanguisuga', type: PokemonElementType.bug, power: 80, description: 'Mossa succhiasangue. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  slakoth: {
    flavorText: 'Coloro che osservano Slakoth, perdono la voglia di muoversi e vengono colti da sonnolenza.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 35, specialDefense: 35, speed: 30 },
    moves: [
      { name: 'Pigro', type: PokemonElementType.normal, power: null, description: 'Chi la usa si rilassa recuperando metà dei propri PS massimi.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
    ],
  },
  vigoroth: {
    flavorText: 'I battiti del suo cuore sono rapidissimi e il suo sangue scorre con tale impeto che non riesce a stare fermo un istante.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
      { name: 'Lacerazione', type: PokemonElementType.normal, power: 70, description: 'Attacca il bersaglio con artigli, falci o altro. Probabile brutto colpo.' },
      { name: 'Focalenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un profondo respiro e si concentra per rendere più probabili i brutti colpi.' },
    ],
  },
  slaking: {
    flavorText: 'Il più pigro Pokémon del mondo. Si sposta solo quando non ha più cibo a portata di mano.',
    stats: { hp: 150, attack: 160, defense: 100, specialAttack: 95, specialDefense: 65, speed: 100 },
    moves: [
      { name: 'Pigro', type: PokemonElementType.normal, power: null, description: 'Chi la usa si rilassa recuperando metà dei propri PS massimi.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
    ],
  },
  ninjask: {
    flavorText: 'I suoi continui lamenti provocano atroci emicranie. Si sposta così velocemente che... non si vede!',
    stats: { hp: 61, attack: 90, defense: 45, specialAttack: 50, specialDefense: 50, speed: 160 },
    moves: [
      { name: 'Leggimente', type: PokemonElementType.normal, power: null, description: 'Chi la usa prevede i movimenti del bersaglio per mandare a segno l’attacco successivo.' },
      { name: 'Sanguisuga', type: PokemonElementType.bug, power: 80, description: 'Mossa succhiasangue. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  shedinja: {
    flavorText: 'È nato dal guscio vuoto di un insetto. Pare che chi spia nella fessura sul suo dorso perda l’anima.',
    stats: { hp: 1, attack: 90, defense: 45, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Rancore', type: PokemonElementType.ghost, power: null, description: 'Se chi la usa va KO, i PP della mossa nemica che lo ha messo fuori gioco si azzerano.' },
      { name: 'Leggimente', type: PokemonElementType.normal, power: null, description: 'Chi la usa prevede i movimenti del bersaglio per mandare a segno l’attacco successivo.' },
      { name: 'Sanguisuga', type: PokemonElementType.bug, power: 80, description: 'Mossa succhiasangue. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
    ],
  },
  whismur: {
    flavorText: 'Di solito sussurra, ma se avverte un pericolo lancia grida acute, che interrompe quando ha le orecchie chiuse.',
    stats: { hp: 64, attack: 51, defense: 23, specialAttack: 51, specialDefense: 23, speed: 28 },
    moves: [
      { name: 'Gridodilotta', type: PokemonElementType.normal, power: null, description: 'Chi la usa emette un forte verso per darsi coraggio e aumentare l’Attacco.' },
      { name: 'Pestone', type: PokemonElementType.normal, power: 65, description: 'Colpisce il bersaglio con un grosso piede e può anche farlo tentennare.' },
      { name: 'Supersuono', type: PokemonElementType.normal, power: null, description: 'Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
    ],
  },
  loudred: {
    flavorText: 'Leva potenti grida inspirando tanta aria e poi sparandola fuori con tutta la forza degli addominali.',
    stats: { hp: 84, attack: 71, defense: 43, specialAttack: 71, specialDefense: 43, speed: 48 },
    moves: [
      { name: 'Gridodilotta', type: PokemonElementType.normal, power: null, description: 'Chi la usa emette un forte verso per darsi coraggio e aumentare l’Attacco.' },
      { name: 'Pestone', type: PokemonElementType.normal, power: 65, description: 'Colpisce il bersaglio con un grosso piede e può anche farlo tentennare.' },
      { name: 'Supersuono', type: PokemonElementType.normal, power: null, description: 'Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
    ],
  },
  exploud: {
    flavorText: 'Le sue urla si sentono a 10 km di distanza. Emette diversi suoni dalle numerose aperture del suo corpo.',
    stats: { hp: 104, attack: 91, defense: 63, specialAttack: 91, specialDefense: 73, speed: 68 },
    moves: [
      { name: 'Gridodilotta', type: PokemonElementType.normal, power: null, description: 'Chi la usa emette un forte verso per darsi coraggio e aumentare l’Attacco.' },
      { name: 'Pestone', type: PokemonElementType.normal, power: 65, description: 'Colpisce il bersaglio con un grosso piede e può anche farlo tentennare.' },
      { name: 'Supersuono', type: PokemonElementType.normal, power: null, description: 'Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
    ],
  },
  makuhita: {
    flavorText: 'Sbattendo a ripetizione contro enormi alberi, si costruisce un corpo e uno spirito indistruttibili.',
    stats: { hp: 72, attack: 60, defense: 30, specialAttack: 20, specialDefense: 30, speed: 25 },
    moves: [
      { name: 'Sberletese', type: PokemonElementType.fighting, power: 15, description: 'Raffica di ceffoni che colpisce da due a cinque volte di fila.' },
      { name: 'Vitaltiro', type: PokemonElementType.fighting, power: 70, description: 'Chi la usa attacca per ultimo, ma il colpo è sempre infallibile.' },
      { name: 'Maniereforti', type: PokemonElementType.normal, power: 70, description: 'Infligge un danno doppio a un bersaglio paralizzato, ma ne cura anche la paralisi.' },
      { name: 'Panciamburo', type: PokemonElementType.normal, power: null, description: 'Chi la usa massimizza l’Attacco in cambio di metà dei PS massimi.' },
    ],
  },
  hariyama: {
    flavorText: 'Pesta i piedi sul terreno per accumulare energia. Con uno dei suoi schiaffi può far prendere il volo a un camion di 10 t.',
    stats: { hp: 144, attack: 120, defense: 60, specialAttack: 40, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Sberletese', type: PokemonElementType.fighting, power: 15, description: 'Raffica di ceffoni che colpisce da due a cinque volte di fila.' },
      { name: 'Vitaltiro', type: PokemonElementType.fighting, power: 70, description: 'Chi la usa attacca per ultimo, ma il colpo è sempre infallibile.' },
      { name: 'Maniereforti', type: PokemonElementType.normal, power: 70, description: 'Infligge un danno doppio a un bersaglio paralizzato, ma ne cura anche la paralisi.' },
      { name: 'Panciamburo', type: PokemonElementType.normal, power: null, description: 'Chi la usa massimizza l’Attacco in cambio di metà dei PS massimi.' },
    ],
  },
  azurill: {
    flavorText: 'Pokémon che vive nell’acqua. Si muove rapidamente sulla terraferma saltellando sulla grossa coda.',
    stats: { hp: 50, attack: 20, defense: 40, specialAttack: 20, specialDefense: 40, speed: 20 },
    moves: [
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'Chi la usa sguazza nell’acqua, senza ottenere alcun effetto.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Schianto', type: PokemonElementType.normal, power: 80, description: 'Infligge danni al bersaglio con la coda, con una liana o simili.' },
      { name: 'Colpocoda', type: PokemonElementType.normal, power: null, description: 'Chi la usa agita la coda per distrarre i nemici che ha intorno, riducendone la Difesa.' },
    ],
  },
  nosepass: {
    flavorText: 'Rafforza le sue difese attirando su di sé gli oggetti di ferro circostanti con il suo naso magnetico che indica sempre il nord.',
    stats: { hp: 30, attack: 45, defense: 135, specialAttack: 45, specialDefense: 90, speed: 30 },
    moves: [
      { name: 'Localizza', type: PokemonElementType.normal, power: null, description: 'Chi la usa punta il bersaglio con precisione. La mossa successiva andrà a segno.' },
      { name: 'Sassata', type: PokemonElementType.rock, power: 50, description: 'Chi la usa solleva una roccia e la lancia contro il bersaglio.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
      { name: 'Falcecannone', type: PokemonElementType.electric, power: 120, description: 'Chi la usa provoca un’esplosione elettrica che infligge danni e paralizza il bersaglio.' },
    ],
  },
  delcatty: {
    flavorText: 'Detesta gli ambienti sporchi. Se ne sta sempre ad allisciarsi la pelliccia in luoghi accoglienti.',
    stats: { hp: 70, attack: 65, defense: 65, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Doppiasberla', type: PokemonElementType.normal, power: 15, description: 'Schiaffeggia il bersaglio da due a cinque volte di fila.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
      { name: 'Ruggito', type: PokemonElementType.normal, power: null, description: 'Distrae i nemici intorno con un ruggito potente e ne riduce l’Attacco.' },
      { name: 'Attrazione', type: PokemonElementType.normal, power: null, description: 'Se il bersaglio è del sesso opposto, s’infatua e diventa riluttante ad attaccare.' },
    ],
  },
  skitty: {
    flavorText: 'Non riesce a evitare di inseguire tutto ciò che si muove e corre in tondo a caccia della propria coda.',
    stats: { hp: 50, attack: 45, defense: 45, specialAttack: 35, specialDefense: 35, speed: 50 },
    moves: [
      { name: 'Assistente', type: PokemonElementType.normal, power: null, description: 'Chi la usa utilizza in fretta e a caso una delle mosse degli altri Pokémon della squadra.' },
      { name: 'Doppiasberla', type: PokemonElementType.normal, power: 15, description: 'Schiaffeggia il bersaglio da due a cinque volte di fila.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
      { name: 'Rintoccasana', type: PokemonElementType.normal, power: null, description: 'Chi la usa produce uno scampanellio che cura i problemi di stato suoi e dei Pokémon alleati.' },
    ],
  },
  sableye: {
    flavorText: 'Si cela nell’oscurità delle caverne. Si nutre di gemme e per questo i suoi occhi sono pietre preziose.',
    stats: { hp: 50, attack: 75, defense: 75, specialAttack: 65, specialDefense: 65, speed: 50 },
    moves: [
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Malosguardo', type: PokemonElementType.normal, power: null, description: 'Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Bruciapelo', type: PokemonElementType.normal, power: 40, description: 'Mossa che fa agire per primi e fa tentennare il bersaglio. Funziona solo appena scesi in campo.' },
    ],
  },
  mawile: {
    flavorText: 'Intenerisce i nemici con la sua faccia innocente, per poi morderli con le forti e instancabili mascelle.',
    stats: { hp: 50, attack: 85, defense: 85, specialAttack: 55, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'Presa', type: PokemonElementType.normal, power: 55, description: 'Stringe il bersaglio in una morsa.' },
      { name: 'Sfoghenergia', type: PokemonElementType.normal, power: null, description: 'Tutta l’energia accumulata in precedenza con Accumulo è rilasciata nell’attacco. Maggiore è l’energia, più danni si arrecano.' },
      { name: 'Introenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa assorbe l’energia raccolta con la mossa Accumulo e recupera PS. Maggiore è l’energia, più PS si recuperano.' },
      { name: 'Accumulo', type: PokemonElementType.normal, power: null, description: 'Chi la usa accumula energia aumentando la Difesa e la Difesa Speciale. Si può utilizzare tre volte.' },
    ],
  },
  aron: {
    flavorText: 'Vive generalmente sui monti ma, spinto dalla fame, scende per cibarsi di binari ferroviari e automobili.',
    stats: { hp: 50, attack: 70, defense: 100, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'Ferrostrido', type: PokemonElementType.steel, power: null, description: 'Orribile stridio, simile a quello prodotto dal metallo, che riduce di molto la Difesa Speciale del bersaglio.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
      { name: 'Ferrartigli', type: PokemonElementType.steel, power: 50, description: 'Colpisce il bersaglio con artigli d’acciaio. Può anche aumentare l’Attacco di chi la usa.' },
      { name: 'Boato', type: PokemonElementType.normal, power: null, description: 'Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici.' },
    ],
  },
  lairon: {
    flavorText: 'Adora i minerali di ferro. Scaglia il suo corpo d’acciaio contro gli altri nella lotta per il territorio.',
    stats: { hp: 60, attack: 90, defense: 140, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Ferrostrido', type: PokemonElementType.steel, power: null, description: 'Orribile stridio, simile a quello prodotto dal metallo, che riduce di molto la Difesa Speciale del bersaglio.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
      { name: 'Ferrartigli', type: PokemonElementType.steel, power: 50, description: 'Colpisce il bersaglio con artigli d’acciaio. Può anche aumentare l’Attacco di chi la usa.' },
      { name: 'Boato', type: PokemonElementType.normal, power: null, description: 'Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici.' },
    ],
  },
  aggron: {
    flavorText: 'Sceglie come territorio intere montagne. Se ha tante cicatrici sul suo corpo, è meglio non scherzare con lui.',
    stats: { hp: 70, attack: 110, defense: 180, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Ferrostrido', type: PokemonElementType.steel, power: null, description: 'Orribile stridio, simile a quello prodotto dal metallo, che riduce di molto la Difesa Speciale del bersaglio.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
      { name: 'Ferrartigli', type: PokemonElementType.steel, power: 50, description: 'Colpisce il bersaglio con artigli d’acciaio. Può anche aumentare l’Attacco di chi la usa.' },
      { name: 'Boato', type: PokemonElementType.normal, power: null, description: 'Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici.' },
    ],
  },
  meditite: {
    flavorText: 'Si allena in montagna per elevare il suo potere spirituale. Con la meditazione riesce a levitare.',
    stats: { hp: 30, attack: 40, defense: 55, specialAttack: 40, specialDefense: 55, speed: 60 },
    moves: [
      { name: 'Meditazione', type: PokemonElementType.psychic, power: null, description: 'Chi la usa medita per risvegliare la propria forza interiore e migliorare l’Attacco.' },
      { name: 'Leggimente', type: PokemonElementType.normal, power: null, description: 'Chi la usa prevede i movimenti del bersaglio per mandare a segno l’attacco successivo.' },
      { name: 'Calcinvolo', type: PokemonElementType.fighting, power: 130, description: 'Chi la usa colpisce il bersaglio con una ginocchiata in volo. Se fallisce, subisce danni.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
    ],
  },
  medicham: {
    flavorText: 'Evita elegantemente gli attacchi a passo di danza, per poi lanciare devastanti attacchi con la stessa grazia.',
    stats: { hp: 60, attack: 60, defense: 75, specialAttack: 60, specialDefense: 75, speed: 80 },
    moves: [
      { name: 'Meditazione', type: PokemonElementType.psychic, power: null, description: 'Chi la usa medita per risvegliare la propria forza interiore e migliorare l’Attacco.' },
      { name: 'Leggimente', type: PokemonElementType.normal, power: null, description: 'Chi la usa prevede i movimenti del bersaglio per mandare a segno l’attacco successivo.' },
      { name: 'Calcinvolo', type: PokemonElementType.fighting, power: 130, description: 'Chi la usa colpisce il bersaglio con una ginocchiata in volo. Se fallisce, subisce danni.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
    ],
  },
  electrike: {
    flavorText: 'L’elettricità immagazzinata nella pelliccia gli stimola i muscoli e aumenta la sua velocità di reazione.',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 65, specialDefense: 40, speed: 65 },
    moves: [
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Gridodilotta', type: PokemonElementType.normal, power: null, description: 'Chi la usa emette un forte verso per darsi coraggio e aumentare l’Attacco.' },
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
    ],
  },
  manectric: {
    flavorText: 'Raramente si mostra agli umani. Si dice che nidifichi nelle zone dove è caduto un fulmine.',
    stats: { hp: 70, attack: 75, defense: 60, specialAttack: 105, specialDefense: 60, speed: 105 },
    moves: [
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Gridodilotta', type: PokemonElementType.normal, power: null, description: 'Chi la usa emette un forte verso per darsi coraggio e aumentare l’Attacco.' },
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
    ],
  },
  plusle: {
    flavorText: 'Incoraggia gli amici con un vivace scoppiettio di scintille. Assorbe elettricità dai pali telefonici.',
    stats: { hp: 60, attack: 50, defense: 40, specialAttack: 85, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Falselacrime', type: PokemonElementType.dark, power: null, description: 'Chi la usa inscena un pianto teatrale per commuovere il bersaglio. Ne riduce di molto la Difesa Speciale.' },
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
    ],
  },
  minun: {
    flavorText: 'L’elettricità tra un Plusle e un Minun favorisce la circolazione sanguigna e scioglie le tensioni.',
    stats: { hp: 60, attack: 40, defense: 50, specialAttack: 75, specialDefense: 85, speed: 95 },
    moves: [
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
      { name: 'Staffetta', type: PokemonElementType.normal, power: null, description: 'Chi la usa è sostituito da un Pokémon della squadra, che eredita anche ogni modifica alle statistiche.' },
    ],
  },
  illumise: {
    flavorText: 'Con un dolce aroma dirige il volo dei Volbeat, che disegnano più di 200 figure luminose nel cielo stellato.',
    stats: { hp: 65, attack: 47, defense: 75, specialAttack: 73, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'Lucelunare', type: PokemonElementType.normal, power: null, description: 'Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.' },
      { name: 'Adulazione', type: PokemonElementType.dark, power: null, description: 'Adula il bersaglio e lo confonde, ma ne aumenta l’Attacco Speciale.' },
      { name: 'Desiderio', type: PokemonElementType.normal, power: null, description: 'Permette di recuperare metà dei PS massimi al turno successivo.' },
      { name: 'Profumino', type: PokemonElementType.normal, power: null, description: 'Un dolce profumo che riduce di molto l’elusione dei nemici intorno a chi la usa. Fuori dalla lotta attira i Pokémon selvatici.' },
    ],
  },
  volbeat: {
    flavorText: 'Di notte comunica con gli altri illuminando la sua coda. Ama il dolce aroma di Illumise.',
    stats: { hp: 65, attack: 73, defense: 75, specialAttack: 47, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'Codadiluce', type: PokemonElementType.bug, power: null, description: 'Chi la usa fissa una luce forte per concentrarsi e aumentare moltissimo l’Attacco Speciale.' },
      { name: 'Lucelunare', type: PokemonElementType.normal, power: null, description: 'Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.' },
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
      { name: 'Stordiraggio', type: PokemonElementType.ghost, power: null, description: 'Colpisce il bersaglio con un raggio funesto che lo confonde.' },
    ],
  },
  roselia: {
    flavorText: 'Attacca usando abilmente i due tipi di veleno delle estremità dei suoi arti. Più è forte la sua fragranza, più è in salute.',
    stats: { hp: 50, attack: 60, defense: 45, specialAttack: 100, specialDefense: 80, speed: 65 },
    moves: [
      { name: 'Meloderba', type: PokemonElementType.grass, power: null, description: 'Una dolce melodia culla il bersaglio e lo costringe ad addormentarsi.' },
      { name: 'Petalodanza', type: PokemonElementType.grass, power: 120, description: 'Attacca il nemico cospargendolo di petali per due o tre turni, ma chi la usa rimane confuso.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Radicamento', type: PokemonElementType.grass, power: null, description: 'Chi la usa mette delle radici che gli fanno recuperare PS a ogni turno. Non può essere sostituito.' },
    ],
  },
  gulpin: {
    flavorText: 'Ha cuore e cervello mini: lo stomaco prende troppo spazio! Con i succhi gastrici scioglie qualunque cosa.',
    stats: { hp: 70, attack: 43, defense: 53, specialAttack: 43, specialDefense: 53, speed: 40 },
    moves: [
      { name: 'Fango', type: PokemonElementType.poison, power: 65, description: 'Lancio di fango malsano che arreca danno al bersaglio. Può anche avvelenarlo.' },
      { name: 'Velenogas', type: PokemonElementType.poison, power: null, description: 'Spruzza in faccia ai nemici che ha intorno una nuvola di gas tossico che avvelena.' },
      { name: 'Sfoghenergia', type: PokemonElementType.normal, power: null, description: 'Tutta l’energia accumulata in precedenza con Accumulo è rilasciata nell’attacco. Maggiore è l’energia, più danni si arrecano.' },
      { name: 'Introenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa assorbe l’energia raccolta con la mossa Accumulo e recupera PS. Maggiore è l’energia, più PS si recuperano.' },
    ],
  },
  swalot: {
    flavorText: 'Inghiotte intera qualsiasi cosa. Dai pori traspira un liquido tossico con cui bagna i nemici.',
    stats: { hp: 100, attack: 73, defense: 83, specialAttack: 73, specialDefense: 83, speed: 55 },
    moves: [
      { name: 'Fango', type: PokemonElementType.poison, power: 65, description: 'Lancio di fango malsano che arreca danno al bersaglio. Può anche avvelenarlo.' },
      { name: 'Velenogas', type: PokemonElementType.poison, power: null, description: 'Spruzza in faccia ai nemici che ha intorno una nuvola di gas tossico che avvelena.' },
      { name: 'Sfoghenergia', type: PokemonElementType.normal, power: null, description: 'Tutta l’energia accumulata in precedenza con Accumulo è rilasciata nell’attacco. Maggiore è l’energia, più danni si arrecano.' },
      { name: 'Introenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa assorbe l’energia raccolta con la mossa Accumulo e recupera PS. Maggiore è l’energia, più PS si recuperano.' },
    ],
  },
  carvanha: {
    flavorText: 'I Carvanha attaccano le navi in branco e ne strappano gli scafi a morsi. Abitano i fiumi della giungla.',
    stats: { hp: 45, attack: 90, defense: 20, specialAttack: 65, specialDefense: 20, speed: 65 },
    moves: [
      { name: 'Ira', type: PokemonElementType.normal, power: 20, description: 'Questa mossa ha il potere di aumentare la statistica Attacco ogni volta che chi la usa viene colpito durante una lotta.' },
      { name: 'Focalenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un profondo respiro e si concentra per rendere più probabili i brutti colpi.' },
      { name: 'Stridio', type: PokemonElementType.normal, power: null, description: 'Stridio assordante che riduce di molto la Difesa del bersaglio.' },
      { name: 'Morso', type: PokemonElementType.dark, power: 60, description: 'Il bersaglio viene morso da denti affilatissimi che possono farlo tentennare.' },
    ],
  },
  sharpedo: {
    flavorText: 'Con le sue zanne può spezzare il ferro. Nuota a 120 km/h. È noto come il “Tiranno del mare”.',
    stats: { hp: 70, attack: 120, defense: 40, specialAttack: 95, specialDefense: 40, speed: 95 },
    moves: [
      { name: 'Capocciata', type: PokemonElementType.normal, power: 130, description: 'Chi la usa ritira la testa per aumentare la Difesa e poi attacca al turno successivo.' },
      { name: 'Lacerazione', type: PokemonElementType.normal, power: 70, description: 'Attacca il bersaglio con artigli, falci o altro. Probabile brutto colpo.' },
      { name: 'Ira', type: PokemonElementType.normal, power: 20, description: 'Questa mossa ha il potere di aumentare la statistica Attacco ogni volta che chi la usa viene colpito durante una lotta.' },
      { name: 'Focalenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un profondo respiro e si concentra per rendere più probabili i brutti colpi.' },
    ],
  },
  wailmer: {
    flavorText: 'Si diverte a rimbalzare come una palla. Più acqua di mare ingolla, più in alto riesce a rimbalzare.',
    stats: { hp: 130, attack: 70, defense: 35, specialAttack: 70, specialDefense: 35, speed: 60 },
    moves: [
      { name: 'Zampillo', type: PokemonElementType.water, power: 150, description: 'Lancia un getto d’acqua contro il nemico che ha davanti e quelli adiacenti. La potenza è proporzionale al numero di PS di chi la usa.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'Chi la usa sguazza nell’acqua, senza ottenere alcun effetto.' },
      { name: 'Nebbia', type: PokemonElementType.ice, power: null, description: 'Chi la usa attira una nebbia che blocca la riduzione delle statistiche per sé e gli alleati per cinque turni.' },
      { name: 'Sgomento', type: PokemonElementType.ghost, power: 30, description: 'Chi la usa attacca il bersaglio emettendo un verso terrificante. Può anche farlo tentennare.' },
    ],
  },
  wailord: {
    flavorText: 'L’impatto creato dai suoi salti fuori e dentro l’acqua può arrivare a mandare KO un avversario.',
    stats: { hp: 170, attack: 90, defense: 45, specialAttack: 90, specialDefense: 45, speed: 60 },
    moves: [
      { name: 'Zampillo', type: PokemonElementType.water, power: 150, description: 'Lancia un getto d’acqua contro il nemico che ha davanti e quelli adiacenti. La potenza è proporzionale al numero di PS di chi la usa.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'Chi la usa sguazza nell’acqua, senza ottenere alcun effetto.' },
      { name: 'Nebbia', type: PokemonElementType.ice, power: null, description: 'Chi la usa attira una nebbia che blocca la riduzione delle statistiche per sé e gli alleati per cinque turni.' },
      { name: 'Sgomento', type: PokemonElementType.ghost, power: 30, description: 'Chi la usa attacca il bersaglio emettendo un verso terrificante. Può anche farlo tentennare.' },
    ],
  },
  numel: {
    flavorText: 'Nella gobba accumula magma. Quando piove, il magma si indurisce e il Pokémon diventa più lento.',
    stats: { hp: 60, attack: 60, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Magnitudo', type: PokemonElementType.ground, power: null, description: 'Chi la usa scatena un terremoto d’intensità variabile che danneggia i Pokémon che ha intorno.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'Chi la usa svuota per un po’ la mente per dimenticare i problemi. La Difesa Speciale aumenta di molto.' },
      { name: 'Focalenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un profondo respiro e si concentra per rendere più probabili i brutti colpi.' },
    ],
  },
  camerupt: {
    flavorText: 'I vulcani sul suo dorso eruttano ogni dieci anni o quando è veramente arrabbiato.',
    stats: { hp: 70, attack: 100, defense: 70, specialAttack: 105, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'Eruzione', type: PokemonElementType.fire, power: 150, description: 'Attacco impetuoso ed esplosivo la cui potenza è proporzionale ai PS di chi lo usa.' },
      { name: 'Magnitudo', type: PokemonElementType.ground, power: null, description: 'Chi la usa scatena un terremoto d’intensità variabile che danneggia i Pokémon che ha intorno.' },
      { name: 'Abisso', type: PokemonElementType.ground, power: null, description: 'Chi la usa crea una spaccatura nel terreno e cerca di gettarvici dentro il bersaglio. Se va a segno, il Pokémon colpito va KO.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
    ],
  },
  torkoal: {
    flavorText: 'I Torkoal eleggono a propria dimora miniere di carbone abbandonate e vi scavano carbone con ardore.',
    stats: { hp: 70, attack: 85, defense: 140, specialAttack: 85, specialDefense: 70, speed: 20 },
    moves: [
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'Colpisce il bersaglio con una scarica di gas maleodoranti. Può anche avvelenarlo.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Turbofuoco', type: PokemonElementType.fire, power: 35, description: 'Intrappola il bersaglio in un turbine di fuoco che dura per quattro o cinque turni.' },
    ],
  },
  spoink: {
    flavorText: 'Rimbalza costantemente usando la coda come una molla. Il movimento sollecita il cuore e lo fa battere.',
    stats: { hp: 60, attack: 25, defense: 35, specialAttack: 70, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'Chi la usa sguazza nell’acqua, senza ottenere alcun effetto.' },
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Psiconda', type: PokemonElementType.psychic, power: null, description: 'Colpisce il bersaglio con una strana onda psichica. Ha un’intensità variabile.' },
      { name: 'Rimbalzo', type: PokemonElementType.flying, power: 85, description: 'Chi la usa balza in alto e ricade sul bersaglio dopo un turno. Può anche paralizzarlo.' },
    ],
  },
  grumpig: {
    flavorText: 'Amplifica i suoi poteri psichici con le sue perle nere. Si esibisce anche in danze bizzarre per controllare i suoi nemici.',
    stats: { hp: 80, attack: 45, defense: 65, specialAttack: 90, specialDefense: 110, speed: 80 },
    moves: [
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'Chi la usa sguazza nell’acqua, senza ottenere alcun effetto.' },
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Psiconda', type: PokemonElementType.psychic, power: null, description: 'Colpisce il bersaglio con una strana onda psichica. Ha un’intensità variabile.' },
      { name: 'Rimbalzo', type: PokemonElementType.flying, power: 85, description: 'Chi la usa balza in alto e ricade sul bersaglio dopo un turno. Può anche paralizzarlo.' },
    ],
  },
  spinda: {
    flavorText: 'Non ci sono due Spinda con lo stesso motivo maculato. Il suo passo barcollante confonde i nemici.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 60, specialDefense: 60, speed: 60 },
    moves: [
      { name: 'Stordipugno', type: PokemonElementType.normal, power: 70, description: 'Colpisce il bersaglio con una sequenza di pugni che può anche confonderlo.' },
      { name: 'Strampadanza', type: PokemonElementType.normal, power: null, description: 'Chi la usa esegue una danza goffa che confonde tutti i Pokémon attorno.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  trapinch: {
    flavorText: 'Vive nei deserti. Scava buche nel terreno e vi si apposta, attendendo che le prede vi caschino dentro.',
    stats: { hp: 45, attack: 100, defense: 45, specialAttack: 45, specialDefense: 45, speed: 10 },
    moves: [
      { name: 'Sabbiotomba', type: PokemonElementType.ground, power: 35, description: 'Chi la usa intrappola il bersaglio in un turbine di sabbia per quattro o cinque turni.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
      { name: 'Morso', type: PokemonElementType.dark, power: 60, description: 'Il bersaglio viene morso da denti affilatissimi che possono farlo tentennare.' },
    ],
  },
  vibrava: {
    flavorText: 'Fa vibrare velocemente le ali generando onde ultrasoniche che provocano dei forti mal di testa.',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 70 },
    moves: [
      { name: 'Dragospiro', type: PokemonElementType.dragon, power: 60, description: 'Investe il bersaglio con una raffica potentissima che arreca danni. Può anche paralizzarlo.' },
      { name: 'Sabbiotomba', type: PokemonElementType.ground, power: 35, description: 'Chi la usa intrappola il bersaglio in un turbine di sabbia per quattro o cinque turni.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
    ],
  },
  flygon: {
    flavorText: 'Solleva sabbia con le ali per nascondersi. Un rivestimento rosso protegge gli occhi dalla sabbia stessa.',
    stats: { hp: 80, attack: 100, defense: 80, specialAttack: 80, specialDefense: 80, speed: 100 },
    moves: [
      { name: 'Dragospiro', type: PokemonElementType.dragon, power: 60, description: 'Investe il bersaglio con una raffica potentissima che arreca danni. Può anche paralizzarlo.' },
      { name: 'Sabbiotomba', type: PokemonElementType.ground, power: 35, description: 'Chi la usa intrappola il bersaglio in un turbine di sabbia per quattro o cinque turni.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
    ],
  },
  cacnea: {
    flavorText: 'Cacnea vive in zone aride, dove non piove quasi mai. Il suo fiore giallo sboccia una volta all’anno.',
    stats: { hp: 50, attack: 85, defense: 40, specialAttack: 85, specialDefense: 40, speed: 35 },
    moves: [
      { name: 'Pugnospine', type: PokemonElementType.grass, power: 60, description: 'Chi la usa attacca colpendo il bersaglio con i suoi arti pieni di spine. Può far tentennare il Pokémon colpito.' },
      { name: 'Cottonspora', type: PokemonElementType.grass, power: null, description: 'Rilascia spore simili al cotone che si attaccano ai nemici nei paraggi e ne riducono di molto la Velocità.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Radicamento', type: PokemonElementType.grass, power: null, description: 'Chi la usa mette delle radici che gli fanno recuperare PS a ogni turno. Non può essere sostituito.' },
    ],
  },
  cacturne: {
    flavorText: 'Diventa attivo di notte, quando va a caccia di prede stremate dalla calura del deserto.',
    stats: { hp: 70, attack: 115, defense: 60, specialAttack: 115, specialDefense: 60, speed: 55 },
    moves: [
      { name: 'Pugnospine', type: PokemonElementType.grass, power: 60, description: 'Chi la usa attacca colpendo il bersaglio con i suoi arti pieni di spine. Può far tentennare il Pokémon colpito.' },
      { name: 'Cottonspora', type: PokemonElementType.grass, power: null, description: 'Rilascia spore simili al cotone che si attaccano ai nemici nei paraggi e ne riducono di molto la Velocità.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Radicamento', type: PokemonElementType.grass, power: null, description: 'Chi la usa mette delle radici che gli fanno recuperare PS a ogni turno. Non può essere sostituito.' },
    ],
  },
  swablu: {
    flavorText: 'Per qualche motivo adora salire sulla testa delle persone e far finta di essere un cappello.',
    stats: { hp: 45, attack: 40, defense: 60, specialAttack: 40, specialDefense: 75, speed: 50 },
    moves: [
      { name: 'Speculmossa', type: PokemonElementType.flying, power: null, description: 'Chi la usa colpisce il bersaglio copiandone l’ultima mossa usata.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
    ],
  },
  altaria: {
    flavorText: 'Volteggia elegante nel cielo. Canticchia soavemente, mandando in onirica estasi chi lo ascolta.',
    stats: { hp: 75, attack: 70, defense: 90, specialAttack: 70, specialDefense: 105, speed: 80 },
    moves: [
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Rinfrescata', type: PokemonElementType.normal, power: null, description: 'Chi la usa riposa per guarire da avvelenamento, paralisi e scottatura.' },
    ],
  },
  zangoose: {
    flavorText: 'Da generazioni, è acerrimo nemico di Seviper. Gli artigli aguzzi sono le sue armi più potenti.',
    stats: { hp: 73, attack: 115, defense: 60, specialAttack: 60, specialDefense: 60, speed: 90 },
    moves: [
      { name: 'Tritartigli', type: PokemonElementType.normal, power: 75, description: 'Colpisce il bersaglio con artigli robusti e affilati che possono ridurne la Difesa.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
      { name: 'Falsofinale', type: PokemonElementType.normal, power: 40, description: 'Chi la usa trattiene il colpo per impedire al bersaglio di andare KO, lasciandolo con almeno un PS.' },
    ],
  },
  seviper: {
    flavorText: 'Respinge gli attacchi dell’agile Zangoose con la coda affilatissima, che secerne un micidiale veleno.',
    stats: { hp: 73, attack: 100, defense: 60, specialAttack: 100, specialDefense: 60, speed: 65 },
    moves: [
      { name: 'Sguardo Feroce', type: PokemonElementType.normal, power: null, description: 'Chi la usa spaventa il bersaglio con uno sguardo terrificante e ne causa la paralisi.' },
      { name: 'Velenodenti', type: PokemonElementType.poison, power: 50, description: 'Chi la usa morde il bersaglio con denti avvelenati che possono anche iperavvelenarlo.' },
      { name: 'Velenocoda', type: PokemonElementType.poison, power: 50, description: 'Chi la usa colpisce con la coda e può avvelenare il bersaglio. Probabile brutto colpo.' },
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
    ],
  },
  lunatone: {
    flavorText: 'Diventa attivo nelle notti di luna piena, pertanto si dice che abbia qualche legame con le fasi lunari.',
    stats: { hp: 90, attack: 55, defense: 65, specialAttack: 95, specialDefense: 85, speed: 70 },
    moves: [
      { name: 'Cosmoforza', type: PokemonElementType.psychic, power: null, description: 'Chi la usa assorbe una forza mistica dallo spazio che aumenta la Difesa e la Difesa Speciale.' },
      { name: 'Psiconda', type: PokemonElementType.psychic, power: null, description: 'Colpisce il bersaglio con una strana onda psichica. Ha un’intensità variabile.' },
      { name: 'Sassata', type: PokemonElementType.rock, power: 50, description: 'Chi la usa solleva una roccia e la lancia contro il bersaglio.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
    ],
  },
  solrock: {
    flavorText: 'L’energia solare è la fonte della sua potenza, per cui è più forte di giorno. Emana luce quando ruota su se stesso.',
    stats: { hp: 90, attack: 95, defense: 85, specialAttack: 55, specialDefense: 65, speed: 70 },
    moves: [
      { name: 'Cosmoforza', type: PokemonElementType.psychic, power: null, description: 'Chi la usa assorbe una forza mistica dallo spazio che aumenta la Difesa e la Difesa Speciale.' },
      { name: 'Psiconda', type: PokemonElementType.psychic, power: null, description: 'Colpisce il bersaglio con una strana onda psichica. Ha un’intensità variabile.' },
      { name: 'Sassata', type: PokemonElementType.rock, power: 50, description: 'Chi la usa solleva una roccia e la lancia contro il bersaglio.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  barboach: {
    flavorText: 'Il suo corpo è ricoperto da una pellicola viscida, che gli permette di sgusciare via, se afferrato.',
    stats: { hp: 50, attack: 48, defense: 43, specialAttack: 46, specialDefense: 41, speed: 60 },
    moves: [
      { name: 'Magnitudo', type: PokemonElementType.ground, power: null, description: 'Chi la usa scatena un terremoto d’intensità variabile che danneggia i Pokémon che ha intorno.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Abisso', type: PokemonElementType.ground, power: null, description: 'Chi la usa crea una spaccatura nel terreno e cerca di gettarvici dentro il bersaglio. Se va a segno, il Pokémon colpito va KO.' },
    ],
  },
  whiscash: {
    flavorText: 'Stabilisce il suo territorio nelle grandi paludi. Se il nemico gli si accosta, provoca un terremoto.',
    stats: { hp: 110, attack: 78, defense: 73, specialAttack: 76, specialDefense: 71, speed: 60 },
    moves: [
      { name: 'Magnitudo', type: PokemonElementType.ground, power: null, description: 'Chi la usa scatena un terremoto d’intensità variabile che danneggia i Pokémon che ha intorno.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Abisso', type: PokemonElementType.ground, power: null, description: 'Chi la usa crea una spaccatura nel terreno e cerca di gettarvici dentro il bersaglio. Se va a segno, il Pokémon colpito va KO.' },
    ],
  },
  corphish: {
    flavorText: 'La sua grande vitalità gli permette di adattarsi e proliferare anche nelle acque dei fiumi più inquinati.',
    stats: { hp: 43, attack: 80, defense: 65, specialAttack: 50, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'Martellata', type: PokemonElementType.water, power: 100, description: 'Danneggia il bersaglio servendosi di una grande tenaglia. Probabile brutto colpo.' },
      { name: 'Ghigliottina', type: PokemonElementType.normal, power: null, description: 'Attacca il bersaglio con pericolose tenaglie. Se l’attacco va a segno, il Pokémon colpito va subito KO.' },
      { name: 'Presa', type: PokemonElementType.normal, power: 55, description: 'Stringe il bersaglio in una morsa.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
    ],
  },
  crawdaunt: {
    flavorText: 'Pokémon violento che afferra il nemico con le chele e lo scaraventa fuori dal suo stagno.',
    stats: { hp: 63, attack: 120, defense: 85, specialAttack: 90, specialDefense: 55, speed: 55 },
    moves: [
      { name: 'Martellata', type: PokemonElementType.water, power: 100, description: 'Danneggia il bersaglio servendosi di una grande tenaglia. Probabile brutto colpo.' },
      { name: 'Ghigliottina', type: PokemonElementType.normal, power: null, description: 'Attacca il bersaglio con pericolose tenaglie. Se l’attacco va a segno, il Pokémon colpito va subito KO.' },
      { name: 'Presa', type: PokemonElementType.normal, power: 55, description: 'Stringe il bersaglio in una morsa.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
    ],
  },
  baltoy: {
    flavorText: 'Si sposta piroettando sull’unica estremità inferiore del proprio corpo. Molti fanno la verticale.',
    stats: { hp: 40, attack: 40, defense: 55, specialAttack: 40, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'Cosmoforza', type: PokemonElementType.psychic, power: null, description: 'Chi la usa assorbe una forza mistica dallo spazio che aumenta la Difesa e la Difesa Speciale.' },
      { name: 'Rapigiro', type: PokemonElementType.normal, power: 50, description: 'Attacco rotante che elimina gli effetti di mosse come Legatutto, Avvolgibotta, Punte e Parassiseme.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
      { name: 'Esplosione', type: PokemonElementType.normal, power: 250, description: 'Chi la usa esplode per infliggere danni agli altri Pokémon attorno, ma va KO.' },
    ],
  },
  claydol: {
    flavorText: 'Pokémon nato da un’antica statuetta d’argilla portata in vita da misteriose radiazioni.',
    stats: { hp: 60, attack: 70, defense: 105, specialAttack: 70, specialDefense: 120, speed: 75 },
    moves: [
      { name: 'Teletrasporto', type: PokemonElementType.psychic, power: null, description: 'Fa fuggire dai Pokémon selvatici. Fuori dalla lotta porta all’ultimo Centro Pokémon visitato.' },
      { name: 'Cosmoforza', type: PokemonElementType.psychic, power: null, description: 'Chi la usa assorbe una forza mistica dallo spazio che aumenta la Difesa e la Difesa Speciale.' },
      { name: 'Rapigiro', type: PokemonElementType.normal, power: 50, description: 'Attacco rotante che elimina gli effetti di mosse come Legatutto, Avvolgibotta, Punte e Parassiseme.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  lileep: {
    flavorText: 'Cattura le prede che si avvicinano con i tentacoli a forma di corolla. Si è estinto 100 milioni di anni fa.',
    stats: { hp: 66, attack: 41, defense: 77, specialAttack: 61, specialDefense: 87, speed: 23 },
    moves: [
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Acido', type: PokemonElementType.poison, power: 40, description: 'Colpisce i nemici intorno spruzzando un acido corrosivo. Può anche ridurne la Difesa Speciale.' },
      { name: 'Sfoghenergia', type: PokemonElementType.normal, power: null, description: 'Tutta l’energia accumulata in precedenza con Accumulo è rilasciata nell’attacco. Maggiore è l’energia, più danni si arrecano.' },
      { name: 'Radicamento', type: PokemonElementType.grass, power: null, description: 'Chi la usa mette delle radici che gli fanno recuperare PS a ogni turno. Non può essere sostituito.' },
    ],
  },
  cradily: {
    flavorText: 'Vive in acque poco profonde nei mari caldi. Con la bassa marea, scava sulla riva in cerca di prede.',
    stats: { hp: 86, attack: 81, defense: 97, specialAttack: 81, specialDefense: 107, speed: 43 },
    moves: [
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Acido', type: PokemonElementType.poison, power: 40, description: 'Colpisce i nemici intorno spruzzando un acido corrosivo. Può anche ridurne la Difesa Speciale.' },
      { name: 'Sfoghenergia', type: PokemonElementType.normal, power: null, description: 'Tutta l’energia accumulata in precedenza con Accumulo è rilasciata nell’attacco. Maggiore è l’energia, più danni si arrecano.' },
      { name: 'Radicamento', type: PokemonElementType.grass, power: null, description: 'Chi la usa mette delle radici che gli fanno recuperare PS a ogni turno. Non può essere sostituito.' },
    ],
  },
  anorith: {
    flavorText: 'Pokémon di tipo primitivo, usa i lunghi artigli per catturare prede nascoste tra le rocce in fondo al mare.',
    stats: { hp: 45, attack: 95, defense: 50, specialAttack: 40, specialDefense: 50, speed: 75 },
    moves: [
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
      { name: 'Ferrartigli', type: PokemonElementType.steel, power: 50, description: 'Colpisce il bersaglio con artigli d’acciaio. Può anche aumentare l’Attacco di chi la usa.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
    ],
  },
  armaldo: {
    flavorText: 'Cattura il nemico infilzandolo con gli enormi artigli retrattili. È rivestito di una robusta corazza.',
    stats: { hp: 75, attack: 125, defense: 100, specialAttack: 70, specialDefense: 80, speed: 45 },
    moves: [
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
      { name: 'Ferrartigli', type: PokemonElementType.steel, power: 50, description: 'Colpisce il bersaglio con artigli d’acciaio. Può anche aumentare l’Attacco di chi la usa.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
    ],
  },
  feebas: {
    flavorText: 'Si nutre di qualsiasi cosa, pertanto vive anche in fiumi e laghi inquinati. È un Pokémon di scarso interesse.',
    stats: { hp: 20, attack: 15, defense: 20, specialAttack: 10, specialDefense: 55, speed: 80 },
    moves: [
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'Chi la usa sguazza nell’acqua, senza ottenere alcun effetto.' },
      { name: 'Flagello', type: PokemonElementType.normal, power: null, description: 'Chi la usa si dimena per attaccare. È più efficace se i suoi PS sono bassi.' },
      { name: 'Azione', type: PokemonElementType.normal, power: 40, description: 'Attacco fisico che colpisce il bersaglio investendolo con tutto il corpo.' },
    ],
  },
  milotic: {
    flavorText: 'Pokémon di una bellezza vertiginosa. Chi lo vede perde ogni voglia di combattere.',
    stats: { hp: 95, attack: 60, defense: 79, specialAttack: 100, specialDefense: 125, speed: 81 },
    moves: [
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Rinfrescata', type: PokemonElementType.normal, power: null, description: 'Chi la usa riposa per guarire da avvelenamento, paralisi e scottatura.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
    ],
  },
  kecleon: {
    flavorText: 'Può mutare il colore del corpo a piacimento. Tuttavia, il motivo a zigzag sul ventre non cambia.',
    stats: { hp: 60, attack: 90, defense: 70, specialAttack: 60, specialDefense: 120, speed: 40 },
    moves: [
      { name: 'Leccata', type: PokemonElementType.ghost, power: 30, description: 'Una lingua lunga infligge danni al bersaglio e può anche paralizzarlo.' },
      { name: 'Legatutto', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o i tentacoli di chi la usa legano e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  castform: {
    flavorText: 'Il suo aspetto varia con l’umidità e la temperatura, che influenzano la sua struttura molecolare.',
    stats: { hp: 70, attack: 70, defense: 70, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Polneve', type: PokemonElementType.ice, power: 40, description: 'Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Palla Clima', type: PokemonElementType.normal, power: 50, description: 'Mossa d’attacco che varia tipo e forza in base alle condizioni atmosferiche.' },
      { name: 'Pistolacqua', type: PokemonElementType.water, power: 40, description: 'Il bersaglio è colpito da un potente getto d’acqua.' },
    ],
  },
  shuppet: {
    flavorText: 'Si dice che si nutra di rancore e invidia con il corno che ha sulla testa. A mezzanotte si scatena.',
    stats: { hp: 44, attack: 75, defense: 35, specialAttack: 63, specialDefense: 33, speed: 45 },
    moves: [
      { name: 'Rancore', type: PokemonElementType.ghost, power: null, description: 'Se chi la usa va KO, i PP della mossa nemica che lo ha messo fuori gioco si azzerano.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
      { name: 'Ombra Notturna', type: PokemonElementType.ghost, power: null, description: 'Fa apparire un orribile miraggio al bersaglio e infligge un danno pari al livello di chi la usa.' },
      { name: 'Scippo', type: PokemonElementType.dark, power: null, description: 'Chi la usa ruba e utilizza la mossa curativa o modifica-statistiche che un altro Pokémon stava per usare.' },
    ],
  },
  banette: {
    flavorText: 'Un peluche divenuto Pokémon per la rabbia di essere stato buttato via da un bimbo, di cui è alla ricerca.',
    stats: { hp: 64, attack: 115, defense: 65, specialAttack: 83, specialDefense: 63, speed: 65 },
    moves: [
      { name: 'Rancore', type: PokemonElementType.ghost, power: null, description: 'Se chi la usa va KO, i PP della mossa nemica che lo ha messo fuori gioco si azzerano.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
      { name: 'Ombra Notturna', type: PokemonElementType.ghost, power: null, description: 'Fa apparire un orribile miraggio al bersaglio e infligge un danno pari al livello di chi la usa.' },
      { name: 'Scippo', type: PokemonElementType.dark, power: null, description: 'Chi la usa ruba e utilizza la mossa curativa o modifica-statistiche che un altro Pokémon stava per usare.' },
    ],
  },
  duskull: {
    flavorText: 'Segue ostinatamente la preda ovunque essa vada. Abbandona la caccia solo all’alba.',
    stats: { hp: 20, attack: 40, defense: 90, specialAttack: 30, specialDefense: 90, speed: 25 },
    moves: [
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Malosguardo', type: PokemonElementType.normal, power: null, description: 'Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
      { name: 'Inibitore', type: PokemonElementType.normal, power: null, description: 'Per quattro turni impedisce al bersaglio di riutilizzare l’ultima mossa usata.' },
    ],
  },
  dusclops: {
    flavorText: 'Se si osserva troppo da vicino la palla di fuoco dentro Dusclops, la propria anima viene risucchiata.',
    stats: { hp: 40, attack: 70, defense: 130, specialAttack: 60, specialDefense: 130, speed: 25 },
    moves: [
      { name: 'Pugnodombra', type: PokemonElementType.ghost, power: 60, description: 'Il bersaglio riceve un pugno proveniente dalle tenebre. Questa mossa è infallibile.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Malosguardo', type: PokemonElementType.normal, power: null, description: 'Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga.' },
      { name: 'Legatutto', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o i tentacoli di chi la usa legano e stritolano il bersaglio per quattro o cinque turni.' },
    ],
  },
  tropius: {
    flavorText: 'Vola sbattendo delle grandi ali a forma di foglia e distribuisce ai bambini i deliziosi frutti che gli crescono sul collo.',
    stats: { hp: 99, attack: 68, defense: 83, specialAttack: 72, specialDefense: 87, speed: 51 },
    moves: [
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
      { name: 'Turbine', type: PokemonElementType.normal, power: null, description: 'Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici.' },
      { name: 'Pestone', type: PokemonElementType.normal, power: 65, description: 'Colpisce il bersaglio con un grosso piede e può anche farlo tentennare.' },
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
    ],
  },
  chimecho: {
    flavorText: 'Emette sette tipi di versi penzolando da rami o cornicioni, a cui si attacca con la ventosa che ha sul capo.',
    stats: { hp: 75, attack: 50, defense: 80, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Psiconda', type: PokemonElementType.psychic, power: null, description: 'Colpisce il bersaglio con una strana onda psichica. Ha un’intensità variabile.' },
      { name: 'Rintoccasana', type: PokemonElementType.normal, power: null, description: 'Chi la usa produce uno scampanellio che cura i problemi di stato suoi e dei Pokémon alleati.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
    ],
  },
  absol: {
    flavorText: 'Percepisce i disastri naturali imminenti e si mostra solo per avvertire la gente del pericolo.',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 75, specialDefense: 60, speed: 75 },
    moves: [
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
      { name: 'Ventagliente', type: PokemonElementType.normal, power: 80, description: 'Chi la usa genera un turbine al primo turno e attacca al secondo. Probabile brutto colpo.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
      { name: 'Divinazione', type: PokemonElementType.psychic, power: 120, description: 'Due turni dopo l’utilizzo di questa mossa, il bersaglio viene attaccato con energia psichica.' },
    ],
  },
  wynaut: {
    flavorText: 'Tendono a spostarsi in gruppo. Anche per dormire si stringono fra loro, nelle grotte.',
    stats: { hp: 95, attack: 23, defense: 48, specialAttack: 23, specialDefense: 48, speed: 23 },
    moves: [
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'Chi la usa sguazza nell’acqua, senza ottenere alcun effetto.' },
      { name: 'Specchiovelo', type: PokemonElementType.psychic, power: null, description: 'Mossa che replica ogni attacco speciale, arrecando il doppio del danno ricevuto.' },
      { name: 'Destinobbligato', type: PokemonElementType.ghost, power: null, description: 'Se chi la usa va KO prima del turno successivo, chi ha sferrato il colpo da KO fa la stessa fine.' },
      { name: 'Ripeti', type: PokemonElementType.normal, power: null, description: 'Chi la usa obbliga il bersaglio a ripetere per tre turni l’ultima mossa eseguita.' },
    ],
  },
  snorunt: {
    flavorText: 'Si dice che gli Snorunt vivano in armonia riuniti sotto gigantesche foglie.',
    stats: { hp: 50, attack: 50, defense: 50, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Polneve', type: PokemonElementType.ice, power: 40, description: 'Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli.' },
      { name: 'Grandine', type: PokemonElementType.ice, power: null, description: 'Chi la usa causa una grandinata che dura cinque turni. Danneggia tutti i Pokémon tranne quelli di tipo Ghiaccio.' },
      { name: 'Morso', type: PokemonElementType.dark, power: 60, description: 'Il bersaglio viene morso da denti affilatissimi che possono farlo tentennare.' },
      { name: 'Fulmisguardo', type: PokemonElementType.normal, power: null, description: 'Terrorizza i nemici intorno con uno sguardo fulminante e intimidatorio, riducendone la Difesa.' },
    ],
  },
  glalie: {
    flavorText: 'Per difendersi, riveste il suo corpo con un’armatura di ghiaccio, fatta congelando l’umidità dell’aria.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: 'Purogelo', type: PokemonElementType.ice, power: null, description: 'Ondata di freddo penetrante che, se va a segno, fa andare KO il bersaglio.' },
      { name: 'Polneve', type: PokemonElementType.ice, power: 40, description: 'Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli.' },
      { name: 'Grandine', type: PokemonElementType.ice, power: null, description: 'Chi la usa causa una grandinata che dura cinque turni. Danneggia tutti i Pokémon tranne quelli di tipo Ghiaccio.' },
      { name: 'Morso', type: PokemonElementType.dark, power: 60, description: 'Il bersaglio viene morso da denti affilatissimi che possono farlo tentennare.' },
    ],
  },
  spheal: {
    flavorText: 'Non sa ancora nuotare molto bene e si muove più velocemente rotolando. Quando è felice batte le pinne.',
    stats: { hp: 70, attack: 40, defense: 50, specialAttack: 55, specialDefense: 50, speed: 25 },
    moves: [
      { name: 'Palla Gelo', type: PokemonElementType.ice, power: 30, description: 'Chi la usa attacca il bersaglio rotolando per cinque turni, con aumento progressivo della potenza ogni volta che va a segno.' },
      { name: 'Purogelo', type: PokemonElementType.ice, power: null, description: 'Ondata di freddo penetrante che, se va a segno, fa andare KO il bersaglio.' },
      { name: 'Raggiaurora', type: PokemonElementType.ice, power: 65, description: 'Colpisce il bersaglio con un raggio dai colori dell’iride. Può anche ridurne l’Attacco.' },
      { name: 'Polneve', type: PokemonElementType.ice, power: 40, description: 'Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli.' },
    ],
  },
  sealeo: {
    flavorText: 'Per memorizzare un nuovo oggetto, ha bisogno di toccarlo con il naso, dove risiede la sua sensibilità.',
    stats: { hp: 90, attack: 60, defense: 70, specialAttack: 75, specialDefense: 70, speed: 45 },
    moves: [
      { name: 'Palla Gelo', type: PokemonElementType.ice, power: 30, description: 'Chi la usa attacca il bersaglio rotolando per cinque turni, con aumento progressivo della potenza ogni volta che va a segno.' },
      { name: 'Purogelo', type: PokemonElementType.ice, power: null, description: 'Ondata di freddo penetrante che, se va a segno, fa andare KO il bersaglio.' },
      { name: 'Raggiaurora', type: PokemonElementType.ice, power: 65, description: 'Colpisce il bersaglio con un raggio dai colori dell’iride. Può anche ridurne l’Attacco.' },
      { name: 'Polneve', type: PokemonElementType.ice, power: 40, description: 'Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli.' },
    ],
  },
  walrein: {
    flavorText: 'Frantuma il ghiaccio con le zanne. Lo spesso strato adiposo respinge il freddo e gli attacchi nemici.',
    stats: { hp: 110, attack: 80, defense: 90, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'Palla Gelo', type: PokemonElementType.ice, power: 30, description: 'Chi la usa attacca il bersaglio rotolando per cinque turni, con aumento progressivo della potenza ogni volta che va a segno.' },
      { name: 'Purogelo', type: PokemonElementType.ice, power: null, description: 'Ondata di freddo penetrante che, se va a segno, fa andare KO il bersaglio.' },
      { name: 'Raggiaurora', type: PokemonElementType.ice, power: 65, description: 'Colpisce il bersaglio con un raggio dai colori dell’iride. Può anche ridurne l’Attacco.' },
      { name: 'Polneve', type: PokemonElementType.ice, power: 40, description: 'Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli.' },
    ],
  },
  clamperl: {
    flavorText: 'Crea una sola perla in tutta la sua vita, quando si evolve. Questa perla amplifica i poteri psichici.',
    stats: { hp: 35, attack: 64, defense: 85, specialAttack: 74, specialDefense: 55, speed: 32 },
    moves: [
      { name: 'Tenaglia', type: PokemonElementType.water, power: 35, description: 'Chi la usa intrappola e stritola il bersaglio con la sua corazza spessa e forte per quattro o cinque turni.' },
      { name: 'Pistolacqua', type: PokemonElementType.water, power: 40, description: 'Il bersaglio è colpito da un potente getto d’acqua.' },
      { name: 'Mulinello', type: PokemonElementType.water, power: 35, description: 'Intrappola il bersaglio in un turbine d’acqua per quattro o cinque turni infliggendo danni a ogni turno.' },
      { name: 'Ferroscudo', type: PokemonElementType.steel, power: null, description: 'Il corpo di chi la usa si indurisce come il ferro, facendone salire di molto la Difesa.' },
    ],
  },
  huntail: {
    flavorText: 'Vive in mare a grandi profondità, dove non filtra nessuna luce. Attira le prede illuminando la codina a forma di pesce.',
    stats: { hp: 55, attack: 104, defense: 105, specialAttack: 94, specialDefense: 75, speed: 52 },
    moves: [
      { name: 'Mulinello', type: PokemonElementType.water, power: 35, description: 'Intrappola il bersaglio in un turbine d’acqua per quattro o cinque turni infliggendo danni a ogni turno.' },
      { name: 'Idropompa', type: PokemonElementType.water, power: 110, description: 'Il bersaglio è travolto da un potente getto d’acqua spruzzato ad altissima pressione.' },
      { name: 'Staffetta', type: PokemonElementType.normal, power: null, description: 'Chi la usa è sostituito da un Pokémon della squadra, che eredita anche ogni modifica alle statistiche.' },
      { name: 'Stridio', type: PokemonElementType.normal, power: null, description: 'Stridio assordante che riduce di molto la Difesa del bersaglio.' },
    ],
  },
  gorebyss: {
    flavorText: 'Vive sui fondali marini. In primavera il suo corpo rosato diventa più vivido per chissà quale motivo.',
    stats: { hp: 55, attack: 84, defense: 105, specialAttack: 114, specialDefense: 75, speed: 52 },
    moves: [
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'Chi la usa svuota per un po’ la mente per dimenticare i problemi. La Difesa Speciale aumenta di molto.' },
      { name: 'Mulinello', type: PokemonElementType.water, power: 35, description: 'Intrappola il bersaglio in un turbine d’acqua per quattro o cinque turni infliggendo danni a ogni turno.' },
      { name: 'Idropompa', type: PokemonElementType.water, power: 110, description: 'Il bersaglio è travolto da un potente getto d’acqua spruzzato ad altissima pressione.' },
    ],
  },
  relicanth: {
    flavorText: 'Immutato da 100 milioni di anni, è stato scoperto durante un’esplorazione nelle profondità marine.',
    stats: { hp: 100, attack: 90, defense: 130, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
      { name: 'Pistolacqua', type: PokemonElementType.water, power: 40, description: 'Il bersaglio è colpito da un potente getto d’acqua.' },
    ],
  },
  luvdisc: {
    flavorText: 'Vive nei mari caldi. Si dice che le coppie che trovano questo Pokémon riceveranno in dono l’eterno amore.',
    stats: { hp: 43, attack: 30, defense: 55, specialAttack: 40, specialDefense: 65, speed: 97 },
    moves: [
      { name: 'Dolcebacio', type: PokemonElementType.normal, power: null, description: 'Chi la usa bacia il bersaglio con una dolcezza angelica, confondendolo.' },
      { name: 'Flagello', type: PokemonElementType.normal, power: null, description: 'Chi la usa si dimena per attaccare. È più efficace se i suoi PS sono bassi.' },
      { name: 'Pistolacqua', type: PokemonElementType.water, power: 40, description: 'Il bersaglio è colpito da un potente getto d’acqua.' },
      { name: 'Fascino', type: PokemonElementType.normal, power: null, description: 'Ammalia il bersaglio con lo sguardo per renderlo meno cauto. Ne riduce molto l’Attacco.' },
    ],
  },
  bagon: {
    flavorText: 'Frantuma grandi massi con la testa dura come il ferro e gli allenatissimi muscoli del collo.',
    stats: { hp: 45, attack: 75, defense: 60, specialAttack: 40, specialDefense: 30, speed: 50 },
    moves: [
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Dragospiro', type: PokemonElementType.dragon, power: 60, description: 'Investe il bersaglio con una raffica potentissima che arreca danni. Può anche paralizzarlo.' },
      { name: 'Dragartigli', type: PokemonElementType.dragon, power: 80, description: 'Chi la usa attacca con artigli affilati che graffiano il bersaglio rapidamente e con grande forza.' },
      { name: 'Ira', type: PokemonElementType.normal, power: 20, description: 'Questa mossa ha il potere di aumentare la statistica Attacco ogni volta che chi la usa viene colpito durante una lotta.' },
    ],
  },
  beldum: {
    flavorText: 'Riesce a fluttuare in aria grazie alla repulsione tra le proprie onde magnetiche e quelle della terra.',
    stats: { hp: 40, attack: 55, defense: 80, specialAttack: 35, specialDefense: 60, speed: 30 },
    moves: [
      { name: 'Riduttore', type: PokemonElementType.normal, power: 90, description: 'Carica spericolata con tutto il corpo contro il bersaglio. Danneggia un po’ anche chi la usa.' },
    ],
  },
  shelgon: {
    flavorText: 'Nella sua dura corazza le cellule hanno cominciato a cambiare. Quando si evolve, la corazza cade.',
    stats: { hp: 65, attack: 95, defense: 100, specialAttack: 60, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Dragospiro', type: PokemonElementType.dragon, power: 60, description: 'Investe il bersaglio con una raffica potentissima che arreca danni. Può anche paralizzarlo.' },
      { name: 'Dragartigli', type: PokemonElementType.dragon, power: 80, description: 'Chi la usa attacca con artigli affilati che graffiano il bersaglio rapidamente e con grande forza.' },
      { name: 'Ira', type: PokemonElementType.normal, power: 20, description: 'Questa mossa ha il potere di aumentare la statistica Attacco ogni volta che chi la usa viene colpito durante una lotta.' },
    ],
  },
  salamence: {
    flavorText: 'Quando è adirato diventa una furia. Con i suoi artigli laceranti e le fiammate che lancia può distruggere qualsiasi cosa.',
    stats: { hp: 95, attack: 135, defense: 80, specialAttack: 110, specialDefense: 80, speed: 100 },
    moves: [
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Dragospiro', type: PokemonElementType.dragon, power: 60, description: 'Investe il bersaglio con una raffica potentissima che arreca danni. Può anche paralizzarlo.' },
      { name: 'Dragartigli', type: PokemonElementType.dragon, power: 80, description: 'Chi la usa attacca con artigli affilati che graffiano il bersaglio rapidamente e con grande forza.' },
      { name: 'Volo', type: PokemonElementType.flying, power: 90, description: 'Chi la usa si alza in volo per attaccare al turno seguente. Fuori dalla lotta permette di volare in città già visitate.' },
    ],
  },
  metang: {
    flavorText: 'È sorto dalla fusione di due Beldum. Il suo corpo d’acciaio non viene scalfito neanche se urta un jet.',
    stats: { hp: 60, attack: 75, defense: 100, specialAttack: 55, specialDefense: 80, speed: 50 },
    moves: [
      { name: 'Meteorpugno', type: PokemonElementType.steel, power: 90, description: 'Colpisce il bersaglio con un pugno veloce come una meteora. Può far salire l’Attacco di chi la usa.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
      { name: 'Ferrartigli', type: PokemonElementType.steel, power: 50, description: 'Colpisce il bersaglio con artigli d’acciaio. Può anche aumentare l’Attacco di chi la usa.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
    ],
  },
  metagross: {
    flavorText: 'Con l’incredibile velocità di calcolo dei suoi quattro cervelli analizza il nemico più rapidamente di un supercomputer.',
    stats: { hp: 80, attack: 135, defense: 130, specialAttack: 95, specialDefense: 90, speed: 70 },
    moves: [
      { name: 'Meteorpugno', type: PokemonElementType.steel, power: 90, description: 'Colpisce il bersaglio con un pugno veloce come una meteora. Può far salire l’Attacco di chi la usa.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
      { name: 'Ferrartigli', type: PokemonElementType.steel, power: 50, description: 'Colpisce il bersaglio con artigli d’acciaio. Può anche aumentare l’Attacco di chi la usa.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
    ],
  },
  regirock: {
    flavorText: 'È formato interamente da rocce. Se si staccano nella lotta, ne cerca altre per sostituirle.',
    stats: { hp: 80, attack: 100, defense: 200, specialAttack: 50, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'Localizza', type: PokemonElementType.normal, power: null, description: 'Chi la usa punta il bersaglio con precisione. La mossa successiva andrà a segno.' },
      { name: 'Sassata', type: PokemonElementType.rock, power: 50, description: 'Chi la usa solleva una roccia e la lancia contro il bersaglio.' },
      { name: 'Falcecannone', type: PokemonElementType.electric, power: 120, description: 'Chi la usa provoca un’esplosione elettrica che infligge danni e paralizza il bersaglio.' },
      { name: 'Esplosione', type: PokemonElementType.normal, power: 250, description: 'Chi la usa esplode per infliggere danni agli altri Pokémon attorno, ma va KO.' },
    ],
  },
  regice: {
    flavorText: 'Si dice che sia rimasto a dormire nei ghiacci per alcuni millenni. Nemmeno il magma riuscirebbe a scioglierlo.',
    stats: { hp: 80, attack: 50, defense: 100, specialAttack: 100, specialDefense: 200, speed: 50 },
    moves: [
      { name: 'Localizza', type: PokemonElementType.normal, power: null, description: 'Chi la usa punta il bersaglio con precisione. La mossa successiva andrà a segno.' },
      { name: 'Falcecannone', type: PokemonElementType.electric, power: 120, description: 'Chi la usa provoca un’esplosione elettrica che infligge danni e paralizza il bersaglio.' },
      { name: 'Esplosione', type: PokemonElementType.normal, power: 250, description: 'Chi la usa esplode per infliggere danni agli altri Pokémon attorno, ma va KO.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'Chi la usa svuota per un po’ la mente per dimenticare i problemi. La Difesa Speciale aumenta di molto.' },
    ],
  },
  registeel: {
    flavorText: 'La pressione subita sottoterra per decine di migliaia di anni ha reso il suo corpo resistentissimo.',
    stats: { hp: 80, attack: 75, defense: 150, specialAttack: 75, specialDefense: 150, speed: 50 },
    moves: [
      { name: 'Localizza', type: PokemonElementType.normal, power: null, description: 'Chi la usa punta il bersaglio con precisione. La mossa successiva andrà a segno.' },
      { name: 'Falcecannone', type: PokemonElementType.electric, power: 120, description: 'Chi la usa provoca un’esplosione elettrica che infligge danni e paralizza il bersaglio.' },
      { name: 'Ferrartigli', type: PokemonElementType.steel, power: 50, description: 'Colpisce il bersaglio con artigli d’acciaio. Può anche aumentare l’Attacco di chi la usa.' },
      { name: 'Esplosione', type: PokemonElementType.normal, power: 250, description: 'Chi la usa esplode per infliggere danni agli altri Pokémon attorno, ma va KO.' },
    ],
  },
  latias: {
    flavorText: 'Sa comunicare telepaticamente. Le piume sul suo corpo riflettono la luce e lo rendono invisibile.',
    stats: { hp: 80, attack: 80, defense: 90, specialAttack: 110, specialDefense: 130, speed: 110 },
    moves: [
      { name: 'Foschisfera', type: PokemonElementType.psychic, power: 95, description: 'Una sfera di nebbia avvolge e danneggia il bersaglio. Può anche ridurne l’Attacco Speciale.' },
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Psiconda', type: PokemonElementType.psychic, power: null, description: 'Colpisce il bersaglio con una strana onda psichica. Ha un’intensità variabile.' },
      { name: 'Rinfrescata', type: PokemonElementType.normal, power: null, description: 'Chi la usa riposa per guarire da avvelenamento, paralisi e scottatura.' },
    ],
  },
  kyogre: {
    flavorText: 'Nella mitologia, Kyogre è il Pokémon che ha ampliato i mari con megaonde e megapiogge. Nemico di Groudon.',
    stats: { hp: 100, attack: 100, defense: 90, specialAttack: 150, specialDefense: 140, speed: 90 },
    moves: [
      { name: 'Zampillo', type: PokemonElementType.water, power: 150, description: 'Lancia un getto d’acqua contro il nemico che ha davanti e quelli adiacenti. La potenza è proporzionale al numero di PS di chi la usa.' },
      { name: 'Purogelo', type: PokemonElementType.ice, power: null, description: 'Ondata di freddo penetrante che, se va a segno, fa andare KO il bersaglio.' },
      { name: 'Forzantica', type: PokemonElementType.rock, power: 60, description: 'Colpisce il bersaglio con una forza primordiale. Può aumentare tutte le statistiche.' },
      { name: 'Idropompa', type: PokemonElementType.water, power: 110, description: 'Il bersaglio è travolto da un potente getto d’acqua spruzzato ad altissima pressione.' },
    ],
  },
  latios: {
    flavorText: 'Pokémon molto intelligente. Ripiegando indietro le ali, riesce a volare più veloce di un jet.',
    stats: { hp: 80, attack: 90, defense: 80, specialAttack: 130, specialDefense: 110, speed: 110 },
    moves: [
      { name: 'Abbagliante', type: PokemonElementType.psychic, power: 95, description: 'Chi la usa scatena un’esplosione abbagliante che può anche ridurre la Difesa Speciale del Pokémon colpito.' },
      { name: 'Psiconda', type: PokemonElementType.psychic, power: null, description: 'Colpisce il bersaglio con una strana onda psichica. Ha un’intensità variabile.' },
      { name: 'Rinfrescata', type: PokemonElementType.normal, power: null, description: 'Chi la usa riposa per guarire da avvelenamento, paralisi e scottatura.' },
      { name: 'Memento', type: PokemonElementType.dark, power: null, description: 'Chi la usa va KO. Tuttavia, riduce di molto l’Attacco e l’Attacco Speciale del bersaglio.' },
    ],
  },
  groudon: {
    flavorText: 'Si tramanda che fece evaporare l’acqua per aumentare la superficie terrestre. Nemico di Kyogre.',
    stats: { hp: 100, attack: 150, defense: 140, specialAttack: 100, specialDefense: 90, speed: 90 },
    moves: [
      { name: 'Eruzione', type: PokemonElementType.fire, power: 150, description: 'Attacco impetuoso ed esplosivo la cui potenza è proporzionale ai PS di chi lo usa.' },
      { name: 'Abisso', type: PokemonElementType.ground, power: null, description: 'Chi la usa crea una spaccatura nel terreno e cerca di gettarvici dentro il bersaglio. Se va a segno, il Pokémon colpito va KO.' },
      { name: 'Lacerazione', type: PokemonElementType.normal, power: 70, description: 'Attacca il bersaglio con artigli, falci o altro. Probabile brutto colpo.' },
      { name: 'Granfisico', type: PokemonElementType.fighting, power: null, description: 'Chi la usa tende i muscoli per gonfiare il corpo, aumentando Difesa e Attacco.' },
    ],
  },
  rayquaza: {
    flavorText: 'Vive nello strato di ozono oltre le nuvole e non può essere avvistato da terra.',
    stats: { hp: 105, attack: 150, defense: 90, specialAttack: 150, specialDefense: 90, speed: 95 },
    moves: [
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Dragodanza', type: PokemonElementType.dragon, power: null, description: 'Danza mistica e vigorosa che aumenta l’Attacco e la Velocità di chi la usa.' },
      { name: 'Tornado', type: PokemonElementType.dragon, power: 40, description: 'Un potente tornado si abbatte sui nemici nei paraggi. Può anche farli tentennare.' },
      { name: 'Dragartigli', type: PokemonElementType.dragon, power: 80, description: 'Chi la usa attacca con artigli affilati che graffiano il bersaglio rapidamente e con grande forza.' },
    ],
  },
  jirachi: {
    flavorText: 'Da sempre si dice che al risveglio realizzi i desideri scritti sulle striscioline attaccate in testa.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Obbliderio', type: PokemonElementType.steel, power: 140, description: 'Intensa luce solare che colpisce il bersaglio dopo due turni dall’uso della mossa.' },
      { name: 'Cosmoforza', type: PokemonElementType.psychic, power: null, description: 'Chi la usa assorbe una forza mistica dallo spazio che aumenta la Difesa e la Difesa Speciale.' },
      { name: 'Rinfrescata', type: PokemonElementType.normal, power: null, description: 'Chi la usa riposa per guarire da avvelenamento, paralisi e scottatura.' },
      { name: 'Desiderio', type: PokemonElementType.normal, power: null, description: 'Permette di recuperare metà dei PS massimi al turno successivo.' },
    ],
  },
  deoxys: {
    flavorText: 'È il risultato della mutazione genetica di un virus alieno giunto con un meteorite.',
    stats: { hp: 50, attack: 150, defense: 50, specialAttack: 150, specialDefense: 50, speed: 150 },
    moves: [
      { name: 'Psicoslancio', type: PokemonElementType.psychic, power: 140, description: 'Chi la usa sferra un potente attacco, ma il contraccolpo riduce di molto il suo Attacco Speciale.' },
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Teletrasporto', type: PokemonElementType.psychic, power: null, description: 'Fa fuggire dai Pokémon selvatici. Fuori dalla lotta porta all’ultimo Centro Pokémon visitato.' },
      { name: 'Cosmoforza', type: PokemonElementType.psychic, power: null, description: 'Chi la usa assorbe una forza mistica dallo spazio che aumenta la Difesa e la Difesa Speciale.' },
    ],
  },
  deoxys_speed: {
    flavorText: 'È il risultato della mutazione genetica di un virus alieno giunto con un meteorite.',
    stats: { hp: 50, attack: 95, defense: 90, specialAttack: 95, specialDefense: 90, speed: 180 },
    moves: [
      { name: 'Psicoslancio', type: PokemonElementType.psychic, power: 140, description: 'Chi la usa sferra un potente attacco, ma il contraccolpo riduce di molto il suo Attacco Speciale.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
    ],
  },
  deoxys_attack: {
    flavorText: 'È il risultato della mutazione genetica di un virus alieno giunto con un meteorite.',
    stats: { hp: 50, attack: 180, defense: 20, specialAttack: 180, specialDefense: 20, speed: 150 },
    moves: [
      { name: 'Psicoslancio', type: PokemonElementType.psychic, power: 140, description: 'Chi la usa sferra un potente attacco, ma il contraccolpo riduce di molto il suo Attacco Speciale.' },
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Teletrasporto', type: PokemonElementType.psychic, power: null, description: 'Fa fuggire dai Pokémon selvatici. Fuori dalla lotta porta all’ultimo Centro Pokémon visitato.' },
      { name: 'Cosmoforza', type: PokemonElementType.psychic, power: null, description: 'Chi la usa assorbe una forza mistica dallo spazio che aumenta la Difesa e la Difesa Speciale.' },
    ],
  },
  deoxys_defense: {
    flavorText: 'È il risultato della mutazione genetica di un virus alieno giunto con un meteorite.',
    stats: { hp: 50, attack: 70, defense: 160, specialAttack: 70, specialDefense: 160, speed: 90 },
    moves: [
      { name: 'Psicoslancio', type: PokemonElementType.psychic, power: 140, description: 'Chi la usa sferra un potente attacco, ma il contraccolpo riduce di molto il suo Attacco Speciale.' },
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Teletrasporto', type: PokemonElementType.psychic, power: null, description: 'Fa fuggire dai Pokémon selvatici. Fuori dalla lotta porta all’ultimo Centro Pokémon visitato.' },
      { name: 'Specchiovelo', type: PokemonElementType.psychic, power: null, description: 'Mossa che replica ogni attacco speciale, arrecando il doppio del danno ricevuto.' },
    ],
  },
  turtwig: {
    flavorText: 'Fa la fotosintesi su tutto il corpo esponendosi ai raggi solari. La sua corazza è fatta di terra compatta.',
    stats: { hp: 55, attack: 68, defense: 64, specialAttack: 45, specialDefense: 55, speed: 31 },
    moves: [
      { name: 'Ritirata', type: PokemonElementType.water, power: null, description: 'Il corpo si ritira nel suo duro guscio per aumentare la Difesa.' },
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
      { name: 'Assorbimento', type: PokemonElementType.grass, power: 20, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Megassorbimento', type: PokemonElementType.grass, power: 40, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
    ],
  },
  grotle: {
    flavorText: 'Vive nelle foreste vicino all’acqua, ma esce di giorno per far prendere sole alle piante sul guscio.',
    stats: { hp: 75, attack: 89, defense: 85, specialAttack: 55, specialDefense: 65, speed: 36 },
    moves: [
      { name: 'Ritirata', type: PokemonElementType.water, power: null, description: 'Il corpo si ritira nel suo duro guscio per aumentare la Difesa.' },
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
      { name: 'Assorbimento', type: PokemonElementType.grass, power: 20, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Megassorbimento', type: PokemonElementType.grass, power: 40, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
    ],
  },
  torterra: {
    flavorText: 'In tempi antichissimi la gente pensava che sottoterra ci fossero dei giganteschi Torterra.',
    stats: { hp: 95, attack: 109, defense: 105, specialAttack: 75, specialDefense: 85, speed: 56 },
    moves: [
      { name: 'Mazzuolegno', type: PokemonElementType.grass, power: 120, description: 'Chi la usa si lancia con tutto il corpo contro il bersaglio, ma subisce anche considerevoli danni.' },
      { name: 'Ritirata', type: PokemonElementType.water, power: null, description: 'Il corpo si ritira nel suo duro guscio per aumentare la Difesa.' },
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
      { name: 'Assorbimento', type: PokemonElementType.grass, power: 20, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
    ],
  },
  chimchar: {
    flavorText: 'Le fiamme sulla coda, alimentate dai gas della pancia, non si spengono neppure quando piove.',
    stats: { hp: 44, attack: 58, defense: 44, specialAttack: 58, specialDefense: 44, speed: 61 },
    moves: [
      { name: 'Pigro', type: PokemonElementType.normal, power: null, description: 'Chi la usa si rilassa recuperando metà dei propri PS massimi.' },
      { name: 'Ruotafuoco', type: PokemonElementType.fire, power: 60, description: 'Chi la usa si copre di fuoco e carica il bersaglio. Può anche scottarlo.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
    ],
  },
  monferno: {
    flavorText: 'Controlla abilmente l’intensità delle fiamme sulla sua coda per tenere i nemici alla distanza ideale.',
    stats: { hp: 64, attack: 78, defense: 52, specialAttack: 78, specialDefense: 52, speed: 81 },
    moves: [
      { name: 'Pigro', type: PokemonElementType.normal, power: null, description: 'Chi la usa si rilassa recuperando metà dei propri PS massimi.' },
      { name: 'Pugnorapido', type: PokemonElementType.fighting, power: 40, description: 'Chi la usa tira un pugno a una velocità impressionante e colpisce sempre per primo.' },
      { name: 'Ruotafuoco', type: PokemonElementType.fire, power: 60, description: 'Chi la usa si copre di fuoco e carica il bersaglio. Può anche scottarlo.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
    ],
  },
  infernape: {
    flavorText: 'La sua criniera di fuoco è indice della sua natura violenta. Nessuno può batterlo in velocità.',
    stats: { hp: 76, attack: 104, defense: 71, specialAttack: 104, specialDefense: 71, speed: 108 },
    moves: [
      { name: 'Pugnorapido', type: PokemonElementType.fighting, power: 40, description: 'Chi la usa tira un pugno a una velocità impressionante e colpisce sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ruotafuoco', type: PokemonElementType.fire, power: 60, description: 'Chi la usa si copre di fuoco e carica il bersaglio. Può anche scottarlo.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
    ],
  },
  piplup: {
    flavorText: 'Molto orgoglioso. Difficile farci amicizia perché non ascolta mai i consigli dell’Allenatore.',
    stats: { hp: 53, attack: 51, defense: 53, specialAttack: 61, specialDefense: 56, speed: 40 },
    moves: [
      { name: 'Perforbecco', type: PokemonElementType.flying, power: 80, description: 'Attacco a spirale con un becco aguzzo che fa da trapano.' },
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
    ],
  },
  prinplup: {
    flavorText: 'Vive da solo lontano dagli altri. Apparentemente ogni esemplare crede di essere il più importante.',
    stats: { hp: 64, attack: 66, defense: 68, specialAttack: 81, specialDefense: 76, speed: 50 },
    moves: [
      { name: 'Perforbecco', type: PokemonElementType.flying, power: 80, description: 'Attacco a spirale con un becco aguzzo che fa da trapano.' },
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
    ],
  },
  empoleon: {
    flavorText: 'Nuota veloce come una moto d’acqua. Le estremità delle ali sono aguzze e spaccano anche il ghiaccio.',
    stats: { hp: 84, attack: 86, defense: 88, specialAttack: 111, specialDefense: 101, speed: 60 },
    moves: [
      { name: 'Perforbecco', type: PokemonElementType.flying, power: 80, description: 'Attacco a spirale con un becco aguzzo che fa da trapano.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Acquagetto', type: PokemonElementType.water, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
    ],
  },
  starly: {
    flavorText: 'Si muove in grandi gruppi. Anche se piccolo, batte le ali in maniera molto energica.',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 60 },
    moves: [
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Turbine', type: PokemonElementType.normal, power: null, description: 'Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici.' },
      { name: 'Baldeali', type: PokemonElementType.flying, power: 120, description: 'Chi la usa si nasconde sotto le ali e carica da bassa quota. Tuttavia, subisce considerevoli danni.' },
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
    ],
  },
  staravia: {
    flavorText: 'Ha l’abitudine di riunirsi in grandi gruppi. Le zuffe tra gruppi sono particolarmente vivaci.',
    stats: { hp: 55, attack: 75, defense: 50, specialAttack: 40, specialDefense: 40, speed: 80 },
    moves: [
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Turbine', type: PokemonElementType.normal, power: null, description: 'Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici.' },
      { name: 'Baldeali', type: PokemonElementType.flying, power: 120, description: 'Chi la usa si nasconde sotto le ali e carica da bassa quota. Tuttavia, subisce considerevoli danni.' },
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
    ],
  },
  staraptor: {
    flavorText: 'I muscoli di ali e zampe sono molto sviluppati. Vola senza fatica anche portando un piccolo Pokémon.',
    stats: { hp: 85, attack: 120, defense: 70, specialAttack: 50, specialDefense: 60, speed: 100 },
    moves: [
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Turbine', type: PokemonElementType.normal, power: null, description: 'Il bersaglio lascia il campo e viene sostituito. Mette fine alle lotte contro singoli Pokémon selvatici.' },
      { name: 'Baldeali', type: PokemonElementType.flying, power: 120, description: 'Chi la usa si nasconde sotto le ali e carica da bassa quota. Tuttavia, subisce considerevoli danni.' },
      { name: 'Zuffa', type: PokemonElementType.fighting, power: 120, description: 'Chi la usa attacca abbassando la guardia. La propria Difesa e la Difesa Speciale si riducono.' },
    ],
  },
  bidoof: {
    flavorText: 'Ha i nervi d’acciaio e niente può turbarlo. È più agile e attivo di quanto sembri.',
    stats: { hp: 59, attack: 45, defense: 40, specialAttack: 35, specialDefense: 40, speed: 31 },
    moves: [
      { name: 'Iperzanna', type: PokemonElementType.normal, power: 80, description: 'Chi la usa morde il bersaglio con i suoi incisivi affilati. Può anche farlo tentennare.' },
      { name: 'Superzanna', type: PokemonElementType.normal, power: null, description: 'Chi la usa salta sul bersaglio azzannandolo con i suoi incisivi affilati e facendogli perdere metà dei PS.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'Chi la usa svuota per un po’ la mente per dimenticare i problemi. La Difesa Speciale aumenta di molto.' },
    ],
  },
  bibarel: {
    flavorText: 'Costruisce con zelo la tana in riva ai corsi d’acqua, levigando radici e rami con gli affilati incisivi.',
    stats: { hp: 79, attack: 85, defense: 60, specialAttack: 55, specialDefense: 60, speed: 71 },
    moves: [
      { name: 'Iperzanna', type: PokemonElementType.normal, power: 80, description: 'Chi la usa morde il bersaglio con i suoi incisivi affilati. Può anche farlo tentennare.' },
      { name: 'Superzanna', type: PokemonElementType.normal, power: null, description: 'Chi la usa salta sul bersaglio azzannandolo con i suoi incisivi affilati e facendogli perdere metà dei PS.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'Chi la usa svuota per un po’ la mente per dimenticare i problemi. La Difesa Speciale aumenta di molto.' },
    ],
  },
  kricketot: {
    flavorText: 'Comunica con il suono prodotto dallo scontro delle sue antenne. Esso indica l’arrivo dell’autunno.',
    stats: { hp: 37, attack: 25, defense: 41, specialAttack: 25, specialDefense: 41, speed: 25 },
    moves: [
      { name: 'Coleomorso', type: PokemonElementType.bug, power: 60, description: 'Chi la usa morde il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti.' },
      { name: 'Pazienza', type: PokemonElementType.normal, power: null, description: 'Chi la usa subisce attacchi per due turni e poi restituisce il danno moltiplicato per due.' },
      { name: 'Ruggito', type: PokemonElementType.normal, power: null, description: 'Distrae i nemici intorno con un ruggito potente e ne riduce l’Attacco.' },
    ],
  },
  kricketune: {
    flavorText: 'Quando canta tiene le zampe incrociate al petto. Sa improvvisare melodie.',
    stats: { hp: 77, attack: 85, defense: 51, specialAttack: 55, specialDefense: 51, speed: 65 },
    moves: [
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
      { name: 'Ronzio', type: PokemonElementType.bug, power: 90, description: 'Chi la usa fa vibrare le ali creando un’onda sonora pericolosa. Può anche ridurre la Difesa Speciale del bersaglio.' },
      { name: 'Sanguisuga', type: PokemonElementType.bug, power: 80, description: 'Mossa succhiasangue. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
    ],
  },
  shinx: {
    flavorText: 'Produce elettricità contraendo e rilassando i muscoli. Quando si sente minacciato si illumina.',
    stats: { hp: 45, attack: 65, defense: 34, specialAttack: 40, specialDefense: 34, speed: 45 },
    moves: [
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
      { name: 'Fulmindenti', type: PokemonElementType.electric, power: 65, description: 'Chi la usa morde con denti elettrificati che possono anche paralizzare o far tentennare il bersaglio.' },
    ],
  },
  luxio: {
    flavorText: 'Dagli artigli rilascia un’elettricità talmente intensa da mandare KO il nemico. Vive in piccoli gruppi.',
    stats: { hp: 60, attack: 85, defense: 49, specialAttack: 60, specialDefense: 49, speed: 60 },
    moves: [
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
      { name: 'Fulmindenti', type: PokemonElementType.electric, power: 65, description: 'Chi la usa morde con denti elettrificati che possono anche paralizzare o far tentennare il bersaglio.' },
    ],
  },
  luxray: {
    flavorText: 'Se i suoi occhi sono dorati, può individuare le prede, anche quelle che si nascondono dietro i muri.',
    stats: { hp: 80, attack: 120, defense: 79, specialAttack: 95, specialDefense: 79, speed: 70 },
    moves: [
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
      { name: 'Fulmindenti', type: PokemonElementType.electric, power: 65, description: 'Chi la usa morde con denti elettrificati che possono anche paralizzare o far tentennare il bersaglio.' },
    ],
  },
  budew: {
    flavorText: 'I raggi del sole gli fanno schiudere la gemma e rilasciare polline. Fa la tana vicino a bei corsi d’acqua.',
    stats: { hp: 40, attack: 30, defense: 35, specialAttack: 50, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Paralizzante', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una nuvola di polvere che paralizza.' },
      { name: 'Crescita', type: PokemonElementType.normal, power: null, description: 'Provoca la crescita immediata del corpo e l’aumento dell’Attacco e dell’Attacco Speciale di chi la usa.' },
      { name: 'Assorbimento', type: PokemonElementType.grass, power: 20, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
    ],
  },
  roserade: {
    flavorText: 'Attira la preda con il suo profumo soave per poi afferrarla e abbatterla con gli arti velenosi.',
    stats: { hp: 60, attack: 70, defense: 65, specialAttack: 125, specialDefense: 105, speed: 90 },
    moves: [
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Profumino', type: PokemonElementType.normal, power: null, description: 'Un dolce profumo che riduce di molto l’elusione dei nemici intorno a chi la usa. Fuori dalla lotta attira i Pokémon selvatici.' },
      { name: 'Megassorbimento', type: PokemonElementType.grass, power: 40, description: 'Mossa che assorbe PS. Chi la usa recupera una quantità di PS pari alla metà del danno inferto.' },
      { name: 'Fogliamagica', type: PokemonElementType.grass, power: 60, description: 'Chi la usa sparpaglia strane foglie che inseguono il bersaglio. Questa mossa è infallibile.' },
    ],
  },
  cranidos: {
    flavorText: 'È stato fatto rivivere da un fossile di ferro simile a una palla. Abbatte le prede con le punte sulla testa.',
    stats: { hp: 67, attack: 125, defense: 40, specialAttack: 30, specialDefense: 30, speed: 58 },
    moves: [
      { name: 'Zuccata', type: PokemonElementType.rock, power: 150, description: 'Chi la usa attacca con tutta la potenza di cui dispone, ma subisce danni considerevoli.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
      { name: 'Focalenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un profondo respiro e si concentra per rendere più probabili i brutti colpi.' },
      { name: 'Forzantica', type: PokemonElementType.rock, power: 60, description: 'Colpisce il bersaglio con una forza primordiale. Può aumentare tutte le statistiche.' },
    ],
  },
  rampardos: {
    flavorText: 'Il suo spesso cranio, che sopporta qualunque impatto, è ridotto, e il cervello non si è sviluppato.',
    stats: { hp: 97, attack: 165, defense: 60, specialAttack: 65, specialDefense: 50, speed: 58 },
    moves: [
      { name: 'Zuccata', type: PokemonElementType.rock, power: 150, description: 'Chi la usa attacca con tutta la potenza di cui dispone, ma subisce danni considerevoli.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
      { name: 'Focalenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un profondo respiro e si concentra per rendere più probabili i brutti colpi.' },
      { name: 'Forzantica', type: PokemonElementType.rock, power: 60, description: 'Colpisce il bersaglio con una forza primordiale. Può aumentare tutte le statistiche.' },
    ],
  },
  shieldon: {
    flavorText: 'Si pulisce il muso strofinandolo contro i tronchi degli alberi. È vulnerabile agli attacchi alle spalle.',
    stats: { hp: 30, attack: 42, defense: 118, specialAttack: 42, specialDefense: 88, speed: 30 },
    moves: [
      { name: 'Metalscoppio', type: PokemonElementType.steel, power: null, description: 'Chi la usa si vendica sul nemico che l’ha appena ferito con una mossa anche più potente.' },
      { name: 'Ferrostrido', type: PokemonElementType.steel, power: null, description: 'Orribile stridio, simile a quello prodotto dal metallo, che riduce di molto la Difesa Speciale del bersaglio.' },
      { name: 'Forzantica', type: PokemonElementType.rock, power: 60, description: 'Colpisce il bersaglio con una forza primordiale. Può aumentare tutte le statistiche.' },
      { name: 'Metaltestata', type: PokemonElementType.steel, power: 80, description: 'Chi la usa colpisce il bersaglio con la sua testa dura come l’acciaio. Può anche farlo tentennare.' },
    ],
  },
  bastiodon: {
    flavorText: 'Se si mettono uno di fianco all’altro nessun nemico riesce a passare. Proteggono così i loro cuccioli.',
    stats: { hp: 60, attack: 52, defense: 168, specialAttack: 47, specialDefense: 138, speed: 30 },
    moves: [
      { name: 'Metalscoppio', type: PokemonElementType.steel, power: null, description: 'Chi la usa si vendica sul nemico che l’ha appena ferito con una mossa anche più potente.' },
      { name: 'Ferrostrido', type: PokemonElementType.steel, power: null, description: 'Orribile stridio, simile a quello prodotto dal metallo, che riduce di molto la Difesa Speciale del bersaglio.' },
      { name: 'Blocco', type: PokemonElementType.normal, power: null, description: 'Chi la usa sbarra la strada al bersaglio impedendone la fuga o la sostituzione.' },
      { name: 'Forzantica', type: PokemonElementType.rock, power: 60, description: 'Colpisce il bersaglio con una forza primordiale. Può aumentare tutte le statistiche.' },
    ],
  },
  burmy_plant: {
    flavorText: 'Per ripararsi dal freddo e dai venti invernali si copre con un manto fatto di rami e foglie.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'Coleomorso', type: PokemonElementType.bug, power: 60, description: 'Chi la usa morde il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti.' },
      { name: 'Azione', type: PokemonElementType.normal, power: 40, description: 'Attacco fisico che colpisce il bersaglio investendolo con tutto il corpo.' },
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
      { name: 'Protezione', type: PokemonElementType.normal, power: null, description: 'Permette di eludere tutti gli attacchi. Se usata in successione può fallire.' },
    ],
  },
  burmy_sandy: {
    flavorText: 'Per ripararsi dal freddo e dai venti invernali si copre con un manto fatto di rami e foglie.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'Coleomorso', type: PokemonElementType.bug, power: 60, description: 'Chi la usa morde il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti.' },
      { name: 'Azione', type: PokemonElementType.normal, power: 40, description: 'Attacco fisico che colpisce il bersaglio investendolo con tutto il corpo.' },
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
      { name: 'Protezione', type: PokemonElementType.normal, power: null, description: 'Permette di eludere tutti gli attacchi. Se usata in successione può fallire.' },
    ],
  },
  burmy_trash: {
    flavorText: 'Per ripararsi dal freddo e dai venti invernali si copre con un manto fatto di rami e foglie.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'Coleomorso', type: PokemonElementType.bug, power: 60, description: 'Chi la usa morde il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti.' },
      { name: 'Azione', type: PokemonElementType.normal, power: 40, description: 'Attacco fisico che colpisce il bersaglio investendolo con tutto il corpo.' },
      { name: 'Introforza', type: PokemonElementType.normal, power: 60, description: 'Mossa singolare che cambia tipo a seconda del Pokémon che la usa.' },
      { name: 'Protezione', type: PokemonElementType.normal, power: null, description: 'Permette di eludere tutti gli attacchi. Se usata in successione può fallire.' },
    ],
  },
  wormadam_plant: {
    flavorText: 'Il suo aspetto dipende dal luogo in cui si evolve. Tutto ciò che ha intorno va a costituire il suo corpo.',
    stats: { hp: 60, attack: 59, defense: 85, specialAttack: 79, specialDefense: 105, speed: 36 },
    moves: [
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
      { name: 'Crescita', type: PokemonElementType.normal, power: null, description: 'Provoca la crescita immediata del corpo e l’aumento dell’Attacco e dell’Attacco Speciale di chi la usa.' },
      { name: 'Coleomorso', type: PokemonElementType.bug, power: 60, description: 'Chi la usa morde il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti.' },
      { name: 'Verdebufera', type: PokemonElementType.grass, power: 130, description: 'Si forma una tempesta di foglie affilate. Il contraccolpo riduce di molto l’Attacco Speciale di chi la usa.' },
    ],
  },
  wormadam_sandy: {
    flavorText: 'Il suo aspetto dipende dal luogo in cui si evolve. Tutto ciò che ha intorno va a costituire il suo corpo.',
    stats: { hp: 60, attack: 79, defense: 105, specialAttack: 59, specialDefense: 85, speed: 36 },
    moves: [
      { name: 'Abisso', type: PokemonElementType.ground, power: null, description: 'Chi la usa crea una spaccatura nel terreno e cerca di gettarvici dentro il bersaglio. Se va a segno, il Pokémon colpito va KO.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
      { name: 'Coleomorso', type: PokemonElementType.bug, power: 60, description: 'Chi la usa morde il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
    ],
  },
  wormadam_trash: {
    flavorText: 'Il suo aspetto dipende dal luogo in cui si evolve. Tutto ciò che ha intorno va a costituire il suo corpo.',
    stats: { hp: 60, attack: 69, defense: 95, specialAttack: 69, specialDefense: 95, speed: 36 },
    moves: [
      { name: 'Cristalcolpo', type: PokemonElementType.steel, power: 65, description: 'Chi la usa rilascia fasci d’energia dal corpo levigato. Può anche ridurre la precisione del bersaglio.' },
      { name: 'Ferrostrido', type: PokemonElementType.steel, power: null, description: 'Orribile stridio, simile a quello prodotto dal metallo, che riduce di molto la Difesa Speciale del bersaglio.' },
      { name: 'Coleomorso', type: PokemonElementType.bug, power: 60, description: 'Chi la usa morde il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
    ],
  },
  mothim: {
    flavorText: 'Ama il nettare dei fiori. Ruba e mangia il nettare raccolto da Combee.',
    stats: { hp: 70, attack: 94, defense: 50, specialAttack: 94, specialDefense: 50, speed: 66 },
    moves: [
      { name: 'Camuffamento', type: PokemonElementType.normal, power: null, description: 'Modifica il tipo di chi la usa a seconda del luogo, ad esempio sull’acqua, nell’erba o in una grotta.' },
      { name: 'Velenpolvere', type: PokemonElementType.poison, power: null, description: 'Investe il bersaglio con una nuvola di polvere tossica che avvelena.' },
      { name: 'Ventargenteo', type: PokemonElementType.bug, power: 60, description: 'Attacca con un forte vento di polvere di squame. Tutte le statistiche di chi la usa possono salire.' },
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
    ],
  },
  combee_female: {
    flavorText: 'Il trio è insieme dalla nascita. È sempre impegnato a portare il nettare dei fiori a Vespiquen.',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
      { name: 'Profumino', type: PokemonElementType.normal, power: null, description: 'Un dolce profumo che riduce di molto l’elusione dei nemici intorno a chi la usa. Fuori dalla lotta attira i Pokémon selvatici.' },
      { name: 'Coleomorso', type: PokemonElementType.bug, power: 60, description: 'Chi la usa morde il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti.' },
    ],
  },
  combee_male: {
    flavorText: 'Il trio è insieme dalla nascita. È sempre impegnato a portare il nettare dei fiori a Vespiquen.',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
      { name: 'Profumino', type: PokemonElementType.normal, power: null, description: 'Un dolce profumo che riduce di molto l’elusione dei nemici intorno a chi la usa. Fuori dalla lotta attira i Pokémon selvatici.' },
      { name: 'Coleomorso', type: PokemonElementType.bug, power: 60, description: 'Chi la usa morde il bersaglio. Inoltre, se questi ha una bacca, gliela ruba e ne sfrutta gli effetti.' },
    ],
  },
  vespiquen: {
    flavorText: 'Nell’addome ospita la sua progenie, sulla quale esercita un controllo assoluto tramite i feromoni che rilascia.',
    stats: { hp: 70, attack: 80, defense: 102, specialAttack: 80, specialDefense: 102, speed: 40 },
    moves: [
      { name: 'Comandourto', type: PokemonElementType.bug, power: 90, description: 'Chi la usa raduna i suoi sgherri per colpire il bersaglio. Probabile brutto colpo.' },
      { name: 'Comandocura', type: PokemonElementType.bug, power: null, description: 'Chi la usa raduna i suoi sgherri per farsi curare. Recupera metà dei PS massimi.' },
      { name: 'Comandoscudo', type: PokemonElementType.bug, power: null, description: 'Chi la usa raduna i suoi sgherri per creare uno scudo, aumentando Difesa e Difesa Speciale.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
    ],
  },
  pachirisu: {
    flavorText: 'Forma delle palle di pelo cariche elettrostaticamente e le conserva negli alberi insieme alle bacche.',
    stats: { hp: 60, attack: 45, defense: 70, specialAttack: 45, specialDefense: 90, speed: 95 },
    moves: [
      { name: 'Dolcebacio', type: PokemonElementType.normal, power: null, description: 'Chi la usa bacia il bersaglio con una dolcezza angelica, confondendolo.' },
      { name: 'Scintilla', type: PokemonElementType.electric, power: 65, description: 'Colpisce il bersaglio con una scarica elettrica e può anche paralizzarlo.' },
      { name: 'Superzanna', type: PokemonElementType.normal, power: null, description: 'Chi la usa salta sul bersaglio azzannandolo con i suoi incisivi affilati e facendogli perdere metà dei PS.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
    ],
  },
  buizel: {
    flavorText: 'Nuota roteando le due code come fossero viti. Quando si immerge, il suo galleggiante si sgonfia.',
    stats: { hp: 55, attack: 65, defense: 35, specialAttack: 60, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'Sonicboom', type: PokemonElementType.normal, power: null, description: 'Il bersaglio viene colpito da onde acustiche devastanti che gli provocano un danno pari a 20 PS.' },
      { name: 'Ventagliente', type: PokemonElementType.normal, power: 80, description: 'Chi la usa genera un turbine al primo turno e attacca al secondo. Probabile brutto colpo.' },
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Acquagetto', type: PokemonElementType.water, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
    ],
  },
  floatzel: {
    flavorText: 'Nuota con il suo grosso galleggiante e aiuta a soccorrere chi sta per annegare.',
    stats: { hp: 85, attack: 105, defense: 55, specialAttack: 85, specialDefense: 50, speed: 115 },
    moves: [
      { name: 'Sonicboom', type: PokemonElementType.normal, power: null, description: 'Il bersaglio viene colpito da onde acustiche devastanti che gli provocano un danno pari a 20 PS.' },
      { name: 'Ventagliente', type: PokemonElementType.normal, power: 80, description: 'Chi la usa genera un turbine al primo turno e attacca al secondo. Probabile brutto colpo.' },
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Acquagetto', type: PokemonElementType.water, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
    ],
  },
  cherubi: {
    flavorText: 'La luce solare lo tinge di rosso. Se la pallina esaurisce i nutrimenti, si avvizzisce indicando l’evoluzione.',
    stats: { hp: 45, attack: 35, defense: 45, specialAttack: 62, specialDefense: 53, speed: 35 },
    moves: [
      { name: 'Fortuncanto', type: PokemonElementType.normal, power: null, description: 'Chi la usa rivolge un incantesimo al cielo, impedendo al nemico di sferrare brutti colpi alla squadra.' },
      { name: 'Crescita', type: PokemonElementType.normal, power: null, description: 'Provoca la crescita immediata del corpo e l’aumento dell’Attacco e dell’Attacco Speciale di chi la usa.' },
      { name: 'Parassiseme', type: PokemonElementType.grass, power: null, description: 'Vengono piantati semi sul bersaglio. Questi sottraggono PS a ogni turno permettendo a chi la usa di curarsi.' },
      { name: 'Affannoseme', type: PokemonElementType.grass, power: null, description: 'Un seme che causa ansia viene piantato sul bersaglio. Ne muta l’abilità in Insonnia e ne previene o rimuove il sonno.' },
    ],
  },
  cherrim: {
    flavorText: 'Sboccia quando si espone ai raggi solari, espandendo la corolla e diventando molto attivo.',
    stats: { hp: 70, attack: 60, defense: 70, specialAttack: 87, specialDefense: 78, speed: 85 },
    moves: [
      { name: 'Petalodanza', type: PokemonElementType.grass, power: 120, description: 'Attacca il nemico cospargendolo di petali per due o tre turni, ma chi la usa rimane confuso.' },
      { name: 'Fortuncanto', type: PokemonElementType.normal, power: null, description: 'Chi la usa rivolge un incantesimo al cielo, impedendo al nemico di sferrare brutti colpi alla squadra.' },
      { name: 'Crescita', type: PokemonElementType.normal, power: null, description: 'Provoca la crescita immediata del corpo e l’aumento dell’Attacco e dell’Attacco Speciale di chi la usa.' },
      { name: 'Parassiseme', type: PokemonElementType.grass, power: null, description: 'Vengono piantati semi sul bersaglio. Questi sottraggono PS a ogni turno permettendo a chi la usa di curarsi.' },
    ],
  },
  shellos_east: {
    flavorText: 'Se si esercita una forte pressione sul suo corpo, ne fuoriesce un misterioso liquido viola.',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: 'Pantanobomba', type: PokemonElementType.ground, power: 65, description: 'Chi la usa lancia una compatta palla di fango. Può anche ridurre la precisione del Pokémon colpito.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  shellos_west: {
    flavorText: 'Se si esercita una forte pressione sul suo corpo, ne fuoriesce un misterioso liquido viola.',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: 'Pantanobomba', type: PokemonElementType.ground, power: 65, description: 'Chi la usa lancia una compatta palla di fango. Può anche ridurre la precisione del Pokémon colpito.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  gastrodon_east: {
    flavorText: 'Se minacciato da un nemico naturale rilascia un liquido viola e se la dà a gambe, per così dire...',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: 'Pantanobomba', type: PokemonElementType.ground, power: 65, description: 'Chi la usa lancia una compatta palla di fango. Può anche ridurre la precisione del Pokémon colpito.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  gastrodon_west: {
    flavorText: 'Se minacciato da un nemico naturale rilascia un liquido viola e se la dà a gambe, per così dire...',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: 'Pantanobomba', type: PokemonElementType.ground, power: 65, description: 'Chi la usa lancia una compatta palla di fango. Può anche ridurre la precisione del Pokémon colpito.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
      { name: 'Ripresa', type: PokemonElementType.normal, power: null, description: 'Mossa autocurativa. Chi la usa recupera metà dei PS massimi.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
    ],
  },
  ambipom: {
    flavorText: 'Vivono in colonie numerose e formano anelli legando le loro code in segno di amicizia.',
    stats: { hp: 75, attack: 100, defense: 66, specialAttack: 60, specialDefense: 66, speed: 115 },
    moves: [
      { name: 'Doppiosmash', type: PokemonElementType.normal, power: 35, description: 'Chi la usa colpisce il bersaglio due volte di fila con la coda, una liana o simili.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Solletico', type: PokemonElementType.normal, power: null, description: 'Chi la usa solletica il bersaglio e lo fa ridere, riducendo il suo Attacco e la sua Difesa.' },
      { name: 'Graffio', type: PokemonElementType.normal, power: 40, description: 'Infligge danni al bersaglio con artigli acuminati, duri e affilati.' },
    ],
  },
  drifloon: {
    flavorText: 'Pokémon formato dalle anime di persone e Pokémon. Ama le stagioni umide.',
    stats: { hp: 90, attack: 50, defense: 34, specialAttack: 60, specialDefense: 44, speed: 70 },
    moves: [
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Minimizzato', type: PokemonElementType.normal, power: null, description: 'Il corpo di chi la usa si comprime e diventa più piccolo. La sua capacità di elusione aumenta di molto.' },
      { name: 'Sfoghenergia', type: PokemonElementType.normal, power: null, description: 'Tutta l’energia accumulata in precedenza con Accumulo è rilasciata nell’attacco. Maggiore è l’energia, più danni si arrecano.' },
      { name: 'Introenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa assorbe l’energia raccolta con la mossa Accumulo e recupera PS. Maggiore è l’energia, più PS si recuperano.' },
    ],
  },
  drifblim: {
    flavorText: 'Vola trascinando persone e Pokémon. Poiché si fa portare dal vento, non si sa dove vada a finire.',
    stats: { hp: 150, attack: 80, defense: 44, specialAttack: 90, specialDefense: 54, speed: 80 },
    moves: [
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Minimizzato', type: PokemonElementType.normal, power: null, description: 'Il corpo di chi la usa si comprime e diventa più piccolo. La sua capacità di elusione aumenta di molto.' },
      { name: 'Sfoghenergia', type: PokemonElementType.normal, power: null, description: 'Tutta l’energia accumulata in precedenza con Accumulo è rilasciata nell’attacco. Maggiore è l’energia, più danni si arrecano.' },
      { name: 'Introenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa assorbe l’energia raccolta con la mossa Accumulo e recupera PS. Maggiore è l’energia, più PS si recuperano.' },
    ],
  },
  buneary: {
    flavorText: 'Le sue orecchie sono sempre arrotolate. Può estenderle con forza per distruggere qualsiasi cosa.',
    stats: { hp: 55, attack: 66, defense: 44, specialAttack: 44, specialDefense: 56, speed: 85 },
    moves: [
      { name: 'Calciosalto', type: PokemonElementType.fighting, power: 100, description: 'Permette di saltare in alto per attaccare con un calcio. Se non va a buon fine, chi la usa si ferisce.' },
      { name: 'Stordipugno', type: PokemonElementType.normal, power: 70, description: 'Colpisce il bersaglio con una sequenza di pugni che può anche confonderlo.' },
      { name: 'Curardore', type: PokemonElementType.psychic, power: null, description: 'Chi la usa va KO, ma il Pokémon che lo sostituisce recupera tutti i PS e guarisce dai problemi di stato.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'Chi la usa sguazza nell’acqua, senza ottenere alcun effetto.' },
    ],
  },
  lopunny: {
    flavorText: 'È un Pokémon estremamente cauto. Se avverte un pericolo, si dà subito alla fuga saltellando.',
    stats: { hp: 65, attack: 76, defense: 84, specialAttack: 54, specialDefense: 96, speed: 105 },
    moves: [
      { name: 'Calciosalto', type: PokemonElementType.fighting, power: 100, description: 'Permette di saltare in alto per attaccare con un calcio. Se non va a buon fine, chi la usa si ferisce.' },
      { name: 'Stordipugno', type: PokemonElementType.normal, power: 70, description: 'Colpisce il bersaglio con una sequenza di pugni che può anche confonderlo.' },
      { name: 'Curardore', type: PokemonElementType.psychic, power: null, description: 'Chi la usa va KO, ma il Pokémon che lo sostituisce recupera tutti i PS e guarisce dai problemi di stato.' },
      { name: 'Splash', type: PokemonElementType.normal, power: null, description: 'Chi la usa sguazza nell’acqua, senza ottenere alcun effetto.' },
    ],
  },
  mismagius: {
    flavorText: 'Recita incantesimi che tormentano il nemico. Tuttavia, alcune formule portano felicità.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 105, specialDefense: 105, speed: 105 },
    moves: [
      { name: 'Fortuncanto', type: PokemonElementType.normal, power: null, description: 'Chi la usa rivolge un incantesimo al cielo, impedendo al nemico di sferrare brutti colpi alla squadra.' },
      { name: 'Psiconda', type: PokemonElementType.psychic, power: null, description: 'Colpisce il bersaglio con una strana onda psichica. Ha un’intensità variabile.' },
      { name: 'Fogliamagica', type: PokemonElementType.grass, power: 60, description: 'Chi la usa sparpaglia strane foglie che inseguono il bersaglio. Questa mossa è infallibile.' },
      { name: 'Sgomento', type: PokemonElementType.ghost, power: 30, description: 'Chi la usa attacca il bersaglio emettendo un verso terrificante. Può anche farlo tentennare.' },
    ],
  },
  honchkrow: {
    flavorText: 'Se emette un verso profondo, molti Murkrow accorrono all’istante. È detto “Evocatore della notte”.',
    stats: { hp: 100, attack: 125, defense: 52, specialAttack: 105, specialDefense: 52, speed: 71 },
    moves: [
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Inseguimento', type: PokemonElementType.dark, power: 40, description: 'Una mossa d’attacco che infligge un danno doppio se il bersaglio è in fase di sostituzione.' },
      { name: 'Nottesferza', type: PokemonElementType.dark, power: 70, description: 'Chi la usa colpisce il bersaglio appena si presenta l’occasione. Probabile brutto colpo.' },
      { name: 'Nube', type: PokemonElementType.ice, power: null, description: 'Chi la usa crea una nube nera che annulla ogni modifica alle statistiche di tutti i Pokémon in campo.' },
    ],
  },
  glameow: {
    flavorText: 'Se disturbato, tira fuori gli artigli; se soddisfatto, fa le fusa. La sua incostanza piace a molti.',
    stats: { hp: 49, attack: 55, defense: 42, specialAttack: 42, specialDefense: 37, speed: 85 },
    moves: [
      { name: 'Assistente', type: PokemonElementType.normal, power: null, description: 'Chi la usa utilizza in fretta e a caso una delle mosse degli altri Pokémon della squadra.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Bruciapelo', type: PokemonElementType.normal, power: 40, description: 'Mossa che fa agire per primi e fa tentennare il bersaglio. Funziona solo appena scesi in campo.' },
    ],
  },
  purugly: {
    flavorText: 'Si introduce sfacciatamente nelle tane degli altri Pokémon rivendicandole poi come proprie.',
    stats: { hp: 71, attack: 82, defense: 64, specialAttack: 64, specialDefense: 59, speed: 112 },
    moves: [
      { name: 'Assistente', type: PokemonElementType.normal, power: null, description: 'Chi la usa utilizza in fretta e a caso una delle mosse degli altri Pokémon della squadra.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Bruciapelo', type: PokemonElementType.normal, power: 40, description: 'Mossa che fa agire per primi e fa tentennare il bersaglio. Funziona solo appena scesi in campo.' },
    ],
  },
  chingling: {
    flavorText: 'A ogni salto produce un suono che sembra uno squillo. I suoi versi ad alta frequenza assordano i nemici.',
    stats: { hp: 45, attack: 30, defense: 50, specialAttack: 65, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
      { name: 'Sgomento', type: PokemonElementType.ghost, power: 30, description: 'Chi la usa attacca il bersaglio emettendo un verso terrificante. Può anche farlo tentennare.' },
      { name: 'Ultimascelta', type: PokemonElementType.normal, power: 140, description: 'Per usare questa mossa, bisogna prima avvalersi in lotta di tutte le altre mosse conosciute.' },
    ],
  },
  stunky: {
    flavorText: 'Emette un fluido puzzolente dal posteriore. Il tanfo si sparge per 2 km e tiene lontani i Pokémon.',
    stats: { hp: 63, attack: 63, defense: 47, specialAttack: 41, specialDefense: 41, speed: 74 },
    moves: [
      { name: 'Velenogas', type: PokemonElementType.poison, power: null, description: 'Spruzza in faccia ai nemici che ha intorno una nuvola di gas tossico che avvelena.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
      { name: 'Memento', type: PokemonElementType.dark, power: null, description: 'Chi la usa va KO. Tuttavia, riduce di molto l’Attacco e l’Attacco Speciale del bersaglio.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
    ],
  },
  skuntank: {
    flavorText: 'Attacca spruzzando un fluido puzzolente dalla coda. Ha un raggio d’azione di oltre 50 m.',
    stats: { hp: 103, attack: 93, defense: 67, specialAttack: 71, specialDefense: 61, speed: 84 },
    moves: [
      { name: 'Velenogas', type: PokemonElementType.poison, power: null, description: 'Spruzza in faccia ai nemici che ha intorno una nuvola di gas tossico che avvelena.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
      { name: 'Memento', type: PokemonElementType.dark, power: null, description: 'Chi la usa va KO. Tuttavia, riduce di molto l’Attacco e l’Attacco Speciale del bersaglio.' },
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
    ],
  },
  bronzor: {
    flavorText: 'Nell’antichità si credeva che una forza misteriosa dimorasse nei disegni sul dorso di Bronzor.',
    stats: { hp: 57, attack: 24, defense: 86, specialAttack: 24, specialDefense: 86, speed: 23 },
    moves: [
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Chi la usa impedisce ai nemici che ha intorno di utilizzare mosse o abilità recupera-PS per cinque turni.' },
      { name: 'Extrasenso', type: PokemonElementType.psychic, power: 80, description: 'Chi la usa attacca con una misteriosa forza invisibile. Può far tentennare il bersaglio.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  bronzong: {
    flavorText: 'È stato venerato per secoli come Pokémon che porta la pioggia. A volte lo si trova sepolto nel terreno.',
    stats: { hp: 67, attack: 89, defense: 116, specialAttack: 79, specialDefense: 116, speed: 33 },
    moves: [
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Chi la usa impedisce ai nemici che ha intorno di utilizzare mosse o abilità recupera-PS per cinque turni.' },
      { name: 'Extrasenso', type: PokemonElementType.psychic, power: 80, description: 'Chi la usa attacca con una misteriosa forza invisibile. Può far tentennare il bersaglio.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  bonsly: {
    flavorText: 'Preferisce le terre aride. Rilascia acqua dagli occhi per regolare il livello dei suoi fluidi corporei.',
    stats: { hp: 50, attack: 80, defense: 95, specialAttack: 10, specialDefense: 45, speed: 10 },
    moves: [
      { name: 'Sassata', type: PokemonElementType.rock, power: 50, description: 'Chi la usa solleva una roccia e la lancia contro il bersaglio.' },
      { name: 'Copione', type: PokemonElementType.normal, power: null, description: 'Chi la usa mima l’ultima mossa eseguita. Fallisce se non è stata ancora usata alcuna mossa.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
      { name: 'Schianto', type: PokemonElementType.normal, power: 80, description: 'Infligge danni al bersaglio con la coda, con una liana o simili.' },
    ],
  },
  mimeJr: {
    flavorText: 'Imita i movimenti del nemico, approfittando del suo momento di confusione per fuggire.',
    stats: { hp: 20, attack: 25, defense: 45, specialAttack: 70, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Meditazione', type: PokemonElementType.psychic, power: null, description: 'Chi la usa medita per risvegliare la propria forza interiore e migliorare l’Attacco.' },
      { name: 'Barriera', type: PokemonElementType.psychic, power: null, description: 'Innalza una barriera resistente che aumenta molto la Difesa.' },
      { name: 'Doppiasberla', type: PokemonElementType.normal, power: 15, description: 'Schiaffeggia il bersaglio da due a cinque volte di fila.' },
      { name: 'Copione', type: PokemonElementType.normal, power: null, description: 'Chi la usa mima l’ultima mossa eseguita. Fallisce se non è stata ancora usata alcuna mossa.' },
    ],
  },
  happiny: {
    flavorText: 'Trasporta una roccia a forma di uovo nella sua tasca ventrale e poi la offre ai suoi amici.',
    stats: { hp: 100, attack: 5, defense: 5, specialAttack: 15, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Dolcebacio', type: PokemonElementType.normal, power: null, description: 'Chi la usa bacia il bersaglio con una dolcezza angelica, confondendolo.' },
      { name: 'Rinfrescata', type: PokemonElementType.normal, power: null, description: 'Chi la usa riposa per guarire da avvelenamento, paralisi e scottatura.' },
      { name: 'Copione', type: PokemonElementType.normal, power: null, description: 'Chi la usa mima l’ultima mossa eseguita. Fallisce se non è stata ancora usata alcuna mossa.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
    ],
  },
  chatot: {
    flavorText: 'Imita la voce dei nemici per far credere che è dei loro, evitando così di essere assalito.',
    stats: { hp: 76, attack: 65, defense: 45, specialAttack: 92, specialDefense: 42, speed: 91 },
    moves: [
      { name: 'Schiamazzo', type: PokemonElementType.flying, power: 65, description: 'Chi la usa attacca creando un’onda sonora con le parole imparate e confonde il bersaglio.' },
      { name: 'Speculmossa', type: PokemonElementType.flying, power: null, description: 'Chi la usa colpisce il bersaglio copiandone l’ultima mossa usata.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Dolce ninnananna, cantata da una voce suadente, che fa addormentare il bersaglio.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 15, description: 'Infilza il bersaglio con corna affilate o con il becco da due a cinque volte di fila.' },
    ],
  },
  spiritomb: {
    flavorText: 'Pokémon formato da 108 spiriti. È stato imprigionato nella fessura di una Roccianima.',
    stats: { hp: 50, attack: 92, defense: 108, specialAttack: 92, specialDefense: 108, speed: 35 },
    moves: [
      { name: 'Furtivombra', type: PokemonElementType.ghost, power: 40, description: 'Chi la usa estende la sua ombra e attacca il nemico alle spalle. Con questa mossa si colpisce per primi.' },
      { name: 'Memento', type: PokemonElementType.dark, power: null, description: 'Chi la usa va KO. Tuttavia, riduce di molto l’Attacco e l’Attacco Speciale del bersaglio.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
      { name: 'Funestovento', type: PokemonElementType.ghost, power: 60, description: 'Chi la usa attacca con una forte raffica di vento che può aumentare tutte le sue statistiche.' },
    ],
  },
  gible: {
    flavorText: 'Vive in gallerie scaldate dal calore geotermico. Se sente un nemico arrivare, salta fuori e lo addenta.',
    stats: { hp: 58, attack: 70, defense: 45, specialAttack: 40, specialDefense: 45, speed: 42 },
    moves: [
      { name: 'Ira di Drago', type: PokemonElementType.dragon, power: null, description: 'Colpisce il bersaglio con un’onda d’urto generata dall’ira. Questo attacco provoca sempre un danno di 40 PS.' },
      { name: 'Dragofuria', type: PokemonElementType.dragon, power: 100, description: 'Chi la usa attacca con fare minaccioso e in questo modo può anche far tentennare il bersaglio.' },
      { name: 'Sabbiotomba', type: PokemonElementType.ground, power: 35, description: 'Chi la usa intrappola il bersaglio in un turbine di sabbia per quattro o cinque turni.' },
      { name: 'Dragartigli', type: PokemonElementType.dragon, power: 80, description: 'Chi la usa attacca con artigli affilati che graffiano il bersaglio rapidamente e con grande forza.' },
    ],
  },
  gabite: {
    flavorText: 'Adora gli oggetti luccicanti. Va a caccia di tesori nelle grotte e li trasporta nel suo nido.',
    stats: { hp: 68, attack: 90, defense: 65, specialAttack: 50, specialDefense: 55, speed: 82 },
    moves: [
      { name: 'Ira di Drago', type: PokemonElementType.dragon, power: null, description: 'Colpisce il bersaglio con un’onda d’urto generata dall’ira. Questo attacco provoca sempre un danno di 40 PS.' },
      { name: 'Dragofuria', type: PokemonElementType.dragon, power: 100, description: 'Chi la usa attacca con fare minaccioso e in questo modo può anche far tentennare il bersaglio.' },
      { name: 'Sabbiotomba', type: PokemonElementType.ground, power: 35, description: 'Chi la usa intrappola il bersaglio in un turbine di sabbia per quattro o cinque turni.' },
      { name: 'Dragartigli', type: PokemonElementType.dragon, power: 80, description: 'Chi la usa attacca con artigli affilati che graffiano il bersaglio rapidamente e con grande forza.' },
    ],
  },
  garchomp: {
    flavorText: 'Quando si piega e distende le ali, sembra un jet. Vola a una velocità supersonica.',
    stats: { hp: 108, attack: 130, defense: 95, specialAttack: 80, specialDefense: 85, speed: 102 },
    moves: [
      { name: 'Ira di Drago', type: PokemonElementType.dragon, power: null, description: 'Colpisce il bersaglio con un’onda d’urto generata dall’ira. Questo attacco provoca sempre un danno di 40 PS.' },
      { name: 'Dragofuria', type: PokemonElementType.dragon, power: 100, description: 'Chi la usa attacca con fare minaccioso e in questo modo può anche far tentennare il bersaglio.' },
      { name: 'Sabbiotomba', type: PokemonElementType.ground, power: 35, description: 'Chi la usa intrappola il bersaglio in un turbine di sabbia per quattro o cinque turni.' },
      { name: 'Dragartigli', type: PokemonElementType.dragon, power: 80, description: 'Chi la usa attacca con artigli affilati che graffiano il bersaglio rapidamente e con grande forza.' },
    ],
  },
  munchlax: {
    flavorText: 'Nasconde il cibo sotto i lunghi peli del suo corpo. Tuttavia, finisce spesso per dimenticarlo.',
    stats: { hp: 135, attack: 85, defense: 40, specialAttack: 40, specialDefense: 85, speed: 5 },
    moves: [
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Leccata', type: PokemonElementType.ghost, power: 30, description: 'Una lingua lunga infligge danni al bersaglio e può anche paralizzarlo.' },
      { name: 'Introenergia', type: PokemonElementType.normal, power: null, description: 'Chi la usa assorbe l’energia raccolta con la mossa Accumulo e recupera PS. Maggiore è l’energia, più PS si recuperano.' },
      { name: 'Accumulo', type: PokemonElementType.normal, power: null, description: 'Chi la usa accumula energia aumentando la Difesa e la Difesa Speciale. Si può utilizzare tre volte.' },
    ],
  },
  hippopotas: {
    flavorText: 'Vive in territori aridi. Invece del sudore, espelle dal corpo sabbia granulosa.',
    stats: { hp: 68, attack: 72, defense: 78, specialAttack: 38, specialDefense: 42, speed: 32 },
    moves: [
      { name: 'Abisso', type: PokemonElementType.ground, power: null, description: 'Chi la usa crea una spaccatura nel terreno e cerca di gettarvici dentro il bersaglio. Se va a segno, il Pokémon colpito va KO.' },
      { name: 'Sabbiotomba', type: PokemonElementType.ground, power: 35, description: 'Chi la usa intrappola il bersaglio in un turbine di sabbia per quattro o cinque turni.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
    ],
  },
  riolu: {
    flavorText: 'Comunica con i suoi simili tramite delle onde che cambiano forma a seconda del sentimento che prova.',
    stats: { hp: 40, attack: 70, defense: 40, specialAttack: 35, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'Palmoforza', type: PokemonElementType.fighting, power: 60, description: 'Chi la usa attacca con un’onda d’urto che può anche paralizzare il bersaglio.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Copione', type: PokemonElementType.normal, power: null, description: 'Chi la usa mima l’ultima mossa eseguita. Fallisce se non è stata ancora usata alcuna mossa.' },
      { name: 'Fintoattacco', type: PokemonElementType.normal, power: 30, description: 'Mossa che colpisce anche un bersaglio che ha usato Protezione o Individua, annullandone gli effetti.' },
    ],
  },
  lucario: {
    flavorText: 'Riesce a leggere i pensieri e i movimenti del nemico decifrando l’aura che questo emette.',
    stats: { hp: 70, attack: 110, defense: 70, specialAttack: 115, specialDefense: 70, speed: 90 },
    moves: [
      { name: 'Ossoraffica', type: PokemonElementType.ground, power: 25, description: 'Chi la usa colpisce il bersaglio con un osso da due a cinque volte di fila.' },
      { name: 'Palmoforza', type: PokemonElementType.fighting, power: 60, description: 'Chi la usa attacca con un’onda d’urto che può anche paralizzare il bersaglio.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Precedenza', type: PokemonElementType.normal, power: null, description: 'Se chi la usa è più veloce del nemico, gli ruba la mossa e gliela ritorce contro con potenza persino maggiore.' },
    ],
  },
  hippowdon: {
    flavorText: 'Mostra la propria forza spalancando le fauci. Attacca sollevando immani quantità di sabbia.',
    stats: { hp: 108, attack: 112, defense: 118, specialAttack: 68, specialDefense: 72, speed: 47 },
    moves: [
      { name: 'Abisso', type: PokemonElementType.ground, power: null, description: 'Chi la usa crea una spaccatura nel terreno e cerca di gettarvici dentro il bersaglio. Se va a segno, il Pokémon colpito va KO.' },
      { name: 'Sabbiotomba', type: PokemonElementType.ground, power: 35, description: 'Chi la usa intrappola il bersaglio in un turbine di sabbia per quattro o cinque turni.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
    ],
  },
  skorupi: {
    flavorText: 'Afferra le prede con gli artigli della coda e non si allontana finché il veleno che inietta non agisce.',
    stats: { hp: 40, attack: 50, defense: 90, specialAttack: 30, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'Acupressione', type: PokemonElementType.normal, power: null, description: 'Chi la usa esercita pressione su alcuni punti nevralgici e aumenta di molto una statistica a caso.' },
      { name: 'Velenodenti', type: PokemonElementType.poison, power: 50, description: 'Chi la usa morde il bersaglio con denti avvelenati che possono anche iperavvelenarlo.' },
      { name: 'Velenocroce', type: PokemonElementType.poison, power: 70, description: 'Attacco con zanne avvelenate che può anche avvelenare il Pokémon colpito. Probabile brutto colpo.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
    ],
  },
  drapion: {
    flavorText: 'Va fiero della sua forza con cui può fare a pezzi il nemico, ma in genere preferisce finirlo usando le sue tossine.',
    stats: { hp: 70, attack: 90, defense: 110, specialAttack: 60, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'Acupressione', type: PokemonElementType.normal, power: null, description: 'Chi la usa esercita pressione su alcuni punti nevralgici e aumenta di molto una statistica a caso.' },
      { name: 'Velenodenti', type: PokemonElementType.poison, power: 50, description: 'Chi la usa morde il bersaglio con denti avvelenati che possono anche iperavvelenarlo.' },
      { name: 'Velenocroce', type: PokemonElementType.poison, power: 70, description: 'Attacco con zanne avvelenate che può anche avvelenare il Pokémon colpito. Probabile brutto colpo.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
    ],
  },
  croagunk: {
    flavorText: 'Le sacche delle guance contengono veleno. Infilza i nemici con le sue unghie avvelenate.',
    stats: { hp: 48, attack: 61, defense: 40, specialAttack: 61, specialDefense: 40, speed: 50 },
    moves: [
      { name: 'Pantanobomba', type: PokemonElementType.ground, power: 65, description: 'Chi la usa lancia una compatta palla di fango. Può anche ridurre la precisione del Pokémon colpito.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Adulazione', type: PokemonElementType.dark, power: null, description: 'Adula il bersaglio e lo confonde, ma ne aumenta l’Attacco Speciale.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  toxicroak: {
    flavorText: 'Ha una sacca di veleno sulla gola. Quando gracida il veleno si rimescola, diventando più efficace.',
    stats: { hp: 83, attack: 106, defense: 65, specialAttack: 86, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Pantanobomba', type: PokemonElementType.ground, power: 65, description: 'Chi la usa lancia una compatta palla di fango. Può anche ridurre la precisione del Pokémon colpito.' },
      { name: 'Velenospina', type: PokemonElementType.poison, power: 15, description: 'Colpisce il bersaglio con un aculeo tossico che può anche avvelenarlo.' },
      { name: 'Adulazione', type: PokemonElementType.dark, power: null, description: 'Adula il bersaglio e lo confonde, ma ne aumenta l’Attacco Speciale.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  carnivine: {
    flavorText: 'Attira le prede con il dolce aroma della saliva e poi le ingoia. Impiega un giorno per mangiare una preda.',
    stats: { hp: 74, attack: 100, defense: 72, specialAttack: 90, specialDefense: 72, speed: 46 },
    moves: [
      { name: 'Strizzata', type: PokemonElementType.normal, power: null, description: 'Chi la usa stritola con forza il bersaglio. Più PS ha il Pokémon colpito, maggiore è la potenza della mossa.' },
      { name: 'Frustata', type: PokemonElementType.grass, power: 45, description: 'Infligge danni al bersaglio con liane sottili simili a fruste.' },
      { name: 'Vigorcolpo', type: PokemonElementType.grass, power: 120, description: 'Chi la usa agita violentemente liane o tentacoli per sferzare il bersaglio.' },
      { name: 'Sfoghenergia', type: PokemonElementType.normal, power: null, description: 'Tutta l’energia accumulata in precedenza con Accumulo è rilasciata nell’attacco. Maggiore è l’energia, più danni si arrecano.' },
    ],
  },
  finneon: {
    flavorText: 'La linea che contorna il suo corpo immagazzina la luce solare. Di notte si illumina di una luce splendente.',
    stats: { hp: 49, attack: 49, defense: 56, specialAttack: 49, specialDefense: 61, speed: 66 },
    moves: [
      { name: 'Ventargenteo', type: PokemonElementType.bug, power: 60, description: 'Attacca con un forte vento di polvere di squame. Tutte le statistiche di chi la usa possono salire.' },
      { name: 'Acquanello', type: PokemonElementType.water, power: null, description: 'Chi la usa si avvolge in un velo d’acqua. Recupera alcuni PS a ogni turno.' },
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
    ],
  },
  lumineon: {
    flavorText: 'Vive negli abissi marini. Attira le prede illuminando i motivi delle sue quattro pinne.',
    stats: { hp: 69, attack: 69, defense: 76, specialAttack: 69, specialDefense: 86, speed: 91 },
    moves: [
      { name: 'Ventargenteo', type: PokemonElementType.bug, power: 60, description: 'Attacca con un forte vento di polvere di squame. Tutte le statistiche di chi la usa possono salire.' },
      { name: 'Acquanello', type: PokemonElementType.water, power: null, description: 'Chi la usa si avvolge in un velo d’acqua. Recupera alcuni PS a ogni turno.' },
      { name: 'Raffica', type: PokemonElementType.flying, power: 40, description: 'Infligge danni al bersaglio con una folata di vento sollevata dalle ali.' },
      { name: 'Botta', type: PokemonElementType.normal, power: 40, description: 'Colpisce il bersaglio con la coda o le zampe anteriori.' },
    ],
  },
  mantyke: {
    flavorText: 'Il disegno sul suo dorso cambia a seconda della regione. Nuota spesso assieme ai branchi di Remoraid.',
    stats: { hp: 45, attack: 20, defense: 50, specialAttack: 60, specialDefense: 120, speed: 50 },
    moves: [
      { name: 'Attacco d’Ala', type: PokemonElementType.flying, power: 60, description: 'Infligge danni al bersaglio spiegando delle grandi ali possenti.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Acquanello', type: PokemonElementType.water, power: null, description: 'Chi la usa si avvolge in un velo d’acqua. Recupera alcuni PS a ogni turno.' },
      { name: 'Supersuono', type: PokemonElementType.normal, power: null, description: 'Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.' },
    ],
  },
  snover: {
    flavorText: 'In inverno scende a valle, ma in primavera se ne torna sulle cime montuose dove c’è ancora neve.',
    stats: { hp: 60, attack: 62, defense: 50, specialAttack: 62, specialDefense: 60, speed: 40 },
    moves: [
      { name: 'Meloderba', type: PokemonElementType.grass, power: null, description: 'Una dolce melodia culla il bersaglio e lo costringe ad addormentarsi.' },
      { name: 'Purogelo', type: PokemonElementType.ice, power: null, description: 'Ondata di freddo penetrante che, se va a segno, fa andare KO il bersaglio.' },
      { name: 'Mazzuolegno', type: PokemonElementType.grass, power: 120, description: 'Chi la usa si lancia con tutto il corpo contro il bersaglio, ma subisce anche considerevoli danni.' },
      { name: 'Geloscheggia', type: PokemonElementType.ice, power: 40, description: 'Chi la usa crea dei pezzi di ghiaccio e li lancia. Con questa mossa si colpisce per primi.' },
    ],
  },
  abomasnow: {
    flavorText: 'Crea bufere che ricoprono di neve ampissime aree. È noto anche come “Mostro dei ghiacci”.',
    stats: { hp: 90, attack: 92, defense: 75, specialAttack: 92, specialDefense: 85, speed: 60 },
    moves: [
      { name: 'Meloderba', type: PokemonElementType.grass, power: null, description: 'Una dolce melodia culla il bersaglio e lo costringe ad addormentarsi.' },
      { name: 'Purogelo', type: PokemonElementType.ice, power: null, description: 'Ondata di freddo penetrante che, se va a segno, fa andare KO il bersaglio.' },
      { name: 'Mazzuolegno', type: PokemonElementType.grass, power: 120, description: 'Chi la usa si lancia con tutto il corpo contro il bersaglio, ma subisce anche considerevoli danni.' },
      { name: 'Geloscheggia', type: PokemonElementType.ice, power: 40, description: 'Chi la usa crea dei pezzi di ghiaccio e li lancia. Con questa mossa si colpisce per primi.' },
    ],
  },
  weavile: {
    flavorText: 'Il suo habitat sono le grandi aree innevate. Con gli artigli, incide sui tronchi segnali per i suoi simili.',
    stats: { hp: 70, attack: 120, defense: 65, specialAttack: 45, specialDefense: 85, speed: 125 },
    moves: [
      { name: 'Sfuriate', type: PokemonElementType.normal, power: 18, description: 'Colpisce il bersaglio con artigli o falci affilate da due a cinque volte in rapida successione.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
      { name: 'Ferrartigli', type: PokemonElementType.steel, power: 50, description: 'Colpisce il bersaglio con artigli d’acciaio. Può anche aumentare l’Attacco di chi la usa.' },
      { name: 'Divieto', type: PokemonElementType.dark, power: null, description: 'Impedisce al bersaglio di usare il suo strumento e al suo Allenatore di usarne altri sul Pokémon.' },
    ],
  },
  magnezone: {
    flavorText: 'A volte si attraggono l’un l’altro con la loro potentissima carica magnetica e poi non riescono più a muoversi.',
    stats: { hp: 70, attack: 70, defense: 115, specialAttack: 130, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Bombagnete', type: PokemonElementType.steel, power: 60, description: 'Chi la usa lancia bombe d’acciaio che si attaccano al bersaglio. Una mossa infallibile.' },
      { name: 'Sonicboom', type: PokemonElementType.normal, power: null, description: 'Il bersaglio viene colpito da onde acustiche devastanti che gli provocano un danno pari a 20 PS.' },
      { name: 'Cristalcolpo', type: PokemonElementType.steel, power: 65, description: 'Chi la usa rilascia fasci d’energia dal corpo levigato. Può anche ridurre la precisione del bersaglio.' },
      { name: 'Localizza', type: PokemonElementType.normal, power: null, description: 'Chi la usa punta il bersaglio con precisione. La mossa successiva andrà a segno.' },
    ],
  },
  lickilicky: {
    flavorText: 'Avvolge ogni cosa con la sua lingua allungabile. Chi si avvicina troppo, si ritroverà tutto bagnato di bava.',
    stats: { hp: 110, attack: 85, defense: 95, specialAttack: 80, specialDefense: 95, speed: 50 },
    moves: [
      { name: 'Strizzata', type: PokemonElementType.normal, power: null, description: 'Chi la usa stritola con forza il bersaglio. Più PS ha il Pokémon colpito, maggiore è la potenza della mossa.' },
      { name: 'Precedenza', type: PokemonElementType.normal, power: null, description: 'Se chi la usa è più veloce del nemico, gli ruba la mossa e gliela ritorce contro con potenza persino maggiore.' },
      { name: 'Avvolgibotta', type: PokemonElementType.normal, power: 15, description: 'Il lungo corpo o le liane di chi la usa avvolgono e stritolano il bersaglio per quattro o cinque turni.' },
      { name: 'Leccata', type: PokemonElementType.ghost, power: 30, description: 'Una lingua lunga infligge danni al bersaglio e può anche paralizzarlo.' },
    ],
  },
  rhyperior: {
    flavorText: 'Mette dei Geodude nelle cavità dei palmi e li lancia. Usa Copertura per resistere alle eruzioni vulcaniche.',
    stats: { hp: 115, attack: 140, defense: 130, specialAttack: 55, specialDefense: 55, speed: 40 },
    moves: [
      { name: 'Devastomasso', type: PokemonElementType.rock, power: 150, description: 'Chi la usa attacca il bersaglio con un enorme masso, ma si deve riposare al turno successivo.' },
      { name: 'Incornata', type: PokemonElementType.normal, power: 65, description: 'Danneggia il bersaglio infilzandolo con un corno affilato.' },
      { name: 'Perforcorno', type: PokemonElementType.normal, power: null, description: 'Colpisce il bersaglio con un corno perforante come un trapano. Se il colpo va a segno, il Pokémon colpito va KO.' },
      { name: 'Megacorno', type: PokemonElementType.bug, power: 120, description: 'Chi la usa utilizza il suo robusto e imponente corno per colpire il bersaglio con tutto se stesso.' },
    ],
  },
  tangrowth: {
    flavorText: 'Intrappola le prede con gli arti, che sono costituiti da liane. Se ne perde uno, non si turba affatto.',
    stats: { hp: 100, attack: 100, defense: 125, specialAttack: 110, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Limitazione', type: PokemonElementType.normal, power: 10, description: 'Colpisce il bersaglio con lunghi tentacoli o piante rampicanti. Può anche ridurne la Velocità.' },
      { name: 'Strizzata', type: PokemonElementType.normal, power: null, description: 'Chi la usa stritola con forza il bersaglio. Più PS ha il Pokémon colpito, maggiore è la potenza della mossa.' },
      { name: 'Frustata', type: PokemonElementType.grass, power: 45, description: 'Infligge danni al bersaglio con liane sottili simili a fruste.' },
      { name: 'Sonnifero', type: PokemonElementType.grass, power: null, description: 'Investe il bersaglio con una grande nuvola di polvere soporifera che lo fa addormentare.' },
    ],
  },
  electivire: {
    flavorText: 'Quando accumula tanta elettricità sparge scintille azzurrine dallo spazio tra le due corna.',
    stats: { hp: 75, attack: 123, defense: 67, specialAttack: 95, specialDefense: 85, speed: 95 },
    moves: [
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
      { name: 'Attacco Rapido', type: PokemonElementType.normal, power: 40, description: 'Chi la usa colpisce sempre per primo e a una tale velocità da rendersi quasi invisibile.' },
      { name: 'Fuocopugno', type: PokemonElementType.fire, power: 75, description: 'Colpisce il bersaglio con un pugno ardente che può scottarlo.' },
    ],
  },
  magmortar: {
    flavorText: 'Spara palle di fuoco di oltre 2000 °C dagli arti superiori. Vive nei crateri dei vulcani.',
    stats: { hp: 75, attack: 95, defense: 67, specialAttack: 125, specialDefense: 95, speed: 83 },
    moves: [
      { name: 'Lavasbuffo', type: PokemonElementType.fire, power: 80, description: 'Chi la usa lancia fiamme scarlatte su tutti i Pokémon nelle vicinanze, danneggiandoli. Può anche scottarli.' },
      { name: 'Smog', type: PokemonElementType.poison, power: 30, description: 'Colpisce il bersaglio con una scarica di gas maleodoranti. Può anche avvelenarlo.' },
      { name: 'Muro di Fumo', type: PokemonElementType.normal, power: null, description: 'Nuvola di fumo o inchiostro che riduce la precisione del bersaglio.' },
      { name: 'Braciere', type: PokemonElementType.fire, power: 40, description: 'Il bersaglio viene colpito da fiammelle che possono anche scottarlo.' },
    ],
  },
  togekiss: {
    flavorText: 'Pare che Togekiss ami visitare le regioni pacifiche, senza conflitti, donando bontà e dolcezza.',
    stats: { hp: 85, attack: 50, defense: 95, specialAttack: 120, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Forzasfera', type: PokemonElementType.fighting, power: 80, description: 'Chi la usa rilascia una forza eterea dal profondo del corpo. La mossa è infallibile.' },
      { name: 'Aeroattacco', type: PokemonElementType.flying, power: 140, description: 'Attacco in due turni e probabile brutto colpo. Può anche far tentennare il bersaglio.' },
      { name: 'Eterelama', type: PokemonElementType.flying, power: 75, description: 'Chi la usa attacca con un vento tagliente che squarcia il cielo. Può anche far tentennare il Pokémon colpito.' },
    ],
  },
  yanmega: {
    flavorText: 'Preferisce piombare sui nemici a grande velocità per tagliuzzarli a dovere in un batter d’occhio.',
    stats: { hp: 86, attack: 76, defense: 86, specialAttack: 116, specialDefense: 56, speed: 95 },
    moves: [
      { name: 'Sonicboom', type: PokemonElementType.normal, power: null, description: 'Il bersaglio viene colpito da onde acustiche devastanti che gli provocano un danno pari a 20 PS.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Ronzio', type: PokemonElementType.bug, power: 90, description: 'Chi la usa fa vibrare le ali creando un’onda sonora pericolosa. Può anche ridurre la Difesa Speciale del bersaglio.' },
      { name: 'Supersuono', type: PokemonElementType.normal, power: null, description: 'Chi la usa genera dal proprio corpo strane onde acustiche che possono confondere il bersaglio.' },
    ],
  },
  leafeon: {
    flavorText: 'Nelle belle giornate si sdraia al sole e usa la fotosintesi, producendo aria pulita.',
    stats: { hp: 65, attack: 110, defense: 130, specialAttack: 60, specialDefense: 65, speed: 95 },
    moves: [
      { name: 'Meloderba', type: PokemonElementType.grass, power: null, description: 'Una dolce melodia culla il bersaglio e lo costringe ad addormentarsi.' },
      { name: 'Fendifoglia', type: PokemonElementType.grass, power: 90, description: 'Colpisce il bersaglio usando una foglia affilata come una spada. Probabile brutto colpo.' },
      { name: 'Foglielama', type: PokemonElementType.grass, power: 55, description: 'Foglie taglienti sferzano i nemici intorno. Probabile brutto colpo.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
    ],
  },
  glaceon: {
    flavorText: 'Modificando la temperatura del corpo, congela l’aria e crea folate di cristalli di ghiaccio.',
    stats: { hp: 65, attack: 60, defense: 110, specialAttack: 130, specialDefense: 95, speed: 65 },
    moves: [
      { name: 'Barriera', type: PokemonElementType.psychic, power: null, description: 'Innalza una barriera resistente che aumenta molto la Difesa.' },
      { name: 'Geloscheggia', type: PokemonElementType.ice, power: 40, description: 'Chi la usa crea dei pezzi di ghiaccio e li lancia. Con questa mossa si colpisce per primi.' },
      { name: 'Specchiovelo', type: PokemonElementType.psychic, power: null, description: 'Mossa che replica ogni attacco speciale, arrecando il doppio del danno ricevuto.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
    ],
  },
  gliscor: {
    flavorText: 'Sta appeso ai rami con la testa in giù. Alla prima occasione, si butta a capofitto sulla preda.',
    stats: { hp: 75, attack: 95, defense: 125, specialAttack: 45, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'Ghigliottina', type: PokemonElementType.normal, power: null, description: 'Attacca il bersaglio con pericolose tenaglie. Se l’attacco va a segno, il Pokémon colpito va subito KO.' },
      { name: 'Rafforzatore', type: PokemonElementType.normal, power: null, description: 'Tutti i muscoli del corpo si tonificano per aumentare la Difesa.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
      { name: 'Turbosabbia', type: PokemonElementType.ground, power: null, description: 'Getta sabbia in faccia al bersaglio e ne riduce la precisione.' },
    ],
  },
  mamoswine: {
    flavorText: 'Un Pokémon antico al punto che ne sono stati ritrovati degli esemplari tra i ghiacci di 10.000 anni fa.',
    stats: { hp: 110, attack: 130, defense: 80, specialAttack: 70, specialDefense: 60, speed: 80 },
    moves: [
      { name: 'Pantanobomba', type: PokemonElementType.ground, power: 65, description: 'Chi la usa lancia una compatta palla di fango. Può anche ridurre la precisione del Pokémon colpito.' },
      { name: 'Polneve', type: PokemonElementType.ice, power: 40, description: 'Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli.' },
      { name: 'Segugio', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Fangata', type: PokemonElementType.ground, power: null, description: 'Chi la usa sparge fango sul campo di lotta indebolendo per cinque turni le mosse di tipo Elettro.' },
    ],
  },
  porygonZ: {
    flavorText: 'È stato aggiunto un software per migliorare le prestazioni di questo Pokémon. Agisce in modo strano.',
    stats: { hp: 85, attack: 80, defense: 70, specialAttack: 135, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'Conversione', type: PokemonElementType.normal, power: null, description: 'Il tipo di chi la usa muta in quello della prima mossa nella lista delle sue mosse.' },
      { name: 'Conversione2', type: PokemonElementType.normal, power: null, description: 'Chi la usa cambia tipo per rendersi resistente al tipo dell’ultima mossa usata dal bersaglio.' },
      { name: 'Localizza', type: PokemonElementType.normal, power: null, description: 'Chi la usa punta il bersaglio con precisione. La mossa successiva andrà a segno.' },
      { name: 'Tripletta', type: PokemonElementType.normal, power: 80, description: 'Colpisce il bersaglio con tre sfere simultanee che possono paralizzarlo, scottarlo o congelarlo.' },
    ],
  },
  gallade: {
    flavorText: 'Il suo intuito gli consente di capire cosa pensa il nemico: può così attaccare per primo.',
    stats: { hp: 68, attack: 125, defense: 65, specialAttack: 65, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'Fendifoglia', type: PokemonElementType.grass, power: 90, description: 'Colpisce il bersaglio usando una foglia affilata come una spada. Probabile brutto colpo.' },
      { name: 'Teletrasporto', type: PokemonElementType.psychic, power: null, description: 'Fa fuggire dai Pokémon selvatici. Fuori dalla lotta porta all’ultimo Centro Pokémon visitato.' },
      { name: 'Psicotaglio', type: PokemonElementType.psychic, power: 70, description: 'Chi la usa colpisce il bersaglio con lame fatte di forza psichica. Probabile brutto colpo.' },
      { name: 'Fintoattacco', type: PokemonElementType.normal, power: 30, description: 'Mossa che colpisce anche un bersaglio che ha usato Protezione o Individua, annullandone gli effetti.' },
    ],
  },
  probopass: {
    flavorText: 'Emana un forte magnetismo da tutto il corpo. Controlla tre piccole unità, dette Mininasi.',
    stats: { hp: 60, attack: 55, defense: 145, specialAttack: 75, specialDefense: 150, speed: 40 },
    moves: [
      { name: 'Bombagnete', type: PokemonElementType.steel, power: 60, description: 'Chi la usa lancia bombe d’acciaio che si attaccano al bersaglio. Una mossa infallibile.' },
      { name: 'Localizza', type: PokemonElementType.normal, power: null, description: 'Chi la usa punta il bersaglio con precisione. La mossa successiva andrà a segno.' },
      { name: 'Falcecannone', type: PokemonElementType.electric, power: 120, description: 'Chi la usa provoca un’esplosione elettrica che infligge danni e paralizza il bersaglio.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
    ],
  },
  dusknoir: {
    flavorText: 'Si dice che accolga gli spiriti smarriti nel suo corpo flessibile per riportarli a casa.',
    stats: { hp: 45, attack: 100, defense: 135, specialAttack: 65, specialDefense: 135, speed: 45 },
    moves: [
      { name: 'Pugnodombra', type: PokemonElementType.ghost, power: 60, description: 'Il bersaglio riceve un pugno proveniente dalle tenebre. Questa mossa è infallibile.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Malosguardo', type: PokemonElementType.normal, power: null, description: 'Chi la usa blocca il bersaglio con uno sguardo oscuro e ammaliante, impedendogli la fuga.' },
      { name: 'Furtivombra', type: PokemonElementType.ghost, power: 40, description: 'Chi la usa estende la sua ombra e attacca il nemico alle spalle. Con questa mossa si colpisce per primi.' },
    ],
  },
  froslass: {
    flavorText: 'Congela i nemici con un alito glaciale a -50 °C. Il suo corpo è vuoto.',
    stats: { hp: 70, attack: 80, defense: 70, specialAttack: 80, specialDefense: 70, speed: 110 },
    moves: [
      { name: 'Svegliopacca', type: PokemonElementType.fighting, power: 70, description: 'Questa mossa infligge un danno doppio a un bersaglio addormentato, ma allo stesso tempo lo risveglia.' },
      { name: 'Geloscheggia', type: PokemonElementType.ice, power: 40, description: 'Chi la usa crea dei pezzi di ghiaccio e li lancia. Con questa mossa si colpisce per primi.' },
      { name: 'Polneve', type: PokemonElementType.ice, power: 40, description: 'Attacca i nemici che ha intorno con una raffica di neve farinosa e può anche congelarli.' },
      { name: 'Destinobbligato', type: PokemonElementType.ghost, power: null, description: 'Se chi la usa va KO prima del turno successivo, chi ha sferrato il colpo da KO fa la stessa fine.' },
    ],
  },
  rotom: {
    flavorText: 'Questo Pokémon è stato usato a lungo per ricerche come forza motrice su motori speciali.',
    stats: { hp: 50, attack: 50, defense: 77, specialAttack: 95, specialDefense: 77, speed: 91 },
    moves: [
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Funestovento', type: PokemonElementType.ghost, power: 60, description: 'Chi la usa attacca con una forte raffica di vento che può aumentare tutte le sue statistiche.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
    ],
  },
  rotom_fan: {
    flavorText: 'Questo Pokémon è stato usato a lungo per ricerche come forza motrice su motori speciali.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Funestovento', type: PokemonElementType.ghost, power: 60, description: 'Chi la usa attacca con una forte raffica di vento che può aumentare tutte le sue statistiche.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
    ],
  },
  rotom_frost: {
    flavorText: 'Questo Pokémon è stato usato a lungo per ricerche come forza motrice su motori speciali.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Funestovento', type: PokemonElementType.ghost, power: 60, description: 'Chi la usa attacca con una forte raffica di vento che può aumentare tutte le sue statistiche.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
    ],
  },
  rotom_heat: {
    flavorText: 'Questo Pokémon è stato usato a lungo per ricerche come forza motrice su motori speciali.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Funestovento', type: PokemonElementType.ghost, power: 60, description: 'Chi la usa attacca con una forte raffica di vento che può aumentare tutte le sue statistiche.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
    ],
  },
  rotom_mow: {
    flavorText: 'Questo Pokémon è stato usato a lungo per ricerche come forza motrice su motori speciali.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Funestovento', type: PokemonElementType.ghost, power: 60, description: 'Chi la usa attacca con una forte raffica di vento che può aumentare tutte le sue statistiche.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
    ],
  },
  rotom_wash: {
    flavorText: 'Questo Pokémon è stato usato a lungo per ricerche come forza motrice su motori speciali.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Tuonoshock', type: PokemonElementType.electric, power: 40, description: 'Danneggia il bersaglio con una scarica elettrica che può anche paralizzarlo.' },
      { name: 'Sottocarica', type: PokemonElementType.electric, power: null, description: 'Potenzia la mossa di tipo Elettro usata subito dopo. Aumenta anche la Difesa Speciale di chi la usa.' },
      { name: 'Funestovento', type: PokemonElementType.ghost, power: 60, description: 'Chi la usa attacca con una forte raffica di vento che può aumentare tutte le sue statistiche.' },
      { name: 'Scarica', type: PokemonElementType.electric, power: 80, description: 'Chi la usa colpisce i Pokémon che ha intorno con un bagliore elettrico. Può anche paralizzarli.' },
    ],
  },
  uxie: {
    flavorText: 'Noto come “Essere della conoscenza”. Pare che faccia perdere la memoria a chiunque lo fissi.',
    stats: { hp: 75, attack: 75, defense: 130, specialAttack: 75, specialDefense: 130, speed: 95 },
    moves: [
      { name: 'Memento', type: PokemonElementType.dark, power: null, description: 'Chi la usa va KO. Tuttavia, riduce di molto l’Attacco e l’Attacco Speciale del bersaglio.' },
      { name: 'Extrasenso', type: PokemonElementType.psychic, power: 80, description: 'Chi la usa attacca con una misteriosa forza invisibile. Può far tentennare il bersaglio.' },
      { name: 'Sbadiglio', type: PokemonElementType.normal, power: null, description: 'Chi la usa fa un grande sbadiglio che addormenta il bersaglio al turno seguente.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
    ],
  },
  mesprit: {
    flavorText: 'Detto “Essere delle emozioni”. Ha insegnato agli uomini la nobiltà di tristezza, gioia e dolore.',
    stats: { hp: 80, attack: 105, defense: 105, specialAttack: 105, specialDefense: 105, speed: 80 },
    moves: [
      { name: 'Curardore', type: PokemonElementType.psychic, power: null, description: 'Chi la usa va KO, ma il Pokémon che lo sostituisce recupera tutti i PS e guarisce dai problemi di stato.' },
      { name: 'Fortuncanto', type: PokemonElementType.normal, power: null, description: 'Chi la usa rivolge un incantesimo al cielo, impedendo al nemico di sferrare brutti colpi alla squadra.' },
      { name: 'Extrasenso', type: PokemonElementType.psychic, power: 80, description: 'Chi la usa attacca con una misteriosa forza invisibile. Può far tentennare il bersaglio.' },
      { name: 'Copione', type: PokemonElementType.normal, power: null, description: 'Chi la usa mima l’ultima mossa eseguita. Fallisce se non è stata ancora usata alcuna mossa.' },
    ],
  },
  azelf: {
    flavorText: 'Detto “Essere della volontà”. Dorme sul fondo di un lago per mantenere il mondo in equilibrio.',
    stats: { hp: 75, attack: 125, defense: 70, specialAttack: 125, specialDefense: 70, speed: 115 },
    moves: [
      { name: 'Extrasenso', type: PokemonElementType.psychic, power: 80, description: 'Chi la usa attacca con una misteriosa forza invisibile. Può far tentennare il bersaglio.' },
      { name: 'Esplosione', type: PokemonElementType.normal, power: 250, description: 'Chi la usa esplode per infliggere danni agli altri Pokémon attorno, ma va KO.' },
      { name: 'Confusione', type: PokemonElementType.psychic, power: 50, description: 'Colpisce il bersaglio con una leggera forza telecinetica e può anche confonderlo.' },
      { name: 'Divinazione', type: PokemonElementType.psychic, power: 120, description: 'Due turni dopo l’utilizzo di questa mossa, il bersaglio viene attaccato con energia psichica.' },
    ],
  },
  dialga: {
    flavorText: 'Pokémon menzionato nelle leggende. Pare che il tempo abbia avuto origine alla nascita di Dialga.',
    stats: { hp: 100, attack: 120, defense: 120, specialAttack: 150, specialDefense: 100, speed: 90 },
    moves: [
      { name: 'Fragortempo', type: PokemonElementType.dragon, power: 150, description: 'Chi la usa colpisce il bersaglio con una forza capace di alterare il tempo, ma deve stare fermo al turno successivo.' },
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Chi la usa impedisce ai nemici che ha intorno di utilizzare mosse o abilità recupera-PS per cinque turni.' },
      { name: 'Forzasfera', type: PokemonElementType.fighting, power: 80, description: 'Chi la usa rilascia una forza eterea dal profondo del corpo. La mossa è infallibile.' },
      { name: 'Dragospiro', type: PokemonElementType.dragon, power: 60, description: 'Investe il bersaglio con una raffica potentissima che arreca danni. Può anche paralizzarlo.' },
    ],
  },
  palkia: {
    flavorText: 'Si dice che viva in una dimensione parallela alla nostra. Appare nella mitologia.',
    stats: { hp: 90, attack: 120, defense: 100, specialAttack: 150, specialDefense: 120, speed: 100 },
    moves: [
      { name: 'Fendispazio', type: PokemonElementType.dragon, power: 100, description: 'Chi la usa lacera il bersaglio e lo spazio che lo circonda. Probabile brutto colpo.' },
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Chi la usa impedisce ai nemici che ha intorno di utilizzare mosse o abilità recupera-PS per cinque turni.' },
      { name: 'Forzasfera', type: PokemonElementType.fighting, power: 80, description: 'Chi la usa rilascia una forza eterea dal profondo del corpo. La mossa è infallibile.' },
      { name: 'Dragospiro', type: PokemonElementType.dragon, power: 60, description: 'Investe il bersaglio con una raffica potentissima che arreca danni. Può anche paralizzarlo.' },
    ],
  },
  heatran: {
    flavorText: 'Vive nelle cavità dei vulcani. Scava con i suoi piedi a croce per scalare pareti e arrampicarsi sui soffitti.',
    stats: { hp: 91, attack: 90, defense: 106, specialAttack: 130, specialDefense: 106, speed: 77 },
    moves: [
      { name: 'Magmaclisma', type: PokemonElementType.fire, power: 100, description: 'Intrappola il bersaglio in un turbine di fuoco che dura per quattro o cinque turni.' },
      { name: 'Lavasbuffo', type: PokemonElementType.fire, power: 80, description: 'Chi la usa lancia fiamme scarlatte su tutti i Pokémon nelle vicinanze, danneggiandoli. Può anche scottarli.' },
      { name: 'Ferrostrido', type: PokemonElementType.steel, power: null, description: 'Orribile stridio, simile a quello prodotto dal metallo, che riduce di molto la Difesa Speciale del bersaglio.' },
      { name: 'Turbofuoco', type: PokemonElementType.fire, power: 35, description: 'Intrappola il bersaglio in un turbine di fuoco che dura per quattro o cinque turni.' },
    ],
  },
  regigigas: {
    flavorText: 'Si dice che abbia creato dei Pokémon simili a sé usando una montagna ghiacciata, rocce e magma.',
    stats: { hp: 110, attack: 160, defense: 110, specialAttack: 80, specialDefense: 110, speed: 100 },
    moves: [
      { name: 'Sbriciolmano', type: PokemonElementType.normal, power: null, description: 'Colpisce il bersaglio con grande forza. Più PS ha il Pokémon colpito, maggiore è la potenza della mossa.' },
      { name: 'Stordipugno', type: PokemonElementType.normal, power: 70, description: 'Colpisce il bersaglio con una sequenza di pugni che può anche confonderlo.' },
      { name: 'Preveggenza', type: PokemonElementType.normal, power: null, description: 'Chi la usa rende i Pokémon di tipo Spettro vulnerabili a qualsiasi tipo di mossa e può, inoltre, colpire i nemici sfuggenti.' },
      { name: 'Vendetta', type: PokemonElementType.fighting, power: 60, description: 'Mossa d’attacco che infligge un danno doppio se si è stati colpiti dal Pokémon bersaglio nello stesso turno.' },
    ],
  },
  giratina: {
    flavorText: 'Vive nel Mondo Distorto che, sfidando l’ordine cosmico, si trova sul lato opposto al nostro.',
    stats: { hp: 150, attack: 100, defense: 120, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: 'Oscurotuffo', type: PokemonElementType.ghost, power: 120, description: 'Chi la usa sparisce e poi colpisce il bersaglio al turno successivo. Colpisce anche un Pokémon che ha usato Protezione o Individua.' },
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Chi la usa impedisce ai nemici che ha intorno di utilizzare mosse o abilità recupera-PS per cinque turni.' },
      { name: 'Forzasfera', type: PokemonElementType.fighting, power: 80, description: 'Chi la usa rilascia una forza eterea dal profondo del corpo. La mossa è infallibile.' },
      { name: 'Dragospiro', type: PokemonElementType.dragon, power: 60, description: 'Investe il bersaglio con una raffica potentissima che arreca danni. Può anche paralizzarlo.' },
    ],
  },
  giratina_origin: {
    flavorText: 'Vive nel Mondo Distorto che, sfidando l’ordine cosmico, si trova sul lato opposto al nostro.',
    stats: { hp: 150, attack: 120, defense: 100, specialAttack: 120, specialDefense: 100, speed: 90 },
    moves: [
      { name: 'Oscurotuffo', type: PokemonElementType.ghost, power: 120, description: 'Chi la usa sparisce e poi colpisce il bersaglio al turno successivo. Colpisce anche un Pokémon che ha usato Protezione o Individua.' },
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Chi la usa impedisce ai nemici che ha intorno di utilizzare mosse o abilità recupera-PS per cinque turni.' },
      { name: 'Forzasfera', type: PokemonElementType.fighting, power: 80, description: 'Chi la usa rilascia una forza eterea dal profondo del corpo. La mossa è infallibile.' },
      { name: 'Dragospiro', type: PokemonElementType.dragon, power: 60, description: 'Investe il bersaglio con una raffica potentissima che arreca danni. Può anche paralizzarlo.' },
    ],
  },
  cresselia: {
    flavorText: 'Volando rilascia un velo di particelle brillanti. Si dice che rappresenti la luna crescente.',
    stats: { hp: 120, attack: 70, defense: 110, specialAttack: 75, specialDefense: 120, speed: 85 },
    moves: [
      { name: 'Lunardanza', type: PokemonElementType.psychic, power: null, description: 'Chi la usa va KO. Il Pokémon che lo sostituisce guarisce dai propri problemi di stato e recupera PS e PP.' },
      { name: 'Psicotransfer', type: PokemonElementType.psychic, power: null, description: 'Con la forza psichica e la suggestione, chi la usa può trasferire i suoi problemi di stato al Pokémon colpito.' },
      { name: 'Lucelunare', type: PokemonElementType.normal, power: null, description: 'Chi la usa recupera PS. Il numero di PS recuperati dipende dalle condizioni atmosferiche.' },
      { name: 'Raggiaurora', type: PokemonElementType.ice, power: 65, description: 'Colpisce il bersaglio con un raggio dai colori dell’iride. Può anche ridurne l’Attacco.' },
    ],
  },
  phione: {
    flavorText: 'Quando la temperatura del mare si alza, gonfia il galleggiante che ha in testa e fluttua in gruppo.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: 'Scudo Acido', type: PokemonElementType.poison, power: null, description: 'Chi la usa altera la sua struttura cellulare passando allo stato liquido. La Difesa sale di molto.' },
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
      { name: 'Bolla', type: PokemonElementType.water, power: 40, description: 'Una pioggia di bolle investe i nemici intorno e può anche ridurne la Velocità.' },
      { name: 'Acquanello', type: PokemonElementType.water, power: null, description: 'Chi la usa si avvolge in un velo d’acqua. Recupera alcuni PS a ogni turno.' },
    ],
  },
  manaphy: {
    flavorText: 'Dispone di un potere innato che lo fa legare con qualsiasi specie di Pokémon.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Cuorbaratto', type: PokemonElementType.psychic, power: null, description: 'Chi la usa sfrutta la sua forza psichica per scambiare le modifiche alle statistiche con il bersaglio.' },
      { name: 'Codadiluce', type: PokemonElementType.bug, power: null, description: 'Chi la usa fissa una luce forte per concentrarsi e aumentare moltissimo l’Attacco Speciale.' },
      { name: 'Scudo Acido', type: PokemonElementType.poison, power: null, description: 'Chi la usa altera la sua struttura cellulare passando allo stato liquido. La Difesa sale di molto.' },
      { name: 'Docciascudo', type: PokemonElementType.water, power: null, description: 'Chi la usa sparge acqua sul campo di lotta indebolendo per cinque turni le mosse di tipo Fuoco.' },
    ],
  },
  darkrai: {
    flavorText: 'Respinge umani e Pokémon dal suo territorio inducendoli a un sonno profondo e provocando incubi.',
    stats: { hp: 70, attack: 90, defense: 90, specialAttack: 135, specialDefense: 90, speed: 125 },
    moves: [
      { name: 'Vuototetro', type: PokemonElementType.dark, power: null, description: 'Trascina i nemici intorno in un mondo di totale oscurità e li fa addormentare.' },
      { name: 'Incubo', type: PokemonElementType.ghost, power: null, description: 'Il bersaglio addormentato ha un incubo e perde PS a ogni turno.' },
      { name: 'Ipnosi', type: PokemonElementType.psychic, power: null, description: 'Chi la usa si avvale della suggestione ipnotica per far addormentare il bersaglio.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Chi la usa si avvicina al bersaglio facendo finta di niente, per poi scagliare un pugno infallibile a tradimento.' },
    ],
  },
  shaymin: {
    flavorText: 'Può dissolvere le tossine nell’aria per mutare all’istante una terra arida in un rigoglioso campo fiorito.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Infuriaseme', type: PokemonElementType.grass, power: 120, description: 'Chi la usa genera un’onda d’urto dal suo corpo. Può anche ridurre di molto la Difesa Speciale del bersaglio.' },
      { name: 'Curardore', type: PokemonElementType.psychic, power: null, description: 'Chi la usa va KO, ma il Pokémon che lo sostituisce recupera tutti i PS e guarisce dai problemi di stato.' },
      { name: 'Dolcebacio', type: PokemonElementType.normal, power: null, description: 'Chi la usa bacia il bersaglio con una dolcezza angelica, confondendolo.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Chi la usa rilascia un dolce profumo che cura tutti i problemi di stato propri e degli alleati.' },
    ],
  },
  shaymin_sky: {
    flavorText: 'Può dissolvere le tossine nell’aria per mutare all’istante una terra arida in un rigoglioso campo fiorito.',
    stats: { hp: 100, attack: 103, defense: 75, specialAttack: 120, specialDefense: 75, speed: 127 },
    moves: [
      { name: 'Infuriaseme', type: PokemonElementType.grass, power: 120, description: 'Chi la usa genera un’onda d’urto dal suo corpo. Può anche ridurre di molto la Difesa Speciale del bersaglio.' },
      { name: 'Dolcebacio', type: PokemonElementType.normal, power: null, description: 'Chi la usa bacia il bersaglio con una dolcezza angelica, confondendolo.' },
      { name: 'Crescita', type: PokemonElementType.normal, power: null, description: 'Provoca la crescita immediata del corpo e l’aumento dell’Attacco e dell’Attacco Speciale di chi la usa.' },
      { name: 'Profumino', type: PokemonElementType.normal, power: null, description: 'Un dolce profumo che riduce di molto l’elusione dei nemici intorno a chi la usa. Fuori dalla lotta attira i Pokémon selvatici.' },
    ],
  },
  arceus: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_bug: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_dark: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_dragon: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_electric: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_fighting: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_fire: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_flying: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_ghost: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_grass: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_ground: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_ice: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_poison: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_psychic: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_rock: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_steel: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
  arceus_water: {
    flavorText: 'Secondo la mitologia di Sinnoh, Arceus è nato da un uovo e poi ha creato il mondo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Giudizio', type: PokemonElementType.normal, power: 100, description: 'Chi la usa rilascia numerosi colpi di luce. Il tipo varia a seconda della lastra che ha.' },
      { name: 'Extrarapido', type: PokemonElementType.normal, power: 80, description: 'Chi la usa carica il bersaglio a una velocità impressionante e attacca sempre per primo.' },
      { name: 'Punizione', type: PokemonElementType.dark, power: null, description: 'Questa mossa diventa più potente ogni volta che il bersaglio aumenta le proprie statistiche.' },
      { name: 'Ultimocanto', type: PokemonElementType.normal, power: null, description: 'Qualunque Pokémon che senta questo canto va KO in tre turni, se non lo si sostituisce.' },
    ],
  },
}
