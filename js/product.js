
let $ = document;
let mainProductImage = $.getElementById('mainProductImage');
let mainProductSecondImage = $.getElementById('mainProductSecondImage');
let image1Index = $.getElementById('image1Index');
let image2Index = $.getElementById('image2Index');
let productHeadTitle = $.getElementById('productHeadTitle');
let productImgTitle = $.getElementById('productImgTitle');
let productColorPick = $.querySelectorAll('.colorPick');
let userSizeResult = $.getElementById('userSize');
let SizeValue = $.querySelectorAll('.btn-outline-dark');
let productPriceElem = $.getElementById('price');
let buyButtonElem = $.getElementById('buyButton');
let trashAddProductbtn = $.querySelector('#addTrashGroupBtn');
let basketCount = $.getElementById('basket-count');
let finalPurchase = $.getElementById('basketModal');
let gToBasketELem = $.getElementById('gToBasket');
let gToBasketIcon = $.getElementById('gToBasketIcon');

// modal page variables
let userChosenColor = $.getElementById('userChosenColor');
let productColorPickInput = $.querySelectorAll('.form-check-input');
let userChosenSize = $.getElementById('userChosenSize');
let userChosenTitle = $.getElementById('userChosenTitle');
let userChosenid = $.getElementById('userChosenid');
let totalProductPrice = $.getElementById('totalPrice');
let finalCost = $.getElementById('finalCost');
let userBasketQuantity = $.getElementById('userBasketQuantity');

let productsArray = [
    {id:1, count:1, title:'Adidas jog12', price:"$49.99" , indexImg2:"./img/cardgallery-slide1-green.png", img:"./img/cardgallery-slide1.png",colors : [' orange' , ' green']},
    {id:2, count:1, title:'Nike vaporfly3', price:"$49.99"  , indexImg2:"./img/cardgallery-slide2-white.png", img:"./img/cardgallery slide2.png" ,colors : ['black' , ' white']},
    {id:3, count:1, title:'Nike Air Force', price:"49.99$" ,  indexImg2:"./img/black-left-white.png", img:"./img/black-left.png",colors : ['black' , 'white']},
    {id:4, count:1, title:'Nike Jordan Jumpman', price:"49.99$" , indexImg2:"./img/cardgallery-slide3-green.png", img:"./img/cardgallery slide3.png",colors : ['orange' , 'green']},
    {id:5, count:1, title:'Air Jordan65', price:"49.99$" , indexImg2:"./img/PngItem_1093681-purple.png", img:"./img/PngItem_1093681.png",colors : ['blue' , 'purple'] },
    {id:6, count:1, title:'Air jordan45', price:"49.99$", indexImg2:"./img/PngItem_6136909-yellow.png", img:"./img/PngItem_6136909.png",colors : ['purple' , 'green'] },
    {id:7, count:1, title:'Air Max 20', price:"49.99$", indexImg2:"./img/PngItem_4034734-purple.png", img:"./img/PngItem_4034734.png",colors : ['blue' , 'purple']},
    {id:8, count:1, title:'Air Max26', price:"49.99$", indexImg2:"./img/PngItem_2644071-green.png", img:"./img/PngItem_2644071.png",colors : ['gray' , 'green']},
    {id:9, count:1, title:'Nike Air jordan 68', price:"$49.99", indexImg2:"./img/qqqq.png", img:"./img/blackwhite-left.png" ,colors : ['black' , 'gray-green']},
    {id:10, count:1, title:'Nike Air jordan 48', price:"$49.99", indexImg2:"./img/gray-left-blue.png", img:"./img/gray-left.png" ,colors : ['gray' , 'blue']},
    {id:11, count:1, title:'Nike Air force 68', price:"49.99$", indexImg2:"./img/pinkblack-left-green.png", img:"./img/pinkblack-left.png",colors : ['pink' , 'green']},
    {id:12, count:1, title:'Nike p-6000', price:"49.99$", indexImg2:"./img/ccccccc.png", img:"./img/cardgallery\ slide6.png",colors : ['black' , 'orange'] },
    {id:13, count:1, title:'Nike Zoom vomero', price:"49.99$", indexImg2:"./img/redwhite-left-blue.png", img:"./img/redwhite-left.png" ,colors : ['red' , 'blue']},
    {id:14, count:1, title:'Nike dunk low retro', price:"49.99$", indexImg2:"./img/PngItem_119800-blue.png", img:"./img/PngItem_119800.png",colors : ['black' , 'blue'] },
    {id:15, count:1, title:'Nike Zoom challenge', price:"49.99$", indexImg2:"./img/white-green.png", img:"./img/white.png",colors : ['blue' , 'green']},
    {id:16, count:1, title:'Nike Vaporfly 20', price:"49.99$", indexImg2:"./img/cardgallery-slide8-blue.png", img:"./img/cardgallery-slide8.png",colors : ['pink' , 'blue']}
]
let basket = []
basketCount = 0
$.getElementById('basket-count').textContent = '+' + basketCount;

let locationParams = new URLSearchParams(location.search);
let mainProductId = locationParams.get('id');
let mainProductProject = productsArray.find((product) => product.id === Number(mainProductId));

if (mainProductProject) {
  mainProductImage.setAttribute('src', mainProductProject.img);
  mainProductSecondImage.setAttribute('src', mainProductProject.indexImg2);
  image1Index.setAttribute('src', mainProductProject.img);
  image2Index.setAttribute('src', mainProductProject.indexImg2);
  productHeadTitle.textContent = mainProductProject.title;
  productImgTitle.textContent = mainProductProject.title;
  productPriceElem.innerHTML = mainProductProject.price;

  image2Index.addEventListener('mouseout', changePoster);
  image2Index.addEventListener('mouseover', changePoster2);

  productColorPick[0].textContent = mainProductProject.colors[0];
  productColorPick[1].textContent = mainProductProject.colors[1];
}

// product show off function
function changePoster() {
  mainProductImage.setAttribute('src', mainProductProject.img);
}

function changePoster2() {
  mainProductImage.setAttribute('src', mainProductProject.indexImg2);
}

// selecting size & colors
let selectedSize = null;
let selectedColor = null;

SizeValue.forEach((size) => {
  size.addEventListener('click', () => {
    selectedSize = size.innerHTML;
    userSizeResult.textContent = `${selectedSize} US`;
    userChosenSize.textContent = `${selectedSize} US`;
  });
});

productColorPickInput.forEach((input) => {
  input.addEventListener('click', () => {
    selectedColor = input.nextElementSibling.textContent;
    userChosenColor.textContent = `${selectedColor}`;
  });
});
function updateLocalStorage() {
  localStorage.setItem('basket', JSON.stringify(basket));
}

// user basket events

buyButtonElem.addEventListener('click', function addProductToBasket(productAmount) {
  gToBasketELem.disabled = false
  gToBasketIcon.classList.remove('bi-cart-dash' , 'text-danger')
  gToBasketIcon.classList.add('bi-cart-check' , 'text-warning')
  // Check if the product is already in the basket
  let existingProduct = basket.find((product) => product.id === mainProductProject.id);
  buyButtonElem.disabled = true;
  
  if (!existingProduct) {
    const newElement = `
    <div class="btn-group">
    <button class="trashAndaddbtn btn btn-danger rounded-0" id="removeProductBtn"><i class="bi bi-trash"></i></button>
    <a id="productAmount" class="trashAndaddbtn bg-dark text-white">1</a>
    <button class="trashAndaddbtn btn btn-warning rounded-0" id="addProductBtn"><i class="bi bi-plus-square"></i></button>
    </div>
    `;
    
    trashAddProductbtn.insertAdjacentHTML('beforeend', newElement);
    
    
    let removeProductBtn = $.getElementById('removeProductBtn');
    let addProductBtn = $.getElementById('addProductBtn');
    let productAmount = $.getElementById('productAmount');
    
    function updateBasketCount(productAmount) {
      localStorage.setItem('basket', JSON.stringify(basket));
      $.getElementById('basket-count').textContent = '+' + basketCount;
      productAmount.textContent = basketCount;
    }
    
removeProductBtn.addEventListener('click', function() {

  if (productAmount.textContent > 0) {
    productAmount.textContent = parseInt(productAmount.textContent) - 1;
    basketCount = Math.max(0, basketCount - 1);
    mainProductProject.count--;
    if (productAmount.textContent < 1) {
      removeProductBtn.parentElement.remove();
      let index = basket.findIndex((product) => product.id === mainProductProject.id);
      if (index!== -1) {
        basket.splice(index, 1);
        mainProductProject.count = 1;
      }
      buyButtonElem.disabled = false;
    }
    console.log(productAmount.textContent);
  }
  if (productAmount.textContent == 0 ) {
    gToBasketELem.disabled = true
    gToBasketIcon.classList.remove('bi-cart-check' , 'text-warning')
    gToBasketIcon.classList.add('bi-cart-dash' , 'text-danger')
  }

  $.getElementById('basket-count').textContent = '+' + basketCount;
  calcTotalPrice(basket, productAmount);


  // Enable buyButtonElem if quantity is 0

  if (productAmount.textContent == 0) {
    buyButtonElem.disabled = false;
  }

  
// Update the basket count in localStorage
});

addProductBtn.addEventListener('click', function() {
  buyButtonElem.disabled = true;
  productAmount.textContent = parseInt(productAmount.textContent) + 1;
  basketCount++;
      mainProductProject.count++;
      $.getElementById('basket-count').textContent = '+' + basketCount;

      let index = basket.findIndex((product) => product.id === mainProductProject.id);
      if (index!== -1) {
        basket[index].quantity = parseInt(productAmount.textContent);
      }
      calcTotalPrice(basket, productAmount)
    });
    
    const product = {
      id: mainProductProject.id,
      title: mainProductProject.title,
      price: mainProductProject.price,
      size: selectedSize,
      color:selectedColor,
      quantity: mainProductProject.count
    };    

    basket.push(product);

    calcTotalPrice(basket, productAmount)
  } else {
    existingProduct.quantity++; // Update quantity of existing product
    let index = basket.indexOf(existingProduct);

    basket[index] = existingProduct;
    productAmount.textContent = existingProduct.quantity;
    calcTotalPrice(basket, productAmount); // Update total price
    buyButtonElem.disabled = true;
    
  }
  basketCount++;
  $.getElementById('basket-count').textContent = '+' + basketCount;
});


// modal filling
function calcTotalPrice(userBasketArray , productAmount) {
  let totalPrice = 0;
  userBasketArray.forEach(function() {
    let priceString = mainProductProject.price.replace('$', ''); // Remove the dollar sign
    let priceFloat = parseFloat(priceString); // Parse as a float
    totalPrice += priceFloat * mainProductProject.count; 
  });
  totalProductPrice.innerHTML = `$${totalPrice.toFixed(2)}`; // Round to 2 decimal places and add the dollar sign back
  finalCost.innerHTML = `${totalPrice.toFixed(2)}`;
  userBasketQuantity.innerHTML = productAmount.textContent + ' ' + "P" // Round to 2 decimal places and add the dollar sign back
}

$.getElementById('userProductImage').setAttribute('src', mainProductProject.img);
userChosenTitle.textContent = mainProductProject.title;
userChosenid.textContent = '#' + mainProductProject.id;

$.getElementById('basketModal').addEventListener('show.bs.modal', function(event) {

  if (basketCount === 0) {
    event.preventDefault()
  }
});



