"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function Navigation() {
  const [activeItem, setActiveItem] = React.useState("home")
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { id: "home", label: "Início", href: "/" },
    { id: "about", label: "Quem Somos", href: "/about" },
    { id: "cases", label: "Cases Eco Casa", href: "/cases" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`mx-auto px-4 h-24 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
        }`}
      >
        <Link href="/" className="relative">
          <div className="h-12 w-32">
            <Image src="/logo.png" alt="Eco Casa Logo" fill className="object-contain pointer-events-none" priority />
          </div>
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} className="relative group py-2" onMouseEnter={() => setActiveItem(item.id)}>
                <span className="relative z-10 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  {item.label}
                </span>
                {activeItem === item.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 bottom-0 h-px bg-primary"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

