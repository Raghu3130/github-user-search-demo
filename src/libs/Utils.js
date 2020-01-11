export default class Utils {
  static calculateSellingPrice(book) {
    let sellingPrice = 0;
    if (book.isDscounted === 'Y' || book.msrp === 0) {
      sellingPrice = book.unitPrice;
    } else {
      sellingPrice = book.msrp;
    }

    // if (book.author === 'NCERT') {
    //   sellingPrice += 50; // additional charges
    // }

    // Add Fixed Shipping Charges
    // if (book.fixedShippingCharges && !isNaN(book.fixedShippingCharges)) {
    //   sellingPrice += book.fixedShippingCharges;
    // }
    return sellingPrice;
  }

  static calculateDiscountedPrice(book) {
    let discountedPrice = 0;
    if (book.isDscounted === 'Y' && book.msrp > 0) {
      discountedPrice = book.msrp;
    } else {
      return discountedPrice;
    }
    // if (book.author === 'NCERT' && discountedPrice > 0) {
    //   discountedPrice += 50; // additional charges
    // }

    // Add Fixed Shipping Charges
    // if (book.fixedShippingCharges && !isNaN(book.fixedShippingCharges)) {
    //   discountedPrice += book.fixedShippingCharges;
    // }
    return discountedPrice;
  }
}