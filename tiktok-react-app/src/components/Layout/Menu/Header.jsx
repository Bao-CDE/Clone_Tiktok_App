import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchTooltip from "../components/Header/SearchTooltip";
import styles from "./Menu.module.scss";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Header({ title, onBack }) {
  return <header className={styles.header} onClick={onBack}>
    <button className={styles.back_btn}>
        <FontAwesomeIcon icon={faChevronLeft}/>
    </button>
    <h4 className={styles.header_title}>{title}</h4>
  </header>;
}

export default Header;
