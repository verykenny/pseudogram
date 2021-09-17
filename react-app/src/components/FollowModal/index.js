import { NavLink } from "react-router-dom"
import './follow-modal.css'




const ImageModal = ({ friends, title, setShowModal }) => {

  return (
    <div className='follow-modal-wrapper'>
      <div className='title-div'>
        <h4>{title}</h4>
      </div>
      {
        friends && friends.map(friend => (
          <ul>
            <li>
              <img className='profile-img-nav' src={`${friend.profileImgUrl}`} alt='user-pfp'></img>
              <NavLink to={`/users/${friend.id}`} onClick={() => setShowModal(false)}>{`${friend.username}`}</NavLink>            </li>
          </ul>

        ))
      }
      {
        !friends.length && (

          <ul>
            <li>
              Nothing to show here
            </li>
          </ul>

        )
      }
    </div>
  )

}

export default ImageModal
