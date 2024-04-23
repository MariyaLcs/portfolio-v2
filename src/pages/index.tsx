import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mariya Podosinova | Full Stack Engineer</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <div>
            <h1>Mariya Podosinova</h1>
            <p>Full Stack Engineer</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              quis sed, adipisci ratione necessitatibus saepe!
            </p>
            <nav>
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
            </nav>
          </div>

          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              aria-label="LinkedIn"
              className={styles.socialIcon}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/yourusername"
              aria-label="GitHub"
              className={styles.socialIcon}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              aria-label="Twitter"
              className={styles.socialIcon}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <section id="about" className={styles.section}>
            <p>
              As a seasoned
              <strong> Full Stack Engineering Senior Analyst</strong> my journey
              in software engineering has been defined by innovation and a
              customer-centric approach. With a foundation in mechanical
              engineering and a commitment to exceptional service, I navigate
              complex challenges with a distinctive strategy.
            </p>
            <p>
              In the dynamic fields of{" "}
              <strong>
                full-stack development, testing, and cloud services
              </strong>
              , my expertise in JavaScript, Java, AWS, and Agile methodologies
              has been instrumental in delivering solutions that meet the
              diverse and changing needs of our clients.
            </p>
            <p>
              Holding certifications in testing, AWS, and Scrum, I&apos;m proud
              of my dedication to professional growth and technical excellence.
              My passion lies in harnessing my broad skill set to craft
              <strong> innovative software engineering solutions</strong> that
              drive client success. Let&apos;s connect and{" "}
              <strong>forge new paths</strong> towards exceptional achievements.
            </p>
          </section>
          <section id="experience" className={styles.section}>
            <h3>2024 — PRESENT</h3>
            <h4>Full Stack Engineer</h4>
            <p>
              Build and maintain critical components used to construct frontend,
              across the whole product...
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              facilis molestias, doloremque placeat reprehenderit ex nemo. Minus
              explicabo magni maiores minima excepturi corrupti tenetur tempore
              nihil. Voluptatibus non praesentium illo est tenetur voluptatum
              impedit saepe porro ex id, libero dolorem repudiandae atque illum
              a dolores rem dolorum et magni distinctio?
            </p>
            <h3>2024 — PRESENT</h3>
            <h4>Full Stack Engineer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur non aperiam rem repellat, quaerat optio excepturi
              obcaecati rerum veritatis? Itaque.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              facilis molestias, doloremque placeat reprehenderit ex nemo. Minus
              explicabo magni maiores minima excepturi corrupti tenetur tempore
              nihil. Voluptatibus non praesentium illo est tenetur voluptatum
              impedit saepe porro ex id, libero dolorem repudiandae atque illum
              a dolores rem dolorum et magni distinctio?
            </p>
          </section>
          <section id="projects" className={styles.section}>
            <h3>Projects</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              facilis molestias, doloremque placeat reprehenderit ex nemo. Minus
              explicabo magni maiores minima excepturi corrupti tenetur tempore
              nihil. Voluptatibus non praesentium illo est tenetur voluptatum
              impedit saepe porro ex id, libero dolorem repudiandae atque illum
              a dolores rem dolorum et magni distinctio?
            </p>
          </section>
          {/* ... Other sections as needed ... */}
        </div>
      </div>
    </>
  );
}
