import React, { useRef, useEffect } from "react";
import styles from "./index.module.scss";
import { CgCloseO } from "react-icons/cg";
import { platformOptions, genreOptions } from "../../mocks/filterOptions";
import useFilter from "../../utils/useFilter";
import Link from "next/link";

const Filter = ({ onClose, title }) => {
  const {
    platformDropdownOpen,
    genreDropdownOpen,
    togglePlatformDropdown,
    toggleGenreDropdown,
  } = useFilter();

  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleMouseDown = (event) => {
      handleClickOutside(event);
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  const renderPlatformDropdown = (
    platformOptions,
    togglePlatformDropdown,
    isPlatformOpen
  ) => (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdown_toggle}
        onClick={togglePlatformDropdown}
      >
        Platform
      </button>
      {isPlatformOpen && (
        <div className={styles.dropdown_content}>
          {platformOptions.map((option, index) => (
            <Link
              className={styles.button_filter}
              href={`/store?parent_platforms=${option.id}`}
              id={option.id}
              key={index}
              onClick={handleCloseClick}
            >
              {option.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  const renderGenresDropdown = (
    genreOptions,
    toggleGenresDropdown,
    isGenresOpen
  ) => (
    <div className={styles.dropdown}>
      <button className={styles.dropdown_toggle} onClick={toggleGenresDropdown}>
        Genres
      </button>
      {isGenresOpen && (
        <div className={styles.dropdown_content}>
          {genreOptions.map((option, index) => (
            <Link
              className={styles.button_filter}
              href={`/store?genres=${option.slug}`}
              id={option.slug}
              key={index}
              onClick={handleCloseClick}
            >
              {option.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.filter_overlay}>
      <div className={styles.filter_wrapper} ref={filterRef}>
        <div className={styles.filter}>
          <div className={styles.filter_header}>
            <div className={styles.close_button}>
              <CgCloseO onClick={handleCloseClick} />
            </div>
          </div>
          {title && <h1>{title}</h1>}
          <div className={styles.filter_body}>
            {renderPlatformDropdown(
              platformOptions,
              togglePlatformDropdown,
              platformDropdownOpen
            )}
            {renderGenresDropdown(
              genreOptions,
              toggleGenreDropdown,
              genreDropdownOpen
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
