import React, { useEffect, useState } from 'react';

import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { medicalproBranding, dropdownData, } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import product9 from '../../data/product9.jpg';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FiBarChart } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import AddCoachDialog from '../../components/Dialog/AddCoachDialog';
import Modal from '../../components/Modal/Modal';
import { BiPlus } from 'react-icons/bi';
import { Toaster } from 'react-hot-toast';
import { useAllCategoryData } from '../../hook/useAllCategoryData';
import { useAllChallengeData } from '../../hook/useAllChallengeData';
import AddChallenge from '../../components/ADD/Exercise/AddChallenge';
import { useAllDashboardData } from '../../hook/useAllDashboardData';
import { useAllRefundsData } from '../../hook/useAllRefundsData';
import AddPosters from '../../components/ADD/Product/AddPosters';
import { RiScalesLine } from 'react-icons/ri';
import { useGetSalesByMonth } from '../../hook/useGetSalesByMonth';
import { useAllCoachesData } from '../../hook/useAllCoachesData';

function Ecommerce() {

  const { data: allCategories } = useAllCategoryData()

  const { data: allCahllenges } = useAllChallengeData()

  const { data: CardsData } = useAllDashboardData()

  const { data: RefundsData } = useAllRefundsData()

      // onSuccess logic
      const onSuccess = (data) => {
        console.log(data);
    };

    // onError logic
    const onError = (err) => {
        console.log(err.message);
    };

    const { data : AllCoachs } = useAllCoachesData(onSuccess, onError)

  const earningData = [
    {
      icon: <MdOutlineSupervisorAccount />,
      amount: `${CardsData?.users}`,
      // percentage: '-4%',
      title: 'Users',
      iconColor: '#fff',
      iconBg: 'linear-gradient(60deg, #26c6da, #00acc1)',
      iconShadow: '0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(0, 172, 193, .4)',
      pcColor: 'red-600',
    },
    {
      icon: <BsBoxSeam />,
      amount: `${CardsData?.products}`,
      // percentage: '+23%',
      title: 'Products',
      iconColor: '#fff',
      iconBg: 'linear-gradient(60deg, #ffa726, #fb8c00)',
      iconShadow: '0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(255, 152, 0, .4)',
      pcColor: 'green-600',
    },
    {
      icon: <FiBarChart />,
      amount: `${CardsData?.coaches}`,
      // percentage: '+38%',
      title: 'Coachs',
      iconColor: '#fff',
      iconBg: 'linear-gradient(60deg, #ef5350, #e53935)',
      iconShadow: '0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(244, 67, 54, .4)',
      pcColor: 'green-600',
    },
    {
      icon: <HiOutlineRefresh />,
      amount: `${RefundsData?.data}`,
      // percentage: '-12%',
      title: 'Refunds',
      iconColor: '#fff',
      iconBg: 'linear-gradient(60deg, #66bb6a, #43a047)',
      iconShadow: '0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(76, 175, 80, .4)',
      pcColor: 'red-600',
    },
  ];




  const [formattedDate, setFormattedDate] = useState('');

  const { mutate: dateSales } = useGetSalesByMonth()

  // Handler to format date and update state
  const handleDateChange = (e) => {
    e.preventDefault();

    console.log(monthlySalees)

    // Extract and format the selected date
    const selectedDate = new Date(e.target.value);
    const year = selectedDate.getFullYear();
    let month = (selectedDate.getMonth() + 1).toString(); // getMonth() returns 0-11, so add 1 for 1-12

    // Ensure month is two digits (pad with leading zero if necessary)
    if (month.length < 2) {
      month = '0' + month;
    }

    // Update state with formatted date
    const newFormattedDate = `${year}-${month}`;
    setFormattedDate(newFormattedDate);

    // After updating the state, call the mutate function
    const formData = new FormData();
    formData.append('month', newFormattedDate);

    // Make sure `dateSales` is called with the correct date format
    dateSales(formData);
  };



  const { currentColor, currentMode ,monthlySalees , setSalesNumber} = useStateContext();
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap
      lg:flex-nowrap justify-center'>

        {/* Cards */}
        <div className='flex m-3 flex-wrap
          justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='w-72 bg-white 
              dark:text-gray-200
              dark:bg-secondary-dark-bg-dark-bg md:w-56
              p-4 pt-1 rounded-2xl m-3 drop-shadow-lg'
            >
              <button type='button'
                style={{
                  color: item.iconColor,
                  background: item.iconBg,
                  boxShadow: item.iconShadow
                }}
                className='text-2xl p-6 rounded-sm 
                hover:drop-shadow-xl -translate-y-10'
              >
                <span className='w-14 h-14 overflow-visible text-4xl text-center leading-14 mb-1'>
                  {item.icon}
                </span>
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
          <div
            className='w-72 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg-dark-bg md:w-56 p-4 pt-1 rounded-2xl m-3 drop-shadow-lg'
          >
            <button
              type='button'
              style={{
                color: '#fff',
                background: 'linear-gradient(60deg, #9c27b0, #ab47bc)', // Purple gradient
                boxShadow: '0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(156, 39, 176, .4)', // Purple box shadow
              }}
              className='text-2xl p-6 rounded-sm hover:drop-shadow-xl -translate-y-10'
            >
              <span className='w-14 h-14 overflow-visible text-4xl text-center leading-14 mb-1'>
                <RiScalesLine />
              </span>
            </button>
            <div className='flex justify-between'>
              <div>
                <p className='mt-3'>
                  {/* salesNum instad of 22  */}
                  <span className='text-lg font-semibold'>{monthlySalees}</span>
                  {/* <span className={`text-sm text-green-600 ml-2`}>-11</span> */}
                </p>
                <p className='text-sm text-gray-400 mt-1'>sales</p>
              </div>
              <input
                type='date'
                className='w-10'
                onChange={handleDateChange}
              />
            </div>
            
          </div>
        </div>
      </div>
      {/* Chart */}

      {/* All Challenges / Add Challenge */}
      <div className="flex flex-wrap justify-center">
        <div className="md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Challenges</p>
            <Modal buttonContent={<div className='w-36 flex justify-between items-center'> <BiPlus className='scale-125' /> <span>Add Challenge</span></div>} numStyle='one'>
              <AddChallenge />
            </Modal>
          </div>

          <div className='mt-10 overflow-auto h-340'>
            {allCahllenges?.data?.map((challenge) => {
              return <>
                <div key={challenge.id} className="flex  mt-5 rounded-xl border-2 p-4 border-gray-500">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      style={{
                        color: challenge.iconColor,
                        backgroundColor: challenge.iconBg,
                      }}
                      className="text-2xl rounded-lg pr-4 hover:drop-shadow-xl"
                    >
                      <img src={`https://142c-89-39-107-204.ngrok-free.app/Uploads/${challenge.image}`} alt="" className='h-12 w-12 flex items-start' />
                    </button>
                    <div>
                      <p className="text-md font-semibold">{challenge.challenge_name}</p>
                      <p className="text-sm text-gray-400">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              </>
            })}
          </div>
        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 drop-shadow-xl">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Coachs</p>
            <button type="button" className="text-xl font-semibold text-gray-400">
              <IoIosMore />
            </button>
          </div>
          <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
            16 APR, 2021
          </p>
            <div className="flex gap-4 border-b-1 border-color mt-6">
              {medicalproBranding.data.map((item) => (
                <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
                  <p className="text-xs text-gray-400">{item.title}</p>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          <div className="border-b-1  border-color pb-4 mt-3">
            <p className="text-md font-semibold mb-2">Teams</p>

            <div className="flex gap-4">
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{ background: item.color }}
                  className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-md font-semibold mb-2">Coachs</p>
            <div className="flex gap-4">
              {/* {medicalproBranding.leaders.map((item, index) => (
                <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
              ))} */}
              {AllCoachs?.coach?.map((coach, index) => {
                return <img key={index} className="rounded-full w-8 h-8" src={`https://142c-89-39-107-204.ngrok-free.app/Uploads/${coach.image}`} alt="Coach" />
              })}
            </div>
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <AddCoachDialog />
              {/* ///////////////////////////////////////////////////////////////////////////// */}
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>


        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3 shadow-xl">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Posters</p>
            <button type="button" className="text-xl font-semibold text-gray-500">
              <IoIosMore />
            </button>
          </div>
          <div className="mt-10">
            <img
              className="md:w-96 h-50 "
              src={product9}
              alt=""
            />
            <div className="mt-8">
              <p className="font-semibold text-lg">All coming soon!</p>
              {/* <p className="text-gray-400 ">By Johnathan Doe</p> */}
              <p className="mt-8 text-sm text-gray-400">
                This will be the small Ads for the Trainers. It have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Modal buttonContent={<div className='w-32 flex justify-between items-center'> <BiPlus className='scale-125' /> <span>Add Posters</span></div>} numStyle='one'>
                  <AddPosters />
                </Modal>
              </div>
            </div>
          </div>
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
    </div>
  )
}

export default Ecommerce;
