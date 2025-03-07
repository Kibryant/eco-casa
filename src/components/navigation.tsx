"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [activeItem, setActiveItem] = React.useState("home")
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { id: "home", label: "Início", href: "/" },
    { id: "products", label: "Produtos", href: "/products" },
    { id: "about", label: "Quem Somos", href: "/about" },
    { id: "cases", label: "Cases Eco Casa", href: "/cases" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`container mx-auto px-4 h-24 flex items-center justify-between transition-all duration-300 ${
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

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="relative h-10 w-28">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                  <Image src="/logo.png" alt="Eco Casa Logo" fill className="object-contain" />
                </div>
              </div>

              <nav className="flex-1 p-4">
                <ul className="space-y-4">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className={`block py-2 px-4 rounded-lg transition-colors ${
                          activeItem === item.id ? "text-primary font-medium" : "hover:bg-muted"
                        }`}
                        onClick={() => {
                          setActiveItem(item.id)
                          setIsOpen(false)
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

