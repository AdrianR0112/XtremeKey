"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Facebook, Users } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="text-primary">Contáctanos</span> hoy mismo
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            ¿Tienes preguntas? Nuestro equipo está listo para ayudarte. Escríbenos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 bg-card border-2 hover:border-primary/50 transition-colors">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">WhatsApp</h4>
                <p className="text-muted-foreground mb-4">Chatea con nosotros directamente</p>
                <Button
                  variant="outline"
                  className="border-2 bg-transparent w-full"
                  onClick={() => window.open("https://wa.me/593992706565?text=" + encodeURIComponent("Hola! Necesito información sobre las licencias"), "_blank")}
                >
                  Abrir WhatsApp
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-2 hover:border-primary/50 transition-colors">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Grupo de Clientes</h4>
                <p className="text-muted-foreground mb-4">Pide referencias antes de comprar</p>
                <Button
                  variant="outline"
                  className="border-2 bg-transparent w-full"
                  onClick={() => window.open("https://chat.whatsapp.com/BPoJfZHYHAQEsTbHfcCwXY", "_blank")}
                >
                  Unirse al Grupo
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-2 hover:border-primary/50 transition-colors">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Email</h4>
                <p className="text-muted-foreground mb-4">Escríbenos a nuestro correo</p>
                <a
                  href="mailto:contacto@xtremekey.com"
                  className="text-primary hover:underline font-medium"
                >
                  contacto@xtremekey.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-2 hover:border-primary/50 transition-colors">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Facebook className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Facebook</h4>
                <p className="text-muted-foreground mb-4">Síguenos en redes sociales</p>
                <Button
                  variant="outline"
                  className="border-2 bg-transparent w-full"
                  onClick={() => window.open("https://www.facebook.com/profile.php?id=61574220030897", "_blank")}
                >
                  Visitar Página
                </Button>
              </div>
            </div>
          </Card>


        </div>
      </div>
    </section>
  )
}
