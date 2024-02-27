const router = require("express").Router();
const leadController = require('../controllers/productController');
// const AddressController = require('../controllers/addressController');
 
router.post("/", leadController.product_create);
router.get("/", leadController.product_all);
router.get("/:leadId", leadController.product_details);
router.put("/:leadId", leadController.product_update);
router.delete("/:leadId", leadController.product_delete);

// router.post("/c", AddressController.address_create);

module.exports = router;
