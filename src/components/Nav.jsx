import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const Links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/login", title: "Login" },
    { path: "/user", title: "User" },
  ];

  const activeStyle = { textDecoration: "none", color: "red" };
  const InactiveStyle = { textDecoration: "none", color: "blue" };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {/* step 1 (method 1)... later replaced using map function */}

      {/* <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/user"}>User</Link> */}

      {/* Step 2 */}
      {/* {Links.map(({path, title}) =>{
        return  return <Link to={path}>{title}</Link>;
                
           
      })} */}

      {/* step 3 */}

      {Links.map(({ path, title }) => {
        return (
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : InactiveStyle;
            }}
            to={path}
          >
            {title}
          </NavLink>
        );
      })}
    </div>
  );
}
