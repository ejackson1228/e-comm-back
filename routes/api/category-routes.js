const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: [
      {
      model: Product, // include associated products
      attributes: ['product_name', 'price', 'stock']
      }
    ]
  }).then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['category_name'],
    include: [
      {
      model: Product, //include associated products
      attributes: ['product_name', 'price', 'stock']
      }
    ]
  }).then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No Category found with that ID!'});
      return;
    }
    res.json(dbCategoryData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new category
  //expects category_name
  Category.create({
    category_name: req.body.category_name
  }).then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbCategoryData  => {
    if(!dbCategoryData) {
      res.status(404).json({ message: 'No Category found with this ID!'});
      return;
    }
    res.json(dbCategoryData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCategoryData => {
    if(!dbCategoryData) {
      res.status(404).json({ message: 'No Category found with this ID!'});
      return;
    }
    res.json(dbCategoryData)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

module.exports = router;
