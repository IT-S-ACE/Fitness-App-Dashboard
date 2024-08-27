import React, { useEffect, useState } from 'react';
import {
  GridComponent, ColumnsDirective,
  ColumnDirective, Page, Selection, Inject,
  Edit, Toolbar, Sort, Filter
} from '@syncfusion/ej2-react-grids';
import { useAllOrdersData } from '../../hook/useAllOrdersData';
import Header from '../../components/Header/Header';
import StatusEditButton from '../../components/DropDown/CustomDropDown';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { customersGrid } from '../../data/dummy';

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
