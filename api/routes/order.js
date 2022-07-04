const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');
const OrdersController = require('../controllers/orders');

const Order = require('../models/order');
const Product = require('../models/products');

router.get('/', checkAuth, OrdersController.orders_get_all );

router.post('/', checkAuth, OrdersController.order_create_order);

router.get('/:orderId', checkAuth, OrdersController.orders_get_order);

router.delete('/:orderId', checkAuth, OrdersController.orders_delete_order)

module.exports = router;