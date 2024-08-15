// import React from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective,
//   Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

// import { employeesData , employeesGrid } from '../data/dummy';

// import { Header } from '../components';

// import { useAllCoachesData } from '../hook/useAllCoachesData';
// import { useQuery } from 'react-query';
// import { GetAllCoaches } from '../api/api';

// function Employees() {

// //   //onSuccess logic
// //   const onSuccess = (data) => {
// //     console.log(data.data.message)
// //   }

// //   //onError logic
// //   const onError = (err) => {
// //     console.log(err.message)
// //   }

// //   //use ReactQuery custom hook (useAllCoahcesData)
// //   const {isLoading , data , isError , error , isFetching} = useQuery('all-coaches' , GetAllCoaches,{
// //     onSuccess , onError
// // })

// //   if(isLoading || isFetching){
// //     return console.log("loading....")
// //   }

// // console.log(data)

// //   if(isError){
// //     console.log(error.message)
// //   }

//   return (
//     <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
//       <Header category="Page" title='Employees' />
//       <GridComponent 
//         dataSource={employeesData}
//         allowPaging
//         allowSorting
//         toolbar={['Search']}
//         width="auto"
//       >
//         <ColumnsDirective>
//         {employeesGrid.map((item, index) => (
//           <ColumnDirective key={index} {...item}/>
//         ))}
//         </ColumnsDirective>
//         <Inject services={[Page, Search, Toolbar]} />
//       </GridComponent>
//     </div>
//   )
// }

// export default Employees;




// import React from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
// import { Header } from '../components';
// import { useQuery } from 'react-query';
// import { GetAllCoaches } from '../api/api';
// import { employeesGrid } from '../data/dummy';

// function Employees() {
//   // onSuccess logic
//   const onSuccess = (data) => {
//     console.log(data.message);
//   };

//   // onError logic
//   const onError = (err) => {
//     console.log(err.message);
//   };

//   // use ReactQuery to fetch data
//   const { isLoading, data, isError, error, isFetching } = useQuery('all-coaches', GetAllCoaches, {
//     onSuccess,
//     onError,
//     refetchOnWindowFocus: false
//   });

//   if (isLoading || isFetching) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }

//   // Mapping the API response to the grid data structure
//   const coachesData = data ? data.coach.map((coach) => ({
//     EmployeeID: coach.id,
//     Name: coach.name,
//     Title: coach.description || 'siiiiiiii',
//     HireDate: new Date(coach.created_at).toLocaleDateString(),
//     Country: coach.price,
//     ReportsTo: coach.phone_number,
//     EmployeeImage: coach.image,
//   })) : [];

//   return (
//     <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
//       <Header category="Page" title='Employees' />
//       <img src={data?.coach.image} alt="" />
//       <GridComponent 
//         dataSource={coachesData}
//         allowPaging
//         allowSorting
//         toolbar={['Search']}
//         width="auto"
//       >
//         <ColumnsDirective>
//           {/* Assuming employeesGrid structure is appropriate for coaches data */}
//           {employeesGrid.map((item, index) => (
//             <ColumnDirective key={index} {...item} />
//           ))}
//         </ColumnsDirective>
//         <Inject services={[Page, Search, Toolbar]} />
//       </GridComponent>
//     </div>
//   );
// }

// export default Employees;





////     تم الربط


import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { employeesGrid } from '../data/dummy';
import { useAllCoachesData } from '../hook/useAllCoachesData';
import CoachCard from '../components/CoachCard';

// const transformCoachData = (coaches) => {
//   return coaches.map(coach => ({
//     EmployeeID: coach.id,
//     Name: coach.name,
//     Title: coach.description || 'siiiiiiii', 
//     HireDate: new Date(coach.created_at).toLocaleDateString(), 
//     Country: coach.price, 
//     ReportsTo: coach.phone_number, 
//     EmployeeImage: coach.image , 
//   }));
// };

function Employees() {

//   // onSuccess logic
//   const onSuccess = (data) => {
//     console.log(data.message);
//   };

//   // onError logic
//   const onError = (err) => {
//     console.log(err.message);
//   };

//   const { isLoading, data, isError, error, isFetching } = useAllCoachesData(onSuccess, onError)

//   if (isLoading || isFetching) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }

//   const coachesData = data ? transformCoachData(data.coach) : [];
// console.log(coachesData);



  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl shadow-2xl'>
      <Header category="Page" title='Coachs' />
      <CoachCard />
      {/* <GridComponent
        dataSource={coachesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent> */}
    </div>
  );
}

export default Employees;
