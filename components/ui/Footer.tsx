export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Bhargav. All rights reserved.</p>
        <p className="mt-2 text-sm">Built with Next.js, TypeScript, and Tailwind CSS</p>
      </div>
    </footer>
  );
}
