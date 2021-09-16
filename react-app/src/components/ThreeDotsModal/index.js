import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ThreeDotsMenu from './ThreeDotsMenu';

function ThreeDotsModal({ imageId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <i className="fas fa-ellipsis-h" onClick={() => setShowModal(true)}></i>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ThreeDotsMenu setShowModal={setShowModal} imageId={imageId} />
                </Modal>
            )}
        </>
    );
}

export default ThreeDotsModal;
