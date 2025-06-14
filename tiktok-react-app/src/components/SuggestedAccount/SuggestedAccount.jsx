import styles from "./SuggestedAccount.module.scss";
import AccountItem from "./AccountItem";
import { useState } from "react";

function SuggestedAccount({ label }) {
  const [showAll, setShowAll] = useState(false);

  // Array of accounts - you can add more accounts here
  const accounts = [
    { id: 1, nickname: "Baooooooo", name: "Nguyễn Bảo" },
    { id: 2, nickname: "Xê Rờ 7", name: "siuuuu" },
    { id: 3, nickname: "Merci boucu Ronaldo", name: "silunn" },
    { id: 4, nickname: "Adolf HitLer", name: "adolf" },
    { id: 5, nickname: "Bác Tôi", name: "billgates" },
    { id: 6, nickname: "Baooooooo", name: "Nguyễn Bảo" },
    { id: 7, nickname: "Baooooooo", name: "Nguyễn Bảo" },
    { id: 8, nickname: "Baooooooo", name: "Nguyễn Bảo" },
  ];

  const displayedAccounts = showAll ? accounts : accounts.slice(0, 4);

  return (
    <div className={styles.wrapper}>
      <p className={styles.label}>{label}</p>
      {displayedAccounts.map((account) => (
        <AccountItem
          key={account.id}
          nickname={account.nickname}
          name={account.name}
        />
      ))}

      {accounts.length > 4 && (
        <p className={styles.see_all_btn} onClick={() => setShowAll(!showAll)}>
          {showAll ? "See less" : "See all"}
        </p>
      )}
    </div>
  );
}

export default SuggestedAccount;
