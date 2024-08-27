
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Sidebar from './components/SideBar/Sidebar'
import Navbar from './components/NavBar/Navbar'


import { useStateContext } from './contexts/ContextProvider';

import './App.css';
import './Login.css';
import './inputData.css'
import './assets/Css/upload.css'
import './assets/Css/table.css'
import './assets/Css/Modal.css'
import './assets/Css/FormUI.css'
import './assets/Css/DeleteButton.css'
import './assets/Css/DropDown.css'
import './assets/Css/card.css'
import './assets/Css/BillsCard.css'
import './assets/Css/ProductCard.css'
import ExercisesPlan from './components/Coach/Sections/Plans/ExercisesPlan.jsx';
import Exercises from './pages/Exercise/Exercises.jsx';
import Bills from './pages/Bills/Bills.jsx';
import Login from './pages/Login/Login.jsx';
import CoachMain from './pages/CoachPage/CoachMain.jsx';
import Meal from './pages/Meals/Meal.jsx';
import Orders from './pages/Products/Orders.jsx';
import Employees from './pages/Coachs/Employees.jsx';
import Kanban from './pages/Articles/Kanban.jsx';
import Calendar from './pages/Calender/Calendar.jsx';
import Customers from './pages/Orders/Customers.jsx';
import Ecommerce from './pages/DashBoard/Ecommerce.jsx';
import Introduction from './pages/Introduction/Introduction.jsx';

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


  function ProtectedPages() {
    return (
      <div className=" flex relative dark:bg-main-dark-bg ml-10">
          
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
              <Route path="/calendar" element={<Calendar />} />

            </Routes>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
