import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/">Simon</Link>

        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;

