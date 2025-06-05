import Button from "../../button";
import styles from "./Menu.module.scss";

function MenuItem({ data, onClick }) {
  return (
    <div>
      <Button className={styles.menu_item} leftIcon={data.icon} to={data.to} onClick={onClick}>
        {data.title}
      </Button>
    </div>
  );
}

export default MenuItem;
