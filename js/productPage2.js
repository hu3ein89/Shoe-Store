let productsArray = [
    {id:9, title:'Nike Air jordan 68', price:"$49.99", img:"./img/blackwhite-left.png" },
    {id:10, title:'Nike Air jordan 48', price:"$49.99", img:"./img/gray-left.png" },
    {id:11, title:'Nike Air force 68', price:"49.99$", img:"./img/pinkblack-left.png"},
    {id:12, title:'Nike p-6000', price:"49.99$", img:"./img/cardgallery\ slide6.png" },
    {id:13, title:'Nike Zoom vomero', price:"49.99$", img:"./img/redwhite-left.png" },
    {id:14, title:'Nike dunk low retro', price:"49.99$", img:"./img/PngItem_119800.png" },
    {id:15, title:'Nike Zoom challenge', price:"49.99$", img:"./img/white.png"},
    {id:16, title:'Nike Vaporfly 20', price:"49.99$", img:"./img/cardgallery-slide8.png"}
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



