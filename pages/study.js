import Head from "next/head";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/common/Navbar";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <CustomNavbar name="Likelion SKKU Notice" />
    </>
  );
}
