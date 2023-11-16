import Logo from "../../assets/logo/TELUS_LMTFF_EN_Vert_2021_Digital_RGB.png";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navigation">
      <div className="navigation-header">
        <Link to="/">
          <img src={Logo} alt="instock logo"></img>
        </Link>
        <div className="navigation-header__container">
          <Link to="/WarehouseList" className="navigation-header__link">
            Reported Major Incidents
          </Link>
          <Link to="/InventoryList" className="navigation-header__link">
            Inventory
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
