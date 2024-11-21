import React, { useState } from 'react';
import Modal from 'react-modal';

const TalkWithExpert = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleTalkWithExpert = () => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
     

        // Check if current time is between 10:00 AM and 8:00 PM
        if (currentHour >= 10 && currentHour < 20) {
            // Open Google Meet in a new tab
            window.open('https://meet.google.com/', '_blank');
        } else {
            // Show consultation time modal
            setModalIsOpen(true);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button
                onClick={handleTalkWithExpert}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
                Talk with Expert
            </button>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Consultation Time"
                ariaHideApp={false}
            >
                <button  onClick={closeModal} className="bg-red-400 text-white py-7  px-9 rounded-md hover:bg-red-700">
                    Close 
                </button>
                <h2    className='flex justify-center text-4xl'>Consultation Time</h2>
                <p className='flex justify-center text-4xl pt-10'>Our consultation hours are from 10:00 AM to 8:00 PM.</p>
                
            </Modal>
        </div>
    );
};

export default TalkWithExpert;