const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/roleMiddleware");

const {

createProduct,
getProducts,
updateProduct,
deleteProduct

} = require("../controllers/productController");

router.get("/",auth,getProducts);

router.post("/",auth,admin,createProduct);

router.put("/:id",auth,admin,updateProduct);

router.delete("/:id",auth,admin,deleteProduct);

module.exports = router;