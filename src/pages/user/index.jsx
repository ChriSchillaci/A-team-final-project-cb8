import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../api/authContext";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/User.module.scss";
import { avatars } from "../../mocks/avatar";

const Index = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [username, setUsername] = useState(null);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem("username"));
    };

    window.addEventListener("storage", handleStorageChange);

    if (!isAuthenticated) {
      router.push("/login");
    } else {
      handleStorageChange();
    }

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [isAuthenticated, router.pathname]);

  const fetchUser = async (username) => {
    try {
      const res = await fetch(`/api/user?username=${username}`);
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
        localStorage.setItem("avatar", data.user.avatar);
      } else {
        throw new Error(`Error: ${res.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (username) {
      fetchUser(username);
    }
  }, [username]);

  useEffect(() => {
    const handleStorageChange = () => {
      const username = localStorage.getItem("username");
      setUsername(username);
      if (username) {
        fetchUser(username);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("avatar");
    router.push("/");
  };

  if (user) {
    const avatarNumber = user.avatar;
    const selectedAvatar = avatars.find((avatar) => avatar.id === avatarNumber);

    return (
      <div className={styles.user_page}>
        {isAuthenticated && user && (
          <div className={styles.user_page}>
            <div className={styles.user__Container}>
              <Image
                className={styles.user__Image}
                src={selectedAvatar.image}
                alt="User"
                width={150}
                height={150}
              />
              <h1 className={styles.user__Name}>{username}</h1>
              <div className={styles.user__ListContainer}>
                <div className={styles.wishlist_container}>
                  <h2>Wishlist:</h2>
                  <p className={styles.text_content}>
                    You have <span>{user.wishlist.length}</span> products
                    present in your Wishlist.
                  </p>
                </div>
                <div className={styles.cart_container}>
                  <h2>Cart:</h2>
                  <p className={styles.text_content}>
                    You have <span>{user.cart.length}</span> products present in
                    your Cart.
                  </p>
                </div>
                <div className={styles.library_container}>
                  <h2>Library:</h2>
                  <p className={styles.text_content}>
                    You have <span>{user.library.length}</span> products present
                    in your Library.
                  </p>
                </div>
              </div>
              <button className={styles.user__Btn} onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default Index;
