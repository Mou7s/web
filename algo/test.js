class ProductSearch {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }
  searchProduct(prefix) {
    return this.products.filter(
      (product) => product.slice(0, prefix.length) == prefix
    );
  }
}

const productSearch = new ProductSearch();

productSearch.addProduct('apple');

console.log(productSearch.searchProduct('ap'));
