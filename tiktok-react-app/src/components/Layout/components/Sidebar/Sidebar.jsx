import styles from "./Sidebar.module.scss";
import routes from "../../../../config/routes";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {  faHouse, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons";
import SuggestedAccount from "../../../SuggestedAccount/SuggestedAccount";

function SideBar() {
  return (
    <aside className={styles.wrapper}>
      {/* chỉnh sửa icon bằng fontawsome */}
      <Menu>
          <MenuItem title="For You" to={routes.home} icon={faHouse} />
          <MenuItem title="Following" to={routes.following} icon={faUsers} />
          <MenuItem title="LIVE" to={routes.live} icon={faVideo} />
      </Menu>
      <SuggestedAccount label="Suggested accounts"/>
      {/* <SuggestedAccount label="Following accounts"/> */}
    </aside>
  );
}

export default SideBar;
