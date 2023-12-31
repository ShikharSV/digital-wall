import React, { useState } from "react";
import styles from "../pages/CreateBlog.module.css";
const CreateBlog = (props) => {
    const [selectedImages, setSelectedImages]= useState([]);

    const onSelectFile=(event)=>{
        const selectedFiles=event.target.files;
        const selectedFilesArray=Array.from(selectedFiles);
        console.log(selectedFilesArray);
        // console.log(selectedFiles);

        const imagesArray=selectedFilesArray.map((file)=>{
            return URL.createObjectURL(file)
        })
        console.log(imagesArray);
        setSelectedImages(imagesArray);
        // console.log(Array.isArray(selectedFiles));
    }
    const submitHandler=(events)=>{
        events.preventDefault();
    }

  return (
    <>
      <div className={styles.topForm}>
        <div className={styles.firstInputPart}>
        <form action="" method="get" className={styles.form1}>
          <div className={styles.formExample1}>
            <label for="name">TITLE </label>
            <input type="text" name="name" id="name" placeholder="Enter title of your blog...." required />
          </div>
          <div className={styles.formExample2}>
            <label for="Tag">TAG </label>
            <input type="text" name="tag" id="tag" placeholder="Enter tag of your blog...." required />
          </div>
          <div className={styles.formExample3}>
            <label for="Text">TEXT </label>
            <input type="text" name="text" id="text" placeholder="Start Writing...." required />
          </div>
          <div className={styles.formExample4}>
            <button className={styles.btn} onClick={submitHandler}>Submit</button>
          </div>
        </form>
        </div>
        <div className={styles.secondImagePart}>
        <form action="" className={styles.secondImagePart2}>
          <div className={styles.formImage}>
            <label>ADD IMAGES <br />
            <span><img width="35" height="35" src="https://img.icons8.com/ios/50/FF7A90/upload-to-cloud--v1.png" alt="upload-to-cloud--v1"/></span>
            <input type="file" name="images" onChange={onSelectFile} multiple accept="image/png, image/jpeg, image/jpg, image/webp" />
            </label>
          </div>
        </form>
        </div>
        <div className={styles.imagesSelect}>
            {selectedImages && selectedImages.map((image)=>{
                return (
                    <div key={image} className={styles.imageSelected}>
                        <img src={image} height={200}/>
                        <button className={styles.imageButton} onClick={()=>setSelectedImages(selectedImages.filter((e)=>e!==image))}>Remove</button>
                    </div>
                )
            })}
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
