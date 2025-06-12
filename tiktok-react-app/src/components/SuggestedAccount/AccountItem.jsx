import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./SuggestedAccount.module.scss";

function AccountItem() {
  return (
    <div className={styles.account_item}>
      <img
        className={styles.avatar}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/0b5e34cd2eb8085acd7f55688f75041f~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=f75fa101&x-expires=1749880800&x-signature=doBS50EFKjT9PF8A0bhJvI%2F0tpk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
        alt=""
      />
      <div className={styles.item_infor}>
        <p className={styles.nickname}>
          <strong>Baooooooo</strong>
          <FontAwesomeIcon className={styles.check} icon={faCircleCheck} />
        </p>
        <p className={styles.name}>Nguyễn Bảo</p>
      </div>
    </div>
  );
}

export default AccountItem;
