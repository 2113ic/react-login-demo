import { Link } from 'react-router-dom'

export default function SearchPage() {
  return (
    <div className="search-page">
      This is search page. Go to <Link to="/login">login page</Link>
    </div>
  )
}
