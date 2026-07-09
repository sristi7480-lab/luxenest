import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaRegHeart, FaShoppingBag, FaBars, FaTimes, FaGoogle } from "react-icons/fa";
import { supabase } from "../lib/supabaseClient";
import type { User } from "@supabase/supabase-js";

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
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Check current session on load
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for login/logout changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.error("Error logging in:", error.message);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Error logging out:", error.message);
  };

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
          <Link to="/wishlist">
  <FaRegHeart className="cursor-pointer hover:scale-110 transition-transform" />
</Link> 
          <FaShoppingBag className="cursor-pointer hover:scale-110 transition-transform" />

          {user ? (
            <div className="flex items-center gap-3">
              {user.user_metadata?.avatar_url && (
                <img
                  src={user.user_metadata.avatar_url}
                  alt={user.user_metadata?.full_name ?? "User"}
                  className="w-8 h-8 rounded-full border border-border"
                />
              )}
              <button
                onClick={handleLogout}
                className="text-sm hover:text-primary transition-colors"
              >
                Log out
              </button>
            </div>
          ) : (
            <button
              onClick={handleGoogleLogin}
              className="flex items-center gap-2 text-sm border border-border rounded-full px-4 py-1.5 hover:border-primary hover:text-primary transition-colors"
            >
              <FaGoogle />
              Sign in
            </button>
          )}
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
          <li>
            {user ? (
              <button onClick={handleLogout} className="text-left">
                Log out
              </button>
            ) : (
              <button onClick={handleGoogleLogin} className="text-left flex items-center gap-2">
                <FaGoogle /> Sign in with Google
              </button>
            )}
          </li>
        </ul>
      )}
    </header>
  );
}