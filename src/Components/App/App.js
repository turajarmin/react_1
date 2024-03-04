import { useState } from "react";
import Menu from "../Menu/Menu";
import { useEffect } from "react";
import Slider from "../Slider/Slider";

const App = () => {
  const [menu, setMenu] = useState(null);
  const [slider, setSlider] = useState(null);
  const fetchMenu = async () => {
    try {
      const data = await fetch("https://turajarmin.github.io/data/db.json");
      const res = await data.json();
      setMenu(res.menu);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchSlider = async () => {
    try {
      const data = await fetch("https://turajarmin.github.io/data/db.json");
      const res = await data.json();
      setSlider(res.slider);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchMenu();
    fetchSlider();
  }, []);
  return (
    <div className="container-fluid p-0">
      {/* make menu */}
      <Menu menu={menu} />
      {/* end make menu */}
      {/* end make slider */}
      <Slider slider={slider} />
      {/* end make slider */}
    </div>
  );
};

export default App;
