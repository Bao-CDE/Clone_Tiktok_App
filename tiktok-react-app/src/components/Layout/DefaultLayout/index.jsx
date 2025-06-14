import Header from "../components/Header";
import SideBar from "../components/Sidebar/Sidebar";
import styles from "./DefaultLayout.module.scss";

function DeafaultLayout({ children, onLogout, currentUser }) {
  return (
    <div className={styles.wrapper}>
      <Header onLogout={onLogout} currentUser={currentUser}></Header>

      <div className={styles.container}>
        <SideBar></SideBar>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default DeafaultLayout;
