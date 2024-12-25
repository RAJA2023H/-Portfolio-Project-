import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                src={getImageUrl("About/aboutImage.png")}
                alt="Alx SE icon"
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("About/cursorIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Software Development</h3>
                            <p>
                                Developed proficiency in C and Python, mastering data structures, algorithms, and memory management.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("About/cursorIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Web Development and Deployment</h3>
                            <p>
                            Built and deployed web applications using HTML, CSS, Flask, JavaScript, Nginx, and Gunicorn.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("About/cursorIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Systems Engineering and DevOps</h3>
                            <p>
                                Gained expertise in systems engineering, databases (SQL/MySQL), and DevOps tools like Puppet.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("About/cursorIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Front-end specialization</h3>
                            <p>
                                Specialized in modern front-end development with expertise in JavaScript (ES6), TypeScript, React, and responsive design.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};