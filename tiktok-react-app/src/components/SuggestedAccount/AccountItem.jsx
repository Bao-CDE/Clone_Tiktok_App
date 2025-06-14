import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./SuggestedAccount.module.scss";
import TippyHeadless from "@tippyjs/react/headless";
import Button from "../Button";

function AccountItem({ nickname, name }) {
  const renderResult = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <div className={styles.preview}>
          <header className={styles.header}>
            <img
              className={styles.avatar_item}
              src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/0b5e34cd2eb8085acd7f55688f75041f~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=f75fa101&x-expires=1749880800&x-signature=doBS50EFKjT9PF8A0bhJvI%2F0tpk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
              alt="Avatar"
            ></img>
            <Button className={styles.following_btn} primary>
              Follow
            </Button>
          </header>
          <div className={styles.body_item}>
            <p className={styles.nickname_item}>
              <strong>{nickname}</strong>
              <FontAwesomeIcon className={styles.check} icon={faCircleCheck} />
            </p>
            <p className={styles.name_item}>{name}</p>
            <p className={styles.follow_like}>
              <strong className={styles.count_value}>9.9m</strong>
              <span className={styles.label}>Followers</span>
              <strong className={styles.count_value}>17.9m</strong>
              <span className={styles.label}>Likes</span>
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <TippyHeadless
        offset={[-20, 0]}
        interactive
        delay={[800, 0]}
        render={renderResult}
        placement={"bottom"}
      >
        <div className={styles.account_item}>
          <img
            className={styles.avatar}
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/0b5e34cd2eb8085acd7f55688f75041f~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=f75fa101&x-expires=1749880800&x-signature=doBS50EFKjT9PF8A0bhJvI%2F0tpk%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my2"
            alt=""
          />
          <div className={styles.item_infor}>
            <p className={styles.nickname}>
              <strong>{nickname}</strong>
              <FontAwesomeIcon className={styles.check} icon={faCircleCheck} />
            </p>
            <p className={styles.name}>{name}</p>
          </div>
        </div>
      </TippyHeadless>
    </div>
  );
}

export default AccountItem;
