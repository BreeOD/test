class orderProcessor {
  constructor(user, items, discountCode, shippingAddress, billingAddress) {
    this.user = user;
    this.items = items;
    this.discountCode = discountCode;
    this.shippingAddress = shippingAddress;
    this.billingAddress = billingAddress;
  }

  processOrder() {
    //magic number
    const TAX_RATE = 0.7;
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
        const item = this.items[i];
        total += item.price * item.quantity;
    }   

    //duplicae code with shipping and billing address
    if (this.shippingAddress.country === 'US') {
        total += 5; //flat shipping fee for US
    } else {
        total += 15; //flat shipping fee for international
    }

    if (this.billingAddress.country === 'US') {
        total += 5; //flat shipping fee for US
    } else {
        total += 15; //flat shipping fee for international
    }

    if (this.discountCode) {
        //duplicae code with discount code
        if (this.discountCode === 'DISCOUNT10') {
            total -= 10;
        }
    }else if {
        total -= 0;
    }

    else if (this.discountCode === 'VIP15') {
        total -= 15;
    }

    return total;
}
