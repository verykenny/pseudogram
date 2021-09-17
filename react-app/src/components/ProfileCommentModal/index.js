import { useSelector } from "react-redux"
import { useState } from "react"
import { Modal } from "../../context/Modal"
import Image from "../ImageModal/Image"
import './profile-comment-modal.css'




const ProfileCommentModal = ({ comments, title, setShowCommentModal }) => {
  const allImages = useSelector(state => state.feed.images)
  const [imageModalShow, setImageModalShow] = useState(false)
  const [imageId, setImageId] = useState()
  const [userOfImage, setUserOfImage] = useState([])

  const handleClickedComment = (user, imgId) => {
    setImageId(imgId)
    setUserOfImage(user)
    setImageModalShow(true)
  }
  const closeModal = () => {
    setImageModalShow(false)
    setShowCommentModal(false)
  }



  return (
    <div className='comment-modal-wrapper'>
      <h4>{title}</h4>

      {

        comments && comments.map(comment => (
          <div>
            <img alt='img-commented-on' className='comment-modal-img' src={`${allImages[comment.imgId].imgUrl}`} onClick={() => handleClickedComment(allImages[comment.imgId].user, comment.imgId)}></img>
            <p>{`${comment.content}`}</p>

            {imageModalShow && (
              <Modal onClose={() => closeModal()}>
                <Image setImageModalShow={setImageModalShow} user={userOfImage} imageId={imageId} />
              </Modal>
            )}

          </div>

        ))
      }
      {!comments.length && (
        <div>No Comments Yet</div>
      )}

    </div>

  )

}

export default ProfileCommentModal
