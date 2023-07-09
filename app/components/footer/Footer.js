import React from 'react'
import style from '../../../style/content.module.css'
export default function page() {
  return (
    <div>
      <footer className={style.footer} id="Contact">
        <div className={style.p}>
          <p>Copyright © 2023. All rights are reserved</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/mina-emad-471b0a250/" target="_blank"><img src="images/social media/linkedin.jpg" alt="linkedin-icon" className={style.linkedin} /></a>
          <a href="https://github.com/Manmeno" target="_blank"><img src="images/social media/github.png" alt="github-icon" className={style.github} /></a>
        </div>
      </footer>
    </div>
  );
}
