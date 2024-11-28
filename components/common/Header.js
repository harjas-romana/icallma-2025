import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
            <img src={"https://findlogovector.com/wp-content/uploads/2019/03/vit-bhopal-logo-vector.png"} alt='Logo' className='logo-img' />
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href='/Tracks' className={activeLink == "/tracks" ? "activeLink" : "none"}>
              Tracks
            </Link>
            <Link href='/deadline' className={activeLink == "/deadline" ? "activeLink" : "none"}>
              Deadline
            </Link>
            <Link href='/team' className={activeLink == "/team" ? "activeLink" : "none"}>
              Committee
            </Link>
            
            <Link href='/help' className={activeLink == "/help" ? "activeLink" : "none"}>
              Help
            </Link>
            <Link href='/contact' className={activeLink == "/contact" ? "activeLink" : "none"}>
              Contact
            </Link>
            <button className='button-primary2'>Know more</button>
          </nav>
          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>
        </div>
      </header>
    </>
  )
}

export default Header
