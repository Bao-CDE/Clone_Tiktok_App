import styles from "./Sidebar.module.scss";
import routes from "../../../../config/routes";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";

function SideBar() {
  return (
    <aside className={styles.wrapper}>
      {/* chỉnh sửa icon bằng fontawsome */}
      <Menu>
        <MenuItem title="For Your" to={routes.home} icon={null} />
        <MenuItem title="Following" to={routes.following} icon={null} />
        <MenuItem title="LIVE" to={routes.live} icon={null} />
      </Menu>
    </aside>
  );
}

export default SideBar;
