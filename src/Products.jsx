import "./App.css"

function Products({ product, key }) {
    console.log(product);
    
    return (
              <div class="card">
              <div class="image_container">
                   <img src={product.images} alt="" />
              </div>
           <div class="title">
              <span>{product.title}</span>
           </div>
            <p>{product.description}</p>
           <div class="action">
                 <div class="price">
                    <span>{product.price}$</span>
                 </div>
                    <button class="cart-button">
                       <span>Add to cart</span>
                    </button>
                 </div>
           </div>
    );
  }
  
  export default Products;