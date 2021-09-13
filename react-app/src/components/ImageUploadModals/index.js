import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ImageUploadForm from './ImageUploadForm';

function ImageUploadModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Add New Image</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ImageUploadForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default ImageUploadModal;