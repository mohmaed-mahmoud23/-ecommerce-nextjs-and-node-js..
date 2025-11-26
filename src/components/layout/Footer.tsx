import { Button } from "../ui/Button";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* LOGO + DESCRIPTION */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
                T
              </div>
              <h2 className="text-xl font-semibold">TechMart</h2>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Your one-stop destination for the latest technology, fashion, and
              lifestyle products. Fast shipping and excellent customer service.
            </p>

            <ul className="text-sm text-gray-600 space-y-1">
              <li>📍 123 Tech Street, Digital City, DC 12345</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>✉️ support@techmart.com</li>
            </ul>

            <div className="flex gap-4 mt-4">
              <Button variant={"outline"}>🌐</Button>
              <Button variant={"outline"}>🐦</Button>
              <Button variant={"outline"}>📸</Button>
              <Button variant={"outline"}>▶️</Button>
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="font-semibold mb-4">SHOP</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home & Garden</li>
              <li>Sports</li>
              <li>Deals</li>
            </ul>
          </div>

          {/* CUSTOMER SERVICE */}
          <div>
            <h3 className="font-semibold mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Track Your Order</li>
              <li>Returns & Exchanges</li>
              <li>Size Guide</li>
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>About TechMart</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Investor Relations</li>
              <li>Sustainability</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-8 flex flex-col md:flex-row justify-between text-gray-600 text-sm border-t pt-4">
          <p>© 2024 TechMart. All rights reserved.</p>

          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>

          <p className="text-gray-500">Powered by Next.js</p>
        </div>
      </div>
    </footer>
  );
}
