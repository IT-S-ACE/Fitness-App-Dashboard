import React, { useState } from 'react';

const Modal = ({ children, buttonContent, numStyle, BtnStyle }) => {
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
            <div
                className={`modal-container ${modalClass} ${modalActive ? 'modal-active' : ''}`}
            >
                <div className="modal-background">
                    <div className="modal">
                        <div className="flex justify-center items-center">
                            {React.cloneElement(children, { handleCloseModal })} {/* Pass handleCloseModal as prop */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={BtnStyle}>
                <div className="content">
                    <div className="buttons">
                        <div className="button" onClick={() => handleButtonClick(`${numStyle}`)}>
                            {buttonContent}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
