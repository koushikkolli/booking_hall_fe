import React, { useState } from 'react';
import Link from './Link';

const Header = () => {
  const [windowPath, setWindowPath] = useState(window.location.pathname)


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link className={`nav-link ${windowPath === "/" ? "active" : ""}`} href="/" onWindowChange={()=>setWindowPath(window.location.pathname)}>Halls</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${windowPath === "/addroom" ? "active" : ""}`} href="/addroom"  onWindowChange={()=>setWindowPath(window.location.pathname)}>Add Hall</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${windowPath === "/bookroom" ? "active" : ""}`} href="/bookroom" onWindowChange={()=>setWindowPath(window.location.pathname)}>Book Room</Link>
        </li>
       
      </ul>
    </div>
  </nav>
  );
};

export default Header;