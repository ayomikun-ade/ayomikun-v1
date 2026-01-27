export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-black text-center">
      <p className="text-gray-500 font-mono text-sm">
        &copy; {new Date().getFullYear()} {"<ayomikun/>"}. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
