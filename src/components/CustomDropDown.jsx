// import React, { useState } from 'react';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

// const StatusEditButton = ({order, onChange }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleDropdownChange = (e) => {
//     onChange(order.OrderID, e.value);
//     setIsOpen(false);
//   };

//   const statusOptions = [
//   // { text: 'All', value: 'All' },
//   { text: 'Send', value: 'send' },
//   { text: 'Recived', value: 'recived' },
//   // { text: 'Completed', value: 'Completed' },
//   // { text: 'Cancel', value: 'Cancel' }
// ];

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>⋮</button>
//       {isOpen && (
//         <DropDownListComponent
//           dataSource={statusOptions}
//           fields={{ text: 'text', value: 'value' }}
//           value={order.Status}
//           change={handleDropdownChange}
//           popupHeight='200px'
//         />
//       )}
//     </div>
//   );
// };

// export default StatusEditButton;


//  تم الربط

// import React, { useState } from 'react';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
// import { useSetSent } from '../hook/useSetSent';
// import { useSetRecived } from '../hook/useSetRecived';

// const StatusEditButton = ({ order, onChange }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Custom hooks for setting the status
//   const setSent = useSetSent();
//   const setRecived = useSetRecived();

//   if (!order) {
//     console.error('Order prop is not defined');
//     return null;
//   }

//   if (!order.Status) {
//     console.error('Order does not have a Status property:', order);
//   }

//   const handleDropdownChange = (e) => {
//     const newStatus = e.value;

//     // Call appropriate hook based on the new status
//     if (newStatus === 'sent') {
//       setSent.mutate(order.OrderID, {
//         onSuccess: () => {
//           onChange(order.OrderID, newStatus);
//         }
//       });
//     } else if (newStatus === 'recived') {
//       setRecived.mutate(order.OrderID, {
//         onSuccess: () => {
//           onChange(order.OrderID, newStatus);
//         }
//       });
//     }

//     setIsOpen(false);
//   };

//   const statusOptions = [
//     { text: 'Send', value: 'sent' },
//     { text: 'Recived', value: 'recived' },
//   ];

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>⋮</button>
//       {isOpen && (
//         <DropDownListComponent
//           dataSource={statusOptions}
//           fields={{ text: 'text', value: 'value' }}
//           value={order.Status || ''}
//           change={handleDropdownChange}
//           popupHeight='200px'
//         />
//       )}
//     </div>
//   );
// };

// export default StatusEditButton;


import React, { useState } from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useSetSent } from '../hook/useSetSent';
import { useSetRecived } from '../hook/useSetRecived';
import toast from 'react-hot-toast';
// import 'react-toastify/dist/ReactToastify.css';

const StatusEditButton = ({ order, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Custom hooks for setting the status
  const setSent = useSetSent();
  const setRecived = useSetRecived();

  if (!order) {
    console.error('Order prop is not defined');
    return null;
  }

  if (!order.Status) {
    console.error('Order does not have a Status property:', order);
  }

  const handleDropdownChange = (e) => {
    const newStatus = e.value;

    // Permission checks
    if (newStatus === 'sent' && order.Status !== 'preparing') {
      toast.error('You can only mark as sent if the current status is preparing');
      return;
    }

    if (newStatus === 'recived' && order.Status !== 'sent') {
      toast.error('You can only mark as received if the current status is sent');
      return;
    }

    // Call appropriate hook based on the new status
    if (newStatus === 'sent') {
      setSent.mutate(order.OrderID, {
        onSuccess: () => {
          onChange(order.OrderID, newStatus);
          toast.success('Order status updated to sent');
        }
      });
    } else if (newStatus === 'recived') {
      setRecived.mutate(order.OrderID, {
        onSuccess: () => {
          onChange(order.OrderID, newStatus);
          toast.success('Order status updated to received');
        }
      });
    }

    setIsOpen(false);
  };

  const statusOptions = [
    { text: 'Sent', value: 'sent' },
    { text: 'Recived', value: 'recived' },
  ];

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>⋮</button>
      {isOpen && (
        <DropDownListComponent
          dataSource={statusOptions}
          fields={{ text: 'text', value: 'value' }}
          value={order.Status || ''}
          change={handleDropdownChange}
          popupHeight='200px'
        />
      )}
      {/* <ToastContainer /> */}
    </div>
  );
};

export default StatusEditButton;

