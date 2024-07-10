// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  through: {
    model: Category,
    unique: fasle
  },
  as: 'product_category'
});
// Categories have many Products
Category.hasMany(Product, {
  through: {
    model: Product,
    unique: false
  },
  as: 'category_product'
});
// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_tag'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  through: {
    model: ProductTag,
    unique: fasle
  },
  as: 'tag_name'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
