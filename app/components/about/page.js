import React from 'react'
import style from '../../../style/about.module.css';

export default function About() {
  return (
    <div>
      <div className={style.all_inf}>
      <div>
        <img src="images/laptop.jpg" alt="laptop" className={style.laptop_photo} />
        <img src="images/emoji.png" alt="emoji" className={style.emoji} />
        <span><img src="images/text-photo.svg" alt="text" className={style.text_photo} /></span>
      </div>
      <div className={style.about_inf}>
        <p className={style.about_title} id="About">ABOUT ME</p>
        <p className={style.inf}>A dedicated Front-end Developer  <br /> based in Egypt, Ismailia🎈</p>
        <p className={style.sub_title}>As a Junior Frond-End Developer. I possess an impressive <br /> arsenal of skills in Html, Css, JavaScript, React.js and Redux.<br /> I excel in designing and maintaining responsive  websites that <br /> offer a smooth user experience. My expertise lies in crafting <br /> dynamic, engaging interfaces through writing clean and optimized <br /> code and utilizing cutting-edge development tools and techniques.<br /> I am also a team player who thrives in collaborating with <br /> cross-functional teams to produce outstanding web applications. </p>
      </div>
    </div>
    </div>
  );
}
