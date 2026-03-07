const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/roleMiddleware");

const {
placeOrder,
getUserOrders,
getAllOrders
} = require("../controllers/orderController");

router.post("/",auth,placeOrder);

router.get("/my",auth,getUserOrders);

router.get("/",auth,admin,getAllOrders);

module.exports = router;