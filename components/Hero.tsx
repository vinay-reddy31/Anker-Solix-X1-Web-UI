export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-start text-white">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://cdn.shopify.com/videos/c/vp/4c044252f2564631820014b1885127e6/4c044252f2564631820014b1885127e6.HD-1080p-7.2Mbps-27387019.mp4"
        autoPlay
        muted
        playsInline
      />
      
      {/* Optional overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />
      
      {/* Content */}
      <div className="px-10 max-w-xl relative z-20">
        <div className="mb-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0493/9834/9974/files/Group_1312316674_d7ebc329-726a-48c1-8c3f-bd21890ff79f_3840x.png?v=1728896784"
            alt="Awards"
            className="h-12"
          />
        </div>

        <h1 className="text-4xl font-bold mb-2">Anker SOLIX X1</h1>
        <h2 className="text-2xl font-bold mb-3">Power for the Extreme</h2>
        <p className="text-gray-200 mb-5">
          Extreme Performance Energy Storage System
        </p>

        <div className="flex gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-6 py-2 rounded-full">
            Watch Video
          </button>
          <button className="border border-white px-6 py-2 rounded-full">
            Watch the Event
          </button>
        </div>
      </div>

      {/* Product Image on Right */}
     
    </section>
  );
}
  