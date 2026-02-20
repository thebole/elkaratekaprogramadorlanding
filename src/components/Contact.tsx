import { Mail, MessageCircle, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);

  const redireccionarWs = () => {
    window.open("https://wa.me/584244017815", "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para <span className="gradient-text">Trabajar Juntos</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Ya sea para un proyecto de desarrollo o para comenzar tu formación en programación,
            estoy aquí para ayudarte a alcanzar tus metas.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <button
                onClick={() => setOpenForm(!openForm)}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-accent text-primary-foreground px-3 py-2 rounded-lg font-semibold text-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">
                <button onClick={redireccionarWs} className="text-primary hover:underline">
                  Escribeme
                </button>
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Ubicación</h3>
              <p className="text-sm text-muted-foreground">Remoto / Presencial</p>
            </div>
          </div>

          {openForm && (
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-4">Envíame un mensaje</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
                />
                <textarea
                  placeholder="Tu mensaje"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Enviar
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
