"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart } from "lucide-react"

export function ProductCatalog() {
  const products = [
    {
      name: "Adobe Creative Cloud",
      description:
        "Suite completa con Photoshop, Illustrator, Premiere Pro, After Effects y más de 20 aplicaciones creativas.",
      duration: "Anual",
      price: "$299",
      image: "/adobe-creative-cloud-logo.png",
      popular: true,
    },
    {
      name: "Autodesk AutoCAD",
      description: "Software profesional de diseño CAD 2D y 3D para arquitectura, ingeniería y construcción.",
      duration: "Anual",
      price: "$399",
      image: "/autodesk-autocad-logo.jpg",
      popular: false,
    },
    {
      name: "Canva Pro",
      description: "Herramienta de diseño gráfico con plantillas premium, elementos y funciones avanzadas.",
      duration: "Anual",
      price: "$89",
      image: "/canva-pro-logo.png",
      popular: true,
    },
    {
      name: "CapCut Pro",
      description: "Editor de video profesional con efectos avanzados, transiciones y herramientas de IA.",
      duration: "Anual",
      price: "$79",
      image: "/capcut-pro-logo.jpg",
      popular: false,
    },
    {
      name: "Envato Elements",
      description: "Acceso ilimitado a millones de recursos: plantillas, fotos, videos, música y más.",
      duration: "Anual",
      price: "$199",
      image: "/envato-elements-logo.jpg",
      popular: true,
    },
    {
      name: "Freepik Premium",
      description: "Descarga ilimitada de vectores, fotos, PSD y recursos gráficos de alta calidad.",
      duration: "Anual",
      price: "$99",
      image: "/freepik-premium-logo.jpg",
      popular: false,
    },
    {
      name: "Microsoft Office 365",
      description: "Suite completa con Word, Excel, PowerPoint, Outlook y 1TB de almacenamiento en OneDrive.",
      duration: "Anual",
      price: "$69",
      image: "/microsoft-office-365-logo.png",
      popular: false,
    },
    {
      name: "CorelDRAW Graphics Suite",
      description: "Software profesional de diseño gráfico vectorial y edición de fotos.",
      duration: "Anual",
      price: "$249",
      image: "/coreldraw-logo.jpg",
      popular: false,
    },
  ]

  const handlePurchase = (productName: string) => {
    const message = `Hola! Estoy interesado en adquirir una licencia de ${productName}`
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="catalogo" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Nuestro <span className="text-primary">catálogo</span> de licencias
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Explora nuestra selección de software profesional con licencias originales. Precios competitivos y entrega
            inmediata.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 flex flex-col"
            >
              {product.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-accent text-accent-foreground">Popular</Badge>
                </div>
              )}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Duración</p>
                    <p className="font-semibold">{product.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{product.price}</p>
                  </div>
                </div>
                <Button
                  onClick={() => handlePurchase(product.name)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group"
                >
                  <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Solicitar Licencia
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
