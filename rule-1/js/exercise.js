function calculateCartTotalBad(cart) {
    let total = 0;
    if (cart.items.length > 0) {
      for (let i = 0; i < cart.items.length; i++) {
        const item = cart.items[i];
        if (item.price > 0) {
          if (item.quantity > 0) {
            total += item.price * item.quantity;
            if (item.discount) {
              total -= item.discount;
            }
          }
        }
      }
    }
    return total;
  }