// Pizza.js

import React from "react";
import styles from '../../styles/pizza.module.css';
import Image from "next/image";

export default function Pizza() {
    return (
        <div className={styles.Pizza}>
            <div className={styles.pizzaimg}>
                <img src="/pizza.svg" alt="" />
            </div>
            <div className={styles.PizzaCard}>
                <p className={styles.type}>Marqarita</p>
                <p className={styles.RestoranName}>Papa John's</p>
                <div className={styles.pizzaEdit}>
                    <div><p>$16</p></div>
                    <div className={styles.editor}>
                        <img src="/editname.svg" alt="" />
                        <img src="/removepizza.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
