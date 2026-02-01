"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <Image
                src="./LogoXKey2.png"
                alt="XtremeKey Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-foreground">XtremeKey</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("catalogo")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Catálogo
            </button>
            <button
              onClick={() => scrollToSection("promociones")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Promociones
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("catalogo")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Ver Catálogo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("catalogo")}
              className="text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Catálogo
            </button>
            <button
              onClick={() => scrollToSection("promociones")}
              className="text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Promociones
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("catalogo")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
            >
              Ver Catálogo
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
