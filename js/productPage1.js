let productsArray = [
    {id:1, title:'Adidas jog12', price:"$49.99", img:"./img/cardgallery-slide1.png" },
    {id:2, title:'Nike vaporfly3', price:"$49.99", img:"./img/cardgallery slide2.png" },
    {id:3, title:'Nike Air Force', price:"49.99$", img:"./img/cardgallery-slide7.png"},
    {id:4, title:'Nike Jordan Jumpman', price:"49.99$", img:"./img/cardgallery-slide9.png" },
    {id:5, title:'Air Jordan65', price:"49.99$", img:"./img/PngItem_1093681.png" },
    {id:6, title:'Air jordan45', price:"49.99$", img:"./img/PngItem_6136909.png" },
    {id:7, title:'Air Max 20', price:"49.99$", img:"./img/PngItem_4034734.png"},
    {id:8, title:'Air Max26', price:"49.99$", img:"./img/PngItem_2644071.png"}
]



let containerElem = document.getElementById('productDetail')
containerElem.className = 'row'

productsArray.forEach( (product, index) => {
    containerElem.insertAdjacentHTML('beforeend', `
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div id="product-${product.id}" class="single-product">
                <div class="part-1" style="background: url('${product.img}') no-repeat center;background-size:contain;background-color: #444444;border-radius:10px">
                    <ul>
                        <li><a href="Adidas.htm?id=${product.id}"><i class="fa fa-shopping-cart"></i></a></li>
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-expand"></i></a></li>
                    </ul>
                </div>
                <div class="part-2">
                    <h3 class="product-title">${product.title}</h3>
                    <h4 class="product-old-price">$79.99</h4>
                    <h4 class="product-price">${product.price}</h4>
                </div>
            </div>
        </div>
    `)
})

console.log(containerElem);



