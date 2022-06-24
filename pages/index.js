import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <CustomNavbar name="Home" />
    </>
  )
}
