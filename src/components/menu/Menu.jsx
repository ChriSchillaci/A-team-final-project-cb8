import styles from "./index.module.scss";
import React from "react";
import Link from "next/link";
import menuLinks from "@/mocks/menuLinks";
import { useRouter } from "next/router";

const MenuItem = ({ item, isActive }) => (
  <li className={`${styles.list} ${isActive ? styles.list_active : ""}`}>
    <Link href={item.link}>
      <span className={`${styles.icon} ${isActive ? styles.icon_active : ""}`}>
        {item.icon}
      </span>
      <span className={`${styles.text} ${isActive ? styles.text_active : ""}`}>
        {item.text}
      </span>
      <span
        className={`${styles.circle} ${isActive ? styles.circle_active : ""}`}
      ></span>
    </Link>
  </li>
);

const Menu = () => {
  const router = useRouter();

  return (
    <div className={styles.navigation}>
      <ul className={styles.btn_container}>
        {menuLinks.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            isActive={router.pathname === item.link}
          />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
