import React, { useState } from 'react'
import profile from '../assets/profile.png'
import { useAllBillsData } from '../hook/useAllBillsData';

const BillsCard = () => {
    const [activeCardId, setActiveCardId] = useState(null); // Track the active card's ID
    const {data: allBills} = useAllBillsData();

    const toggleCard = (billId) => {
        // If the card is already active, close it. Otherwise, open it.
        setActiveCardId(activeCardId === billId ? null : billId);
    };


    return (
        <>
        {allBills?.data?.map((bill) => {
    const created_at = new Date(bill.created_at).toLocaleDateString()
            const isActive = activeCardId === bill.id; // Check if this card is active
            return <>
            <div
            key={bill.id}
            id="cardContainer"
            style={{
                height: isActive ? `250px` : `100px`,
                transition: "0.9s"
            }}
            onClick={() => toggleCard(bill.id)} // Handle card toggle
        >
            <div id="firstDisplay" >

                <div id="detail">
                    {bill.billable.status}
                    <div id="detailLabel" className='flex justify-center'>Status</div>
                </div>

                <div id="detail">
                    {bill.id}
                    <div id="detailLabel" className='flex justify-center'>ID</div>
                </div>

                <div id="detail">
                <p className='flex justify-center'>{bill.total}</p>
                    <div id="detailLabel">total</div>
                </div>


            </div>
            <div
                id="first"
                style={{
                    transform: isActive
                        ? `rotate3d(1, 0, 0, -180deg)`
                        : `rotate3d(1, 0, 0, 0deg)`,
                    transitionDelay: isActive ? "0s" : "0.3s"
                }}
            >
                <div id="firstTop"> {/* واجهة الكرت  */}
                    {/* <img src={profile} alt="Flight Logo" /> */}
                    <p className='font-extrabold flex justify-center items-center text-4xl tracking-widest'>Bill</p>
                    <div id="timecontainer">

                        <p className='text-5xl flex justify-center items-center mt-2 border-l-2 pl-10 border-gray-600 h-14 '>{bill.paid === 0 ? <p className='text-green-400'>UnPaid </p>: <p className='text-green-400'> Paid </p>}</p>
                    </div>
                </div>
                <div id="firstBehind"> {/* بداية الجسم  */}
                    <div id="firstBehindDisplay">
                        <div id="firstBehindRow">
                            <div id="detail">
                            <p className='flex justify-center'> {bill.InvoiceId == null ? 0 : bill.InvoiceId}</p>
                                <div id="detailLabel">InvoiceId</div>
                            </div>
                        </div>

                        <div id="firstBehindRow">
                            <div id="detail">
                            <p className='flex justify-center'> {created_at} </p>
                                <div id="detailLabel">Created At</div>
                            </div>
                        </div>

                        <div id="firstBehindRow">

                            <div id="detail">
                            <p className='flex justify-center'> {bill.RefundId == null ? 0 : bill.RefundId} </p>
                                <div id="detailLabel">RefundId</div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="second"
                        style={{
                            transform: isActive
                                ? `rotate3d(1, 0, 0, -180deg)`
                                : `rotate3d(1, 0, 0, 0deg)`,
                            transitionDelay: isActive ? "0.2s" : "0.2s"
                        }}
                    >
                        <div id="secondTop" />
                        <div id="secondBehind">
                            <div id="secondBehindDisplay">
                                <div className='flex justify-between'>
                                <p className='font-extrabold'>Order Date : </p><p className='tracking-wide'>{bill.billable.order_date}</p>
                                </div>
                                
                            </div>
                            <div
                                id="third"
                                style={{
                                    transform: isActive
                                        ? `rotate3d(1, 0, 0, -180deg)`
                                        : `rotate3d(1, 0, 0, 0deg)`,
                                    transitionDelay: isActive ? "0.4s" : "0s"
                                }}
                            >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </>
        })}
        </>
    );
}

export default BillsCard