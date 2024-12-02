import {Router} from "express";
import mocksController from "../controllers/mocks.controller.js";

const router = Router();

// Ruta para obtener mascotas simuladas
router.get("/mockingpets", mocksController.getMascotas);

// Ruta para obtener usuarios simulados
router.get("/mockingusers", mocksController.getUsuarios);

// Ruta para generar e insertar datos
router.post("/generateData", mocksController.generateData);

export default router;
