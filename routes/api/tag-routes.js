const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  try {
    const tagData = Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'tag_name'}]
    })
    
    res.json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = Tag.findbyPk(req.params.id,{
      include: [{ model: Product, through: ProductTag, as: 'tag_name'}]
    });
  
  
    res.json(tagData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  try {
    const tagData = Tag.create(req.body)
    res.json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const tagData = Tag.update({
      where: {
        id: req.params.id
      }
    });

    res.json(tagData);
  } catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/:id', (req, res) => {
  try {
    const tagData = Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    
    res.json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
