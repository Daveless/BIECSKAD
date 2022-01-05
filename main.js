const toggle = document.querySelector("header");


toggle.addEventListener("click", ()=>{
        toggle.classList.toggle("active");
});


const popularProductsBox = document.getElementById("popularProductsBox");
const imageContainer = document.getElementById("imageContainer");


function Product (name, photoUrl, prize, id){
    this.name = name;
    this.photo = photoUrl;
    this.prize = prize;
    this.id = id;
}

let product1 = new Product("Casa en Tnte. Hugo Ortiz", "assets/producto1.jpg", "$400", 1111);
let product2 = new Product("Casa en Mariscal Sucre", "assets/producto2.jpg", "2 cuartos", 1112);
let product3 = new Product("Edificio en Moromoro", "assets/producto3.jpg", "15 cuartos", 1113);
let product4 = new Product("Apartamento en el Norte", "assets/producto4.jpg", "3 cuartos", 1114);
let product5 = new Product("Apartamento en el Sur", "assets/producto5.jpg", "2 cuartos", 1115);
let product6 = new Product("Casa en Tnte. Hugo Ortiz", "assets/producto1.jpg", "5 cuartos", 1116);
let product7 = new Product("Casa en Mariscal Sucre", "assets/producto2.jpg", "2 cuartos", 1117);
let product8 = new Product("Edificio en Moromoro", "assets/producto3.jpg", "15 cuartos", 1118);
let product9 = new Product("Apartamento en el Norte", "assets/producto4.jpg", "3 cuartos", 1119);
let product10 = new Product("Apartamento en el Sur", "assets/producto5.jpg", "2 cuartos", 1120);
let product11 = new Product("Casa en Tnte. Hugo Ortiz", "assets/producto1.jpg", "5 cuartos", 1121);
let product12 = new Product("Casa en Mariscal Sucre", "assets/producto2.jpg", "2 cuartos", 1122);
let product13 = new Product("Edificio en Moromoro", "assets/producto3.jpg", "15 cuartos", 1123);
let product14 = new Product("Apartamento en el Norte", "assets/producto4.jpg", "3 cuartos", 1124);
let product15 = new Product("Apartamento en el Sur", "assets/producto5.jpg", "2 cuartos", 1125);




let products = [product1,product2,product3,
                product4, product5, product6,
                product7, product8, product9,
                product10, product11, product12,
                product13, product14, product15]

let fragment = document.createDocumentFragment();






for (const itemproduct of products ){
    const productContainer = document.createElement("div");
    productContainer.setAttribute("class","cards");
    
    const productImage = document.createElement("img");
    productImage.setAttribute("src", itemproduct.photo)
    const productName = document.createElement("p");
    productName.textContent = itemproduct.name;
    productName.setAttribute("class","productName");
    const productPrize = document.createElement("p");
    productPrize.textContent = `${itemproduct.prize}`;
    productPrize.setAttribute("class","productPrize");
    const linkButton = document.createElement("a");
    linkButton.setAttribute("href",`https://api.whatsapp.com/send?phone=593989014300&text=Quisiera%20información%20%20sobre${itemproduct.name}%0Aid:%20${itemproduct.id}`);
    linkButton.setAttribute("target", "_blank");
    const textButton = document.createElement("p");
    textButton.textContent = "Más información";

    const linkContainer = document.createElement("div");
    linkContainer.setAttribute("class","buttonContainer");
    
    


    productContainer.appendChild(productName);
    productContainer.appendChild(productImage);    
    productContainer.appendChild(productPrize);
    linkButton.appendChild(linkContainer);
    linkContainer.appendChild(textButton);
    productContainer.appendChild(linkButton);
    fragment.appendChild(productContainer);
}

popularProductsBox.appendChild(fragment)
