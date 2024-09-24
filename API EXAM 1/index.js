let productData;
const getData = async () => {
  let request = await fetch("https://dummyjson.com/products");
  let response = await request.json();
  mapper(response.products);
  productData = response.products;
};

getData();

const mapper = (products) => {
  document.getElementById("product").innerHTML = "";
  products.map((product) => {
    let div = document.createElement("div");
    div.className = "product-box";

    let id = document.createElement("h3");
    id.innerHTML = product.id;
    id.className = `ID: ${product.id}`;

    let images = document.createElement("img");

    images.src = product.images;
    images.className = "images";

    let title = document.createElement("h3");
    title.innerHTML = product.title;
    title.className = "title";

    let price = document.createElement("h3");
    price.innerHTML = `Price: $${product.price}`;
    price.className = "price";

    let category = document.createElement("h3");
    category.innerHTML = `Category: ${product.category}`;
    category.className = "category";

    let rating = document.createElement("h3"); 

    if (product.rating > 4) {
      rating.innerHTML = `<span class="abc">Rating:${product.rating}</span>⭐⭐⭐⭐⭐`;
    } else if (product.rating > 3) {
      rating.innerHTML = `<span class="abc">Rating:${product.rating}</span>⭐⭐⭐⭐`;
    } else if (product.rating > 2) {
      rating.innerHTML = `<span class="abc">Rating:${product.rating}</span>⭐⭐⭐`;
    } else if (product.rating > 1) {
      rating.innerHTML = `<span class="abc">Rating:${product.rating}</span>⭐⭐`
    } else {
      rating.innerHTML = `<span class="abc">Rating:${product.rating}</span>⭐`;
    }
    // let brand = document.createElement("h3");
    // brand.innerHTML = `Brand: ${product.brand} `;
    // brand.className = "brand";

    let sku = document.createElement("h3");
    sku.innerHTML = `SKU: ${product.sku}`;

    div.append(id, images, title, price, category,sku,rating);
    document.getElementById("product").append(div);
  });
};

// search

const handleSearch = () => {
  let searchInput = document.getElementById("Search").value.toLowerCase();
  let filteredData = productData.filter((product) =>
    product.title.toLowerCase().includes(searchInput)
  );
  mapper(filteredData);
};

document.getElementById("search-btn").addEventListener("click", handleSearch);

// Sorting
const handlesorting = (order) => {
  if (order == "lth") {
    productData.sort((a, b) => a.price - b.price);
  } else {
    productData.sort((a, b) => b.price - a.price);
  }
  mapper(productData);
};

document.getElementById("sort").addEventListener("change", (e) => {
  handlesorting(e.target.value);
});

// filter
const handlefilter = (category) => {
  let filteredData = productData.filter(
    (product) => product.category == category
  );
  mapper(filteredData);
};

document.getElementById("filter").addEventListener("change", (e) => {
  handlefilter(e.target.value);
});
