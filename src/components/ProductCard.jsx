import React from 'react';
import profile from '../assets/profile.png'; // You can replace this with the product image from the API if needed.
import { useAllProductData } from '../hook/useAllProductData';
import { useDeleteProduct } from '../hook/useDeleteProduct';
import { Delete } from '@mui/icons-material';

const ProductCard = () => {
    const { data: allProducts } = useAllProductData();

    const { mutate: deleteProduct } = useDeleteProduct()

    const handleDelete = (productID) => {
        deleteProduct(productID);  // Pass exerciseID directly
        console.log(productID)
    };

    return (
        <>
            {allProducts?.data?.map((product) => (
                <div key={product.id} className="cccontainerrr">
                    <div className="ccardd">
                        <div className="imgbox">
                            <img className="iimageeee" src={`https://35c9-109-236-81-161.ngrok-free.app/Uploads/${product.image}`} alt={product.name} />
                        </div>
                        <div className="contentbox">
                            <h2>{product.id} -{product.name}</h2>
                            <div className="color">
                                <h3>Color:</h3>
                                {product.colors?.map((colorObj, index) => (
                                    <span key={index} style={{ backgroundColor: colorObj.color }}></span>
                                ))}
                            </div>
                            <div className="price">
                                <h3>Price:</h3>
                                <span>$</span>
                                {product.price.toString().split('').map((digit, index) => (
                                    <span key={index}>{digit}</span>
                                ))}
                            </div>
                            {/* <a href="#">Buy Now</a> */}
                            <a href="#MealDelete" className="no-underline text-blue-600"
                                // onClick={() => console.log(`Meal ID: ${exercise.id}`)}
                                onClick={() => handleDelete(product.id)}  // Call handleDelete with exercise.id
                            >
                                <Delete className='text-red-500' />
                                {/* <p>{product.id}</p> */}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ProductCard;
