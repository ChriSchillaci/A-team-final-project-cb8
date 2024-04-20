import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_position}>
        <div className={styles.aboutUs}>
          <Image
            src="/images/logoAbout.png"
            alt="logo"
            width={100}
            height={100}
            priority={true}
          />
        </div>
        <div className={styles.company}>
          <h2 className={styles.footer__titles}>Company</h2>
          <div className={styles.company_btn}>
            <Link href="/about">
              <button>About Us</button>
            </Link>
            <Link href="/construction">
              <button>Download</button>
            </Link>
            <Link href="/construction">
              <button>Work with Us</button>
            </Link>
          </div>
        </div>

        <div className={styles.partner}>
          <h2 className={styles.footer__titles}>Partners</h2>
          <div className={styles.partner_btn}>
            <Link href="https://store.steampowered.com/">
              <button>Steam</button>
            </Link>
            <Link href="https://www.epicgames.com/">
              <button>Epic Games</button>
            </Link>
            <Link href="https://www.instant-gaming.com/en/">
              <button>Insta-Gaming</button>
            </Link>
          </div>
        </div>

        <div className={styles.help}>
          <h2 className={styles.footer__titles}>Help</h2>
          <div className={styles.help_btn}>
            <Link href="/contacts">
              <button>Contact Us</button>
            </Link>
            <Link href="/construction">
              <button>Shipping + Returns</button>
            </Link>
            <Link href="/construction">
              <button>FAQ</button>
            </Link>
          </div>
        </div>

        <div className={styles.newsletter}>
          <div className={styles.newsletterForm}>
            <h2 className={styles.footer__titles}>Newsletter</h2>
            <p>Sign up for our newsletter to get the latest news</p>
            <input type="text" id="email" placeholder="email" required />
          </div>

          <div className={styles.social}>
            <Link className={styles.facebook} href="https://www.facebook.com/">
              <FaFacebookSquare />
            </Link>

            <Link
              className={styles.instagram}
              href="https://www.instagram.com/"
            >
              <FaInstagram />
            </Link>

            <Link className={styles.twitter} href="https://twitter.com/">
              <FaSquareXTwitter />
            </Link>

            <Link className={styles.youtube} href="https://youtube.com/">
              <FaSquareYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
