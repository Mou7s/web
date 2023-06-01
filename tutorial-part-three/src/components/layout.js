import React from "react";
import { Link } from "gatsby";
const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

const Footer = (props) => (
  <div
    style={{
      position: "fixed",
      bottom: "0",
      left: "0",
      right: "0",
      textAlign: "center",
    }}
  >
    <p>{props.children}</p>
  </div>
);

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>MyGatsbySite</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children}
    <footer>
      <Footer>This is a footer</Footer>
    </footer>
  </div>
);
