import Debug from "debug";
const debug = Debug("app:init");
import createError from "http-errors";

import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import { requireAuth, checkUser } from "./middlewares/auth.js";
import { API } from "./config.js";

// CONTROLLER:
import swaggerRoutes from "./routes/swagger.routes.js";
import authRoutes from "./routes/auth.routes.js";

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
app.use(checkUser);
app.use(swaggerRoutes);
app.use("/auth", authRoutes);
app.use("/api", requireAuth, customerRoutes);
app.use("/api", requireAuth, tripRoutes);
app.use("/api", requireAuth, userRoutes);
app.use("/api", requireAuth, hostRoutes);
app.use("/api", requireAuth, transportationRoutes);
app.use("/api", requireAuth, activitiesRoutes);

// TESTS DB:
app.use("/test/DB", dbTest);

app.use("/test/DB/tables/users", userTest);
app.use("/test/DB/tables/customers", customerTest);
app.use("/test/DB/tables/trips", tripTest);
app.use("/test/DB/tables/host", hostTest);
app.use("/test/DB/tables/transportation", transportationTest);
app.use("/test/DB/tables/activities", activitiesTest);
// app.use("/test/DB/tables/materilizedViews", invoicesTest);

app.use("/test/DB/crud", postTest);
app.use("/test/DB/crud", createTest);
app.use("/test/DB/crud", deleteTest);
app.use("/test/DB/crud", updateTest);

app.get("/fayo", () => {
  throw new Error("a avido un fayo");
});
// TEST API:
// TODO
app.use((req, res, next) => {
  debug("route not found");
  next(createError(404));
});

app.use((err, req, res, next) => {
  debug("error handler");
  return res.status(err.status || 500).json({
    error: err.message,
  });
});

app.listen(API.port);
debug(`Server running at [${API.host}:${API.port}]:`);

export default app;
