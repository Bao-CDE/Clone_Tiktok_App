import SearchTooltip from "../Header/SearchTooltip";
import AccountItem from "../../../AccountItem";
// import axios from "axios";
import request from "../../../../ultis/request";
import { useState, useRef, useEffect } from "react";
import useDebounce from "../../../../hooks/useDebounce";

import styles from "./Search.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  // custom hooks trong file hooks tránh gọi API liên tục
  const debounce = useDebounce(search, 800);

  const inputRef = useRef();

  useEffect(() => {
    if (debounce.trim() === "") {
      setSearchResults([]);
      return;
    }
    setLoading(true);
    request // cấu hình riêng
      .get("userTiktok", {})
      .then((data) => {
        // //Nguyên nhân là do axios trả về một object với property data, còn bạn đang xử lý như thể axios trả về trực tiếp mảng user nên lấy data.data
        const filtered = data.data.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        );
        setSearchResults(filtered);
        setShowResult(true);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);

  const handleHideResult = () => {
    setShowResult(false);
  };


  return (
    <div>
      <SearchTooltip
        visible={showResult && searchResults.length > 0}
        onClickOutside={handleHideResult}
        content={
          <div className={styles.search_result}>
            <h4 className={styles.search_title}>Accounts</h4>
            {searchResults.map((user) => (
              <AccountItem key={user.id} data={user} />
            ))}
          </div>
        }
      >
        <div className={styles.search}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowResult(true)}
          />

          {!!search && !loading && (
            <button
              className={styles.clear_btn}
              onClick={() => {
                setSearch("");
                setSearchResults([]);
                inputRef.current.focus();
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <span className={styles.loading_icon}>
              <FontAwesomeIcon icon={faSpinner} spin />
            </span>
          )}

          <button
            className={styles.search_btn}
            onMouseDown={(e) => e.preventDefault()}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </SearchTooltip>
    </div>
  );
}

export default Search;
