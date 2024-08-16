// import React , {useEffect} from 'react';
// import {BrowserRouter , Routes , Route } from 'react-router-dom';
// import { FiSettings } from 'react-icons/fi';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// import {Navbar , Footer , Sidebar , ThemeSettings} from './components';

// import {Login, Introduction ,Ecommerce , Orders , Calendar , Employees , Stacked ,
// Pyramid , Customers , Kanban , Area , Bar , Pie , Financial ,
// ColorPicker , ColorMapping , Editor, Line} from './pages'

// import { useStateContext } from './contexts/ContextProvider';

// import './App.css'
// import './Login.css'
// import './Introduction.css'

// const App = () => {
//   const {activeMenu} = useStateContext();
//   // const activeMenu = false;
//   return (
    
//     <div>
//       <BrowserRouter>
//       <div className='flex relative dark:bg-main-dark-bg'>
//         <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
//           <TooltipComponent content="Settings" position='Top'> 
//             <button type='button' 
//             className="text-3xl p-3 
//             hover:drop-shadow-xl 
//             hover:bg-light-gray text-white" 
//             style={{background:"blue" , borderRadius:'50%'}}>
//               <FiSettings />
//             </button> 
//           </TooltipComponent>
//         </div>
//         {activeMenu ? (
//           <div className='w-72 fixed  sidebar 
//           dark:bg-secondary-dark-bg
//           bg-light'>
//             <Sidebar />
//           </div> 
//         ) : (
//           <div className='w-0 
//           dark: bg-secondary-dark-bg'>
//             <Sidebar />
//           </div>)}
//           <div className={
//             `dark:bg-main-bg bg-main-bg min-h-screen w-full 
//             ${activeMenu ? '' :'flex-2'}`
//           }>
//             <div className='
//             fixed md:static 
//             bg-main-bg 
//             dark:bg-main-dark-bg 
//             navbar w-full'>
//               <Navbar />
//             </div>
          
//           <div>
//             <Routes>
//             {/* Login */}
//             <Route path='/' element={<Login />} />
//             {/* <Route path='/Login' element={<Login />} /> */}

//             {/* Introduction */}
//             <Route path='/introduction' element={<Introduction />}/>

//               {/* Dashboard */}
//               {/* <Route path='/' element={<Ecommerce/>} /> */}
//               <Route path='/ecommerce' element={<Ecommerce/>} />

//               {/* Pags */}
//               <Route path='/orders' element={<Orders/>} />
//               <Route path='/employees' element={<Employees/>} />
//               <Route path='/customers' element={<Customers/>} />

//               {/* Apps */}
//               <Route path='/kanban' element={<Kanban/>} />
//               <Route path='/editor' element={<Editor/>} />
//               <Route path='/Calendar' element={<Calendar/>} />
//               <Route path='/color-picker' element={<ColorPicker/>} />

//               {/* Charts */}
//               <Route path='/line' element={<Line/>} />
//               <Route path='/area' element={<Area/>} />
//               <Route path='/bar' element={<Bar/>} />
//               <Route path='/pie' element={<Pie/>} />
//               <Route path='/financial' element={<Financial/>} />
//               <Route path='/color-mapping' element={<ColorMapping/>} />
//               <Route path='/pyramid' element={<Pyramid/>} />
//               <Route path='/stacked' element={<Stacked/>} />
            
//             </Routes>
//           </div>
//           {/* <Footer /> */}
//           </div>
//       </div>
//       </BrowserRouter>
//     </div>
    
//   )
// }

// export default App;


import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Sidebar, ThemeSettings } from './components';

import {
  Login,
  Introduction,
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
  Line,
  Meal,
  CoachMain
} from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';
import './Login.css';
import './inputData.css'
import './assets/upload.css'
import './assets/table.css'
import './assets/Modal.css'
import './assets/FormUI.css'
import './assets/DeleteButton.css'
import './assets/DropDown.css'
import './assets/card.css'
import './assets/BillsCard.css'
import './assets/ProductCard.css'
import ExercisesPlan from './components/Coach/ExercisesPlan';
import Exercises from './pages/Exercises';
import Bills from './pages/Bills';
// import './assets/footer.css'
// import './Introduction.css'

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Login */}
          <Route path="/" element={<Login />} />

          {/* Introduction */}
          <Route path="/introduction" element={<Introduction />} />

          <Route path='/Coach' element={<CoachMain />} />
          <Route path='/Exercises-plan/:planID' element={<ExercisesPlan />} />

          
          <Route path="/*" element={<ProtectedPages />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

  function LoginPage() {
    return (
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: 'blue', borderRadius: '50%' }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed  sidebar dark:bg-secondary-dark-bg bg-light">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark: bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? '' : 'flex-2'
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>

          <div className="w-full">
            <Login />
          </div>
        </div>
      </div>
    );
  }

  function ProtectedPages() {
    return (
      <div className=" flex relative dark:bg-main-dark-bg ml-10">
        {/* <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: 'blue', borderRadius: '50%' }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div> */}
          
          <div className='bg-black -ml-10'>
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg mt-5 ">
            <Sidebar />
          </div>
          </div>
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? '' : 'flex-2'
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>

          <div className="w-full">
            <Routes>
              
              {/* Dashboard */}
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* Pages */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/meal" element={<Meal />} />
              <Route path="/exercise" element={<Exercises />} />
              <Route path="/bills" element={<Bills />} />


              {/* Apps */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* Charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
