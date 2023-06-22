import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/create">Crear entrada</Link>
        </li>
      </ul>
    </nav>
  )
}
