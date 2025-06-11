import { NavLink } from "react-router-dom";
import styles from './Menu.module.scss'
function MenuItem({title, to, icon}) {
    return ( 
        <NavLink to={to} className={styles.menu_item}>
            {icon}
            <span className={styles.title}>{title}</span>
        </NavLink>
     );
}

export default MenuItem;