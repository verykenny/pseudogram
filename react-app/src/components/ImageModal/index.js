import { useState } from 'react';
import { Modal } from '../../context/Modal';
import Image from './Image';

function ImageModal({ image, user }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div
                className='profile-page-image__profile'
                style={{ backgroundImage: `url(${image.imgUrl})` }}
                onClick={() => setShowModal(true)}
            >
                <div className='image_likes_comments__profile'>
                    <p>{image.totalLikes}</p>
                </div>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <Image setShowModal={setShowModal} image={image} user={user} />
                </Modal>
            )}
        </>
    );
}

export default ImageModal;
