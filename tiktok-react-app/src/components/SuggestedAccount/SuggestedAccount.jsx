import styles from './SuggestedAccount.module.scss'
import AccountItem from './AccountItem';

function SuggestedAccount({label}) {
    return ( 
        <div className={styles.wrapper}>
            <p className={styles.label}>{label}</p>
            <AccountItem/>
            <AccountItem/>
            <AccountItem/>
            <p className={styles.see_all_btn}>See all</p>
        </div>
     );
}

export default SuggestedAccount;
