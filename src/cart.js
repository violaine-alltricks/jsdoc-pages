/** @module Cart **/

import { add, multiply } from '.'

/**
 * @typedef Item
 * @type {object}
 * @property {number} price - the item price
 * @property {number} quantity - the item quantity
 */

/**
 * @typedef Cart
 * @type {Array.<Item>}
 */

/**
 * Return the total of all item in the cart
 * @function getTotal
 * @description Return the total of all item in the cart
 * @param {Cart} cart - the cart containing items
 * @example getTotal(cart)
 * @returns {number}
 */
 export function getTotal(cart) {
  return cart.reduce((total, item) => {
    return add(total, multiply(item.price, item.quantity));
  }, 0);
}
