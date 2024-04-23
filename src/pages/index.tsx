import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mariya Podosinova | Full Stack Engineer</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.leftColumn}>
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
        <div className={styles.rightColumn}>
          <section id="about" className={styles.section}>
            <p>
              Back in 2012, I decided to try my hand at creating custom Tumblr
              themes and tumbled head first into the rabbit hole of coding and
              web development. Fast-forward to today, and I’ve had the privilege
              of building software for an advertising <strong>agency</strong>, a
              start-up, a huge corporation, and a digital product studio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              facilis molestias, doloremque placeat reprehenderit ex nemo. Minus
              explicabo magni maiores <strong>minima</strong> excepturi corrupti
              tenetur tempore nihil. Voluptatibus non praesentium illo est
              tenetur voluptatum impedit saepe porro ex id, libero dolorem
              repudiandae atque illum a dolores rem dolorum et magni distinctio?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              facilis molestias, doloremque placeat reprehenderit ex nemo. Minus
              explicabo magni maiores minima excepturi corrupti tenetur tempore
              nihil. <strong>Voluptatibus</strong> non praesentium illo est
              tenetur voluptatum impedit saepe porro ex id, libero dolorem
              repudiandae atque illum a dolores rem dolorum et magni distinctio?
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
