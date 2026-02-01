"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, Percent, Trophy, Calendar } from "lucide-react"
import { useState } from "react"
import promotionsData from "@/data/promotions.json"

export function PromotionsSection() {
  const [showSorteoDate, setShowSorteoDate] = useState(false)

  const handleWhatsApp = (message: string) => {
    const whatsappUrl = `https://wa.me/593992706565?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const promotions = [
    {
      icon: Gift,
      title: "Obsequio en tu primera compra",
      description: "Recibe un regalo especial con tu primera licencia. ¡Pregunta por los detalles al realizar tu compra!",
      badge: "Nuevo Cliente",
      color: "from-primary to-accent",
      buttonText: "Reclamar Obsequio",
      action: () => handleWhatsApp("Hola! Quiero reclamar mi regalo por primera compra"),
    },
    {
      icon: Trophy,
      title: "Sorteos para Clientes",
      description: "Participa en nuestros sorteos exclusivos y gana licencias premium completamente gratis.",
      badge: "Activo",
      color: "from-accent to-primary",
      buttonText: showSorteoDate ? "Ver Fecha" : "Descubrir Fecha",
      action: () => setShowSorteoDate(true),
      extraContent: showSorteoDate ? (
        <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
          <Calendar className="w-5 h-5 text-primary" />
          <span className="font-semibold text-primary">{promotionsData.sorteo.fechaProxima}</span>
        </div>
      ) : null,
    },
    {
      icon: Percent,
      title: "Programa de Referidos",
      description: "Recomienda XtremeKey a tus amigos y obtén descuentos en tus futuras compras. ¡Sin límites!",
      badge: "Permanente",
      color: "from-primary/80 to-accent/80",
      buttonText: "Reclamar Descuento",
      action: () => handleWhatsApp("Hola! Quiero reclamar mi descuento por referir amigos"),
    },
  ]

  return (
    <section id="promociones" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-primary">Promociones</span> y sorteos activos
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Aprovecha nuestras ofertas especiales y participa en sorteos exclusivos para obtener las mejores licencias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {promotions.map((promo, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-card border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${promo.color} opacity-5`} />
              <div className="relative p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <promo.icon className="w-7 h-7 text-primary" />
                  </div>
                  <Badge variant="secondary">{promo.badge}</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">{promo.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{promo.description}</p>
                {promo.extraContent}
                <Button
                  variant="outline"
                  onClick={promo.action}
                  className="w-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
                >
                  {promo.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
