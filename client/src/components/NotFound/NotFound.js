import { Link } from 'react-router-dom'
import './NotFound.css'

export const NotFound = () => {
  return (
    <div class="mainbox">
      <div class="err errr">404 Not Found</div>
      <div class="msg"><p>Go to</p><Link href="/">HOME</Link></div>
    </div>
  )
}