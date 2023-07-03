import React from 'react'
import Link from 'next/link';

export default function page() {
  return (
    <div>
      <div className="all-inf inf">
        <p className="about-title title">Contact</p>
        <p className="title">Don't be shy! Hit me up! 👇</p>
        <div className="links">
          <Link href="mailto:minafedemad00@gmail.com?subject=I want to design a Website&body=Hello How are you today? Can you make a website for: " className="email">
            <img src="/images/email.png" alt="email"  className="icon"/>
            <span className="text">minafedemad00@gmail.com</span> 
            <a></a>
          </Link>
          <p className="email">
            <img src="/images/whatsapp.png" alt="whatsapp" className="icon" />
            <span className="text">01289001560</span>
            <a></a>
          </p>
        </div>
      </div>
    </div>
  );
}