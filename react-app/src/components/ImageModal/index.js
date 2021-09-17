import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import Image from './Image';

function ImageModal({ imageId, user, display = false }) {
    const [showModal, setShowModal] = useState(display);
    const image = useSelector(state => state.feed.images[imageId])

    return (
        <>
            <div
                className='profile-page-image__profile'
                style={{ backgroundImage: `url(${image.imgUrl})` }}
                onClick={() => setShowModal(true)}
            >
                <div className='image_likes_comments__profile'>
                    <div>
                        <i className="fas fa-heart"></i>
                        <p>{image.totalLikes}</p>
                    </div>
                    <div>
                        <i className="fas fa-comment"></i>
                        <p>{image.comments.length}</p>
                    </div>
                </div>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <Image setShowModal={setShowModal} imageId={imageId} user={user} />
                </Modal>
            )}

        </>
    );
}

export default ImageModal;
