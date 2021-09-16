import { useState } from 'react';
import { Modal } from '../../context/Modal';
import CommentEditForm from './CommentEditForm';

function CommentEditModal({ commentId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <i className="fas fa-ellipsis-h" onClick={() => setShowModal(true)}></i>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CommentEditForm setShowModal={setShowModal} commentId={commentId}/>
                </Modal>
            )}
        </>
    );
}

export default CommentEditModal;
