"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"
import { useState } from "react"
import productsData from "@/data/products.json"

type PricingOption = {
  duration: string
  price: number
}

type Product = {
  id: string
  name: string
  description: string
  duration?: string
  price?: number
  pricing?: PricingOption[]
  image: string
  popular: boolean
}

type Category = {
  id: string
  name: string
  description: string
  featured: boolean
  hasVariablePricing?: boolean
  products: Product[]
}

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedDurations, setSelectedDurations] = useState<Record<string, number>>({})
  const categories: Category[] = productsData.categories

  const handlePurchase = (productName: string, duration: string) => {
    const message = `Hola! Estoy interesado en adquirir una licencia de ${productName} - ${duration}`
    const whatsappUrl = `https://wa.me/593992706565?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleDurationChange = (productId: string, index: number) => {
    setSelectedDurations((prev) => ({
      ...prev,
      [productId]: index,
    }))
  }

  const isOutOfStock = (price: number | undefined) => price === 0

  const renderVariablePricingProduct = (product: Product, isFeatured: boolean = false) => {
    const selectedIndex = selectedDurations[product.id] || 0
    const selectedPricing = product.pricing![selectedIndex]
    const outOfStock = isOutOfStock(selectedPricing.price)

    return (
      <Card
        key={product.id}
        className={`overflow-hidden bg-card hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 flex flex-col ${
          isFeatured ? "hover:scale-105" : ""
        } ${outOfStock ? "opacity-75" : ""}`}
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
          <h4 className="text-xl font-bold mb-2">{product.name}</h4>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">{product.description}</p>
          
          {/* Duration Selector */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">Selecciona duración</p>
            <div className="grid grid-cols-2 gap-2">
              {product.pricing!.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleDurationChange(product.id, index)}
                  className={`px-3 py-2 text-sm rounded-lg border-2 transition-all ${
                    selectedIndex === index
                      ? "border-primary bg-primary text-primary-foreground font-semibold"
                      : "border-border hover:border-primary/50"
                  } ${isOutOfStock(option.price) ? "opacity-50" : ""}`}
                >
                  {option.duration}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Duración</p>
              <p className="font-semibold">{selectedPricing.duration}</p>
            </div>
            <div className="text-right">
              {outOfStock ? (
                <p className="text-2xl font-bold text-muted-foreground">Sin stock</p>
              ) : (
                <p className="text-2xl font-bold text-primary">${selectedPricing.price}</p>
              )}
            </div>
          </div>
          <Button
            onClick={() => handlePurchase(product.name, selectedPricing.duration)}
            className={`w-full group ${outOfStock ? "bg-muted text-muted-foreground cursor-not-allowed" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
            disabled={outOfStock}
          >
            <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            {outOfStock ? "Sin stock" : "Solicitar Licencia"}
          </Button>
        </div>
      </Card>
    )
  }

  const renderStandardProduct = (product: Product, isFeatured: boolean = false) => {
    const outOfStock = isOutOfStock(product.price)

    return (
      <Card
        key={product.id}
        className={`overflow-hidden bg-card hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 flex flex-col ${
          isFeatured ? "hover:scale-105" : ""
        } ${outOfStock ? "opacity-75" : ""}`}
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
          <h4 className="text-xl font-bold mb-2">{product.name}</h4>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">{product.description}</p>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Duración</p>
              <p className="font-semibold">{product.duration}</p>
            </div>
            <div className="text-right">
              {outOfStock ? (
                <p className="text-2xl font-bold text-muted-foreground">Sin stock</p>
              ) : (
                <p className="text-2xl font-bold text-primary">${product.price}</p>
              )}
            </div>
          </div>
          <Button
            onClick={() => handlePurchase(product.name, product.duration!)}
            className={`w-full group ${outOfStock ? "bg-muted text-muted-foreground cursor-not-allowed" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
            disabled={outOfStock}
          >
            <ShoppingCart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            {outOfStock ? "Sin stock" : "Solicitar Licencia"}
          </Button>
        </div>
      </Card>
    )
  }

  const renderCategorySection = (category: Category) => {
    return (
      <div key={category.id} className="mb-20">
        {/* Category Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            {category.featured && <Star className="w-8 h-8 text-primary fill-primary" />}
            <h3 className="text-3xl md:text-4xl font-bold">
              {category.featured ? (
                <>
                  <span className="text-primary">{category.name}</span> - Producto Estrella ⭐
                </>
              ) : (
                category.name
              )}
            </h3>
            {category.featured && <Star className="w-8 h-8 text-primary fill-primary" />}
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{category.description}</p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {category.products.map((product) =>
            category.hasVariablePricing && product.pricing
              ? renderVariablePricingProduct(product, category.featured)
              : renderStandardProduct(product, category.featured)
          )}
        </div>

        {/* Section Divider */}
        {category.id !== categories[categories.length - 1].id && (
          <div className="mt-16 border-t-2 border-border/50"></div>
        )}
      </div>
    )
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

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => setSelectedCategory("all")}
            className="rounded-full"
          >
            Todos los productos
          </Button>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Display by Category or Filtered */}
        <div className="max-w-7xl mx-auto">
          {selectedCategory === "all" ? (
            // Show all categories with sections
            categories.map((category) => renderCategorySection(category))
          ) : (
            // Show only selected category
            categories
              .filter((cat) => cat.id === selectedCategory)
              .map((category) => renderCategorySection(category))
          )}
        </div>
      </div>
    </section>
  )
}
