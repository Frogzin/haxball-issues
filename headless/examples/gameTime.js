// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

/* VARIABLES */

/* ROOM */

const roomName = "X2 X3 BM |RAPIDA|⚡";
const botName = "Juizão";
const maxPlayers = 20;
const roomPublic = true;
const geo = [{"lat":-12.8665,"lon":-38.4858,"code":"br"}: -45.4}]; // Geo

const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

const scoreLimitPractice = 1;
const timeLimitPractice = 1;

const frasesGols = [" BALAÇO COSMICO! De que planeta veio? ", " ¡Vestite que no se puede jugar desnudo en la cancha ", " Apareciendo cuando mas se le necesita, el amo y señor de haxball ", " estás on fire 🔥🔥🔥 ", " Increible el golazo de ", " Futbol champagne señores! de parte de ", " ¡BARRILETE COSMICO! ¿De que planeta viniste? ", " Impresionante definicion de ", " Que locura de gol acaba de hacer "];
const frasesasis = [" 🔥🔥¡Y el pase milimetrico de ", " ¡Y donde pone el ojo pone el pase ", " ¡con tremendo pase de ", " ¡asistencia fenomenal de ", " ¡pase milimetrico de "];
const frasesautogol = ["TROLA Y TROLLA", "😂😂  É O TAL DO MULA? KKKKKKKKKKKKKKKKKKKKKKKK GOL CONTRA!", " ¡El troll de troles es ", " ¡Increible lo que hace este muchacho, pero sería mejor hacerlo en el arco contrario ", " ¡Genial ahora en el otro arco ", " ¡Se equivoco de arco ", " ¡Para el otro lado "];
const secondsToResetAvatar = 3;
var registro = new Map();
const css = "border:2px solid;padding:8px;background:";
room.setTeamsLock(true);
var message;
var Skankdivulgabot;
var SkankdivulgabotTime = 200000;

/* STADIUM */

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;

var practiceMap = '{ "name" : "Futsal x3 BM -x3", "width" : 648, "height" : 270, "spawnDistance" : 350, "bg" : { "type" : "", "width" : 550, "height" : 240, "kickOffRadius" : 80, "cornerRadius" : 0, "color" : "434F56" }, "vertexes" : [ /* 0 */ { "x" : 550, "y" : 240, "trait" : "ballArea" }, /* 1 */ { "x" : 550, "y" : -240, "trait" : "ballArea" }, /* 2 */ { "x" : 0, "y" : 270, "trait" : "kickOffBarrier" }, /* 3 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 }, /* 4 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 }, /* 5 */ { "x" : 0, "y" : -270, "trait" : "kickOffBarrier" }, /* 6 */ { "x" : -550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FF6666", "pos" : [-700,-80 ] }, /* 7 */ { "x" : -590, "y" : -80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : -28.940588200131774, "color" : "FF6666", "pos" : [-700,-80 ] }, /* 8 */ { "x" : -590, "y" : 80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : -28.940588200131774, "color" : "FF6666", "pos" : [-700,80 ] }, /* 9 */ { "x" : -550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FF6666", "pos" : [-700,80 ] }, /* 10 */ { "x" : 550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "479BD8", "pos" : [700,-80 ] }, /* 11 */ { "x" : 590, "y" : -80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "479BD8", "pos" : [700,-80 ] }, /* 12 */ { "x" : 590, "y" : 80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "479BD8", "pos" : [700,80 ] }, /* 13 */ { "x" : 550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "479BD8", "pos" : [700,80 ] }, /* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ] }, /* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" }, /* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ] }, /* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" }, /* 18 */ { "x" : -550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" }, /* 19 */ { "x" : 550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" }, /* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ] }, /* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" }, /* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" }, /* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ] }, /* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" }, /* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" }, /* 26 */ { "x" : -550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 }, /* 27 */ { "x" : 550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 }, /* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, /* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, /* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, /* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, /* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" }, /* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" }, /* 34 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 }, /* 35 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 }, /* 36 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 }, /* 37 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 }, /* 38 */ { "x" : -557.5, "y" : 80, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ] }, /* 39 */ { "x" : -557.5, "y" : 240, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false }, /* 40 */ { "x" : -557.5, "y" : -240, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 }, /* 41 */ { "x" : -557.5, "y" : -80, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ] }, /* 42 */ { "x" : 557.5, "y" : -240, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 }, /* 43 */ { "x" : 557.5, "y" : -80, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ] }, /* 44 */ { "x" : 557.5, "y" : 80, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ] }, /* 45 */ { "x" : 557.5, "y" : 240, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false }, /* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "trait" : "line" }, /* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "trait" : "line" }, /* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "trait" : "line" }, /* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "trait" : "line" }, /* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "trait" : "line" }, /* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "trait" : "line" }, /* 52 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "trait" : "line" }, /* 53 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "trait" : "line" }, /* 54 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 }, /* 55 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 }, /* 56 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 }, /* 57 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 }, /* 58 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 }, /* 59 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 }, /* 60 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 }, /* 61 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 }, /* 62 */ { "x" : -556, "y" : 123, "bCoef" : 0.1, "trait" : "line" }, /* 63 */ { "x" : -575, "y" : 123, "bCoef" : 0.1, "trait" : "line" }, /* 64 */ { "x" : 556, "y" : 123, "bCoef" : 0.1, "trait" : "line" }, /* 65 */ { "x" : 575, "y" : 123, "bCoef" : 0.1, "trait" : "line" }, /* 66 */ { "x" : -556, "y" : -123, "bCoef" : 0.1, "trait" : "line" }, /* 67 */ { "x" : -575, "y" : -123, "bCoef" : 0.1, "trait" : "line" }, /* 68 */ { "x" : 556, "y" : -123, "bCoef" : 0.1, "trait" : "line" }, /* 69 */ { "x" : 575, "y" : -123, "bCoef" : 0.1, "trait" : "line" }, /* 70 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line" }, /* 71 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "trait" : "line" }, /* 72 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "trait" : "line" }, /* 73 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "trait" : "line" }, /* 74 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "trait" : "line" }, /* 75 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 }, /* 76 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 }, /* 77 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 }, /* 78 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 }, /* 79 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 }, /* 80 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 }, /* 81 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 }, /* 82 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 }, /* 83 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 }, /* 84 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 }, /* 85 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 86 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 87 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 88 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 89 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 90 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 91 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 92 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 93 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 94 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 95 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 96 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 97 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 98 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 99 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 100 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 101 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 102 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 103 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 104 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 105 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 106 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 107 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 108 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 109 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 110 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 111 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 112 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 113 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 114 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 115 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 116 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 } ], "segments" : [ { "v0" : 6, "v1" : 7, "curve" : 0, "color" : "FF6666", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 }, { "v0" : 7, "v1" : 8, "curve" : -28.940588200131774, "color" : "FF6666", "cMask" : ["ball" ], "trait" : "goalNet", "x" : -590 }, { "v0" : 8, "v1" : 9, "curve" : 0, "color" : "FF6666", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 }, { "v0" : 10, "v1" : 11, "curve" : 0, "color" : "479BD8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -80 }, { "v0" : 11, "v1" : 12, "curve" : 28.940588200131774, "color" : "479BD8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : 590 }, { "v0" : 12, "v1" : 13, "curve" : 0, "color" : "479BD8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 80 }, { "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" }, { "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "F8F8F8", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" }, { "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "F8F8F8", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" }, { "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" }, { "v0" : 14, "v1" : 15, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 }, { "v0" : 16, "v1" : 17, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 }, { "v0" : 18, "v1" : 19, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 240 }, { "v0" : 20, "v1" : 21, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 }, { "v0" : 22, "v1" : 23, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 }, { "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 }, { "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -240 }, { "v0" : 28, "v1" : 29, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, { "v0" : 30, "v1" : 31, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, { "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 }, { "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 }, { "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 }, { "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 }, { "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0 }, { "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -550 }, { "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 550 }, { "v0" : 52, "v1" : 53, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 }, { "v0" : 54, "v1" : 55, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 57, "v1" : 56, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 58, "v1" : 59, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 55, "v1" : 59, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 61, "v1" : 60, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 62, "v1" : 63, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 }, { "v0" : 64, "v1" : 65, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 }, { "v0" : 66, "v1" : 67, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 }, { "v0" : 68, "v1" : 69, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 }, { "v0" : 70, "v1" : 71, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 }, { "v0" : 73, "v1" : 74, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 }, { "v0" : 76, "v1" : 75, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 78, "v1" : 77, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 79, "v1" : 80, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 81, "v1" : 82, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 83, "v1" : 84, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 390 }, { "v0" : 86, "v1" : 85, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 85, "v1" : 86, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 88, "v1" : 87, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 87, "v1" : 88, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 90, "v1" : 89, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 89, "v1" : 90, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 92, "v1" : 91, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 91, "v1" : 92, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 94, "v1" : 93, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 93, "v1" : 94, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 96, "v1" : 95, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 95, "v1" : 96, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 98, "v1" : 97, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 97, "v1" : 98, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 100, "v1" : 99, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 99, "v1" : 100, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 102, "v1" : 101, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 101, "v1" : 102, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 104, "v1" : 103, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 103, "v1" : 104, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 106, "v1" : 105, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 105, "v1" : 106, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 108, "v1" : 107, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 107, "v1" : 108, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 110, "v1" : 109, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 109, "v1" : 110, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 112, "v1" : 111, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 111, "v1" : 112, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 114, "v1" : 113, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 113, "v1" : 114, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 116, "v1" : 115, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 115, "v1" : 116, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 } ], "goals" : [ { "p0" : [-556.3,-80 ], "p1" : [-556.3,80 ], "team" : "red" }, { "p0" : [556.3,80 ], "p1" : [556.3,-80 ], "team" : "blue" } ], "discs" : [ { "radius" : 5, "pos" : [-550,80 ], "color" : "FF6666", "trait" : "goalPost", "y" : 80 }, { "radius" : 5, "pos" : [-550,-80 ], "color" : "FF6666", "trait" : "goalPost", "y" : -80, "x" : -560 }, { "radius" : 5, "pos" : [550,80 ], "color" : "479BD8", "trait" : "goalPost", "y" : 80 }, { "radius" : 5, "pos" : [550,-80 ], "color" : "479BD8", "trait" : "goalPost", "y" : -80 }, { "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }, { "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }, { "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }, { "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" } ], "planes" : [ { "normal" : [0,1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 }, { "normal" : [0,-1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea" }, { "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 }, { "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 }, { "normal" : [1,0 ], "dist" : -642, "bCoef" : 0.1 }, { "normal" : [-1,0 ], "dist" : -644, "bCoef" : 0.1 }, { "normal" : [1,0 ], "dist" : -642, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }, { "normal" : [-1,0 ], "dist" : -643, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 } ], "traits" : { "ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] }, "goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 }, "goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] }, "line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] }, "kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] } }, "playerPhysics" : { "bCoef" : 0, "acceleration" : 0.11, "kickingAcceleration" : 0.083, "kickStrength" : 4.5 }, "ballPhysics" : { "radius" : 6.2, "bCoef" : 0.4, "invMass" : 1.6, "damping" : 0.99, "color" : "FF9214" } }';
/* OPTIONS */

var afkLimit = 12;
var drawTimeLimit = 4;
var maxTeamSize = 3; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
var slowMode = 0;

/* PLAYERS */

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11 }
var players;
var teamR;
var teamB;
var teamS;

/* GAME */

var lastTeamTouched;
var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
var countAFK = false; // Created to get better track of activity
var activePlay = false; // Created to get better track of the possession
var goldenGoal = false;
var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
var banList = []; // Getting track of the bans, so we can unban ppl if we want

/* STATS */

var game;
var GKList = ["", ""];
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }]; // created to get ball speed
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
var allReds = []; // ... those who came in a very unequal game.

/* BALANCE & CHOOSE */

var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;

/* AUXILIARY */

var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
var statNumber = 0; // This allows the room to be given stat information every X minutes
var endGameVariable = false; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;

loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);

/* OBJECTS */

function Goal(time, team, striker, assist) {
    this.time = time;
    this.team = team;
    this.striker = striker;
    this.assist = assist;
}

function Game(date, scores, goals) {
    this.date = date;
    this.scores = scores;
    this.goals = goals;
}

function setRegister(player, senha) {
  if (registro.get(player.name)) room.sendAnnouncement('Você já está registrado.', player.id);
  else {
    registro.set(player.name, senha);
    localStorage.setItem("registros", JSON.stringify([...registro]));
    room.sendAnnouncement('Registrado!', player.id, 0x2FE436);
    room.sendAnnouncement(`Senha: ${senha}`, player.id, 0x2FE436);
  }
}

function getLogin(player, senha) {
  if (registro.get(player.name)) {
    if (registro.get(player.name) == senha) {
      room.sendAnnouncement(`${player.name} logou!`, null, 0x2FE436);
    }
    else room.sendAnnouncement('Senha incorreta.', player.id, 0xFF0000);
  }
  else room.sendAnnouncement('Você não está registrado.', player.id, 0xFF0000);
}
/* FUNCTIONS */

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // returns a random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function getTime(scores) { // returns the current time of the game
    return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
}

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

/* BUTTONS */

function download(conteudo, nomeDoArquivo, tipoDeArquivo) {
	let blob = new Blob([conteudo], { type: tipoDeArquivo });
	const link = window.document.createElement('a');
	link.href = window.URL.createObjectURL(blob);
	link.download = nomeDoArquivo;
	link.click();
	window.URL.revokeObjectURL(link.href);
}

function topBtn() {
    if (teamS.length == 0) {
        return;
    }
    else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.RED);
                room.setPlayerTeam(teamS[1].id, Team.BLUE);
            }
            return;
        }
        else if (teamR.length < teamB.length) {
            room.setPlayerTeam(teamS[0].id, Team.RED);
        }
        else {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
        }
    }
}

function randomBtn() {
    if (teamS.length == 0) {
        return;
    }
    else {
        if (teamR.length == teamB.length) {
            if (teamS.length > 1) {
                var r = getRandomInt(teamS.length);
                room.setPlayerTeam(teamS[r].id, Team.RED);
                teamS = teamS.filter((spec) => spec.id != teamS[r].id);
                room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
            }
            return;
        }
        else if (teamR.length < teamB.length) {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
        }
        else {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
        }
    }
}

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamR.length; i++) {
        room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    if (teamR.length <= teamB.length) {
        for (var i = 0; i < teamR.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamR.length; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
        }
    }
    else {
        for (var i = 0; i < teamB.length; i++) {
            room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = teamB.length; i < teamR.length; i++) {
            room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
        }
    }
}

function blueToRedBtn() {
    resettingTeams = true;
    setTimeout(() => { resettingTeams = false; }, 100);
    for (var i = 0; i < teamB.length; i++) {
        room.setPlayerTeam(teamB[i].id, Team.RED);
    }
}

/* GAME FUNCTIONS */

function checkTime() {
    const scores = room.getScores();
    game.scores = scores;
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (scores.red != scores.blue) {
            if (checkTimeVariable == false) {
                checkTimeVariable = true;
                setTimeout(() => { checkTimeVariable = false; }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                setTimeout(() => { room.stopGame(); }, 2000);
            }
            return;
        }
        goldenGoal = true;
        room.sendChat("⚽ So mais um gol !");
    }
    if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            room.sendChat("⌛ Acrécimos de 1 minuto !");
        }
    }
    if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
}

function endGame(winner) { // handles the end of a game : no stopGame function inside
    players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
    const scores = room.getScores();
    game.scores = scores;
    Rposs = Rposs / (Rposs + Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;
    endGameVariable = true;
    if (winner == Team.RED) {
        streak++;
        room.sendChat("🔴 O Red venceu " + scores.red + "-" + scores.blue + " ! Vitorias em seguidas : " + streak + " 🏆", null, 0x1C6FFF, "bold");
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendChat("🔵 O Blue venceu " + scores.blue + "-" + scores.red + " ! Vitorias em seguidas : " + streak + " 🏆", null, 0xFF0000, "bold");
    }
    else {
        streak = 0;
        room.sendChat("💤 Límite de empate, terminado! 💤");
    }
    room.sendChat("⭐ Posse de bola : 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% : " + (Bposs * 100).toPrecision(3).toString() + "% 🔵");
    scores.red == 0 ? (scores.blue == 0 ? 
    room.sendChat("🏆 " + GKList[0].name + " E " + GKList[1].name + " UMA VERDADEIRA MURALHA!! PASSA NADA!!! ") : 
    room.sendChat("🏆 " + GKList[1].name + " UM VERDADEIRO MURO !!! ")) : scores.blue == 0 ?
    room.sendChat("🏆 " + GKList[0].name + " UM VERDADEIRO MURO !!! ") : null;
    updateStats();
}

function quickRestart() {
    room.stopGame();
    setTimeout(() => { room.startGame(); }, 2000);
}

function resumeGame() {
    setTimeout(() => { room.startGame(); }, 2000);
    setTimeout(() => { room.pauseGame(false); }, 1000);
}

function activateChooseMode() {
    inChooseMode = true;
    slowMode = 2;
    room.sendChat("Modo lento ativado (2 segundos)!");
}

function deactivateChooseMode() {
    inChooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != 0) {
        slowMode = 0;
        room.sendChat("Fim do modo lento.");
    }
    redCaptainChoice = "";
    blueCaptainChoice = "";
}

function loadMap(map, scoreLim, timeLim) {
    if (map != '') {
        room.setCustomStadium(map);
    } else {
        console.log("error cargando mapa")
        room.setDefaultStadium("Classic");
    }
    room.setScoreLimit(scoreLim);
    room.setTimeLimit(timeLim);
}

/* PLAYER FUNCTIONS */

function updateTeams() { // update the players' list and all the teams' list
    players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
    teamR = players.filter(p => p.team === Team.RED);
    teamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
    if (countAFK && (teamR.length + teamB.length) > 1) {
        for (var i = 0; i < teamR.length; i++) {
            setActivity(teamR[i], getActivity(teamR[i]) + 1);
        }
        for (var i = 0; i < teamB.length; i++) {
            setActivity(teamB[i], getActivity(teamB[i]) + 1);
        }
    }
    for (var i = 0; i < extendedP.length; i++) {
        if (extendedP[i][eP.ACT] == 60 * (2 / 3 * afkLimit)) {
            room.sendChat("[PV] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", Se não se mover ou mandar msg  nos proximos  " + Math.floor(afkLimit / 3) + " segundos, sera kickado!", extendedP[i][eP.ID]);
        }
        if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
            extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
                setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
            }
            room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
        }
    }
}

function getAuth(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function getAFK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

/* BALANCE & CHOOSE FUNCTIONS */

function updateRoleOnPlayerIn() {
    updateTeams();
    if (inChooseMode) {
        if (players.length == 6) {
            loadMap(practiceMap, scoreLimitPractice, timeLimitp); 
        }
        getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    }
    balanceTeams();
}

function updateRoleOnPlayerOut() {
    updateTeams();
    if (room.getScores() != null) {
        var scores = room.getScores();
        if (players.length >= 2 * maxTeamSize && scores.time >= (5 / 6) * game.scores.timeLimit && teamR.length != teamB.length) {
            if (teamR.length < teamB.length) {
                if (scores.blue - scores.red == 2) {
                    endGame(Team.BLUE);
                    room.sendChat("🤖 Ragequit 🤖");
                    setTimeout(() => { room.stopGame(); }, 100);
                    return;
                }
            }
            else {
                if (scores.red - scores.blue == 2) {
                    endGame(Team.RED);
                    room.sendChat("🤖 Ragequit 🤖");
                    setTimeout(() => { room.stopGame(); }, 100);
                    return;
                }
            }
        }
    }
    if (inChooseMode) {
        if (players.length < 6) {
            loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
        }
        if (teamR.length == 0 || teamB.length == 0) {
            teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
            return;
        }
        if (Math.abs(teamR.length - teamB.length) == teamS.length) {
            room.sendChat("Sem alternativas, deixe me lidar com essa situação. ...");
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (teamR.length > teamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 5 * i);
                }
            }
            else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 5 * i);
                }
            }
            return;
        }
        if (streak == 0 && room.getScores() == null) {
            if (Math.abs(teamR.length - teamB.length) == 2) { // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
                room.sendChat("🤖 Equilibrando equipes... 🤖");
                teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
            }
        }
        if (teamR.length == teamB.length && teamS.length < 2) {
            deactivateChooseMode();
            resumeGame();
            return;
        }
        capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
    }
    balanceTeams();
}

function balanceTeams() {
    if (!inChooseMode) {
        if (players.length == 1 && teamR.length == 0) { // 1 player
            quickRestart();
            loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
            room.setPlayerTeam(players[0].id, Team.RED);
        }
        else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) { // spec players supply required players
            const n = Math.abs(teamR.length - teamB.length);
            if (teamR.length > teamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.BLUE);
                }
            }
            else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.RED);
                }
            }
        }
        else if (Math.abs(teamR.length - teamB.length) > teamS.length) { //no sufficient players
            const n = Math.abs(teamR.length - teamB.length);
            if (players.length == 1) {
                quickRestart();
                loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
                room.setPlayerTeam(players[0].id, Team.RED);
                return;
            }
            else if (players.length == 6) {
                quickRestart();
                loadMap(practiceMap, scoreLimitPractice, timeLimitp); 
            }
            if (players.length == maxTeamSize * 2 - 1) {
                allReds = [];
                allBlues = [];
            }
            if (teamR.length > teamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
                }
            }
            else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
                }
            }
        }
        else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) { //choose mode
            room.pauseGame(true);
            activateChooseMode();
            choosePlayer();
        }
        else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) { //2 in red 2 in blue and 2 or more spec
            if (teamR.length == 2) {
                quickRestart();
                if (!teamS.length == 2){
                    loadMap(practiceMap, scoreLimitPractice, timeLimitp); 
                }
            }
            topBtn();
        }
    }
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    if (teamR.length <= teamB.length && teamR.length != 0) {
        room.sendChat("[PV] Para escolher um jogador escreva um número da lista fornecida ou use 'top', 'random' o 'bottom'.", teamR[0].id);
        timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Seja rápido @" + player.name + ", so restam " + Number.parseInt(chooseTime / 2) + " segundos para escolher !", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "Não escolheu a tempo", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
    }
    else if (teamB.length < teamR.length && teamB.length != 0) {
        room.sendChat("[PV] Para escolher um jogador escreva um número da lista fornecida o use 'top', 'random' o 'bottom'.", teamB[0].id);
        timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Seja rápido @" + player.name + ", so restam " + Number.parseInt(chooseTime / 2) + " segundos para escolher !", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "Não escolheu a tempo", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
    }
    if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}

function getSpecList(player) {
    var cstm = "[PV] Players : ";
    for (var i = 0; i < teamS.length; i++) {
        if (140 - cstm.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
            room.sendChat(cstm, player.id);
            cstm = "... ";
        }
        cstm += teamS[i].name + "[" + (i + 1) + "], ";
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendChat(cstm, player.id);
}

/* STATS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                !activePlay ? activePlay = true : null;
                if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
                    lastPlayersTouched[1] = lastPlayersTouched[0];
                    lastPlayersTouched[0] = players[i];
                }
                lastTeamTouched = players[i].team;
            }
        }
    }
}

function getStats() { // gives possession, ball speed and GK of each team
    if (activePlay) {
        updateTeams();
        lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
        var ballPosition = room.getBallPosition();
        point[1] = point[0];
        point[0] = ballPosition;
        ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
        var k = [-1, Infinity];
        for (var i = 0; i < teamR.length; i++) {
            if (teamR[i].position.x < k[1]) {
                k[0] = teamR[i];
                k[1] = teamR[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        k = [-1, -Infinity];
        for (var i = 0; i < teamB.length; i++) {
            if (teamB[i].position.x > k[1]) {
                k[0] = teamB[i];
                k[1] = teamB[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        findGK();
    }
}

function updateStats() {
    if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
        var stats;
        for (var i = 0; i < allReds.length; i++) {
            localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name];
            stats[Ss.GA]++;
            lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
            stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
            localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < allBlues.length; i++) {
            localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name];
            stats[Ss.GA]++;
            lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
            stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
            localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < game.goals.length; i++) {
            if (game.goals[i].striker != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
                    stats[Ss.GL]++;
                    localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
                }
            }
            if (game.goals[i].assist != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
                    stats[Ss.AS]++;
                    localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
                }
            }
        }
        if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
            stats[Ss.GK]++;
            game.scores.blue == 0 ? stats[Ss.CS]++ : null;
            stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
        }
        if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
            stats[Ss.GK]++;
            game.scores.red == 0 ? stats[Ss.CS]++ : null;
            stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
        }
    }
}

function findGK() {
    var tab = [[-1, ""], [-1, ""]];
    for (var i = 0; i < extendedP.length; i++) {
        if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
            if (tab[0][0] < extendedP[i][eP.GK]) {
                tab[0][0] = extendedP[i][eP.GK];
                tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
        else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
            if (tab[1][0] < extendedP[i][eP.GK]) {
                tab[1][0] = extendedP[i][eP.GK];
                tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
    }
    GKList = [tab[0][1], tab[1][1]];
}

setInterval(() => {
    var tableau = [];
    if (statNumber % 5 == 0) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Partidas Jogadas> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 1) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Vitorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 2) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Gols> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 3) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 4) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendChat("CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    statNumber++;
}, statInterval * 60 * 1000);

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function (player) {
	console.log("---------------------------------------------------");
	console.log("[📢]Nick: "+player.name);
	console.log("[📢]Conn: "+player.conn);
	console.log("[📢]Auth: "+player.auth);
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    updateRoleOnPlayerIn();
    room.sendAnnouncement("👋 𝗕𝗲𝗺-𝘃𝗶𝗻𝗱𝗼, " + player.name + "  𝗮 𝗕𝙈 𝗔𝗿𝗲𝗻𝗮!", null, 0x5EE7FF,"bold");
    if (room.getPlayerList().length > 1 && room.getPlayerList().length < 5 ){
    room.sendAnnouncement(" 𝙈𝙐𝘿𝘼𝙉𝘿𝙊 𝘼 𝘼𝙍𝙀𝙉𝘼...", player.id, 0xEDC021, "bold");
            	setTimeout(() => {
    room.sendAnnouncement(" ---------------------------------------------------", player.id, 0xEDC021, "bold");
    room.sendAnnouncement("💥 𝗙𝘂𝘁𝘀𝗮𝗹 𝘅𝟯! ", player.id, 0xEDC021, "bold");
    room.sendAnnouncement(" ---------------------------------------------------", player.id, 0xEDC021, "bold");
        }, 2_000);
    }
    if (localStorage.getItem(player.auth) != null) {
        var playerRole = JSON.parse(localStorage.getItem(player.auth))[Ss.RL];
        if (playerRole == "admin" || playerRole == "master" ) {
            room.setPlayerAdmin(player.id, true);
            room.sendAnnouncement("Admin「" + player.name + "」¡𝗘𝗻𝘁𝗿𝗼 𝗮 𝗽𝗼𝗻𝗲𝗿 𝗼𝗿𝗱𝗲𝗻 𝗲𝗻 𝗹𝗮 𝘀𝗮𝗹𝗮!", null, 0xFF7900, "bold");
        }
    }
    if (localStorage.getItem(getAuth(player)) == null){
        stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name]
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
    }
	setTimeout(() => {
	  if (registro.get(player.name)) room.sendAnnouncement('Login: !login senha', player.id, 0x1B9124, "bold");
  else room.sendAnnouncement('Registrar: !register senha', player.id, 0x1B9124, "bold");
room.sendAnnouncement('Login: !login senha', player.id, 0x1B9124, "bold");
}, 2_000);
	setTimeout(() => {
room.sendAnnouncement('Quer ter o bot da amebas? entre no discord e faça o seu DOWNLOAD GRATUITO! e divirta-se https://discord.gg/Dy8KRE9wUC', player.id, 0xFF0000, "bold");
}, 5_000);
}

room.onPlayerTeamChange = function (changedPlayer, byPlayer) {
    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        return;
    }
    if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
        room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
        room.sendChat(changedPlayer.name + " está AFK !");
        return;
    }
    updateTeams();
    if (room.getScores() != null) {
        var scores = room.getScores();
        if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3 / 4) * scores.timeLimit && Math.abs(scores.blue - scores.red) < 2) {
            (changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
        }
    }
    if (changedPlayer.team == Team.SPECTATORS) {
        setActivity(changedPlayer, 0);
    }
    if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
        if (Math.abs(teamR.length - teamB.length) == teamS.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (teamR.length > teamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200 * i);
                }
            }
            else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200 * i);
                }
            }
            return;
        }
        else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)) {
            deactivateChooseMode();
            resumeGame();
        }
        else if (teamR.length <= teamB.length && redCaptainChoice != "") { // choice remembered
            redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
            return;
        }
        else if (teamB.length < teamR.length && blueCaptainChoice != "") {
            blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
            return;
        }
        else {
            choosePlayer();
        }
    }
}

room.onPlayerLeave = function (player) {
    if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
        choosePlayer();
        capLeft = true; setTimeout(() => { capLeft = false; }, 10);
    }
    if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
        choosePlayer();
        capLeft = true; setTimeout(() => { capLeft = false; }, 10);
    }
    setActivity(player, 0);
    updateRoleOnPlayerOut();
}

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) {
    ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
}

/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) {
    if (message == "!ame") {
	if (player.team == 1) {
	room.setTeamColors (Team.RED, 0, 0xFFEB36, [0x1299C9, 0x0C6787, 0x1299C9]);
    }
}
    if (message == "!ame") {
	if (player.team == 2) {
	room.setTeamColors (Team.BLUE, 0, 0xFFEB36, [0x1299C9, 0x0C6787, 0x1299C9]);
}
    }
    if (message == "!ale") {
	if (player.team == 1) {
	room.setTeamColors (Team.RED, 0, 0xFFFFFF, [0x000000, 0xFF0000, 0xFFA500]);
    }
}
    if (message == "!ale") {
	if (player.team == 2) {
	room.setTeamColors (Team.BLUE, 0, 0xFFFFFF, [0x000000, 0xFF0000, 0xFFA500]);
    }
}
    if (message == "!psd") {
	if (player.team == 1) {
	room.setTeamColors (Team.RED, 90, 0x70B3FF, [0x70B3FF, 0x2E9DFF, 0x006FFF]);
    }
}
    if (message == "!psd") {
	if (player.team == 2) {
	room.setTeamColors (Team.BLUE, 90, 0x70B3FF, [0x70B3FF, 0x2E9DFF, 0x006FFF]);
    }
}
    if (message == "!san") {
	if (player.team == 1) {
	room.setTeamColors (Team.BLUE, 45, 0x000000, [0x1DAEF, 0x69CADE, 0x62BCCF]);
    }
    }
    if (message == "!san") {
	if (player.team == 2) {
	room.setTeamColors (Team.BLUE, 45, 0x000000, [0x1DAEF, 0x69CADE, 0x62BCCF]);
    }
}
    if (message == "!pal") {
	if (player.team == 1) {
	room.setTeamColors (Team.RED, 0, 0x000000, [0x003D34, 0x006657, 0x003D34]);
    }
}
    if (message == "!pal") {
	if (player.team == 2) {
	room.setTeamColors (Team.BLUE, 0, 0x000000, [0x003D34, 0x006657, 0x003D34]);
    }
}
    if (message == "!mon") {
	if (player.team == 1) {
	room.setTeamColors (Team.RED, 65, 0xFF3030, [0xFFFFFF, 0xFFFFFF]);
    }
    }
    if (message == "!mon") {
	if (player.team == 2) {
	room.setTeamColors (Team.BLUE, 65, 0xFF3030, [0xFFFFFF, 0xFFFFFF]);
    }
}
    if (message == "!psg") {
	if (player.team == 1) {
	room.setTeamColors (Team.RED, 0, 0xFF3030, [0xB22222, 0xFF3030]);
    }
    }
    if (message == "!psg") {
	if (player.team == 2) {
	room.setTeamColors (Team.BLUE, 0, 0xFF3030, [0xB22222, 0xFF3030]);
    }
}
    if (message == "!rmd") {
	if (player.team == 1) {
	room.setTeamColors (Team.RED, 0, 0x3347B3, [0xE6E6E6]);
    }
    }
    if (message == "!rmd") {
	if (player.team == 2) {
	room.setTeamColors (Team.BLUE, 0, 0x3347B3, [0xE6E6E6]);
    }
}
    if (message == "!mil") {
	if (player.team == 1) {
	room.setTeamColors (Team.RED, 0, 0xFF1212, [0xFF1212, 0x171717, 0xFF1212]);
    }
    }
    if (message == "!mil") {
	if (player.team == 2) {
	room.setTeamColors (Team.BLUE, 0, 0xFF1212, [0xFF1212, 0x171717, 0xFF1212]);
    }
}
    if (message == "!fla") {
	if (player.team == 1) {
	room.setTeamColors (Team.RED, 90, 0xD41A0C, [0xFF1212, 0x171717, 0xD41A0C]);
    }
    }
    if (message == "!fla") {
	if (player.team == 2) {
	room.setTeamColors (Team.BLUE, 90, 0xD41A0C, [0xFF1212, 0x171717, 0xD41A0C]);
    }
}
    if (message == "!fla") {
	if (player.team == 1) {
	room.setTeamColors (Team.RED, 90, 0xD41A0C, [0xFF1212, 0x171717, 0xD41A0C]);
    }
    }
    if (message == "!fla") {
	if (player.team == 2) {
	room.setTeamColors (Team.BLUE, 90, 0xD41A0C, [0xFF1212, 0x171717, 0xD41A0C]);
    }
}
    if (message == "!liv") {
	if (player.team == 1) {
	room.setTeamColors (Team.RED, 90, 0xF37E16, [0xDE0000]);
    }
    }
    if (message == "!liv") {
	if (player.team == 2) {
	room.setTeamColors (Team.BLUE, 90, 0xF37E16, [0xDE0000]);
    }
}
    if (message == "!rmd2") {
	if (player.team == 1) {
	room.setTeamColors (Team.RED, 40, 0xFFFFFF, [0x1E306D, 0x19479C, 0x19479C]);
    }
    }
    if (message == "!rmd2") {
	if (player.team == 2) {
	room.setTeamColors (Team.BLUE, 40, 0xFFFFFF, [0x1E306D, 0x19479C, 0x19479C]);
    }
}
    if (message == "!vipshehe") {
    room.setPlayerAdmin(player.id,true);
            }
            if (message == "!msgdodia") {
                room.sendAnnouncement("https://discord.gg/Dy8KRE9wUC", null, 0xFF0000, "bold");
            }
        	if (message == "!discord") {
    room.sendAnnouncement("https://discord.gg/Dy8KRE9wUC", null, 0x3C39CE, "bold");
            }
    	if (message == "!rankinfo") {
             room.sendAnnouncement("O critério para avançar de rank é baseado na porcentagem do seu winrate! confira: PRECISA TER NO MINÍMO 50 PARTIDAS PARA PEGAR RANK.", player.id, 0x3C39CE, "bold");
              room.sendAnnouncement("Ameba - sem rank", player.id, 0x3C39CE, "bold");
               room.sendAnnouncement("🥉Bronze(10%, II-20%; III-30%)", player.id, 0x3C39CE, "bold");
                room.sendAnnouncement("🥈Prata(40%; II- 44%; III-50%)", player.id, 0x3C39CE, "bold");
                 room.sendAnnouncement("🥇Ouro(55%; II-60%; III-65%)", player.id, 0x3C39CE, "bold");
                 room.sendAnnouncement("💲Idolo(70%)", player.id, 0x3C39CE, "bold");
                 room.sendAnnouncement("👑Craque(75%)", player.id, 0x3C39CE, "bold");
                 room.sendAnnouncement("🏆Campeao(80%)", player.id, 0x3C39CE, "bold");
                 room.sendAnnouncement("💎Estrela(83%)", player.id, 0x3C39CE, "bold");
                 room.sendAnnouncement("🌌 Super estrela(86%)", player.id, 0x3C39CE, "bold");
                 room.sendAnnouncement("🔥 MITO(90%)", player.id, 0x3C39CE, "bold");
        }
	if (message.toLowerCase().substr(0,10) == '!register ') {
    setRegister(player, message.substr(10));
    return false;
  }

  // !login password
  if (message.toLowerCase().substr(0,7) == '!login ') {
    getLogin(player, message.substr(7));
    return false;
  }
      if (message.length > 65) {
	room.sendAnnouncement("", player.id);
    return false;
}
  	msg = message;
    message = message;
    originalMessage = message;
    message = message.split(/ +/);
    player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
    if (["!help"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("[📄] Comandos : !me, !tc, !pv, !uni, !mostrarstats, !rankinfo, !sequencia, !msgdodia, !games, !wins, !goals, !assists, !cs, !afks, !mutes, !bans.", player.id,0x309D2B,"bold");
        player.admin ? room.sendAnnouncement("[📄] Admin : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id,0x309D2B,"bold") : null;
    }
    else if (["!afk"].includes(message[0].toLowerCase())) {
        if (players.length != 1 && player.team != Team.SPECTATORS) {
            if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
                room.setPlayerTeam(player.id, Team.SPECTATORS);
            }
            else {
                room.sendChat("não pode ficar afk você está em uma equipe !", player.id, 0xFF7B08);
                return false;
            }
        }
        else if (players.length == 1 && !getAFK(player)) {
            room.setPlayerTeam(player.id, Team.SPECTATORS);
        }
        setAFK(player, !getAFK(player));
	    room.sendAnnouncement(player.name + (getAFK(player) ? " está AFK !" : " não está mais AFK !"),null,(getAFK(player) ? 0xFF7B08 : 0x8FFF8F));
	getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
    localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player"];
    setTimeout (() => { if (getAFK(player) && stats[Ss.RL] != "vip"){room.kickPlayer(player.id,"Tiempo de afk excedido",false) } },30 * 60 * 1000)
    return false;
}
    else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] Lista de AFK : ";
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
            }
        }
        if (cstm == "[PV] Lista de AFK : ") {
            room.sendChat("[PV] Não há ninguém na lista de AFK !", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!me"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
	room.sendAnnouncement("[📄] Stats de " + player.name + ": 🎮 Partidas jogadas: " + stats[Ss.GA] + ", ✅ Vitorias: " + stats[Ss.WI] + ", ❌ Derrotas: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, ⚽️ Gols: " + stats[Ss.GL] + ", 👟 Asistencias: " + stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 Vallas: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", player.id,0x73EC59,"bold");
	room.sendAnnouncement("「👓」 Esta mensagem apenas você pode ver, se queres mostrar seus stats use o comando '!mostrarstats'!", player.id,0xFF7900,"bold");
    }
    else if (["!mostrarstats"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
        room.sendAnnouncement("[📄] O Jogador " + player.name + " mostrou seus stats! '!mostrarstats'!",null,0xFF7900,"bold")
	room.sendAnnouncement("[📄] Stats de " + player.name + ": 🎮 Partidas Jogadas: " + stats[Ss.GA] + ", ✅ Vitorias: " + stats[Ss.WI] + ", ❌ Derrotas: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, ⚽️ Gols: " + stats[Ss.GL] + ", 👟 Asistencias: " + stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 Vallas: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", null,0x73EC59,"bold");
    }
    else if (["!games"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Não jogou partidas suficientes", player.id,0xFF0000);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] 🎮 Partidas Jogadas> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!wins"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Não jogou partidas suficientes", player.id,0x73EC59);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] ✅ Vitorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!goats"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key) && JSON.parse(localStorage.getItem(key))[Ss.WI] > 400) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Não jogou partidas suficientes", player.id,0x73EC59);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] ✅ GOATS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!goals"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[📄] Não jogou partidas suficientes", player.id,0x73EC59);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] ⚽️ Gols> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!assists"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Não jogou partidas suficientes", player.id);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] 👟 Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!cs"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Não jogou partidas suficientes", player.id,0x73EC59);
		return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] 🤚 Partidas invictas> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

    return false;
}
    else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] Lista de mutados : ";
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
            }
        }
        if (cstm == "[PV] Lista de mutados : ") {
            room.sendChat("[PV] Não há ninguém na lista de mutados !", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!mute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            updateTeams();
            var timeOut;
            if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
                if (Number.parseInt(message[1]) > 0) {
                    timeOut = Number.parseInt(message[1]) * 60 * 1000;
                }
                else {
                    timeOut = 3 * 60 * 1000;
                }
                if (message[2].length > 1 && message[2][0] == "#") {
                    message[2] = message[2].substring(1, message[2].length);
                    if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
                        if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
                            return false;
                        }
                        setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2])));
                        setMute(room.getPlayer(Number.parseInt(message[2])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " foi mutado por " + (timeOut / 60000) + " minutos !");
                    }
                }
            }
            else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                        if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
                            return false;
                        }
                        setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
                        setMute(room.getPlayer(Number.parseInt(message[1])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi mutado por 3 minutos!");
                    }
                }
            }
        }
    }
    else if (["!unmute"].includes(message[0].toLowerCase())) {
        if (player.admin && message.length >= 2) {
            if (message[1] == "all") {
                extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
                room.sendChat("Todos foram desmutados");
            }
            else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                setMute(room.getPlayer(Number.parseInt(message[1])), false);
                room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi desmutado!");
            }
            else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                        setMute(room.getPlayer(Number.parseInt(message[1])), false);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi desmutado!");
                    }
                }
            }
        }
    }
    else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
        if (banList.length == 0) {
            room.sendChat("[PV] Não há ninguém na lista de banidos!", player.id);
            return false;
        }
        var cstm = "[PV] Lista de banidos : ";
        for (var i = 0; i < banList.length; i++) {
            if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
                room.sendChat(cstm, player.id);
                cstm = "... ";
            }
            cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    }
    else if (["!clearbans"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 1) {
                room.clearBans();
                room.sendChat("Bans removidos!");
                banList = [];
            }
            if (message.length == 2) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        ID = Number.parseInt(message[1]);
                        room.clearBan(ID);
                        if (banList.length != banList.filter((array) => array[1] != ID)) {
                            room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " ha sido baneado del host !");
                        }
                        setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
                    }
                }
            }
        }
    }
    else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "Bye !", false);
    }
    if (message[0][0] == "!") { //if a command is received, after process, exit
        return false;
    }

    if (teamR.length != 0 && teamB.length != 0 && inChooseMode) { //choosing management
        if (player.id == teamR[0].id || player.id == teamB[0].id) { // we care if it's one of the captains choosing
            if (teamR.length <= teamB.length && player.id == teamR[0].id) { // we care if it's red turn && red cap talking
                if (["top", "auto"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    redCaptainChoice = "top";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " escolheu Top !");
                    return false;
                }
                else if (["random", "rand"].includes(message[0].toLowerCase())) {
                    var r = getRandomInt(teamS.length);
                    room.setPlayerTeam(teamS[r].id, Team.RED);
                    redCaptainChoice = "random";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " escolheu Random !");
                    return false;
                }
                else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
                    redCaptainChoice = "bottom";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " escolheu Bottom !");
                    return false;
                }
                else if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
                        room.sendChat("[PV] El número que escolheu es inválido !", player.id);
                        return false;
                    }
                    else {
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
                        room.sendChat(player.name + " escolheu a " + teamS[Number.parseInt(message[0]) - 1].name + " !");
                        return false;
                    }
                }
            }
            if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
                if (["top", "auto"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    blueCaptainChoice = "top";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " escolheu Top !");
                    return false;
                }
                else if (["random", "rand"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
                    blueCaptainChoice = "random";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " escolheu Random !");
                    return false;
                }
                else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
                    blueCaptainChoice = "bottom";
                    clearTimeout(timeOutCap);
                    room.sendChat(player.name + " escolheu Bottom !");
                    return false;
                }
                else if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
                        room.sendChat("[PV] El número que escolheu es inválido !", player.id);
                        return false;
                    }
                    else {
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
                        room.sendChat(player.name + " escolheu " + teamS[Number.parseInt(message[0]) - 1].name + " !");
                        return false;
                    }
                }
            }
        }
    }

    if (getMute(player)) {
        room.sendChat("Usted está muteado.", player.id);
        return false;
    }
    if (slowMode > 0) {
        if (!player.admin) {
            if (!SMSet.has(player.id)) {
                SMSet.add(player.id);
                setTimeout((number) => { SMSet.delete(number); }, slowMode * 1000, player.id);
            }
            else {
                return false;
            }
        }
    }
	if (registro.get(player.name)) {
    console.log("auth: "+getAuth(player));
    if (localStorage.getItem(getAuth(player))){
        stats = JSON.parse(localStorage.getItem(getAuth(player)));
        var announcement = "";
        var chatColor = "";
        if (stats[Ss.WI] > 399){
            announcement += "🔥 「MITO」"
            chatColor = "0xFFC375"
        } else if (stats[Ss.WI] > 89){
            announcement += "🐊 「Super estrela」"
            chatColor = "0xBFFF00"
        } else if (stats[Ss.WI] > 69){
            announcement += "💎 「Estrela」"
            chatColor = "0xEC77CE"
        } else if (stats[Ss.WI] > 59){
            announcement += "👽 「Lenda」"
            chatColor = "0xFA58DF"
        } else if (stats[Ss.WI] > 44){
            announcement += "👑 「Craque」"
            chatColor = "0x73EC59"
        } else if (stats[Ss.WI] > 34){
            announcement += "💲 「Idolo」"
            chatColor = "0xFE2E2E"
        } else if (stats[Ss.WI] > 24){
            announcement += "🥇 「Ouro」"
            chatColor = "0x04B404"
        } else if (stats[Ss.WI] > 14){
            announcement += "🥈 「Prata」"
            chatColor = "0x2EFEF7"
        } else if (stats[Ss.WI] > 4){
            announcement += "🥉 「Bronze」"
            chatColor = "0xDDD4DB"
        } else {
            announcement += "💨 「BM'S」"
            chatColor = "0xEBEBEB"
        }
        console.log(announcement);
        console.log(chatColor);
        console.log(originalMessage)
        announcement += player.name + ": " + originalMessage;
        room.sendAnnouncement(announcement, null, chatColor);
        return false;   
    }  
	}
  else {
    room.sendAnnouncement(`❌ ${player.name}: ${originalMessage}`, null, 0xABAEA7);
    return false;
  }
}

room.onPlayerActivity = function (player) {
    setActivity(player, 0);
}

room.onPlayerBallKick = function (player) {
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        !activePlay ? activePlay = true : null;
        lastTeamTouched = player.team;
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }
}

/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
    game = new Game(Date.now(), room.getScores(), []);
    countAFK = true;
    activePlay = false;
    goldenGoal = false;
    endGameVariable = false;
    lastPlayersTouched = [null, null];
    Rposs = 0;
    Bposs = 0;
    GKList = [];
    allReds = [];
    allBlues = [];
	 room.sendAnnouncement("UNIFORMES: !ame !ale !psd !san !pal !pal2 !bdm !mon !psg !rmd !rmd2 !mil !fla !fla2 !che !ben !vil !bar !bar2 !juv !hol !por !ptg !nob !bcj !riv !bor !bor2 !psg2 !bdm2 !arg !cor !cor3 !vit !bot !lgbt !utd !cty !liv !atm !int !hct !bra !cru !vas !vas2 !btn !lut !go !btf !hsy !rbb !aja !atl !sao !gre !psg3 !acg !bah !vit !flu !for !ros !nap !uai !ffc !cap !rem !cui !jvn !utd3 !spo !nat !goi !col !pen !fra !idm !ava", null, 0x2EF55D, "bold");
	 room.sendAnnouncement("UNIFORMES EXCLUSIVOS: !bos !nyk !lal !mia !hou !chi !sup !sup2", null, 0xFFAE00, "bold");
      room.sendAnnouncement("[💬] Use !tc para conversar com a sua equipe!", null, 0x26E9FF);
    if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
        for (var i = 0; i < maxTeamSize; i++) {
            allReds.push(teamR[i]);
            allBlues.push(teamB[i]);
        }
    }
    for (var i = 0; i < extendedP.length; i++) {
        extendedP[i][eP.GK] = 0;
        extendedP[i][eP.ACT] = 0;
        room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
    }
    deactivateChooseMode();
}

room.onGameStop = function (byPlayer) {
    if (byPlayer.id == 0 && endGameVariable) {
 		updateTeams();
		if (inChooseMode) {
			if (players.length == 2 * maxTeamSize) {
				inChooseMode = false;
				resetBtn();
				for (var i = 0; i < maxTeamSize; i++) {
					setTimeout(() => { randomBtn(); }, 400*i);
				}
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else if (lastWinner == Team.BLUE) {
					redToSpecBtn();
					blueToRedBtn();
				}
				else {
					resetBtn();
				}
				setTimeout(() => { topBtn(); }, 500);
			}
		}
		else {
			if (players.length == 2) {
				if (lastWinner == Team.BLUE) {
					room.setPlayerTeam(teamB[0].id, Team.RED);
					room.setPlayerTeam(teamR[0].id, Team.BLUE);
				}
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else {
					redToSpecBtn();
					blueToRedBtn();
				}
				setTimeout(() => { topBtn(); }, 200);
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 4) {
				resetBtn();
				setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
				setTimeout(() => { room.startGame(); }, 2000);
			}
			else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
				if (lastWinner == Team.RED) {
					blueToSpecBtn();
				}
				else {
					redToSpecBtn();
					blueToRedBtn();
				}
				setTimeout(() => { topBtn(); }, 200);
				activateChooseMode();
			}
			else if (players.length == 6) {
				resetBtn();
				setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
				setTimeout(() => { room.startGame(); }, 2000);
			}
		}
	}
}

room.onGamePause = function (byPlayer) {
}

room.onGameUnpause = function (byPlayer) {
    if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
        deactivateChooseMode();
    }
}

room.onTeamGoal = function (team) {
    activePlay = false;
    countAFK = false;
    const scores = room.getScores();
    game.scores = scores;
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
        if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
            var frasegol = frasesGols[(Math.random() * frasesGols.length) | 0]
            var fraseasis = frasesasis[(Math.random() * frasesasis.length) | 0]
            room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + lastPlayersTouched[0].name + fraseasis + lastPlayersTouched[1].name + ". Velocidade da bola : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? 0xFF0000 : 0x3C39CE),'bold');
            game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
        }
        else {
            var frasegol = frasesGols[(Math.random() * frasesGols.length) | 0]
            room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + lastPlayersTouched[0].name + " ! Velocidade da bola : " + ballSpeed.toPrecision(4).toString() + "km/h " +  (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? 0xFF0000 : 0x3C39CE),'bold');
        }
    }
    else {
        var fraseautogol = frasesautogol[(Math.random() * frasesautogol.length) | 0]
        room.sendAnnouncement("😂 " + getTime(scores) + fraseautogol + lastPlayersTouched[0].name + " ! Velocidade da bola : " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? 0xFF0000 : 0x3C39CE),'bold');
        game.goals.push(new Goal(scores.time, Team, null, null));
    }
    if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
        endGame(team);
        goldenGoal = false;
        setTimeout(() => { room.stopGame(); }, 1000);
    }
        let players = room.getPlayerList();

    for (let i = 0; i < players.length; i++) {
        if (players[i].team == team) room.setPlayerAvatar(players[i].id, "⚽");
    }
    setTimeout(() => {
        for (let i = 0; i < players.length; i++) {
           room.setPlayerAvatar(players[i].id, null);
        }
    }, secondsToResetAvatar * 1000);
}

room.onPositionsReset = function () {
    countAFK = true;
    lastPlayersTouched = [null, null];
}

/* MISCELLANEOUS */

room.onRoomLink = function (url) {
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
    if (getMute(changedPlayer) && changedPlayer.admin) {
        room.sendChat(changedPlayer.name + "foi desmutado.");
        setMute(changedPlayer, false);
    }
    if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
        room.sendChat("No tienes permiso para nombrar a un jugador como Administrador !", byPlayer.id);
        room.setPlayerAdmin(changedPlayer.id, false);
    }
}

room.onStadiumChange = function (newStadiumName, byPlayer) {
}

room.onGameTick = function () {
    checkTime();
    getLastTouchOfTheBall();
    getStats();
    handleInactivity();
}
