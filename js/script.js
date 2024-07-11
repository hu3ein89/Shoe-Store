let productsArray = [
    {id:9, title:'Air jordan 68', price:"$49.99", img:"./img/blackwhite-left.png" ,description:"fabric body with fiberglass underneath,water resistans"},
    {id:10, title:'Air jordan 48', price:"$49.99", img:"./img/gray-left.png", description:"fabric body with fiberglass underneath,water resistans"},
    {id:11, title:'Nike Air force 68', price:"49.99$", img:"./img/pinkblack-left.png", description:"fabric body with fiberglass underneath,water resistans"},
]

function scrollHandler1(event){
  window.scrollTo(0, 1960);  
}
function scrollHandler2(event){
  console.log(event.scroll)
  window.scrollTo(0, 750);  
}
function scrollHandler3(event){
  console.log(event)
  window.scrollTo(0,2400); 
}


let cardContainerElem = document.getElementById('cardContainer')
cardContainerElem.className = 'row g-5 justify-content-center align-items-center'

productsArray.forEach( (product, index) => {
    cardContainerElem.insertAdjacentHTML('beforeend', `<div class="col-md-4 g-5 mb-5">
    <div class="card text-center text-white cardbg">
      <img src ="${product.img}" alt="" class="img-fluid mt-5 card-image" >
      <div class="card-body">
        <p class=" h4 card-title mt-sm-5">
          ${product.title}
        </p>
        <div class="card-text mb-2">
          ${product.description}
        </div>
         <div class="mb-2 ">
          price:<span class="badge bg-black ">${product.price}</span> 
         </div>
         <div class="card-footer">
          <a class=" btn btn-dark  mt-2" href="Adidas.htm?id=${product.id}">Purchase</a>
         </div>
      </div>
    </div>`)
})

let carouselArray = [
    {id:1, title:'Adidas jog12', img:"./img/cardgallery-slide1.png" },
    {id:2, title:'Nike vaporfly3', img:"./img/cardgallery slide2.png" },
    {id:12, title:'Nike p-6000', img:"./img/cardgallery slide6.png" },
    {id:4, title:'Nike Jordan Jumpman', img:"./img/cardgallery-slide9.png" },
    {id:16, title:'Nike Vaporfly 20', img:"./img/cardgallery-slide8.png"},
    {id:3, title:'Nike Air Force', img:"./img/cardgallery-slide7.png"},
]

let carouselElemContainer = document.querySelector('.carousel-inner')
carouselElemContainer.className = 'carousel-inner w-75 mx-auto'
carouselElemContainer.setAttribute('data-bs-pause' , 'hover')

carouselArray.forEach ((carousel,index) => {
    let carouselItemClass = index === 0 ? 'carousel-item active' : 'carousel-item';
    carouselElemContainer.insertAdjacentHTML('beforeend' , `<div class="${carouselItemClass}">
    <div class="card bg-black">
     <div class="card-body">
     <img src="${carousel.img}" alt="" class="w-100 cardback  d-block img-fluid card-img-top">
     <div class="  mt-md-5 ">
       <a class="card-title fw-bold text-white p-4 card-img-overlay text-decoration-none " href="Adidas.htm?id=${carousel.id}">${carousel.title}<br>MEN Shoes &nbsp;&nbsp;&nbsp;<i class="bi bi-basket3"></i></a>
     </div>
    </div>
    </div>
   </div>`)
})