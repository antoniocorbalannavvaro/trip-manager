import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/users.routes.js";
import customerRoutes from "./routes/customers.routes.js";
import tripRoutes from "./routes/trips.routes.js";
import hostRoutes from "./routes/host.routes.js";
import transportationRoutes from "./routes/transportation.routes.js";
import activitiesRoutes from "./routes/activities.routes.js";
import dbTest from "../database/tests/routes/db.test.routes.js";
import userTest from "../database/tests/routes/users.test.routes.js";
import customerTest from "../database/tests/routes/customers.test.routes.js";
import postCycle from "../database/tests/routes/post.test.routes.js";
import createCycle from "../database/tests/routes/create.test.routes.js";
import deleteCycle from "../database/tests/routes/delete.test.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerRoutes from "./routes/swagger.routes.js";
import { API } from "./config.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api", customerRoutes);
app.use("/api", tripRoutes);
app.use("/api", userRoutes);
app.use("/api", hostRoutes);
app.use("/api", transportationRoutes);
app.use("/api", activitiesRoutes);
app.use("", swaggerRoutes);

//TESTS:
app.use("/test", dbTest);
app.use("/test/users", userTest);
app.use("/test/customers", customerTest);
app.use("/test/postCycle", postCycle);
app.use("/test/createCycle", createCycle);
app.use("/test/deleteCycle", deleteCycle);

app.use((err, req, res, next) => {
  return res.status(404).json({
    error: err.message,
  });
});

app.listen(API.port);
console.log(`Server running at [${API.host}:${API.port}]:`);

export default app;
