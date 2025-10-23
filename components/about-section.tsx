import { Shield, Zap, HeadphonesIcon } from "lucide-react"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description:
        "Todas nuestras licencias son 100% originales y verificadas directamente con los proveedores oficiales.",
    },
    {
      icon: Zap,
      title: "Entrega Inmediata",
      description:
        "Recibe tu licencia en minutos. Proceso automatizado y eficiente para que empieces a crear de inmediato.",
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
            empresas. Con años de experiencia en el mercado, garantizamos seguridad, rapidez y la mejor atención
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
      </div>
    </section>
  )
}
