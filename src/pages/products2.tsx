// Product2.js

import React from "react";
import styles from '../styles/products2.module.css';
import Image from 'next/image';
import Header from "./component/header";
import Dashboard from "./component/dashboard";
import EaLogo from "./component/eacamplogo";
import Pizza from "./component/pizza";
export default function Prpduct2() {
    return (
        <>
            <Header></Header>
            <Dashboard></Dashboard>
            <section>
                <div className={styles.filterMenu}>
                    <p>Products</p>
                </div>
            </section>

            <section className={styles.section}>
                <Pizza></Pizza>
                <Pizza></Pizza>
                <Pizza></Pizza>
                <Pizza></Pizza>
                <Pizza></Pizza>
                <Pizza></Pizza>
                <Pizza></Pizza>
                <Pizza></Pizza>
            </section>

            <EaLogo></EaLogo>

        </>
    );
}