const router = require("express").Router();
const Role = require("../../models/Role");

// CREATE a new Role
router.post("/", async (req, res) => {
  const roleData = await Role.create(req.body);

  return res.json(roleData);
});

// GET all roles .get
router.get("/", async (req, res) => {
  try {
    const roleData = await Role.findAll();
    if (!roleData) {
      res.status(404).json({ message: "No ROLES found in database" });
      return;
    }
    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a role .get
router.get("/:role_id", async (req, res) => {
  try {
    const roleData = await Role.findByPk(req.params.id);
    if (!roleData) {
      res.status(404).json({ message: "No ROLE with this id!" });
      return;
    }
    res.status(200).json(roleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a role .put
router.put("/:role_id", async (req, res) => {
  const roleData = await Role.update(
    {
      title: req.body.title,
      salary: req.body.salary,
    },
    {
      where: {
        role_id: req.params.role_id,
      },
    }
  );

  return res.json(roleData);
});

// DELETE a role .destroy
router.delete("/:role_id", async (req, res) => {
  const roleData = await Role.destroy({
    where: {
      role_id: req.params.role_id,
    },
  });
  return res.json(roleData);
});

module.exports = router;
