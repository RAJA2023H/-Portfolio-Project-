import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:hemmanyrajae@gmail.com">hemmanyrajae@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn icon"
                />
                <a href="https://www.linkedin.com/in/rajae-hemmany-441869251">linkedin.com/rajae-hemmany</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://github.com/RAJA2023H">github.com/RAJA2023H</a>
            </li>
        </ul>
    </footer>
    );   
};