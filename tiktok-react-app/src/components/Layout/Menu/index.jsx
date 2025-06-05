import SearchTooltip from "../components/Header/SearchTooltip";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "./Menuitem";

function Menu({ children, item = [] }) {
  const renderItems = () => {
    return item.map((items, index) => <MenuItem key={index} data={items} />);
  };
  return (
    <SearchTooltip
    leaveDelay={500}
      content={
        <div>
          {/* <PopperWrapper> */}
          <div className={styles.menu_list}>
            {renderItems()}
          </div>
          
          {/* </PopperWrapper> */}
        </div>
      }
    >
      {children}
    </SearchTooltip>
  );
}

export default Menu;
