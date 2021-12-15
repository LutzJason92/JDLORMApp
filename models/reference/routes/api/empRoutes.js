const router = require("express").Router();
const Emps = require("../../models/Emps");

// CREATE a new Emp
router.post("/", async (req, res) => {
  const empData = await Emps.create(req.body);

  return res.json(empData);
});

// GET all employees .get
router.get("/", async (req, res) => {
  try {
    const empData = await Emps.findAll();
    if (!empData) {
      res.status(404).json({ message: "No EMPLOYEES found in database" });
      return;
    }
    res.status(200).json(empData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a employee .get
router.get("/:id", async (req, res) => {
  try {
    const empData = await Emps.findByPk(req.params.id);
    if (!empData) {
      res.status(404).json({ message: "No EMPLOYEE with this id!" });
      return;
    }
    res.status(200).json(empData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a employee .put
router.put("/:emp_id", async (req, res) => {
  const empData = await Emps.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      role_id: req.body.role_id,
    },
    {
      where: {
        emp_id: req.params.emp_id,
      },
    }
  );

  return res.json(empData);
});

// DELETE a employee .destroy
router.delete("/:emp_id", async (req, res) => {
  const empData = await Emps.destroy({
    where: {
      emp_id: req.params.emp_id,
    },
  });
  return res.json(empData);
});

module.exports = router;
