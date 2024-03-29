import './Menu.scss';
import { NavLink } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
