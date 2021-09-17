import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import Image from '../ImageModal/Image';

function ImageModalComment({ imageId, user, display = false }) {
    const [showModal, setShowModal] = useState(display);
    const image = useSelector(state => state.feed.images[imageId])

    return (
        <>
            <i className="far fa-comment" onClick={() => setShowModal(true)}></i>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <Image setShowModal={setShowModal} imageId={imageId} user={user} />
                </Modal>
            )}

        </>
    );
}

export default ImageModalComment;
