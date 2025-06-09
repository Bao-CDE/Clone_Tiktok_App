import SearchTooltip from "../Header/SearchTooltip";
import AccountItem from "../../../AccountItem";
import { useState, useRef, useEffect } from "react";
import styles from "./Search.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [search, setSearch] = useState("");

  const [showResult, setShowResult] = useState(true);

  const [searchResults, setSearchResults] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    if (search.trim() === "") {
      setSearchResults([]);
      return;
    }

    fetch("https://684561cbfc51878754db3692.mockapi.io/tiktok/api/userTiktok")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(filtered);
        setShowResult(true);
      });
  }, [search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowResult(false);
      }
    };

    if (showResult) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showResult]);

  return (
    <>
      <SearchTooltip
        open={showResult && searchResults.length > 0}
        content={
          <div className={styles.search_result}>
            {/* <PopperWrapper> */}
            <h4 className={styles.search_title}>Accounts</h4>
            {searchResults.map((user) => {
              <AccountItem key={user.id} data={user} />;
            })}

            {/* </PopperWrapper> */}
          </div>
        }
        onFocus={() => setShowResult(true)}
      >
        <div className={styles.search}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          {/* khi có nội dung mới hiện nút x và ấn sẽ xóa nó đi */}
          {!!search && (
            <button
              className={styles.clear_btn}
              onClick={() => {
                setSearch("");
                inputRef.current.focus();
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {/* <FontAwesomeIcon className={styles.loading} icon={faSpinner} /> */}
          <button className={styles.search_btn}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </SearchTooltip>
    </>
  );
}

export default Search;
