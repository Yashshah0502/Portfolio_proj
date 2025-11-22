export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-white/10 text-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Yash Shah. Built with Next.js, Tailwind & AI.
      </p>
    </footer>
  );
}
