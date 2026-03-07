const router = require("express").Router();
const auth = require("../middleware/authMiddleware");

const {
addToCart,
getCart
} = require("../controllers/cartController");

router.post("/",auth,addToCart);

router.get("/",auth,getCart);

module.exports = router;