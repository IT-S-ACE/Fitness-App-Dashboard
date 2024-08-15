import React from 'react';

import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FiBarChart } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BsDot } from 'react-icons/bs';
import AddCoachDialog from '../components/AddCoachDialog';
import Modal from '../components/Modal';
import AddCategory from '../components/ADD/AddCategory';
import { BiPlus } from 'react-icons/bi';
import { Toaster } from 'react-hot-toast';
import { useAllCategoryData } from '../hook/useAllCategoryData';
import { useAllChallengeData } from '../hook/useAllChallengeData';
import AddChallenge from '../components/ADD/AddChallenge';
import { useAllDashboardData } from '../hook/useAllDashboardData';
import { useAllRefundsData } from '../hook/useAllRefundsData';
import AddPosters from '../components/ADD/AddPosters';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

function Ecommerce() {

  const { data: allCategories } = useAllCategoryData()

  const { data: allCahllenges } = useAllChallengeData()

  const { data: CardsData } = useAllDashboardData()

  const { data: RefundsData } = useAllRefundsData()

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


  const { currentColor, currentMode } = useStateContext();
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap
      lg:flex-nowrap justify-center'>
        {/* <div className='bg-white
        dark:text-gray-200
        dark:bg-secondary-dark-bg h-44
          rounded-xl w-full lg:w-80 p-8 pt-8 m-3
          bg-hero-pattern bg-no-repeat bg-cover
          bg-center'>
          <div >
            <div <-- className='flex justify-between items-center'-->  >
              <p className='font-bold text-gray-300'>Earnings</p>
              <p className='text-2xl text-white'>#63,448.78</p>
            </div>
          </div>
          <div>
            <Button 
            color ='white'
            bgColor = 'blue'
            text = ' Download'
            borderRadius = '10px'
            size='md'
            />
          </div>
        </div> */}

        {/* Cards */}
        <div className='flex m-3 flex-wrap
          justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='cards-width bg-white 
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
        </div>
      </div>
      {/* Chart */}
      <div className='flex gap-10 flex-wrap justify-center '>
        <div className='bg-white
            dark:text-gray-200
              dark:bg-secondary-dark-bg m-3 p-4
              rounded-2xl md:w-780 drop-shadow-xl'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex
                    items-center gap-2
                    text-gray-600
                    hover:drop-shadow-xl'>
                <span className='text-4xl'><BsDot /></span>
                <span>Expense</span>
              </p>
              <p className='flex
                    items-center gap-2
                    text-green-400
                    hover:drop-shadow-xl'>
                <span className='text-4xl'><BsDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10
                flex-wrap justify-center '>
            <div className='border-r-1
                  border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5
                        hover:drop-shadow-xl
                        cursor-pointer
                        rounded-full text-white
                        bg-green-400 ml-3
                        text-xs'
                  >23%</span>
                </p>
                <p className='text-gray-500 mt-1'>Budget </p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$48,438</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>

              <div className='mt-5'>
                <SparkLine
                  currentColor="blue"
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className='mt-10'>
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-4 m-3 "
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10 drop-shadow-xl">
            <div>
              <p className="text-2xl font-semibold ">$43,246</p>
              <p className="text-gray-400">Yearly sales</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Category</p>
            {/* <DropDown currentMode={currentMode} /> */}
            <Modal buttonContent={<div className='w-36 flex justify-between items-center'> <BiPlus className='scale-125' /> <span>Add Category</span></div>} numStyle='one'>
              <AddCategory />
            </Modal>
          </div>
          <div className="mt-10 w-72 md:w-400  h-340 overflow-auto ">
            {allCategories?.data.map((item) => (
              <div key={item.id} className="flex  mt-5 rounded-xl border-2 p-4 border-gray-500">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg pr-4 hover:drop-shadow-xl"
                  >
                    <img src={`https://de68-138-199-7-163.ngrok-free.app/Uploads/${item.image}`} alt="" className='h-12 w-12 flex items-start' />
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.category_name}</p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
                {/* <p className={`text-${item.pcColor}`}>{item.amount}</p> */}

              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-5 border-t-1 border-color">
            <div className="mt-3">
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sales Overview</p>
            <DropDown currentMode={currentMode} />
          </div>
          <div className="md:w-full overflow-auto">
            <LineChart />
          </div>
        </div>
      </div>
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
                      <img src={`https://de68-138-199-7-163.ngrok-free.app/Uploads/${challenge.image}`} alt="" className='h-12 w-12 flex items-start' />
                    </button>
                    <div>
                      <p className="text-md font-semibold">{challenge.challenge_name}</p>
                      <p className="text-sm text-gray-400">{challenge.description}</p>
                    </div>
                  </div>
                  {/* <p className={`text-${item.pcColor}`}>{item.amount}</p> */}

                </div>
              </>
            })}
          </div>

          {/* <div className="mt-10 ">
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex justify-between mt-4 w-full">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            ))}
            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div> */}

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
          <div className="border-b-1 border-color pb-4 mt-2">
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
              {medicalproBranding.leaders.map((item, index) => (
                <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
              ))}
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
