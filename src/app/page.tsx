import { Button } from "@/components/ui/Button";

// pages/index.js
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center max-w-xl px-4">
        {/* الجملة */}
        <h1 className="text-5xl font-bold text-black mb-4">
          Welcome to TeckMart
        </h1>

        {/* الفقرة */}
        <p className="text-gray-700 text-lg mb-8">
          Discover the latest technology and gadgets at unbeatable prices.
          TeckMart brings you the best selection of electronics and accessories,
          making your shopping experience smooth and exciting.
        </p>

        {/* الزرارين */}
        <div className="flex justify-center gap-6">
          <Button className="px-6 py-3 bg-white hover:text-white hover:bg-black text-black font-semibold rounded-lg shadow-lg backdro  transition">
            Shop Now
          </Button>
          <Button className="px-6 py-3 bg-transparent border-2 border-white text-black font-semibold rounded-lg hover:bg-white   transition">
            Browse to catigory
          </Button>
        </div>
      </div>
    </div>
  );
}
