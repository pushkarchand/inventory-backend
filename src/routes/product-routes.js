const router = require('express')['Router']();
const productController=require('../controllers/product-controller');


router.get('/',productController.enumerateProducts);
router.get('/:id',productController.getProductDetails);
router.post('/',productController.createProduct);
router.put('/',productController.updateProduct);
router.delete('/:id',productController.removeProduct);

module.exports = router;