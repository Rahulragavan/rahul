import React, { useState } from 'react';
import './Chicken.css';
import { BsBag } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Products = () => {
    const listings = [
        {
          "id": 1,
          "name": "Kolhapuri Chicken Biryani - 25gms",
          "image":  require( "./img/itm1.webp"),
          "price":"Rs.170.00"
        },
        {
          "id": 2,
          "name": "Kolhapuri Mutton Biryani - 25gms",
          "image":  require( "./img/itm2.webp"),
          "price":"Rs.180.00"
        },
        {
          "id": 3,
          "name": "Saoji Chicken Rassa Masala",
          "image":  require( "./img/itm3.webp"),
          "price":"Rs.180.00"
        },
        {
          "id": 4,
          "name": "Chicken Seekh Kabab - 360 gms",
          "image": require( "./img/itm4.webp"),
          "price":"Rs.170.00"
        },
        {
          "id": 5,
          "name": "Kolhapuri Chicken Sukka Masala",
          "image":  require( "./img/itm5.webp"),
          "price":"Rs.265.00"
        },
        {
          "id": 6,
          "name": "Kolhapuri Mutton Sukka - 25 gms",
          "image": require( "./img/itm6.webp"),
          "price":"Rs.125.00"
        },
       
        
      ]

      const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEyeIconClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseCard = () => {
    setSelectedProduct(null);
  };
  

  const [selectedLike, setSelectedLike] = useState(null);

  const handleEyeIconchange = (product) => {
    setSelectedLike(product);
  };

  const handleClosechange= () => {
    setSelectedLike(null);
  };
  
  const navigate = useNavigate();

  const handleProductIconClick = (product) => {
      navigate(`/product/${product.id}`, { state: { product } });
  };


  const listingComponents = listings.map((listing) => (
    <div key={listing.id} className='col-lg-4 col-md-4 col-sm-6 col-6 products-card-chickan '>
      <div className='products'>
        <div className='itam-data'>
          <div className='item-name '>
            {listing.name}
          </div>
          <div className='item-price'>
            {listing.price}
          </div>
          <div className='cart-button'>
            <BsBag size={20} className='icon-pading' /> ADD TO CART
          </div>
          <div className='row'>
            <div className='col-6'>
          <div className='icon-down' onClick={() => handleEyeIconClick(listing)}><IoEyeOutline size={"25"} /></div>
          </div>
          <div className='col-6'>
          <div className='icon-down'  onClick={() => handleEyeIconchange(listing)}><CiHeart size={"25"} /></div>
          </div>
          </div>
        </div>
        <div className='icon-space'>
          <div className='icon-like' onClick={() => handleEyeIconClick(listing)}>
            <IoEyeOutline size={"25"} />
          </div>
          <div className='icon-like'  onClick={() => handleEyeIconchange(listing)}><CiHeart size={"25"} /></div>
        </div>
        <div className='image-data'onClick={() => handleProductIconClick(listing)}>
          <img src={listing.image} className='products-img' />
        </div>
      </div>
    </div>
  ));

 
  const selectedProductCard = selectedProduct && (
    <div className="product-details-overlay"> 
    <div className="product-details-close">
        <div onClick={handleCloseCard} className="close-button">
          <IoMdClose size={30} />
          </div>
        </div>
      <div className="product-details-card">
        <div className="row">
          <div className='col-lg-6 col-md-12 image-spacing'>
          <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image" />
          </div>
          <div className='col-lg-6 col-md-12'>
          <div className="product-details-info">
            <div className='product-id'>Availability:<div className='answers'>&nbsp;{selectedProduct.id} In Stock</div></div> 
          <div className="product-name">{selectedProduct.name}</div>
            <p className="product-price">{selectedProduct.price}</p>
            <div className='product-discription'>
              Introducing our delicious and spicy Chicken Chili Sausages,
               perfect for any occasion! Made with only the freshest and highest quality ingredients, these
                sausages are sure to be a hit at...
            </div>
            <div className='row card-top-pading'>
              <div className='col-lg-5 col-md-12'><button className='button-add'>+</button><input type='text'className='text-number-qua' placeholder='0'></input><button className='button-subract'>-</button></div>
              <div className='col-lg-7 col-md-12'>
                 <div className='cart-button-card'>
                    <BsBag size={20} className='icon-pading' /> ADD TO CART
                 </div>
              </div>
            </div>
            <div className='product-id'>Vendor:<div className='answers'>&nbsp;thefabmeat</div></div> 
            <div className='product-id'>Product Type:<div className='answers'>&nbsp;Cold Cut</div></div> 
            <div className='view-full'>View Full Info</div>
          </div>
         </div>
        </div>
      </div>
    </div>
  );


  const selectedLikeCard = selectedLike && (
    <div className="product-details-overlay"> 
      <div className="product-details-like">
      <div className="product-details">
        <div onClick={handleClosechange} className="text-dark">
          <IoMdClose size={30} />
          </div>
        </div>
        <p className='para-like'>Please login and you will add product to your wishlist</p>
        <div className='row '>
          <div className='col align-like'>
            <div className='sing-in'>SING IN</div>
          </div>
          <div className='col align-like'>
           <div className='register'>REGISTER</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div className='left-menu-back'></div>
      <div className='container-fluid'>
        <div className='row'>
          {listingComponents}
        </div>
      </div>
      
      {selectedProductCard} 
      {selectedLikeCard}
    </div>
  );
};

export default Products;