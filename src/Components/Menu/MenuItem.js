import SubMenu from "./SubMenu";

const MenuItem = ({ name, link, dropdown }) => {
  console.log(dropdown);
  return dropdown.length > 0 ? (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle text-capitalize text-white"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
      >
        {name}
      </a>
      <ul className="dropdown-menu">
        {dropdown?.map((subMenu) => {
          return (
            <SubMenu name={subMenu.name} link={subMenu.link} key={subMenu.id} />
          );
        })}
      </ul>
    </li>
  ) : (
    <li className="nav-item">
      <a className="nav-link text-white text-capitalize" href={link}>
        {name}
      </a>
    </li>
  );
};

export default MenuItem;
