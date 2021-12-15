const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// inquirer prompts here

module.exports = router;
