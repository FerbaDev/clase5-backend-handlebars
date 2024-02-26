import express from "express"
const app = express();
const PUERTO = 8080;
import exphbs from "express-handlebars"
import viewsRouter from "./routes/views.router.js"
//configuramos handlebars en 3 lineas
app.engine("handlebars", exphbs.engine()); //le digo a express que cuando encuentre un archivo con la ext handlebars lo tiene que renderizar con el motor de plantillas
app.set("view engine", "handlebars"); //aca le decimos que el motor es handlebars
app.set("views", "./src/views"); //aca le pasamos la ruta para que los encuentre

//rutas
app.use("/", viewsRouter)

//listen
app.listen(PUERTO, () => {
    console.log("escuchando");
})


