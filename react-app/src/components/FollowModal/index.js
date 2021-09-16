import { NavLink } from "react-router-dom"




const ImageModal = ({ friends, title, setShowModal }) => {

  return (<>
    <h4>{title}</h4>
    {
      friends && friends.map(friend => (
        <div>
          <ul>
            <li>
              <img className='profile-img-nav' src={`${friend.profileImgUrl}`}></img>
              <NavLink to={`/users/${friend.id}`} onClick={() => setShowModal(false)}>{`${friend.username}`}</NavLink>            </li>
          </ul>
        </div>
      ))
    }
    {
      !friends.length && (
        <div>
          <ul>
            <li>
              Nothing to show here
            </li>
          </ul>
        </div>
      )
    }
  </>
  )

}

export default ImageModal
