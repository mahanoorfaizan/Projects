import{Link} from'react-router-dom'
import '../assets/css/navbar.css'
import { useContext } from 'react'
import { UserContext } from '../App'

export default function Navbar() {
const {user} = useContext(UserContext)
  return (
    <div className='navbar'>
        <div className='navbar-left'>
         <Link  to='/' className='navbar-brand'>Contact SH</Link>
        </div>
        <div className='navbar-right'>
        <Link to='/about' className='navbar-link'> About </Link>

       { 
       user ? <> 
        <Link to ='/dashboard' className='navbar-link'> Contact </Link> 
        <Link to='/register' className='navbar-link'>{user.name}</Link>
        <Link to ='/logout' className='navbar-link'> Logout </Link> 
               </>
        : <>
        <Link to ='/login' className='navbar-link'> Login </Link> 
        <Link to='/register' className='navbar-link'> Register </Link>
        </>

       }
        </div>
    </div>
  )
}
