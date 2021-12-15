const router = require("express").Router();

const empRoutes = require("./empRoutes");
const depRoutes = require("./depRoutes");
const roleRoutes = require("./roleRoutes");

router.use("/emps", empRoutes);
router.use("/deps", depRoutes);
router.use("/roles", roleRoutes);

module.exports = router;
