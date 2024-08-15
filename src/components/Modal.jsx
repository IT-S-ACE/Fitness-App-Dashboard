import { useState } from 'react';

const Modal = ({ children, buttonContent, numStyle ,BtnStyle}) => {
    const [modalClass, setModalClass] = useState('');
    const [modalActive, setModalActive] = useState(false);

    const handleButtonClick = (animationType) => {
        setModalClass(animationType);
        setModalActive(true);
    };

    const handleCloseModal = () => {
        setModalClass(`${modalClass} out`);
        setModalActive(false);
    };

    return (
        <>
            <div className={`modal-container ${modalClass} ${modalActive ? 'modal-active' : ''}`} onDoubleClick={handleCloseModal}>
                <div className="modal-background">
                    <div className="modal">
                        <div className='flex justify-center items-center'>
                            {/* <AddNewExerciseFinale /> */}
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <div className={BtnStyle}>
            <div className="content">
                <div className="buttons">
                    {/* {['one', 'two', 'three', 'four', 'five', 'six', 'seven'].map((id) => (
            <div key={id} className="button" onClick={() => handleButtonClick(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
            </div>
          ))} */}
                    <div className='button' onClick={() => handleButtonClick(`${numStyle}`)}>
                        {buttonContent}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Modal;
