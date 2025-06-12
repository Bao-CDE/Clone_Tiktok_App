import {  NavLink } from "react-router-dom";
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function MenuItem({ title, to, icon }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.menu_item} ${styles.active}` : styles.menu_item
      }
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      <span className={styles.title}>{title}</span>
    </NavLink>
  );
}

export default MenuItem;
