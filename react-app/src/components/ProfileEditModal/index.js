import { useState } from 'react';
import { Modal } from '../../context/Modal';
import ProfileEditForm from './ProfileEditForm';

function ProfileEditModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>update profile</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ProfileEditForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default ProfileEditModal;
