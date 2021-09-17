import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ImageUploadForm from './ImageUploadForm';

function ImageUploadModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='add-new-image' onClick={() => setShowModal(true)}>Post</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ImageUploadForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default ImageUploadModal;
