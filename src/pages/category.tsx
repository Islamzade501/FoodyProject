import React from "react";
import styles from '../styles/category.module.css'
import Image from "next/image";
import Header from "./component/header";
import Dashboard from "./component/dashboard";
import Table from "./component/table";
export default function Category() {
    return (

        <>
            <Header></Header>
            <Dashboard></Dashboard>
            <section className={styles.categorySection}>
                <div className={styles.categoryMain}>
                    <p>Category</p>
                    <button>+ ADD CATEGORY </button>
                </div>
            </section>
            <Table></Table>

        </>
    );
}