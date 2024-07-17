const express = require('express');
const router= express.Router();

const {getAllproducts,getAllproductTesting} = require("../controllers/products");

router.route("/").get(getAllproducts);
router.route("/testing").get(getAllproductTesting);

module.exports = router;