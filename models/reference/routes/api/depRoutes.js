const router = require("express").Router();
const Dep = require("../../models/Dep");

// CREATE a new Dep
router.post("/", async (req, res) => {
  const depData = await Dep.create(req.body);

  return res.json(depData);
});

// GET all departments .get
router.get("/", async (req, res) => {
  try {
    const depData = await Dep.findAll();
    if (!depData) {
      res.status(404).json({ message: "No DEPARTMENTS found in Database" });
      return;
    }
    res.status(200).json(depData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a department .get
router.get("/:dep_id", async (req, res) => {
  try {
    const depData = await Dep.findByPk(req.params.id);
    if (!depData) {
      res.status(404).json({ message: "No DEPARTMENT with this id!" });
      return;
    }
    res.status(200).json(depData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a department .put
router.put("/:dep_id", async (req, res) => {
  const depData = await Dep.update(
    {
      dep_name: req.body.dep_name,
    },
    {
      where: {
        dep_id: req.params.dep_id,
      },
    }
  );

  return res.json(depData);
});

// DELETE a department .destroy
router.delete("/:dep_id", async (req, res) => {
  const depData = await Dep.destroy({
    where: {
      dep_id: req.params.dep_id,
    },
  });
  return res.json(depData);
});

module.exports = router;
