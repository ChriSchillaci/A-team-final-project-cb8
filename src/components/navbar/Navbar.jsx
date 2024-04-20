import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";
import { FaUserCircle } from "react-icons/fa";
import menuLinks from "../../mocks/menuLinks";
import { useRouter } from "next/router";
import { AuthContext } from "../../pages/api/authContext";
import { avatars } from "../../mocks/avatar";

const Navbar = () => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const storedAvatar = localStorage.getItem("avatar");
    if (storedAvatar) {
      setAvatar(storedAvatar);
    }
  }, [isAuthenticated, router.pathname]);

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/store?search=${search}`);
  };

  return (
    <nav className={styles.Navbar}>
      <div className={styles.navBarContainer}>
        <div className={styles.navbar_logoEbuttons}>
          <Link href="/">
            <Image
              className={styles.logo}
              src="/images/logo.png"
              alt="logo"
              height={25}
              width={100}
              priority={true}
            />
          </Link>
          <ul className={styles["menu-btns"]}>
            {menuLinks.map((item, index) => (
              <li
                className={`${styles["menu-btn"]} ${
                  router.pathname === item.link && styles["menu-btn__active"]
                } `}
                key={index}
              >
                <Link
                  className={styles["icon-btn"]}
                  href={
                    (item.link === "/wishlist" ||
                      item.link === "/library" ||
                      item.link === "/cart") &&
                    !isAuthenticated
                      ? `/login?redirect=${encodeURIComponent(item.link)}`
                      : item.link
                  }
                >
                  {item.icon}
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <form className={styles.search_container} onSubmit={handleSearch}>
          {" "}
          <input
            type="text"
            placeholder="Search"
            className={styles.searchBar}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <div className={styles.navbar_userMenu}>
          {!isAuthenticated && (
            <>
              <Link className={styles["btn-signup"]} href="/signup">
                Signup
              </Link>
            </>
          )}

          {isAuthenticated && (
            <div className={styles.welcome_message}>
              <p>{username}</p>
            </div>
          )}
          <Link
            alt="user icon"
            className={
              !isAuthenticated
                ? styles["icon-user"]
                : styles["authenticated-icon-user"]
            }
            href={
              !isAuthenticated
                ? `/login?redirect=${encodeURIComponent("/user")}`
                : "/user"
            }
          >
            {avatar ? (
              <Image
                src={avatars.find((item) => item.id === parseInt(avatar)).image}
                alt="User Avatar"
                width={32}
                height={32}
                className={styles.userAvatar}
              />
            ) : (
              <FaUserCircle />
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
