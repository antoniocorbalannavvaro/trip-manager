import { Router } from "express";
import { SwaggerTheme } from "swagger-themes";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../swagger.config.js";

const router = Router();

router.use(
  "/api-doc",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJSDoc(swaggerSpec), {
    customCss: new SwaggerTheme("v3").getBuffer("dark"),
  })
);

export default router;
