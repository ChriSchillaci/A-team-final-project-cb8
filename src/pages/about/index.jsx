import React from "react";
import Link from "next/link";
import styles from "../../styles/About.module.scss";
import Image from "next/image";
import { shimmer, toBase64 } from "@/utils/shimmer";
import { teamData } from "../../mocks/teamData";

export default function About() {
  return (
    <>
      <div className={styles.about__Container}>
        <h1>Final Project CB8 Team &ldquo;A&ldquo;</h1>
        <Link
          className={styles.link}
          rel="edgemony"
          href="https://edgemony.com"
        >
          Edgemony
        </Link>

        <div className={styles.team__Container}>
          <h2>Team members GitHub:</h2>
          <div className={styles.team__Wrapper}>
            {teamData.map((member) => (
              <Link
                key={member.name}
                className={styles.team__Info}
                href={member.github}
              >
                <Image
                  className={styles.team__Pic}
                  src={member.image}
                  alt={member.name}
                  width={1000}
                  height={1000}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(1000, 1000)
                  )}`}
                />
                <p className={styles.team__Name}>{member.name}</p>
                <p className={styles.team__Role}>{member.role}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
