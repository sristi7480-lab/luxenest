import { Link } from "react-router-dom";
import { FaPinterestP, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">

        {/* Amazon Associates Disclosure */}
        <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 mb-10 text-xs text-white/50 leading-relaxed">
          <span className="text-white/70 font-semibold">Affiliate Disclosure: </span>
          LuxeNest is a participant in the Amazon Associates Programme, an affiliate advertising
          programme designed to provide a means for sites to earn advertising fees by advertising
          and linking to Amazon.in. As an Amazon Associate I earn from qualifying purchases.
          This means if you click on a product link and make a purchase, we may receive a small
          commission at no extra cost to you.
        </div>

        <div
          className="grid gap-10"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(180px,1fr))" }}
        >
          <div>
            <p className="font-display text-2xl text-white font-semibold mb-2">LuxeNest</p>
            <p className="text-xs text-white/50">
              Transform Your House Into A Beautiful Home.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-3">Quick Links</p>
            <ul className="text-sm space-y-2 text-white/60">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/category/living-room" className="hover:text-accent transition-colors">Shop</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-3">Categories</p>
            <ul className="text-sm space-y-2 text-white/60">
              <li><Link to="/category/living-room" className="hover:text-accent transition-colors">Living Room</Link></li>
              <li><Link to="/category/bedroom" className="hover:text-accent transition-colors">Bedroom</Link></li>
              <li><Link to="/category/kitchen" className="hover:text-accent transition-colors">Kitchen</Link></li>
              <li><Link to="/category/wall-decor" className="hover:text-accent transition-colors">Wall Decor</Link></li>
              <li><Link to="/category/lighting" className="hover:text-accent transition-colors">Lighting</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-3">Resources</p>
            <ul className="text-sm space-y-2 text-white/60">
              <li><Link to="/about#disclosure" className="hover:text-accent transition-colors">Affiliate Disclosure</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-3">Social</p>
            <div className="flex gap-4 text-white/60">
              <a href="https://www.pinterest.com/sristisrivastava" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaPinterestP /></a>
              <a href="#" className="hover:text-accent transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-accent transition-colors"><FaFacebookF /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-wrap justify-between gap-3 text-xs text-white/50">
          <span>© 2026 LuxeNest. All rights reserved.</span>
          <span className="flex gap-4">
            <Link to="/about#disclosure" className="hover:text-accent transition-colors">Affiliate Disclosure</Link>
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
