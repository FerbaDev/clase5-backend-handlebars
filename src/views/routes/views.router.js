//importamos el router desde express
import { Router } from "express";
const router = Router();
import { productos } from "../../productos.js";

//rutas
router.get("/", (req, res) => {
    const usuario = {
        nombre: "Fer",
        apellido: "Barron",
        mayorEdad: true

    }
    res.render("home", {titulo: "Trabajando handlebars", usuario});
})

router.get("/productos",(req, res) => {
    res.render("productos", {titulo: "Contacto", productos} )
} )

router.get("/contacto", (req, res) => {
    res.render("contacto", {titulo: "Contacto"} )
})

//exportamos y luego importamos en app.ja
export default router;