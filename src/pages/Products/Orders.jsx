
//                              PRODUCTS

import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { useAllProductData } from '../../hook/useAllProductData';
import toast, { Toaster } from 'react-hot-toast';
import AddProductDialog from '../../components/Dialog/AddProductDialog';
import ProductCard from '../../components/Cards/ProductCard';

const statusOptions = [
  { text: 'All', value: 'All' },
  { text: 'Active', value: 'Active' },
  { text: 'Pending', value: 'Pending' },
  { text: 'Completed', value: 'Completed' },
  { text: 'Cancel', value: 'Cancel' },
  { text: 'Reject', value: 'Reject' }
];

const transformProductData = (products) => {
  return products.reverse().map(product => ({ // here reverse the data show (First in First SHow)
    Product: product.image,
    ProductID: product.id,
    ProductName: product.name,
    Brand: product.brand,
    Price: product.price,
    ExpirationDate: new Date(product.expiration_date).toLocaleDateString(),
    Stock: product.stock,
    Protein: product.protein,
    Creatine: product.creatine,
    SalesCount: product.sales_count,
    ViewCount: product.view_count,
    Colors: product.colors.map(color => color.color),
    Sizes: product.sizes.map(size => size.size)
  }));
};

function Orders() {
  const [statusFilter, setStatusFilter] = useState('All');
  const { data: allProducts } = useAllProductData();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    if (allProducts) {
      setProductData(transformProductData(allProducts.data));
    }
  }, [allProducts]);


  return (
    <>
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl shadow-2xl'>
      <div className='flex justify-between items-center'>
        <Header category="Page" title='Products' />
        
        <AddProductDialog />
      </div>
          <div className='flex flex-wrap gap-6'>
          <ProductCard />
          </div>


    </div>
    <Toaster position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }} />
    </>
  );
}

export default Orders;