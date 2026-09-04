const path = require("node:path");
const fs = require("node:fs");

// Datos del runtime
const estudiante = process.argv[2] || "Nombre del estudiante";

console.log("Node.js:", process.version);
console.log("Plataforma:", process.platform);

// Datos propios del videojuego
const videojuego = {
  titulo: "El Último Guardián",
  estudio: "Luna Roja Studios",
  anio: 2025,
  plataformas: ["PlayStation 5", "Xbox Series X", "PC"],
  multijugador: true
};

// Transformaciones solicitadas
const plataformasTexto = videojuego.plataformas.join(", ");
const multijugadorTexto = videojuego.multijugador ? "Si" : "No";

// Construccion de la ficha
const ficha = `FICHA DE VIDEOJUEGO
===================
Estudiante: ${estudiante}
Node.js: ${process.version}
Plataforma del sistema: ${process.platform}
Titulo: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${plataformasTexto}
Es multijugador: ${multijugadorTexto}`;

// Mostrar la ficha en la terminal
console.log("\n" + ficha);

// Crear la carpeta salida y guardar el archivo
const carpetaSalida = path.join(__dirname, "salida");
const rutaArchivo = path.join(carpetaSalida, "ficha-videojuego.txt");

fs.mkdirSync(carpetaSalida, { recursive: true });
fs.writeFileSync(rutaArchivo, ficha, "utf8");

// Informar la ruta generada
console.log(`\n Archivo generado en: ${rutaArchivo}`);