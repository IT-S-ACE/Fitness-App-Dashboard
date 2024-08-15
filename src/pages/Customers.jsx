//   /*  Orders */
// import React, { useEffect, useState } from 'react';
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
// import { useAllOrdersData } from '../hook/useAllOrdersData';
// import { useSetSent } from '../hook/useSetSent';
// import { useSetRecived } from '../hook/useSetRecived';
// import { useParams } from 'react-router-dom';

// // Create a client
// // const queryClient = new QueryClient();

// // const fetchCustomers = async () => {
// //   const { data } = await axios.get('https://api.example.com/customers');
// //   return data;
// // };

// // const addCustomer = async (customer) => {
// //   const { data } = await axios.post('https://api.example.com/customers', customer);
// //   return data;
// // };

// // const updateCustomer = async (customer) => {
// //   const { data } = await axios.put(`https://api.example.com/customers/${customer.CustomerID}`, customer);
// //   return data;
// // };

// // const deleteCustomer = async (customerId) => {
// //   await axios.delete(`https://api.example.com/customers/${customerId}`);
// // };

// const transformProductData = (orders) => {
//   return orders.map(order => ({ // here reverse the data show (First in First SHow)
//     CustomerName: order.user.name,
//     CustomerEmail: order.user.email,
//     OrderDate: new Date(order.order_date).toLocaleDateString(),
//     Status: order.status ,
//     ProductCount : order.product_count,
//     BillPaid : order.bill.paid ,
//     BillTotal: order.bill.total,
//     OrderID: order.id,
//     // Colors: order.colors.map(color => color.color),
//     // Sizes: order.sizes.map(size => size.size)
//   }));
// };

// const statusOptions = [
//   { text: 'All', value: 'All' },
//   { text: 'Preparing', value: 'preparing' },
//   { text: 'Pending', value: 'pending' },
//   { text: 'Recived', value: 'recived' },
//   { text: 'Sent', value: 'sent' }
// ];


// function Customers() {
//   // const queryClient = useQueryClient();
//   const [statusFilter, setStatusFilter] = useState('All');
//   // const [customersData, setCustomersData] = useState(customersDataa)

//   const [ordersData , setOredersData] = useState([])
//   const { data : allOrders} =useAllOrdersData()

//   useEffect(() => {
//     if (allOrders) {
//       setOredersData(transformProductData(allOrders.data));
//     }
//   }, [allOrders]);

//   // const { data: customersData, isLoading } = useQuery(['customers'], fetchCustomers);

//   // const addMutation = useMutation(addCustomer, {
//   //   onSuccess: () => {
//   //     queryClient.invalidateQueries(['customers']);
//   //   }
//   // });

//   // const updateMutation = useMutation(updateCustomer, {
//   //   onSuccess: () => {
//   //     queryClient.invalidateQueries(['customers']);
//   //   }
//   // });

//   // const deleteMutation = useMutation(deleteCustomer, {
//   //   onSuccess: () => {
//   //     queryClient.invalidateQueries(['customers']);
//   //   }
//   // });

//   // const handleActionBegin = (args) => {
//   //   if (args.requestType === 'delete') {
//   //     const deletedRecords = args.data;
//   //     deletedRecords.forEach(record => {
//   //       deleteMutation.mutate(record.CustomerID);
//   //     });
//   //   }
//   // };

//   // const handleActionComplete = (args) => {
//   //   if (args.requestType === 'save') {
//   //     const record = args.data;
//   //     if (args.action === 'add') {
//   //       addMutation.mutate(record);
//   //     } else if (args.action === 'edit') {
//   //       updateMutation.mutate(record);
//   //     }
//   //   }
//   // };
  

//   const handleFilterChange = (e) => {
//     setStatusFilter(e.value);
//   };

//   // if (isLoading) {
//   //   return <div>Loading...</div>;
//   // }

//   // Filter logic
//   const filteredData = statusFilter === 'All'
//     ? ordersData
//     : ordersData.filter(order => order.Status === statusFilter);

//     // Handle Status Change
//     const handleStatusChange = (orderID, newStatus) => {
//       const updatedData = ordersData.map(order => 
//         order.OrderID === orderID ? { ...order, Status: newStatus } : order
//       );
//       // Update the data source with the new status
//       setOredersData(updatedData);
      
//     };

//     // Change Status Action
//     const actionTemplate = (props) => {
//       return <StatusDropdown customer={props} onChange={handleStatusChange} />;
//     };

//     const handelChangeSene = useSetSent() 

//     const handleChangeRecived = useSetRecived()

//   return (
//     <>
//       <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl drop-shadow-lg'>
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
//             <Inject services={[Page, Toolbar, Selection, Sort, Filter]} />
//           </GridComponent>
//         {/* </div> */}
//       {/* </div> */}
//       </div>


//     </>
//   )
// }

// export default Customers;



import React, { useEffect, useState } from 'react';
import {
  GridComponent, ColumnsDirective,
  ColumnDirective, Page, Selection, Inject,
  Edit, Toolbar, Sort, Filter
} from '@syncfusion/ej2-react-grids';
import { useAllOrdersData } from '../hook/useAllOrdersData';
import { Header } from '../components';
import StatusEditButton from '../components/CustomDropDown';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { customersGrid } from '../data/dummy';

const transformProductData = (orders) => {
  return orders.map(order => ({
    CustomerName: order.user.name,
    CustomerEmail: order.user.email,
    OrderDate: new Date(order.order_date).toLocaleDateString(),
    Status: order.status,
    ProductCount: order.product_count,
    BillPaid: order.bill.paid,
    BillTotal: order.bill.total,
    OrderID: order.id,
  }));
};

const statusOptions = [
  { text: 'All', value: 'All' },
  { text: 'Preparing', value: 'preparing' },
  { text: 'Pending', value: 'pending' },
  { text: 'Recived', value: 'recived' },
  { text: 'Sent', value: 'sent' }
];

function Customers() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [ordersData, setOredersData] = useState([]);
  const { data: allOrders } = useAllOrdersData();

  useEffect(() => {
    if (allOrders) {
      setOredersData(transformProductData(allOrders.data));
    }
  }, [allOrders]);

  const handleFilterChange = (e) => {
    setStatusFilter(e.value);
  };

  const filteredData = statusFilter === 'All'
    ? ordersData
    : ordersData.filter(order => order.Status === statusFilter);

  const handleStatusChange = (orderID, newStatus) => {
    const updatedData = ordersData.map(order =>
      order.OrderID === orderID ? { ...order, Status: newStatus } : order
    );
    setOredersData(updatedData);
  };

  const actionTemplate = (props) => {
    return <StatusEditButton order={props} onChange={handleStatusChange} />;
  };

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl drop-shadow-lg'>
      <Header category='Page' title='Order' />
      <div className="toolbar">
        <DropDownListComponent
          width='7rem'
          id="status-filter"
          dataSource={statusOptions}
          fields={{ text: 'text', value: 'value' }}
          placeholder="Filter by Status"
          change={handleFilterChange}
        />
      </div>
      <GridComponent
        dataSource={filteredData}
        allowPaging
        allowSorting
        toolbar={['Delete', 'Search']}
        editSettings={{
          allowDeleting: true, allowEditing: true,
          allowAdding: true 
        }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
          <ColumnDirective
            field="Status"
            headerText="Actions"
            width="150"
            textAlign="Center"
            template={actionTemplate}
          />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Sort, Filter]} />
      </GridComponent>
    </div>
  );
}

export default Customers;
