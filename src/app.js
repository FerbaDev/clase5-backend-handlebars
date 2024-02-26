import express from "express"
const app = express();
const PUERTO = 8080;
import exphbs from "express-handlebars"
import { productos } from "./productos.js";

//configuramos handlebars en 3 lineas
app.engine("handlebars", exphbs.engine()); //le digo a express que cuando encuentre un archivo con la ext handlebars lo tiene que renderizar con el motor de plantillas
app.set("view engine", "handlebars"); //aca le decimos que el motor es handlebars
app.set("views", "./src/views"); //aca le pasamos la ruta para que los encuentre

//rutas
app.get("/", (req, res) => {
    const usuario = {
        nombre: "Fer",
        apellido: "Barron",
        mayorEdad: true

    }
    res.render("home", {titulo: "Trabajando handlebars", usuario, productos});
})

app.get("/contacto", (req, res) => {
    res.render("contacto", {titulo: "Contacto"} )
})
//listen
app.listen(PUERTO, () => {
    console.log("escuchando");
})
