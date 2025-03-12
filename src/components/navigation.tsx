"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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

  const productCategories = [
    { id: "decks", label: "Decks", href: "/produtos/decks" },
    { id: "portas", label: "Portas", href: "/produtos/portas" },
    { id: "revestimentos", label: "Revestimentos", href: "/produtos/revestimentos" },
  ]

  const menuItems = [
    { id: "home", label: "Início", href: "/" },
    {
      id: "products",
      label: "Produtos",
      href: "/produtos",
      hasDropdown: true,
      dropdownItems: productCategories,
    },
    { id: "about", label: "Quem Somos", href: "/quem-somos" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={`px-4 h-24 flex items-center justify-between transition-all duration-300 ${
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
              {item.hasDropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="flex items-center gap-1 py-2 focus:outline-none"
                      onMouseEnter={() => setActiveItem(item.id)}
                      type="button"
                    >
                      <span className="relative z-10 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                        {item.label}
                      </span>
                      <ChevronDown className="h-4 w-4 text-foreground/80" />
                      {activeItem === item.id && (
                        <motion.div
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-[200px] p-2">
                    {item.dropdownItems?.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.id} asChild>
                        <Link
                          href={dropdownItem.href}
                          className="cursor-pointer flex items-center py-2 px-4 rounded-md hover:bg-primary/5"
                        >
                          {dropdownItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href={item.href} className="relative group py-2" onMouseEnter={() => setActiveItem(item.id)}>
                  <span className="relative z-10 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                    {item.label}
                  </span>
                </Link>
              )}
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
                <Accordion type="single" collapsible className="w-full">
                  {menuItems.map((item) =>
                    item.hasDropdown ? (
                      <AccordionItem key={item.id} value={item.id} className="border-b">
                        <AccordionTrigger className="py-3 px-4 hover:no-underline">
                          <span className={activeItem === item.id ? "text-primary font-medium" : ""}>{item.label}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-1">
                          <ul className="pl-4 space-y-1">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <li key={dropdownItem.id}>
                                <Link
                                  href={dropdownItem.href}
                                  className="block py-2 px-4 rounded-lg transition-colors hover:bg-muted"
                                  onClick={() => {
                                    setActiveItem(item.id)
                                    setIsOpen(false)
                                  }}
                                >
                                  {dropdownItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ) : (
                      <div key={item.id} className="border-b">
                        <Link
                          href={item.href}
                          className={`block py-4 px-4 transition-colors ${
                            activeItem === item.id ? "text-primary font-medium" : "hover:bg-muted"
                          }`}
                          onClick={() => {
                            setActiveItem(item.id)
                            setIsOpen(false)
                          }}
                        >
                          {item.label}
                        </Link>
                      </div>
                    ),
                  )}
                </Accordion>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

