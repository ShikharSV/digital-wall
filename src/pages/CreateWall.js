import React from "react";
import styles from "./CreateWall.module.css";
const CreateWall = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
        <form action="" method="get" className={styles.form1}>
          <div className={styles.formExample1}>
            <label for="name">NAME </label>
            <input type="text" name="name" id="name" placeholder="Enter title of your blog...." required />
          </div>
          <div className={styles.formExample3}>
            <label for="Text">DESCRIPTION </label>
            <input type="text" name="text" id="text" placeholder="Start Writing...." required />
          </div>
          <div className={styles.formExample4}>
            <button className={styles.btn}>Submit</button>
          </div>
        </form>
        </div>
        <div className={styles.heading}>
          <span id={styles.headingWord}>C</span>reate <br />
          <span id={styles.headingWord}>Y</span>our <br />
          <span id={styles.headingWord}>W</span>all
        </div>
      </div>
    </>
  );
};

export default CreateWall;
