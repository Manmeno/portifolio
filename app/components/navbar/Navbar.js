"use client"
import React from "react"
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="contanier">
          <h2 className="h1">Mina.dev</h2>
        <div className="btns">
        <Link href="#Home"> Home<a></a></Link>
        <Link href="#About"> About<a></a></Link>
        <Link href="#Projects"> Projects<a></a></Link>
        <Link href="#Contact"> Contact<a></a></Link>
        </div>
      </div>
    </div>
  );
}
