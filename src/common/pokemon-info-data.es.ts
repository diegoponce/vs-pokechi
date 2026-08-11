// Spanish counterpart of pokemon-info-data.ts - same species keys, same
// shape (PokemonInfoEntry), sourced the same way but with PokeAPI's
// Spanish flavor text/move data instead of English. Stats are numbers,
// not translated text, and are identical to the English file.
import { PokemonElementType } from './types'
import { PokemonInfoEntry } from './pokemon-info-data'

export const POKEMON_INFO_DATA_ES: { [key: string]: PokemonInfoEntry } = {
  bulbasaur: {
    flavorText: 'Una rara semilla le fue plantada en el lomo al nacer. La planta brota y crece con este Pokémon.',
    stats: { hp: 45, attack: 49, defense: 49, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Látigo Cepa', type: PokemonElementType.grass, power: 45, description: 'Azota al objetivo con ramas finas.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
    ],
  },
  ivysaur: {
    flavorText: 'Este Pokémon tiene un bulbo en el lomo. Dicen que, al absorber nutrientes, el bulbo se transforma en una flor grande.',
    stats: { hp: 60, attack: 62, defense: 63, specialAttack: 80, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'Látigo Cepa', type: PokemonElementType.grass, power: 45, description: 'Azota al objetivo con ramas finas.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
    ],
  },
  venusaur: {
    flavorText: 'Llena su cuerpo de energía con los rayos solares que captan los anchos pétalos de su flor.',
    stats: { hp: 80, attack: 82, defense: 83, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'Látigo Cepa', type: PokemonElementType.grass, power: 45, description: 'Azota al objetivo con ramas finas.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
    ],
  },
  charmander: {
    flavorText: 'La llama de su cola indica la fuerza vital de Charmander. Será brillante si está sano.',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Furia Dragón', type: PokemonElementType.dragon, power: null, description: 'Ráfaga de furiosas ondas de choque que quitan 40 PS.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Garra Metal', type: PokemonElementType.steel, power: 50, description: 'Ataque con garras de acero que puede aumentar el Ataque del usuario.' },
    ],
  },
  charmeleon: {
    flavorText: 'Suele usar la cola para derribar a su rival. Cuando lo tira, se vale de sus afiladas garras para acabar con él.',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'Furia Dragón', type: PokemonElementType.dragon, power: null, description: 'Ráfaga de furiosas ondas de choque que quitan 40 PS.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Garra Metal', type: PokemonElementType.steel, power: 50, description: 'Ataque con garras de acero que puede aumentar el Ataque del usuario.' },
    ],
  },
  charizard: {
    flavorText: 'Cuando lanza una descarga de fuego supercaliente, la roja llama de su cola brilla más intensamente.',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: 'Furia Dragón', type: PokemonElementType.dragon, power: null, description: 'Ráfaga de furiosas ondas de choque que quitan 40 PS.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
    ],
  },
  squirtle: {
    flavorText: 'Se protege con su caparazón y luego contraataca lanzando agua a presión cuando tiene oportunidad.',
    stats: { hp: 44, attack: 48, defense: 65, specialAttack: 50, specialDefense: 64, speed: 43 },
    moves: [
      { name: 'Refugio', type: PokemonElementType.water, power: null, description: 'El usuario se protege en su coraza y sube la Defensa.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Giro Rápido', type: PokemonElementType.normal, power: 50, description: 'Ataque giratorio que puede eliminar movimientos como Atadura, Constricción, Drenadoras y Púas.' },
      { name: 'Cabezazo', type: PokemonElementType.normal, power: 130, description: 'Primer turno: se prepara y sube la Defensa del usuario. Segundo turno: da el cabezazo.' },
    ],
  },
  wartortle: {
    flavorText: 'Si es golpeado, esconderá su cabeza. Aun así, su cola puede seguir golpeando.',
    stats: { hp: 59, attack: 63, defense: 80, specialAttack: 65, specialDefense: 80, speed: 58 },
    moves: [
      { name: 'Refugio', type: PokemonElementType.water, power: null, description: 'El usuario se protege en su coraza y sube la Defensa.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Giro Rápido', type: PokemonElementType.normal, power: 50, description: 'Ataque giratorio que puede eliminar movimientos como Atadura, Constricción, Drenadoras y Púas.' },
      { name: 'Cabezazo', type: PokemonElementType.normal, power: 130, description: 'Primer turno: se prepara y sube la Defensa del usuario. Segundo turno: da el cabezazo.' },
    ],
  },
  blastoise: {
    flavorText: 'Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.',
    stats: { hp: 79, attack: 83, defense: 100, specialAttack: 85, specialDefense: 105, speed: 78 },
    moves: [
      { name: 'Refugio', type: PokemonElementType.water, power: null, description: 'El usuario se protege en su coraza y sube la Defensa.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Giro Rápido', type: PokemonElementType.normal, power: 50, description: 'Ataque giratorio que puede eliminar movimientos como Atadura, Constricción, Drenadoras y Púas.' },
      { name: 'Cabezazo', type: PokemonElementType.normal, power: 130, description: 'Primer turno: se prepara y sube la Defensa del usuario. Segundo turno: da el cabezazo.' },
    ],
  },
  caterpie: {
    flavorText: 'Para protegerse despide un hedor horrible de sus antenas, con el que repele a sus enemigos.',
    stats: { hp: 45, attack: 30, defense: 35, specialAttack: 20, specialDefense: 20, speed: 45 },
    moves: [
      { name: 'Disparo Demora', type: PokemonElementType.bug, power: null, description: 'Lanza seda a los rivales y reduce mucho su Velocidad.' },
      { name: 'Placaje', type: PokemonElementType.normal, power: 40, description: 'Embiste con todo el cuerpo.' },
    ],
  },
  metapod: {
    flavorText: 'Su frágil cuerpo está recubierto de una coraza dura como el acero. Permanece quieto en su desarrollo.',
    stats: { hp: 50, attack: 20, defense: 55, specialAttack: 25, specialDefense: 25, speed: 30 },
    moves: [
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  butterfree: {
    flavorText: 'Adora el néctar de las flores. Puede localizar hasta las más pequeñas cantidades de polen.',
    stats: { hp: 60, attack: 45, defense: 50, specialAttack: 90, specialDefense: 80, speed: 70 },
    moves: [
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Viento Plata', type: PokemonElementType.bug, power: 60, description: 'Fuerte viento con polvo de escamas. Puede subir todas las características de quien lo usa.' },
      { name: 'Paralizador', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que paraliza al objetivo.' },
    ],
  },
  kakuna: {
    flavorText: 'Casi incapaz de moverse, este Pokémon solo puede endurecer su caparazón para protegerse.',
    stats: { hp: 45, attack: 25, defense: 50, specialAttack: 25, specialDefense: 25, speed: 35 },
    moves: [
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  weedle: {
    flavorText: 'Suele habitar bosques y praderas. Tiene un afilado y venenoso aguijón de unos 5 cm encima de la cabeza.',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 20, specialDefense: 20, speed: 50 },
    moves: [
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Disparo Demora', type: PokemonElementType.bug, power: null, description: 'Lanza seda a los rivales y reduce mucho su Velocidad.' },
    ],
  },
  beedrill: {
    flavorText: 'Tiene 3 aguijones venenosos en sus patas y cola. Suelen pinchar a sus enemigos repetidas veces.',
    stats: { hp: 65, attack: 90, defense: 40, specialAttack: 45, specialDefense: 80, speed: 75 },
    moves: [
      { name: 'Doble Ataque', type: PokemonElementType.bug, power: 25, description: 'Pincha dos veces con dos espinas. Puede envenenar.' },
      { name: 'Pin Misil', type: PokemonElementType.bug, power: 25, description: 'Lanza finas púas que hieren de dos a cinco veces.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
    ],
  },
  pidgey: {
    flavorText: 'Muy común en bosques y selvas. Aletea al nivel del suelo para levantar la gravilla.',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 35, specialDefense: 35, speed: 56 },
    moves: [
      { name: 'Espejo', type: PokemonElementType.flying, power: null, description: 'Contraataca con el mismo movimiento empleado por el objetivo.' },
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
      { name: 'Remolino', type: PokemonElementType.normal, power: null, description: 'Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.' },
    ],
  },
  pidgeotto: {
    flavorText: 'Tiene unas garras desarrolladas. Puede atrapar un Exeggcute y transportarlo desde una distancia de casi 100 km.',
    stats: { hp: 63, attack: 60, defense: 55, specialAttack: 50, specialDefense: 50, speed: 71 },
    moves: [
      { name: 'Espejo', type: PokemonElementType.flying, power: null, description: 'Contraataca con el mismo movimiento empleado por el objetivo.' },
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
      { name: 'Remolino', type: PokemonElementType.normal, power: null, description: 'Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.' },
    ],
  },
  pidgeot: {
    flavorText: 'Cuando caza, vuela muy deprisa a ras del agua y sorprende a inocentes presas como Magikarp.',
    stats: { hp: 83, attack: 80, defense: 75, specialAttack: 70, specialDefense: 70, speed: 101 },
    moves: [
      { name: 'Espejo', type: PokemonElementType.flying, power: null, description: 'Contraataca con el mismo movimiento empleado por el objetivo.' },
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
      { name: 'Remolino', type: PokemonElementType.normal, power: null, description: 'Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.' },
    ],
  },
  rattata: {
    flavorText: 'Vive allí donde haya comida disponible. Busca todo el día, sin descanso, algo comestible.',
    stats: { hp: 30, attack: 56, defense: 35, specialAttack: 25, specialDefense: 35, speed: 72 },
    moves: [
      { name: 'Hipercolmillo', type: PokemonElementType.normal, power: 80, description: 'Ataque con finos colmillos. Puede hacer retroceder al objetivo.' },
      { name: 'Superdiente', type: PokemonElementType.normal, power: null, description: 'Finos colmillos que reducen a la mitad los PS del objetivo.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
      { name: 'Agitacola', type: PokemonElementType.normal, power: null, description: 'Agita la cola para bajar la Defensa del equipo rival.' },
    ],
  },
  raticate: {
    flavorText: 'Lima sus colmillos royendo objetos duros. Con ellos puede destruir incluso paredes de hormigón.',
    stats: { hp: 55, attack: 81, defense: 60, specialAttack: 50, specialDefense: 70, speed: 97 },
    moves: [
      { name: 'Hipercolmillo', type: PokemonElementType.normal, power: 80, description: 'Ataque con finos colmillos. Puede hacer retroceder al objetivo.' },
      { name: 'Superdiente', type: PokemonElementType.normal, power: null, description: 'Finos colmillos que reducen a la mitad los PS del objetivo.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
      { name: 'Agitacola', type: PokemonElementType.normal, power: null, description: 'Agita la cola para bajar la Defensa del equipo rival.' },
    ],
  },
  spearow: {
    flavorText: 'Muy protector de su territorio, mueve sus cortas alas sin descanso para lanzarse a toda velocidad.',
    stats: { hp: 40, attack: 60, defense: 30, specialAttack: 31, specialDefense: 31, speed: 70 },
    moves: [
      { name: 'Pico Taladro', type: PokemonElementType.flying, power: 80, description: 'Picotazo giratorio y perforador muy potente.' },
      { name: 'Espejo', type: PokemonElementType.flying, power: null, description: 'Contraataca con el mismo movimiento empleado por el objetivo.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
    ],
  },
  fearow: {
    flavorText: 'Con sus enormes y magníficas alas, puede seguir volando sin tener que aterrizar para descansar.',
    stats: { hp: 65, attack: 90, defense: 65, specialAttack: 61, specialDefense: 61, speed: 100 },
    moves: [
      { name: 'Pico Taladro', type: PokemonElementType.flying, power: 80, description: 'Picotazo giratorio y perforador muy potente.' },
      { name: 'Espejo', type: PokemonElementType.flying, power: null, description: 'Contraataca con el mismo movimiento empleado por el objetivo.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
    ],
  },
  ekans: {
    flavorText: 'Cuanto más viejo, más crece este Pokémon. Por la noche, descansa en las ramas de los árboles.',
    stats: { hp: 35, attack: 60, defense: 44, specialAttack: 40, specialDefense: 54, speed: 55 },
    moves: [
      { name: 'Deslumbrar', type: PokemonElementType.normal, power: null, description: 'Intimida y asusta al objetivo con la mirada para dejarlo paralizado.' },
      { name: 'Ácido', type: PokemonElementType.poison, power: 40, description: 'Rocía a los enemigos con un ácido corrosivo. Puede bajar la Defensa Especial.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
    ],
  },
  arbok: {
    flavorText: 'El dibujo que tiene en la panza aterroriza. Los rivales más débiles salen huyendo al verlo.',
    stats: { hp: 60, attack: 95, defense: 69, specialAttack: 65, specialDefense: 79, speed: 80 },
    moves: [
      { name: 'Deslumbrar', type: PokemonElementType.normal, power: null, description: 'Intimida y asusta al objetivo con la mirada para dejarlo paralizado.' },
      { name: 'Ácido', type: PokemonElementType.poison, power: 40, description: 'Rocía a los enemigos con un ácido corrosivo. Puede bajar la Defensa Especial.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
    ],
  },
  pikachu: {
    flavorText: 'Levanta su cola para vigilar los alrededores. A veces, puede ser alcanzado por un rayo en esa pose.',
    stats: { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Atizar', type: PokemonElementType.normal, power: 80, description: 'Golpea con las extremidades.' },
      { name: 'Agitacola', type: PokemonElementType.normal, power: null, description: 'Agita la cola para bajar la Defensa del equipo rival.' },
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
    ],
  },
  raichu: {
    flavorText: 'Cuando se carga de electricidad, sus músculos se tensan y se vuelve más agresivo de lo normal.',
    stats: { hp: 60, attack: 90, defense: 55, specialAttack: 90, specialDefense: 80, speed: 110 },
    moves: [
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Agitacola', type: PokemonElementType.normal, power: null, description: 'Agita la cola para bajar la Defensa del equipo rival.' },
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
      { name: 'Rayo', type: PokemonElementType.electric, power: 90, description: 'Potente ataque eléctrico que puede paralizar al objetivo.' },
    ],
  },
  sandshrew: {
    flavorText: 'Este Pokémon permanece bajo tierra. Si se siente amenazado, se enrosca para defenderse.',
    stats: { hp: 50, attack: 75, defense: 85, specialAttack: 20, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Bucle Arena', type: PokemonElementType.ground, power: 35, description: 'Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
    ],
  },
  sandslash: {
    flavorText: 'Si cava a gran velocidad, puede que se le caigan las garras y púas. Vuelven a crecerle en un día.',
    stats: { hp: 75, attack: 100, defense: 110, specialAttack: 45, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Bucle Arena', type: PokemonElementType.ground, power: 35, description: 'Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
    ],
  },
  nidoran_female: {
    flavorText: 'Aunque pequeñas, sus venenosas púas son muy peligrosas. Tienen un cuerno más pequeño que los machos.',
    stats: { hp: 55, attack: 47, defense: 52, specialAttack: 40, specialDefense: 40, speed: 41 },
    moves: [
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Camelo', type: PokemonElementType.dark, power: null, description: 'Halaga al objetivo y lo confunde, pero también sube su Ataque Especial.' },
      { name: 'Doble Patada', type: PokemonElementType.fighting, power: 30, description: 'Una patada doble. Golpea dos veces.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
    ],
  },
  nidorina: {
    flavorText: 'Tiene un carácter afable. Emite ondas ultrasónicas para confundir al enemigo.',
    stats: { hp: 70, attack: 62, defense: 67, specialAttack: 55, specialDefense: 55, speed: 56 },
    moves: [
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Camelo', type: PokemonElementType.dark, power: null, description: 'Halaga al objetivo y lo confunde, pero también sube su Ataque Especial.' },
      { name: 'Doble Patada', type: PokemonElementType.fighting, power: 30, description: 'Una patada doble. Golpea dos veces.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
    ],
  },
  nidoqueen: {
    flavorText: 'Usa su cuerpo duro y escamoso para sellar la entrada a su madriguera y protegerse de los depredadores.',
    stats: { hp: 90, attack: 92, defense: 87, specialAttack: 75, specialDefense: 85, speed: 76 },
    moves: [
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Doble Patada', type: PokemonElementType.fighting, power: 30, description: 'Una patada doble. Golpea dos veces.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
      { name: 'Agitacola', type: PokemonElementType.normal, power: null, description: 'Agita la cola para bajar la Defensa del equipo rival.' },
    ],
  },
  nidoran_male: {
    flavorText: 'Saca las orejas por encima de la hierba para explorar el territorio. Le protege su cuerno venenoso.',
    stats: { hp: 46, attack: 57, defense: 40, specialAttack: 40, specialDefense: 40, speed: 50 },
    moves: [
      { name: 'Cornada', type: PokemonElementType.normal, power: 65, description: 'Ataca al objetivo con una cornada.' },
      { name: 'Perforador', type: PokemonElementType.normal, power: null, description: 'Ataque con taladro que fulmina en un golpe al objetivo si le toca.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Camelo', type: PokemonElementType.dark, power: null, description: 'Halaga al objetivo y lo confunde, pero también sube su Ataque Especial.' },
    ],
  },
  nidorino: {
    flavorText: 'Levanta sus grandes orejas para vigilar. Si detecta algo, atacará de inmediato.',
    stats: { hp: 61, attack: 72, defense: 57, specialAttack: 55, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'Cornada', type: PokemonElementType.normal, power: 65, description: 'Ataca al objetivo con una cornada.' },
      { name: 'Perforador', type: PokemonElementType.normal, power: null, description: 'Ataque con taladro que fulmina en un golpe al objetivo si le toca.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Camelo', type: PokemonElementType.dark, power: null, description: 'Halaga al objetivo y lo confunde, pero también sube su Ataque Especial.' },
    ],
  },
  nidoking: {
    flavorText: 'Es fácil reconocerlo por tener una dura piel y un gran cuerno lleno de peligrosísimo veneno.',
    stats: { hp: 81, attack: 102, defense: 77, specialAttack: 85, specialDefense: 75, speed: 85 },
    moves: [
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Megacuerno', type: PokemonElementType.bug, power: 120, description: 'Violenta embestida con cuernos imponentes.' },
      { name: 'Doble Patada', type: PokemonElementType.fighting, power: 30, description: 'Una patada doble. Golpea dos veces.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
    ],
  },
  clefairy: {
    flavorText: 'Se dice que la felicidad llegará a quien vea a un grupo de Clefairy bailando a la luz de la luna llena.',
    stats: { hp: 70, attack: 45, defense: 48, specialAttack: 60, specialDefense: 65, speed: 35 },
    moves: [
      { name: 'Puño Meteoro', type: PokemonElementType.steel, power: 90, description: 'Puñetazo que impacta como un meteorito y puede subir el Ataque del agresor.' },
      { name: 'Reducción', type: PokemonElementType.normal, power: null, description: 'El usuario mengua para aumentar mucho la Evasión.' },
      { name: 'Señuelo', type: PokemonElementType.normal, power: null, description: 'Llama la atención para concentrar todos los ataques de todos los del equipo rival hacia sí mismo.' },
      { name: 'Luz Lunar', type: PokemonElementType.normal, power: null, description: 'Restaura PS del usuario. La cantidad varía según el tiempo que haga.' },
    ],
  },
  clefable: {
    flavorText: 'Su oído es tan agudo que puede oír una aguja caer a 1 km. Vive en montañas solitarias.',
    stats: { hp: 95, attack: 70, defense: 73, specialAttack: 95, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Reducción', type: PokemonElementType.normal, power: null, description: 'El usuario mengua para aumentar mucho la Evasión.' },
      { name: 'Doble Bofetón', type: PokemonElementType.normal, power: 15, description: 'Abofetea de dos a cinco veces seguidas.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
      { name: 'Metrónomo', type: PokemonElementType.normal, power: null, description: 'El usuario mueve un dedo y estimula su cerebro para usar al azar casi cualquier movimiento.' },
    ],
  },
  vulpix: {
    flavorText: 'Cuando nace solo tiene una cola, pero a medida que crece, esta se va dividiendo desde la punta.',
    stats: { hp: 38, attack: 41, defense: 40, specialAttack: 50, specialDefense: 65, speed: 65 },
    moves: [
      { name: 'Rabia', type: PokemonElementType.ghost, power: null, description: 'Si el usuario se debilita al recibir un ataque, todos los PP de este último ataque serán eliminados.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Giro Fuego', type: PokemonElementType.fire, power: 35, description: 'Un aro de fuego que atrapa al objetivo de cuatro a cinco turnos.' },
      { name: 'Agitacola', type: PokemonElementType.normal, power: null, description: 'Agita la cola para bajar la Defensa del equipo rival.' },
    ],
  },
  ninetales: {
    flavorText: 'Tiene nueve colas y un pelaje de color dorado. Dicen que este Pokémon llega a vivir 1000 años.',
    stats: { hp: 73, attack: 76, defense: 75, specialAttack: 81, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Giro Fuego', type: PokemonElementType.fire, power: 35, description: 'Un aro de fuego que atrapa al objetivo de cuatro a cinco turnos.' },
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
      { name: 'Rayo Confuso', type: PokemonElementType.ghost, power: null, description: 'Rayo siniestro que confunde al objetivo.' },
    ],
  },
  jigglypuff: {
    flavorText: 'Cautiva con la mirada a su enemigo y hace que se quede profundamente dormido mientras entona una dulce melodía.',
    stats: { hp: 115, attack: 45, defense: 20, specialAttack: 45, specialDefense: 25, speed: 20 },
    moves: [
      { name: 'Doble Bofetón', type: PokemonElementType.normal, power: 15, description: 'Abofetea de dos a cinco veces seguidas.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
      { name: 'Anulación', type: PokemonElementType.normal, power: null, description: 'Desactiva el último movimiento del objetivo durante cuatro turnos.' },
    ],
  },
  wigglytuff: {
    flavorText: 'Su piel es tan suave que si dos de ellos se acurrucan juntos, no querrán separarse nunca.',
    stats: { hp: 140, attack: 70, defense: 45, specialAttack: 85, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'Doble Bofetón', type: PokemonElementType.normal, power: 15, description: 'Abofetea de dos a cinco veces seguidas.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
      { name: 'Anulación', type: PokemonElementType.normal, power: null, description: 'Desactiva el último movimiento del objetivo durante cuatro turnos.' },
      { name: 'Rizo Defensa', type: PokemonElementType.normal, power: null, description: 'Se enrosca para ocultar su punto débil. Sube la Defensa.' },
    ],
  },
  zubat: {
    flavorText: 'Aunque carezca de ojos, puede detectar obstáculos con las ondas ultrasónicas que emite su boca.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 30, specialDefense: 40, speed: 55 },
    moves: [
      { name: 'Colmillo Veneno', type: PokemonElementType.poison, power: 50, description: 'Colmillos tóxicos que pueden envenenar gravemente al objetivo.' },
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Mal de Ojo', type: PokemonElementType.normal, power: null, description: 'Mal de ojo que impide al objetivo huir de la batalla.' },
      { name: 'Supersónico', type: PokemonElementType.normal, power: null, description: 'Raras ondas sónicas que confunden al objetivo.' },
    ],
  },
  golbat: {
    flavorText: 'Cuando ataque, seguirá chupando energía de su víctima, aunque pese tanto que ya no pueda volar.',
    stats: { hp: 75, attack: 80, defense: 70, specialAttack: 65, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'Colmillo Veneno', type: PokemonElementType.poison, power: 50, description: 'Colmillos tóxicos que pueden envenenar gravemente al objetivo.' },
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Mal de Ojo', type: PokemonElementType.normal, power: null, description: 'Mal de ojo que impide al objetivo huir de la batalla.' },
      { name: 'Supersónico', type: PokemonElementType.normal, power: null, description: 'Raras ondas sónicas que confunden al objetivo.' },
    ],
  },
  oddish: {
    flavorText: 'Durante el día, se agazapa en el frío subsuelo huyendo del sol. La luz de la luna le hace crecer mucho.',
    stats: { hp: 45, attack: 50, defense: 55, specialAttack: 75, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Danza Pétalo', type: PokemonElementType.grass, power: 120, description: 'Lanza pétalos de dos a tres turnos y acaba confundiendo al atacante.' },
      { name: 'Luz Lunar', type: PokemonElementType.normal, power: null, description: 'Restaura PS del usuario. La cantidad varía según el tiempo que haga.' },
      { name: 'Ácido', type: PokemonElementType.poison, power: 40, description: 'Rocía a los enemigos con un ácido corrosivo. Puede bajar la Defensa Especial.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
    ],
  },
  gloom: {
    flavorText: '¡Huele bastante mal! De todas formas, una de cada mil personas aprecian su fétido olor.',
    stats: { hp: 60, attack: 65, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'Danza Pétalo', type: PokemonElementType.grass, power: 120, description: 'Lanza pétalos de dos a tres turnos y acaba confundiendo al atacante.' },
      { name: 'Luz Lunar', type: PokemonElementType.normal, power: null, description: 'Restaura PS del usuario. La cantidad varía según el tiempo que haga.' },
      { name: 'Ácido', type: PokemonElementType.poison, power: 40, description: 'Rocía a los enemigos con un ácido corrosivo. Puede bajar la Defensa Especial.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
    ],
  },
  vileplume: {
    flavorText: 'Cuanto mayores son sus pétalos, más tóxico es su polen. Le pesa la cabeza y le cuesta mantenerla erguida.',
    stats: { hp: 75, attack: 80, defense: 85, specialAttack: 110, specialDefense: 90, speed: 50 },
    moves: [
      { name: 'Danza Pétalo', type: PokemonElementType.grass, power: 120, description: 'Lanza pétalos de dos a tres turnos y acaba confundiendo al atacante.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Cura todos los problemas de estado del equipo con un suave aroma.' },
      { name: 'Paralizador', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que paraliza al objetivo.' },
      { name: 'Absorber', type: PokemonElementType.grass, power: 20, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
    ],
  },
  paras: {
    flavorText: 'Lleva en el lomo dos setas parásitas llamadas tochukaso, que crecen con él.',
    stats: { hp: 35, attack: 70, defense: 55, specialAttack: 45, specialDefense: 55, speed: 25 },
    moves: [
      { name: 'Espora', type: PokemonElementType.grass, power: null, description: 'Esparce esporas que inducen al sueño.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Cura todos los problemas de estado del equipo con un suave aroma.' },
      { name: 'Paralizador', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que paraliza al objetivo.' },
    ],
  },
  parasect: {
    flavorText: 'Parasect está dominado por una seta parásita mayor que él. Dispersa esporas venenosas.',
    stats: { hp: 60, attack: 95, defense: 80, specialAttack: 60, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'Espora', type: PokemonElementType.grass, power: null, description: 'Esparce esporas que inducen al sueño.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Cura todos los problemas de estado del equipo con un suave aroma.' },
      { name: 'Paralizador', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que paraliza al objetivo.' },
    ],
  },
  venonat: {
    flavorText: 'Sus grandes ojos son en realidad grupos de ojos diminutos. Por la noche se siente atraído por la luz.',
    stats: { hp: 60, attack: 55, defense: 50, specialAttack: 40, specialDefense: 55, speed: 45 },
    moves: [
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Paralizador', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que paraliza al objetivo.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
    ],
  },
  venomoth: {
    flavorText: 'Tiene las alas cubiertas de un polvillo de escamas que esparce cada vez que las bate.',
    stats: { hp: 70, attack: 65, defense: 60, specialAttack: 90, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Viento Plata', type: PokemonElementType.bug, power: 60, description: 'Fuerte viento con polvo de escamas. Puede subir todas las características de quien lo usa.' },
      { name: 'Paralizador', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que paraliza al objetivo.' },
    ],
  },
  diglett: {
    flavorText: 'Vive un metro por debajo del suelo, donde se alimenta de raíces. También aparece en la superficie.',
    stats: { hp: 10, attack: 55, defense: 25, specialAttack: 35, specialDefense: 45, speed: 95 },
    moves: [
      { name: 'Magnitud', type: PokemonElementType.ground, power: null, description: 'Sacudida sísmica de intensidad variable que afecta a todos los Pokémon a su alrededor.' },
      { name: 'Fisura', type: PokemonElementType.ground, power: null, description: 'Abre una grieta en el suelo y mete al objetivo en ella. Fulmina en un golpe.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
    ],
  },
  dugtrio: {
    flavorText: 'En combate, cava la tierra, se esconde y sale de repente para golpear a su rival. Nunca se sabe por dónde puede aparecer.',
    stats: { hp: 35, attack: 100, defense: 50, specialAttack: 50, specialDefense: 70, speed: 120 },
    moves: [
      { name: 'Magnitud', type: PokemonElementType.ground, power: null, description: 'Sacudida sísmica de intensidad variable que afecta a todos los Pokémon a su alrededor.' },
      { name: 'Triataque', type: PokemonElementType.normal, power: 80, description: 'Ataque triple que puede paralizar, quemar o congelar al objetivo.' },
      { name: 'Fisura', type: PokemonElementType.ground, power: null, description: 'Abre una grieta en el suelo y mete al objetivo en ella. Fulmina en un golpe.' },
      { name: 'Bucle Arena', type: PokemonElementType.ground, power: 35, description: 'Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.' },
    ],
  },
  meowth: {
    flavorText: 'Es de naturaleza nocturna. Le atraen los objetos brillantes.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: 'Día de Pago', type: PokemonElementType.normal, power: 40, description: 'Arroja monedas al objetivo. Las recupera al final del combate.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Sorpresa', type: PokemonElementType.normal, power: 40, description: 'Ataca primero y, además, hace retroceder al objetivo. Solo sirve en el primer turno.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  persian: {
    flavorText: 'Aunque es muy admirado por el pelo, es difícil de entrenar como mascota, porque es un poco travieso.',
    stats: { hp: 65, attack: 70, defense: 60, specialAttack: 65, specialDefense: 65, speed: 115 },
    moves: [
      { name: 'Día de Pago', type: PokemonElementType.normal, power: 40, description: 'Arroja monedas al objetivo. Las recupera al final del combate.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Sorpresa', type: PokemonElementType.normal, power: 40, description: 'Ataca primero y, además, hace retroceder al objetivo. Solo sirve en el primer turno.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  psyduck: {
    flavorText: 'Padece continuamente dolores de cabeza. Cuando son muy fuertes, empieza a usar misteriosos poderes.',
    stats: { hp: 50, attack: 52, defense: 48, specialAttack: 65, specialDefense: 50, speed: 55 },
    moves: [
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
      { name: 'Anulación', type: PokemonElementType.normal, power: null, description: 'Desactiva el último movimiento del objetivo durante cuatro turnos.' },
    ],
  },
  golduck: {
    flavorText: 'Aparece en ríos al anochecer. Puede usar poderes telequinéticos si su frente brilla misteriosamente.',
    stats: { hp: 80, attack: 82, defense: 78, specialAttack: 95, specialDefense: 80, speed: 85 },
    moves: [
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
      { name: 'Anulación', type: PokemonElementType.normal, power: null, description: 'Desactiva el último movimiento del objetivo durante cuatro turnos.' },
    ],
  },
  mankey: {
    flavorText: 'Es peligroso acercarse si se enfada sin razón aparente, ya que no distingue entre amigos y enemigos.',
    stats: { hp: 40, attack: 80, defense: 35, specialAttack: 35, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Golpe Kárate', type: PokemonElementType.fighting, power: 50, description: 'Da un golpe cortante. Suele ser crítico.' },
      { name: 'Tajo Cruzado', type: PokemonElementType.fighting, power: 100, description: 'Corte doble que suele propinar un golpe crítico.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
    ],
  },
  primeape: {
    flavorText: 'Solo se calma cuando nadie está cerca. Llegar a ver ese momento es realmente difícil.',
    stats: { hp: 65, attack: 105, defense: 60, specialAttack: 60, specialDefense: 70, speed: 95 },
    moves: [
      { name: 'Golpe Kárate', type: PokemonElementType.fighting, power: 50, description: 'Da un golpe cortante. Suele ser crítico.' },
      { name: 'Tajo Cruzado', type: PokemonElementType.fighting, power: 100, description: 'Corte doble que suele propinar un golpe crítico.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
    ],
  },
  growlithe: {
    flavorText: 'Es muy agradable y leal. Para ahuyentar al enemigo, se pone a ladrar y a dar bocados.',
    stats: { hp: 55, attack: 70, defense: 45, specialAttack: 70, specialDefense: 50, speed: 60 },
    moves: [
      { name: 'Rueda Fuego', type: PokemonElementType.fire, power: 60, description: 'Ataca envuelto en fuego. Puede causar quemaduras.' },
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Lanzallamas', type: PokemonElementType.fire, power: 90, description: 'Ataca con una gran ráfaga de fuego que puede causar quemaduras.' },
    ],
  },
  arcanine: {
    flavorText: 'Un Pokémon muy admirado desde la antigüedad por su belleza. Corre ágilmente como si tuviera alas.',
    stats: { hp: 90, attack: 110, defense: 80, specialAttack: 100, specialDefense: 80, speed: 95 },
    moves: [
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Mordisco', type: PokemonElementType.dark, power: 60, description: 'Un voraz bocado que puede hacer retroceder al objetivo.' },
    ],
  },
  poliwag: {
    flavorText: 'Tiene una piel extraordinaria, fina y húmeda, que deja entrever las vísceras que tiene dispuestas en espiral.',
    stats: { hp: 40, attack: 50, defense: 40, specialAttack: 40, specialDefense: 40, speed: 90 },
    moves: [
      { name: 'Doble Bofetón', type: PokemonElementType.normal, power: 15, description: 'Abofetea de dos a cinco veces seguidas.' },
      { name: 'Tambor', type: PokemonElementType.normal, power: null, description: 'Reduce la mitad de los PS máximos para mejorar al máximo el Ataque.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
    ],
  },
  poliwhirl: {
    flavorText: 'Capaz de vivir dentro o fuera del agua. Fuera del agua suda para mantener baboso su cuerpo.',
    stats: { hp: 65, attack: 65, defense: 65, specialAttack: 50, specialDefense: 50, speed: 90 },
    moves: [
      { name: 'Doble Bofetón', type: PokemonElementType.normal, power: 15, description: 'Abofetea de dos a cinco veces seguidas.' },
      { name: 'Tambor', type: PokemonElementType.normal, power: null, description: 'Reduce la mitad de los PS máximos para mejorar al máximo el Ataque.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
    ],
  },
  poliwrath: {
    flavorText: 'Tiene músculos muy desarrollados. Es capaz de nadar en el océano sin descanso.',
    stats: { hp: 90, attack: 95, defense: 95, specialAttack: 70, specialDefense: 90, speed: 70 },
    moves: [
      { name: 'Telépata', type: PokemonElementType.normal, power: null, description: 'El usuario adivina los movimientos del objetivo para hacer que su siguiente ataque no falle.' },
      { name: 'Doble Bofetón', type: PokemonElementType.normal, power: 15, description: 'Abofetea de dos a cinco veces seguidas.' },
      { name: 'Sumisión', type: PokemonElementType.fighting, power: 80, description: 'Tira al objetivo al suelo. También hiere al agresor.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
    ],
  },
  abra: {
    flavorText: 'Duerme 18 horas al día y mientras lo hace es capaz de usar una serie de poderes extrasensoriales.',
    stats: { hp: 25, attack: 20, defense: 15, specialAttack: 105, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Teletransporte', type: PokemonElementType.psychic, power: null, description: 'Permite huir al instante de combates contra Pokémon salvajes o viajar al último Centro Pokémon visitado.' },
    ],
  },
  kadabra: {
    flavorText: 'Cuando utiliza su poder psíquico, emite poderosas ondas alfa que pueden destruir dispositivos.',
    stats: { hp: 40, attack: 35, defense: 30, specialAttack: 120, specialDefense: 70, speed: 105 },
    moves: [
      { name: 'Kinético', type: PokemonElementType.psychic, power: null, description: 'Dobla una cuchara para distraer al objetivo y bajar su nivel de Precisión.' },
      { name: 'Teletransporte', type: PokemonElementType.psychic, power: null, description: 'Permite huir al instante de combates contra Pokémon salvajes o viajar al último Centro Pokémon visitado.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
      { name: 'Anulación', type: PokemonElementType.normal, power: null, description: 'Desactiva el último movimiento del objetivo durante cuatro turnos.' },
    ],
  },
  alakazam: {
    flavorText: 'Sus neuronas se multiplican continuamente durante su vida. Por eso, siempre lo recuerda todo.',
    stats: { hp: 55, attack: 50, defense: 45, specialAttack: 135, specialDefense: 95, speed: 120 },
    moves: [
      { name: 'Kinético', type: PokemonElementType.psychic, power: null, description: 'Dobla una cuchara para distraer al objetivo y bajar su nivel de Precisión.' },
      { name: 'Teletransporte', type: PokemonElementType.psychic, power: null, description: 'Permite huir al instante de combates contra Pokémon salvajes o viajar al último Centro Pokémon visitado.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
      { name: 'Anulación', type: PokemonElementType.normal, power: null, description: 'Desactiva el último movimiento del objetivo durante cuatro turnos.' },
    ],
  },
  machop: {
    flavorText: 'Levanta un Graveler para mantener sus músculos en forma. Domina todas las artes marciales.',
    stats: { hp: 70, attack: 80, defense: 50, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'Golpe Kárate', type: PokemonElementType.fighting, power: 50, description: 'Da un golpe cortante. Suele ser crítico.' },
      { name: 'Llave Vital', type: PokemonElementType.fighting, power: 70, description: 'El usuario ataca el último, pero no falla.' },
      { name: 'Tajo Cruzado', type: PokemonElementType.fighting, power: 100, description: 'Corte doble que suele propinar un golpe crítico.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
    ],
  },
  machoke: {
    flavorText: 'Su musculoso cuerpo es tan fuerte que usa un cinto antifuerza para controlar sus movimientos.',
    stats: { hp: 80, attack: 100, defense: 70, specialAttack: 50, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'Golpe Kárate', type: PokemonElementType.fighting, power: 50, description: 'Da un golpe cortante. Suele ser crítico.' },
      { name: 'Llave Vital', type: PokemonElementType.fighting, power: 70, description: 'El usuario ataca el último, pero no falla.' },
      { name: 'Tajo Cruzado', type: PokemonElementType.fighting, power: 100, description: 'Corte doble que suele propinar un golpe crítico.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
    ],
  },
  machamp: {
    flavorText: 'Tiene cuatro brazos tan bien desarrollados que puede dar una serie de 1000 puñetazos en cuestión de dos segundos.',
    stats: { hp: 90, attack: 130, defense: 80, specialAttack: 65, specialDefense: 85, speed: 55 },
    moves: [
      { name: 'Golpe Kárate', type: PokemonElementType.fighting, power: 50, description: 'Da un golpe cortante. Suele ser crítico.' },
      { name: 'Llave Vital', type: PokemonElementType.fighting, power: 70, description: 'El usuario ataca el último, pero no falla.' },
      { name: 'Tajo Cruzado', type: PokemonElementType.fighting, power: 100, description: 'Corte doble que suele propinar un golpe crítico.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
    ],
  },
  bellsprout: {
    flavorText: 'Aunque su cuerpo es extremadamente delgado, es muy rápido a la hora de capturar sus presas.',
    stats: { hp: 50, attack: 75, defense: 35, specialAttack: 70, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Látigo Cepa', type: PokemonElementType.grass, power: 45, description: 'Azota al objetivo con ramas finas.' },
      { name: 'Ácido', type: PokemonElementType.poison, power: 40, description: 'Rocía a los enemigos con un ácido corrosivo. Puede bajar la Defensa Especial.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
    ],
  },
  weepinbell: {
    flavorText: 'Las hojas que tiene actúan como cuchillas en combate. Otra de sus armas es el corrosivo fluido que expulsa.',
    stats: { hp: 65, attack: 90, defense: 50, specialAttack: 85, specialDefense: 45, speed: 55 },
    moves: [
      { name: 'Látigo Cepa', type: PokemonElementType.grass, power: 45, description: 'Azota al objetivo con ramas finas.' },
      { name: 'Ácido', type: PokemonElementType.poison, power: 40, description: 'Rocía a los enemigos con un ácido corrosivo. Puede bajar la Defensa Especial.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
    ],
  },
  victreebel: {
    flavorText: 'Dicen que vive en grandes colonias en el interior de las junglas, aunque nadie ha podido verificarlo.',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 100, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Látigo Cepa', type: PokemonElementType.grass, power: 45, description: 'Azota al objetivo con ramas finas.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Escupir', type: PokemonElementType.normal, power: null, description: 'Libera de una vez la energía acumulada con Reserva.' },
      { name: 'Tragar', type: PokemonElementType.normal, power: null, description: 'Absorbe la energía acumulada con Reserva y restaura PS.' },
    ],
  },
  tentacool: {
    flavorText: 'Su cuerpo se compone casi en exclusiva de agua. Lanza extraños rayos con sus ojos cristalinos.',
    stats: { hp: 40, attack: 40, defense: 35, specialAttack: 50, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Barrera', type: PokemonElementType.psychic, power: null, description: 'Crea una barrera que aumenta mucho la Defensa.' },
      { name: 'Ácido', type: PokemonElementType.poison, power: 40, description: 'Rocía a los enemigos con un ácido corrosivo. Puede bajar la Defensa Especial.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
    ],
  },
  tentacruel: {
    flavorText: 'Cuando caza, extiende los cortos tentáculos que tiene para atrapar e inmovilizar a su presa.',
    stats: { hp: 80, attack: 70, defense: 65, specialAttack: 80, specialDefense: 120, speed: 100 },
    moves: [
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Barrera', type: PokemonElementType.psychic, power: null, description: 'Crea una barrera que aumenta mucho la Defensa.' },
      { name: 'Ácido', type: PokemonElementType.poison, power: 40, description: 'Rocía a los enemigos con un ácido corrosivo. Puede bajar la Defensa Especial.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
    ],
  },
  geodude: {
    flavorText: 'Aparecen en llanos y montañas. Como parecen rocas, la gente se tropieza con ellos o los pisa.',
    stats: { hp: 40, attack: 80, defense: 100, specialAttack: 30, specialDefense: 30, speed: 20 },
    moves: [
      { name: 'Magnitud', type: PokemonElementType.ground, power: null, description: 'Sacudida sísmica de intensidad variable que afecta a todos los Pokémon a su alrededor.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Lanzarrocas', type: PokemonElementType.rock, power: 50, description: 'Tira una pequeña roca al objetivo.' },
      { name: 'Explosión', type: PokemonElementType.normal, power: 250, description: 'El atacante causa una grandísima explosión y hiere a todos a su alrededor. El usuario se debilita de inmediato.' },
    ],
  },
  graveler: {
    flavorText: 'De naturaleza descuidada y libre, no le importa dañarse cuando baja rodando montañas.',
    stats: { hp: 55, attack: 95, defense: 115, specialAttack: 45, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Magnitud', type: PokemonElementType.ground, power: null, description: 'Sacudida sísmica de intensidad variable que afecta a todos los Pokémon a su alrededor.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Lanzarrocas', type: PokemonElementType.rock, power: 50, description: 'Tira una pequeña roca al objetivo.' },
      { name: 'Explosión', type: PokemonElementType.normal, power: 250, description: 'El atacante causa una grandísima explosión y hiere a todos a su alrededor. El usuario se debilita de inmediato.' },
    ],
  },
  golem: {
    flavorText: 'Se lanza montaña abajo y deja un surco desde la cima hasta el pie. Es mejor mantenerse alejado.',
    stats: { hp: 80, attack: 120, defense: 130, specialAttack: 55, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Magnitud', type: PokemonElementType.ground, power: null, description: 'Sacudida sísmica de intensidad variable que afecta a todos los Pokémon a su alrededor.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Lanzarrocas', type: PokemonElementType.rock, power: 50, description: 'Tira una pequeña roca al objetivo.' },
      { name: 'Explosión', type: PokemonElementType.normal, power: 250, description: 'El atacante causa una grandísima explosión y hiere a todos a su alrededor. El usuario se debilita de inmediato.' },
    ],
  },
  ponyta: {
    flavorText: 'Cuando nace, apenas puede tenerse en pie. Pero va fortaleciendo las patas en cuanto empieza a galopar.',
    stats: { hp: 50, attack: 85, defense: 55, specialAttack: 65, specialDefense: 65, speed: 90 },
    moves: [
      { name: 'Pisotón', type: PokemonElementType.normal, power: 65, description: 'Tremendo pisotón que puede hacer retroceder al objetivo.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Giro Fuego', type: PokemonElementType.fire, power: 35, description: 'Un aro de fuego que atrapa al objetivo de cuatro a cinco turnos.' },
      { name: 'Bote', type: PokemonElementType.flying, power: 85, description: 'Primer turno: bota. Segundo turno: golpea. Puede paralizar.' },
    ],
  },
  rapidash: {
    flavorText: 'Muy competitivo, este Pokémon perseguirá a todo lo que se mueva rápido e intentará salir airoso.',
    stats: { hp: 65, attack: 100, defense: 70, specialAttack: 80, specialDefense: 80, speed: 105 },
    moves: [
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Pisotón', type: PokemonElementType.normal, power: 65, description: 'Tremendo pisotón que puede hacer retroceder al objetivo.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Giro Fuego', type: PokemonElementType.fire, power: 35, description: 'Un aro de fuego que atrapa al objetivo de cuatro a cinco turnos.' },
    ],
  },
  slowpoke: {
    flavorText: 'Está siempre en su mundo, pero nadie sabe en qué piensa. Suele pescar con la cola.',
    stats: { hp: 90, attack: 65, defense: 65, specialAttack: 40, specialDefense: 40, speed: 15 },
    moves: [
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
      { name: 'Anulación', type: PokemonElementType.normal, power: null, description: 'Desactiva el último movimiento del objetivo durante cuatro turnos.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'El usuario olvida sus preocupaciones y aumenta mucho la Defensa Especial.' },
    ],
  },
  slowbro: {
    flavorText: 'Tiene una cola tan apetecible, que el Shellder que va enganchado a ella no se soltará por nada del mundo.',
    stats: { hp: 95, attack: 75, defense: 110, specialAttack: 100, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'Refugio', type: PokemonElementType.water, power: null, description: 'El usuario se protege en su coraza y sube la Defensa.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
      { name: 'Anulación', type: PokemonElementType.normal, power: null, description: 'Desactiva el último movimiento del objetivo durante cuatro turnos.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
    ],
  },
  magnemite: {
    flavorText: 'Las unidades a los lados de su cuerpo generan energía antigravitatoria para mantenerlo en el aire.',
    stats: { hp: 25, attack: 35, defense: 70, specialAttack: 95, specialDefense: 55, speed: 45 },
    moves: [
      { name: 'Bomba Sónica', type: PokemonElementType.normal, power: null, description: 'Lanza ondas de choque que restan 20 PS al objetivo.' },
      { name: 'Fijar Blanco', type: PokemonElementType.normal, power: null, description: 'Fija el blanco para que el siguiente ataque no falle.' },
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
      { name: 'Supersónico', type: PokemonElementType.normal, power: null, description: 'Raras ondas sónicas que confunden al objetivo.' },
    ],
  },
  magneton: {
    flavorText: 'Lo constituye un grupo de Magnemite. Descarga potentes ondas magnéticas de alto voltaje.',
    stats: { hp: 50, attack: 60, defense: 95, specialAttack: 120, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Bomba Sónica', type: PokemonElementType.normal, power: null, description: 'Lanza ondas de choque que restan 20 PS al objetivo.' },
      { name: 'Fijar Blanco', type: PokemonElementType.normal, power: null, description: 'Fija el blanco para que el siguiente ataque no falle.' },
      { name: 'Triataque', type: PokemonElementType.normal, power: 80, description: 'Ataque triple que puede paralizar, quemar o congelar al objetivo.' },
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
    ],
  },
  farfetchd: {
    flavorText: 'El puerro que lleva es su mejor arma. Suele usarlo como espada para cortar cosas.',
    stats: { hp: 52, attack: 90, defense: 55, specialAttack: 58, specialDefense: 62, speed: 60 },
    moves: [
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
      { name: 'Falso Tortazo', type: PokemonElementType.normal, power: 40, description: 'Ataque moderado que no debilita al objetivo y le deja al menos 1 PS.' },
    ],
  },
  doduo: {
    flavorText: 'Este Pokémon de dos cabezas es el resultado de una mutación. Cuando corre, puede alcanzar casi 100 km por hora.',
    stats: { hp: 35, attack: 85, defense: 45, specialAttack: 35, specialDefense: 35, speed: 75 },
    moves: [
      { name: 'Pico Taladro', type: PokemonElementType.flying, power: 80, description: 'Picotazo giratorio y perforador muy potente.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Triataque', type: PokemonElementType.normal, power: 80, description: 'Ataque triple que puede paralizar, quemar o congelar al objetivo.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
    ],
  },
  dodrio: {
    flavorText: 'Más vale no perder de vista ninguna de las tres cabezas. De lo contrario, el número de picotazos será enorme.',
    stats: { hp: 60, attack: 110, defense: 70, specialAttack: 60, specialDefense: 60, speed: 110 },
    moves: [
      { name: 'Pico Taladro', type: PokemonElementType.flying, power: 80, description: 'Picotazo giratorio y perforador muy potente.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Triataque', type: PokemonElementType.normal, power: 80, description: 'Ataque triple que puede paralizar, quemar o congelar al objetivo.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
    ],
  },
  seel: {
    flavorText: 'Este Pokémon vive en icebergs. Nada en el mar y usa el cuerno de su cabeza para romper el hielo.',
    stats: { hp: 65, attack: 45, defense: 55, specialAttack: 45, specialDefense: 70, speed: 45 },
    moves: [
      { name: 'Rayo Aurora', type: PokemonElementType.ice, power: 65, description: 'Rayo multicolor que puede reducir el Ataque.' },
      { name: 'Gruñido', type: PokemonElementType.normal, power: null, description: 'Dulce gruñido que reduce el Ataque del contrincante.' },
      { name: 'Rayo Hielo', type: PokemonElementType.ice, power: 90, description: 'Rayo de hielo que puede llegar a congelar.' },
      { name: 'Velo Sagrado', type: PokemonElementType.normal, power: null, description: 'Un escudo que protege de problemas de estado, como el sueño o la parálisis, durante cinco turnos.' },
    ],
  },
  dewgong: {
    flavorText: 'Está recubierto de un luminoso pelaje blanco. Este Pokémon aumenta su actividad cuando bajan las temperaturas.',
    stats: { hp: 90, attack: 70, defense: 80, specialAttack: 70, specialDefense: 95, speed: 70 },
    moves: [
      { name: 'Frío Polar', type: PokemonElementType.ice, power: null, description: 'Ataque de frío polar que debilita al objetivo si le alcanza.' },
      { name: 'Rayo Aurora', type: PokemonElementType.ice, power: 65, description: 'Rayo multicolor que puede reducir el Ataque.' },
      { name: 'Gruñido', type: PokemonElementType.normal, power: null, description: 'Dulce gruñido que reduce el Ataque del contrincante.' },
      { name: 'Rayo Señal', type: PokemonElementType.bug, power: 75, description: 'Ataca con un rayo de luz siniestro. Puede confundir al objetivo.' },
    ],
  },
  grimer: {
    flavorText: 'Nace de lodo alterado al filtrarse en el agua los rayos X reflejados por la Luna. Se alimenta de sustancias desagradables.',
    stats: { hp: 80, attack: 80, defense: 50, specialAttack: 40, specialDefense: 50, speed: 25 },
    moves: [
      { name: 'Residuos', type: PokemonElementType.poison, power: 65, description: 'Arroja residuos al objetivo. Puede llegar a envenenar.' },
      { name: 'Reducción', type: PokemonElementType.normal, power: null, description: 'El usuario mengua para aumentar mucho la Evasión.' },
      { name: 'Gas Venenoso', type: PokemonElementType.poison, power: null, description: 'Lanza una nube de gas tóxico a los rivales. Produce envenenamiento.' },
      { name: 'Armadura Ácida', type: PokemonElementType.poison, power: null, description: 'Transforma la estructura celular para hacerse líquido y aumenta mucho la Defensa.' },
    ],
  },
  muk: {
    flavorText: 'Su cuerpo segrega un fluido tóxico que elimina la vida vegetal cuando la toca.',
    stats: { hp: 105, attack: 105, defense: 75, specialAttack: 65, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'Residuos', type: PokemonElementType.poison, power: 65, description: 'Arroja residuos al objetivo. Puede llegar a envenenar.' },
      { name: 'Reducción', type: PokemonElementType.normal, power: null, description: 'El usuario mengua para aumentar mucho la Evasión.' },
      { name: 'Gas Venenoso', type: PokemonElementType.poison, power: null, description: 'Lanza una nube de gas tóxico a los rivales. Produce envenenamiento.' },
      { name: 'Armadura Ácida', type: PokemonElementType.poison, power: null, description: 'Transforma la estructura celular para hacerse líquido y aumenta mucho la Defensa.' },
    ],
  },
  shellder: {
    flavorText: 'La concha lo protege de cualquier tipo de ataque. Solo es vulnerable cuando se abre.',
    stats: { hp: 30, attack: 65, defense: 100, specialAttack: 45, specialDefense: 25, speed: 40 },
    moves: [
      { name: 'Tenaza', type: PokemonElementType.water, power: 35, description: 'Atrapa y atenaza con fuerza durante cuatro o cinco turnos.' },
      { name: 'Rayo Aurora', type: PokemonElementType.ice, power: 65, description: 'Rayo multicolor que puede reducir el Ataque.' },
      { name: 'Refugio', type: PokemonElementType.water, power: null, description: 'El usuario se protege en su coraza y sube la Defensa.' },
      { name: 'Carámbano', type: PokemonElementType.ice, power: 25, description: 'Ataca lanzando de dos a cinco ráfagas consecutivas de carámbanos.' },
    ],
  },
  cloyster: {
    flavorText: 'A los Cloyster que viven en las fuertes corrientes marinas les crecen largas y afiladas púas en la concha.',
    stats: { hp: 50, attack: 95, defense: 180, specialAttack: 85, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Clavo Cañón', type: PokemonElementType.normal, power: 20, description: 'Lanza finas púas que hieren de dos a cinco veces.' },
      { name: 'Rayo Aurora', type: PokemonElementType.ice, power: 65, description: 'Rayo multicolor que puede reducir el Ataque.' },
      { name: 'Refugio', type: PokemonElementType.water, power: null, description: 'El usuario se protege en su coraza y sube la Defensa.' },
      { name: 'Supersónico', type: PokemonElementType.normal, power: null, description: 'Raras ondas sónicas que confunden al objetivo.' },
    ],
  },
  gastly: {
    flavorText: 'Su etéreo cuerpo está hecho de gas. Puede envolver a un oponente de cualquier tamaño hasta ahogarlo.',
    stats: { hp: 30, attack: 35, defense: 30, specialAttack: 100, specialDefense: 35, speed: 80 },
    moves: [
      { name: 'Lengüetazo', type: PokemonElementType.ghost, power: 30, description: 'Una lengua ataca al objetivo. Puede causar parálisis.' },
      { name: 'Mal de Ojo', type: PokemonElementType.normal, power: null, description: 'Mal de ojo que impide al objetivo huir de la batalla.' },
      { name: 'Pesadilla', type: PokemonElementType.ghost, power: null, description: 'El objetivo dormido sufre una pesadilla que le hace perder PS en cada turno.' },
      { name: 'Mismo Destino', type: PokemonElementType.ghost, power: null, description: 'Si el usuario se debilita por un ataque rival antes de usar otro movimiento, el Pokémon rival se debilitará también.' },
    ],
  },
  haunter: {
    flavorText: 'Cuando tienes la sensación de que te están observando, seguro que es porque Haunter está cerca.',
    stats: { hp: 45, attack: 50, defense: 45, specialAttack: 115, specialDefense: 55, speed: 95 },
    moves: [
      { name: 'Puño Sombra', type: PokemonElementType.ghost, power: 60, description: 'Puñetazo ineludible procedente de las sombras.' },
      { name: 'Lengüetazo', type: PokemonElementType.ghost, power: 30, description: 'Una lengua ataca al objetivo. Puede causar parálisis.' },
      { name: 'Mal de Ojo', type: PokemonElementType.normal, power: null, description: 'Mal de ojo que impide al objetivo huir de la batalla.' },
      { name: 'Pesadilla', type: PokemonElementType.ghost, power: null, description: 'El objetivo dormido sufre una pesadilla que le hace perder PS en cada turno.' },
    ],
  },
  gengar: {
    flavorText: 'Se esconde entre las sombras. Se dice que donde Gengar acecha, la temperatura baja 5 °C.',
    stats: { hp: 60, attack: 65, defense: 60, specialAttack: 130, specialDefense: 75, speed: 110 },
    moves: [
      { name: 'Puño Sombra', type: PokemonElementType.ghost, power: 60, description: 'Puñetazo ineludible procedente de las sombras.' },
      { name: 'Lengüetazo', type: PokemonElementType.ghost, power: 30, description: 'Una lengua ataca al objetivo. Puede causar parálisis.' },
      { name: 'Mal de Ojo', type: PokemonElementType.normal, power: null, description: 'Mal de ojo que impide al objetivo huir de la batalla.' },
      { name: 'Pesadilla', type: PokemonElementType.ghost, power: null, description: 'El objetivo dormido sufre una pesadilla que le hace perder PS en cada turno.' },
    ],
  },
  onix: {
    flavorText: 'Cava a gran velocidad en busca de comida. Los túneles que deja son usados por los Diglett.',
    stats: { hp: 35, attack: 45, defense: 160, specialAttack: 30, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Lanzarrocas', type: PokemonElementType.rock, power: 50, description: 'Tira una pequeña roca al objetivo.' },
      { name: 'Atadura', type: PokemonElementType.normal, power: 15, description: 'Ata y oprime de cuatro a cinco turnos.' },
      { name: 'Dragoaliento', type: PokemonElementType.dragon, power: 60, description: 'Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo.' },
      { name: 'Bucle Arena', type: PokemonElementType.ground, power: 35, description: 'Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.' },
    ],
  },
  drowzee: {
    flavorText: 'Adormece a sus enemigos y se come sus sueños. A veces se pone enfermo si come pesadillas.',
    stats: { hp: 60, attack: 48, defense: 45, specialAttack: 43, specialDefense: 90, speed: 42 },
    moves: [
      { name: 'Meditación', type: PokemonElementType.psychic, power: null, description: 'El usuario reposa y medita para potenciar el Ataque.' },
      { name: 'Gas Venenoso', type: PokemonElementType.poison, power: null, description: 'Lanza una nube de gas tóxico a los rivales. Produce envenenamiento.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
    ],
  },
  hypno: {
    flavorText: 'Lleva un péndulo en la mano. Una vez, hizo desaparecer a un niño al que había hipnotizado.',
    stats: { hp: 85, attack: 73, defense: 70, specialAttack: 73, specialDefense: 115, speed: 67 },
    moves: [
      { name: 'Meditación', type: PokemonElementType.psychic, power: null, description: 'El usuario reposa y medita para potenciar el Ataque.' },
      { name: 'Gas Venenoso', type: PokemonElementType.poison, power: null, description: 'Lanza una nube de gas tóxico a los rivales. Produce envenenamiento.' },
      { name: 'Pesadilla', type: PokemonElementType.ghost, power: null, description: 'El objetivo dormido sufre una pesadilla que le hace perder PS en cada turno.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
    ],
  },
  krabby: {
    flavorText: 'Ante el peligro, se camufla con las burbujas que desprende su boca, para parecer más grande.',
    stats: { hp: 30, attack: 105, defense: 90, specialAttack: 25, specialDefense: 25, speed: 50 },
    moves: [
      { name: 'Martillazo', type: PokemonElementType.water, power: 100, description: 'Golpea con fuerza con una pinza enorme. Suele ser crítico.' },
      { name: 'Guillotina', type: PokemonElementType.normal, power: null, description: 'Ataque con pinzas que debilita al oponente de un golpe si acierta.' },
      { name: 'Agarre', type: PokemonElementType.normal, power: 55, description: 'Atrapa y atenaza al objetivo.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
    ],
  },
  kingler: {
    flavorText: 'La pinza tan grande que tiene posee una fuerza de 10 000 caballos de potencia. Pero, por su gran tamaño, cuesta moverla.',
    stats: { hp: 55, attack: 130, defense: 115, specialAttack: 50, specialDefense: 50, speed: 75 },
    moves: [
      { name: 'Martillazo', type: PokemonElementType.water, power: 100, description: 'Golpea con fuerza con una pinza enorme. Suele ser crítico.' },
      { name: 'Guillotina', type: PokemonElementType.normal, power: null, description: 'Ataque con pinzas que debilita al oponente de un golpe si acierta.' },
      { name: 'Agarre', type: PokemonElementType.normal, power: 55, description: 'Atrapa y atenaza al objetivo.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
    ],
  },
  voltorb: {
    flavorText: 'Fue descubierto cuando se crearon las Poké Balls. Se dice que tiene algo que ver con ellas.',
    stats: { hp: 40, attack: 30, defense: 50, specialAttack: 55, specialDefense: 55, speed: 100 },
    moves: [
      { name: 'Bomba Sónica', type: PokemonElementType.normal, power: null, description: 'Lanza ondas de choque que restan 20 PS al objetivo.' },
      { name: 'Manto Espejo', type: PokemonElementType.psychic, power: null, description: 'Responde a un ataque especial ocasionando el doble del daño recibido.' },
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
    ],
  },
  electrode: {
    flavorText: 'Explotan a la mínima. Por eso se les tiene mucho miedo. Estos Pokémon reciben el mote de Bomba Ball.',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 80, specialDefense: 80, speed: 150 },
    moves: [
      { name: 'Bomba Sónica', type: PokemonElementType.normal, power: null, description: 'Lanza ondas de choque que restan 20 PS al objetivo.' },
      { name: 'Manto Espejo', type: PokemonElementType.psychic, power: null, description: 'Responde a un ataque especial ocasionando el doble del daño recibido.' },
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
    ],
  },
  exeggcute: {
    flavorText: 'Estos seis huevos se comunican por telepatía. Si se separan, se pueden reunir rápidamente.',
    stats: { hp: 60, attack: 40, defense: 80, specialAttack: 60, specialDefense: 45, speed: 40 },
    moves: [
      { name: 'Bombardeo', type: PokemonElementType.normal, power: 15, description: 'Arroja esferas al objetivo entre dos y cinco veces seguidas.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Paralizador', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que paraliza al objetivo.' },
    ],
  },
  exeggutor: {
    flavorText: 'Sus tres cabezas piensan de forma independiente. Sin embargo, son amigas y no suelen discutir nunca.',
    stats: { hp: 95, attack: 95, defense: 85, specialAttack: 125, specialDefense: 75, speed: 55 },
    moves: [
      { name: 'Bombardeo', type: PokemonElementType.normal, power: 15, description: 'Arroja esferas al objetivo entre dos y cinco veces seguidas.' },
      { name: 'Bomba Huevo', type: PokemonElementType.normal, power: 100, description: 'Arroja un huevo al objetivo con gran fuerza.' },
      { name: 'Pisotón', type: PokemonElementType.normal, power: 65, description: 'Tremendo pisotón que puede hacer retroceder al objetivo.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
    ],
  },
  cubone: {
    flavorText: 'Lleva puesto el cráneo de su madre. Cuando se siente solo se pone a gritar muy fuerte.',
    stats: { hp: 50, attack: 50, defense: 95, specialAttack: 40, specialDefense: 50, speed: 35 },
    moves: [
      { name: 'Huesomerang', type: PokemonElementType.ground, power: 50, description: 'Lanza un hueso a modo de bumerán que golpea dos veces.' },
      { name: 'Hueso Palo', type: PokemonElementType.ground, power: 65, description: 'Aporrea con un hueso. Puede hacer retroceder al objetivo.' },
      { name: 'Ataque Óseo', type: PokemonElementType.ground, power: 25, description: 'Hueso en ristre, aporrea al objetivo de dos a cinco veces.' },
      { name: 'Saña', type: PokemonElementType.normal, power: 120, description: 'Ataca de dos a tres turnos y acaba confundiendo al agresor.' },
    ],
  },
  marowak: {
    flavorText: 'Es pequeño y siempre ha sido muy débil. Cuando empezó a usar huesos, se volvió más violento.',
    stats: { hp: 60, attack: 80, defense: 110, specialAttack: 50, specialDefense: 80, speed: 45 },
    moves: [
      { name: 'Huesomerang', type: PokemonElementType.ground, power: 50, description: 'Lanza un hueso a modo de bumerán que golpea dos veces.' },
      { name: 'Hueso Palo', type: PokemonElementType.ground, power: 65, description: 'Aporrea con un hueso. Puede hacer retroceder al objetivo.' },
      { name: 'Ataque Óseo', type: PokemonElementType.ground, power: 25, description: 'Hueso en ristre, aporrea al objetivo de dos a cinco veces.' },
      { name: 'Saña', type: PokemonElementType.normal, power: 120, description: 'Ataca de dos a tres turnos y acaba confundiendo al agresor.' },
    ],
  },
  hitmonlee: {
    flavorText: 'Encoge y estira las patas a su antojo. Cuando las estira, es capaz de propinar una buena patada al enemigo.',
    stats: { hp: 50, attack: 120, defense: 53, specialAttack: 35, specialDefense: 110, speed: 87 },
    moves: [
      { name: 'Patada Giro', type: PokemonElementType.fighting, power: 60, description: 'Da una patada rápida y circular. Puede hacer retroceder al objetivo.' },
      { name: 'Patada Salto', type: PokemonElementType.fighting, power: 100, description: 'Da un salto y pega una patada. Si falla, se lesiona.' },
      { name: 'Meditación', type: PokemonElementType.psychic, power: null, description: 'El usuario reposa y medita para potenciar el Ataque.' },
      { name: 'Telépata', type: PokemonElementType.normal, power: null, description: 'El usuario adivina los movimientos del objetivo para hacer que su siguiente ataque no falle.' },
    ],
  },
  hitmonchan: {
    flavorText: 'Los potentes golpes de sus brazos pueden pulverizar el hormigón. Descansa tras luchar tres minutos.',
    stats: { hp: 50, attack: 105, defense: 79, specialAttack: 35, specialDefense: 110, speed: 76 },
    moves: [
      { name: 'Puño Cometa', type: PokemonElementType.normal, power: 18, description: 'Pega de dos a cinco veces seguidas.' },
      { name: 'Gancho Alto', type: PokemonElementType.fighting, power: 85, description: 'Gancho ascendente de gran ímpetu.' },
      { name: 'Ultrapuño', type: PokemonElementType.fighting, power: 40, description: 'Puñetazo que se da rápido para golpear primero.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
    ],
  },
  lickitung: {
    flavorText: 'Su larga lengua, recubierta de saliva pegajosa, se pega a todo, por lo que es muy útil.',
    stats: { hp: 90, attack: 55, defense: 75, specialAttack: 60, specialDefense: 75, speed: 30 },
    moves: [
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
      { name: 'Lengüetazo', type: PokemonElementType.ghost, power: 30, description: 'Una lengua ataca al objetivo. Puede causar parálisis.' },
      { name: 'Alivio', type: PokemonElementType.normal, power: null, description: 'Descansa para curar parálisis, envenenamiento o quemaduras.' },
      { name: 'Pisotón', type: PokemonElementType.normal, power: 65, description: 'Tremendo pisotón que puede hacer retroceder al objetivo.' },
    ],
  },
  koffing: {
    flavorText: 'Tiene forma de globo y es muy ligero. Está compuesto por gases tóxicos y apesta.',
    stats: { hp: 40, attack: 65, defense: 95, specialAttack: 60, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Residuos', type: PokemonElementType.poison, power: 65, description: 'Arroja residuos al objetivo. Puede llegar a envenenar.' },
      { name: 'Gas Venenoso', type: PokemonElementType.poison, power: null, description: 'Lanza una nube de gas tóxico a los rivales. Produce envenenamiento.' },
      { name: 'Polución', type: PokemonElementType.poison, power: 30, description: 'El objetivo es atacado con gases tóxicos que pueden llegar a envenenar.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
    ],
  },
  weezing: {
    flavorText: 'Si uno de los gemelos Koffing se infla, el otro se desinfla. Mezclan constantemente sus venenosos gases.',
    stats: { hp: 65, attack: 90, defense: 120, specialAttack: 85, specialDefense: 70, speed: 60 },
    moves: [
      { name: 'Residuos', type: PokemonElementType.poison, power: 65, description: 'Arroja residuos al objetivo. Puede llegar a envenenar.' },
      { name: 'Gas Venenoso', type: PokemonElementType.poison, power: null, description: 'Lanza una nube de gas tóxico a los rivales. Produce envenenamiento.' },
      { name: 'Polución', type: PokemonElementType.poison, power: 30, description: 'El objetivo es atacado con gases tóxicos que pueden llegar a envenenar.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
    ],
  },
  rhyhorn: {
    flavorText: 'Es muy fuerte, pero no especialmente listo. Es capaz de derribar rascacielos usando Placaje varias veces.',
    stats: { hp: 80, attack: 85, defense: 95, specialAttack: 30, specialDefense: 30, speed: 25 },
    moves: [
      { name: 'Cornada', type: PokemonElementType.normal, power: 65, description: 'Ataca al objetivo con una cornada.' },
      { name: 'Perforador', type: PokemonElementType.normal, power: null, description: 'Ataque con taladro que fulmina en un golpe al objetivo si le toca.' },
      { name: 'Megacuerno', type: PokemonElementType.bug, power: 120, description: 'Violenta embestida con cuernos imponentes.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
    ],
  },
  rhydon: {
    flavorText: 'La piel le sirve de escudo protector. Puede vivir en lava líquida a 2000 °C de temperatura.',
    stats: { hp: 105, attack: 130, defense: 120, specialAttack: 45, specialDefense: 45, speed: 40 },
    moves: [
      { name: 'Cornada', type: PokemonElementType.normal, power: 65, description: 'Ataca al objetivo con una cornada.' },
      { name: 'Perforador', type: PokemonElementType.normal, power: null, description: 'Ataque con taladro que fulmina en un golpe al objetivo si le toca.' },
      { name: 'Megacuerno', type: PokemonElementType.bug, power: 120, description: 'Violenta embestida con cuernos imponentes.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
    ],
  },
  chansey: {
    flavorText: 'Se dice que reparte felicidad. Se caracteriza por su compasión y reparte sus huevos entre la gente herida.',
    stats: { hp: 250, attack: 5, defense: 5, specialAttack: 35, specialDefense: 105, speed: 50 },
    moves: [
      { name: 'Bomba Huevo', type: PokemonElementType.normal, power: 100, description: 'Arroja un huevo al objetivo con gran fuerza.' },
      { name: 'Ovocuración', type: PokemonElementType.normal, power: null, description: 'Restaura la mitad de los PS máximos del usuario. Fuera de combate se usa para transferir parte de sus PS a un aliado.' },
      { name: 'Reducción', type: PokemonElementType.normal, power: null, description: 'El usuario mengua para aumentar mucho la Evasión.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
    ],
  },
  tangela: {
    flavorText: 'Se camufla con la multitud de lianas que envuelven su cuerpo y que no dejan de crecer a lo largo de toda su vida.',
    stats: { hp: 65, attack: 55, defense: 115, specialAttack: 100, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Látigo Cepa', type: PokemonElementType.grass, power: 45, description: 'Azota al objetivo con ramas finas.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
    ],
  },
  kangaskhan: {
    flavorText: 'Lleva a su cría en la bolsa de su panza. Solo deja que su cría salga a jugar cuando no siente peligro.',
    stats: { hp: 105, attack: 95, defense: 80, specialAttack: 40, specialDefense: 80, speed: 90 },
    moves: [
      { name: 'Puño Cometa', type: PokemonElementType.normal, power: 18, description: 'Pega de dos a cinco veces seguidas.' },
      { name: 'Puño Mareo', type: PokemonElementType.normal, power: 70, description: 'Rítmicos puñetazos que pueden causar confusión.' },
      { name: 'Sorpresa', type: PokemonElementType.normal, power: 40, description: 'Ataca primero y, además, hace retroceder al objetivo. Solo sirve en el primer turno.' },
      { name: 'Agitacola', type: PokemonElementType.normal, power: null, description: 'Agita la cola para bajar la Defensa del equipo rival.' },
    ],
  },
  horsea: {
    flavorText: 'Es famoso por derribar a bichos voladores lanzando tinta desde la superficie del agua.',
    stats: { hp: 30, attack: 40, defense: 70, specialAttack: 70, specialDefense: 25, speed: 60 },
    moves: [
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Danza Dragón', type: PokemonElementType.dragon, power: null, description: 'Danza mística que sube el Ataque y la Velocidad.' },
      { name: 'Ciclón', type: PokemonElementType.dragon, power: 40, description: 'Crea un violento tornado para hacer trizas al enemigo. Puede hacerlo retroceder.' },
    ],
  },
  seadra: {
    flavorText: 'Las afiladas púas que le recubren el cuerpo se le erizan y pueden causar el debilitamiento con solo tocarlo.',
    stats: { hp: 55, attack: 65, defense: 95, specialAttack: 95, specialDefense: 45, speed: 85 },
    moves: [
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Danza Dragón', type: PokemonElementType.dragon, power: null, description: 'Danza mística que sube el Ataque y la Velocidad.' },
      { name: 'Ciclón', type: PokemonElementType.dragon, power: 40, description: 'Crea un violento tornado para hacer trizas al enemigo. Puede hacerlo retroceder.' },
    ],
  },
  goldeen: {
    flavorText: 'Nada a una velocidad de cinco nudos. Si siente peligro, golpea con su afilado cuerno.',
    stats: { hp: 45, attack: 67, defense: 60, specialAttack: 35, specialDefense: 50, speed: 63 },
    moves: [
      { name: 'Cornada', type: PokemonElementType.normal, power: 65, description: 'Ataca al objetivo con una cornada.' },
      { name: 'Perforador', type: PokemonElementType.normal, power: null, description: 'Ataque con taladro que fulmina en un golpe al objetivo si le toca.' },
      { name: 'Megacuerno', type: PokemonElementType.bug, power: 120, description: 'Violenta embestida con cuernos imponentes.' },
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
    ],
  },
  seaking: {
    flavorText: 'En otoño, cuando se reproducen, se les puede ver nadando con energía por ríos y arroyos.',
    stats: { hp: 80, attack: 92, defense: 65, specialAttack: 65, specialDefense: 80, speed: 68 },
    moves: [
      { name: 'Cornada', type: PokemonElementType.normal, power: 65, description: 'Ataca al objetivo con una cornada.' },
      { name: 'Perforador', type: PokemonElementType.normal, power: null, description: 'Ataque con taladro que fulmina en un golpe al objetivo si le toca.' },
      { name: 'Megacuerno', type: PokemonElementType.bug, power: 120, description: 'Violenta embestida con cuernos imponentes.' },
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
    ],
  },
  staryu: {
    flavorText: 'Aunque sus brazos se rompan podrán regenerarse, siempre y cuando su núcleo siga intacto.',
    stats: { hp: 30, attack: 45, defense: 55, specialAttack: 70, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'Camuflaje', type: PokemonElementType.normal, power: null, description: 'Modifica el tipo del Pokémon según el terreno de combate donde esté.' },
      { name: 'Reducción', type: PokemonElementType.normal, power: null, description: 'El usuario mengua para aumentar mucho la Evasión.' },
      { name: 'Masa Cósmica', type: PokemonElementType.psychic, power: null, description: 'Sube la Defensa y la Defensa Especial propias con energía mística.' },
      { name: 'Giro Rápido', type: PokemonElementType.normal, power: 50, description: 'Ataque giratorio que puede eliminar movimientos como Atadura, Constricción, Drenadoras y Púas.' },
    ],
  },
  starmie: {
    flavorText: 'Su núcleo central brilla con los colores del arcoíris. Para algunos tiene el valor de una gema.',
    stats: { hp: 60, attack: 75, defense: 85, specialAttack: 100, specialDefense: 85, speed: 115 },
    moves: [
      { name: 'Giro Rápido', type: PokemonElementType.normal, power: 50, description: 'Ataque giratorio que puede eliminar movimientos como Atadura, Constricción, Drenadoras y Púas.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
      { name: 'Pistola Agua', type: PokemonElementType.water, power: 40, description: 'Ataca disparando agua con gran potencia.' },
      { name: 'Rayo Confuso', type: PokemonElementType.ghost, power: null, description: 'Rayo siniestro que confunde al objetivo.' },
    ],
  },
  scyther: {
    flavorText: 'Destroza a su presa con las guadañas que tiene. No es común que use las alas para volar.',
    stats: { hp: 70, attack: 110, defense: 80, specialAttack: 55, specialDefense: 80, speed: 105 },
    moves: [
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
      { name: 'Falso Tortazo', type: PokemonElementType.normal, power: 40, description: 'Ataque moderado que no debilita al objetivo y le deja al menos 1 PS.' },
      { name: 'Cuchillada', type: PokemonElementType.normal, power: 70, description: 'Ataca con cuchillas o con pinzas. Suele dar un golpe crítico.' },
    ],
  },
  mrmime: {
    flavorText: 'Para repeler ataques, solidifica el aire y crea muros invisibles con emanaciones de sus dedos.',
    stats: { hp: 40, attack: 45, defense: 65, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: 'Meditación', type: PokemonElementType.psychic, power: null, description: 'El usuario reposa y medita para potenciar el Ataque.' },
      { name: 'Barrera', type: PokemonElementType.psychic, power: null, description: 'Crea una barrera que aumenta mucho la Defensa.' },
      { name: 'Doble Bofetón', type: PokemonElementType.normal, power: 15, description: 'Abofetea de dos a cinco veces seguidas.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
    ],
  },
  electabuzz: {
    flavorText: 'Por la superficie de su piel corre la electricidad. En la oscuridad, su cuerpo se torna blanquecino.',
    stats: { hp: 65, attack: 83, defense: 57, specialAttack: 95, specialDefense: 85, speed: 105 },
    moves: [
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
      { name: 'Chirrido', type: PokemonElementType.normal, power: null, description: 'Alarido agudo que reduce mucho la Defensa del objetivo.' },
      { name: 'Puño Trueno', type: PokemonElementType.electric, power: 75, description: 'Puñetazo eléctrico. Puede paralizar.' },
      { name: 'Malicioso', type: PokemonElementType.normal, power: null, description: 'Intimida a los rivales para bajar su Defensa.' },
    ],
  },
  jynx: {
    flavorText: 'Camina moviendo las caderas de forma llamativa. Puede hacer que la gente baile a su ritmo.',
    stats: { hp: 65, attack: 50, defense: 35, specialAttack: 115, specialDefense: 95, speed: 95 },
    moves: [
      { name: 'Beso Amoroso', type: PokemonElementType.normal, power: null, description: 'Con una cara que asusta, da un beso al objetivo y lo adormece.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
      { name: 'Doble Bofetón', type: PokemonElementType.normal, power: 15, description: 'Abofetea de dos a cinco veces seguidas.' },
      { name: 'Nieve Polvo', type: PokemonElementType.ice, power: 40, description: 'Lanza nieve que puede llegar a congelar.' },
    ],
  },
  pinsir: {
    flavorText: 'Atrapa presas con sus pinzas hasta que las parte en dos. Lanza lejos lo que no puede quebrar.',
    stats: { hp: 65, attack: 125, defense: 100, specialAttack: 55, specialDefense: 70, speed: 85 },
    moves: [
      { name: 'Guillotina', type: PokemonElementType.normal, power: null, description: 'Ataque con pinzas que debilita al oponente de un golpe si acierta.' },
      { name: 'Agarre', type: PokemonElementType.normal, power: 55, description: 'Atrapa y atenaza al objetivo.' },
      { name: 'Sumisión', type: PokemonElementType.fighting, power: 80, description: 'Tira al objetivo al suelo. También hiere al agresor.' },
      { name: 'Atadura', type: PokemonElementType.normal, power: 15, description: 'Ata y oprime de cuatro a cinco turnos.' },
    ],
  },
  magmar: {
    flavorText: 'A este Pokémon se lo encontraron cerca de un volcán. Esta criatura ígnea tiene una temperatura corporal de unos 1200 °C.',
    stats: { hp: 65, attack: 95, defense: 57, specialAttack: 100, specialDefense: 85, speed: 93 },
    moves: [
      { name: 'Polución', type: PokemonElementType.poison, power: 30, description: 'El objetivo es atacado con gases tóxicos que pueden llegar a envenenar.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Puño Fuego', type: PokemonElementType.fire, power: 75, description: 'Puñetazo ardiente. Puede quemar.' },
    ],
  },
  tauros: {
    flavorText: 'Después de animarse a luchar fustigándose con sus tres colas, carga a toda velocidad.',
    stats: { hp: 75, attack: 100, defense: 95, specialAttack: 40, specialDefense: 70, speed: 110 },
    moves: [
      { name: 'Cornada', type: PokemonElementType.normal, power: 65, description: 'Ataca al objetivo con una cornada.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
      { name: 'Saña', type: PokemonElementType.normal, power: 120, description: 'Ataca de dos a tres turnos y acaba confundiendo al agresor.' },
      { name: 'Agitacola', type: PokemonElementType.normal, power: null, description: 'Agita la cola para bajar la Defensa del equipo rival.' },
    ],
  },
  magikarp: {
    flavorText: 'No es precisamente rápido ni fuerte. Es el Pokémon más debilucho y simplón de todos los que hay.',
    stats: { hp: 20, attack: 10, defense: 55, specialAttack: 15, specialDefense: 20, speed: 80 },
    moves: [
      { name: 'Salpicadura', type: PokemonElementType.normal, power: null, description: 'No tiene ningún efecto. Solo salpica.' },
      { name: 'Azote', type: PokemonElementType.normal, power: null, description: 'Ataque frenético. Cuantos menos PS tenga el usuario, más daño producirá.' },
      { name: 'Placaje', type: PokemonElementType.normal, power: 40, description: 'Embiste con todo el cuerpo.' },
    ],
  },
  gyarados: {
    flavorText: 'En la literatura antigua se dice que un Gyarados rebosante de violencia arrasó un poblado.',
    stats: { hp: 95, attack: 125, defense: 79, specialAttack: 60, specialDefense: 100, speed: 81 },
    moves: [
      { name: 'Furia Dragón', type: PokemonElementType.dragon, power: null, description: 'Ráfaga de furiosas ondas de choque que quitan 40 PS.' },
      { name: 'Danza Dragón', type: PokemonElementType.dragon, power: null, description: 'Danza mística que sube el Ataque y la Velocidad.' },
      { name: 'Ciclón', type: PokemonElementType.dragon, power: 40, description: 'Crea un violento tornado para hacer trizas al enemigo. Puede hacerlo retroceder.' },
      { name: 'Saña', type: PokemonElementType.normal, power: 120, description: 'Ataca de dos a tres turnos y acaba confundiendo al agresor.' },
    ],
  },
  lapras: {
    flavorText: 'Son buenos de corazón. Muchos fueron capturados por ser tan pacíficos. Ahora hay muchos menos.',
    stats: { hp: 130, attack: 85, defense: 80, specialAttack: 85, specialDefense: 95, speed: 60 },
    moves: [
      { name: 'Frío Polar', type: PokemonElementType.ice, power: null, description: 'Ataque de frío polar que debilita al objetivo si le alcanza.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
      { name: 'Neblina', type: PokemonElementType.ice, power: null, description: 'Rodea de fina niebla al usuario y protege las características de su equipo durante cinco turnos.' },
    ],
  },
  eevee: {
    flavorText: 'Un extraño Pokémon que se adapta a los entornos más hostiles gracias a sus diferentes evoluciones.',
    stats: { hp: 55, attack: 55, defense: 50, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
      { name: 'Agitacola', type: PokemonElementType.normal, power: null, description: 'Agita la cola para bajar la Defensa del equipo rival.' },
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
      { name: 'Relevo', type: PokemonElementType.normal, power: null, description: 'Cambia el puesto con un compañero y le pasa los cambios de características.' },
    ],
  },
  ditto: {
    flavorText: 'Puede alterar por completo su estructura celular para emular cualquier objeto que vea.',
    stats: { hp: 48, attack: 48, defense: 48, specialAttack: 48, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Transformación', type: PokemonElementType.normal, power: null, description: 'El usuario se transforma en una copia del objetivo, con los mismos movimientos.' },
    ],
  },
  vaporeon: {
    flavorText: 'Prefiere las bellas costas. Con células parecidas al agua, podría fundirse en la misma.',
    stats: { hp: 130, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 65 },
    moves: [
      { name: 'Rayo Aurora', type: PokemonElementType.ice, power: 65, description: 'Rayo multicolor que puede reducir el Ataque.' },
      { name: 'Armadura Ácida', type: PokemonElementType.poison, power: null, description: 'Transforma la estructura celular para hacerse líquido y aumenta mucho la Defensa.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
      { name: 'Niebla', type: PokemonElementType.ice, power: null, description: 'Neblina que elimina los cambios de características de todos los Pokémon en combate.' },
    ],
  },
  jolteon: {
    flavorText: 'Todos los pelos de su cuerpo se ponen de punta si empieza a cargarse de electricidad.',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 110, specialDefense: 95, speed: 130 },
    moves: [
      { name: 'Pin Misil', type: PokemonElementType.bug, power: 25, description: 'Lanza finas púas que hieren de dos a cinco veces.' },
      { name: 'Doble Patada', type: PokemonElementType.fighting, power: 30, description: 'Una patada doble. Golpea dos veces.' },
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
    ],
  },
  flareon: {
    flavorText: 'Almacena llamas en su cuerpo, que alcanza una temperatura de 900 °C antes de un combate.',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 95, specialDefense: 110, speed: 65 },
    moves: [
      { name: 'Polución', type: PokemonElementType.poison, power: 30, description: 'El objetivo es atacado con gases tóxicos que pueden llegar a envenenar.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Giro Fuego', type: PokemonElementType.fire, power: 35, description: 'Un aro de fuego que atrapa al objetivo de cuatro a cinco turnos.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
    ],
  },
  porygon: {
    flavorText: 'Pokémon creado por el hombre tras muchas investigaciones. Sus habilidades son básicas.',
    stats: { hp: 65, attack: 60, defense: 70, specialAttack: 85, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'Conversión', type: PokemonElementType.normal, power: null, description: 'Cambia el tipo del usuario por el del primero de sus movimientos.' },
      { name: 'Conversión 2', type: PokemonElementType.normal, power: null, description: 'El usuario cambia de tipo para hacerse resistente al último tipo de movimiento usado por el objetivo.' },
      { name: 'Afilar', type: PokemonElementType.normal, power: null, description: 'El perfil del usuario se hace más afilado y su Ataque mejora.' },
      { name: 'Fijar Blanco', type: PokemonElementType.normal, power: null, description: 'Fija el blanco para que el siguiente ataque no falle.' },
    ],
  },
  omanyte: {
    flavorText: 'Pokémon prehistórico que vivió en el océano primordial. Para nadar se valía de sus 10 tentáculos.',
    stats: { hp: 35, attack: 40, defense: 100, specialAttack: 90, specialDefense: 55, speed: 35 },
    moves: [
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Refugio', type: PokemonElementType.water, power: null, description: 'El usuario se protege en su coraza y sube la Defensa.' },
      { name: 'Cosquillas', type: PokemonElementType.normal, power: null, description: 'Hace reír al objetivo para bajar su Ataque y Defensa.' },
      { name: 'Pistola Agua', type: PokemonElementType.water, power: 40, description: 'Ataca disparando agua con gran potencia.' },
    ],
  },
  omastar: {
    flavorText: 'Tiene los tentáculos tan desarrollados que le sirven de manos y pies. Con ellos atrapa a su presa y le da un bocado.',
    stats: { hp: 70, attack: 60, defense: 125, specialAttack: 115, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'Clavo Cañón', type: PokemonElementType.normal, power: 20, description: 'Lanza finas púas que hieren de dos a cinco veces.' },
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Refugio', type: PokemonElementType.water, power: null, description: 'El usuario se protege en su coraza y sube la Defensa.' },
      { name: 'Cosquillas', type: PokemonElementType.normal, power: null, description: 'Hace reír al objetivo para bajar su Ataque y Defensa.' },
    ],
  },
  kabuto: {
    flavorText: 'Se cree que habitó las playas hace 300 millones de años. Se protege con una dura concha.',
    stats: { hp: 30, attack: 80, defense: 90, specialAttack: 55, specialDefense: 45, speed: 55 },
    moves: [
      { name: 'Eco Metálico', type: PokemonElementType.steel, power: null, description: 'Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo.' },
      { name: 'Absorber', type: PokemonElementType.grass, power: 20, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Megaagotar', type: PokemonElementType.grass, power: 40, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  kabutops: {
    flavorText: 'Repliega sus extremidades en el agua para hacerse más compacto, y mueve su concha para nadar rápido.',
    stats: { hp: 60, attack: 115, defense: 105, specialAttack: 65, specialDefense: 70, speed: 80 },
    moves: [
      { name: 'Eco Metálico', type: PokemonElementType.steel, power: null, description: 'Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo.' },
      { name: 'Absorber', type: PokemonElementType.grass, power: 20, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Megaagotar', type: PokemonElementType.grass, power: 40, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  aerodactyl: {
    flavorText: 'Se regeneró a partir de material genético de un dinosaurio encontrado en ámbar. Cuando vuela emite escandalosos alaridos.',
    stats: { hp: 80, attack: 105, defense: 65, specialAttack: 60, specialDefense: 75, speed: 130 },
    moves: [
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Supersónico', type: PokemonElementType.normal, power: null, description: 'Raras ondas sónicas que confunden al objetivo.' },
      { name: 'Poder Pasado', type: PokemonElementType.rock, power: 60, description: 'Ataque prehistórico que puede subir todas las características.' },
      { name: 'Mordisco', type: PokemonElementType.dark, power: 60, description: 'Un voraz bocado que puede hacer retroceder al objetivo.' },
    ],
  },
  articuno: {
    flavorText: 'Legendario Pokémon pájaro capaz de generar ventiscas congelando la humedad del aire.',
    stats: { hp: 90, attack: 85, defense: 100, specialAttack: 95, specialDefense: 125, speed: 85 },
    moves: [
      { name: 'Telépata', type: PokemonElementType.normal, power: null, description: 'El usuario adivina los movimientos del objetivo para hacer que su siguiente ataque no falle.' },
      { name: 'Frío Polar', type: PokemonElementType.ice, power: null, description: 'Ataque de frío polar que debilita al objetivo si le alcanza.' },
      { name: 'Nieve Polvo', type: PokemonElementType.ice, power: 40, description: 'Lanza nieve que puede llegar a congelar.' },
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
    ],
  },
  zapdos: {
    flavorText: 'Es un legendario pájaro Pokémon. Dicen que aparece entre las nubes lanzando enormes rayos brillantes.',
    stats: { hp: 90, attack: 90, defense: 85, specialAttack: 125, specialDefense: 90, speed: 100 },
    moves: [
      { name: 'Pico Taladro', type: PokemonElementType.flying, power: 80, description: 'Picotazo giratorio y perforador muy potente.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
    ],
  },
  snorlax: {
    flavorText: 'No se encuentra satisfecho hasta que no se come 400 kg de comida cada día. Cuando acaba de comer, se queda dormido.',
    stats: { hp: 160, attack: 110, defense: 65, specialAttack: 65, specialDefense: 110, speed: 30 },
    moves: [
      { name: 'Tambor', type: PokemonElementType.normal, power: null, description: 'Reduce la mitad de los PS máximos para mejorar al máximo el Ataque.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
      { name: 'Bloqueo', type: PokemonElementType.normal, power: null, description: 'Le corta el paso al objetivo para que no pueda escapar.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'El usuario olvida sus preocupaciones y aumenta mucho la Defensa Especial.' },
    ],
  },
  moltres: {
    flavorText: 'Es más conocido como el legendario pájaro de fuego. Con cada aleteo crea brillantes llamas.',
    stats: { hp: 90, attack: 100, defense: 90, specialAttack: 125, specialDefense: 85, speed: 90 },
    moves: [
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Ataque Aéreo', type: PokemonElementType.flying, power: 140, description: 'Ataque en dos turnos que suele ser crítico. Puede hacer retroceder al objetivo.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Giro Fuego', type: PokemonElementType.fire, power: 35, description: 'Un aro de fuego que atrapa al objetivo de cuatro a cinco turnos.' },
    ],
  },
  dratini: {
    flavorText: 'Se le llama el Pokémon Espejismo porque son muy pocos los que lo han visto. Se encontró su muda.',
    stats: { hp: 41, attack: 64, defense: 45, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Furia Dragón', type: PokemonElementType.dragon, power: null, description: 'Ráfaga de furiosas ondas de choque que quitan 40 PS.' },
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
      { name: 'Ciclón', type: PokemonElementType.dragon, power: 40, description: 'Crea un violento tornado para hacer trizas al enemigo. Puede hacerlo retroceder.' },
      { name: 'Atizar', type: PokemonElementType.normal, power: 80, description: 'Golpea con las extremidades.' },
    ],
  },
  dragonair: {
    flavorText: 'Sus cristalinos orbes parecen darle al Pokémon el poder de controlar el clima libremente.',
    stats: { hp: 61, attack: 84, defense: 65, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Furia Dragón', type: PokemonElementType.dragon, power: null, description: 'Ráfaga de furiosas ondas de choque que quitan 40 PS.' },
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
      { name: 'Ciclón', type: PokemonElementType.dragon, power: 40, description: 'Crea un violento tornado para hacer trizas al enemigo. Puede hacerlo retroceder.' },
      { name: 'Atizar', type: PokemonElementType.normal, power: 80, description: 'Golpea con las extremidades.' },
    ],
  },
  dragonite: {
    flavorText: 'A pesar del tamaño que tiene y de lo pesado que es, puede volar. Es capaz de dar la vuelta al mundo en solo 16 horas.',
    stats: { hp: 91, attack: 134, defense: 95, specialAttack: 100, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'Furia Dragón', type: PokemonElementType.dragon, power: null, description: 'Ráfaga de furiosas ondas de choque que quitan 40 PS.' },
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Ciclón', type: PokemonElementType.dragon, power: 40, description: 'Crea un violento tornado para hacer trizas al enemigo. Puede hacerlo retroceder.' },
    ],
  },
  mewtwo: {
    flavorText: 'Fue creado por un científico tras años de horribles experimentos de ingeniería genética.',
    stats: { hp: 106, attack: 110, defense: 90, specialAttack: 154, specialDefense: 90, speed: 130 },
    moves: [
      { name: 'Barrera', type: PokemonElementType.psychic, power: null, description: 'Crea una barrera que aumenta mucho la Defensa.' },
      { name: 'Neblina', type: PokemonElementType.ice, power: null, description: 'Rodea de fina niebla al usuario y protege las características de su equipo durante cinco turnos.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
      { name: 'Anulación', type: PokemonElementType.normal, power: null, description: 'Desactiva el último movimiento del objetivo durante cuatro turnos.' },
    ],
  },
  mew: {
    flavorText: 'Varios científicos lo consideran el antecesor de los Pokémon porque usa todo tipo de movimientos.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Transformación', type: PokemonElementType.normal, power: null, description: 'El usuario se transforma en una copia del objetivo, con los mismos movimientos.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
      { name: 'Metrónomo', type: PokemonElementType.normal, power: null, description: 'El usuario mueve un dedo y estimula su cerebro para usar al azar casi cualquier movimiento.' },
      { name: 'Poder Pasado', type: PokemonElementType.rock, power: 60, description: 'Ataque prehistórico que puede subir todas las características.' },
    ],
  },
  chikorita: {
    flavorText: 'Un dulce aroma se desprende de la hoja de su cabeza. Es dócil y le encanta absorber los rayos de sol.',
    stats: { hp: 45, attack: 49, defense: 65, specialAttack: 49, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Cura todos los problemas de estado del equipo con un suave aroma.' },
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
      { name: 'Dulce Aroma', type: PokemonElementType.normal, power: null, description: 'Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión. En la hierba alta sirve para atraer a Pokémon salvajes.' },
    ],
  },
  bayleef: {
    flavorText: 'Emana un aroma picante de su cuello. El aroma actúa como estimulante para recuperar salud.',
    stats: { hp: 60, attack: 62, defense: 80, specialAttack: 63, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Cura todos los problemas de estado del equipo con un suave aroma.' },
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
      { name: 'Dulce Aroma', type: PokemonElementType.normal, power: null, description: 'Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión. En la hierba alta sirve para atraer a Pokémon salvajes.' },
    ],
  },
  meganium: {
    flavorText: 'El olor que desprenden sus pétalos contiene una sustancia que calma el instinto agresivo.',
    stats: { hp: 80, attack: 82, defense: 100, specialAttack: 83, specialDefense: 100, speed: 80 },
    moves: [
      { name: 'Danza Pétalo', type: PokemonElementType.grass, power: 120, description: 'Lanza pétalos de dos a tres turnos y acaba confundiendo al atacante.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Cura todos los problemas de estado del equipo con un suave aroma.' },
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
    ],
  },
  cyndaquil: {
    flavorText: 'Es tímido y siempre se enrosca como una pelota. Si es atacado, enciende su lomo para protegerse.',
    stats: { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Estallido', type: PokemonElementType.fire, power: 150, description: 'Furia explosiva. Cuanto menor sea el número de PS del usuario, menos daño hará el ataque.' },
      { name: 'Humareda', type: PokemonElementType.fire, power: 80, description: 'Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar.' },
      { name: 'Rueda Fuego', type: PokemonElementType.fire, power: 60, description: 'Ataca envuelto en fuego. Puede causar quemaduras.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
    ],
  },
  quilava: {
    flavorText: 'Antes de empezar a luchar, se gira ante su rival para alardear del alcance y la fuerza de sus llamas.',
    stats: { hp: 58, attack: 64, defense: 58, specialAttack: 80, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'Estallido', type: PokemonElementType.fire, power: 150, description: 'Furia explosiva. Cuanto menor sea el número de PS del usuario, menos daño hará el ataque.' },
      { name: 'Humareda', type: PokemonElementType.fire, power: 80, description: 'Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar.' },
      { name: 'Rueda Fuego', type: PokemonElementType.fire, power: 60, description: 'Ataca envuelto en fuego. Puede causar quemaduras.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
    ],
  },
  typhlosion: {
    flavorText: 'Si su furia crece, se calienta tanto que cualquier cosa que toque se prenderá al instante.',
    stats: { hp: 78, attack: 84, defense: 78, specialAttack: 109, specialDefense: 85, speed: 100 },
    moves: [
      { name: 'Estallido', type: PokemonElementType.fire, power: 150, description: 'Furia explosiva. Cuanto menor sea el número de PS del usuario, menos daño hará el ataque.' },
      { name: 'Humareda', type: PokemonElementType.fire, power: 80, description: 'Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar.' },
      { name: 'Rueda Fuego', type: PokemonElementType.fire, power: 60, description: 'Ataca envuelto en fuego. Puede causar quemaduras.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
    ],
  },
  totodile: {
    flavorText: 'Es pequeño pero violento. No dudará en morder cualquier cosa que se mueva cerca.',
    stats: { hp: 50, attack: 65, defense: 64, specialAttack: 44, specialDefense: 48, speed: 43 },
    moves: [
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
      { name: 'Colmillo Hielo', type: PokemonElementType.ice, power: 65, description: 'Usa colmillos helados para morder. Puede hacer que el objetivo retroceda o se congele.' },
      { name: 'Saña', type: PokemonElementType.normal, power: 120, description: 'Ataca de dos a tres turnos y acaba confundiendo al agresor.' },
      { name: 'Acua Cola', type: PokemonElementType.water, power: 90, description: 'Ataca agitando la cola como si fuera una ola rabiosa en una tormenta devastadora.' },
    ],
  },
  feraligatr: {
    flavorText: 'Se suele mover lento, pero alcanza velocidades de vértigo al atacar y morder a sus enemigos.',
    stats: { hp: 85, attack: 105, defense: 100, specialAttack: 79, specialDefense: 83, speed: 78 },
    moves: [
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
      { name: 'Colmillo Hielo', type: PokemonElementType.ice, power: 65, description: 'Usa colmillos helados para morder. Puede hacer que el objetivo retroceda o se congele.' },
      { name: 'Saña', type: PokemonElementType.normal, power: 120, description: 'Ataca de dos a tres turnos y acaba confundiendo al agresor.' },
      { name: 'Acua Cola', type: PokemonElementType.water, power: 90, description: 'Ataca agitando la cola como si fuera una ola rabiosa en una tormenta devastadora.' },
    ],
  },
  croconaw: {
    flavorText: 'Si pierde un colmillo, le crecerá otro en su lugar. Siempre tiene 48 colmillos en su boca.',
    stats: { hp: 65, attack: 80, defense: 80, specialAttack: 59, specialDefense: 63, speed: 58 },
    moves: [
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
      { name: 'Colmillo Hielo', type: PokemonElementType.ice, power: 65, description: 'Usa colmillos helados para morder. Puede hacer que el objetivo retroceda o se congele.' },
      { name: 'Saña', type: PokemonElementType.normal, power: 120, description: 'Ataca de dos a tres turnos y acaba confundiendo al agresor.' },
      { name: 'Acua Cola', type: PokemonElementType.water, power: 90, description: 'Ataca agitando la cola como si fuera una ola rabiosa en una tormenta devastadora.' },
    ],
  },
  sentret: {
    flavorText: 'Cuando hace de centinela, avisa del peligro a los demás, chillando y dando golpes al suelo con la cola.',
    stats: { hp: 35, attack: 46, defense: 34, specialAttack: 35, specialDefense: 45, speed: 20 },
    moves: [
      { name: 'Señuelo', type: PokemonElementType.normal, power: null, description: 'Llama la atención para concentrar todos los ataques de todos los del equipo rival hacia sí mismo.' },
      { name: 'Yo Primero', type: PokemonElementType.normal, power: null, description: 'Se adelanta al movimiento que pretende usar el objetivo y lo lanza antes con más fuerza. Si el usuario es más lento, falla.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
    ],
  },
  furret: {
    flavorText: 'Acurruca a sus crías para que duerman. Acorrala a los enemigos con su enorme velocidad.',
    stats: { hp: 85, attack: 76, defense: 64, specialAttack: 45, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Señuelo', type: PokemonElementType.normal, power: null, description: 'Llama la atención para concentrar todos los ataques de todos los del equipo rival hacia sí mismo.' },
      { name: 'Yo Primero', type: PokemonElementType.normal, power: null, description: 'Se adelanta al movimiento que pretende usar el objetivo y lo lanza antes con más fuerza. Si el usuario es más lento, falla.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
    ],
  },
  hoothoot: {
    flavorText: 'Su percepción del tiempo es exacta. Ocurra lo que ocurra, lleva el ritmo moviendo la cabeza.',
    stats: { hp: 60, attack: 30, defense: 30, specialAttack: 36, specialDefense: 56, speed: 50 },
    moves: [
      { name: 'Psicocambio', type: PokemonElementType.psychic, power: null, description: 'Usa su poder mental para transferir al objetivo sus problemas de estado.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Paranormal', type: PokemonElementType.psychic, power: 80, description: 'Energía muy extraña que puede hacer retroceder al objetivo.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
    ],
  },
  noctowl: {
    flavorText: 'Sus ojos están especialmente adaptados. Concentran la luz para poder ver en la oscuridad.',
    stats: { hp: 100, attack: 50, defense: 50, specialAttack: 86, specialDefense: 96, speed: 70 },
    moves: [
      { name: 'Psicocambio', type: PokemonElementType.psychic, power: null, description: 'Usa su poder mental para transferir al objetivo sus problemas de estado.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Paranormal', type: PokemonElementType.psychic, power: 80, description: 'Energía muy extraña que puede hacer retroceder al objetivo.' },
      { name: 'Ataque Aéreo', type: PokemonElementType.flying, power: 140, description: 'Ataque en dos turnos que suele ser crítico. Puede hacer retroceder al objetivo.' },
    ],
  },
  ledyba: {
    flavorText: 'Cuando llega el frío, se reúnen muchos Ledyba de todas partes para darse calor.',
    stats: { hp: 40, attack: 20, defense: 30, specialAttack: 40, specialDefense: 80, speed: 55 },
    moves: [
      { name: 'Puño Cometa', type: PokemonElementType.normal, power: 18, description: 'Pega de dos a cinco veces seguidas.' },
      { name: 'Ultrapuño', type: PokemonElementType.fighting, power: 40, description: 'Puñetazo que se da rápido para golpear primero.' },
      { name: 'Viento Plata', type: PokemonElementType.bug, power: 60, description: 'Fuerte viento con polvo de escamas. Puede subir todas las características de quien lo usa.' },
      { name: 'Zumbido', type: PokemonElementType.bug, power: 90, description: 'El movimiento de las alas crea una onda sónica dañina. También puede disminuir la Defensa Especial del objetivo.' },
    ],
  },
  ledian: {
    flavorText: 'Cuando parpadean las estrellas en el cielo nocturno, se mece desprendiendo un polvo brillante.',
    stats: { hp: 55, attack: 35, defense: 50, specialAttack: 55, specialDefense: 110, speed: 85 },
    moves: [
      { name: 'Puño Cometa', type: PokemonElementType.normal, power: 18, description: 'Pega de dos a cinco veces seguidas.' },
      { name: 'Ultrapuño', type: PokemonElementType.fighting, power: 40, description: 'Puñetazo que se da rápido para golpear primero.' },
      { name: 'Viento Plata', type: PokemonElementType.bug, power: 60, description: 'Fuerte viento con polvo de escamas. Puede subir todas las características de quien lo usa.' },
      { name: 'Zumbido', type: PokemonElementType.bug, power: 90, description: 'El movimiento de las alas crea una onda sónica dañina. También puede disminuir la Defensa Especial del objetivo.' },
    ],
  },
  spinarak: {
    flavorText: 'El veneno de sus colmillos no es demasiado tóxico, pero basta para mantener inmovilizadas a las presas que caen en sus redes.',
    stats: { hp: 40, attack: 60, defense: 40, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'Telaraña', type: PokemonElementType.bug, power: null, description: 'Enreda al objetivo para evitar que abandone la batalla.' },
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Pin Misil', type: PokemonElementType.bug, power: 25, description: 'Lanza finas púas que hieren de dos a cinco veces.' },
    ],
  },
  ariados: {
    flavorText: 'Teje su telaraña desde atrás y desde su boca. Es muy difícil saber dónde está cada cual.',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 70, speed: 40 },
    moves: [
      { name: 'Telaraña', type: PokemonElementType.bug, power: null, description: 'Enreda al objetivo para evitar que abandone la batalla.' },
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Pin Misil', type: PokemonElementType.bug, power: 25, description: 'Lanza finas púas que hieren de dos a cinco veces.' },
    ],
  },
  crobat: {
    flavorText: 'Es tan silencioso cuando vuela en la oscuridad con sus cuatro alas, que cuesta percibirlo cuando se acerca.',
    stats: { hp: 85, attack: 90, defense: 80, specialAttack: 70, specialDefense: 80, speed: 130 },
    moves: [
      { name: 'Colmillo Veneno', type: PokemonElementType.poison, power: 50, description: 'Colmillos tóxicos que pueden envenenar gravemente al objetivo.' },
      { name: 'Veneno X', type: PokemonElementType.poison, power: 70, description: 'Tajo que puede envenenar al objetivo. Suele ser crítico.' },
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Mal de Ojo', type: PokemonElementType.normal, power: null, description: 'Mal de ojo que impide al objetivo huir de la batalla.' },
    ],
  },
  chinchou: {
    flavorText: 'En el oscuro fondo del océano, su único modo de comunicarse es emitiendo luces parpadeantes.',
    stats: { hp: 75, attack: 38, defense: 38, specialAttack: 56, specialDefense: 56, speed: 67 },
    moves: [
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Acua Aro', type: PokemonElementType.water, power: null, description: 'Un manto de agua cubre al Pokémon que lo usa. Recupera algunos PS en cada turno.' },
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
      { name: 'Supersónico', type: PokemonElementType.normal, power: null, description: 'Raras ondas sónicas que confunden al objetivo.' },
    ],
  },
  lanturn: {
    flavorText: 'La luz de Lanturn se puede ver desde lo más profundo. Se le llama la Estrella de Alta Mar.',
    stats: { hp: 125, attack: 58, defense: 58, specialAttack: 76, specialDefense: 76, speed: 67 },
    moves: [
      { name: 'Escupir', type: PokemonElementType.normal, power: null, description: 'Libera de una vez la energía acumulada con Reserva.' },
      { name: 'Tragar', type: PokemonElementType.normal, power: null, description: 'Absorbe la energía acumulada con Reserva y restaura PS.' },
      { name: 'Reserva', type: PokemonElementType.normal, power: null, description: 'Acumula energía y sube la Defensa y la Defensa Especial. Puede utilizarse hasta tres veces.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
    ],
  },
  pichu: {
    flavorText: 'Cuando juegan, se tocan las colas y emiten chispas. Al parecer, es una prueba de valor.',
    stats: { hp: 20, attack: 40, defense: 15, specialAttack: 35, specialDefense: 35, speed: 60 },
    moves: [
      { name: 'Beso Dulce', type: PokemonElementType.normal, power: null, description: 'Da un beso con tal dulzura que causa confusión.' },
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Agitacola', type: PokemonElementType.normal, power: null, description: 'Agita la cola para bajar la Defensa del equipo rival.' },
      { name: 'Maquinación', type: PokemonElementType.dark, power: null, description: 'Estimula su cerebro pensando en cosas malas. Aumenta considerablemente el Ataque Especial.' },
    ],
  },
  cleffa: {
    flavorText: 'Por su inusual forma estrellada, la gente cree que procede de un meteorito que cayó a la tierra.',
    stats: { hp: 50, attack: 25, defense: 28, specialAttack: 45, specialDefense: 55, speed: 15 },
    moves: [
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
      { name: 'Beso Dulce', type: PokemonElementType.normal, power: null, description: 'Da un beso con tal dulzura que causa confusión.' },
      { name: 'Copión', type: PokemonElementType.normal, power: null, description: 'Imita el movimiento usado justo antes. El movimiento falla si no se ha usado aún ninguno.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
    ],
  },
  igglybuff: {
    flavorText: 'Para caminar, en lugar de usar los pies que tiene, opta por dar botes con su cuerpo redondo y blandito.',
    stats: { hp: 90, attack: 30, defense: 15, specialAttack: 40, specialDefense: 20, speed: 15 },
    moves: [
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
      { name: 'Beso Dulce', type: PokemonElementType.normal, power: null, description: 'Da un beso con tal dulzura que causa confusión.' },
      { name: 'Copión', type: PokemonElementType.normal, power: null, description: 'Imita el movimiento usado justo antes. El movimiento falla si no se ha usado aún ninguno.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
    ],
  },
  togepi: {
    flavorText: 'El cascarón parece estar lleno de alegría. Dicen que trae buena suerte si es tratado con cariño.',
    stats: { hp: 35, attack: 20, defense: 65, specialAttack: 40, specialDefense: 65, speed: 20 },
    moves: [
      { name: 'Señuelo', type: PokemonElementType.normal, power: null, description: 'Llama la atención para concentrar todos los ataques de todos los del equipo rival hacia sí mismo.' },
      { name: 'Beso Dulce', type: PokemonElementType.normal, power: null, description: 'Da un beso con tal dulzura que causa confusión.' },
      { name: 'Deseo', type: PokemonElementType.normal, power: null, description: 'Restaura la mitad de los PS máximos en el siguiente turno.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
    ],
  },
  togetic: {
    flavorText: 'Si no está con gente amable, se entristece. Puede flotar en el aire sin mover las alas.',
    stats: { hp: 55, attack: 40, defense: 85, specialAttack: 80, specialDefense: 105, speed: 40 },
    moves: [
      { name: 'Señuelo', type: PokemonElementType.normal, power: null, description: 'Llama la atención para concentrar todos los ataques de todos los del equipo rival hacia sí mismo.' },
      { name: 'Beso Dulce', type: PokemonElementType.normal, power: null, description: 'Da un beso con tal dulzura que causa confusión.' },
      { name: 'Deseo', type: PokemonElementType.normal, power: null, description: 'Restaura la mitad de los PS máximos en el siguiente turno.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
    ],
  },
  natu: {
    flavorText: 'Va dando saltitos porque sus alas no han crecido lo suficiente. Siempre está pendiente de algo.',
    stats: { hp: 40, attack: 50, defense: 45, specialAttack: 70, specialDefense: 45, speed: 70 },
    moves: [
      { name: 'Gran Ojo', type: PokemonElementType.psychic, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Siniestro y golpear a Pokémon evasivos.' },
      { name: 'Psicocambio', type: PokemonElementType.psychic, power: null, description: 'Usa su poder mental para transferir al objetivo sus problemas de estado.' },
      { name: 'Yo Primero', type: PokemonElementType.normal, power: null, description: 'Se adelanta al movimiento que pretende usar el objetivo y lo lanza antes con más fuerza. Si el usuario es más lento, falla.' },
      { name: 'Conjuro', type: PokemonElementType.normal, power: null, description: 'Lanza al cielo un conjuro que impide al objetivo asestar golpes críticos.' },
    ],
  },
  xatu: {
    flavorText: 'Cuando se pone a meditar al amanecer, pierde la noción del tiempo. Puede pasarse así todo el día.',
    stats: { hp: 65, attack: 75, defense: 70, specialAttack: 95, specialDefense: 70, speed: 95 },
    moves: [
      { name: 'Gran Ojo', type: PokemonElementType.psychic, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Siniestro y golpear a Pokémon evasivos.' },
      { name: 'Psicocambio', type: PokemonElementType.psychic, power: null, description: 'Usa su poder mental para transferir al objetivo sus problemas de estado.' },
      { name: 'Yo Primero', type: PokemonElementType.normal, power: null, description: 'Se adelanta al movimiento que pretende usar el objetivo y lo lanza antes con más fuerza. Si el usuario es más lento, falla.' },
      { name: 'Conjuro', type: PokemonElementType.normal, power: null, description: 'Lanza al cielo un conjuro que impide al objetivo asestar golpes críticos.' },
    ],
  },
  mareep: {
    flavorText: 'Su pelaje lanudo dobla su volumen al acumular electricidad estática. Tocarlo puede dar calambre.',
    stats: { hp: 55, attack: 40, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Esporagodón', type: PokemonElementType.grass, power: null, description: 'Adhiere esporas a los rivales para reducir mucho su Velocidad.' },
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Joya de Luz', type: PokemonElementType.rock, power: 80, description: 'Ataca con un rayo de luz que centellea como si lo formaran miles de joyas.' },
    ],
  },
  flaaffy: {
    flavorText: 'Su esponjosa lana almacena electricidad. Su piel gomosa evita que sea electrocutado.',
    stats: { hp: 70, attack: 55, defense: 55, specialAttack: 80, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'Esporagodón', type: PokemonElementType.grass, power: null, description: 'Adhiere esporas a los rivales para reducir mucho su Velocidad.' },
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Joya de Luz', type: PokemonElementType.rock, power: 80, description: 'Ataca con un rayo de luz que centellea como si lo formaran miles de joyas.' },
    ],
  },
  ampharos: {
    flavorText: 'La punta de su cola reluce brillantemente y puede ser vista desde lejos. Es usado como faro.',
    stats: { hp: 90, attack: 75, defense: 85, specialAttack: 115, specialDefense: 90, speed: 55 },
    moves: [
      { name: 'Esporagodón', type: PokemonElementType.grass, power: null, description: 'Adhiere esporas a los rivales para reducir mucho su Velocidad.' },
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Joya de Luz', type: PokemonElementType.rock, power: 80, description: 'Ataca con un rayo de luz que centellea como si lo formaran miles de joyas.' },
    ],
  },
  bellossom: {
    flavorText: 'Los Bellossom suelen reunirse para bailar. Dicen que sus danzas son un ritual para invocar al sol.',
    stats: { hp: 75, attack: 80, defense: 95, specialAttack: 90, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'Hoja Aguda', type: PokemonElementType.grass, power: 90, description: 'Acuchilla con una hoja fina. Suele dar un golpe crítico.' },
      { name: 'Paralizador', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que paraliza al objetivo.' },
      { name: 'Dulce Aroma', type: PokemonElementType.normal, power: null, description: 'Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión. En la hierba alta sirve para atraer a Pokémon salvajes.' },
      { name: 'Megaagotar', type: PokemonElementType.grass, power: 40, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
    ],
  },
  marill: {
    flavorText: 'Tiene una piel que repele el agua. De hecho, puede pasarse horas jugando en el agua sin mojarse.',
    stats: { hp: 70, attack: 20, defense: 50, specialAttack: 20, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Acua Aro', type: PokemonElementType.water, power: null, description: 'Un manto de agua cubre al Pokémon que lo usa. Recupera algunos PS en cada turno.' },
      { name: 'Rayo Burbuja', type: PokemonElementType.water, power: 65, description: 'Diluvio de burbujas que puede bajar la Velocidad.' },
      { name: 'Agitacola', type: PokemonElementType.normal, power: null, description: 'Agita la cola para bajar la Defensa del equipo rival.' },
      { name: 'Acua Cola', type: PokemonElementType.water, power: 90, description: 'Ataca agitando la cola como si fuera una ola rabiosa en una tormenta devastadora.' },
    ],
  },
  azumarill: {
    flavorText: 'Sus largas orejas son sensores que pueden percibir movimientos de seres vivos en el lecho del río.',
    stats: { hp: 100, attack: 50, defense: 80, specialAttack: 60, specialDefense: 80, speed: 50 },
    moves: [
      { name: 'Acua Aro', type: PokemonElementType.water, power: null, description: 'Un manto de agua cubre al Pokémon que lo usa. Recupera algunos PS en cada turno.' },
      { name: 'Rayo Burbuja', type: PokemonElementType.water, power: 65, description: 'Diluvio de burbujas que puede bajar la Velocidad.' },
      { name: 'Agitacola', type: PokemonElementType.normal, power: null, description: 'Agita la cola para bajar la Defensa del equipo rival.' },
      { name: 'Acua Cola', type: PokemonElementType.water, power: 90, description: 'Ataca agitando la cola como si fuera una ola rabiosa en una tormenta devastadora.' },
    ],
  },
  politoed: {
    flavorText: 'Cuando tres o más de estos se juntan, emiten un sonido muy fuerte parecido a un bramido.',
    stats: { hp: 90, attack: 75, defense: 75, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
      { name: 'Doble Bofetón', type: PokemonElementType.normal, power: 15, description: 'Abofetea de dos a cinco veces seguidas.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
      { name: 'Rayo Burbuja', type: PokemonElementType.water, power: 65, description: 'Diluvio de burbujas que puede bajar la Velocidad.' },
    ],
  },
  sudowoodo: {
    flavorText: 'Aunque pretende ser un árbol, en su composición se parece más a una roca que a una planta.',
    stats: { hp: 70, attack: 100, defense: 115, specialAttack: 30, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Mazazo', type: PokemonElementType.grass, power: 120, description: 'Arremete contra el objetivo con su robusto cuerpo. El agresor también sufre bastante daño.' },
      { name: 'Lanzarrocas', type: PokemonElementType.rock, power: 50, description: 'Tira una pequeña roca al objetivo.' },
      { name: 'Machada', type: PokemonElementType.fighting, power: 100, description: 'Gira con fuerza el puño y da un gran golpe. No obstante, baja la Velocidad.' },
      { name: 'Copión', type: PokemonElementType.normal, power: null, description: 'Imita el movimiento usado justo antes. El movimiento falla si no se ha usado aún ninguno.' },
    ],
  },
  hoppip: {
    flavorText: 'Su cuerpo es tan ligero, que debe agarrarse bien al suelo con las patas para no irse con el viento.',
    stats: { hp: 35, attack: 35, defense: 40, specialAttack: 35, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'Esporagodón', type: PokemonElementType.grass, power: null, description: 'Adhiere esporas a los rivales para reducir mucho su Velocidad.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Salpicadura', type: PokemonElementType.normal, power: null, description: 'No tiene ningún efecto. Solo salpica.' },
    ],
  },
  skiploom: {
    flavorText: 'La flor de su cabeza se abre y cierra según suba o baje la temperatura.',
    stats: { hp: 55, attack: 45, defense: 50, specialAttack: 45, specialDefense: 65, speed: 80 },
    moves: [
      { name: 'Esporagodón', type: PokemonElementType.grass, power: null, description: 'Adhiere esporas a los rivales para reducir mucho su Velocidad.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Salpicadura', type: PokemonElementType.normal, power: null, description: 'No tiene ningún efecto. Solo salpica.' },
    ],
  },
  jumpluff: {
    flavorText: 'Los vientos estacionales lo llevan por todo el mundo, donde va soltando sus esporas.',
    stats: { hp: 75, attack: 55, defense: 70, specialAttack: 55, specialDefense: 95, speed: 110 },
    moves: [
      { name: 'Esporagodón', type: PokemonElementType.grass, power: null, description: 'Adhiere esporas a los rivales para reducir mucho su Velocidad.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Salpicadura', type: PokemonElementType.normal, power: null, description: 'No tiene ningún efecto. Solo salpica.' },
    ],
  },
  aipom: {
    flavorText: 'Vive en lo alto de los árboles. Cuando salta de rama en rama, usa su cola para equilibrarse.',
    stats: { hp: 55, attack: 70, defense: 55, specialAttack: 40, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'Doble Golpe', type: PokemonElementType.normal, power: 35, description: 'Golpea al objetivo dos veces seguidas con la cola u otras partes de su cuerpo.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Cosquillas', type: PokemonElementType.normal, power: null, description: 'Hace reír al objetivo para bajar su Ataque y Defensa.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
    ],
  },
  sunkern: {
    flavorText: 'Puede caer del cielo de repente. Si le ataca un Spearow, moverá violentamente sus hojas.',
    stats: { hp: 30, attack: 30, defense: 30, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: 'Silbato', type: PokemonElementType.grass, power: null, description: 'Agradable melodía que adormece al objetivo.' },
      { name: 'Arraigo', type: PokemonElementType.grass, power: null, description: 'Echa raíces para recuperar PS en cada turno, pero impide el relevo.' },
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
      { name: 'Desarrollo', type: PokemonElementType.normal, power: null, description: 'El cuerpo del usuario crece a marchas forzadas y aumenta el Ataque y el Ataque Especial.' },
    ],
  },
  yanma: {
    flavorText: 'Su campo visual es de 360° sin girar la cabeza. Detecta hasta las presas que están a su espalda.',
    stats: { hp: 65, attack: 65, defense: 45, specialAttack: 75, specialDefense: 45, speed: 95 },
    moves: [
      { name: 'Bomba Sónica', type: PokemonElementType.normal, power: null, description: 'Lanza ondas de choque que restan 20 PS al objetivo.' },
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Zumbido', type: PokemonElementType.bug, power: 90, description: 'El movimiento de las alas crea una onda sónica dañina. También puede disminuir la Defensa Especial del objetivo.' },
    ],
  },
  sunflora: {
    flavorText: 'A medida que se acerca el verano, va adquiriendo un color más vivo e intenso en los pétalos de la cara.',
    stats: { hp: 75, attack: 75, defense: 55, specialAttack: 105, specialDefense: 85, speed: 30 },
    moves: [
      { name: 'Silbato', type: PokemonElementType.grass, power: null, description: 'Agradable melodía que adormece al objetivo.' },
      { name: 'Danza Pétalo', type: PokemonElementType.grass, power: 120, description: 'Lanza pétalos de dos a tres turnos y acaba confundiendo al atacante.' },
      { name: 'Arraigo', type: PokemonElementType.grass, power: null, description: 'Echa raíces para recuperar PS en cada turno, pero impide el relevo.' },
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
    ],
  },
  wooper: {
    flavorText: 'Este Pokémon vive en aguas frías. Sale del agua para buscar comida cuando refresca el ambiente.',
    stats: { hp: 55, attack: 45, defense: 45, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'Bomba Fango', type: PokemonElementType.ground, power: 65, description: 'Ataca lanzando una compacta bola de fango. Puede bajar la Precisión del objetivo.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Neblina', type: PokemonElementType.ice, power: null, description: 'Rodea de fina niebla al usuario y protege las características de su equipo durante cinco turnos.' },
      { name: 'Atizar', type: PokemonElementType.normal, power: 80, description: 'Golpea con las extremidades.' },
    ],
  },
  quagsire: {
    flavorText: 'Es un Pokémon bastante perezoso. Para pescar permanece en el fondo del río con la boca abierta.',
    stats: { hp: 95, attack: 85, defense: 85, specialAttack: 65, specialDefense: 65, speed: 35 },
    moves: [
      { name: 'Bomba Fango', type: PokemonElementType.ground, power: 65, description: 'Ataca lanzando una compacta bola de fango. Puede bajar la Precisión del objetivo.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Neblina', type: PokemonElementType.ice, power: null, description: 'Rodea de fina niebla al usuario y protege las características de su equipo durante cinco turnos.' },
      { name: 'Atizar', type: PokemonElementType.normal, power: 80, description: 'Golpea con las extremidades.' },
    ],
  },
  espeon: {
    flavorText: 'Al predecir el siguiente movimiento de su rival, chasquea el extremo de la cola bífida que tiene.',
    stats: { hp: 65, attack: 65, defense: 60, specialAttack: 130, specialDefense: 95, speed: 110 },
    moves: [
      { name: 'Sol Matinal', type: PokemonElementType.normal, power: null, description: 'Restaura PS del usuario. La cantidad varía según el tiempo que haga.' },
      { name: 'Cambiafuerza', type: PokemonElementType.psychic, power: null, description: 'El usuario emplea su poder mental para intercambiar los cambios en Ataque y Ataque Especial con el objetivo.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
    ],
  },
  umbreon: {
    flavorText: 'Creado cuando la luz lunar alteró la estructura genética de Eevee. Busca presas en la oscuridad.',
    stats: { hp: 95, attack: 65, defense: 110, specialAttack: 60, specialDefense: 130, speed: 65 },
    moves: [
      { name: 'Luz Lunar', type: PokemonElementType.normal, power: null, description: 'Restaura PS del usuario. La cantidad varía según el tiempo que haga.' },
      { name: 'Mal de Ojo', type: PokemonElementType.normal, power: null, description: 'Mal de ojo que impide al objetivo huir de la batalla.' },
      { name: 'Cambiadefensa', type: PokemonElementType.psychic, power: null, description: 'El usuario emplea su poder mental para intercambiar los cambios en Defensa y Defensa Especial con el objetivo.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  murkrow: {
    flavorText: 'Esconde objetos brillantes en un lugar secreto. Meowth y Murkrow suelen saquear su escondite.',
    stats: { hp: 60, attack: 85, defense: 42, specialAttack: 85, specialDefense: 42, speed: 91 },
    moves: [
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Mal de Ojo', type: PokemonElementType.normal, power: null, description: 'Mal de ojo que impide al objetivo huir de la batalla.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  slowking: {
    flavorText: 'Su intelecto e intuición son increíbles. No pierde la compostura en ninguna situación.',
    stats: { hp: 95, attack: 75, defense: 80, specialAttack: 100, specialDefense: 110, speed: 30 },
    moves: [
      { name: 'As Oculto', type: PokemonElementType.normal, power: null, description: 'Cuantos menos PP tenga el movimiento, mayor será la fuerza para atacar.' },
      { name: 'Joya de Luz', type: PokemonElementType.rock, power: 80, description: 'Ataca con un rayo de luz que centellea como si lo formaran miles de joyas.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
      { name: 'Anulación', type: PokemonElementType.normal, power: null, description: 'Desactiva el último movimiento del objetivo durante cuatro turnos.' },
    ],
  },
  unown_a: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_b: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_c: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_d: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_e: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_f: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_g: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_h: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_i: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_j: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_k: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_l: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_m: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_n: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_o: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_p: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_q: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_r: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_s: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_t: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_u: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_v: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_w: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_x: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_y: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_z: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_exclamation: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  unown_question: {
    flavorText: 'Su cuerpo fino y plano aparece siempre en los muros. Su forma parece tener algún significado.',
    stats: { hp: 48, attack: 72, defense: 48, specialAttack: 72, specialDefense: 48, speed: 48 },
    moves: [
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
    ],
  },
  misdreavus: {
    flavorText: 'Se deleita con el miedo, que absorbe con sus esferas rojas. Por el día, duerme en la oscuridad.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 85, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'Rabia', type: PokemonElementType.ghost, power: null, description: 'Si el usuario se debilita al recibir un ataque, todos los PP de este último ataque serán eliminados.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
      { name: 'Mal de Ojo', type: PokemonElementType.normal, power: null, description: 'Mal de ojo que impide al objetivo huir de la batalla.' },
      { name: 'Psicoonda', type: PokemonElementType.psychic, power: null, description: 'Ataque con una onda de energía de intensidad variable.' },
    ],
  },
  wobbuffet: {
    flavorText: 'Odia la luz y las sacudidas. Si le atacan, infla su cuerpo para aumentar su contraataque.',
    stats: { hp: 190, attack: 33, defense: 58, specialAttack: 33, specialDefense: 58, speed: 33 },
    moves: [
      { name: 'Manto Espejo', type: PokemonElementType.psychic, power: null, description: 'Responde a un ataque especial ocasionando el doble del daño recibido.' },
      { name: 'Mismo Destino', type: PokemonElementType.ghost, power: null, description: 'Si el usuario se debilita por un ataque rival antes de usar otro movimiento, el Pokémon rival se debilitará también.' },
      { name: 'Contraataque', type: PokemonElementType.fighting, power: null, description: 'Devuelve un golpe físico por duplicado.' },
      { name: 'Velo Sagrado', type: PokemonElementType.normal, power: null, description: 'Un escudo que protege de problemas de estado, como el sueño o la parálisis, durante cinco turnos.' },
    ],
  },
  girafarig: {
    flavorText: 'Cuando duerme, la cabeza de su cola se queda vigilando, ya que ella no necesita dormir.',
    stats: { hp: 70, attack: 80, defense: 65, specialAttack: 90, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Pisotón', type: PokemonElementType.normal, power: 65, description: 'Tremendo pisotón que puede hacer retroceder al objetivo.' },
      { name: 'Doble Golpe', type: PokemonElementType.normal, power: 35, description: 'Golpea al objetivo dos veces seguidas con la cola u otras partes de su cuerpo.' },
      { name: 'Cambiafuerza', type: PokemonElementType.psychic, power: null, description: 'El usuario emplea su poder mental para intercambiar los cambios en Ataque y Ataque Especial con el objetivo.' },
    ],
  },
  pineco: {
    flavorText: 'Le gusta engrosar su coraza añadiendo cortezas de árbol. El aumento de peso no le molesta.',
    stats: { hp: 50, attack: 65, defense: 90, specialAttack: 35, specialDefense: 35, speed: 15 },
    moves: [
      { name: 'Giro Rápido', type: PokemonElementType.normal, power: 50, description: 'Ataque giratorio que puede eliminar movimientos como Atadura, Constricción, Drenadoras y Púas.' },
      { name: 'Púas', type: PokemonElementType.ground, power: null, description: 'Esparce púas en el equipo rival. Las púas hieren a los Pokémon rivales que entran en combate.' },
      { name: 'Picadura', type: PokemonElementType.bug, power: 60, description: 'Pica al objetivo. Si el objetivo lleva una baya, el usuario se la come y se beneficia de su efecto.' },
      { name: 'Explosión', type: PokemonElementType.normal, power: 250, description: 'El atacante causa una grandísima explosión y hiere a todos a su alrededor. El usuario se debilita de inmediato.' },
    ],
  },
  forretress: {
    flavorText: 'Se protege con su concha de acero de tal manera que solo se pueden ver sus ojos.',
    stats: { hp: 75, attack: 90, defense: 140, specialAttack: 60, specialDefense: 60, speed: 40 },
    moves: [
      { name: 'Disparo Espejo', type: PokemonElementType.steel, power: 65, description: 'El usuario libera un haz de energía desde su pulido cuerpo. Puede bajar la Precisión.' },
      { name: 'Giro Rápido', type: PokemonElementType.normal, power: 50, description: 'Ataque giratorio que puede eliminar movimientos como Atadura, Constricción, Drenadoras y Púas.' },
      { name: 'Púas', type: PokemonElementType.ground, power: null, description: 'Esparce púas en el equipo rival. Las púas hieren a los Pokémon rivales que entran en combate.' },
      { name: 'Púas Tóxicas', type: PokemonElementType.poison, power: null, description: 'Lanza una trampa de púas tóxicas a los pies del objetivo. El veneno afecta a los Pokémon que entran en combate.' },
    ],
  },
  dunsparce: {
    flavorText: 'Este Pokémon escapa hacia atrás perforando el suelo con su cola, si es descubierto.',
    stats: { hp: 100, attack: 70, defense: 70, specialAttack: 65, specialDefense: 65, speed: 45 },
    moves: [
      { name: 'Deslumbrar', type: PokemonElementType.normal, power: null, description: 'Intimida y asusta al objetivo con la mirada para dejarlo paralizado.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
      { name: 'Respiro', type: PokemonElementType.flying, power: null, description: 'Aterriza sobre la superficie para descansar. Recupera hasta la mitad del total de sus PS.' },
    ],
  },
  gligar: {
    flavorText: 'A veces se sujeta a los precipicios. Cuando divisa una presa, despliega sus alas y planea para atacar.',
    stats: { hp: 65, attack: 75, defense: 105, specialAttack: 35, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Guillotina', type: PokemonElementType.normal, power: null, description: 'Ataque con pinzas que debilita al oponente de un golpe si acierta.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  steelix: {
    flavorText: 'Atraviesa rocas a mordisco limpio. Sus ojos pueden ver en la oscuridad subterránea.',
    stats: { hp: 75, attack: 85, defense: 200, specialAttack: 55, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Lanzarrocas', type: PokemonElementType.rock, power: 50, description: 'Tira una pequeña roca al objetivo.' },
      { name: 'Atadura', type: PokemonElementType.normal, power: 15, description: 'Ata y oprime de cuatro a cinco turnos.' },
      { name: 'Dragoaliento', type: PokemonElementType.dragon, power: 60, description: 'Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo.' },
    ],
  },
  snubbull: {
    flavorText: 'Muy travieso por naturaleza, a muchas mujeres les gusta jugar con él porque es muy cariñoso.',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'Lengüetazo', type: PokemonElementType.ghost, power: 30, description: 'Una lengua ataca al objetivo. Puede causar parálisis.' },
      { name: 'Colmillo Rayo', type: PokemonElementType.electric, power: 65, description: 'Usa colmillos electrificados para morder. Puede hacer que el objetivo retroceda o se paralice.' },
      { name: 'Colmillo Hielo', type: PokemonElementType.ice, power: 65, description: 'Usa colmillos helados para morder. Puede hacer que el objetivo retroceda o se congele.' },
      { name: 'Colmillo Ígneo', type: PokemonElementType.fire, power: 65, description: 'Usa colmillos en llamas para morder. Puede hacer que el objetivo retroceda o reciba quemaduras.' },
    ],
  },
  granbull: {
    flavorText: 'A pesar de su aspecto, es muy tímido. Sin embargo, cuando se enfada, ataca con sus colmillos.',
    stats: { hp: 90, attack: 120, defense: 75, specialAttack: 60, specialDefense: 60, speed: 45 },
    moves: [
      { name: 'Lengüetazo', type: PokemonElementType.ghost, power: 30, description: 'Una lengua ataca al objetivo. Puede causar parálisis.' },
      { name: 'Colmillo Rayo', type: PokemonElementType.electric, power: 65, description: 'Usa colmillos electrificados para morder. Puede hacer que el objetivo retroceda o se paralice.' },
      { name: 'Colmillo Hielo', type: PokemonElementType.ice, power: 65, description: 'Usa colmillos helados para morder. Puede hacer que el objetivo retroceda o se congele.' },
      { name: 'Colmillo Ígneo', type: PokemonElementType.fire, power: 65, description: 'Usa colmillos en llamas para morder. Puede hacer que el objetivo retroceda o reciba quemaduras.' },
    ],
  },
  qwilfish: {
    flavorText: 'Para arrojar sus venenosas púas, infla su cuerpo bebiendo hasta diez litros de agua de una sola vez.',
    stats: { hp: 65, attack: 95, defense: 85, specialAttack: 55, specialDefense: 55, speed: 85 },
    moves: [
      { name: 'Reducción', type: PokemonElementType.normal, power: null, description: 'El usuario mengua para aumentar mucho la Evasión.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Escupir', type: PokemonElementType.normal, power: null, description: 'Libera de una vez la energía acumulada con Reserva.' },
      { name: 'Pin Misil', type: PokemonElementType.bug, power: 25, description: 'Lanza finas púas que hieren de dos a cinco veces.' },
    ],
  },
  scizor: {
    flavorText: 'Las pinzas que posee tienen acero. Con ellas, no hay nada que se le resista. Rompen todo lo que pillan.',
    stats: { hp: 70, attack: 130, defense: 100, specialAttack: 55, specialDefense: 80, speed: 65 },
    moves: [
      { name: 'Puño Bala', type: PokemonElementType.steel, power: 40, description: 'Ataca con fuertes puñetazos tan rápidos como proyectiles. Este movimiento siempre va primero.' },
      { name: 'Viento Cortante', type: PokemonElementType.normal, power: 80, description: 'Primero se prepara y en el segundo turno ataca al oponente con ráfagas de viento cortante. Alta probabilidad de ser crítico.' },
      { name: 'Doble Golpe', type: PokemonElementType.normal, power: 35, description: 'Golpea al objetivo dos veces seguidas con la cola u otras partes de su cuerpo.' },
      { name: 'Amago', type: PokemonElementType.normal, power: 30, description: 'Permite golpear a objetivos que usan Protección o Detección y anula dichos movimientos.' },
    ],
  },
  shuckle: {
    flavorText: 'Las bayas que almacena en su caparazón con forma de tarro se convierten al final en un espeso zumo.',
    stats: { hp: 20, attack: 10, defense: 230, specialAttack: 10, specialDefense: 230, speed: 5 },
    moves: [
      { name: 'Truco Fuerza', type: PokemonElementType.psychic, power: null, description: 'Usa sus poderes mentales para intercambiar su característica de Ataque por Defensa.' },
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Refugio', type: PokemonElementType.water, power: null, description: 'El usuario se protege en su coraza y sube la Defensa.' },
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
    ],
  },
  heracross: {
    flavorText: 'Este fuerte Pokémon clava su preciado cuerno en la tripa del enemigo, lo eleva y luego lo arroja.',
    stats: { hp: 80, attack: 125, defense: 75, specialAttack: 40, specialDefense: 95, speed: 85 },
    moves: [
      { name: 'Cornada', type: PokemonElementType.normal, power: 65, description: 'Ataca al objetivo con una cornada.' },
      { name: 'Megacuerno', type: PokemonElementType.bug, power: 120, description: 'Violenta embestida con cuernos imponentes.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Amago', type: PokemonElementType.normal, power: 30, description: 'Permite golpear a objetivos que usan Protección o Detección y anula dichos movimientos.' },
    ],
  },
  sneasel: {
    flavorText: 'Se alimenta de huevos robados en nidos. Clava sus afiladas garras en los puntos débiles de sus rivales.',
    stats: { hp: 55, attack: 95, defense: 55, specialAttack: 35, specialDefense: 75, speed: 115 },
    moves: [
      { name: 'Esquirla Helada', type: PokemonElementType.ice, power: 40, description: 'Crea bolas de hielo y las lanza a gran velocidad. Este movimiento siempre va primero.' },
      { name: 'Paliza', type: PokemonElementType.dark, power: null, description: 'Ataque de todo el equipo Pokémon. Cuantos más haya, más veces se atacará.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  teddiursa: {
    flavorText: 'Si encuentra miel, brillará la marca de su frente. Se lame las garras cuando están llenas de miel.',
    stats: { hp: 60, attack: 80, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Lengüetazo', type: PokemonElementType.ghost, power: 30, description: 'Una lengua ataca al objetivo. Puede causar parálisis.' },
      { name: 'Dulce Aroma', type: PokemonElementType.normal, power: null, description: 'Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión. En la hierba alta sirve para atraer a Pokémon salvajes.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  ursaring: {
    flavorText: 'Capaz de percibir cualquier tipo de aroma, encuentra sin problemas todo alimento enterrado bajo tierra.',
    stats: { hp: 90, attack: 130, defense: 75, specialAttack: 75, specialDefense: 75, speed: 55 },
    moves: [
      { name: 'Lengüetazo', type: PokemonElementType.ghost, power: 30, description: 'Una lengua ataca al objetivo. Puede causar parálisis.' },
      { name: 'Machada', type: PokemonElementType.fighting, power: 100, description: 'Gira con fuerza el puño y da un gran golpe. No obstante, baja la Velocidad.' },
      { name: 'Dulce Aroma', type: PokemonElementType.normal, power: null, description: 'Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión. En la hierba alta sirve para atraer a Pokémon salvajes.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
    ],
  },
  slugma: {
    flavorText: 'Asiduo a las zonas volcánicas, se desliza lentamente en busca de lugares calientes.',
    stats: { hp: 40, attack: 40, defense: 40, specialAttack: 70, specialDefense: 40, speed: 20 },
    moves: [
      { name: 'Humareda', type: PokemonElementType.fire, power: 80, description: 'Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar.' },
      { name: 'Polución', type: PokemonElementType.poison, power: 30, description: 'El objetivo es atacado con gases tóxicos que pueden llegar a envenenar.' },
      { name: 'Lanzarrocas', type: PokemonElementType.rock, power: 50, description: 'Tira una pequeña roca al objetivo.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
    ],
  },
  magcargo: {
    flavorText: 'En ocasiones, su resbaladiza concha lanza intensas llamaradas que recorren todo su cuerpo.',
    stats: { hp: 60, attack: 50, defense: 120, specialAttack: 90, specialDefense: 80, speed: 30 },
    moves: [
      { name: 'Humareda', type: PokemonElementType.fire, power: 80, description: 'Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar.' },
      { name: 'Polución', type: PokemonElementType.poison, power: 30, description: 'El objetivo es atacado con gases tóxicos que pueden llegar a envenenar.' },
      { name: 'Lanzarrocas', type: PokemonElementType.rock, power: 50, description: 'Tira una pequeña roca al objetivo.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
    ],
  },
  swinub: {
    flavorText: 'Frota su hocico contra el suelo para desenterrar comida. A veces descubre aguas termales.',
    stats: { hp: 50, attack: 50, defense: 40, specialAttack: 30, specialDefense: 30, speed: 50 },
    moves: [
      { name: 'Bomba Fango', type: PokemonElementType.ground, power: 65, description: 'Ataca lanzando una compacta bola de fango. Puede bajar la Precisión del objetivo.' },
      { name: 'Esquirla Helada', type: PokemonElementType.ice, power: 40, description: 'Crea bolas de hielo y las lanza a gran velocidad. Este movimiento siempre va primero.' },
      { name: 'Nieve Polvo', type: PokemonElementType.ice, power: 40, description: 'Lanza nieve que puede llegar a congelar.' },
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
    ],
  },
  piloswine: {
    flavorText: 'Aunque tiene las patas cortas, las fuertes pezuñas le permiten agarrarse bien al suelo, a pesar del hielo.',
    stats: { hp: 100, attack: 100, defense: 80, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Bomba Fango', type: PokemonElementType.ground, power: 65, description: 'Ataca lanzando una compacta bola de fango. Puede bajar la Precisión del objetivo.' },
      { name: 'Nieve Polvo', type: PokemonElementType.ice, power: 40, description: 'Lanza nieve que puede llegar a congelar.' },
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
    ],
  },
  corsola: {
    flavorText: 'Crece y muda continuamente. La parte superior de su cabeza es muy apreciada por su belleza.',
    stats: { hp: 65, attack: 55, defense: 95, specialAttack: 65, specialDefense: 95, speed: 35 },
    moves: [
      { name: 'Clavo Cañón', type: PokemonElementType.normal, power: 20, description: 'Lanza finas púas que hieren de dos a cinco veces.' },
      { name: 'Conjuro', type: PokemonElementType.normal, power: null, description: 'Lanza al cielo un conjuro que impide al objetivo asestar golpes críticos.' },
      { name: 'Alivio', type: PokemonElementType.normal, power: null, description: 'Descansa para curar parálisis, envenenamiento o quemaduras.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
    ],
  },
  remoraid: {
    flavorText: 'Tiene muy buena puntería. Dispara agua a sus presas, hasta si se están moviendo, a más de 100 metros.',
    stats: { hp: 35, attack: 65, defense: 35, specialAttack: 65, specialDefense: 35, speed: 65 },
    moves: [
      { name: 'Fijar Blanco', type: PokemonElementType.normal, power: null, description: 'Fija el blanco para que el siguiente ataque no falle.' },
      { name: 'Rayo Aurora', type: PokemonElementType.ice, power: 65, description: 'Rayo multicolor que puede reducir el Ataque.' },
      { name: 'Rayo Burbuja', type: PokemonElementType.water, power: 65, description: 'Diluvio de burbujas que puede bajar la Velocidad.' },
      { name: 'Psicorrayo', type: PokemonElementType.psychic, power: 65, description: 'Extraño rayo que puede causar confusión.' },
    ],
  },
  octillery: {
    flavorText: 'Tiene querencia por los agujeros. Ataca escupiendo tinta metido en las grietas de rocas o en recipientes.',
    stats: { hp: 75, attack: 105, defense: 75, specialAttack: 105, specialDefense: 75, speed: 45 },
    moves: [
      { name: 'Pulpocañón', type: PokemonElementType.water, power: 65, description: 'Dispara tinta a la cara. Puede bajar la Precisión.' },
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Estrujón', type: PokemonElementType.normal, power: null, description: 'Estruja con fuerza al objetivo. Cuantos más PS tenga el objetivo, más fuerza tendrá el ataque.' },
      { name: 'Rayo Aurora', type: PokemonElementType.ice, power: 65, description: 'Rayo multicolor que puede reducir el Ataque.' },
    ],
  },
  delibird: {
    flavorText: 'Transporta alimentos en su cola enrollada. Le gusta compartir su comida con los montañistas perdidos.',
    stats: { hp: 45, attack: 55, defense: 45, specialAttack: 65, specialDefense: 45, speed: 75 },
    moves: [
      { name: 'Presente', type: PokemonElementType.normal, power: null, description: 'Quien lo usa ataca al objetivo dándole un regalo con bomba trampa. Sin embargo, a veces restaura sus PS.' },
    ],
  },
  mantine: {
    flavorText: 'Acumula velocidad nadando y puede saltar fuera del agua, alcanzando 100 metros de altura, para descender luego planeando.',
    stats: { hp: 85, attack: 40, defense: 70, specialAttack: 80, specialDefense: 140, speed: 70 },
    moves: [
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Acua Aro', type: PokemonElementType.water, power: null, description: 'Un manto de agua cubre al Pokémon que lo usa. Recupera algunos PS en cada turno.' },
      { name: 'Supersónico', type: PokemonElementType.normal, power: null, description: 'Raras ondas sónicas que confunden al objetivo.' },
    ],
  },
  skarmory: {
    flavorText: 'Después de anidar en zarzas, las alas de sus polluelos crecen fortalecidas por los rasguños.',
    stats: { hp: 65, attack: 80, defense: 140, specialAttack: 40, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Eco Metálico', type: PokemonElementType.steel, power: null, description: 'Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
      { name: 'Púas', type: PokemonElementType.ground, power: null, description: 'Esparce púas en el equipo rival. Las púas hieren a los Pokémon rivales que entran en combate.' },
    ],
  },
  houndour: {
    flavorText: 'Al amanecer, resuena por la zona su inquietante aullido para anunciar que es su territorio.',
    stats: { hp: 45, attack: 60, defense: 30, specialAttack: 80, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Polución', type: PokemonElementType.poison, power: 30, description: 'El objetivo es atacado con gases tóxicos que pueden llegar a envenenar.' },
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Aullido', type: PokemonElementType.normal, power: null, description: 'Aullido que sube el ánimo y aumenta el Ataque.' },
      { name: 'Paliza', type: PokemonElementType.dark, power: null, description: 'Ataque de todo el equipo Pokémon. Cuantos más haya, más veces se atacará.' },
    ],
  },
  houndoom: {
    flavorText: 'Hace mucho, la gente creía que sus horripilantes aullidos eran de la muerte personificada.',
    stats: { hp: 75, attack: 90, defense: 50, specialAttack: 110, specialDefense: 80, speed: 95 },
    moves: [
      { name: 'Polución', type: PokemonElementType.poison, power: 30, description: 'El objetivo es atacado con gases tóxicos que pueden llegar a envenenar.' },
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Aullido', type: PokemonElementType.normal, power: null, description: 'Aullido que sube el ánimo y aumenta el Ataque.' },
      { name: 'Paliza', type: PokemonElementType.dark, power: null, description: 'Ataque de todo el equipo Pokémon. Cuantos más haya, más veces se atacará.' },
    ],
  },
  phanpy: {
    flavorText: 'Como muestra de afecto, golpea con su trompa. Aunque es tan fuerte que te mandará lejos.',
    stats: { hp: 90, attack: 60, defense: 60, specialAttack: 40, specialDefense: 40, speed: 40 },
    moves: [
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Atizar', type: PokemonElementType.normal, power: 80, description: 'Golpea con las extremidades.' },
      { name: 'Última Baza', type: PokemonElementType.normal, power: 140, description: 'Este movimiento solo puede utilizarse tras haber usado al menos una vez todos los demás conocidos por el Pokémon.' },
      { name: 'Azote', type: PokemonElementType.normal, power: null, description: 'Ataque frenético. Cuantos menos PS tenga el usuario, más daño producirá.' },
    ],
  },
  kingdra: {
    flavorText: 'Dicen que suele esconderse en cuevas submarinas. Puede crear torbellinos al bostezar.',
    stats: { hp: 75, attack: 95, defense: 95, specialAttack: 95, specialDefense: 95, speed: 85 },
    moves: [
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Danza Dragón', type: PokemonElementType.dragon, power: null, description: 'Danza mística que sube el Ataque y la Velocidad.' },
      { name: 'Ciclón', type: PokemonElementType.dragon, power: 40, description: 'Crea un violento tornado para hacer trizas al enemigo. Puede hacerlo retroceder.' },
    ],
  },
  donphan: {
    flavorText: 'Tiene afilados y duros colmillos, y una gruesa piel. Su Placaje es tan fuerte que puede derribar una casa.',
    stats: { hp: 90, attack: 120, defense: 120, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Cornada', type: PokemonElementType.normal, power: 65, description: 'Ataca al objetivo con una cornada.' },
      { name: 'Magnitud', type: PokemonElementType.ground, power: null, description: 'Sacudida sísmica de intensidad variable que afecta a todos los Pokémon a su alrededor.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Giro Rápido', type: PokemonElementType.normal, power: 50, description: 'Ataque giratorio que puede eliminar movimientos como Atadura, Constricción, Drenadoras y Púas.' },
    ],
  },
  porygon2: {
    flavorText: 'La investigación mejoró sus habilidades. A veces, puede actuar de forma no programada.',
    stats: { hp: 85, attack: 80, defense: 90, specialAttack: 105, specialDefense: 95, speed: 60 },
    moves: [
      { name: 'Conversión', type: PokemonElementType.normal, power: null, description: 'Cambia el tipo del usuario por el del primero de sus movimientos.' },
      { name: 'Conversión 2', type: PokemonElementType.normal, power: null, description: 'El usuario cambia de tipo para hacerse resistente al último tipo de movimiento usado por el objetivo.' },
      { name: 'Fijar Blanco', type: PokemonElementType.normal, power: null, description: 'Fija el blanco para que el siguiente ataque no falle.' },
      { name: 'Triataque', type: PokemonElementType.normal, power: 80, description: 'Ataque triple que puede paralizar, quemar o congelar al objetivo.' },
    ],
  },
  stantler: {
    flavorText: 'Mirar a su cornamenta provoca una extraña sensación de pérdida de equilibrio.',
    stats: { hp: 73, attack: 95, defense: 62, specialAttack: 85, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Yo Primero', type: PokemonElementType.normal, power: null, description: 'Se adelanta al movimiento que pretende usar el objetivo y lo lanza antes con más fuerza. Si el usuario es más lento, falla.' },
      { name: 'Pisotón', type: PokemonElementType.normal, power: 65, description: 'Tremendo pisotón que puede hacer retroceder al objetivo.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
    ],
  },
  smeargle: {
    flavorText: 'Marca su territorio usando su cola a modo de pincel. Ha hecho más de 5000 marcas diferentes.',
    stats: { hp: 55, attack: 20, defense: 35, specialAttack: 20, specialDefense: 45, speed: 75 },
    moves: [
      { name: 'Esquema', type: PokemonElementType.normal, power: null, description: 'Aprende de forma permanente el último movimiento utilizado por el objetivo. Es de un solo uso.' },
    ],
  },
  tyrogue: {
    flavorText: 'Ataca siempre con mucha energía. Para fortalecerse a sí mismo, sigue luchando aunque pierda.',
    stats: { hp: 35, attack: 35, defense: 35, specialAttack: 35, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Sorpresa', type: PokemonElementType.normal, power: 40, description: 'Ataca primero y, además, hace retroceder al objetivo. Solo sirve en el primer turno.' },
      { name: 'Placaje', type: PokemonElementType.normal, power: 40, description: 'Embiste con todo el cuerpo.' },
      { name: 'Refuerzo', type: PokemonElementType.normal, power: null, description: 'El usuario ayuda a un aliado reforzando la potencia de su ataque.' },
    ],
  },
  hitmontop: {
    flavorText: 'Gira a gran velocidad al luchar. La fuerza centrífuga multiplica su poder de destrucción por diez.',
    stats: { hp: 50, attack: 95, defense: 95, specialAttack: 35, specialDefense: 110, speed: 70 },
    moves: [
      { name: 'Triple Patada', type: PokemonElementType.fighting, power: 10, description: 'Patea hasta tres veces seguidas y cada vez más fuerte.' },
      { name: 'Patada Giro', type: PokemonElementType.fighting, power: 60, description: 'Da una patada rápida y circular. Puede hacer retroceder al objetivo.' },
      { name: 'Giro Rápido', type: PokemonElementType.normal, power: 50, description: 'Ataque giratorio que puede eliminar movimientos como Atadura, Constricción, Drenadoras y Púas.' },
      { name: 'Amago', type: PokemonElementType.normal, power: 30, description: 'Permite golpear a objetivos que usan Protección o Detección y anula dichos movimientos.' },
    ],
  },
  smoochum: {
    flavorText: 'Sus labios son la parte más sensible de su cuerpo. Siempre los usa para examinar las cosas.',
    stats: { hp: 45, attack: 30, defense: 15, specialAttack: 85, specialDefense: 65, speed: 65 },
    moves: [
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
      { name: 'Conjuro', type: PokemonElementType.normal, power: null, description: 'Lanza al cielo un conjuro que impide al objetivo asestar golpes críticos.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
      { name: 'Nieve Polvo', type: PokemonElementType.ice, power: 40, description: 'Lanza nieve que puede llegar a congelar.' },
    ],
  },
  magby: {
    flavorText: 'Es pequeño, pero su cuerpo puede llegar a alcanzar 600 °C. Cuando inspira y espira, expulsa llamas por la nariz y por la boca.',
    stats: { hp: 45, attack: 75, defense: 37, specialAttack: 70, specialDefense: 55, speed: 83 },
    moves: [
      { name: 'Humareda', type: PokemonElementType.fire, power: 80, description: 'Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar.' },
      { name: 'Polución', type: PokemonElementType.poison, power: 30, description: 'El objetivo es atacado con gases tóxicos que pueden llegar a envenenar.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
    ],
  },
  elekid: {
    flavorText: 'Genera electricidad girando los brazos. No obstante, es incapaz de almacenar la energía creada.',
    stats: { hp: 45, attack: 63, defense: 37, specialAttack: 65, specialDefense: 55, speed: 95 },
    moves: [
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
      { name: 'Chirrido', type: PokemonElementType.normal, power: null, description: 'Alarido agudo que reduce mucho la Defensa del objetivo.' },
    ],
  },
  miltank: {
    flavorText: 'Si tiene crías, la leche que produce contiene muchos más nutrientes de lo normal.',
    stats: { hp: 95, attack: 80, defense: 105, specialAttack: 40, specialDefense: 70, speed: 100 },
    moves: [
      { name: 'Batido', type: PokemonElementType.normal, power: null, description: 'Restaura la mitad de los PS máximos del usuario. Fuera de combate se usa para transferir parte de sus PS a un aliado.' },
      { name: 'Espabila', type: PokemonElementType.fighting, power: 70, description: 'Inflige gran daño a objetivos dormidos. Sin embargo, los bofetones también los despiertan.' },
      { name: 'Pisotón', type: PokemonElementType.normal, power: 65, description: 'Tremendo pisotón que puede hacer retroceder al objetivo.' },
      { name: 'Cascabel Cura', type: PokemonElementType.normal, power: null, description: 'Tañido que cura los problemas de estado de todos los Pokémon del equipo.' },
    ],
  },
  blissey: {
    flavorText: 'Los huevos que pone están llenos de felicidad. Solo con probar un poquito de uno, cualquiera sonríe.',
    stats: { hp: 255, attack: 10, defense: 10, specialAttack: 75, specialDefense: 135, speed: 55 },
    moves: [
      { name: 'Bomba Huevo', type: PokemonElementType.normal, power: 100, description: 'Arroja un huevo al objetivo con gran fuerza.' },
      { name: 'Ovocuración', type: PokemonElementType.normal, power: null, description: 'Restaura la mitad de los PS máximos del usuario. Fuera de combate se usa para transferir parte de sus PS a un aliado.' },
      { name: 'Reducción', type: PokemonElementType.normal, power: null, description: 'El usuario mengua para aumentar mucho la Evasión.' },
      { name: 'Deseo Cura', type: PokemonElementType.psychic, power: null, description: 'El Pokémon cae debilitado, pero su sustituto recupera su estado y los PS.' },
    ],
  },
  raikou: {
    flavorText: 'Las nubes de lluvia que lleva le permiten lanzar rayos a voluntad. Dicen que apareció con un rayo.',
    stats: { hp: 90, attack: 85, defense: 75, specialAttack: 115, specialDefense: 100, speed: 115 },
    moves: [
      { name: 'Paranormal', type: PokemonElementType.psychic, power: 80, description: 'Energía muy extraña que puede hacer retroceder al objetivo.' },
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
    ],
  },
  entei: {
    flavorText: 'Un Pokémon que corre por la tierra. Dicen que siempre nace uno cuando aparece un nuevo volcán.',
    stats: { hp: 115, attack: 115, defense: 85, specialAttack: 90, specialDefense: 75, speed: 100 },
    moves: [
      { name: 'Estallido', type: PokemonElementType.fire, power: 150, description: 'Furia explosiva. Cuanto menor sea el número de PS del usuario, menos daño hará el ataque.' },
      { name: 'Humareda', type: PokemonElementType.fire, power: 80, description: 'Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar.' },
      { name: 'Pisotón', type: PokemonElementType.normal, power: 65, description: 'Tremendo pisotón que puede hacer retroceder al objetivo.' },
      { name: 'Paranormal', type: PokemonElementType.psychic, power: 80, description: 'Energía muy extraña que puede hacer retroceder al objetivo.' },
    ],
  },
  suicune: {
    flavorText: 'Recorre el mundo para purificar agua contaminada. Corre veloz con el viento del norte.',
    stats: { hp: 100, attack: 75, defense: 115, specialAttack: 90, specialDefense: 115, speed: 85 },
    moves: [
      { name: 'Rayo Aurora', type: PokemonElementType.ice, power: 65, description: 'Rayo multicolor que puede reducir el Ataque.' },
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
      { name: 'Manto Espejo', type: PokemonElementType.psychic, power: null, description: 'Responde a un ataque especial ocasionando el doble del daño recibido.' },
      { name: 'Paranormal', type: PokemonElementType.psychic, power: 80, description: 'Energía muy extraña que puede hacer retroceder al objetivo.' },
    ],
  },
  larvitar: {
    flavorText: 'Se alimenta de tierra. Después de comer una gran montaña, se duerme y empieza a crecer.',
    stats: { hp: 50, attack: 64, defense: 50, specialAttack: 45, specialDefense: 50, speed: 41 },
    moves: [
      { name: 'Saña', type: PokemonElementType.normal, power: 120, description: 'Ataca de dos a tres turnos y acaba confundiendo al agresor.' },
      { name: 'Pulso Umbrío', type: PokemonElementType.dark, power: 80, description: 'Libera una horrible aura llena de malos pensamientos y puede hacer retroceder al objetivo.' },
      { name: 'Chirrido', type: PokemonElementType.normal, power: null, description: 'Alarido agudo que reduce mucho la Defensa del objetivo.' },
      { name: 'Mordisco', type: PokemonElementType.dark, power: 60, description: 'Un voraz bocado que puede hacer retroceder al objetivo.' },
    ],
  },
  pupitar: {
    flavorText: 'Su cuerpo es duro como la roca. Se autopropulsa como un cohete soltando los gases de su interior.',
    stats: { hp: 70, attack: 84, defense: 70, specialAttack: 65, specialDefense: 70, speed: 51 },
    moves: [
      { name: 'Saña', type: PokemonElementType.normal, power: 120, description: 'Ataca de dos a tres turnos y acaba confundiendo al agresor.' },
      { name: 'Pulso Umbrío', type: PokemonElementType.dark, power: 80, description: 'Libera una horrible aura llena de malos pensamientos y puede hacer retroceder al objetivo.' },
      { name: 'Chirrido', type: PokemonElementType.normal, power: null, description: 'Alarido agudo que reduce mucho la Defensa del objetivo.' },
      { name: 'Mordisco', type: PokemonElementType.dark, power: 60, description: 'Un voraz bocado que puede hacer retroceder al objetivo.' },
    ],
  },
  tyranitar: {
    flavorText: 'En una de sus poderosas garras tiene el poder de hacer temblar la tierra y las montañas.',
    stats: { hp: 100, attack: 134, defense: 110, specialAttack: 95, specialDefense: 100, speed: 61 },
    moves: [
      { name: 'Colmillo Rayo', type: PokemonElementType.electric, power: 65, description: 'Usa colmillos electrificados para morder. Puede hacer que el objetivo retroceda o se paralice.' },
      { name: 'Colmillo Hielo', type: PokemonElementType.ice, power: 65, description: 'Usa colmillos helados para morder. Puede hacer que el objetivo retroceda o se congele.' },
      { name: 'Saña', type: PokemonElementType.normal, power: 120, description: 'Ataca de dos a tres turnos y acaba confundiendo al agresor.' },
      { name: 'Colmillo Ígneo', type: PokemonElementType.fire, power: 65, description: 'Usa colmillos en llamas para morder. Puede hacer que el objetivo retroceda o reciba quemaduras.' },
    ],
  },
  lugia: {
    flavorText: 'Duerme en una dorsal marina. Si bate sus alas, puede causar tormentas de 40 días.',
    stats: { hp: 106, attack: 90, defense: 130, specialAttack: 90, specialDefense: 154, speed: 110 },
    moves: [
      { name: 'Aerochorro', type: PokemonElementType.flying, power: 100, description: 'Lanza un chorro de aire que suele dar un golpe crítico.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Carga Dragón', type: PokemonElementType.dragon, power: 100, description: 'Ataca de forma brutal mientras intimida al objetivo. También puede hacerlo retroceder.' },
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
    ],
  },
  hooh: {
    flavorText: 'Cuenta la leyenda que brilla en siete colores. Dicen que deja un arcoíris tras de sí al volar.',
    stats: { hp: 106, attack: 130, defense: 90, specialAttack: 110, specialDefense: 154, speed: 90 },
    moves: [
      { name: 'Fuego Sagrado', type: PokemonElementType.fire, power: 100, description: 'Fuego místico de gran intensidad que puede causar quemaduras.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
      { name: 'Remolino', type: PokemonElementType.normal, power: null, description: 'Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.' },
    ],
  },
  celebi: {
    flavorText: 'Puede viajar en el tiempo, pero se dice que solo aparece en tiempos de paz.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Impide al objetivo usar movimientos, habilidades y objetos equipados que recuperan PS durante cinco turnos.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
      { name: 'Deseo Cura', type: PokemonElementType.psychic, power: null, description: 'El Pokémon cae debilitado, pero su sustituto recupera su estado y los PS.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
    ],
  },
  treecko: {
    flavorText: 'Escala superficies verticales muy rápido. Con la cola detecta la humedad y prevé el tiempo que va a hacer.',
    stats: { hp: 40, attack: 45, defense: 35, specialAttack: 65, specialDefense: 55, speed: 70 },
    moves: [
      { name: 'Absorber', type: PokemonElementType.grass, power: 20, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Megaagotar', type: PokemonElementType.grass, power: 40, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
      { name: 'Atizar', type: PokemonElementType.normal, power: 80, description: 'Golpea con las extremidades.' },
    ],
  },
  grovyle: {
    flavorText: 'Los desarrollados músculos que tiene en las extremidades inferiores le hacen ser muy ágil y le permiten dar grandes saltos.',
    stats: { hp: 50, attack: 65, defense: 45, specialAttack: 85, specialDefense: 65, speed: 95 },
    moves: [
      { name: 'Hoja Aguda', type: PokemonElementType.grass, power: 90, description: 'Acuchilla con una hoja fina. Suele dar un golpe crítico.' },
      { name: 'Absorber', type: PokemonElementType.grass, power: 20, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
      { name: 'Atizar', type: PokemonElementType.normal, power: 80, description: 'Golpea con las extremidades.' },
    ],
  },
  sceptile: {
    flavorText: 'Las hojas de sus brazos pueden cortar gruesos árboles. Invencible en los combates en la jungla.',
    stats: { hp: 70, attack: 85, defense: 65, specialAttack: 105, specialDefense: 85, speed: 120 },
    moves: [
      { name: 'Hoja Aguda', type: PokemonElementType.grass, power: 90, description: 'Acuchilla con una hoja fina. Suele dar un golpe crítico.' },
      { name: 'Absorber', type: PokemonElementType.grass, power: 20, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
      { name: 'Atizar', type: PokemonElementType.normal, power: 80, description: 'Golpea con las extremidades.' },
    ],
  },
  torchic: {
    flavorText: 'En su interior, guarda una llama que arde sin cesar. Si se le abraza, se nota que tiene una temperatura muy alta.',
    stats: { hp: 45, attack: 60, defense: 40, specialAttack: 70, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'Espejo', type: PokemonElementType.flying, power: null, description: 'Contraataca con el mismo movimiento empleado por el objetivo.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Giro Fuego', type: PokemonElementType.fire, power: 35, description: 'Un aro de fuego que atrapa al objetivo de cuatro a cinco turnos.' },
    ],
  },
  combusken: {
    flavorText: 'Su habilidad le permite dar diez patadas por segundo. Lanza potentes gritos para intimidar.',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 85, specialDefense: 60, speed: 55 },
    moves: [
      { name: 'Gancho Alto', type: PokemonElementType.fighting, power: 85, description: 'Gancho ascendente de gran ímpetu.' },
      { name: 'Espejo', type: PokemonElementType.flying, power: null, description: 'Contraataca con el mismo movimiento empleado por el objetivo.' },
      { name: 'Doble Patada', type: PokemonElementType.fighting, power: 30, description: 'Una patada doble. Golpea dos veces.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
    ],
  },
  blaziken: {
    flavorText: 'Puede saltar edificios de 30 plantas. Con sus golpes de fuego quema a sus rivales.',
    stats: { hp: 80, attack: 120, defense: 70, specialAttack: 110, specialDefense: 70, speed: 80 },
    moves: [
      { name: 'Gancho Alto', type: PokemonElementType.fighting, power: 85, description: 'Gancho ascendente de gran ímpetu.' },
      { name: 'Patada Ígnea', type: PokemonElementType.fire, power: 85, description: 'Patada que suele ser un golpe crítico y puede causar quemaduras.' },
      { name: 'Espejo', type: PokemonElementType.flying, power: null, description: 'Contraataca con el mismo movimiento empleado por el objetivo.' },
      { name: 'Doble Patada', type: PokemonElementType.fighting, power: 30, description: 'Una patada doble. Golpea dos veces.' },
    ],
  },
  marshtomp: {
    flavorText: 'Sus piernas robustas impiden que pierda el equilibrio y caiga, incluso en el barro. Duerme bajo la arena.',
    stats: { hp: 70, attack: 85, defense: 70, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Agua Lodosa', type: PokemonElementType.water, power: 90, description: 'Ataque con agua lodosa que puede bajar la Precisión del equipo rival.' },
      { name: 'Pistola Agua', type: PokemonElementType.water, power: 40, description: 'Ataca disparando agua con gran potencia.' },
    ],
  },
  mudkip: {
    flavorText: 'Tiene una larga cola que le propulsa por el agua con mucha potencia. A pesar de ser pequeño, tiene mucha fuerza.',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Pistola Agua', type: PokemonElementType.water, power: 40, description: 'Ataca disparando agua con gran potencia.' },
      { name: 'Torbellino', type: PokemonElementType.water, power: 35, description: 'Una tromba de agua atrapa al objetivo durante cuatro o cinco turnos.' },
    ],
  },
  swampert: {
    flavorText: 'Con sus brazos duros como el acero puede partir rocas gigantescas en mil pedazos de un solo golpe.',
    stats: { hp: 100, attack: 110, defense: 90, specialAttack: 85, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Agua Lodosa', type: PokemonElementType.water, power: 90, description: 'Ataque con agua lodosa que puede bajar la Precisión del equipo rival.' },
      { name: 'Pistola Agua', type: PokemonElementType.water, power: 40, description: 'Ataca disparando agua con gran potencia.' },
    ],
  },
  poochyena: {
    flavorText: 'Es muy persistente. Si se fija en una presa, no la dejará hasta que caiga agotada.',
    stats: { hp: 35, attack: 55, defense: 35, specialAttack: 30, specialDefense: 30, speed: 35 },
    moves: [
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Aullido', type: PokemonElementType.normal, power: null, description: 'Aullido que sube el ánimo y aumenta el Ataque.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
      { name: 'Mordisco', type: PokemonElementType.dark, power: 60, description: 'Un voraz bocado que puede hacer retroceder al objetivo.' },
    ],
  },
  mightyena: {
    flavorText: 'Siempre obedece a los buenos Entrenadores. Está acostumbrado a vivir en jaurías en estado salvaje.',
    stats: { hp: 70, attack: 90, defense: 70, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Aullido', type: PokemonElementType.normal, power: null, description: 'Aullido que sube el ánimo y aumenta el Ataque.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
      { name: 'Mordisco', type: PokemonElementType.dark, power: 60, description: 'Un voraz bocado que puede hacer retroceder al objetivo.' },
    ],
  },
  zigzagoon: {
    flavorText: 'Se mueve en zigzag. Se le da bien encontrar objetos ocultos en la hierba e incluso enterrados.',
    stats: { hp: 38, attack: 30, defense: 41, specialAttack: 30, specialDefense: 41, speed: 60 },
    moves: [
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Tambor', type: PokemonElementType.normal, power: null, description: 'Reduce la mitad de los PS máximos para mejorar al máximo el Ataque.' },
      { name: 'Pin Misil', type: PokemonElementType.bug, power: 25, description: 'Lanza finas púas que hieren de dos a cinco veces.' },
    ],
  },
  linoone: {
    flavorText: 'En línea recta corre a algo más de 100 km/h, pero no es tan hábil si hay curvas de por medio.',
    stats: { hp: 78, attack: 70, defense: 61, specialAttack: 50, specialDefense: 61, speed: 100 },
    moves: [
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Tambor', type: PokemonElementType.normal, power: null, description: 'Reduce la mitad de los PS máximos para mejorar al máximo el Ataque.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
    ],
  },
  wurmple: {
    flavorText: 'Le encanta comer hojas. Si le ataca un Starly, se defenderá con sus púas.',
    stats: { hp: 45, attack: 45, defense: 35, specialAttack: 20, specialDefense: 30, speed: 20 },
    moves: [
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Disparo Demora', type: PokemonElementType.bug, power: null, description: 'Lanza seda a los rivales y reduce mucho su Velocidad.' },
      { name: 'Placaje', type: PokemonElementType.normal, power: 40, description: 'Embiste con todo el cuerpo.' },
    ],
  },
  silcoon: {
    flavorText: 'Se agarra con su seda a las ramas de un árbol y espera su evolución bebiendo agua de lluvia.',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  beautifly: {
    flavorText: 'Los dibujos de sus coloridas alas son muy peculiares. Liba el néctar de las flores con su fina trompa.',
    stats: { hp: 60, attack: 70, defense: 50, specialAttack: 100, specialDefense: 50, speed: 65 },
    moves: [
      { name: 'Sol Matinal', type: PokemonElementType.normal, power: null, description: 'Restaura PS del usuario. La cantidad varía según el tiempo que haga.' },
      { name: 'Viento Plata', type: PokemonElementType.bug, power: 60, description: 'Fuerte viento con polvo de escamas. Puede subir todas las características de quien lo usa.' },
      { name: 'Paralizador', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que paraliza al objetivo.' },
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
    ],
  },
  cascoon: {
    flavorText: 'Está formado por seda que se endurece poco a poco. Si se resquebraja el capullo, está a punto de evolucionar.',
    stats: { hp: 50, attack: 35, defense: 55, specialAttack: 25, specialDefense: 25, speed: 15 },
    moves: [
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  dustox: {
    flavorText: 'Pokémon nocturno. Atraído por las luces de la ciudad, se come las hojas y arbustos de las avenidas.',
    stats: { hp: 60, attack: 50, defense: 70, specialAttack: 50, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'Luz Lunar', type: PokemonElementType.normal, power: null, description: 'Restaura PS del usuario. La cantidad varía según el tiempo que haga.' },
      { name: 'Viento Plata', type: PokemonElementType.bug, power: 60, description: 'Fuerte viento con polvo de escamas. Puede subir todas las características de quien lo usa.' },
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
      { name: 'Remolino', type: PokemonElementType.normal, power: null, description: 'Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.' },
    ],
  },
  lotad: {
    flavorText: 'Parece una planta acuática. Hace de ferry para los Pokémon que no saben nadar.',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 40, specialDefense: 50, speed: 30 },
    moves: [
      { name: 'Neblina', type: PokemonElementType.ice, power: null, description: 'Rodea de fina niebla al usuario y protege las características de su equipo durante cinco turnos.' },
      { name: 'Absorber', type: PokemonElementType.grass, power: 20, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Megaagotar', type: PokemonElementType.grass, power: 40, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Adaptación', type: PokemonElementType.normal, power: null, description: 'Usa el poder de la naturaleza para atacar. Su efecto varía según el entorno de combate.' },
    ],
  },
  lombre: {
    flavorText: 'Vive en el agua y, cuando hace sol, se queda en la orilla. De día duerme sobre las algas y de noche entra en acción.',
    stats: { hp: 60, attack: 50, defense: 50, specialAttack: 60, specialDefense: 70, speed: 50 },
    moves: [
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Absorber', type: PokemonElementType.grass, power: 20, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Sorpresa', type: PokemonElementType.normal, power: 40, description: 'Ataca primero y, además, hace retroceder al objetivo. Solo sirve en el primer turno.' },
    ],
  },
  ludicolo: {
    flavorText: 'Cuando oye música alegre, sus músculos se llenan de energía, y no puede evitar ponerse a bailar.',
    stats: { hp: 80, attack: 70, defense: 70, specialAttack: 90, specialDefense: 100, speed: 70 },
    moves: [
      { name: 'Absorber', type: PokemonElementType.grass, power: 20, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Adaptación', type: PokemonElementType.normal, power: null, description: 'Usa el poder de la naturaleza para atacar. Su efecto varía según el entorno de combate.' },
      { name: 'Impresionar', type: PokemonElementType.ghost, power: 30, description: 'Impresiona tanto que puede hacer retroceder al objetivo.' },
      { name: 'Gruñido', type: PokemonElementType.normal, power: null, description: 'Dulce gruñido que reduce el Ataque del contrincante.' },
    ],
  },
  seedot: {
    flavorText: 'Se cuelga de las ramas con el extremo de su cabeza. A veces se cae cuando soplan vientos fuertes.',
    stats: { hp: 40, attack: 40, defense: 50, specialAttack: 30, specialDefense: 30, speed: 30 },
    moves: [
      { name: 'Desarrollo', type: PokemonElementType.normal, power: null, description: 'El cuerpo del usuario crece a marchas forzadas y aumenta el Ataque y el Ataque Especial.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
      { name: 'Fotosíntesis', type: PokemonElementType.grass, power: null, description: 'Restaura PS del usuario. La cantidad varía según el tiempo que haga.' },
      { name: 'Explosión', type: PokemonElementType.normal, power: 250, description: 'El atacante causa una grandísima explosión y hiere a todos a su alrededor. El usuario se debilita de inmediato.' },
    ],
  },
  nuzleaf: {
    flavorText: 'Cuando usa la hoja de su cabeza como flauta, asusta a la gente. Vive en lo más profundo de los bosques.',
    stats: { hp: 70, attack: 70, defense: 40, specialAttack: 60, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'Viento Cortante', type: PokemonElementType.normal, power: 80, description: 'Primero se prepara y en el segundo turno ataca al oponente con ráfagas de viento cortante. Alta probabilidad de ser crítico.' },
      { name: 'Paranormal', type: PokemonElementType.psychic, power: 80, description: 'Energía muy extraña que puede hacer retroceder al objetivo.' },
      { name: 'Desarrollo', type: PokemonElementType.normal, power: null, description: 'El cuerpo del usuario crece a marchas forzadas y aumenta el Ataque y el Ataque Especial.' },
      { name: 'Sorpresa', type: PokemonElementType.normal, power: 40, description: 'Ataca primero y, además, hace retroceder al objetivo. Solo sirve en el primer turno.' },
    ],
  },
  shiftry: {
    flavorText: 'Habita los bosques y se le tiene miedo. Es capaz de leer los pensamientos del rival y actuar en consecuencia.',
    stats: { hp: 90, attack: 100, defense: 60, specialAttack: 90, specialDefense: 60, speed: 80 },
    moves: [
      { name: 'Desarrollo', type: PokemonElementType.normal, power: null, description: 'El cuerpo del usuario crece a marchas forzadas y aumenta el Ataque y el Ataque Especial.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
      { name: 'Adaptación', type: PokemonElementType.normal, power: null, description: 'Usa el poder de la naturaleza para atacar. Su efecto varía según el entorno de combate.' },
    ],
  },
  taillow: {
    flavorText: 'Es un Pokémon valiente que no teme a los rivales fuertes. Vuela en busca de climas templados.',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
      { name: 'Foco Energía', type: PokemonElementType.normal, power: null, description: 'Concentra energía para aumentar las posibilidades de un golpe crítico.' },
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
    ],
  },
  swellow: {
    flavorText: 'Cuando se encuentra bien, pone firmes las plumas de la cola doble que tiene. Remonta el vuelo de forma muy elegante.',
    stats: { hp: 60, attack: 85, defense: 60, specialAttack: 75, specialDefense: 50, speed: 125 },
    moves: [
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Picotazo', type: PokemonElementType.flying, power: 35, description: 'Ensarta al objetivo con un cuerno o pico punzante.' },
      { name: 'Foco Energía', type: PokemonElementType.normal, power: null, description: 'Concentra energía para aumentar las posibilidades de un golpe crítico.' },
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
    ],
  },
  wingull: {
    flavorText: 'Sus largas alas aprovechan los vientos marinos para planear. Cuando descansa, las pliega.',
    stats: { hp: 40, attack: 30, defense: 30, specialAttack: 55, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Neblina', type: PokemonElementType.ice, power: null, description: 'Rodea de fina niebla al usuario y protege las características de su equipo durante cinco turnos.' },
      { name: 'Supersónico', type: PokemonElementType.normal, power: null, description: 'Raras ondas sónicas que confunden al objetivo.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
    ],
  },
  pelipper: {
    flavorText: 'Hunde su gran pico en el mar para sacar numerosas presas junto con mucha agua.',
    stats: { hp: 60, attack: 50, defense: 100, specialAttack: 95, specialDefense: 70, speed: 65 },
    moves: [
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Escupir', type: PokemonElementType.normal, power: null, description: 'Libera de una vez la energía acumulada con Reserva.' },
      { name: 'Tragar', type: PokemonElementType.normal, power: null, description: 'Absorbe la energía acumulada con Reserva y restaura PS.' },
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
    ],
  },
  ralts: {
    flavorText: 'Si sus cuernos perciben emociones positivas de personas o Pokémon, su cuerpo se calienta un poco.',
    stats: { hp: 28, attack: 25, defense: 25, specialAttack: 45, specialDefense: 35, speed: 40 },
    moves: [
      { name: 'Teletransporte', type: PokemonElementType.psychic, power: null, description: 'Permite huir al instante de combates contra Pokémon salvajes o viajar al último Centro Pokémon visitado.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
      { name: 'Premonición', type: PokemonElementType.psychic, power: 120, description: 'Concentra energía psíquica para golpear al objetivo dos turnos después.' },
    ],
  },
  kirlia: {
    flavorText: 'Al percibir la alegría de su Entrenador refuerza sus ataques psicoquinéticos. Cuando está contento, da vueltas y baila.',
    stats: { hp: 38, attack: 35, defense: 35, specialAttack: 65, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'Teletransporte', type: PokemonElementType.psychic, power: null, description: 'Permite huir al instante de combates contra Pokémon salvajes o viajar al último Centro Pokémon visitado.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
      { name: 'Premonición', type: PokemonElementType.psychic, power: 120, description: 'Concentra energía psíquica para golpear al objetivo dos turnos después.' },
    ],
  },
  gardevoir: {
    flavorText: 'Para proteger a su Entrenador, emplea todo su poder psíquico en crear un pequeño agujero negro.',
    stats: { hp: 68, attack: 65, defense: 65, specialAttack: 125, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'Teletransporte', type: PokemonElementType.psychic, power: null, description: 'Permite huir al instante de combates contra Pokémon salvajes o viajar al último Centro Pokémon visitado.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
      { name: 'Premonición', type: PokemonElementType.psychic, power: 120, description: 'Concentra energía psíquica para golpear al objetivo dos turnos después.' },
    ],
  },
  surskit: {
    flavorText: 'Parece que patina sobre el agua. Atrae a las presas con el suave aroma de su cabeza.',
    stats: { hp: 40, attack: 30, defense: 32, specialAttack: 50, specialDefense: 52, speed: 65 },
    moves: [
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Neblina', type: PokemonElementType.ice, power: null, description: 'Rodea de fina niebla al usuario y protege las características de su equipo durante cinco turnos.' },
      { name: 'Dulce Aroma', type: PokemonElementType.normal, power: null, description: 'Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión. En la hierba alta sirve para atraer a Pokémon salvajes.' },
    ],
  },
  masquerain: {
    flavorText: 'Sus antenas tienen dibujos de ojos, mientras que sus alas le permiten volar en cualquier dirección.',
    stats: { hp: 70, attack: 60, defense: 62, specialAttack: 100, specialDefense: 82, speed: 80 },
    moves: [
      { name: 'Viento Plata', type: PokemonElementType.bug, power: 60, description: 'Fuerte viento con polvo de escamas. Puede subir todas las características de quien lo usa.' },
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Paralizador', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que paraliza al objetivo.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
    ],
  },
  shroomish: {
    flavorText: 'Prefiere los sitios húmedos. De día está tranquilamente en el bosque, a la sombra. Expulsa polvo tóxico por la cabeza.',
    stats: { hp: 60, attack: 40, defense: 60, specialAttack: 40, specialDefense: 60, speed: 35 },
    moves: [
      { name: 'Espora', type: PokemonElementType.grass, power: null, description: 'Esparce esporas que inducen al sueño.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Paralizador', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que paraliza al objetivo.' },
      { name: 'Desarrollo', type: PokemonElementType.normal, power: null, description: 'El cuerpo del usuario crece a marchas forzadas y aumenta el Ataque y el Ataque Especial.' },
    ],
  },
  breloom: {
    flavorText: 'Sus cortos brazos se expanden cuando da puñetazos. Tiene una técnica pugilística muy depurada.',
    stats: { hp: 60, attack: 130, defense: 80, specialAttack: 60, specialDefense: 60, speed: 70 },
    moves: [
      { name: 'Gancho Alto', type: PokemonElementType.fighting, power: 85, description: 'Gancho ascendente de gran ímpetu.' },
      { name: 'Ultrapuño', type: PokemonElementType.fighting, power: 40, description: 'Puñetazo que se da rápido para golpear primero.' },
      { name: 'Telépata', type: PokemonElementType.normal, power: null, description: 'El usuario adivina los movimientos del objetivo para hacer que su siguiente ataque no falle.' },
      { name: 'Paralizador', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que paraliza al objetivo.' },
    ],
  },
  nincada: {
    flavorText: 'Como se ha pasado casi toda la vida viviendo bajo tierra, no ve bien. Las antenas que tiene le ayudan a orientarse.',
    stats: { hp: 31, attack: 45, defense: 90, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Telépata', type: PokemonElementType.normal, power: null, description: 'El usuario adivina los movimientos del objetivo para hacer que su siguiente ataque no falle.' },
      { name: 'Chupavidas', type: PokemonElementType.bug, power: 80, description: 'Restaura al usuario la mitad del daño causado al objetivo.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  slakoth: {
    flavorText: 'Slakoth se pasa todo el día holgazaneando y solo con verlo a uno le entra mucha pereza.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 35, specialDefense: 35, speed: 30 },
    moves: [
      { name: 'Relajo', type: PokemonElementType.normal, power: null, description: 'El usuario se relaja y restaura la mitad de sus PS máximos.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
    ],
  },
  vigoroth: {
    flavorText: 'Su corazón palpita a un ritmo frenético, haciendo que su sangre bulla, así que no puede estarse quieto ni un segundo.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
      { name: 'Cuchillada', type: PokemonElementType.normal, power: 70, description: 'Ataca con cuchillas o con pinzas. Suele dar un golpe crítico.' },
      { name: 'Foco Energía', type: PokemonElementType.normal, power: null, description: 'Concentra energía para aumentar las posibilidades de un golpe crítico.' },
    ],
  },
  slaking: {
    flavorText: 'El Pokémon más perezoso del mundo. Cambia de lugar para coger la comida al alcance de su mano.',
    stats: { hp: 150, attack: 160, defense: 100, specialAttack: 95, specialDefense: 65, speed: 100 },
    moves: [
      { name: 'Relajo', type: PokemonElementType.normal, power: null, description: 'El usuario se relaja y restaura la mitad de sus PS máximos.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
    ],
  },
  ninjask: {
    flavorText: 'Escuchar su zumbido de forma continuada provoca jaquecas. Casi no se le ve de lo rápido que es.',
    stats: { hp: 61, attack: 90, defense: 45, specialAttack: 50, specialDefense: 50, speed: 160 },
    moves: [
      { name: 'Telépata', type: PokemonElementType.normal, power: null, description: 'El usuario adivina los movimientos del objetivo para hacer que su siguiente ataque no falle.' },
      { name: 'Chupavidas', type: PokemonElementType.bug, power: 80, description: 'Restaura al usuario la mitad del daño causado al objetivo.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  shedinja: {
    flavorText: 'Es el caparazón de un bicho que cobró vida. Si alguien lo mira por la espalda, le robará el alma.',
    stats: { hp: 1, attack: 90, defense: 45, specialAttack: 30, specialDefense: 30, speed: 40 },
    moves: [
      { name: 'Rabia', type: PokemonElementType.ghost, power: null, description: 'Si el usuario se debilita al recibir un ataque, todos los PP de este último ataque serán eliminados.' },
      { name: 'Telépata', type: PokemonElementType.normal, power: null, description: 'El usuario adivina los movimientos del objetivo para hacer que su siguiente ataque no falle.' },
      { name: 'Chupavidas', type: PokemonElementType.bug, power: 80, description: 'Restaura al usuario la mitad del daño causado al objetivo.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
    ],
  },
  whismur: {
    flavorText: 'Normalmente murmulla, pero cuando siente que hay peligro se pone a chillar. Solo para cuando se le cierran las orejas.',
    stats: { hp: 64, attack: 51, defense: 23, specialAttack: 51, specialDefense: 23, speed: 28 },
    moves: [
      { name: 'Aullido', type: PokemonElementType.normal, power: null, description: 'Aullido que sube el ánimo y aumenta el Ataque.' },
      { name: 'Pisotón', type: PokemonElementType.normal, power: 65, description: 'Tremendo pisotón que puede hacer retroceder al objetivo.' },
      { name: 'Supersónico', type: PokemonElementType.normal, power: null, description: 'Raras ondas sónicas que confunden al objetivo.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
    ],
  },
  loudred: {
    flavorText: 'Aspira profundamente y luego, usando sus fuertes abdominales, suelta un potente vozarrón.',
    stats: { hp: 84, attack: 71, defense: 43, specialAttack: 71, specialDefense: 43, speed: 48 },
    moves: [
      { name: 'Aullido', type: PokemonElementType.normal, power: null, description: 'Aullido que sube el ánimo y aumenta el Ataque.' },
      { name: 'Pisotón', type: PokemonElementType.normal, power: 65, description: 'Tremendo pisotón que puede hacer retroceder al objetivo.' },
      { name: 'Supersónico', type: PokemonElementType.normal, power: null, description: 'Raras ondas sónicas que confunden al objetivo.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
    ],
  },
  exploud: {
    flavorText: 'Su aullido se puede oír a 10 km. Emite todo tipo de sonidos desde los tubos de su cuerpo.',
    stats: { hp: 104, attack: 91, defense: 63, specialAttack: 91, specialDefense: 73, speed: 68 },
    moves: [
      { name: 'Aullido', type: PokemonElementType.normal, power: null, description: 'Aullido que sube el ánimo y aumenta el Ataque.' },
      { name: 'Pisotón', type: PokemonElementType.normal, power: 65, description: 'Tremendo pisotón que puede hacer retroceder al objetivo.' },
      { name: 'Supersónico', type: PokemonElementType.normal, power: null, description: 'Raras ondas sónicas que confunden al objetivo.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
    ],
  },
  makuhita: {
    flavorText: 'Endurece su cuerpo golpeando grandes árboles sin perder jamás el ánimo.',
    stats: { hp: 72, attack: 60, defense: 30, specialAttack: 20, specialDefense: 30, speed: 25 },
    moves: [
      { name: 'Empujón', type: PokemonElementType.fighting, power: 15, description: 'Empujones directos que golpean de dos a cinco veces seguidas.' },
      { name: 'Llave Vital', type: PokemonElementType.fighting, power: 70, description: 'El usuario ataca el último, pero no falla.' },
      { name: 'Estímulo', type: PokemonElementType.normal, power: 70, description: 'Hace el doble de daño a objetivos paralizados, pero también cura la parálisis.' },
      { name: 'Tambor', type: PokemonElementType.normal, power: null, description: 'Reduce la mitad de los PS máximos para mejorar al máximo el Ataque.' },
    ],
  },
  hariyama: {
    flavorText: 'Para aumentar su fuerza, da un pisotón en el suelo. Puede lanzar un camión de 10 toneladas por los aires de un puñetazo.',
    stats: { hp: 144, attack: 120, defense: 60, specialAttack: 40, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Empujón', type: PokemonElementType.fighting, power: 15, description: 'Empujones directos que golpean de dos a cinco veces seguidas.' },
      { name: 'Llave Vital', type: PokemonElementType.fighting, power: 70, description: 'El usuario ataca el último, pero no falla.' },
      { name: 'Estímulo', type: PokemonElementType.normal, power: 70, description: 'Hace el doble de daño a objetivos paralizados, pero también cura la parálisis.' },
      { name: 'Tambor', type: PokemonElementType.normal, power: null, description: 'Reduce la mitad de los PS máximos para mejorar al máximo el Ataque.' },
    ],
  },
  azurill: {
    flavorText: 'Vive cerca del agua. En la tierra se mueve muy rápido botando sobre su gran cola.',
    stats: { hp: 50, attack: 20, defense: 40, specialAttack: 20, specialDefense: 40, speed: 20 },
    moves: [
      { name: 'Salpicadura', type: PokemonElementType.normal, power: null, description: 'No tiene ningún efecto. Solo salpica.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Atizar', type: PokemonElementType.normal, power: 80, description: 'Golpea con las extremidades.' },
      { name: 'Agitacola', type: PokemonElementType.normal, power: null, description: 'Agita la cola para bajar la Defensa del equipo rival.' },
    ],
  },
  nosepass: {
    flavorText: 'Siempre apunta al norte con su nariz imantada. Con ella reviste su cuerpo de objetos metálicos para protegerse.',
    stats: { hp: 30, attack: 45, defense: 135, specialAttack: 45, specialDefense: 90, speed: 30 },
    moves: [
      { name: 'Fijar Blanco', type: PokemonElementType.normal, power: null, description: 'Fija el blanco para que el siguiente ataque no falle.' },
      { name: 'Lanzarrocas', type: PokemonElementType.rock, power: 50, description: 'Tira una pequeña roca al objetivo.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
      { name: 'Electrocañón', type: PokemonElementType.electric, power: 120, description: 'Dispara una descarga eléctrica que causa daño y parálisis.' },
    ],
  },
  delcatty: {
    flavorText: 'No soporta los lugares sucios. Le encanta acicalarse el pelaje cuando está a gusto en un sitio.',
    stats: { hp: 70, attack: 65, defense: 65, specialAttack: 55, specialDefense: 55, speed: 90 },
    moves: [
      { name: 'Doble Bofetón', type: PokemonElementType.normal, power: 15, description: 'Abofetea de dos a cinco veces seguidas.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
      { name: 'Gruñido', type: PokemonElementType.normal, power: null, description: 'Dulce gruñido que reduce el Ataque del contrincante.' },
      { name: 'Atracción', type: PokemonElementType.normal, power: null, description: 'Si el objetivo es del sexo opuesto, se enamorará y bajará la posibilidad de que ataque.' },
    ],
  },
  skitty: {
    flavorText: 'No puede evitar ir tras las cosas que se mueven. Hasta corre en círculos persiguiéndose la cola.',
    stats: { hp: 50, attack: 45, defense: 45, specialAttack: 35, specialDefense: 35, speed: 50 },
    moves: [
      { name: 'Ayuda', type: PokemonElementType.normal, power: null, description: 'Usa un movimiento de un miembro del equipo elegido al azar.' },
      { name: 'Doble Bofetón', type: PokemonElementType.normal, power: 15, description: 'Abofetea de dos a cinco veces seguidas.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
      { name: 'Cascabel Cura', type: PokemonElementType.normal, power: null, description: 'Tañido que cura los problemas de estado de todos los Pokémon del equipo.' },
    ],
  },
  sableye: {
    flavorText: 'Se oculta en cavernas oscuras. De tanto comer gemas, sus ojos son piedras preciosas.',
    stats: { hp: 50, attack: 75, defense: 75, specialAttack: 65, specialDefense: 65, speed: 50 },
    moves: [
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Mal de Ojo', type: PokemonElementType.normal, power: null, description: 'Mal de ojo que impide al objetivo huir de la batalla.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Sorpresa', type: PokemonElementType.normal, power: 40, description: 'Ataca primero y, además, hace retroceder al objetivo. Solo sirve en el primer turno.' },
    ],
  },
  mawile: {
    flavorText: 'Engaña con su aspecto dócil; hace que el rival se confíe y le da un mordisco con sus enormes e implacables mandíbulas.',
    stats: { hp: 50, attack: 85, defense: 85, specialAttack: 55, specialDefense: 55, speed: 50 },
    moves: [
      { name: 'Agarre', type: PokemonElementType.normal, power: 55, description: 'Atrapa y atenaza al objetivo.' },
      { name: 'Escupir', type: PokemonElementType.normal, power: null, description: 'Libera de una vez la energía acumulada con Reserva.' },
      { name: 'Tragar', type: PokemonElementType.normal, power: null, description: 'Absorbe la energía acumulada con Reserva y restaura PS.' },
      { name: 'Reserva', type: PokemonElementType.normal, power: null, description: 'Acumula energía y sube la Defensa y la Defensa Especial. Puede utilizarse hasta tres veces.' },
    ],
  },
  aron: {
    flavorText: 'Suele vivir en lugares inaccesibles de las montañas, pero el hambre lo empuja a comer raíles y coches.',
    stats: { hp: 50, attack: 70, defense: 100, specialAttack: 40, specialDefense: 40, speed: 30 },
    moves: [
      { name: 'Eco Metálico', type: PokemonElementType.steel, power: null, description: 'Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
      { name: 'Garra Metal', type: PokemonElementType.steel, power: 50, description: 'Ataque con garras de acero que puede aumentar el Ataque del usuario.' },
      { name: 'Rugido', type: PokemonElementType.normal, power: null, description: 'Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.' },
    ],
  },
  lairon: {
    flavorText: 'Le encanta comer hierro. Lucha por su territorio embistiendo a sus rivales con su cuerpo de acero.',
    stats: { hp: 60, attack: 90, defense: 140, specialAttack: 50, specialDefense: 50, speed: 40 },
    moves: [
      { name: 'Eco Metálico', type: PokemonElementType.steel, power: null, description: 'Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
      { name: 'Garra Metal', type: PokemonElementType.steel, power: 50, description: 'Ataque con garras de acero que puede aumentar el Ataque del usuario.' },
      { name: 'Rugido', type: PokemonElementType.normal, power: null, description: 'Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.' },
    ],
  },
  aggron: {
    flavorText: 'Hacen de toda una montaña su territorio. Cuantas más cicatrices tienen, más curtidos en disputas. ¡Mucha atención!',
    stats: { hp: 70, attack: 110, defense: 180, specialAttack: 60, specialDefense: 60, speed: 50 },
    moves: [
      { name: 'Eco Metálico', type: PokemonElementType.steel, power: null, description: 'Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
      { name: 'Garra Metal', type: PokemonElementType.steel, power: 50, description: 'Ataque con garras de acero que puede aumentar el Ataque del usuario.' },
      { name: 'Rugido', type: PokemonElementType.normal, power: null, description: 'Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.' },
    ],
  },
  meditite: {
    flavorText: 'Se entrena en la profundidad de las montañas. Cuando aumenta su poder espiritual con meditación, levita.',
    stats: { hp: 30, attack: 40, defense: 55, specialAttack: 40, specialDefense: 55, speed: 60 },
    moves: [
      { name: 'Meditación', type: PokemonElementType.psychic, power: null, description: 'El usuario reposa y medita para potenciar el Ataque.' },
      { name: 'Telépata', type: PokemonElementType.normal, power: null, description: 'El usuario adivina los movimientos del objetivo para hacer que su siguiente ataque no falle.' },
      { name: 'Patada Salto Alta', type: PokemonElementType.fighting, power: 130, description: 'Salta muy alto y lanza una patada. Si falla, dañará al usuario.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
    ],
  },
  medicham: {
    flavorText: 'Evita los ataques moviéndose de forma elegante, como si bailara. Ataca dando un golpe devastador y moviéndose igual.',
    stats: { hp: 60, attack: 60, defense: 75, specialAttack: 60, specialDefense: 75, speed: 80 },
    moves: [
      { name: 'Meditación', type: PokemonElementType.psychic, power: null, description: 'El usuario reposa y medita para potenciar el Ataque.' },
      { name: 'Telépata', type: PokemonElementType.normal, power: null, description: 'El usuario adivina los movimientos del objetivo para hacer que su siguiente ataque no falle.' },
      { name: 'Patada Salto Alta', type: PokemonElementType.fighting, power: 130, description: 'Salta muy alto y lanza una patada. Si falla, dañará al usuario.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
    ],
  },
  electrike: {
    flavorText: 'Acumula electricidad estática en el pelaje para lanzar descargas. Cuando va a haber tormenta, suelta chispas por todo el cuerpo.',
    stats: { hp: 40, attack: 45, defense: 40, specialAttack: 65, specialDefense: 40, speed: 65 },
    moves: [
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Aullido', type: PokemonElementType.normal, power: null, description: 'Aullido que sube el ánimo y aumenta el Ataque.' },
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
    ],
  },
  manectric: {
    flavorText: 'No suele aparecer ante la gente. Dicen que suele colocar su nido donde caen los rayos.',
    stats: { hp: 70, attack: 75, defense: 60, specialAttack: 105, specialDefense: 60, speed: 105 },
    moves: [
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Aullido', type: PokemonElementType.normal, power: null, description: 'Aullido que sube el ánimo y aumenta el Ataque.' },
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
    ],
  },
  plusle: {
    flavorText: 'Anima a sus compañeros con pompones de chispas. Roba energía de los postes telefónicos.',
    stats: { hp: 60, attack: 50, defense: 40, specialAttack: 85, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Llanto Falso', type: PokemonElementType.dark, power: null, description: 'Lágrimas de cocodrilo que bajan mucho la Defensa Especial del objetivo.' },
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
    ],
  },
  minun: {
    flavorText: 'La electricidad de Minun y Plusle es buena para la circulación y para desentumecer músculos.',
    stats: { hp: 60, attack: 40, defense: 50, specialAttack: 75, specialDefense: 85, speed: 95 },
    moves: [
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
      { name: 'Relevo', type: PokemonElementType.normal, power: null, description: 'Cambia el puesto con un compañero y le pasa los cambios de características.' },
    ],
  },
  illumise: {
    flavorText: 'Con su dulce aroma guía a grupos de Volbeat para que tracen hasta 200 dibujos distintos en el cielo nocturno.',
    stats: { hp: 65, attack: 47, defense: 75, specialAttack: 73, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'Luz Lunar', type: PokemonElementType.normal, power: null, description: 'Restaura PS del usuario. La cantidad varía según el tiempo que haga.' },
      { name: 'Camelo', type: PokemonElementType.dark, power: null, description: 'Halaga al objetivo y lo confunde, pero también sube su Ataque Especial.' },
      { name: 'Deseo', type: PokemonElementType.normal, power: null, description: 'Restaura la mitad de los PS máximos en el siguiente turno.' },
      { name: 'Dulce Aroma', type: PokemonElementType.normal, power: null, description: 'Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión. En la hierba alta sirve para atraer a Pokémon salvajes.' },
    ],
  },
  volbeat: {
    flavorText: 'Se comunica con otros iluminando su cola por la noche. Le encanta el suave aroma de Illumise.',
    stats: { hp: 65, attack: 73, defense: 75, specialAttack: 47, specialDefense: 85, speed: 85 },
    moves: [
      { name: 'Luminicola', type: PokemonElementType.bug, power: null, description: 'Se concentra en una ráfaga de luz que sube muchísimo el Ataque Especial.' },
      { name: 'Luz Lunar', type: PokemonElementType.normal, power: null, description: 'Restaura PS del usuario. La cantidad varía según el tiempo que haga.' },
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
      { name: 'Rayo Confuso', type: PokemonElementType.ghost, power: null, description: 'Rayo siniestro que confunde al objetivo.' },
    ],
  },
  roselia: {
    flavorText: 'Ataca con sus manos, en las que tiene un tipo de veneno diferente en cada una. Cuanto más aroma, mejor salud tiene.',
    stats: { hp: 50, attack: 60, defense: 45, specialAttack: 100, specialDefense: 80, speed: 65 },
    moves: [
      { name: 'Silbato', type: PokemonElementType.grass, power: null, description: 'Agradable melodía que adormece al objetivo.' },
      { name: 'Danza Pétalo', type: PokemonElementType.grass, power: 120, description: 'Lanza pétalos de dos a tres turnos y acaba confundiendo al atacante.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Arraigo', type: PokemonElementType.grass, power: null, description: 'Echa raíces para recuperar PS en cada turno, pero impide el relevo.' },
    ],
  },
  gulpin: {
    flavorText: 'Sus sesos y corazón son diminutos; es casi todo estómago. Sus jugos gástricos disuelven lo que sea.',
    stats: { hp: 70, attack: 43, defense: 53, specialAttack: 43, specialDefense: 53, speed: 40 },
    moves: [
      { name: 'Residuos', type: PokemonElementType.poison, power: 65, description: 'Arroja residuos al objetivo. Puede llegar a envenenar.' },
      { name: 'Gas Venenoso', type: PokemonElementType.poison, power: null, description: 'Lanza una nube de gas tóxico a los rivales. Produce envenenamiento.' },
      { name: 'Escupir', type: PokemonElementType.normal, power: null, description: 'Libera de una vez la energía acumulada con Reserva.' },
      { name: 'Tragar', type: PokemonElementType.normal, power: null, description: 'Absorbe la energía acumulada con Reserva y restaura PS.' },
    ],
  },
  swalot: {
    flavorText: 'Se traga cualquier cosa de una pieza. Sus poros segregan fluidos tóxicos que dañan a sus enemigos.',
    stats: { hp: 100, attack: 73, defense: 83, specialAttack: 73, specialDefense: 83, speed: 55 },
    moves: [
      { name: 'Residuos', type: PokemonElementType.poison, power: 65, description: 'Arroja residuos al objetivo. Puede llegar a envenenar.' },
      { name: 'Gas Venenoso', type: PokemonElementType.poison, power: null, description: 'Lanza una nube de gas tóxico a los rivales. Produce envenenamiento.' },
      { name: 'Escupir', type: PokemonElementType.normal, power: null, description: 'Libera de una vez la energía acumulada con Reserva.' },
      { name: 'Tragar', type: PokemonElementType.normal, power: null, description: 'Absorbe la energía acumulada con Reserva y restaura PS.' },
    ],
  },
  carvanha: {
    flavorText: 'Atacan en grupo a los barcos y los hunden a base de bocados. Habitan en los ríos de la jungla.',
    stats: { hp: 45, attack: 90, defense: 20, specialAttack: 65, specialDefense: 20, speed: 65 },
    moves: [
      { name: 'Furia', type: PokemonElementType.normal, power: 20, description: 'Al usarse, aumenta el Ataque del usuario cada vez que es golpeado.' },
      { name: 'Foco Energía', type: PokemonElementType.normal, power: null, description: 'Concentra energía para aumentar las posibilidades de un golpe crítico.' },
      { name: 'Chirrido', type: PokemonElementType.normal, power: null, description: 'Alarido agudo que reduce mucho la Defensa del objetivo.' },
      { name: 'Mordisco', type: PokemonElementType.dark, power: 60, description: 'Un voraz bocado que puede hacer retroceder al objetivo.' },
    ],
  },
  sharpedo: {
    flavorText: 'Con sus colmillos puede atravesar el acero. Nada a 120 km/h. Le llaman el Terror de los Mares.',
    stats: { hp: 70, attack: 120, defense: 40, specialAttack: 95, specialDefense: 40, speed: 95 },
    moves: [
      { name: 'Cabezazo', type: PokemonElementType.normal, power: 130, description: 'Primer turno: se prepara y sube la Defensa del usuario. Segundo turno: da el cabezazo.' },
      { name: 'Cuchillada', type: PokemonElementType.normal, power: 70, description: 'Ataca con cuchillas o con pinzas. Suele dar un golpe crítico.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 20, description: 'Al usarse, aumenta el Ataque del usuario cada vez que es golpeado.' },
      { name: 'Foco Energía', type: PokemonElementType.normal, power: null, description: 'Concentra energía para aumentar las posibilidades de un golpe crítico.' },
    ],
  },
  wailmer: {
    flavorText: 'Le gusta botar como una pelota de playa. Cuanta más agua de mar traga, más alto puede llegar.',
    stats: { hp: 130, attack: 70, defense: 35, specialAttack: 70, specialDefense: 35, speed: 60 },
    moves: [
      { name: 'Salpicar', type: PokemonElementType.water, power: 150, description: 'Chorro de agua. Cuantos menos PS tenga el usuario, menos dañino será.' },
      { name: 'Salpicadura', type: PokemonElementType.normal, power: null, description: 'No tiene ningún efecto. Solo salpica.' },
      { name: 'Neblina', type: PokemonElementType.ice, power: null, description: 'Rodea de fina niebla al usuario y protege las características de su equipo durante cinco turnos.' },
      { name: 'Impresionar', type: PokemonElementType.ghost, power: 30, description: 'Impresiona tanto que puede hacer retroceder al objetivo.' },
    ],
  },
  wailord: {
    flavorText: 'Puede dejar fuera de combate a sus oponentes con el impacto de su enorme cuerpo al caer en el agua tras un salto.',
    stats: { hp: 170, attack: 90, defense: 45, specialAttack: 90, specialDefense: 45, speed: 60 },
    moves: [
      { name: 'Salpicar', type: PokemonElementType.water, power: 150, description: 'Chorro de agua. Cuantos menos PS tenga el usuario, menos dañino será.' },
      { name: 'Salpicadura', type: PokemonElementType.normal, power: null, description: 'No tiene ningún efecto. Solo salpica.' },
      { name: 'Neblina', type: PokemonElementType.ice, power: null, description: 'Rodea de fina niebla al usuario y protege las características de su equipo durante cinco turnos.' },
      { name: 'Impresionar', type: PokemonElementType.ghost, power: 30, description: 'Impresiona tanto que puede hacer retroceder al objetivo.' },
    ],
  },
  numel: {
    flavorText: 'En su joroba almacena magma ardiente que se enfría cuando llueve y lo ralentiza.',
    stats: { hp: 60, attack: 60, defense: 40, specialAttack: 65, specialDefense: 45, speed: 35 },
    moves: [
      { name: 'Magnitud', type: PokemonElementType.ground, power: null, description: 'Sacudida sísmica de intensidad variable que afecta a todos los Pokémon a su alrededor.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'El usuario olvida sus preocupaciones y aumenta mucho la Defensa Especial.' },
      { name: 'Foco Energía', type: PokemonElementType.normal, power: null, description: 'Concentra energía para aumentar las posibilidades de un golpe crítico.' },
    ],
  },
  camerupt: {
    flavorText: 'Los volcanes de su joroba entran en erupción cada 10 años o cuando Camerupt se enfada mucho.',
    stats: { hp: 70, attack: 100, defense: 70, specialAttack: 105, specialDefense: 75, speed: 40 },
    moves: [
      { name: 'Estallido', type: PokemonElementType.fire, power: 150, description: 'Furia explosiva. Cuanto menor sea el número de PS del usuario, menos daño hará el ataque.' },
      { name: 'Magnitud', type: PokemonElementType.ground, power: null, description: 'Sacudida sísmica de intensidad variable que afecta a todos los Pokémon a su alrededor.' },
      { name: 'Fisura', type: PokemonElementType.ground, power: null, description: 'Abre una grieta en el suelo y mete al objetivo en ella. Fulmina en un golpe.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
    ],
  },
  torkoal: {
    flavorText: 'Trabaja sin descanso en minas en desuso localizando y extrayendo carbón.',
    stats: { hp: 70, attack: 85, defense: 140, specialAttack: 85, specialDefense: 70, speed: 20 },
    moves: [
      { name: 'Polución', type: PokemonElementType.poison, power: 30, description: 'El objetivo es atacado con gases tóxicos que pueden llegar a envenenar.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Giro Fuego', type: PokemonElementType.fire, power: 35, description: 'Un aro de fuego que atrapa al objetivo de cuatro a cinco turnos.' },
    ],
  },
  spoink: {
    flavorText: 'Bota continuamente usando su cola como muelle. Salta para mantener el latido de su corazón.',
    stats: { hp: 60, attack: 25, defense: 35, specialAttack: 70, specialDefense: 80, speed: 60 },
    moves: [
      { name: 'Salpicadura', type: PokemonElementType.normal, power: null, description: 'No tiene ningún efecto. Solo salpica.' },
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Psicoonda', type: PokemonElementType.psychic, power: null, description: 'Ataque con una onda de energía de intensidad variable.' },
      { name: 'Bote', type: PokemonElementType.flying, power: 85, description: 'Primer turno: bota. Segundo turno: golpea. Puede paralizar.' },
    ],
  },
  grumpig: {
    flavorText: 'Las perlas negras aumentan sus poderes psíquicos. Controla las mentes de sus rivales con un extraño baile.',
    stats: { hp: 80, attack: 45, defense: 65, specialAttack: 90, specialDefense: 110, speed: 80 },
    moves: [
      { name: 'Salpicadura', type: PokemonElementType.normal, power: null, description: 'No tiene ningún efecto. Solo salpica.' },
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Psicoonda', type: PokemonElementType.psychic, power: null, description: 'Ataque con una onda de energía de intensidad variable.' },
      { name: 'Bote', type: PokemonElementType.flying, power: 85, description: 'Primer turno: bota. Segundo turno: golpea. Puede paralizar.' },
    ],
  },
  spinda: {
    flavorText: 'No hay dos Spinda que tengan idénticos pelajes. Su tambaleo al bailar confunde a los rivales.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 60, specialDefense: 60, speed: 60 },
    moves: [
      { name: 'Puño Mareo', type: PokemonElementType.normal, power: 70, description: 'Rítmicos puñetazos que pueden causar confusión.' },
      { name: 'Danza Caos', type: PokemonElementType.normal, power: null, description: 'Danza histérica que confunde a los Pokémon que están alrededor del usuario.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  trapinch: {
    flavorText: 'Habita desiertos áridos. Cava fosas profundas, en las que espera que caiga su presa.',
    stats: { hp: 45, attack: 100, defense: 45, specialAttack: 45, specialDefense: 45, speed: 10 },
    moves: [
      { name: 'Bucle Arena', type: PokemonElementType.ground, power: 35, description: 'Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
      { name: 'Mordisco', type: PokemonElementType.dark, power: 60, description: 'Un voraz bocado que puede hacer retroceder al objetivo.' },
    ],
  },
  vibrava: {
    flavorText: 'Al agitar a gran velocidad ambas alas, emite ondas ultrasónicas que provocan fuertes dolores de cabeza.',
    stats: { hp: 50, attack: 70, defense: 50, specialAttack: 50, specialDefense: 50, speed: 70 },
    moves: [
      { name: 'Dragoaliento', type: PokemonElementType.dragon, power: 60, description: 'Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo.' },
      { name: 'Bucle Arena', type: PokemonElementType.ground, power: 35, description: 'Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
    ],
  },
  flygon: {
    flavorText: 'Su medio es el desierto. Para esconderse, levanta arena con las patas. Tiene los ojos protegidos con mallas rojas.',
    stats: { hp: 80, attack: 100, defense: 80, specialAttack: 80, specialDefense: 80, speed: 100 },
    moves: [
      { name: 'Dragoaliento', type: PokemonElementType.dragon, power: 60, description: 'Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo.' },
      { name: 'Bucle Arena', type: PokemonElementType.ground, power: 35, description: 'Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
    ],
  },
  cacnea: {
    flavorText: 'Vive en regiones secas y con pocas lluvias. Una vez al año, le brota una flor amarilla.',
    stats: { hp: 50, attack: 85, defense: 40, specialAttack: 85, specialDefense: 40, speed: 35 },
    moves: [
      { name: 'Brazo Pincho', type: PokemonElementType.grass, power: 60, description: 'Pega con brazos de pinchos y puede hacer retroceder al objetivo.' },
      { name: 'Esporagodón', type: PokemonElementType.grass, power: null, description: 'Adhiere esporas a los rivales para reducir mucho su Velocidad.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Arraigo', type: PokemonElementType.grass, power: null, description: 'Echa raíces para recuperar PS en cada turno, pero impide el relevo.' },
    ],
  },
  cacturne: {
    flavorText: 'Es un Pokémon nocturno. Busca presas agotadas por el calor diurno del desierto.',
    stats: { hp: 70, attack: 115, defense: 60, specialAttack: 115, specialDefense: 60, speed: 55 },
    moves: [
      { name: 'Brazo Pincho', type: PokemonElementType.grass, power: 60, description: 'Pega con brazos de pinchos y puede hacer retroceder al objetivo.' },
      { name: 'Esporagodón', type: PokemonElementType.grass, power: null, description: 'Adhiere esporas a los rivales para reducir mucho su Velocidad.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Arraigo', type: PokemonElementType.grass, power: null, description: 'Echa raíces para recuperar PS en cada turno, pero impide el relevo.' },
    ],
  },
  swablu: {
    flavorText: 'Se desconoce el porqué, pero le encanta posarse sobre la cabeza de los humanos y fingir que es un gorro.',
    stats: { hp: 45, attack: 40, defense: 60, specialAttack: 40, specialDefense: 75, speed: 50 },
    moves: [
      { name: 'Espejo', type: PokemonElementType.flying, power: null, description: 'Contraataca con el mismo movimiento empleado por el objetivo.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
    ],
  },
  altaria: {
    flavorText: 'Vuela pausadamente por el cielo azul. Su hermoso trino cautiva a todo aquel que lo escucha.',
    stats: { hp: 75, attack: 70, defense: 90, specialAttack: 70, specialDefense: 105, speed: 80 },
    moves: [
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Alivio', type: PokemonElementType.normal, power: null, description: 'Descansa para curar parálisis, envenenamiento o quemaduras.' },
    ],
  },
  zangoose: {
    flavorText: 'Hace muchos años que se enfrenta a Seviper. Su arma más eficaz son sus zarpas afiladas.',
    stats: { hp: 73, attack: 115, defense: 60, specialAttack: 60, specialDefense: 60, speed: 90 },
    moves: [
      { name: 'Garra Brutal', type: PokemonElementType.normal, power: 75, description: 'Hace trizas al objetivo con garras afiladas y puede bajar su Defensa.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
      { name: 'Falso Tortazo', type: PokemonElementType.normal, power: 40, description: 'Ataque moderado que no debilita al objetivo y le deja al menos 1 PS.' },
    ],
  },
  seviper: {
    flavorText: 'Hace frente a Zangoose con su agilidad y su afilada cola, que está cargada con un veneno letal.',
    stats: { hp: 73, attack: 100, defense: 60, specialAttack: 100, specialDefense: 60, speed: 65 },
    moves: [
      { name: 'Deslumbrar', type: PokemonElementType.normal, power: null, description: 'Intimida y asusta al objetivo con la mirada para dejarlo paralizado.' },
      { name: 'Colmillo Veneno', type: PokemonElementType.poison, power: 50, description: 'Colmillos tóxicos que pueden envenenar gravemente al objetivo.' },
      { name: 'Cola Veneno', type: PokemonElementType.poison, power: 50, description: 'Puede envenenar y dar un golpe crítico.' },
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
    ],
  },
  lunatone: {
    flavorText: 'Se piensa que está muy influido por las fases lunares, ya que solo actúa en noches de luna llena.',
    stats: { hp: 90, attack: 55, defense: 65, specialAttack: 95, specialDefense: 85, speed: 70 },
    moves: [
      { name: 'Masa Cósmica', type: PokemonElementType.psychic, power: null, description: 'Sube la Defensa y la Defensa Especial propias con energía mística.' },
      { name: 'Psicoonda', type: PokemonElementType.psychic, power: null, description: 'Ataque con una onda de energía de intensidad variable.' },
      { name: 'Lanzarrocas', type: PokemonElementType.rock, power: 50, description: 'Tira una pequeña roca al objetivo.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
    ],
  },
  solrock: {
    flavorText: 'Usa el sol como fuente de energía, por lo que es más poderoso de día. Brilla al rotar.',
    stats: { hp: 90, attack: 95, defense: 85, specialAttack: 55, specialDefense: 65, speed: 70 },
    moves: [
      { name: 'Masa Cósmica', type: PokemonElementType.psychic, power: null, description: 'Sube la Defensa y la Defensa Especial propias con energía mística.' },
      { name: 'Psicoonda', type: PokemonElementType.psychic, power: null, description: 'Ataque con una onda de energía de intensidad variable.' },
      { name: 'Lanzarrocas', type: PokemonElementType.rock, power: 50, description: 'Tira una pequeña roca al objetivo.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  barboach: {
    flavorText: 'Recubre su cuerpo de una película viscosa que le permite escapar si alguien lo agarra.',
    stats: { hp: 50, attack: 48, defense: 43, specialAttack: 46, specialDefense: 41, speed: 60 },
    moves: [
      { name: 'Magnitud', type: PokemonElementType.ground, power: null, description: 'Sacudida sísmica de intensidad variable que afecta a todos los Pokémon a su alrededor.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Fisura', type: PokemonElementType.ground, power: null, description: 'Abre una grieta en el suelo y mete al objetivo en ella. Fulmina en un golpe.' },
    ],
  },
  whiscash: {
    flavorText: 'Habita en grandes pantanos. Si se acerca un enemigo, se alborota y causa temblores monumentales.',
    stats: { hp: 110, attack: 78, defense: 73, specialAttack: 76, specialDefense: 71, speed: 60 },
    moves: [
      { name: 'Magnitud', type: PokemonElementType.ground, power: null, description: 'Sacudida sísmica de intensidad variable que afecta a todos los Pokémon a su alrededor.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Fisura', type: PokemonElementType.ground, power: null, description: 'Abre una grieta en el suelo y mete al objetivo en ella. Fulmina en un golpe.' },
    ],
  },
  corphish: {
    flavorText: 'Por sucio o contaminado que esté el río, se adaptan rápido y se multiplican. Poseen una gran fuerza vital.',
    stats: { hp: 43, attack: 80, defense: 65, specialAttack: 50, specialDefense: 35, speed: 35 },
    moves: [
      { name: 'Martillazo', type: PokemonElementType.water, power: 100, description: 'Golpea con fuerza con una pinza enorme. Suele ser crítico.' },
      { name: 'Guillotina', type: PokemonElementType.normal, power: null, description: 'Ataque con pinzas que debilita al oponente de un golpe si acierta.' },
      { name: 'Agarre', type: PokemonElementType.normal, power: 55, description: 'Atrapa y atenaza al objetivo.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
    ],
  },
  crawdaunt: {
    flavorText: 'Este malandrín usa sus pinzas para atosigar y expulsar a los otros Pokémon que viven en su estanque.',
    stats: { hp: 63, attack: 120, defense: 85, specialAttack: 90, specialDefense: 55, speed: 55 },
    moves: [
      { name: 'Martillazo', type: PokemonElementType.water, power: 100, description: 'Golpea con fuerza con una pinza enorme. Suele ser crítico.' },
      { name: 'Guillotina', type: PokemonElementType.normal, power: null, description: 'Ataque con pinzas que debilita al oponente de un golpe si acierta.' },
      { name: 'Agarre', type: PokemonElementType.normal, power: 55, description: 'Atrapa y atenaza al objetivo.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
    ],
  },
  baltoy: {
    flavorText: 'Se mueve girando sobre su eje. También se le puede ver girando cabeza abajo.',
    stats: { hp: 40, attack: 40, defense: 55, specialAttack: 40, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'Masa Cósmica', type: PokemonElementType.psychic, power: null, description: 'Sube la Defensa y la Defensa Especial propias con energía mística.' },
      { name: 'Giro Rápido', type: PokemonElementType.normal, power: 50, description: 'Ataque giratorio que puede eliminar movimientos como Atadura, Constricción, Drenadoras y Púas.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
      { name: 'Explosión', type: PokemonElementType.normal, power: 250, description: 'El atacante causa una grandísima explosión y hiere a todos a su alrededor. El usuario se debilita de inmediato.' },
    ],
  },
  claydol: {
    flavorText: 'Este Pokémon es una vieja figurilla de barro que cobró vida mediante la exposición a extraños rayos de luz.',
    stats: { hp: 60, attack: 70, defense: 105, specialAttack: 70, specialDefense: 120, speed: 75 },
    moves: [
      { name: 'Teletransporte', type: PokemonElementType.psychic, power: null, description: 'Permite huir al instante de combates contra Pokémon salvajes o viajar al último Centro Pokémon visitado.' },
      { name: 'Masa Cósmica', type: PokemonElementType.psychic, power: null, description: 'Sube la Defensa y la Defensa Especial propias con energía mística.' },
      { name: 'Giro Rápido', type: PokemonElementType.normal, power: 50, description: 'Ataque giratorio que puede eliminar movimientos como Atadura, Constricción, Drenadoras y Púas.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  lileep: {
    flavorText: 'Se extinguió hace 100 millones de años. Sus tentáculos parecen pétalos para atraer a sus presas.',
    stats: { hp: 66, attack: 41, defense: 77, specialAttack: 61, specialDefense: 87, speed: 23 },
    moves: [
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Ácido', type: PokemonElementType.poison, power: 40, description: 'Rocía a los enemigos con un ácido corrosivo. Puede bajar la Defensa Especial.' },
      { name: 'Escupir', type: PokemonElementType.normal, power: null, description: 'Libera de una vez la energía acumulada con Reserva.' },
      { name: 'Arraigo', type: PokemonElementType.grass, power: null, description: 'Echa raíces para recuperar PS en cada turno, pero impide el relevo.' },
    ],
  },
  cradily: {
    flavorText: 'Vive en el fondo de los mares de aguas templadas. Emerge para cazar cuando baja la marea.',
    stats: { hp: 86, attack: 81, defense: 97, specialAttack: 81, specialDefense: 107, speed: 43 },
    moves: [
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Ácido', type: PokemonElementType.poison, power: 40, description: 'Rocía a los enemigos con un ácido corrosivo. Puede bajar la Defensa Especial.' },
      { name: 'Escupir', type: PokemonElementType.normal, power: null, description: 'Libera de una vez la energía acumulada con Reserva.' },
      { name: 'Arraigo', type: PokemonElementType.grass, power: null, description: 'Echa raíces para recuperar PS en cada turno, pero impide el relevo.' },
    ],
  },
  anorith: {
    flavorText: 'Es una especie de Pokémon predecesor. Estira las pinzas para cazar a sus presas, que se esconden en las rocas del mar.',
    stats: { hp: 45, attack: 95, defense: 50, specialAttack: 40, specialDefense: 50, speed: 75 },
    moves: [
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
      { name: 'Garra Metal', type: PokemonElementType.steel, power: 50, description: 'Ataque con garras de acero que puede aumentar el Ataque del usuario.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
    ],
  },
  armaldo: {
    flavorText: 'Ensarta a sus presas con sus gigantescas garras elásticas. Una fuerte coraza cubre su cuerpo.',
    stats: { hp: 75, attack: 125, defense: 100, specialAttack: 70, specialDefense: 80, speed: 45 },
    moves: [
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
      { name: 'Garra Metal', type: PokemonElementType.steel, power: 50, description: 'Ataque con garras de acero que puede aumentar el Ataque del usuario.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
    ],
  },
  feebas: {
    flavorText: 'Come de todo, por lo que puede vivir en aguas contaminadas. Nadie le presta atención.',
    stats: { hp: 20, attack: 15, defense: 20, specialAttack: 10, specialDefense: 55, speed: 80 },
    moves: [
      { name: 'Salpicadura', type: PokemonElementType.normal, power: null, description: 'No tiene ningún efecto. Solo salpica.' },
      { name: 'Azote', type: PokemonElementType.normal, power: null, description: 'Ataque frenético. Cuantos menos PS tenga el usuario, más daño producirá.' },
      { name: 'Placaje', type: PokemonElementType.normal, power: 40, description: 'Embiste con todo el cuerpo.' },
    ],
  },
  milotic: {
    flavorText: 'Milotic es impresionantemente bello. Quienes lo ven, temen perder las ganas de luchar contra él.',
    stats: { hp: 95, attack: 60, defense: 79, specialAttack: 100, specialDefense: 125, speed: 81 },
    moves: [
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Alivio', type: PokemonElementType.normal, power: null, description: 'Descansa para curar parálisis, envenenamiento o quemaduras.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
    ],
  },
  kecleon: {
    flavorText: 'Puede mudar el color de su cuerpo a voluntad, pero el dibujo en zigzag de su panza nunca desaparece.',
    stats: { hp: 60, attack: 90, defense: 70, specialAttack: 60, specialDefense: 120, speed: 40 },
    moves: [
      { name: 'Lengüetazo', type: PokemonElementType.ghost, power: 30, description: 'Una lengua ataca al objetivo. Puede causar parálisis.' },
      { name: 'Atadura', type: PokemonElementType.normal, power: 15, description: 'Ata y oprime de cuatro a cinco turnos.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  castform: {
    flavorText: 'Sus células son muy sensibles a los cambios de temperatura y humedad y se adapta sin problema.',
    stats: { hp: 70, attack: 70, defense: 70, specialAttack: 70, specialDefense: 70, speed: 70 },
    moves: [
      { name: 'Nieve Polvo', type: PokemonElementType.ice, power: 40, description: 'Lanza nieve que puede llegar a congelar.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Meteorobola', type: PokemonElementType.normal, power: 50, description: 'El tipo y fuerza del ataque varían según el tiempo que haga.' },
      { name: 'Pistola Agua', type: PokemonElementType.water, power: 40, description: 'Ataca disparando agua con gran potencia.' },
    ],
  },
  shuppet: {
    flavorText: 'Dicen que con su cuerno se alimenta de sentimientos de celos y envidia. Es muy activo a medianoche.',
    stats: { hp: 44, attack: 75, defense: 35, specialAttack: 63, specialDefense: 33, speed: 45 },
    moves: [
      { name: 'Rabia', type: PokemonElementType.ghost, power: null, description: 'Si el usuario se debilita al recibir un ataque, todos los PP de este último ataque serán eliminados.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
      { name: 'Tinieblas', type: PokemonElementType.ghost, power: null, description: 'Produce un espejismo ante el objetivo, que pierde tantos PS como nivel tenga el agresor.' },
      { name: 'Robo', type: PokemonElementType.dark, power: null, description: 'Roba el efecto de los movimientos de curación o de cambio de características que se usen.' },
    ],
  },
  banette: {
    flavorText: 'Este muñeco se convirtió en un Pokémon cuando lo tiraron a la basura. Busca a su antiguo dueño.',
    stats: { hp: 64, attack: 115, defense: 65, specialAttack: 83, specialDefense: 63, speed: 65 },
    moves: [
      { name: 'Rabia', type: PokemonElementType.ghost, power: null, description: 'Si el usuario se debilita al recibir un ataque, todos los PP de este último ataque serán eliminados.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
      { name: 'Tinieblas', type: PokemonElementType.ghost, power: null, description: 'Produce un espejismo ante el objetivo, que pierde tantos PS como nivel tenga el agresor.' },
      { name: 'Robo', type: PokemonElementType.dark, power: null, description: 'Roba el efecto de los movimientos de curación o de cambio de características que se usen.' },
    ],
  },
  duskull: {
    flavorText: 'Persigue a su presa sin descanso allá donde vaya. No obstante, abandona la caza al amanecer.',
    stats: { hp: 20, attack: 40, defense: 90, specialAttack: 30, specialDefense: 90, speed: 25 },
    moves: [
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Mal de Ojo', type: PokemonElementType.normal, power: null, description: 'Mal de ojo que impide al objetivo huir de la batalla.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
      { name: 'Anulación', type: PokemonElementType.normal, power: null, description: 'Desactiva el último movimiento del objetivo durante cuatro turnos.' },
    ],
  },
  dusclops: {
    flavorText: 'Si alguien mira los fuegos fatuos del interior de Dusclops, perderá su alma irremediablemente.',
    stats: { hp: 40, attack: 70, defense: 130, specialAttack: 60, specialDefense: 130, speed: 25 },
    moves: [
      { name: 'Puño Sombra', type: PokemonElementType.ghost, power: 60, description: 'Puñetazo ineludible procedente de las sombras.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Mal de Ojo', type: PokemonElementType.normal, power: null, description: 'Mal de ojo que impide al objetivo huir de la batalla.' },
      { name: 'Atadura', type: PokemonElementType.normal, power: 15, description: 'Ata y oprime de cuatro a cinco turnos.' },
    ],
  },
  tropius: {
    flavorText: 'Puede volar al agitar sus grandes hojas. Reparte entre los niños la codiciada fruta dulce que crece de su cuello.',
    stats: { hp: 99, attack: 68, defense: 83, specialAttack: 72, specialDefense: 87, speed: 51 },
    moves: [
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
      { name: 'Remolino', type: PokemonElementType.normal, power: null, description: 'Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.' },
      { name: 'Pisotón', type: PokemonElementType.normal, power: 65, description: 'Tremendo pisotón que puede hacer retroceder al objetivo.' },
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
    ],
  },
  chimecho: {
    flavorText: 'Se cuelga de ramas y aleros con la ventosa de su cabeza. Tiene siete tipos de gritos diferentes.',
    stats: { hp: 75, attack: 50, defense: 80, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
      { name: 'Psicoonda', type: PokemonElementType.psychic, power: null, description: 'Ataque con una onda de energía de intensidad variable.' },
      { name: 'Cascabel Cura', type: PokemonElementType.normal, power: null, description: 'Tañido que cura los problemas de estado de todos los Pokémon del equipo.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
    ],
  },
  absol: {
    flavorText: 'Presiente desastres inminentes y se aparece a la gente para advertir del peligro.',
    stats: { hp: 65, attack: 130, defense: 60, specialAttack: 75, specialDefense: 60, speed: 75 },
    moves: [
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
      { name: 'Viento Cortante', type: PokemonElementType.normal, power: 80, description: 'Primero se prepara y en el segundo turno ataca al oponente con ráfagas de viento cortante. Alta probabilidad de ser crítico.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
      { name: 'Premonición', type: PokemonElementType.psychic, power: 120, description: 'Concentra energía psíquica para golpear al objetivo dos turnos después.' },
    ],
  },
  wynaut: {
    flavorText: 'Suelen ir en grupo y a la hora de dormir se resguardan en una cueva.',
    stats: { hp: 95, attack: 23, defense: 48, specialAttack: 23, specialDefense: 48, speed: 23 },
    moves: [
      { name: 'Salpicadura', type: PokemonElementType.normal, power: null, description: 'No tiene ningún efecto. Solo salpica.' },
      { name: 'Manto Espejo', type: PokemonElementType.psychic, power: null, description: 'Responde a un ataque especial ocasionando el doble del daño recibido.' },
      { name: 'Mismo Destino', type: PokemonElementType.ghost, power: null, description: 'Si el usuario se debilita por un ataque rival antes de usar otro movimiento, el Pokémon rival se debilitará también.' },
      { name: 'Otra Vez', type: PokemonElementType.normal, power: null, description: 'El objetivo repite su último movimiento durante tres turnos.' },
    ],
  },
  snorunt: {
    flavorText: 'Se dice que se reúnen en grupos bajo hojas gigantescas y viven allí en total armonía.',
    stats: { hp: 50, attack: 50, defense: 50, specialAttack: 50, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Nieve Polvo', type: PokemonElementType.ice, power: 40, description: 'Lanza nieve que puede llegar a congelar.' },
      { name: 'Granizo', type: PokemonElementType.ice, power: null, description: 'Tormenta de granizo que dura cinco turnos. Hiere a todos, excepto a los de tipo Hielo.' },
      { name: 'Mordisco', type: PokemonElementType.dark, power: 60, description: 'Un voraz bocado que puede hacer retroceder al objetivo.' },
      { name: 'Malicioso', type: PokemonElementType.normal, power: null, description: 'Intimida a los rivales para bajar su Defensa.' },
    ],
  },
  glalie: {
    flavorText: 'Se protege con una armadura de hielo creada por congelación de la humedad del aire.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: 'Frío Polar', type: PokemonElementType.ice, power: null, description: 'Ataque de frío polar que debilita al objetivo si le alcanza.' },
      { name: 'Nieve Polvo', type: PokemonElementType.ice, power: 40, description: 'Lanza nieve que puede llegar a congelar.' },
      { name: 'Granizo', type: PokemonElementType.ice, power: null, description: 'Tormenta de granizo que dura cinco turnos. Hiere a todos, excepto a los de tipo Hielo.' },
      { name: 'Mordisco', type: PokemonElementType.dark, power: 60, description: 'Un voraz bocado que puede hacer retroceder al objetivo.' },
    ],
  },
  spheal: {
    flavorText: 'Como no saben nadar muy bien, se mueven rápidamente rodando. Cuando están alegres, dan palmadas con las aletas.',
    stats: { hp: 70, attack: 40, defense: 50, specialAttack: 55, specialDefense: 50, speed: 25 },
    moves: [
      { name: 'Bola Hielo', type: PokemonElementType.ice, power: 30, description: 'El atacante rueda contra el objetivo durante cinco turnos, cada vez con mayor fuerza.' },
      { name: 'Frío Polar', type: PokemonElementType.ice, power: null, description: 'Ataque de frío polar que debilita al objetivo si le alcanza.' },
      { name: 'Rayo Aurora', type: PokemonElementType.ice, power: 65, description: 'Rayo multicolor que puede reducir el Ataque.' },
      { name: 'Nieve Polvo', type: PokemonElementType.ice, power: 40, description: 'Lanza nieve que puede llegar a congelar.' },
    ],
  },
  sealeo: {
    flavorText: 'Su nariz es muy sensible. Cuando ve algo por primera vez, lo toca con ella para recordarlo después.',
    stats: { hp: 90, attack: 60, defense: 70, specialAttack: 75, specialDefense: 70, speed: 45 },
    moves: [
      { name: 'Bola Hielo', type: PokemonElementType.ice, power: 30, description: 'El atacante rueda contra el objetivo durante cinco turnos, cada vez con mayor fuerza.' },
      { name: 'Frío Polar', type: PokemonElementType.ice, power: null, description: 'Ataque de frío polar que debilita al objetivo si le alcanza.' },
      { name: 'Rayo Aurora', type: PokemonElementType.ice, power: 65, description: 'Rayo multicolor que puede reducir el Ataque.' },
      { name: 'Nieve Polvo', type: PokemonElementType.ice, power: 40, description: 'Lanza nieve que puede llegar a congelar.' },
    ],
  },
  walrein: {
    flavorText: 'Rompe el hielo con sus colmillos. Su gruesa capa de grasa le protege del frío y de los enemigos.',
    stats: { hp: 110, attack: 80, defense: 90, specialAttack: 95, specialDefense: 90, speed: 65 },
    moves: [
      { name: 'Bola Hielo', type: PokemonElementType.ice, power: 30, description: 'El atacante rueda contra el objetivo durante cinco turnos, cada vez con mayor fuerza.' },
      { name: 'Frío Polar', type: PokemonElementType.ice, power: null, description: 'Ataque de frío polar que debilita al objetivo si le alcanza.' },
      { name: 'Rayo Aurora', type: PokemonElementType.ice, power: 65, description: 'Rayo multicolor que puede reducir el Ataque.' },
      { name: 'Nieve Polvo', type: PokemonElementType.ice, power: 40, description: 'Lanza nieve que puede llegar a congelar.' },
    ],
  },
  clamperl: {
    flavorText: 'Produce durante su vida una sola perla que aumenta los poderes psíquicos al evolucionar.',
    stats: { hp: 35, attack: 64, defense: 85, specialAttack: 74, specialDefense: 55, speed: 32 },
    moves: [
      { name: 'Tenaza', type: PokemonElementType.water, power: 35, description: 'Atrapa y atenaza con fuerza durante cuatro o cinco turnos.' },
      { name: 'Pistola Agua', type: PokemonElementType.water, power: 40, description: 'Ataca disparando agua con gran potencia.' },
      { name: 'Torbellino', type: PokemonElementType.water, power: 35, description: 'Una tromba de agua atrapa al objetivo durante cuatro o cinco turnos.' },
      { name: 'Defensa Férrea', type: PokemonElementType.steel, power: null, description: 'Fortalece el cuerpo como si fuera de hierro y sube mucho la Defensa.' },
    ],
  },
  huntail: {
    flavorText: 'Vive en los abismos marinos, donde no se filtra la luz. Tiene una cola en forma de pez, que enciende para atraer a su presa.',
    stats: { hp: 55, attack: 104, defense: 105, specialAttack: 94, specialDefense: 75, speed: 52 },
    moves: [
      { name: 'Torbellino', type: PokemonElementType.water, power: 35, description: 'Una tromba de agua atrapa al objetivo durante cuatro o cinco turnos.' },
      { name: 'Hidrobomba', type: PokemonElementType.water, power: 110, description: 'Lanza una gran masa de agua a presión para atacar.' },
      { name: 'Relevo', type: PokemonElementType.normal, power: null, description: 'Cambia el puesto con un compañero y le pasa los cambios de características.' },
      { name: 'Chirrido', type: PokemonElementType.normal, power: null, description: 'Alarido agudo que reduce mucho la Defensa del objetivo.' },
    ],
  },
  gorebyss: {
    flavorText: 'Vive en el fondo del mar. En primavera, su cuerpo rosado adquiere colores más vivos.',
    stats: { hp: 55, attack: 84, defense: 105, specialAttack: 114, specialDefense: 75, speed: 52 },
    moves: [
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'El usuario olvida sus preocupaciones y aumenta mucho la Defensa Especial.' },
      { name: 'Torbellino', type: PokemonElementType.water, power: 35, description: 'Una tromba de agua atrapa al objetivo durante cuatro o cinco turnos.' },
      { name: 'Hidrobomba', type: PokemonElementType.water, power: 110, description: 'Lanza una gran masa de agua a presión para atacar.' },
    ],
  },
  relicanth: {
    flavorText: 'No ha sufrido ningún cambio desde hace 100 millones de años. Fue descubierto durante una expedición marina.',
    stats: { hp: 100, attack: 90, defense: 130, specialAttack: 45, specialDefense: 65, speed: 55 },
    moves: [
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
      { name: 'Pistola Agua', type: PokemonElementType.water, power: 40, description: 'Ataca disparando agua con gran potencia.' },
    ],
  },
  luvdisc: {
    flavorText: 'Vive en mares cálidos. Se dice que, si una pareja lo encuentra, será bendecida con amor eterno.',
    stats: { hp: 43, attack: 30, defense: 55, specialAttack: 40, specialDefense: 65, speed: 97 },
    moves: [
      { name: 'Beso Dulce', type: PokemonElementType.normal, power: null, description: 'Da un beso con tal dulzura que causa confusión.' },
      { name: 'Azote', type: PokemonElementType.normal, power: null, description: 'Ataque frenético. Cuantos menos PS tenga el usuario, más daño producirá.' },
      { name: 'Pistola Agua', type: PokemonElementType.water, power: 40, description: 'Ataca disparando agua con gran potencia.' },
      { name: 'Encanto', type: PokemonElementType.normal, power: null, description: 'Engatusa al objetivo y reduce bastante su Ataque.' },
    ],
  },
  bagon: {
    flavorText: 'Su desarrollado cuello y su cabeza dura como el acero le permiten reducir a añicos rocas enormes.',
    stats: { hp: 45, attack: 75, defense: 60, specialAttack: 40, specialDefense: 30, speed: 50 },
    moves: [
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Dragoaliento', type: PokemonElementType.dragon, power: 60, description: 'Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo.' },
      { name: 'Garra Dragón', type: PokemonElementType.dragon, power: 80, description: 'Araña al objetivo con garras afiladas.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 20, description: 'Al usarse, aumenta el Ataque del usuario cada vez que es golpeado.' },
    ],
  },
  beldum: {
    flavorText: 'Los pulsos magnéticos de su cuerpo repelen la gravedad, lo que le permite flotar en el aire.',
    stats: { hp: 40, attack: 55, defense: 80, specialAttack: 35, specialDefense: 60, speed: 30 },
    moves: [
      { name: 'Derribo', type: PokemonElementType.normal, power: 90, description: 'Carga desmedida que también hiere al agresor.' },
    ],
  },
  shelgon: {
    flavorText: 'Las células han empezado a cambiar dentro de su dura concha, que se separa cuando evoluciona.',
    stats: { hp: 65, attack: 95, defense: 100, specialAttack: 60, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Dragoaliento', type: PokemonElementType.dragon, power: 60, description: 'Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo.' },
      { name: 'Garra Dragón', type: PokemonElementType.dragon, power: 80, description: 'Araña al objetivo con garras afiladas.' },
      { name: 'Furia', type: PokemonElementType.normal, power: 20, description: 'Al usarse, aumenta el Ataque del usuario cada vez que es golpeado.' },
    ],
  },
  salamence: {
    flavorText: 'Si se enfada, no hay forma de calmarlo; lo destruye todo lanzando arañazos y llamas.',
    stats: { hp: 95, attack: 135, defense: 80, specialAttack: 110, specialDefense: 80, speed: 100 },
    moves: [
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Dragoaliento', type: PokemonElementType.dragon, power: 60, description: 'Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo.' },
      { name: 'Garra Dragón', type: PokemonElementType.dragon, power: 80, description: 'Araña al objetivo con garras afiladas.' },
      { name: 'Vuelo', type: PokemonElementType.flying, power: 90, description: 'Primer turno: vuela. Segundo turno: ataca. Fuera de combate, permite ir a sitios ya conocidos.' },
    ],
  },
  metang: {
    flavorText: 'Lo forman dos Beldum unidos. Puede chocarse con un avión sin que su cuerpo de acero sufra ni un rasguño.',
    stats: { hp: 60, attack: 75, defense: 100, specialAttack: 55, specialDefense: 80, speed: 50 },
    moves: [
      { name: 'Puño Meteoro', type: PokemonElementType.steel, power: 90, description: 'Puñetazo que impacta como un meteorito y puede subir el Ataque del agresor.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
      { name: 'Garra Metal', type: PokemonElementType.steel, power: 50, description: 'Ataque con garras de acero que puede aumentar el Ataque del usuario.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
    ],
  },
  metagross: {
    flavorText: 'Gracias a sus cuatro cerebros, es más inteligente que un superordenador y analiza con precisión al enemigo.',
    stats: { hp: 80, attack: 135, defense: 130, specialAttack: 95, specialDefense: 90, speed: 70 },
    moves: [
      { name: 'Puño Meteoro', type: PokemonElementType.steel, power: 90, description: 'Puñetazo que impacta como un meteorito y puede subir el Ataque del agresor.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
      { name: 'Garra Metal', type: PokemonElementType.steel, power: 50, description: 'Ataque con garras de acero que puede aumentar el Ataque del usuario.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
    ],
  },
  regirock: {
    flavorText: 'Su cuerpo está hecho de roca. Si se astilla durante el combate, emplea piedras para repararlo.',
    stats: { hp: 80, attack: 100, defense: 200, specialAttack: 50, specialDefense: 100, speed: 50 },
    moves: [
      { name: 'Fijar Blanco', type: PokemonElementType.normal, power: null, description: 'Fija el blanco para que el siguiente ataque no falle.' },
      { name: 'Lanzarrocas', type: PokemonElementType.rock, power: 50, description: 'Tira una pequeña roca al objetivo.' },
      { name: 'Electrocañón', type: PokemonElementType.electric, power: 120, description: 'Dispara una descarga eléctrica que causa daño y parálisis.' },
      { name: 'Explosión', type: PokemonElementType.normal, power: 250, description: 'El atacante causa una grandísima explosión y hiere a todos a su alrededor. El usuario se debilita de inmediato.' },
    ],
  },
  regice: {
    flavorText: 'Dicen que ha yacido durmiendo en un glaciar durante milenios. Ni el magma puede derretir su cuerpo.',
    stats: { hp: 80, attack: 50, defense: 100, specialAttack: 100, specialDefense: 200, speed: 50 },
    moves: [
      { name: 'Fijar Blanco', type: PokemonElementType.normal, power: null, description: 'Fija el blanco para que el siguiente ataque no falle.' },
      { name: 'Electrocañón', type: PokemonElementType.electric, power: 120, description: 'Dispara una descarga eléctrica que causa daño y parálisis.' },
      { name: 'Explosión', type: PokemonElementType.normal, power: 250, description: 'El atacante causa una grandísima explosión y hiere a todos a su alrededor. El usuario se debilita de inmediato.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'El usuario olvida sus preocupaciones y aumenta mucho la Defensa Especial.' },
    ],
  },
  registeel: {
    flavorText: 'Su cuerpo ha estado sometido a la presión subterránea durante miles de años y no puede arañarse.',
    stats: { hp: 80, attack: 75, defense: 150, specialAttack: 75, specialDefense: 150, speed: 50 },
    moves: [
      { name: 'Fijar Blanco', type: PokemonElementType.normal, power: null, description: 'Fija el blanco para que el siguiente ataque no falle.' },
      { name: 'Electrocañón', type: PokemonElementType.electric, power: 120, description: 'Dispara una descarga eléctrica que causa daño y parálisis.' },
      { name: 'Garra Metal', type: PokemonElementType.steel, power: 50, description: 'Ataque con garras de acero que puede aumentar el Ataque del usuario.' },
      { name: 'Explosión', type: PokemonElementType.normal, power: 250, description: 'El atacante causa una grandísima explosión y hiere a todos a su alrededor. El usuario se debilita de inmediato.' },
    ],
  },
  latias: {
    flavorText: 'Se comunica por telepatía. Su plumaje refleja la luz, lo que le permite hacerse invisible.',
    stats: { hp: 80, attack: 80, defense: 90, specialAttack: 110, specialDefense: 130, speed: 110 },
    moves: [
      { name: 'Bola Neblina', type: PokemonElementType.psychic, power: 95, description: 'Banco de niebla que puede bajar el Ataque Especial del objetivo.' },
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Psicoonda', type: PokemonElementType.psychic, power: null, description: 'Ataque con una onda de energía de intensidad variable.' },
      { name: 'Alivio', type: PokemonElementType.normal, power: null, description: 'Descansa para curar parálisis, envenenamiento o quemaduras.' },
    ],
  },
  kyogre: {
    flavorText: 'Pokémon legendario que aumentó los mares con diluvios y maremotos. Fue un enemigo acérrimo de Groudon.',
    stats: { hp: 100, attack: 100, defense: 90, specialAttack: 150, specialDefense: 140, speed: 90 },
    moves: [
      { name: 'Salpicar', type: PokemonElementType.water, power: 150, description: 'Chorro de agua. Cuantos menos PS tenga el usuario, menos dañino será.' },
      { name: 'Frío Polar', type: PokemonElementType.ice, power: null, description: 'Ataque de frío polar que debilita al objetivo si le alcanza.' },
      { name: 'Poder Pasado', type: PokemonElementType.rock, power: 60, description: 'Ataque prehistórico que puede subir todas las características.' },
      { name: 'Hidrobomba', type: PokemonElementType.water, power: 110, description: 'Lanza una gran masa de agua a presión para atacar.' },
    ],
  },
  latios: {
    flavorText: 'Es un Pokémon muy inteligente. Puede adelantar a aviones a reacción plegando las alas.',
    stats: { hp: 80, attack: 90, defense: 80, specialAttack: 130, specialDefense: 110, speed: 110 },
    moves: [
      { name: 'Resplandor', type: PokemonElementType.psychic, power: 95, description: 'Fogonazo de luz que puede bajar la Defensa Especial del objetivo.' },
      { name: 'Psicoonda', type: PokemonElementType.psychic, power: null, description: 'Ataque con una onda de energía de intensidad variable.' },
      { name: 'Alivio', type: PokemonElementType.normal, power: null, description: 'Descansa para curar parálisis, envenenamiento o quemaduras.' },
      { name: 'Legado', type: PokemonElementType.dark, power: null, description: 'El usuario se debilita, pero baja mucho tanto el Ataque como el Ataque Especial del objetivo.' },
    ],
  },
  groudon: {
    flavorText: 'Dicen que aumentó la superficie terrestre evaporando el agua. Fue un enemigo acérrimo de Kyogre.',
    stats: { hp: 100, attack: 150, defense: 140, specialAttack: 100, specialDefense: 90, speed: 90 },
    moves: [
      { name: 'Estallido', type: PokemonElementType.fire, power: 150, description: 'Furia explosiva. Cuanto menor sea el número de PS del usuario, menos daño hará el ataque.' },
      { name: 'Fisura', type: PokemonElementType.ground, power: null, description: 'Abre una grieta en el suelo y mete al objetivo en ella. Fulmina en un golpe.' },
      { name: 'Cuchillada', type: PokemonElementType.normal, power: 70, description: 'Ataca con cuchillas o con pinzas. Suele dar un golpe crítico.' },
      { name: 'Corpulencia', type: PokemonElementType.fighting, power: null, description: 'Robustece el cuerpo para subir el Ataque y la Defensa.' },
    ],
  },
  rayquaza: {
    flavorText: 'Vive en la capa de ozono sobre las nubes y no puede ser visto desde el suelo.',
    stats: { hp: 105, attack: 150, defense: 90, specialAttack: 150, specialDefense: 90, speed: 95 },
    moves: [
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Danza Dragón', type: PokemonElementType.dragon, power: null, description: 'Danza mística que sube el Ataque y la Velocidad.' },
      { name: 'Ciclón', type: PokemonElementType.dragon, power: 40, description: 'Crea un violento tornado para hacer trizas al enemigo. Puede hacerlo retroceder.' },
      { name: 'Garra Dragón', type: PokemonElementType.dragon, power: 80, description: 'Araña al objetivo con garras afiladas.' },
    ],
  },
  jirachi: {
    flavorText: 'Desde antaño se dice que concederá los deseos escritos en las notas de su cabeza cuando se despierte.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Deseo Oculto', type: PokemonElementType.steel, power: 140, description: 'Concentra un haz de luz y ataca dos turnos después.' },
      { name: 'Masa Cósmica', type: PokemonElementType.psychic, power: null, description: 'Sube la Defensa y la Defensa Especial propias con energía mística.' },
      { name: 'Alivio', type: PokemonElementType.normal, power: null, description: 'Descansa para curar parálisis, envenenamiento o quemaduras.' },
      { name: 'Deseo', type: PokemonElementType.normal, power: null, description: 'Restaura la mitad de los PS máximos en el siguiente turno.' },
    ],
  },
  deoxys: {
    flavorText: 'Surgió a raíz de la mutación de ADN de un virus alienígena que cayó a la Tierra en un meteorito.',
    stats: { hp: 50, attack: 150, defense: 50, specialAttack: 150, specialDefense: 50, speed: 150 },
    moves: [
      { name: 'Psicoataque', type: PokemonElementType.psychic, power: 140, description: 'Ataque en toda regla que baja mucho el Ataque Especial de quien lo usa.' },
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
      { name: 'Teletransporte', type: PokemonElementType.psychic, power: null, description: 'Permite huir al instante de combates contra Pokémon salvajes o viajar al último Centro Pokémon visitado.' },
      { name: 'Masa Cósmica', type: PokemonElementType.psychic, power: null, description: 'Sube la Defensa y la Defensa Especial propias con energía mística.' },
    ],
  },
  deoxys_speed: {
    flavorText: 'Surgió a raíz de la mutación de ADN de un virus alienígena que cayó a la Tierra en un meteorito.',
    stats: { hp: 50, attack: 95, defense: 90, specialAttack: 95, specialDefense: 90, speed: 180 },
    moves: [
      { name: 'Psicoataque', type: PokemonElementType.psychic, power: 140, description: 'Ataque en toda regla que baja mucho el Ataque Especial de quien lo usa.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
    ],
  },
  deoxys_attack: {
    flavorText: 'Surgió a raíz de la mutación de ADN de un virus alienígena que cayó a la Tierra en un meteorito.',
    stats: { hp: 50, attack: 180, defense: 20, specialAttack: 180, specialDefense: 20, speed: 150 },
    moves: [
      { name: 'Psicoataque', type: PokemonElementType.psychic, power: 140, description: 'Ataque en toda regla que baja mucho el Ataque Especial de quien lo usa.' },
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
      { name: 'Teletransporte', type: PokemonElementType.psychic, power: null, description: 'Permite huir al instante de combates contra Pokémon salvajes o viajar al último Centro Pokémon visitado.' },
      { name: 'Masa Cósmica', type: PokemonElementType.psychic, power: null, description: 'Sube la Defensa y la Defensa Especial propias con energía mística.' },
    ],
  },
  deoxys_defense: {
    flavorText: 'Surgió a raíz de la mutación de ADN de un virus alienígena que cayó a la Tierra en un meteorito.',
    stats: { hp: 50, attack: 70, defense: 160, specialAttack: 70, specialDefense: 160, speed: 90 },
    moves: [
      { name: 'Psicoataque', type: PokemonElementType.psychic, power: 140, description: 'Ataque en toda regla que baja mucho el Ataque Especial de quien lo usa.' },
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
      { name: 'Teletransporte', type: PokemonElementType.psychic, power: null, description: 'Permite huir al instante de combates contra Pokémon salvajes o viajar al último Centro Pokémon visitado.' },
      { name: 'Manto Espejo', type: PokemonElementType.psychic, power: null, description: 'Responde a un ataque especial ocasionando el doble del daño recibido.' },
    ],
  },
  turtwig: {
    flavorText: 'Realiza la fotosíntesis al bañarle los rayos de sol. Su concha está formada por tierra endurecida.',
    stats: { hp: 55, attack: 68, defense: 64, specialAttack: 45, specialDefense: 55, speed: 31 },
    moves: [
      { name: 'Refugio', type: PokemonElementType.water, power: null, description: 'El usuario se protege en su coraza y sube la Defensa.' },
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
      { name: 'Absorber', type: PokemonElementType.grass, power: 20, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Megaagotar', type: PokemonElementType.grass, power: 40, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
    ],
  },
  grotle: {
    flavorText: 'Vive en los bosques cerca del agua. Por el día, sale a que les dé el sol a las plantas de su espalda.',
    stats: { hp: 75, attack: 89, defense: 85, specialAttack: 55, specialDefense: 65, speed: 36 },
    moves: [
      { name: 'Refugio', type: PokemonElementType.water, power: null, description: 'El usuario se protege en su coraza y sube la Defensa.' },
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
      { name: 'Absorber', type: PokemonElementType.grass, power: 20, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Megaagotar', type: PokemonElementType.grass, power: 40, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
    ],
  },
  torterra: {
    flavorText: 'Las gentes de antaño creían que el planeta se sustentaba en la espalda de un gran Torterra.',
    stats: { hp: 95, attack: 109, defense: 105, specialAttack: 75, specialDefense: 85, speed: 56 },
    moves: [
      { name: 'Mazazo', type: PokemonElementType.grass, power: 120, description: 'Arremete contra el objetivo con su robusto cuerpo. El agresor también sufre bastante daño.' },
      { name: 'Refugio', type: PokemonElementType.water, power: null, description: 'El usuario se protege en su coraza y sube la Defensa.' },
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
      { name: 'Absorber', type: PokemonElementType.grass, power: 20, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
    ],
  },
  chimchar: {
    flavorText: 'El gas de su panza alimenta el fuego de su parte trasera, que ni la lluvia puede extinguir.',
    stats: { hp: 44, attack: 58, defense: 44, specialAttack: 58, specialDefense: 44, speed: 61 },
    moves: [
      { name: 'Relajo', type: PokemonElementType.normal, power: null, description: 'El usuario se relaja y restaura la mitad de sus PS máximos.' },
      { name: 'Rueda Fuego', type: PokemonElementType.fire, power: 60, description: 'Ataca envuelto en fuego. Puede causar quemaduras.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
    ],
  },
  monferno: {
    flavorText: 'Controla hábilmente la intensidad del fuego de su cola para mantener al enemigo a una distancia ideal.',
    stats: { hp: 64, attack: 78, defense: 52, specialAttack: 78, specialDefense: 52, speed: 81 },
    moves: [
      { name: 'Relajo', type: PokemonElementType.normal, power: null, description: 'El usuario se relaja y restaura la mitad de sus PS máximos.' },
      { name: 'Ultrapuño', type: PokemonElementType.fighting, power: 40, description: 'Puñetazo que se da rápido para golpear primero.' },
      { name: 'Rueda Fuego', type: PokemonElementType.fire, power: 60, description: 'Ataca envuelto en fuego. Puede causar quemaduras.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
    ],
  },
  infernape: {
    flavorText: 'Su corona de fuego demuestra su naturaleza ígnea. Nadie le gana en velocidad.',
    stats: { hp: 76, attack: 104, defense: 71, specialAttack: 104, specialDefense: 71, speed: 108 },
    moves: [
      { name: 'Ultrapuño', type: PokemonElementType.fighting, power: 40, description: 'Puñetazo que se da rápido para golpear primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Rueda Fuego', type: PokemonElementType.fire, power: 60, description: 'Ataca envuelto en fuego. Puede causar quemaduras.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
    ],
  },
  piplup: {
    flavorText: 'No le gusta que lo cuiden. Como no aprecia el apoyo de su Entrenador, le cuesta coger confianza con él.',
    stats: { hp: 53, attack: 51, defense: 53, specialAttack: 61, specialDefense: 56, speed: 40 },
    moves: [
      { name: 'Pico Taladro', type: PokemonElementType.flying, power: 80, description: 'Picotazo giratorio y perforador muy potente.' },
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
    ],
  },
  prinplup: {
    flavorText: 'Vive solo, alejado de los demás. Cada uno piensa que es el más importante.',
    stats: { hp: 64, attack: 66, defense: 68, specialAttack: 81, specialDefense: 76, speed: 50 },
    moves: [
      { name: 'Pico Taladro', type: PokemonElementType.flying, power: 80, description: 'Picotazo giratorio y perforador muy potente.' },
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
    ],
  },
  empoleon: {
    flavorText: 'Nada tan rápido como un fueraborda. Con los afilados bordes de sus alas puede cortar el hielo.',
    stats: { hp: 84, attack: 86, defense: 88, specialAttack: 111, specialDefense: 101, speed: 60 },
    moves: [
      { name: 'Pico Taladro', type: PokemonElementType.flying, power: 80, description: 'Picotazo giratorio y perforador muy potente.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Acua Jet', type: PokemonElementType.water, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
    ],
  },
  starly: {
    flavorText: 'Sobrevuela los campos buscando Pokémon de tipo Bicho. Chilla de forma muy estridente.',
    stats: { hp: 40, attack: 55, defense: 30, specialAttack: 30, specialDefense: 30, speed: 60 },
    moves: [
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Remolino', type: PokemonElementType.normal, power: null, description: 'Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.' },
      { name: 'Pájaro Osado', type: PokemonElementType.flying, power: 120, description: 'Pliega sus alas y ataca con un vuelo rasante. El Pokémon que lo usa también resulta seriamente dañado.' },
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
    ],
  },
  staravia: {
    flavorText: 'Vive siempre en grandes grupos y las disputas dentro de ellos son muy intensas.',
    stats: { hp: 55, attack: 75, defense: 50, specialAttack: 40, specialDefense: 40, speed: 80 },
    moves: [
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Remolino', type: PokemonElementType.normal, power: null, description: 'Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.' },
      { name: 'Pájaro Osado', type: PokemonElementType.flying, power: 120, description: 'Pliega sus alas y ataca con un vuelo rasante. El Pokémon que lo usa también resulta seriamente dañado.' },
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
    ],
  },
  staraptor: {
    flavorText: 'Sus alas y sus patas son muy fuertes. Puede llevarse volando Pokémon pequeños.',
    stats: { hp: 85, attack: 120, defense: 70, specialAttack: 50, specialDefense: 60, speed: 100 },
    moves: [
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Remolino', type: PokemonElementType.normal, power: null, description: 'Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate.' },
      { name: 'Pájaro Osado', type: PokemonElementType.flying, power: 120, description: 'Pliega sus alas y ataca con un vuelo rasante. El Pokémon que lo usa también resulta seriamente dañado.' },
      { name: 'A Bocajarro', type: PokemonElementType.fighting, power: 120, description: 'Lucha abiertamente contra el objetivo sin protegerse. También reduce la Defensa y la Defensa Especial del usuario.' },
    ],
  },
  bidoof: {
    flavorText: 'Tiene nervios de acero y nada puede perturbarlo. Es más ágil y activo de lo que aparenta.',
    stats: { hp: 59, attack: 45, defense: 40, specialAttack: 35, specialDefense: 40, speed: 31 },
    moves: [
      { name: 'Hipercolmillo', type: PokemonElementType.normal, power: 80, description: 'Ataque con finos colmillos. Puede hacer retroceder al objetivo.' },
      { name: 'Superdiente', type: PokemonElementType.normal, power: null, description: 'Finos colmillos que reducen a la mitad los PS del objetivo.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'El usuario olvida sus preocupaciones y aumenta mucho la Defensa Especial.' },
    ],
  },
  bibarel: {
    flavorText: 'Con sus incisivos roe ramas y raíces y las apila para construir sus madrigueras junto al río.',
    stats: { hp: 79, attack: 85, defense: 60, specialAttack: 55, specialDefense: 60, speed: 71 },
    moves: [
      { name: 'Hipercolmillo', type: PokemonElementType.normal, power: 80, description: 'Ataque con finos colmillos. Puede hacer retroceder al objetivo.' },
      { name: 'Superdiente', type: PokemonElementType.normal, power: null, description: 'Finos colmillos que reducen a la mitad los PS del objetivo.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
      { name: 'Amnesia', type: PokemonElementType.psychic, power: null, description: 'El usuario olvida sus preocupaciones y aumenta mucho la Defensa Especial.' },
    ],
  },
  kricketot: {
    flavorText: 'Hablan entre sí chocando las antenas. Los sonidos producidos son muy característicos.',
    stats: { hp: 37, attack: 25, defense: 41, specialAttack: 25, specialDefense: 41, speed: 25 },
    moves: [
      { name: 'Picadura', type: PokemonElementType.bug, power: 60, description: 'Pica al objetivo. Si el objetivo lleva una baya, el usuario se la come y se beneficia de su efecto.' },
      { name: 'Venganza', type: PokemonElementType.normal, power: null, description: 'Espera dos turnos para atacar con el doble de potencia del daño recibido.' },
      { name: 'Gruñido', type: PokemonElementType.normal, power: null, description: 'Dulce gruñido que reduce el Ataque del contrincante.' },
    ],
  },
  kricketune: {
    flavorText: 'Los científicos tratan de estudiar sus melodías, que son reflejo de sus emociones.',
    stats: { hp: 77, attack: 85, defense: 51, specialAttack: 55, specialDefense: 51, speed: 65 },
    moves: [
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
      { name: 'Zumbido', type: PokemonElementType.bug, power: 90, description: 'El movimiento de las alas crea una onda sónica dañina. También puede disminuir la Defensa Especial del objetivo.' },
      { name: 'Chupavidas', type: PokemonElementType.bug, power: 80, description: 'Restaura al usuario la mitad del daño causado al objetivo.' },
    ],
  },
  shinx: {
    flavorText: 'La extensión y contracción de sus músculos genera electricidad. Brilla cuando está en peligro.',
    stats: { hp: 45, attack: 65, defense: 34, specialAttack: 40, specialDefense: 34, speed: 45 },
    moves: [
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
      { name: 'Colmillo Rayo', type: PokemonElementType.electric, power: 65, description: 'Usa colmillos electrificados para morder. Puede hacer que el objetivo retroceda o se paralice.' },
    ],
  },
  luxio: {
    flavorText: 'Sus garras emiten electricidad que puede debilitar a sus rivales. Viven en grupos pequeños.',
    stats: { hp: 60, attack: 85, defense: 49, specialAttack: 60, specialDefense: 49, speed: 60 },
    moves: [
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
      { name: 'Colmillo Rayo', type: PokemonElementType.electric, power: 65, description: 'Usa colmillos electrificados para morder. Puede hacer que el objetivo retroceda o se paralice.' },
    ],
  },
  luxray: {
    flavorText: 'Cuando sus ojos brillan como el oro, puede ver presas escondidas, incluso detrás de un muro.',
    stats: { hp: 80, attack: 120, defense: 79, specialAttack: 95, specialDefense: 79, speed: 70 },
    moves: [
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
      { name: 'Colmillo Rayo', type: PokemonElementType.electric, power: 65, description: 'Usa colmillos electrificados para morder. Puede hacer que el objetivo retroceda o se paralice.' },
    ],
  },
  budew: {
    flavorText: 'Vive cerca de aguas cristalinas. Su cabello se abre y esparce polen cuando le bañan los rayos del sol.',
    stats: { hp: 40, attack: 30, defense: 35, specialAttack: 50, specialDefense: 70, speed: 55 },
    moves: [
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Paralizador', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que paraliza al objetivo.' },
      { name: 'Desarrollo', type: PokemonElementType.normal, power: null, description: 'El cuerpo del usuario crece a marchas forzadas y aumenta el Ataque y el Ataque Especial.' },
      { name: 'Absorber', type: PokemonElementType.grass, power: 20, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
    ],
  },
  roserade: {
    flavorText: 'Atrae a sus presas con una dulce fragancia y usa sus cepas venenosas para atenazarlas y acabar con ellas.',
    stats: { hp: 60, attack: 70, defense: 65, specialAttack: 125, specialDefense: 105, speed: 90 },
    moves: [
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Dulce Aroma', type: PokemonElementType.normal, power: null, description: 'Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión. En la hierba alta sirve para atraer a Pokémon salvajes.' },
      { name: 'Megaagotar', type: PokemonElementType.grass, power: 40, description: 'Absorbe la mitad del daño producido en el objetivo para restaurar los PS del usuario.' },
      { name: 'Hoja Mágica', type: PokemonElementType.grass, power: 60, description: 'Esparce extrañas hojas que persiguen al objetivo. No se puede esquivar.' },
    ],
  },
  cranidos: {
    flavorText: 'Fue recreado a partir de un fósil con forma esférica. Derriba a las presas a cabezazos.',
    stats: { hp: 67, attack: 125, defense: 40, specialAttack: 30, specialDefense: 30, speed: 58 },
    moves: [
      { name: 'Testarazo', type: PokemonElementType.rock, power: 150, description: 'El usuario arriesga su vida y lanza un cabezazo con toda su fuerza. El agresor resulta seriamente dañado.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
      { name: 'Foco Energía', type: PokemonElementType.normal, power: null, description: 'Concentra energía para aumentar las posibilidades de un golpe crítico.' },
      { name: 'Poder Pasado', type: PokemonElementType.rock, power: 60, description: 'Ataque prehistórico que puede subir todas las características.' },
    ],
  },
  rampardos: {
    flavorText: 'Tiene sesos pequeños porque su duro cráneo, que soporta cualquier golpe, les impide desarrollarse.',
    stats: { hp: 97, attack: 165, defense: 60, specialAttack: 65, specialDefense: 50, speed: 58 },
    moves: [
      { name: 'Testarazo', type: PokemonElementType.rock, power: 150, description: 'El usuario arriesga su vida y lanza un cabezazo con toda su fuerza. El agresor resulta seriamente dañado.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
      { name: 'Foco Energía', type: PokemonElementType.normal, power: null, description: 'Concentra energía para aumentar las posibilidades de un golpe crítico.' },
      { name: 'Poder Pasado', type: PokemonElementType.rock, power: 60, description: 'Ataque prehistórico que puede subir todas las características.' },
    ],
  },
  shieldon: {
    flavorText: 'Se abrillanta la cara frotándola contra los árboles. Es vulnerable a los ataques por la espalda.',
    stats: { hp: 30, attack: 42, defense: 118, specialAttack: 42, specialDefense: 88, speed: 30 },
    moves: [
      { name: 'Represión Metal', type: PokemonElementType.steel, power: null, description: 'Devuelve al objetivo el último ataque recibido, pero con mucha más fuerza.' },
      { name: 'Eco Metálico', type: PokemonElementType.steel, power: null, description: 'Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo.' },
      { name: 'Poder Pasado', type: PokemonElementType.rock, power: 60, description: 'Ataque prehistórico que puede subir todas las características.' },
      { name: 'Cabeza de Hierro', type: PokemonElementType.steel, power: 80, description: 'Ataca con su dura cabeza de hierro. Puede hacer que el objetivo retroceda.' },
    ],
  },
  bastiodon: {
    flavorText: 'Se alineaban y creaban una barrera que ningún enemigo podía cruzar. Así protegían a sus crías.',
    stats: { hp: 60, attack: 52, defense: 168, specialAttack: 47, specialDefense: 138, speed: 30 },
    moves: [
      { name: 'Represión Metal', type: PokemonElementType.steel, power: null, description: 'Devuelve al objetivo el último ataque recibido, pero con mucha más fuerza.' },
      { name: 'Eco Metálico', type: PokemonElementType.steel, power: null, description: 'Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo.' },
      { name: 'Bloqueo', type: PokemonElementType.normal, power: null, description: 'Le corta el paso al objetivo para que no pueda escapar.' },
      { name: 'Poder Pasado', type: PokemonElementType.rock, power: 60, description: 'Ataque prehistórico que puede subir todas las características.' },
    ],
  },
  burmy_plant: {
    flavorText: 'Para protegerse de los vientos fríos invernales, se cubre con un caparazón de ramas y hojas.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'Picadura', type: PokemonElementType.bug, power: 60, description: 'Pica al objetivo. Si el objetivo lleva una baya, el usuario se la come y se beneficia de su efecto.' },
      { name: 'Placaje', type: PokemonElementType.normal, power: 40, description: 'Embiste con todo el cuerpo.' },
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
      { name: 'Protección', type: PokemonElementType.normal, power: null, description: 'Frena todos los ataques, pero puede fallar si se usa repetidamente.' },
    ],
  },
  burmy_sandy: {
    flavorText: 'Para protegerse de los vientos fríos invernales, se cubre con un caparazón de ramas y hojas.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'Picadura', type: PokemonElementType.bug, power: 60, description: 'Pica al objetivo. Si el objetivo lleva una baya, el usuario se la come y se beneficia de su efecto.' },
      { name: 'Placaje', type: PokemonElementType.normal, power: 40, description: 'Embiste con todo el cuerpo.' },
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
      { name: 'Protección', type: PokemonElementType.normal, power: null, description: 'Frena todos los ataques, pero puede fallar si se usa repetidamente.' },
    ],
  },
  burmy_trash: {
    flavorText: 'Para protegerse de los vientos fríos invernales, se cubre con un caparazón de ramas y hojas.',
    stats: { hp: 40, attack: 29, defense: 45, specialAttack: 29, specialDefense: 45, speed: 36 },
    moves: [
      { name: 'Picadura', type: PokemonElementType.bug, power: 60, description: 'Pica al objetivo. Si el objetivo lleva una baya, el usuario se la come y se beneficia de su efecto.' },
      { name: 'Placaje', type: PokemonElementType.normal, power: 40, description: 'Embiste con todo el cuerpo.' },
      { name: 'Poder Oculto', type: PokemonElementType.normal, power: 60, description: 'Movimiento cuyo tipo varía en función del Pokémon que lo usa.' },
      { name: 'Protección', type: PokemonElementType.normal, power: null, description: 'Frena todos los ataques, pero puede fallar si se usa repetidamente.' },
    ],
  },
  wormadam_plant: {
    flavorText: 'Su apariencia varía según dónde evolucione. Los materiales que haya pasan a formar parte de su cuerpo.',
    stats: { hp: 60, attack: 59, defense: 85, specialAttack: 79, specialDefense: 105, speed: 36 },
    moves: [
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
      { name: 'Desarrollo', type: PokemonElementType.normal, power: null, description: 'El cuerpo del usuario crece a marchas forzadas y aumenta el Ataque y el Ataque Especial.' },
      { name: 'Picadura', type: PokemonElementType.bug, power: 60, description: 'Pica al objetivo. Si el objetivo lleva una baya, el usuario se la come y se beneficia de su efecto.' },
      { name: 'Lluevehojas', type: PokemonElementType.grass, power: 130, description: 'Cae una lluvia de hojas afiladas. Baja mucho el Ataque Especial de quien lo usa.' },
    ],
  },
  wormadam_sandy: {
    flavorText: 'Su apariencia varía según dónde evolucione. Los materiales que haya pasan a formar parte de su cuerpo.',
    stats: { hp: 60, attack: 79, defense: 105, specialAttack: 59, specialDefense: 85, speed: 36 },
    moves: [
      { name: 'Fisura', type: PokemonElementType.ground, power: null, description: 'Abre una grieta en el suelo y mete al objetivo en ella. Fulmina en un golpe.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
      { name: 'Picadura', type: PokemonElementType.bug, power: 60, description: 'Pica al objetivo. Si el objetivo lleva una baya, el usuario se la come y se beneficia de su efecto.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
    ],
  },
  wormadam_trash: {
    flavorText: 'Su apariencia varía según dónde evolucione. Los materiales que haya pasan a formar parte de su cuerpo.',
    stats: { hp: 60, attack: 69, defense: 95, specialAttack: 69, specialDefense: 95, speed: 36 },
    moves: [
      { name: 'Disparo Espejo', type: PokemonElementType.steel, power: 65, description: 'El usuario libera un haz de energía desde su pulido cuerpo. Puede bajar la Precisión.' },
      { name: 'Eco Metálico', type: PokemonElementType.steel, power: null, description: 'Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo.' },
      { name: 'Picadura', type: PokemonElementType.bug, power: 60, description: 'Pica al objetivo. Si el objetivo lleva una baya, el usuario se la come y se beneficia de su efecto.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
    ],
  },
  mothim: {
    flavorText: 'Le encanta la miel de las flores y roba la que recoge Combee.',
    stats: { hp: 70, attack: 94, defense: 50, specialAttack: 94, specialDefense: 50, speed: 66 },
    moves: [
      { name: 'Camuflaje', type: PokemonElementType.normal, power: null, description: 'Modifica el tipo del Pokémon según el terreno de combate donde esté.' },
      { name: 'Polvo Veneno', type: PokemonElementType.poison, power: null, description: 'Polvo tóxico que envenena al objetivo.' },
      { name: 'Viento Plata', type: PokemonElementType.bug, power: 60, description: 'Fuerte viento con polvo de escamas. Puede subir todas las características de quien lo usa.' },
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
    ],
  },
  combee_female: {
    flavorText: 'El trío se forma al nacer y se pasa la vida recogiendo miel de las flores para satisfacer a Vespiquen.',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
      { name: 'Dulce Aroma', type: PokemonElementType.normal, power: null, description: 'Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión. En la hierba alta sirve para atraer a Pokémon salvajes.' },
      { name: 'Picadura', type: PokemonElementType.bug, power: 60, description: 'Pica al objetivo. Si el objetivo lleva una baya, el usuario se la come y se beneficia de su efecto.' },
    ],
  },
  combee_male: {
    flavorText: 'El trío se forma al nacer y se pasa la vida recogiendo miel de las flores para satisfacer a Vespiquen.',
    stats: { hp: 30, attack: 30, defense: 42, specialAttack: 30, specialDefense: 42, speed: 70 },
    moves: [
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
      { name: 'Dulce Aroma', type: PokemonElementType.normal, power: null, description: 'Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión. En la hierba alta sirve para atraer a Pokémon salvajes.' },
      { name: 'Picadura', type: PokemonElementType.bug, power: 60, description: 'Pica al objetivo. Si el objetivo lleva una baya, el usuario se la come y se beneficia de su efecto.' },
    ],
  },
  vespiquen: {
    flavorText: 'Cría larvas en los panales de su cuerpo. Segrega diversas feromonas de su cuerpo con las cuales controla a sus crías.',
    stats: { hp: 70, attack: 80, defense: 102, specialAttack: 80, specialDefense: 102, speed: 40 },
    moves: [
      { name: 'Al Ataque', type: PokemonElementType.bug, power: 90, description: 'El usuario llama a sus súbditos para que ataquen al objetivo. Suele ser crítico.' },
      { name: 'Auxilio', type: PokemonElementType.bug, power: null, description: 'El usuario llama a sus súbditos para que lo curen. Recupera hasta la mitad de los PS máximos.' },
      { name: 'A Defender', type: PokemonElementType.bug, power: null, description: 'El usuario llama a sus súbditos para que formen un escudo viviente. Sube la Defensa y la Defensa Especial.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
    ],
  },
  pachirisu: {
    flavorText: 'Crea bolas de pelo que crepitan con electricidad estática. Las almacena en agujeros de árboles.',
    stats: { hp: 60, attack: 45, defense: 70, specialAttack: 45, specialDefense: 90, speed: 95 },
    moves: [
      { name: 'Beso Dulce', type: PokemonElementType.normal, power: null, description: 'Da un beso con tal dulzura que causa confusión.' },
      { name: 'Chispa', type: PokemonElementType.electric, power: 65, description: 'Ataque eléctrico que puede llegar a paralizar.' },
      { name: 'Superdiente', type: PokemonElementType.normal, power: null, description: 'Finos colmillos que reducen a la mitad los PS del objetivo.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
    ],
  },
  buizel: {
    flavorText: 'Nada rotando sus dos colas a modo de tornillo. Cuando bucea, el flotador se pliega.',
    stats: { hp: 55, attack: 65, defense: 35, specialAttack: 60, specialDefense: 30, speed: 85 },
    moves: [
      { name: 'Bomba Sónica', type: PokemonElementType.normal, power: null, description: 'Lanza ondas de choque que restan 20 PS al objetivo.' },
      { name: 'Viento Cortante', type: PokemonElementType.normal, power: 80, description: 'Primero se prepara y en el segundo turno ataca al oponente con ráfagas de viento cortante. Alta probabilidad de ser crítico.' },
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Acua Jet', type: PokemonElementType.water, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
    ],
  },
  floatzel: {
    flavorText: 'Nada gracias a su flotador. Ayuda en los rescates de gente que se está ahogando.',
    stats: { hp: 85, attack: 105, defense: 55, specialAttack: 85, specialDefense: 50, speed: 115 },
    moves: [
      { name: 'Bomba Sónica', type: PokemonElementType.normal, power: null, description: 'Lanza ondas de choque que restan 20 PS al objetivo.' },
      { name: 'Viento Cortante', type: PokemonElementType.normal, power: 80, description: 'Primero se prepara y en el segundo turno ataca al oponente con ráfagas de viento cortante. Alta probabilidad de ser crítico.' },
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Acua Jet', type: PokemonElementType.water, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
    ],
  },
  cherubi: {
    flavorText: 'Bajo la luz solar es rojo. La esfera pequeña pierde sus nutrientes y se seca para anunciar la evolución.',
    stats: { hp: 45, attack: 35, defense: 45, specialAttack: 62, specialDefense: 53, speed: 35 },
    moves: [
      { name: 'Conjuro', type: PokemonElementType.normal, power: null, description: 'Lanza al cielo un conjuro que impide al objetivo asestar golpes críticos.' },
      { name: 'Desarrollo', type: PokemonElementType.normal, power: null, description: 'El cuerpo del usuario crece a marchas forzadas y aumenta el Ataque y el Ataque Especial.' },
      { name: 'Drenadoras', type: PokemonElementType.grass, power: null, description: 'Planta semillas que absorben PS para recuperar la salud del usuario en cada turno.' },
      { name: 'Abatidoras', type: PokemonElementType.grass, power: null, description: 'Se planta una semilla en el objetivo que le causa pesar. Evita el sueño gracias a la habilidad Insomnio.' },
    ],
  },
  cherrim: {
    flavorText: 'Cuando los rayos de sol inundan su capullo, abre de par en par sus pétalos y se vuelve muy dinámico.',
    stats: { hp: 70, attack: 60, defense: 70, specialAttack: 87, specialDefense: 78, speed: 85 },
    moves: [
      { name: 'Danza Pétalo', type: PokemonElementType.grass, power: 120, description: 'Lanza pétalos de dos a tres turnos y acaba confundiendo al atacante.' },
      { name: 'Conjuro', type: PokemonElementType.normal, power: null, description: 'Lanza al cielo un conjuro que impide al objetivo asestar golpes críticos.' },
      { name: 'Desarrollo', type: PokemonElementType.normal, power: null, description: 'El cuerpo del usuario crece a marchas forzadas y aumenta el Ataque y el Ataque Especial.' },
      { name: 'Drenadoras', type: PokemonElementType.grass, power: null, description: 'Planta semillas que absorben PS para recuperar la salud del usuario en cada turno.' },
    ],
  },
  shellos_east: {
    flavorText: 'No hay que apretarle muy fuerte, ya que, si lo haces, secreta un misterioso fluido morado.',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: 'Bomba Fango', type: PokemonElementType.ground, power: 65, description: 'Ataca lanzando una compacta bola de fango. Puede bajar la Precisión del objetivo.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  shellos_west: {
    flavorText: 'No hay que apretarle muy fuerte, ya que, si lo haces, secreta un misterioso fluido morado.',
    stats: { hp: 76, attack: 48, defense: 48, specialAttack: 57, specialDefense: 62, speed: 34 },
    moves: [
      { name: 'Bomba Fango', type: PokemonElementType.ground, power: 65, description: 'Ataca lanzando una compacta bola de fango. Puede bajar la Precisión del objetivo.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  gastrodon_east: {
    flavorText: 'Si se ve amenazado por sus enemigos naturales, segrega un líquido morado y huye rápidamente.',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: 'Bomba Fango', type: PokemonElementType.ground, power: 65, description: 'Ataca lanzando una compacta bola de fango. Puede bajar la Precisión del objetivo.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  gastrodon_west: {
    flavorText: 'Si se ve amenazado por sus enemigos naturales, segrega un líquido morado y huye rápidamente.',
    stats: { hp: 111, attack: 83, defense: 68, specialAttack: 92, specialDefense: 82, speed: 39 },
    moves: [
      { name: 'Bomba Fango', type: PokemonElementType.ground, power: 65, description: 'Ataca lanzando una compacta bola de fango. Puede bajar la Precisión del objetivo.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
      { name: 'Recuperación', type: PokemonElementType.normal, power: null, description: 'Restaura hasta la mitad de los PS máximos.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
    ],
  },
  ambipom: {
    flavorText: 'Habitan en grandes colonias y forman anillos uniendo sus colas, aparentemente en signo de amistad.',
    stats: { hp: 75, attack: 100, defense: 66, specialAttack: 60, specialDefense: 66, speed: 115 },
    moves: [
      { name: 'Doble Golpe', type: PokemonElementType.normal, power: 35, description: 'Golpea al objetivo dos veces seguidas con la cola u otras partes de su cuerpo.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Cosquillas', type: PokemonElementType.normal, power: null, description: 'Hace reír al objetivo para bajar su Ataque y Defensa.' },
      { name: 'Arañazo', type: PokemonElementType.normal, power: 40, description: 'Araña con afiladas garras.' },
    ],
  },
  drifloon: {
    flavorText: 'Está formado por los espíritus de personas y Pokémon. Le encantan las estaciones húmedas.',
    stats: { hp: 90, attack: 50, defense: 34, specialAttack: 60, specialDefense: 44, speed: 70 },
    moves: [
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Reducción', type: PokemonElementType.normal, power: null, description: 'El usuario mengua para aumentar mucho la Evasión.' },
      { name: 'Escupir', type: PokemonElementType.normal, power: null, description: 'Libera de una vez la energía acumulada con Reserva.' },
      { name: 'Tragar', type: PokemonElementType.normal, power: null, description: 'Absorbe la energía acumulada con Reserva y restaura PS.' },
    ],
  },
  drifblim: {
    flavorText: 'Transporta a gente y a Pokémon volando, pero, como se deja llevar, puede acabar en cualquier sitio.',
    stats: { hp: 150, attack: 80, defense: 44, specialAttack: 90, specialDefense: 54, speed: 80 },
    moves: [
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Reducción', type: PokemonElementType.normal, power: null, description: 'El usuario mengua para aumentar mucho la Evasión.' },
      { name: 'Escupir', type: PokemonElementType.normal, power: null, description: 'Libera de una vez la energía acumulada con Reserva.' },
      { name: 'Tragar', type: PokemonElementType.normal, power: null, description: 'Absorbe la energía acumulada con Reserva y restaura PS.' },
    ],
  },
  buneary: {
    flavorText: 'Lleva las orejas enrolladas. Cuando las extiende, golpea con tal fuerza que incluso puede romper rocas.',
    stats: { hp: 55, attack: 66, defense: 44, specialAttack: 44, specialDefense: 56, speed: 85 },
    moves: [
      { name: 'Patada Salto', type: PokemonElementType.fighting, power: 100, description: 'Da un salto y pega una patada. Si falla, se lesiona.' },
      { name: 'Puño Mareo', type: PokemonElementType.normal, power: 70, description: 'Rítmicos puñetazos que pueden causar confusión.' },
      { name: 'Deseo Cura', type: PokemonElementType.psychic, power: null, description: 'El Pokémon cae debilitado, pero su sustituto recupera su estado y los PS.' },
      { name: 'Salpicadura', type: PokemonElementType.normal, power: null, description: 'No tiene ningún efecto. Solo salpica.' },
    ],
  },
  lopunny: {
    flavorText: 'Este Pokémon resulta muy precavido. Si siente peligro, escapa corriendo a grandes saltos.',
    stats: { hp: 65, attack: 76, defense: 84, specialAttack: 54, specialDefense: 96, speed: 105 },
    moves: [
      { name: 'Patada Salto', type: PokemonElementType.fighting, power: 100, description: 'Da un salto y pega una patada. Si falla, se lesiona.' },
      { name: 'Puño Mareo', type: PokemonElementType.normal, power: 70, description: 'Rítmicos puñetazos que pueden causar confusión.' },
      { name: 'Deseo Cura', type: PokemonElementType.psychic, power: null, description: 'El Pokémon cae debilitado, pero su sustituto recupera su estado y los PS.' },
      { name: 'Salpicadura', type: PokemonElementType.normal, power: null, description: 'No tiene ningún efecto. Solo salpica.' },
    ],
  },
  mismagius: {
    flavorText: 'Recita cánticos. Algunos de ellos atormentan a sus rivales, mientras que otros producen felicidad.',
    stats: { hp: 60, attack: 60, defense: 60, specialAttack: 105, specialDefense: 105, speed: 105 },
    moves: [
      { name: 'Conjuro', type: PokemonElementType.normal, power: null, description: 'Lanza al cielo un conjuro que impide al objetivo asestar golpes críticos.' },
      { name: 'Psicoonda', type: PokemonElementType.psychic, power: null, description: 'Ataque con una onda de energía de intensidad variable.' },
      { name: 'Hoja Mágica', type: PokemonElementType.grass, power: 60, description: 'Esparce extrañas hojas que persiguen al objetivo. No se puede esquivar.' },
      { name: 'Impresionar', type: PokemonElementType.ghost, power: 30, description: 'Impresiona tanto que puede hacer retroceder al objetivo.' },
    ],
  },
  honchkrow: {
    flavorText: 'Si uno lanza un grito profundo, los demás acuden. Por eso se le llama también Invocador de la Noche.',
    stats: { hp: 100, attack: 125, defense: 52, specialAttack: 105, specialDefense: 52, speed: 71 },
    moves: [
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Persecución', type: PokemonElementType.dark, power: 40, description: 'Hace el doble de daño al objetivo que pide el relevo.' },
      { name: 'Tajo Umbrío', type: PokemonElementType.dark, power: 70, description: 'Ataca al objetivo a la primera oportunidad. Suele ser crítico.' },
      { name: 'Niebla', type: PokemonElementType.ice, power: null, description: 'Neblina que elimina los cambios de características de todos los Pokémon en combate.' },
    ],
  },
  glameow: {
    flavorText: 'Araña cuando está enfadado y ronronea cuando está cariñoso. Su imprevisibilidad es famosa.',
    stats: { hp: 49, attack: 55, defense: 42, specialAttack: 42, specialDefense: 37, speed: 85 },
    moves: [
      { name: 'Ayuda', type: PokemonElementType.normal, power: null, description: 'Usa un movimiento de un miembro del equipo elegido al azar.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Sorpresa', type: PokemonElementType.normal, power: 40, description: 'Ataca primero y, además, hace retroceder al objetivo. Solo sirve en el primer turno.' },
    ],
  },
  purugly: {
    flavorText: 'Si se siente a gusto, no tiene ningún reparo en apropiarse de las moradas de otros Pokémon.',
    stats: { hp: 71, attack: 82, defense: 64, specialAttack: 64, specialDefense: 59, speed: 112 },
    moves: [
      { name: 'Ayuda', type: PokemonElementType.normal, power: null, description: 'Usa un movimiento de un miembro del equipo elegido al azar.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Sorpresa', type: PokemonElementType.normal, power: 40, description: 'Ataca primero y, además, hace retroceder al objetivo. Solo sirve en el primer turno.' },
    ],
  },
  chingling: {
    flavorText: 'Emite un tintineo cada vez que salta. Ensordece a sus rivales con sonidos de alta frecuencia.',
    stats: { hp: 45, attack: 30, defense: 50, specialAttack: 65, specialDefense: 50, speed: 45 },
    moves: [
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
      { name: 'Impresionar', type: PokemonElementType.ghost, power: 30, description: 'Impresiona tanto que puede hacer retroceder al objetivo.' },
      { name: 'Última Baza', type: PokemonElementType.normal, power: 140, description: 'Este movimiento solo puede utilizarse tras haber usado al menos una vez todos los demás conocidos por el Pokémon.' },
    ],
  },
  stunky: {
    flavorText: 'Expulsa un fluido maloliente por sus cuartos traseros. El hedor repele Pokémon en un radio de 2 km.',
    stats: { hp: 63, attack: 63, defense: 47, specialAttack: 41, specialDefense: 41, speed: 74 },
    moves: [
      { name: 'Gas Venenoso', type: PokemonElementType.poison, power: null, description: 'Lanza una nube de gas tóxico a los rivales. Produce envenenamiento.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
      { name: 'Legado', type: PokemonElementType.dark, power: null, description: 'El usuario se debilita, pero baja mucho tanto el Ataque como el Ataque Especial del objetivo.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
    ],
  },
  skuntank: {
    flavorText: 'Para atacar, emite un fluido maloliente por la punta de su cola que puede llegar a más de 50 m.',
    stats: { hp: 103, attack: 93, defense: 67, specialAttack: 71, specialDefense: 61, speed: 84 },
    moves: [
      { name: 'Gas Venenoso', type: PokemonElementType.poison, power: null, description: 'Lanza una nube de gas tóxico a los rivales. Produce envenenamiento.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
      { name: 'Legado', type: PokemonElementType.dark, power: null, description: 'El usuario se debilita, pero baja mucho tanto el Ataque como el Ataque Especial del objetivo.' },
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
    ],
  },
  bronzor: {
    flavorText: 'Antaño se creía que en los dibujos de su parte posterior residía una fuerza misteriosa.',
    stats: { hp: 57, attack: 24, defense: 86, specialAttack: 24, specialDefense: 86, speed: 23 },
    moves: [
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Impide al objetivo usar movimientos, habilidades y objetos equipados que recuperan PS durante cinco turnos.' },
      { name: 'Paranormal', type: PokemonElementType.psychic, power: 80, description: 'Energía muy extraña que puede hacer retroceder al objetivo.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  bronzong: {
    flavorText: 'Desde antaño se adora a este Pokémon para que propicie lluvias abundantes. A veces se esconde bajo tierra.',
    stats: { hp: 67, attack: 89, defense: 116, specialAttack: 79, specialDefense: 116, speed: 33 },
    moves: [
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Impide al objetivo usar movimientos, habilidades y objetos equipados que recuperan PS durante cinco turnos.' },
      { name: 'Paranormal', type: PokemonElementType.psychic, power: 80, description: 'Energía muy extraña que puede hacer retroceder al objetivo.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  bonsly: {
    flavorText: 'Prefiere entornos áridos. Sus ojos expulsan agua para ajustar los niveles de fluido corporal.',
    stats: { hp: 50, attack: 80, defense: 95, specialAttack: 10, specialDefense: 45, speed: 10 },
    moves: [
      { name: 'Lanzarrocas', type: PokemonElementType.rock, power: 50, description: 'Tira una pequeña roca al objetivo.' },
      { name: 'Copión', type: PokemonElementType.normal, power: null, description: 'Imita el movimiento usado justo antes. El movimiento falla si no se ha usado aún ninguno.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
      { name: 'Atizar', type: PokemonElementType.normal, power: 80, description: 'Golpea con las extremidades.' },
    ],
  },
  mimeJr: {
    flavorText: 'Desconcierta a sus rivales imitando sus movimientos a la perfección y aprovecha para darse a la fuga.',
    stats: { hp: 20, attack: 25, defense: 45, specialAttack: 70, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Meditación', type: PokemonElementType.psychic, power: null, description: 'El usuario reposa y medita para potenciar el Ataque.' },
      { name: 'Barrera', type: PokemonElementType.psychic, power: null, description: 'Crea una barrera que aumenta mucho la Defensa.' },
      { name: 'Doble Bofetón', type: PokemonElementType.normal, power: 15, description: 'Abofetea de dos a cinco veces seguidas.' },
      { name: 'Copión', type: PokemonElementType.normal, power: null, description: 'Imita el movimiento usado justo antes. El movimiento falla si no se ha usado aún ninguno.' },
    ],
  },
  happiny: {
    flavorText: 'Les da a sus amigos una roca con forma de huevo que transporta en la bolsa de su panza.',
    stats: { hp: 100, attack: 5, defense: 5, specialAttack: 15, specialDefense: 65, speed: 30 },
    moves: [
      { name: 'Beso Dulce', type: PokemonElementType.normal, power: null, description: 'Da un beso con tal dulzura que causa confusión.' },
      { name: 'Alivio', type: PokemonElementType.normal, power: null, description: 'Descansa para curar parálisis, envenenamiento o quemaduras.' },
      { name: 'Copión', type: PokemonElementType.normal, power: null, description: 'Imita el movimiento usado justo antes. El movimiento falla si no se ha usado aún ninguno.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
    ],
  },
  chatot: {
    flavorText: 'Imita los sonidos de sus rivales, haciéndoles creer que son amigos e impidiendo que le ataquen.',
    stats: { hp: 76, attack: 65, defense: 45, specialAttack: 92, specialDefense: 42, speed: 91 },
    moves: [
      { name: 'Cháchara', type: PokemonElementType.flying, power: 65, description: 'Ataca con una onda sónica compuesta por palabras que ha aprendido y confunde al objetivo.' },
      { name: 'Espejo', type: PokemonElementType.flying, power: null, description: 'Contraataca con el mismo movimiento empleado por el objetivo.' },
      { name: 'Canto', type: PokemonElementType.normal, power: null, description: 'Cancioncilla que hace dormir profundamente al objetivo.' },
      { name: 'Ataque Furia', type: PokemonElementType.normal, power: 15, description: 'Cornea al objetivo de dos a cinco veces.' },
    ],
  },
  spiritomb: {
    flavorText: 'Se formó a partir de 108 espíritus. Está unido a la fisura de una piedra angular mística.',
    stats: { hp: 50, attack: 92, defense: 108, specialAttack: 92, specialDefense: 108, speed: 35 },
    moves: [
      { name: 'Sombra Vil', type: PokemonElementType.ghost, power: 40, description: 'Extiende su sombra y ataca al objetivo por la espalda. Este movimiento siempre va primero.' },
      { name: 'Legado', type: PokemonElementType.dark, power: null, description: 'El usuario se debilita, pero baja mucho tanto el Ataque como el Ataque Especial del objetivo.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
      { name: 'Viento Aciago', type: PokemonElementType.ghost, power: 60, description: 'Produce un viento horripilante. Puede subir de golpe todas las características del usuario.' },
    ],
  },
  gible: {
    flavorText: 'Vive en agujeros en las cuevas, al amparo del calor geotérmico. Si se acerca un enemigo, le muerde.',
    stats: { hp: 58, attack: 70, defense: 45, specialAttack: 40, specialDefense: 45, speed: 42 },
    moves: [
      { name: 'Furia Dragón', type: PokemonElementType.dragon, power: null, description: 'Ráfaga de furiosas ondas de choque que quitan 40 PS.' },
      { name: 'Carga Dragón', type: PokemonElementType.dragon, power: 100, description: 'Ataca de forma brutal mientras intimida al objetivo. También puede hacerlo retroceder.' },
      { name: 'Bucle Arena', type: PokemonElementType.ground, power: 35, description: 'Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.' },
      { name: 'Garra Dragón', type: PokemonElementType.dragon, power: 80, description: 'Araña al objetivo con garras afiladas.' },
    ],
  },
  gabite: {
    flavorText: 'Le gustan las cosas brillantes. Busca tesoros en cuevas y se lleva el botín a su nido.',
    stats: { hp: 68, attack: 90, defense: 65, specialAttack: 50, specialDefense: 55, speed: 82 },
    moves: [
      { name: 'Furia Dragón', type: PokemonElementType.dragon, power: null, description: 'Ráfaga de furiosas ondas de choque que quitan 40 PS.' },
      { name: 'Carga Dragón', type: PokemonElementType.dragon, power: 100, description: 'Ataca de forma brutal mientras intimida al objetivo. También puede hacerlo retroceder.' },
      { name: 'Bucle Arena', type: PokemonElementType.ground, power: 35, description: 'Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.' },
      { name: 'Garra Dragón', type: PokemonElementType.dragon, power: 80, description: 'Araña al objetivo con garras afiladas.' },
    ],
  },
  garchomp: {
    flavorText: 'Cuando despliega su cuerpo y sus alas, parece un avión a reacción. Vuela a velocidad sónica.',
    stats: { hp: 108, attack: 130, defense: 95, specialAttack: 80, specialDefense: 85, speed: 102 },
    moves: [
      { name: 'Furia Dragón', type: PokemonElementType.dragon, power: null, description: 'Ráfaga de furiosas ondas de choque que quitan 40 PS.' },
      { name: 'Carga Dragón', type: PokemonElementType.dragon, power: 100, description: 'Ataca de forma brutal mientras intimida al objetivo. También puede hacerlo retroceder.' },
      { name: 'Bucle Arena', type: PokemonElementType.ground, power: 35, description: 'Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.' },
      { name: 'Garra Dragón', type: PokemonElementType.dragon, power: 80, description: 'Araña al objetivo con garras afiladas.' },
    ],
  },
  munchlax: {
    flavorText: 'Esconde comida bajo el largo pelo de su cuerpo, pero más tarde lo olvida.',
    stats: { hp: 135, attack: 85, defense: 40, specialAttack: 40, specialDefense: 85, speed: 5 },
    moves: [
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Lengüetazo', type: PokemonElementType.ghost, power: 30, description: 'Una lengua ataca al objetivo. Puede causar parálisis.' },
      { name: 'Tragar', type: PokemonElementType.normal, power: null, description: 'Absorbe la energía acumulada con Reserva y restaura PS.' },
      { name: 'Reserva', type: PokemonElementType.normal, power: null, description: 'Acumula energía y sube la Defensa y la Defensa Especial. Puede utilizarse hasta tres veces.' },
    ],
  },
  hippopotas: {
    flavorText: 'Vive en zonas áridas. En lugar de sudar, su cuerpo expulsa granos de arena.',
    stats: { hp: 68, attack: 72, defense: 78, specialAttack: 38, specialDefense: 42, speed: 32 },
    moves: [
      { name: 'Fisura', type: PokemonElementType.ground, power: null, description: 'Abre una grieta en el suelo y mete al objetivo en ella. Fulmina en un golpe.' },
      { name: 'Bucle Arena', type: PokemonElementType.ground, power: 35, description: 'Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
    ],
  },
  riolu: {
    flavorText: 'Se comunica con los suyos mediante la emisión de unas ondas que cambian de forma en función de los sentimientos.',
    stats: { hp: 40, attack: 70, defense: 40, specialAttack: 35, specialDefense: 40, speed: 60 },
    moves: [
      { name: 'Palmeo', type: PokemonElementType.fighting, power: 60, description: 'Ataca al objetivo con una onda de choque y puede llegar a paralizarlo.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Copión', type: PokemonElementType.normal, power: null, description: 'Imita el movimiento usado justo antes. El movimiento falla si no se ha usado aún ninguno.' },
      { name: 'Amago', type: PokemonElementType.normal, power: 30, description: 'Permite golpear a objetivos que usan Protección o Detección y anula dichos movimientos.' },
    ],
  },
  lucario: {
    flavorText: 'Puede leer los pensamientos y movimientos de su adversario a través de su aura.',
    stats: { hp: 70, attack: 110, defense: 70, specialAttack: 115, specialDefense: 70, speed: 90 },
    moves: [
      { name: 'Ataque Óseo', type: PokemonElementType.ground, power: 25, description: 'Hueso en ristre, aporrea al objetivo de dos a cinco veces.' },
      { name: 'Palmeo', type: PokemonElementType.fighting, power: 60, description: 'Ataca al objetivo con una onda de choque y puede llegar a paralizarlo.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Yo Primero', type: PokemonElementType.normal, power: null, description: 'Se adelanta al movimiento que pretende usar el objetivo y lo lanza antes con más fuerza. Si el usuario es más lento, falla.' },
    ],
  },
  hippowdon: {
    flavorText: 'Hace gala de su fuerza abriendo su enorme boca. Para atacar levanta gran cantidad de arena.',
    stats: { hp: 108, attack: 112, defense: 118, specialAttack: 68, specialDefense: 72, speed: 47 },
    moves: [
      { name: 'Fisura', type: PokemonElementType.ground, power: null, description: 'Abre una grieta en el suelo y mete al objetivo en ella. Fulmina en un golpe.' },
      { name: 'Bucle Arena', type: PokemonElementType.ground, power: 35, description: 'Enreda al objetivo en un remolino de arena de cuatro a cinco turnos.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
    ],
  },
  skorupi: {
    flavorText: 'Agarra a sus presas con las pinzas de la cola y les inyecta veneno. Espera hasta que hace efecto.',
    stats: { hp: 40, attack: 50, defense: 90, specialAttack: 30, specialDefense: 55, speed: 65 },
    moves: [
      { name: 'Acupresión', type: PokemonElementType.normal, power: null, description: 'Aplica presión en puntos clave de su cuerpo o de los aliados para potenciar un parámetro de sus características.' },
      { name: 'Colmillo Veneno', type: PokemonElementType.poison, power: 50, description: 'Colmillos tóxicos que pueden envenenar gravemente al objetivo.' },
      { name: 'Veneno X', type: PokemonElementType.poison, power: 70, description: 'Tajo que puede envenenar al objetivo. Suele ser crítico.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
    ],
  },
  drapion: {
    flavorText: 'Aunque sabe que puede aplastar al rival con su gran fuerza, le gusta dar el golpe de gracia con su virulento veneno.',
    stats: { hp: 70, attack: 90, defense: 110, specialAttack: 60, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'Acupresión', type: PokemonElementType.normal, power: null, description: 'Aplica presión en puntos clave de su cuerpo o de los aliados para potenciar un parámetro de sus características.' },
      { name: 'Colmillo Veneno', type: PokemonElementType.poison, power: 50, description: 'Colmillos tóxicos que pueden envenenar gravemente al objetivo.' },
      { name: 'Veneno X', type: PokemonElementType.poison, power: 70, description: 'Tajo que puede envenenar al objetivo. Suele ser crítico.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
    ],
  },
  croagunk: {
    flavorText: 'Tiene bolsas venenosas en las mejillas. Pilla desprevenidos a sus rivales para pincharles.',
    stats: { hp: 48, attack: 61, defense: 40, specialAttack: 61, specialDefense: 40, speed: 50 },
    moves: [
      { name: 'Bomba Fango', type: PokemonElementType.ground, power: 65, description: 'Ataca lanzando una compacta bola de fango. Puede bajar la Precisión del objetivo.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Camelo', type: PokemonElementType.dark, power: null, description: 'Halaga al objetivo y lo confunde, pero también sube su Ataque Especial.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  toxicroak: {
    flavorText: 'Almacena veneno en una bolsa de la garganta. Cuando croa, este se agita para lograr mayor potencia.',
    stats: { hp: 83, attack: 106, defense: 65, specialAttack: 86, specialDefense: 65, speed: 85 },
    moves: [
      { name: 'Bomba Fango', type: PokemonElementType.ground, power: 65, description: 'Ataca lanzando una compacta bola de fango. Puede bajar la Precisión del objetivo.' },
      { name: 'Picotazo Veneno', type: PokemonElementType.poison, power: 15, description: 'Lanza un aguijón tóxico que puede envenenar al objetivo.' },
      { name: 'Camelo', type: PokemonElementType.dark, power: null, description: 'Halaga al objetivo y lo confunde, pero también sube su Ataque Especial.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  carnivine: {
    flavorText: 'Atrae a sus presas con saliva de olor dulce y las mastica. Tarda todo un día en comérselas.',
    stats: { hp: 74, attack: 100, defense: 72, specialAttack: 90, specialDefense: 72, speed: 46 },
    moves: [
      { name: 'Estrujón', type: PokemonElementType.normal, power: null, description: 'Estruja con fuerza al objetivo. Cuantos más PS tenga el objetivo, más fuerza tendrá el ataque.' },
      { name: 'Látigo Cepa', type: PokemonElementType.grass, power: 45, description: 'Azota al objetivo con ramas finas.' },
      { name: 'Latigazo', type: PokemonElementType.grass, power: 120, description: 'El usuario agita violentamente sus lianas o tentáculos para golpear al objetivo.' },
      { name: 'Escupir', type: PokemonElementType.normal, power: null, description: 'Libera de una vez la energía acumulada con Reserva.' },
    ],
  },
  finneon: {
    flavorText: 'La línea que le recorre el costado puede almacenar luz solar. Brilla con mucha fuerza por la noche.',
    stats: { hp: 49, attack: 49, defense: 56, specialAttack: 49, specialDefense: 61, speed: 66 },
    moves: [
      { name: 'Viento Plata', type: PokemonElementType.bug, power: 60, description: 'Fuerte viento con polvo de escamas. Puede subir todas las características de quien lo usa.' },
      { name: 'Acua Aro', type: PokemonElementType.water, power: null, description: 'Un manto de agua cubre al Pokémon que lo usa. Recupera algunos PS en cada turno.' },
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
    ],
  },
  lumineon: {
    flavorText: 'Vive en las profundidades marinas. Atrae a sus presas con parpadeos del dibujo de sus cuatro aletas.',
    stats: { hp: 69, attack: 69, defense: 76, specialAttack: 69, specialDefense: 86, speed: 91 },
    moves: [
      { name: 'Viento Plata', type: PokemonElementType.bug, power: 60, description: 'Fuerte viento con polvo de escamas. Puede subir todas las características de quien lo usa.' },
      { name: 'Acua Aro', type: PokemonElementType.water, power: null, description: 'Un manto de agua cubre al Pokémon que lo usa. Recupera algunos PS en cada turno.' },
      { name: 'Tornado', type: PokemonElementType.flying, power: 40, description: 'Crea un tornado con las alas y lo lanza contra el objetivo.' },
      { name: 'Destructor', type: PokemonElementType.normal, power: 40, description: 'Golpea con las patas o la cola.' },
    ],
  },
  mantyke: {
    flavorText: 'Los símbolos de su espalda cambian según la región. A veces se mezcla con bancos de Remoraid y nada junto a ellos.',
    stats: { hp: 45, attack: 20, defense: 50, specialAttack: 60, specialDefense: 120, speed: 50 },
    moves: [
      { name: 'Ataque Ala', type: PokemonElementType.flying, power: 60, description: 'Golpea al objetivo con unas grandes alas.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Acua Aro', type: PokemonElementType.water, power: null, description: 'Un manto de agua cubre al Pokémon que lo usa. Recupera algunos PS en cada turno.' },
      { name: 'Supersónico', type: PokemonElementType.normal, power: null, description: 'Raras ondas sónicas que confunden al objetivo.' },
    ],
  },
  snover: {
    flavorText: 'En las estaciones frías baja al pie de la montaña, pero regresa a las cimas nevadas en primavera.',
    stats: { hp: 60, attack: 62, defense: 50, specialAttack: 62, specialDefense: 60, speed: 40 },
    moves: [
      { name: 'Silbato', type: PokemonElementType.grass, power: null, description: 'Agradable melodía que adormece al objetivo.' },
      { name: 'Frío Polar', type: PokemonElementType.ice, power: null, description: 'Ataque de frío polar que debilita al objetivo si le alcanza.' },
      { name: 'Mazazo', type: PokemonElementType.grass, power: 120, description: 'Arremete contra el objetivo con su robusto cuerpo. El agresor también sufre bastante daño.' },
      { name: 'Esquirla Helada', type: PokemonElementType.ice, power: 40, description: 'Crea bolas de hielo y las lanza a gran velocidad. Este movimiento siempre va primero.' },
    ],
  },
  abomasnow: {
    flavorText: 'Genera ventiscas con las que cubre de nieve grandes áreas. Se le llama el Monstruo de Hielo.',
    stats: { hp: 90, attack: 92, defense: 75, specialAttack: 92, specialDefense: 85, speed: 60 },
    moves: [
      { name: 'Silbato', type: PokemonElementType.grass, power: null, description: 'Agradable melodía que adormece al objetivo.' },
      { name: 'Frío Polar', type: PokemonElementType.ice, power: null, description: 'Ataque de frío polar que debilita al objetivo si le alcanza.' },
      { name: 'Mazazo', type: PokemonElementType.grass, power: 120, description: 'Arremete contra el objetivo con su robusto cuerpo. El agresor también sufre bastante daño.' },
      { name: 'Esquirla Helada', type: PokemonElementType.ice, power: 40, description: 'Crea bolas de hielo y las lanza a gran velocidad. Este movimiento siempre va primero.' },
    ],
  },
  weavile: {
    flavorText: 'Vive en zonas nevadas. Deja marcas en los árboles con sus garras para comunicarse con sus compañeros.',
    stats: { hp: 70, attack: 120, defense: 65, specialAttack: 45, specialDefense: 85, speed: 125 },
    moves: [
      { name: 'Golpes Furia', type: PokemonElementType.normal, power: 18, description: 'Araña rápidamente de dos a cinco veces.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
      { name: 'Garra Metal', type: PokemonElementType.steel, power: 50, description: 'Ataque con garras de acero que puede aumentar el Ataque del usuario.' },
      { name: 'Embargo', type: PokemonElementType.dark, power: null, description: 'Impide al objetivo usar el objeto que lleva. Su Entrenador tampoco puede usar objetos con él.' },
    ],
  },
  magnezone: {
    flavorText: 'Emiten campos magnéticos tan potentes que se atraen entre sí e incluso pueden llegar a inmovilizarse.',
    stats: { hp: 70, attack: 70, defense: 115, specialAttack: 130, specialDefense: 90, speed: 60 },
    moves: [
      { name: 'Bomba Imán', type: PokemonElementType.steel, power: 60, description: 'Lanza unas bombas de hierro que se pegan al adversario. No se puede esquivar.' },
      { name: 'Bomba Sónica', type: PokemonElementType.normal, power: null, description: 'Lanza ondas de choque que restan 20 PS al objetivo.' },
      { name: 'Disparo Espejo', type: PokemonElementType.steel, power: 65, description: 'El usuario libera un haz de energía desde su pulido cuerpo. Puede bajar la Precisión.' },
      { name: 'Fijar Blanco', type: PokemonElementType.normal, power: null, description: 'Fija el blanco para que el siguiente ataque no falle.' },
    ],
  },
  lickilicky: {
    flavorText: 'Agarra cosas con su lengua extensible. Si te acercas mucho, te deja lleno de babas.',
    stats: { hp: 110, attack: 85, defense: 95, specialAttack: 80, specialDefense: 95, speed: 50 },
    moves: [
      { name: 'Estrujón', type: PokemonElementType.normal, power: null, description: 'Estruja con fuerza al objetivo. Cuantos más PS tenga el objetivo, más fuerza tendrá el ataque.' },
      { name: 'Yo Primero', type: PokemonElementType.normal, power: null, description: 'Se adelanta al movimiento que pretende usar el objetivo y lo lanza antes con más fuerza. Si el usuario es más lento, falla.' },
      { name: 'Constricción', type: PokemonElementType.normal, power: 15, description: 'Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo.' },
      { name: 'Lengüetazo', type: PokemonElementType.ghost, power: 30, description: 'Una lengua ataca al objetivo. Puede causar parálisis.' },
    ],
  },
  rhyperior: {
    flavorText: 'Lanza Geodude por los agujeros de las manos. Gracias a Protector resiste erupciones volcánicas.',
    stats: { hp: 115, attack: 140, defense: 130, specialAttack: 55, specialDefense: 55, speed: 40 },
    moves: [
      { name: 'Romperrocas', type: PokemonElementType.rock, power: 150, description: 'Lanza una piedra enorme contra el objetivo, pero tiene que descansar el siguiente turno.' },
      { name: 'Cornada', type: PokemonElementType.normal, power: 65, description: 'Ataca al objetivo con una cornada.' },
      { name: 'Perforador', type: PokemonElementType.normal, power: null, description: 'Ataque con taladro que fulmina en un golpe al objetivo si le toca.' },
      { name: 'Megacuerno', type: PokemonElementType.bug, power: 120, description: 'Violenta embestida con cuernos imponentes.' },
    ],
  },
  tangrowth: {
    flavorText: 'Atrapa a su presa desplegando las ramas de sus brazos, que no le importa perder ante depredadores.',
    stats: { hp: 100, attack: 100, defense: 125, specialAttack: 110, specialDefense: 50, speed: 50 },
    moves: [
      { name: 'Restricción', type: PokemonElementType.normal, power: 10, description: 'Constriñe para herir y puede bajar la Velocidad.' },
      { name: 'Estrujón', type: PokemonElementType.normal, power: null, description: 'Estruja con fuerza al objetivo. Cuantos más PS tenga el objetivo, más fuerza tendrá el ataque.' },
      { name: 'Látigo Cepa', type: PokemonElementType.grass, power: 45, description: 'Azota al objetivo con ramas finas.' },
      { name: 'Somnífero', type: PokemonElementType.grass, power: null, description: 'Esparce polvo que duerme al objetivo.' },
    ],
  },
  electivire: {
    flavorText: 'Al almacenar mucha electricidad, desprende chispas de una claridad increíble entre sus dos cuernos.',
    stats: { hp: 75, attack: 123, defense: 67, specialAttack: 95, specialDefense: 85, speed: 95 },
    moves: [
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
      { name: 'Ataque Rápido', type: PokemonElementType.normal, power: 40, description: 'Ataque rápido que permite golpear en primer lugar.' },
      { name: 'Puño Fuego', type: PokemonElementType.fire, power: 75, description: 'Puñetazo ardiente. Puede quemar.' },
    ],
  },
  magmortar: {
    flavorText: 'Sus brazos disparan bolas de fuego de más de 2000 °C. Vive en cráteres volcánicos.',
    stats: { hp: 75, attack: 95, defense: 67, specialAttack: 125, specialDefense: 95, speed: 83 },
    moves: [
      { name: 'Humareda', type: PokemonElementType.fire, power: 80, description: 'Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar.' },
      { name: 'Polución', type: PokemonElementType.poison, power: 30, description: 'El objetivo es atacado con gases tóxicos que pueden llegar a envenenar.' },
      { name: 'Pantalla de Humo', type: PokemonElementType.normal, power: null, description: 'Baja la Precisión del objetivo con una nube de humo o tinta.' },
      { name: 'Ascuas', type: PokemonElementType.fire, power: 40, description: 'Ataca con llamas pequeñas que pueden causar quemaduras.' },
    ],
  },
  togekiss: {
    flavorText: 'Se dice que aparece en zonas pacíficas y las bendice con sus dones.',
    stats: { hp: 85, attack: 50, defense: 95, specialAttack: 120, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Esfera Aural', type: PokemonElementType.fighting, power: 80, description: 'Libera una descarga de la fuerza del aura desde su interior. Es infalible.' },
      { name: 'Ataque Aéreo', type: PokemonElementType.flying, power: 140, description: 'Ataque en dos turnos que suele ser crítico. Puede hacer retroceder al objetivo.' },
      { name: 'Tajo Aéreo', type: PokemonElementType.flying, power: 75, description: 'Ataca con una hoja de aire que incluso corta el cielo. También puede hacer retroceder al objetivo.' },
    ],
  },
  yanmega: {
    flavorText: 'Su técnica favorita consiste en volar a gran velocidad y despedazar con su mandíbula a su oponente en un instante.',
    stats: { hp: 86, attack: 76, defense: 86, specialAttack: 116, specialDefense: 56, speed: 95 },
    moves: [
      { name: 'Bomba Sónica', type: PokemonElementType.normal, power: null, description: 'Lanza ondas de choque que restan 20 PS al objetivo.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Zumbido', type: PokemonElementType.bug, power: 90, description: 'El movimiento de las alas crea una onda sónica dañina. También puede disminuir la Defensa Especial del objetivo.' },
      { name: 'Supersónico', type: PokemonElementType.normal, power: null, description: 'Raras ondas sónicas que confunden al objetivo.' },
    ],
  },
  leafeon: {
    flavorText: 'En días soleados duerme y hace la fotosíntesis, emitiendo aire puro a su alrededor.',
    stats: { hp: 65, attack: 110, defense: 130, specialAttack: 60, specialDefense: 65, speed: 95 },
    moves: [
      { name: 'Silbato', type: PokemonElementType.grass, power: null, description: 'Agradable melodía que adormece al objetivo.' },
      { name: 'Hoja Aguda', type: PokemonElementType.grass, power: 90, description: 'Acuchilla con una hoja fina. Suele dar un golpe crítico.' },
      { name: 'Hoja Afilada', type: PokemonElementType.grass, power: 55, description: 'Corta con hojas afiladas. Suele ser crítico.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
    ],
  },
  glaceon: {
    flavorText: 'Controla su temperatura corporal para congelar el ambiente y causar ráfagas de nieve en polvo.',
    stats: { hp: 65, attack: 60, defense: 110, specialAttack: 130, specialDefense: 95, speed: 65 },
    moves: [
      { name: 'Barrera', type: PokemonElementType.psychic, power: null, description: 'Crea una barrera que aumenta mucho la Defensa.' },
      { name: 'Esquirla Helada', type: PokemonElementType.ice, power: 40, description: 'Crea bolas de hielo y las lanza a gran velocidad. Este movimiento siempre va primero.' },
      { name: 'Manto Espejo', type: PokemonElementType.psychic, power: null, description: 'Responde a un ataque especial ocasionando el doble del daño recibido.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
    ],
  },
  gliscor: {
    flavorText: 'Espera a sus presas colgado de una rama bocabajo. Cuando llega su oportunidad, se lanza en picado.',
    stats: { hp: 75, attack: 95, defense: 125, specialAttack: 45, specialDefense: 75, speed: 95 },
    moves: [
      { name: 'Guillotina', type: PokemonElementType.normal, power: null, description: 'Ataque con pinzas que debilita al oponente de un golpe si acierta.' },
      { name: 'Fortaleza', type: PokemonElementType.normal, power: null, description: 'Tensa la musculatura del usuario para aumentar la Defensa.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
      { name: 'Ataque Arena', type: PokemonElementType.ground, power: null, description: 'Arroja arena a la cara y baja la Precisión.' },
    ],
  },
  mamoswine: {
    flavorText: 'Ya existía en la antigüedad. Se encontró uno bajo hielo de hace más de 10 000 años.',
    stats: { hp: 110, attack: 130, defense: 80, specialAttack: 70, specialDefense: 60, speed: 80 },
    moves: [
      { name: 'Bomba Fango', type: PokemonElementType.ground, power: 65, description: 'Ataca lanzando una compacta bola de fango. Puede bajar la Precisión del objetivo.' },
      { name: 'Nieve Polvo', type: PokemonElementType.ice, power: 40, description: 'Lanza nieve que puede llegar a congelar.' },
      { name: 'Rastreo', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Chapoteo Lodo', type: PokemonElementType.ground, power: null, description: 'El usuario esparce lodo a su alrededor, lo que debilita los movimientos de tipo Eléctrico durante cinco turnos.' },
    ],
  },
  porygonZ: {
    flavorText: 'Se le instaló un software para mejorarlo. Sin embargo, comenzó a comportarse de manera extraña.',
    stats: { hp: 85, attack: 80, defense: 70, specialAttack: 135, specialDefense: 75, speed: 90 },
    moves: [
      { name: 'Conversión', type: PokemonElementType.normal, power: null, description: 'Cambia el tipo del usuario por el del primero de sus movimientos.' },
      { name: 'Conversión 2', type: PokemonElementType.normal, power: null, description: 'El usuario cambia de tipo para hacerse resistente al último tipo de movimiento usado por el objetivo.' },
      { name: 'Fijar Blanco', type: PokemonElementType.normal, power: null, description: 'Fija el blanco para que el siguiente ataque no falle.' },
      { name: 'Triataque', type: PokemonElementType.normal, power: 80, description: 'Ataque triple que puede paralizar, quemar o congelar al objetivo.' },
    ],
  },
  gallade: {
    flavorText: 'Puede presentir los movimientos de sus rivales y por eso ataca siempre antes que ellos.',
    stats: { hp: 68, attack: 125, defense: 65, specialAttack: 65, specialDefense: 115, speed: 80 },
    moves: [
      { name: 'Hoja Aguda', type: PokemonElementType.grass, power: 90, description: 'Acuchilla con una hoja fina. Suele dar un golpe crítico.' },
      { name: 'Teletransporte', type: PokemonElementType.psychic, power: null, description: 'Permite huir al instante de combates contra Pokémon salvajes o viajar al último Centro Pokémon visitado.' },
      { name: 'Psicocorte', type: PokemonElementType.psychic, power: 70, description: 'Ataca al objetivo con cuchillas formadas por energía psíquica. Suele ser crítico.' },
      { name: 'Amago', type: PokemonElementType.normal, power: 30, description: 'Permite golpear a objetivos que usan Protección o Detección y anula dichos movimientos.' },
    ],
  },
  probopass: {
    flavorText: 'Emana un fuerte magnetismo. Controla tres pequeñas unidades llamadas mininarices.',
    stats: { hp: 60, attack: 55, defense: 145, specialAttack: 75, specialDefense: 150, speed: 40 },
    moves: [
      { name: 'Bomba Imán', type: PokemonElementType.steel, power: 60, description: 'Lanza unas bombas de hierro que se pegan al adversario. No se puede esquivar.' },
      { name: 'Fijar Blanco', type: PokemonElementType.normal, power: null, description: 'Fija el blanco para que el siguiente ataque no falle.' },
      { name: 'Electrocañón', type: PokemonElementType.electric, power: 120, description: 'Dispara una descarga eléctrica que causa daño y parálisis.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
    ],
  },
  dusknoir: {
    flavorText: 'Se dice que recoge en su cuerpo flexible a los espíritus extraviados y los guía hasta casa.',
    stats: { hp: 45, attack: 100, defense: 135, specialAttack: 65, specialDefense: 135, speed: 45 },
    moves: [
      { name: 'Puño Sombra', type: PokemonElementType.ghost, power: 60, description: 'Puñetazo ineludible procedente de las sombras.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Mal de Ojo', type: PokemonElementType.normal, power: null, description: 'Mal de ojo que impide al objetivo huir de la batalla.' },
      { name: 'Sombra Vil', type: PokemonElementType.ghost, power: 40, description: 'Extiende su sombra y ataca al objetivo por la espalda. Este movimiento siempre va primero.' },
    ],
  },
  froslass: {
    flavorText: 'Congela a sus enemigos con un aliento gélido de -50 °C. Su cuerpo está hueco.',
    stats: { hp: 70, attack: 80, defense: 70, specialAttack: 80, specialDefense: 70, speed: 110 },
    moves: [
      { name: 'Espabila', type: PokemonElementType.fighting, power: 70, description: 'Inflige gran daño a objetivos dormidos. Sin embargo, los bofetones también los despiertan.' },
      { name: 'Esquirla Helada', type: PokemonElementType.ice, power: 40, description: 'Crea bolas de hielo y las lanza a gran velocidad. Este movimiento siempre va primero.' },
      { name: 'Nieve Polvo', type: PokemonElementType.ice, power: 40, description: 'Lanza nieve que puede llegar a congelar.' },
      { name: 'Mismo Destino', type: PokemonElementType.ghost, power: null, description: 'Si el usuario se debilita por un ataque rival antes de usar otro movimiento, el Pokémon rival se debilitará también.' },
    ],
  },
  rotom: {
    flavorText: 'Desde hace mucho tiempo se estudia su singular motor como fuente de energía motriz.',
    stats: { hp: 50, attack: 50, defense: 77, specialAttack: 95, specialDefense: 77, speed: 91 },
    moves: [
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Viento Aciago', type: PokemonElementType.ghost, power: 60, description: 'Produce un viento horripilante. Puede subir de golpe todas las características del usuario.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
    ],
  },
  rotom_fan: {
    flavorText: 'Desde hace mucho tiempo se estudia su singular motor como fuente de energía motriz.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Viento Aciago', type: PokemonElementType.ghost, power: 60, description: 'Produce un viento horripilante. Puede subir de golpe todas las características del usuario.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
    ],
  },
  rotom_frost: {
    flavorText: 'Desde hace mucho tiempo se estudia su singular motor como fuente de energía motriz.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Viento Aciago', type: PokemonElementType.ghost, power: 60, description: 'Produce un viento horripilante. Puede subir de golpe todas las características del usuario.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
    ],
  },
  rotom_heat: {
    flavorText: 'Desde hace mucho tiempo se estudia su singular motor como fuente de energía motriz.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Viento Aciago', type: PokemonElementType.ghost, power: 60, description: 'Produce un viento horripilante. Puede subir de golpe todas las características del usuario.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
    ],
  },
  rotom_mow: {
    flavorText: 'Desde hace mucho tiempo se estudia su singular motor como fuente de energía motriz.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Viento Aciago', type: PokemonElementType.ghost, power: 60, description: 'Produce un viento horripilante. Puede subir de golpe todas las características del usuario.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
    ],
  },
  rotom_wash: {
    flavorText: 'Desde hace mucho tiempo se estudia su singular motor como fuente de energía motriz.',
    stats: { hp: 50, attack: 65, defense: 107, specialAttack: 105, specialDefense: 107, speed: 86 },
    moves: [
      { name: 'Impactrueno', type: PokemonElementType.electric, power: 40, description: 'Ataque eléctrico que puede paralizar al objetivo.' },
      { name: 'Carga', type: PokemonElementType.electric, power: null, description: 'Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial.' },
      { name: 'Viento Aciago', type: PokemonElementType.ghost, power: 60, description: 'Produce un viento horripilante. Puede subir de golpe todas las características del usuario.' },
      { name: 'Chispazo', type: PokemonElementType.electric, power: 80, description: 'Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar.' },
    ],
  },
  uxie: {
    flavorText: 'Se le conoce como el Ser de la Sabiduría. Se dice que puede borrar la memoria con una mirada.',
    stats: { hp: 75, attack: 75, defense: 130, specialAttack: 75, specialDefense: 130, speed: 95 },
    moves: [
      { name: 'Legado', type: PokemonElementType.dark, power: null, description: 'El usuario se debilita, pero baja mucho tanto el Ataque como el Ataque Especial del objetivo.' },
      { name: 'Paranormal', type: PokemonElementType.psychic, power: 80, description: 'Energía muy extraña que puede hacer retroceder al objetivo.' },
      { name: 'Bostezo', type: PokemonElementType.normal, power: null, description: 'Gran bostezo que induce al sueño al objetivo en el siguiente turno.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
    ],
  },
  mesprit: {
    flavorText: 'Se le conoce como el Ser de la Emoción. Enseñó a los humanos la nobleza del dolor y la alegría.',
    stats: { hp: 80, attack: 105, defense: 105, specialAttack: 105, specialDefense: 105, speed: 80 },
    moves: [
      { name: 'Deseo Cura', type: PokemonElementType.psychic, power: null, description: 'El Pokémon cae debilitado, pero su sustituto recupera su estado y los PS.' },
      { name: 'Conjuro', type: PokemonElementType.normal, power: null, description: 'Lanza al cielo un conjuro que impide al objetivo asestar golpes críticos.' },
      { name: 'Paranormal', type: PokemonElementType.psychic, power: 80, description: 'Energía muy extraña que puede hacer retroceder al objetivo.' },
      { name: 'Copión', type: PokemonElementType.normal, power: null, description: 'Imita el movimiento usado justo antes. El movimiento falla si no se ha usado aún ninguno.' },
    ],
  },
  azelf: {
    flavorText: 'Se le conoce como el Ser de la Voluntad. Duerme en el fondo de un lago para equilibrar el mundo.',
    stats: { hp: 75, attack: 125, defense: 70, specialAttack: 125, specialDefense: 70, speed: 115 },
    moves: [
      { name: 'Paranormal', type: PokemonElementType.psychic, power: 80, description: 'Energía muy extraña que puede hacer retroceder al objetivo.' },
      { name: 'Explosión', type: PokemonElementType.normal, power: 250, description: 'El atacante causa una grandísima explosión y hiere a todos a su alrededor. El usuario se debilita de inmediato.' },
      { name: 'Confusión', type: PokemonElementType.psychic, power: 50, description: 'Débil ataque telequinético que puede causar confusión.' },
      { name: 'Premonición', type: PokemonElementType.psychic, power: 120, description: 'Concentra energía psíquica para golpear al objetivo dos turnos después.' },
    ],
  },
  dialga: {
    flavorText: 'Un Pokémon de leyenda. Se dice que el tiempo comenzó a avanzar cuando Dialga nació.',
    stats: { hp: 100, attack: 120, defense: 120, specialAttack: 150, specialDefense: 100, speed: 90 },
    moves: [
      { name: 'Distorsión', type: PokemonElementType.dragon, power: 150, description: 'Ataca al objetivo usando tal energía que el tiempo se distorsiona. El usuario descansa el siguiente turno.' },
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Impide al objetivo usar movimientos, habilidades y objetos equipados que recuperan PS durante cinco turnos.' },
      { name: 'Esfera Aural', type: PokemonElementType.fighting, power: 80, description: 'Libera una descarga de la fuerza del aura desde su interior. Es infalible.' },
      { name: 'Dragoaliento', type: PokemonElementType.dragon, power: 60, description: 'Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo.' },
    ],
  },
  palkia: {
    flavorText: 'Se dice que vive en una dimensión espacial paralela. Aparece en la mitología.',
    stats: { hp: 90, attack: 120, defense: 100, specialAttack: 150, specialDefense: 120, speed: 100 },
    moves: [
      { name: 'Corte Vacío', type: PokemonElementType.dragon, power: 100, description: 'Desgarra al objetivo y el espacio a su alrededor. Suele ser crítico.' },
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Impide al objetivo usar movimientos, habilidades y objetos equipados que recuperan PS durante cinco turnos.' },
      { name: 'Esfera Aural', type: PokemonElementType.fighting, power: 80, description: 'Libera una descarga de la fuerza del aura desde su interior. Es infalible.' },
      { name: 'Dragoaliento', type: PokemonElementType.dragon, power: 60, description: 'Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo.' },
    ],
  },
  heatran: {
    flavorText: 'Habita cuevas volcánicas. Cava con sus pies en forma de cruz para trepar por techos y paredes.',
    stats: { hp: 91, attack: 90, defense: 106, specialAttack: 130, specialDefense: 106, speed: 77 },
    moves: [
      { name: 'Lluvia Ígnea', type: PokemonElementType.fire, power: 100, description: 'El objetivo queda atrapado en una tormenta de fuego que dura de cuatro a cinco turnos.' },
      { name: 'Humareda', type: PokemonElementType.fire, power: 80, description: 'Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar.' },
      { name: 'Eco Metálico', type: PokemonElementType.steel, power: null, description: 'Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo.' },
      { name: 'Giro Fuego', type: PokemonElementType.fire, power: 35, description: 'Un aro de fuego que atrapa al objetivo de cuatro a cinco turnos.' },
    ],
  },
  regigigas: {
    flavorText: 'Se dice que usó rocas, magma y un hielo especial de montaña para crear Pokémon con su aspecto.',
    stats: { hp: 110, attack: 160, defense: 110, specialAttack: 80, specialDefense: 110, speed: 100 },
    moves: [
      { name: 'Agarrón', type: PokemonElementType.normal, power: null, description: 'Estruja al objetivo con gran fuerza. Cuantos más PS le queden al objetivo, más fuerte será el ataque.' },
      { name: 'Puño Mareo', type: PokemonElementType.normal, power: 70, description: 'Rítmicos puñetazos que pueden causar confusión.' },
      { name: 'Profecía', type: PokemonElementType.normal, power: null, description: 'Permite atacar con cualquier movimiento a objetivos de tipo Fantasma y golpear a Pokémon evasivos.' },
      { name: 'Desquite', type: PokemonElementType.fighting, power: 60, description: 'Ataque que produce el doble de daño si el usuario es herido en el mismo turno.' },
    ],
  },
  giratina: {
    flavorText: 'Vive en el Mundo Distorsión, un mundo opuesto al nuestro y cuyas leyes desafían el sentido común.',
    stats: { hp: 150, attack: 100, defense: 120, specialAttack: 100, specialDefense: 120, speed: 90 },
    moves: [
      { name: 'Golpe Umbrío', type: PokemonElementType.ghost, power: 120, description: 'En el primer turno, desaparece. En el segundo, golpea al objetivo aunque se esté protegiendo.' },
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Impide al objetivo usar movimientos, habilidades y objetos equipados que recuperan PS durante cinco turnos.' },
      { name: 'Esfera Aural', type: PokemonElementType.fighting, power: 80, description: 'Libera una descarga de la fuerza del aura desde su interior. Es infalible.' },
      { name: 'Dragoaliento', type: PokemonElementType.dragon, power: 60, description: 'Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo.' },
    ],
  },
  giratina_origin: {
    flavorText: 'Vive en el Mundo Distorsión, un mundo opuesto al nuestro y cuyas leyes desafían el sentido común.',
    stats: { hp: 150, attack: 120, defense: 100, specialAttack: 120, specialDefense: 100, speed: 90 },
    moves: [
      { name: 'Golpe Umbrío', type: PokemonElementType.ghost, power: 120, description: 'En el primer turno, desaparece. En el segundo, golpea al objetivo aunque se esté protegiendo.' },
      { name: 'Anticura', type: PokemonElementType.psychic, power: null, description: 'Impide al objetivo usar movimientos, habilidades y objetos equipados que recuperan PS durante cinco turnos.' },
      { name: 'Esfera Aural', type: PokemonElementType.fighting, power: 80, description: 'Libera una descarga de la fuerza del aura desde su interior. Es infalible.' },
      { name: 'Dragoaliento', type: PokemonElementType.dragon, power: 60, description: 'Poderosa ráfaga de aliento que golpea al objetivo y puede paralizarlo.' },
    ],
  },
  cresselia: {
    flavorText: 'Sus alas emiten un velo de partículas brillantes. Se dice que representa un cuarto lunar.',
    stats: { hp: 120, attack: 70, defense: 110, specialAttack: 75, specialDefense: 120, speed: 85 },
    moves: [
      { name: 'Danza Lunar', type: PokemonElementType.psychic, power: null, description: 'El usuario se debilita, pero el Pokémon que lo sustituye recupera su estado, los PS y los PP.' },
      { name: 'Psicocambio', type: PokemonElementType.psychic, power: null, description: 'Usa su poder mental para transferir al objetivo sus problemas de estado.' },
      { name: 'Luz Lunar', type: PokemonElementType.normal, power: null, description: 'Restaura PS del usuario. La cantidad varía según el tiempo que haga.' },
      { name: 'Rayo Aurora', type: PokemonElementType.ice, power: 65, description: 'Rayo multicolor que puede reducir el Ataque.' },
    ],
  },
  phione: {
    flavorText: 'Si sube la temperatura del mar, infla el flotador de su cabeza y flota en grupo en la superficie.',
    stats: { hp: 80, attack: 80, defense: 80, specialAttack: 80, specialDefense: 80, speed: 80 },
    moves: [
      { name: 'Armadura Ácida', type: PokemonElementType.poison, power: null, description: 'Transforma la estructura celular para hacerse líquido y aumenta mucho la Defensa.' },
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
      { name: 'Burbuja', type: PokemonElementType.water, power: 40, description: 'Lanza burbujas a los contrincantes y puede reducir su Velocidad.' },
      { name: 'Acua Aro', type: PokemonElementType.water, power: null, description: 'Un manto de agua cubre al Pokémon que lo usa. Recupera algunos PS en cada turno.' },
    ],
  },
  manaphy: {
    flavorText: 'Posee un poder singular que hace que entable amistad con casi cualquier Pokémon.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Cambiaalmas', type: PokemonElementType.psychic, power: null, description: 'Usa la fuerza mental para intercambiar con el objetivo los cambios en las características.' },
      { name: 'Luminicola', type: PokemonElementType.bug, power: null, description: 'Se concentra en una ráfaga de luz que sube muchísimo el Ataque Especial.' },
      { name: 'Armadura Ácida', type: PokemonElementType.poison, power: null, description: 'Transforma la estructura celular para hacerse líquido y aumenta mucho la Defensa.' },
      { name: 'Hidrochorro', type: PokemonElementType.water, power: null, description: 'El usuario se empapa en agua, lo que debilita los movimientos de tipo Fuego durante cinco turnos.' },
    ],
  },
  darkrai: {
    flavorText: 'Defiende su territorio de personas y Pokémon haciéndoles dormir y provocándoles pesadillas.',
    stats: { hp: 70, attack: 90, defense: 90, specialAttack: 135, specialDefense: 90, speed: 125 },
    moves: [
      { name: 'Brecha Negra', type: PokemonElementType.dark, power: null, description: 'El objetivo es enviado a un mundo de tinieblas que lo hace dormir.' },
      { name: 'Pesadilla', type: PokemonElementType.ghost, power: null, description: 'El objetivo dormido sufre una pesadilla que le hace perder PS en cada turno.' },
      { name: 'Hipnosis', type: PokemonElementType.psychic, power: null, description: 'Ataque hipnótico que hace dormir profundamente al objetivo.' },
      { name: 'Finta', type: PokemonElementType.dark, power: 60, description: 'Engaña al objetivo para acercarse y dar un puñetazo que no falla.' },
    ],
  },
  shaymin: {
    flavorText: 'Puede disolver las toxinas del aire para transformar tierra yerma en campos de flores.',
    stats: { hp: 100, attack: 100, defense: 100, specialAttack: 100, specialDefense: 100, speed: 100 },
    moves: [
      { name: 'Fulgor Semilla', type: PokemonElementType.grass, power: 120, description: 'Una onda de choque se libera del cuerpo. Puede bajar mucho la Defensa Especial del objetivo.' },
      { name: 'Deseo Cura', type: PokemonElementType.psychic, power: null, description: 'El Pokémon cae debilitado, pero su sustituto recupera su estado y los PS.' },
      { name: 'Beso Dulce', type: PokemonElementType.normal, power: null, description: 'Da un beso con tal dulzura que causa confusión.' },
      { name: 'Aromaterapia', type: PokemonElementType.grass, power: null, description: 'Cura todos los problemas de estado del equipo con un suave aroma.' },
    ],
  },
  shaymin_sky: {
    flavorText: 'Puede disolver las toxinas del aire para transformar tierra yerma en campos de flores.',
    stats: { hp: 100, attack: 103, defense: 75, specialAttack: 120, specialDefense: 75, speed: 127 },
    moves: [
      { name: 'Fulgor Semilla', type: PokemonElementType.grass, power: 120, description: 'Una onda de choque se libera del cuerpo. Puede bajar mucho la Defensa Especial del objetivo.' },
      { name: 'Beso Dulce', type: PokemonElementType.normal, power: null, description: 'Da un beso con tal dulzura que causa confusión.' },
      { name: 'Desarrollo', type: PokemonElementType.normal, power: null, description: 'El cuerpo del usuario crece a marchas forzadas y aumenta el Ataque y el Ataque Especial.' },
      { name: 'Dulce Aroma', type: PokemonElementType.normal, power: null, description: 'Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión. En la hierba alta sirve para atraer a Pokémon salvajes.' },
    ],
  },
  arceus: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_bug: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_dark: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_dragon: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_electric: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_fighting: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_fire: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_flying: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_ghost: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_grass: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_ground: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_ice: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_poison: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_psychic: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_rock: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_steel: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
  arceus_water: {
    flavorText: 'Según la mitología de Sinnoh, Arceus surgió de un huevo y después creó todo el mundo.',
    stats: { hp: 120, attack: 120, defense: 120, specialAttack: 120, specialDefense: 120, speed: 120 },
    moves: [
      { name: 'Sentencia', type: PokemonElementType.normal, power: 100, description: 'Emite incontables haces de luz. Varía según el tipo de tabla que lleve el usuario.' },
      { name: 'Velocidad Extrema', type: PokemonElementType.normal, power: 80, description: 'Ataque muy rápido que siempre se realiza el primero.' },
      { name: 'Castigo', type: PokemonElementType.dark, power: null, description: 'La fuerza del ataque aumenta cuanto más se ha fortalecido el objetivo con cambios de características.' },
      { name: 'Canto Mortal', type: PokemonElementType.normal, power: null, description: 'Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose.' },
    ],
  },
}
