import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { API } from "./config.js";

// CONTROLLER:
import swaggerRoutes from "./routes/swagger.routes.js";
import userRoutes from "./routes/users.routes.js";
import customerRoutes from "./routes/customers.routes.js";
import tripRoutes from "./routes/trips.routes.js";
import hostRoutes from "./routes/host.routes.js";
import transportationRoutes from "./routes/transportation.routes.js";
import activitiesRoutes from "./routes/activities.routes.js";

// -------------TESTS------------- //
/*DB*/
import dbTest from "../database/tests/db.test.js";

/*TABLES*/
import userTest from "../database/tests/tables/users.js";
import customerTest from "../database/tests/tables/customers.js";
import tripTest from "../database/tests/tables/trips.js";
import hostTest from "../database/tests/tables/host.js";
import transportationTest from "../database/tests/tables/transportation.js";
import activitiesTest from "../database/tests/tables/activities.js";

/*CRUD*/
import postTest from "../database/tests/CRUD/post.js";
import createTest from "../database/tests/CRUD/create.js";
import deleteTest from "../database/tests/CRUD/delete.js";
import updateTest from "../database/tests/CRUD/update.js";
// -------------------------------- //

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// CONTROLLER:
app.use("/api", customerRoutes);
app.use("/api", tripRoutes);
app.use("/api", userRoutes);
app.use("/api", hostRoutes);
app.use("/api", transportationRoutes);
app.use("/api", activitiesRoutes);
app.use("", swaggerRoutes);

// TESTS DB:
app.use("/test/DB", dbTest);

app.use("/test/DB/tables/users", userTest);
app.use("/test/DB/tables/customers", customerTest);
app.use("/test/DB/tables/trips", tripTest);
app.use("/test/DB/tables/host", hostTest);
app.use("/test/DB/tables/transportation", transportationTest);
app.use("/test/DB/tables/activities", activitiesTest);

app.use("/test/DB/crud", postTest);
app.use("/test/DB/crud", createTest);
app.use("/test/DB/crud", deleteTest);
app.use("/test/DB/crud", updateTest);

// TEST API:
// TODO

app.use((err, req, res, next) => {
  return res.status(404).json({
    error: err.message,
  });
});

app.listen(API.port);
console.log(`Server running at [${API.host}:${API.port}]:`);

export default app;
