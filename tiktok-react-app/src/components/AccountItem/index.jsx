import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AccountItem() {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.avatar}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4b7dd7256c1de54465cce2d73062be4b~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=b3c462c0&x-expires=1749189600&x-signature=QCBCNjalCDxrzdwFWMJdxPBqcbg%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=my"
      />
      <div className={styles.info}>
        <h4 className={styles.name}>
          <span>Bảooo</span>
          <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />
        </h4>
        <span className={styles.username}>Baooo</span>
      </div>
    </div>
  );
}

export default AccountItem;
