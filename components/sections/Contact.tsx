import { socialLinks } from "@/constants/social";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Open to opportunities in full-stack development, AI/ML engineering, and research positions.
        </p>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm interested in roles that leverage my expertise in full-stack development, AI/ML, and research. 
              Feel free to reach out to discuss opportunities or collaborations.
            </p>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-hover transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
