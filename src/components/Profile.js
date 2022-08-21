import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from '../conf/fireconf'
import User_pic from "../pic/user.png"

function Profile() {
  const {currentUser} = useAuthValue()

  return (
      <div className='center'>
        <div className='profile'>
          <h1 className='primary'>My Profile</h1>
          <img 
            src={User_pic} 
            alt='User' 
            className='user'>
          </img>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <button onClick={() => signOut(auth)}>Sign Out</button>
        </div>
      </div>
  )
}

export default Profile