const router = require("express").Router();
const { Category, Product } = require("../../models");

// reference from index.js
// router.use('/categories', categoryRoutes);

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const catData = await Category.findAll();
    if (!catData) {
      res.status(404).json({ message: "No CATEGORY found in Database" });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const catData = await Category.findByPk(req.params.id);
    if (!catData) {
      res.status(404).json({ message: "No DEPARTMENT with this id!" });
      return;
    }
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const catData = await Category.create(req.body);

  return res.json(catData);
});

router.put("/:id", async (req, res) => {
  const catData = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  return res.json(catData);
});

router.delete("/:id", async (req, res) => {
  const catData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  return res.json(catData);
});

module.exports = router;
