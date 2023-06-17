import React from 'react'
import styles from '../components/navbar.module.css'
const Navbar = () => {
  return (
    <>
        <div className="back">
        </div>
        <div className="nav">
            <div id="nav">
                <div className="left">
                    <div className="logo">DA</div>
                    <div className="list-items">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="logos">
                        <a href="instagram.com"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/></a>
                        <a href="youtube.com"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/youtube-play--v1.png" alt="youtube-play--v1"/></a>
                        <a href="facebook.com"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/facebook-new.png" alt="facebook-new"/></a>
                    </div>
                    <div className="button">
                        <button className="btn">Let's Talk</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="blog-first">
                <section>
                    <span><img width="32" height="16" src="https://img.icons8.com/office/16/FF42B3/horizontal-line.png" alt="horizontal-line"/></span>
                    <div className="most-liked">
                        MOST LIKED
                    </div>
                </section>
                <div className="name">Imagining BRAZIL In Summers and Winters</div>
                <div className="tag"><span>Travel</span></div>
                <div className="blog-write">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nihil quo provident culpa possimus nulla non dignissimos omnis quaerat laborum!</div>
                <div className="likes">
                    <section className="like"><img width="48" height="48" src="https://img.icons8.com/fluency/48/like.png" alt="like"/></section>
                    <p>25</p>
                </div>
            </div>
            <div className="image">
                <img src="https://images.unsplash.com/photo-1686728720905-ad781b459a9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>  
        </div>
        <div className="caraousel-blogs">
            hello
        </div>
    </>
  )
}

export default Navbar