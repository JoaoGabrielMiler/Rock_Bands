// src/data/bands.ts
export type Band = {
  id: string;
  name: string;
  genre: string;
  origin: string;
  formedIn: number;
  image: string;        // URL remota
  topSongs: string[];
  description: string;
};

export const BANDS: Band[] = [
  {
    id: 'acdc',
    name: 'AC/DC',
    genre: 'Hard Rock',
    origin: 'Sydney, AUS',
    formedIn: 1973,
    image: 'https://m.media-amazon.com/images/I/614xzd0VDvL._AC_SL1500_.jpg',
    topSongs: ['Back In Black', 'Highway to Hell', 'Thunderstruck'],
    description: 'Ícones do hard rock, riffs marcantes e energia ao vivo absurda.'
  },
  {
    id: 'metallica',
    name: 'Metallica',
    genre: 'Heavy Metal',
    origin: 'Los Angeles, EUA',
    formedIn: 1981,
    image: 'https://i.pinimg.com/736x/61/45/34/61453419e45be0347680501d626bfb60.jpg',
    topSongs: ['Enter Sandman', 'One', 'Master of Puppets'],
    description: 'Uma das bandas mais influentes do metal, som pesado e melódico.'
  },
  {
    id: 'led-zeppelin',
    name: 'Led Zeppelin',
    genre: 'Rock',
    origin: 'Londres, UK',
    formedIn: 1968,
    image: 'https://i.pinimg.com/1200x/02/d9/87/02d98708d65b06c6a9f330e60f037cff.jpg',
    topSongs: ['Stairway to Heaven', 'Whole Lotta Love', 'Kashmir'],
    description: 'Pioneiros do rock pesado e blues rock com experimentalismo.'
  },
  {
    id: 'pink-floyd',
    name: 'Pink Floyd',
    genre: 'Progressive Rock',
    origin: 'Londres, UK',
    formedIn: 1965,
    image: 'https://i.pinimg.com/736x/f3/cc/6a/f3cc6a996da0f843293d4f43f5a09104.jpg',
    topSongs: ['Comfortably Numb', 'Wish You Were Here', 'Time'],
    description: 'Clássicos do rock progressivo, álbuns conceituais e shows imersivos.'
  },
  {
    id: 'queen',
    name: 'Queen',
    genre: 'Rock',
    origin: 'Londres, UK',
    formedIn: 1970,
    image: 'https://i.pinimg.com/736x/1f/65/1c/1f651cfab13f513f2b2774082b1a4521.jpg',
    topSongs: ['Bohemian Rhapsody', 'We Will Rock You', 'Don’t Stop Me Now'],
    description: 'Mistura única de estilos, vocal lendário de Freddie Mercury.'
  },
  {
    id: 'nirvana',
    name: 'Nirvana',
    genre: 'Grunge',
    origin: 'Aberdeen, EUA',
    formedIn: 1987,
    image: 'https://i.pinimg.com/736x/53/65/26/5365268cb5b0b4b6d4e123eb7e24dfff.jpg',
    topSongs: ['Smells Like Teen Spirit', 'Come As You Are', 'Lithium'],
    description: 'Símbolo do grunge dos anos 90, som cru e direto.'
  },
  {
    id: 'gnr',
    name: "Guns N' Roses",
    genre: 'Hard Rock',
    origin: 'Los Angeles, EUA',
    formedIn: 1985,
    image: 'https://i.pinimg.com/736x/a1/2d/f5/a12df5adfa1e4b75824fba32938ff727.jpg',
    topSongs: ['Sweet Child O’ Mine', 'November Rain', 'Welcome to the Jungle'],
    description: 'Hard rock com pegada blues e baladas épicas.'
  },
  {
    id: 'iron-maiden',
    name: 'Iron Maiden',
    genre: 'Heavy Metal',
    origin: 'Londres, UK',
    formedIn: 1975,
    image: 'https://i.pinimg.com/736x/5e/6e/20/5e6e2016359664042e12e40968f91640.jpg',
    topSongs: ['The Trooper', 'Fear of the Dark', 'Hallowed Be Thy Name'],
    description: 'Metal com melodias de guitarra marcantes e temas épicos.'
},
{
    id: 'rolling-stones',
    name: 'The Rolling Stones',
    genre: 'Rock',
    origin: 'Londres, UK',
    formedIn: 1962,
    image: 'https://i.pinimg.com/1200x/c5/3c/2b/c53c2b21f7a3679407223cd8340029be.jpg',
    topSongs: ['Paint It Black', '(I Can’t Get No) Satisfaction', 'Gimme Shelter'],
    description: 'Lendas do rock, atitude e longevidade impressionantes.'
},
{
    id: 'foo-fighters',
    name: 'Foo Fighters',
    genre: 'Alternative Rock',
    origin: 'Seattle, EUA',
    formedIn: 1994,
    image: 'https://i.pinimg.com/736x/11/89/2d/11892d3d41b7c47d15089d61b65a03b9.jpg',
    topSongs: ['Everlong', 'Best of You', 'The Pretender'],
    description: 'Rock alternativo com refrões fortes e energia de shows.'
},
{
  id: 'angra',
  name: 'Angra',
  genre: 'Power / Progressive Metal',
  origin: 'São Paulo, BRA',
  formedIn: 1991,
  image: 'https://i.pinimg.com/1200x/2a/58/64/2a58644bc43961746c2237493115352a.jpg',
  topSongs: ['Carry On', 'Nova Era', 'Rebirth'],
  description: 'Power/prog metal brasileiro com melodias épicas e técnica apurada.'
},
{
  id: 'avantasia',
  name: 'Avantasia',
  genre: 'Symphonic / Power Metal',
  origin: 'Alemanha',
  formedIn: 1999,
  image: 'https://i.pinimg.com/1200x/0a/fc/27/0afc274243fa7bbee1afe6a44c9f7d35.jpg',
  topSongs: ['The Scarecrow', 'Dying for an Angel', 'Lost in Space'],
  description: 'Projeto “metal opera” de Tobias Sammet, com participações de vários vocalistas e clima sinfônico.'
},
{
  id: 'black-label-society',
  name: 'Black Label Society',
  genre: 'Heavy Metal',
  origin: 'Los Angeles, EUA',
  formedIn: 1998,
  image: 'https://i.pinimg.com/736x/70/5e/6d/705e6d351e9e0211f63905f6e6251abf.jpg',
  topSongs: ['Stillborn', 'In This River', 'Suicide Messiah'],
  description: 'Peso, riffs gordos e o timbre de Zakk Wylde.'
},
{
  id: 'blink-182',
  name: 'Blink-182',
  genre: 'Pop Punk',
  origin: 'Poway, EUA',
  formedIn: 1992,
  image: 'https://i.pinimg.com/736x/ba/9f/09/ba9f09c5cd837f67279029bc625e5b3d.jpg',
  topSongs: ['All the Small Things', "What\'s My Age Again?", 'I Miss You'],
  description: 'Pop punk acelerado com refrões grudentos.'
},
{
  id: 'green-day',
  name: 'Green Day',
  genre: 'Punk Rock',
  origin: 'Rodeo (East Bay), EUA',
  formedIn: 1987,
  image: 'https://i.pinimg.com/1200x/88/03/d7/8803d7ec675006ca7c23d244b7ff0104.jpg',
  topSongs: ['Basket Case', 'American Idiot', 'Boulevard of Broken Dreams'],
  description: 'Punk californiano que levou o gênero ao mainstream.'
},
{
  id: 'helloween',
  name: 'Helloween',
  genre: 'Power Metal',
  origin: 'Hamburgo, Alemanha',
  formedIn: 1984,
  image: 'https://i.pinimg.com/736x/d8/64/4e/d8644e0ae85afdb94679d7b7f1aaa7ed.jpg',
  topSongs: ['I Want Out', 'Eagle Fly Free', 'Future World'],
  description: 'Pioneiros do power metal melódico.'
},
{
  id: 'five-finger-death-punch',
  name: 'Five Finger Death Punch',
  genre: 'Heavy Metal',
  origin: 'Las Vegas, EUA',
  formedIn: 2005,
  image: 'https://i.pinimg.com/1200x/0a/c4/8a/0ac48af3d4b736f5fc91f7f6e5cc1f4b.jpg',
  topSongs: ['The Bleeding', 'Wrong Side of Heaven', 'Jekyll and Hyde'],
  description: 'Groove metal moderno, refrões massivos e peso radiofônico.'
},
{
  id: 'rhapsody-of-fire',
  name: 'Rhapsody (Rhapsody of Fire)',
  genre: 'Symphonic / Power Metal',
  origin: 'Trieste, ITA',
  formedIn: 1993,
  image: 'https://i.pinimg.com/736x/d3/4d/15/d34d1552e2dc4cd0869ce23971607142.jpg',
  topSongs: ['Emerald Sword', 'Dawn of Victory', 'Power of the Dragonflame'],
  description: 'Power metal sinfônico com temática de fantasia e orquestrações épicas.'
},
{
  id: 'shaman',
  name: 'Shaman',
  genre: 'Power / Progressive Metal',
  origin: 'São Paulo, BRA',
  formedIn: 2000,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzSEKGVD2PGmjM0H6H8IOV7Qwob4obdfSVTg&s',
  topSongs: ['Fairy Tale', 'For Tomorrow', 'Here I Am'],
  description: 'Supergrupo brasileiro com pegada prog e toques sinfônicos.'
},
{
  id: 'linkin-park',
  name: 'Linkin Park',
  genre: 'Alternative Rock / Nu Metal',
  origin: 'Agoura Hills, EUA',
  formedIn: 1996,
  image: 'https://kandyvinylshop.com/cdn/shop/products/57_d077bd14-bfb6-4459-83df-2ef9bfd72195_grande.jpg?v=1659973584',
  topSongs: ['In the End', 'Numb', 'One Step Closer'],
  description: 'Mistura de rock, rap e eletrônica que dominou os anos 2000.'
},
{
  id: 'pearl-jam',
  name: 'Pearl Jam',
  genre: 'Grunge / Alternative Rock',
  origin: 'Seattle, EUA',
  formedIn: 1990,
  image: 'https://i.pinimg.com/736x/3f/4a/ef/3f4aef0d09497d5d30ca13aaa7553729.jpg',
  topSongs: ['Alive', 'Jeremy', 'Even Flow'],
  description: 'Veteranos do grunge, intensos ao vivo e com letras engajadas.'
},
{
  id: 'van-halen',
  name: 'Van Halen',
  genre: 'Hard Rock',
  origin: 'Pasadena, EUA',
  formedIn: 1972,
  image: 'https://m.media-amazon.com/images/I/61vN5mOboBL._AC_UF894,1000_QL80_.jpg',
  topSongs: ['Jump', 'Panama', "Ain\'t Talkin\' \'Bout Love"],
  description: 'Riffs marcantes e a guitarra revolucionária de Eddie Van Halen.'
}
];
