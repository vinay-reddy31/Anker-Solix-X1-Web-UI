export default function Header() {
    return (
      <div className="w-full relative">
        {/* Green Top Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-center text-sm py-1">
          Save Big on Summer Power | Up to 55% | Aug. 4th - 17th{" "}
          <span className="underline cursor-pointer">Shop Now</span>
        </div>

        {/* Main Navbar */}
        <nav className="flex items-center justify-between px-6 py-3 shadow relative">
          {/* Product Image on the left */}
          <img
            src="/images/product.png"
            alt="Anker SOLIX X1"
            className="h-10 mr-6"
            style={{ minWidth: 40 }}
          />

          {/* "Anker.com" link replacing logo */}
          <a
            href="https://www.anker.com/?ref=naviMenu_top_img"
            className="absolute left-20 top-1/2 -translate-y-1/2 z-20 text-white hover:underline md:hidden font-semibold text-[16px] md:text-[12px]"
          >
            Anker.com
          </a>

          {/* Menu */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Backup Solutions</li>
            <li className="cursor-pointer">Bulk Purchase</li>
            <li className="cursor-pointer">SOLIX F3000</li>
            <li className="cursor-pointer">Summer Sale</li>
            <li className="cursor-pointer">Explore</li>
            <li className="cursor-pointer">For X1 Installers</li>
          </ul>

          {/* Icons */}
          <div className="flex gap-4 items-center">
            <span className="cursor-pointer">🌐</span>
            <span className="cursor-pointer">👤</span>
            <span className="cursor-pointer">🛒</span>
          </div>
        </nav>
      </div>
    );
}
  