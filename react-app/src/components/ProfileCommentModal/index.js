import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import { Modal } from "../../context/Modal"
import Image from "../ImageModal/Image"




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



  return (
    <>
      <h4>{title}</h4>

      {
        comments && comments.map(comment => (<>
          <img className='activity-img' src={`${allImages[comment.imgId].imgUrl}`} onClick={() => handleClickedComment(allImages[comment.imgId].user, comment.imgId)}></img>
          <div>{`${comment.content}`}</div>

          {imageModalShow && (
            <Modal onClose={() => setImageModalShow(false)}>
              <Image setImageModalShow={setImageModalShow} user={userOfImage} imageId={imageId} />
            </Modal>
          )}
        </>
        ))
      }
    </>
  )

}

export default ProfileCommentModal
