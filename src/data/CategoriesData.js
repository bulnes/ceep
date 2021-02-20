class CategoriesData {

  constructor() {
    this.items = [];
  }

  createCategory(name) {
    this.items.push(name);
  }
}

export default CategoriesData;
