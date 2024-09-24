const Ui = async () => {
    let request = await fetch("https://fakestoreapi.com/products");
    let response = await request.json();
    console.log(response);

    mapper(response);
}

Ui();

const mapper = (data) => {
    data.map((product) => { 
        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.src = product.image;



        let id = document.createElement("h3");
        id.innerHTML = `Product: ${product.id}`;
        id.className="id"

        let title = document.createElement("h3");
        title.innerHTML =  `Title: ${product.title}`;
        title.className="title"

        let price = document.createElement("h3");
        price.innerHTML =  `Price: ${product.price}`;
        price.className="price"
         
        card.append(id,img,title,price);
        document.getElementById("cards").append(card);
    });
}
