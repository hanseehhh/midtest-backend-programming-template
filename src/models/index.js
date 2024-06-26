const mongoose = require('mongoose');
const config = require('../core/config');
const logger = require('../core/logger')('app');

const usersSchema = require('./users-schema');
const ecommerceSchema = require('./ecommerce-schema')
const orderSchema = require('./order-schema')

mongoose.connect(`${config.database.connection}/${config.database.name}`, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.once('open', () => {
  logger.info('Successfully connected to MongoDB');
});

const User = mongoose.model('users', mongoose.Schema(usersSchema));

const Ecommerce = mongoose.model('ecommerce', mongoose.Schema(ecommerceSchema));

const Order = mongoose.model('order', mongoose.Schema(orderSchema));


module.exports = {
  mongoose,
  User,
  Ecommerce,
  Order,
};
