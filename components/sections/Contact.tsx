export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground text-lg mb-6">
              I'm currently open to new opportunities and interesting projects. 
              Feel free to reach out if you'd like to work together!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@bhargav.dev"
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                hello@bhargav.dev
              </a>
              <a
                href="https://linkedin.com/in/bhargav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                LinkedIn
              </a>
              <a
                href="https://github.com/bhargav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                GitHub
              </a>
              <a
                href="https://twitter.com/bhargav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Twitter
              </a>
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
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
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
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring"
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
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
