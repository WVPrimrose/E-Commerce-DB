const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    const categoryData = Category.findAll();
    res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  try {
    const categoryData = Category.findByPk();
    res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  try {
    const categoryData = Category.create(req.body)
    res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const categoryData = Category.findByPk(req.params.id);
    const changeCategoryData = Category.put(req.params.id);
    res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
    const categoryData = Category.destroy({
      where: {
        id: req.params.id
      }
    });
    
    if (!categoryData) {
      res.status(404).json({ message: 'Please enter a valid id.'});
      return;
    }

    res.json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
