import React from 'react'
import { useAllCoachesData } from '../../hook/useAllCoachesData';

const CoachCard = () => {
    // onSuccess logic
    const onSuccess = (data) => {
        console.log(data);
    };

    // onError logic
    const onError = (err) => {
        console.log(err.message);
    };

    const { isLoading, data, isError, error, isFetching } = useAllCoachesData(onSuccess, onError)
    console.log(data);
    if (isLoading || isFetching) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <>

            <div className='Cards' >

                <div className="ccccontainer" >
                    {data?.coach.map((coach) => {
                        return <div className="custom-card" key={coach.id}>
                            <div className="img-box"><img src={`https://142c-89-39-107-204.ngrok-free.app/Uploads/${coach.image}`} /></div>
                            <div className="custom-content">
                                <h2>{coach.name}</h2>
                                {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!</p>
                        <a href="">Read More</a> */}
                                <div className="">
                                    <div>
                                        <p><span className='font-extrabold'> ID : </span>{coach.id}</p>
                                        <p><span className='font-extrabold'>Phone Number : </span> {coach.phone_number}</p>
                                    </div>
                                    <div>
                                        <p ><span className='font-extrabold'>Price :</span> {coach.price}</p>
                                        {/* <p>Created at : {new Date(coach.created_at).toLocaleDateString()}</p> */}
                                        {/* <p>Updated at : {new Date(coach.updated_at).toLocaleDateString()}</p> */}
                                        <p className="description"><span className='font-extrabold'>Discription :</span> {coach.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                    }
                </div>
            </div>

            {isFetching && <h2>isLoading ....</h2>}
            {isLoading && <h2>isLoading ....</h2>}
        </>
    )
}

export default CoachCard