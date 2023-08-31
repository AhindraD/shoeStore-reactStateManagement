import { act } from "@testing-library/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const activeStyle = {
  color: "cyan"
}

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {/* Anchor tag but doesn't reload page */}
            <Link to={"/"}>
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>

          <li>
            {/* Same as link but also shows active state */}
            <NavLink activeStyle={activeStyle} to={"/shoes"}>
              SHOES
            </NavLink>
          </li>

          <li>
            <NavLink activeStyle={activeStyle} to={"/cart"}>
              CART
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
