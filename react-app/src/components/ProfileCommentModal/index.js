import { NavLink } from "react-router-dom"




const ProfileCommentModal = ({ comments, title, setShowCommentModal }) => {

  return (
    <>
      <h4>{title}</h4>

      {
        comments && comments.map(comment => (
          <div>{`${comment.content}`}</div>
        ))
      }
    </>
  )

}

export default ProfileCommentModal
