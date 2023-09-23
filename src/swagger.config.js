import path from "path";
import { fileURLToPath } from "url";
import { API } from "./config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "VIAJESTION API",
      version: "1.0.0",
    },
    servers: [{ url: `${API.host}:${API.port}` }],
  },
  apis: [`${path.join(__dirname, "./documentation/*.js")}`],
};

export default swaggerSpec;
