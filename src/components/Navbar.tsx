import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaRegHeart, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Living Room", to: "/category/living-room" },
  { label: "Bedroom", to: "/category/bedroom" },
  { label: "Kitchen", to: "/category/kitchen" },
  { label: "Wall Decor", to: "/category/wall-decor" },
  { label: "Lighting", to: "/category/lighting" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-2xl text-primary">
          LuxeNest
        </Link>

        <ul className="hidden lg:flex items-center gap-7 text-sm text-foreground">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="relative pb-1 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-primary hover:after:w-full after:transition-all"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-5 text-foreground">
          <FaSearch className="cursor-pointer hover:scale-110 transition-transform" />
          <FaRegHeart className="cursor-pointer hover:scale-110 transition-transform" />
          <FaShoppingBag className="cursor-pointer hover:scale-110 transition-transform" />
        </div>

        <button
          className="lg:hidden text-xl"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <ul className="lg:hidden bg-background border-t border-border px-8 py-4 flex flex-col gap-4 text-sm">
          {LINKS.map((l) => (
            <li key={l.label}>
              <Link to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
