const SubMenu = ({ link, name }) => {
  return (
    <li>
      <a className="dropdown-item" href={link}>
        {name}
      </a>
    </li>
  );
};

export default SubMenu;
