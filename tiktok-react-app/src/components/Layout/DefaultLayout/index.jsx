import Header from "../components/Header";
import SideBar from "../components/Sidebar/Sidebar";
import styles from "./DefaultLayout.module.scss"

function DeafaultLayOut({children}) {
    return ( 
        <div className={styles.wrapper}>
            <Header></Header>
            
            <div className={styles.container}>
                <SideBar></SideBar>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DeafaultLayOut;