export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <p>&copy;{currentYear} Tolubishops.</p>
        </div>
      </div>
    </footer>
  );
}
