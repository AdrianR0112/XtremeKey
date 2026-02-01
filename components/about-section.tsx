"use client"

import { Shield, Zap, HeadphonesIcon, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description:
        "Contamos con licencias 100% originales y cientos de clientes satisfechos que respaldan nuestra credibilidad.",
    },
    {
      icon: Zap,
      title: "Entrega Inmediata",
      description:
        "Recibe tu licencia en minutos para que empieces a crear de inmediato.",
    },
    {
      icon: HeadphonesIcon,
      title: "Soporte Personalizado",
      description:
        "Nuestro equipo está disponible para ayudarte en cada paso. Atención rápida y profesional garantizada.",
    },
  ]

  return (
    <section id="nosotros" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Tu socio confiable en <span className="text-primary">licencias digitales</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            En XtremeKey nos dedicamos a ofrecer licencias originales y accesibles para profesionales creativos y
            empresas. Con más de 2 años de experiencia en el mercado, garantizamos seguridad, rapidez y la mejor atención
            personalizada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card hover:bg-card/80 transition-colors border-2 hover:border-primary/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Grupo de Clientes */}
        <div className="mt-10 text-center">
          <p className="text-muted-foreground mb-4">¿Quieres pedir referencias antes de comprar?</p>
          <Button
            variant="outline"
            className="border-2 hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open("https://chat.whatsapp.com/BPoJfZHYHAQEsTbHfcCwXY", "_blank")}
          >
            <Users className="w-4 h-4 mr-2" />
            Unirse al Grupo de Clientes
          </Button>
        </div>
      </div>
    </section>
  )
}
