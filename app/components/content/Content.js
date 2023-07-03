import React from 'react'
import style from '../../../style/content.module.css';

export default function page() {
  return (
    <div>
      <div className={style.all_inf} id="Home">
        <div className={style.img_mobile}></div>
        <div className={style.inf}>
          <p className={style.title}>Front-End React <br /> Developer 👋</p>
          <p className={style.sub_title}>Hi,I’m Mina Emad. A passionate Front-end React <br /> Developer based in Egypt, Ismailia🎈</p>
          <a href="https://www.linkedin.com/in/mina-emad-471b0a250/" target="_blank"><img src="images/social media/linkedin.jpg" alt="linkedin-icon" className={style.linkedin} /></a>
          <a href="https://github.com/Manmeno" target="_blank"><img src="images/social media/github.png" alt="github-icon" className={style.github} /></a>
          <p className={style.skills}>
            Tech Stack | 
            <img src="images/skills/html.png" alt="html-icon" className={style.html_icon}  />
            <img src="images/skills/css.png" alt="css-icon" className={style.icon} />
            <img src="images/skills/js.png" alt="js-icon" className={style.icon} />
            <img src="images/skills/bootstrap.png" alt="bootstrap-icon" className={style.icon} />
            <img src="images/skills/react.png" alt="react-icon" className={style.icon} />
            <img src="images/skills/redux.png" alt="redux-icon" className={style.icon} />
            <img src="images/skills/next.svg" alt="next-icon" className={style.icon } />
          </p>
        </div>
        <div className={style.img}></div>
      </div> 
    </div>
  );
}
