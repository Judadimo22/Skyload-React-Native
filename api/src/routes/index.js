const { Router } = require("express");
const router = Router();

const loadsRoutes = require("./Loads");
const usersRoutes = require("./Users");


router.use("/loads", loadsRoutes);
router.use("/users", usersRoutes);


module.exports = router;