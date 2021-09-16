import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ImageEditForm from './ImageEditForm';

function ImageEditModal({ imageId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='edit-image' onClick={() => setShowModal(true)}>Edit Image</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ImageEditForm setShowModal={setShowModal} imageId={imageId}/>
                </Modal>
            )}
        </>
    );
}

export default ImageEditModal;
