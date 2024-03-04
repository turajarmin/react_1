import MenuItem from "./MenuItem";

const Menu = ({ menu }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav d-flex justify-content-center w-100">
          {menu?.map((elem) => {
            return (
                <MenuItem name={elem.name} link={elem.link} key={elem.id} dropdown={elem.dropdown} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
