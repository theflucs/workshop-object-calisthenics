function calculateItemPrice(item) {
  const fullPrice = getItemPrice(item);
  return item.discount ? applyDiscount(fullPrice, item.discount) : fullPrice;
}

function getItemPrice(item) {
  return item.price * item.quantity;
}

function applyDiscount(price, discount) {
  return price - discount;
}

function calculateCartTotal(cart) {
  return cart.items.reduce((total, item) => {
    return total + calculateItemPrice(item);
  }, 0);
}
