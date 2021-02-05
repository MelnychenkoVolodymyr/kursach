class Products {

	render(){
		let htmlCatalog = '';

		CATALOG.forEach(({id, url, name, price})=>{
			htmlCatalog +=`
			<div class="column-product__item">
			<div class="column-product__img">
				<p class="column-product__sale">sale</p>
				<img src="${url}" alt="">
				<div class="column-product__add-to-cart add-to-cart"><span class="material-icons">shopping_basket</span> add to cart</div>
			</div>
			<div class="column-product__text">
				<div class="column-product__title"><a href="./product-details.html">${name}</a></div>
				<div class="column-product__price-row">
					<!-- <p class="column-product__wishlist icons"><span class="material-icons">favorite</span></p> -->
					<a href="./product-details.html"><p class="column-product__price price">&#36;${price}</p></a>
				</div>
			</div>
			</div>`;
		});
		ROOT_PRODUCT_CATALOG.innerHTML = htmlCatalog;
		// ROOT_RECK_PRODUCT.innerHTML = htmlCatalog;
	}

}

const productsEx = new Products();

productsEx.render();

