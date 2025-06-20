

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

function AccountItem({ data }) {
  return (
    <Link to={`/${data.name}`} className={styles.wrapper}>
      <img className={styles.avatar} src={data.avatar} alt={data.name} />
      <div className={styles.info}>
        <h4 className={styles.name}>
          <span>{data.name}</span>

          {data.tick && <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />}
        </h4>
        <span className={styles.username}>{data.name}</span>
      </div>
    </Link>
  );
}

export default AccountItem;
