import React from "react";
import { Link } from "react-router-dom";

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
            <Link to={"/shoes"}>
              SHOES
            </Link>
          </li>

          <li>
            <Link to={"/cart"}>
              CART
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
