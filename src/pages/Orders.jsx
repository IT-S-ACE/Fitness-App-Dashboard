// // Products
// // import React, { useState } from 'react';
// // import { GridComponent, ColumnsDirective, ColumnDirective, 
// //   Resize, Sort, ContextMenu, Selection, Filter, Page, ExcelExport, 
// //   PdfExport, Edit, Inject, 
// //   Toolbar} from '@syncfusion/ej2-react-grids';
// //   import StatusDropdown from '../components/CustomDropDown'
// // import { ordersData , contextMenuItems , ordersGrid, customersGrid, customersDataa } from '../data/dummy';

// // import { Header } from '../components';
// // import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

// import React, { useState } from 'react';
// import {
//   GridComponent, ColumnsDirective,
//   ColumnDirective, Page, Selection, Inject,
//   Edit, Toolbar, Sort, Filter
// } from '@syncfusion/ej2-react-grids';

// import { customersDataa, customersGrid } from '../data/dummy';
// import { Header } from '../components';
// import { TextField } from '@mui/material';
// import DargDrop from '../components/DargDrop';

// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
// import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
// import axios from 'axios';
// import StatusDropdown from '../components/CustomDropDown'
// import StatusEditButton from '../components/CustomDropDown';


// const statusOptions = [
//   { text: 'All', value: 'All' },
//   { text: 'Active', value: 'Active' },
//   { text: 'Pending', value: 'Pending' },
//   { text: 'Completed', value: 'Completed' },
//   { text: 'Cancel', value: 'Cancel' },
//   { text: 'Reject', value: 'Reject' }
// ];

// function Orders() {
//   const [statusFilter, setStatusFilter] = useState('All');
//   const [customersData, setCustomersData] = useState(customersDataa)

//   const handleFilterChange = (e) => {
//     setStatusFilter(e.value);
//   };


//   const filteredData = statusFilter === 'All'
//     ? customersDataa
//     : customersDataa.filter(customer => customer.Status === statusFilter);

//     const actionTemplate = (props) => {
//       return <StatusDropdown customer={props} onChange={handleStatusChange} />;
//     };

//     const handleStatusChange = (customerID, newStatus) => {
//       const updatedData = customersData.map(customer => 
//         customer.CustomerID === customerID ? { ...customer, Status: newStatus } : customer
//       );
//       // Update the data source with the new status
//       setCustomersData(updatedData);
//     };
//   return (
//     <>
//     {/* <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
//       <Header category="Page" title='Products' />
//       <div className="toolbar">
//             <DropDownListComponent
//               width='7rem'
//               id="status-filter"
//               dataSource={statusOptions}
//               fields={{ text: 'text', value: 'value' }}
//               placeholder="Filter by Status"
//               change={handleFilterChange}
//             />
//           </div>
//       <GridComponent
//         id='gridcomp'
//         dataSource={filteredData}
//         allowPaging 
//         allowSorting
//         width='auto'
//       >
//         <ColumnsDirective>
//         {ordersGrid.map((item, index) => (
//           <ColumnDirective key={index} {...item}/>
//         ))}
//         </ColumnsDirective>
//         <Inject services={[Resize, Sort,
//         ContextMenu, Filter, Page, ExcelExport,
//         Edit, PdfExport]} />
//       </GridComponent>
//     </div> */}

//     <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl drop-shadow-lg'>
//       {/* <div className='pr-8 pl-8'> */}
//         {/* <div className='input-all'>
//           <div className="input-header">
//             <h4 className="">Exercises</h4>
//             <p className="">Page</p>
//           </div> */}
//           <Header category='Page' title='Order'/>
//           <div className="toolbar">
//             <DropDownListComponent
//               width='7rem'
//               id="status-filter"
//               dataSource={statusOptions}
//               fields={{ text: 'text', value: 'value' }}
//               placeholder="Filter by Status"
//               change={handleFilterChange}
//             />
//           </div>
//           <GridComponent
//             dataSource={filteredData}
//             allowPaging
//             allowSorting
//             toolbar={['Delete', 'Search']}
//             editSettings={{
//               allowDeleting: true, allowEditing: true,
//               allowAdding: true 
//             }}
//             // actionBegin={handleActionBegin}
//             // actionComplete={handleActionComplete}
//             width="auto"
//           >
//             <ColumnsDirective>
//               {customersGrid.map((item, index) => (
//                 <ColumnDirective key={index} {...item} />
//               ))}
//               <ColumnDirective
//                 field="Status"
//                 headerText="Actions"
//                 width="150"
//                 textAlign="Center"
//                 template={actionTemplate}
//               />
//               {/* <ColumnDirective
//             headerText="Actions"
//             width="100"
//             textAlign="Center"
//             template={(props) => (
//               <StatusEditButton customer={props} onChange={handleStatusChange} />
//             )}
//           /> */}
//             </ColumnsDirective>
//             <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
//           </GridComponent>
//         {/* </div> */}
//       {/* </div> */}
//       </div>
//     </>
//   )
// }

// export default Orders;



//                              PRODUCTS

import React, { useEffect, useState } from 'react';
import {
  GridComponent, ColumnsDirective,
  ColumnDirective, Page, Selection, Inject,
  Edit, Toolbar, Sort, Filter
} from '@syncfusion/ej2-react-grids';
import { customersDataa, productGrid } from '../data/dummy';
import { Header } from '../components';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import StatusDropdown from '../components/CustomDropDown';
import { useAllProductData } from '../hook/useAllProductData';
import Modal from '../components/Modal';
import { BiPlus } from 'react-icons/bi';
import AddProduct from '../components/ADD/AddProduct';
import toast, { Toaster } from 'react-hot-toast';
import AddProductDialog from '../components/AddProductDialog';
import AddCoachDialog from '../components/AddCoachDialog';
import { useMutation, useQueryClient } from 'react-query';
import { DeleteProduct } from '../api/api';
import ProductCard from '../components/ProductCard';

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
    // Status: product.status, 
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


//   const deleteCustomer = async (customerId) => {
//   await axios.delete(`https://api.example.com/customers/${customerId}`);
// };


  const queryClient = useQueryClient()
  const deleteMutation = useMutation(DeleteProduct, {
  onSuccess: (data) => {
    console.log(data)
    queryClient.invalidateQueries(['all-product']);
    toast.success('deleted')
  },onError: (err) => {
    console.log(err.message)
  }
});
const handleActionBegin = (args) => {
  if (args.requestType === 'delete') {
    const deletedRecords = args.data;
    deletedRecords.forEach(record => {
      deleteMutation.mutate(record.ProductID);
    });
  }
};



  // Filter Handle
  const handleFilterChange = (e) => {
    setStatusFilter(e.value);
  };

  // Handle Status Change
  const handleStatusChange = (productID, newStatus) => {
    const updatedData = productData.map(product =>
      product.ProductID === productID ? { ...product, Status: newStatus } : product
    );
    setProductData(updatedData);
  };

  // Filter logic
  const filteredData = statusFilter === 'All'
    ? productData
    : productData.filter(product => product.Status === statusFilter);

  // Change Status Action
  const actionTemplate = (props) => {
    return <StatusDropdown customer={props} onChange={handleStatusChange} />;
  };

  // Product Image Template
  const gridProductImage = (props) => (
    <div className='image-container'>
      <img src={props.Product} alt={props.ProductName} className='product-image' />
    </div>
  );

  return (
    <>
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl shadow-2xl'>
      <div className='flex justify-between items-center'>
        <Header category="Page" title='Products' />
        {/* <Modal buttonContent={<div className='w-32 flex justify-between items-center'><BiPlus className='scale-125' /> <span>Add Product</span></div>} numStyle='one'>
          <AddProduct />
        </Modal> */}
        <AddProductDialog />
        {/* <AddCoachDialog /> */}
      </div>
          <div className='flex flex-wrap gap-6'>
          <ProductCard />
          </div>


      {/* <div className="toolbar">
        <DropDownListComponent
          width='7rem'
          id="status-filter"
          dataSource={statusOptions}
          fields={{ text: 'text', value: 'value' }}
          placeholder="Filter by Status"
          change={handleFilterChange}
        />
      </div> */}
      {/* <div className='w-1250'>
        <GridComponent
          dataSource={filteredData}
          allowPaging
          allowSorting
          toolbar={['Delete', 'Search']}
          editSettings={{
            allowDeleting: true,
            allowAdding: true
          }}
          
          actionBegin={handleActionBegin}
          width="auto"
        >
          <ColumnsDirective>
            {productGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Toolbar, Selection, Sort, Filter]} />
        </GridComponent>
      </div> */}
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