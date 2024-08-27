import React, { useState } from 'react'
import { useAddNewProduct } from '../../../hook/useAddNewProduct';
import { TextField } from '@mui/material';
import DropDownID from '../../DropDown/DropDownID';
import NumSlider from '../../Slider/NumSlider';
import DargDrop from '../../DropDown/DropDown';
import CheckBox from '../../CheckBox/CheckBox';
import { ExitToApp } from '@mui/icons-material';

const allCategories = [ // dropdownID
    { id: 1, name: 'Clothes' },
    { id: 2, name: 'Sports_equipment' },
    { id: 3, name: 'Food_Supplements' },
]

const allColors = [ // CheckBox
    { id: 1, name: 'white' },
    { id: 2, name: 'black' },
    { id: 3, name: 'red' },
    { id: 4, name: 'green' },
    { id: 5, name: 'pink' },
    { id: 6, name: 'blue' },
    { id: 7, name: 'brown' },
    { id: 8, name: 'yellow' },
];

const allSizes = [ // CheckBox
    { id: 1, name: 'XS' },
    { id: 2, name: 'S' },
    { id: 3, name: 'L' },
    { id: 4, name: 'XL' },
    { id: 5, name: 'XXL' },
]

const allMeasuringUnit = [ // dropdown
    { id: 1, name: 'kg' },
    { id: 2, name: 'g' },
    { id: 3, name: 'pound' },
    { id: 4, name: 'meter' },
    { id: 5, name: 'km' },
]

const subCategory = [

    { id: 4, name: 'shorts' },
    { id: 5, name: 'pants' },
    { id: 6, name: 'shirts' },
    { id: 7, name: 'T-shirt' },
    { id: 8, name: 'socks' },
]


const AddClothes = ({handleCloseModal}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)
    const [brand, setBrand] = useState('')
    const [stock, setStock] = useState('')
    const [color, setColor] = useState([])
    const [size, setSize] = useState([])

    const [categoryID, setCategoryID] = useState('')

    const { mutate: addProduct } = useAddNewProduct()

    const handleCOLORCheckbox = (id) => {
        setColor((prevState) => {
            if (prevState.includes(id)) {
                return prevState.filter((item) => item !== id);
            } else {
                return [...prevState, id];
            }
        });
    };

    const handleSIZECheckbox = (id) => {
        setSize((prevState) => {
            if (prevState.includes(id)) {
                return prevState.filter((item) => item !== id);
            } else {
                return [...prevState, id];
            }
        });
    };

    const handleAddNewProduct = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', image);
        formData.append('brand', brand);
        formData.append('stock', stock);
        formData.append('category_id[0]', 1);
        formData.append('category_id[3]', categoryID);

        // formData.append('sub_Categories[0]', categoryID);

        // Append the checked color
        color.forEach((id, index) => {
            formData.append(`color_id[${index}]`, id);
        });

        // Append the checked size
        size.forEach((id, index) => {
            formData.append(`size_id[${index}]`, id);
        });

        // Logging formData
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        addProduct(formData);
    };




    return (
        <>
            <div className="px-4 -mt-16 flex">
                <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl drop-shadow-2xl backdrop-filter bg-opacity-95">
                    
                    <div className='flex justify-between'>
                    <div className="mb-5 border-b-2 border-gray-300 w-52">
                        <p className="text-gray-400 flex">Form</p>
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 flex justify-start">
                            Add Clothes
                        </h1>
                    </div>
                        <button onClick={handleCloseModal}>  {/* Trigger handleCloseModal on click */}
                            <ExitToApp />
                        </button>
                        </div>
                    <div className="mt-2 grid grid-cols-2 gap-1">
                        <div className="grid grid-cols-2 gap-1 mr-2 border-r-2 pr-2 border-black">
                            <div className="mr-1">
                                <p className="flex">Product Name :</p>
                                <TextField
                                    className="input-body-row1-textfeild1-TextFeild"
                                    margin="dense"
                                    label="Product Name"
                                    type="text"
                                    required
                                    fullWidth
                                    variant="outlined"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className='mt-5 ml-5'>
                                <NumSlider Label="price" value={price} onChange={setPrice} />
                            </div>




                            <div>
                                <DargDrop setImage={setImage} />
                            </div>
                            <div className="border-2 border-gray-700 rounded-xl h-340 overflow-y-scroll mt-4">
                                {allColors.map((col) => (
                                    <div key={col.id} className="px-5 cursor-pointer flex justify-between border-2 border-gray-500 rounded-xl m-2 bg-gray-300" onClick={() => handleCOLORCheckbox(col.id)}>
                                        <div className='flex font-extrabold my-2'>
                                            <div className={`w-10 h-10 rounded-full bg-${col.name}-500`} ></div>
                                            <span className="ml-2 text-xl">{col.name}</span>
                                        </div>
                                        <strong className="mt-3">
                                            <div>
                                                <CheckBox onChange={() => handleCOLORCheckbox(col.id)} checked={color.includes(col.id)} />
                                            </div>
                                        </strong>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="grid grid-cols-2 gap-1">
                            <div>


                                <div className="mr-1 mt-7">
                                    <p className="flex">Brand :</p>
                                    <TextField
                                        className="input-body-row1-textfeild1-TextFeild"
                                        margin="dense"
                                        label="Brand"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                    />
                                </div>


                                <div>
                                    <p className="flex ml-2">Sub Category</p>
                                    <div className="mt-2">
                                        <DropDownID dropLabel="Sub Category" items={subCategory} setSelectedID={setCategoryID} />
                                    </div>
                                </div>

                                <div className="mr-1 mt-5">
                                    <p className="flex">Description :</p>
                                    <TextField
                                        className="input-body-row1-textfeild1-TextFeild"
                                        margin="dense"
                                        label="Description"
                                        type="text"
                                        fullWidth
                                        variant="outlined"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className="mr-1">
                                    <p className="flex">Stock :</p>
                                    <TextField
                                        className="input-body-row1-textfeild1-TextFeild"
                                        margin="dense"
                                        label="Stock"
                                        type="number"
                                        fullWidth
                                        variant="outlined"
                                        value={stock}
                                        onChange={(e) => setStock(e.target.value)}
                                    />
                                </div>


                            </div>
                            <div className="border-2 border-gray-700 rounded-xl h-340 overflow-y-scroll">
                                {allSizes.map((siz) => (
                                    <div key={siz.id} className="px-5 cursor-pointer flex justify-between border-2 border-gray-500 rounded-xl m-2 bg-gray-300 h-14" onClick={() => handleSIZECheckbox(siz.id)}>
                                        <div className='flex font-extrabold my-2'>
                                            <p className="ml-2 text-xl">{siz.name}</p>
                                        </div>
                                        <strong className="mt-3">
                                            <div>
                                                <CheckBox onChange={() => handleSIZECheckbox(siz.id)} checked={size.includes(siz.id)} />
                                            </div>
                                        </strong>
                                    </div>
                                ))}
                            </div>




                            <button
                                className="p-4 bg-black text-white rounded-xl mt-2 button-effect border-2 col-start-2 col-end-3 -translate-x-44"
                                onClick={handleAddNewProduct}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddClothes