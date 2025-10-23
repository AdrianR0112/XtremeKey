import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Diseñadora Gráfica",
      content:
        "Excelente servicio! Compré mi licencia de Adobe Creative Cloud y la recibí en menos de 5 minutos. Totalmente recomendado.",
      rating: 5,
      avatar: "/professional-woman-avatar.png",
    },
    {
      name: "Carlos Ramírez",
      role: "Arquitecto",
      content:
        "La mejor opción para adquirir licencias de Autodesk. Precios justos y atención al cliente excepcional. Ya llevo 3 años comprando aquí.",
      rating: 5,
      avatar: "/professional-man-avatar.png",
    },
    {
      name: "Ana Martínez",
      role: "Content Creator",
      content:
        "Increíble experiencia. Necesitaba CapCut Pro urgentemente y el equipo de XtremeKey me ayudó en todo el proceso. 100% confiable.",
      rating: 5,
      avatar: "/young-woman-creator-avatar.jpg",
    },
    {
      name: "Luis Fernández",
      role: "Empresario",
      content:
        "Compré licencias de Office 365 para toda mi empresa. El proceso fue sencillo y el soporte post-venta es excelente.",
      rating: 5,
      avatar: "/business-man-avatar.png",
    },
    {
      name: "Sofia Torres",
      role: "Fotógrafa",
      content:
        "Llevo años buscando un proveedor confiable de licencias y finalmente lo encontré. Precios accesibles y licencias 100% originales.",
      rating: 5,
      avatar: "/photographer-woman-avatar.jpg",
    },
    {
      name: "Diego Morales",
      role: "Editor de Video",
      content:
        "La atención personalizada marca la diferencia. Me asesoraron para elegir la mejor licencia según mis necesidades. Muy profesionales.",
      rating: 5,
      avatar: "/video-editor-man-avatar.jpg",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Miles de profesionales y empresas confían en XtremeKey para sus licencias de software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
