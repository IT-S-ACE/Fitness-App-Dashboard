// Articles
import React, { useState } from 'react';

import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';
import { Divider, TextField } from '@mui/material';
import DargDrop from '../components/DargDrop';
import aritcleLogo from '../assets/image.png'
import {Delete, Edit, } from '@mui/icons-material';
import articleImage from '../assets/profile.png'
import Modal from '../components/Modal'
import AddArticle from '../components/ADD/AddArticle';
import { BiPlus } from 'react-icons/bi';
import DeleteButton from '../components/DeleteButton';
import { useAllArticleData } from '../hook/useAllArticleData';
import { useDeleteArticle } from '../hook/useDeleteArticle';

function Kanban() {
  // const [authorName, setAuthorName] = useState('')
  // const [article, setArticle] = useState('')
  // const [title, setTitle] = useState('')
  // const [image, setImage] = useState(null)

  const { mutate: deleteArticle } = useDeleteArticle()

  const handleDelete = (articleID) => {
    deleteArticle(articleID); 
  };


  const{data : allArticles} = useAllArticleData()

  return (
    <>
      {/* <div className='m-2 md:m-10 mt-24 p-2 
    md:p-10 bg-white rounded-3xl'>
        <Header category="App" title='Kanban' />
        <KanbanComponent
          id='kanban'
          dataSource={kanbanData}
          cardSettings={{ contentField: 'Summery', headerField: 'Id' }}
          keyField='Status'
        >
          <ColumnsDirective>
            {kanbanGrid.map((item, index) =>
              <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
        </KanbanComponent>
      </div> */}



      {/* <div className='flex'> */}
      {/* <div className='px-4 w-600'>
          <div className='input-all'>
            <div className='input-header'>
              <img src={aritcleLogo} alt="" />
              <div className='pl-5'>
                <h4>Add Article</h4>
                <p>Enter the Detail of the Article</p>
              </div>
            </div>
            <div className='input-body'> */}

      {/*         style 2       */}
      {/* <div className='flex justify-between items-center text-xl pt-2'>

                <div className='w-760'>
                  <TextField
                    margin="dense"
                    label="Author Name"
                    type="text"
                    fullWidth
                    variant="standard"
                  />
                </div>
              </div>
              <div className='flex justify-between items-center text-xl pt-2'>

                <div className='w-760'>
                  <TextField
                    margin="dense"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="filled"
                  />
                </div>
              </div>
              <div className='flex justify-between items-center text-xl pt-2'>

                <div className='w-760'>
                  <TextField
                    margin="dense"
                    label="Description"
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                </div>
              </div>
              <div className='flex justify-between items-center text-xl pt-2'>

                <div className='w-760 flex justify-center'>
                  <DargDrop setImage={setImage} />
                </div>
              </div> */}



      {/*         style 2       */}
      {/* <div className='flex justify-between items-center text-xl pt-2'>
              <p className='p-8'> Auther Name :</p>
              <div className='w-760 pl-32'>
                <TextField
                  margin="dense"
                  label=""
                  type="text"
                  fullWidth
                  variant="standard"
                />
              </div>
            </div>
            <div className='flex justify-between items-center text-xl pt-2'>
              <p className='p-8'> Titel:</p>
              <div className='w-760 pl-32'>
                <TextField
                  margin="dense"
                  label="Title"
                  type="text"
                  fullWidth
                  variant="filled"
                />
              </div>
            </div>
            <div className='flex justify-between items-center text-xl pt-2'>
              <p className='p-8'> Description :</p>
              <div className='w-760 pl-32'>
                <TextField
                  margin="dense"
                  label="Description"
                  type="text"
                  fullWidth
                  variant="outlined"
                />
              </div>
            </div>
            <div className='flex justify-between items-center text-xl pt-2'>
              <p className='p-8'> Article :</p>
              <div className='w-760 pl-32'>
                <DargDrop setImage={setImage} />
              </div>
            </div> */}

      {/*         style 1         */}

      {/* <div className='grid grid-cols-2 gap-7 pb-4 '>
            <label htmlFor="" className='text-xl'>Auther Name : </label>
            <label htmlFor="" className='text-xl'>Title :</label>
            </div>
            <div className='grid grid-cols-2 gap-7 pb-4 '>
            <TextField
                                className='input-body-row1-textfeild1-TextFeild '
                                margin="dense"
                                label="Author Name"
                                type="text"
                                fullWidth
                                variant="filled"
                    />
                    <TextField
                                className='input-body-row1-textfeild1-TextFeild'
                                margin="dense"
                                // label="Title"
                                type="text"
                                fullWidth
                                variant="outlined"
                    />
            </div>
            <div className='grid grid-cols-2 gap-7 pb-4 '>
            <label htmlFor="" className='text-xl'>Descripton :</label>
            <label htmlFor="" className='text-xl'>Article Image :</label>
            </div>
            <div className='grid grid-cols-2 gap-7'>
            <textarea className='border-2 rounded-xl border-neutral-200 text-2xl placeholder:pt-8 pl-8'
          id="article"
          placeholder='Description'
          // value={article}
          // onChange={(e) => setArticle(e.target.value)}
          required
        />
          <DargDrop setImage={setImage} />
            </div> */}
      {/* </div>
          </div>
        </div> */}
      <div className='px-4 w-auto '>
      {/* <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl drop-shadow-xl'> */}
      <div className='m-10 p-10 border-1 border-gray-300 rounded-3xl '>
        <div className='flex justify-between items-center'>
          <Header category="Page" title='Articles' />
          <Modal buttonContent={<div className='w-28 flex justify-between items-center'> <BiPlus className='scale-125'/> <span>Add Article</span></div>} numStyle='one'>
            <AddArticle />
          </Modal>
        </div>
        {/* <Divider className='my-4 border-t-2 border-gray-300' /> */}
        <div className='w-full mt-3 max-h-34 overflow-y-scroll border-solid border-gray-300 border-1 rounded-lg hide-scrollbar'>
          <table className='w-full table-auto border-collapse'>
            <thead className='bg-gray-200 text-green-600 sticky top-0 z-10'>
              <tr>
                <th className='px-4 py-2 border-b-2 border-gray-300'>ID</th>
                <th className='px-4 py-2 border-b-2 border-gray-300'>Image</th>
                <th className='px-4 py-2 border-b-2 border-gray-300'>Name</th>
                <th className='px-4 py-2 border-b-2 border-gray-300'>Title</th>
                <th className='px-4 py-2 border-b-2 border-gray-300'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((article) => ( */}
                {allArticles?.map((article) => {
                  return <>
                  <tr key={article.id} className='hover:bg-gray-100'>
                  <th className='px-4 py-2 border-b'>{article.id}</th>
                  <th className='px-4 py-2 border-b'>
                    <img src={`https://48c4-146-70-246-155.ngrok-free.app/Uploads/${article.image}`} alt="Article" className='w-14 h-14 translate-x-20' />
                  </th>
                  <th className='px-4 py-2 border-b'>{article.Author_Name}</th>
                  <th className='px-4 py-2 border-b'>{article.title}</th>
                  <th className='px-4 py-2 border-b'>
                    {/* <div className='flex justify-center items-center z-10'>
                    <DeleteButton />
                    </div> */}
                    <a href="#MealDelete" className="no-underline text-blue-600"
                      // onClick={() => console.log(`Meal ID: ${exercise.id}`)}
                      onClick={() => handleDelete(article.id)}  // Call handleDelete with exercise.id

                    >
                      <Delete className=' font-extrabold scale-125 text-red-600 cursor-pointer transition ease-in delay-100 hover:drop-shadow-2xl shadow-red-500 duration-300'/>
                      </a>
                    {/* <button className='text-blue-600 ml-2'>
                      <Edit />
                    </button> */}
                  </th>
                </tr>
                  </>
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      {/* </div> */}
    </>
  )
}

export default Kanban;






/*
import React, { useState } from 'react';
import {
  GridComponent, ColumnsDirective,
  ColumnDirective, Page, Selection, Inject,
  Edit, Toolbar, Sort, Filter
} from '@syncfusion/ej2-react-grids';

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';

import { Header } from '../components';

// Create a client
const queryClient = new QueryClient();

const fetchCustomers = async () => {
  const { data } = await axios.get('https://api.example.com/customers');
  return data;
};

const addCustomer = async (customer) => {
  const { data } = await axios.post('https://api.example.com/customers', customer);
  return data;
};

const updateCustomer = async (customer) => {
  const { data } = await axios.put(`https://api.example.com/customers/${customer.CustomerID}`, customer);
  return data;
};

const deleteCustomer = async (customerId) => {
  await axios.delete(`https://api.example.com/customers/${customerId}`);
};

const statusOptions = [
  { text: 'All', value: 'All' },
  { text: 'Active', value: 'Active' },
  { text: 'Pending', value: 'Pending' },
  { text: 'Completed', value: 'Completed' },
  { text: 'Cancel', value: 'Cancel' }
];

function Customers() {
  const queryClient = useQueryClient();
  const [statusFilter, setStatusFilter] = useState('All');

  const { data: customersData, isLoading } = useQuery(['customers'], fetchCustomers);

  const addMutation = useMutation(addCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries(['customers']);
    }
  });

  const updateMutation = useMutation(updateCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries(['customers']);
    }
  });

  const deleteMutation = useMutation(deleteCustomer, {
    onSuccess: () => {
      queryClient.invalidateQueries(['customers']);
    }
  });

  const handleActionBegin = (args) => {
    if (args.requestType === 'delete') {
      const deletedRecords = args.data;
      deletedRecords.forEach(record => {
        deleteMutation.mutate(record.CustomerID);
      });
    }
  };

  const handleActionComplete = (args) => {
    if (args.requestType === 'save') {
      const record = args.data;
      if (args.action === 'add') {
        addMutation.mutate(record);
      } else if (args.action === 'edit') {
        updateMutation.mutate(record);
      }
    }
  };

  const handleFilterChange = (e) => {
    setStatusFilter(e.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const filteredData = statusFilter === 'All'
    ? customersData
    : customersData.filter(customer => customer.Status === statusFilter);

  return (
    <>
      <div className='pr-8 pl-8'>
        <div className='input-all'>
          <div className="input-header">
            <h4 className="">Exercises</h4>
            <p className="">Page</p>
          </div>
          <Header />
          <div className="toolbar">
            <DropDownListComponent
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
            toolbar={['Delete', 'Add', 'Edit', 'Search']}
            editSettings={{
              allowDeleting: true, allowEditing: true,
              allowAdding: true
            }}
            actionBegin={handleActionBegin}
            actionComplete={handleActionComplete}
            width="auto"
          >
            <ColumnsDirective>
              {customersGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
              <ColumnDirective
                field="Status"
                headerText="Status"
                width="130"
                textAlign="Center"
                editType="dropdownedit"
                edit={statusOptions.map(option => ({ text: option.text, value: option.value }))}
              />
            </ColumnsDirective>
            <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
          </GridComponent>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Customers />
    </QueryClientProvider>
  );
}

export default App;

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  {
    headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center'
  },
  {
    field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: '130',
    textAlign: 'Center',
    format: 'yMd',
    editType: 'dropdownedit',
    edit: {
      params: {
        query: new DataManager(statusOptions),
        fields: { text: 'text', value: 'value' }
      }
    },
  },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center'
  },
  {
    field: 'Budget',
    headerText: 'Budget',
    width: '100',
    format: 'yMd',
    textAlign: 'Center'
  },
  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  }
];

*/