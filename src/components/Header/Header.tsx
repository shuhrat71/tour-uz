import About from "@/app/about/page";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/tours">Tours</Link>
          </li>
          <li>
            <Link href="/happy-clients">Happy-clients</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
