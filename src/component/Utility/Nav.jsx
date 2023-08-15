import "./Nav.scss"
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <div className='nav'>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "nav_item"
        }
      >
        <p className="number">1</p>
        <div className="info">
          <p>Step 1</p>
          <h6>your info</h6>
        </div>
      </NavLink>
      <NavLink
        to="/plan"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "nav_item"
        }
      >
        <p className="number">2</p>
        <div className="info">
          <p>Step 2</p>
          <h6>select plan</h6>
        </div>
      </NavLink>
      <NavLink
        to="/addons"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "nav_item"
        }
      >
        <p className="number">3</p>
        <div className="info">
          <p>Step 3</p>
          <h6>Add-Ons</h6>
        </div>
      </NavLink>
      <NavLink
        to="/summary"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "nav_item"
        }
      >
        <p className="number">4</p>
        <div className="info">
          <p>Step 4</p>
          <h6>Summary</h6>
        </div>
      </NavLink>
    </div>
  );
}
