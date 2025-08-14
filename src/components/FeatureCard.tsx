import { FaCheckCircle, FaSearch, FaStar } from "react-icons/fa";

export default function FeaturesGrid() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Catalogue Card */}
        <div className="bg-[#181818] rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">Current listings</span>
              <input
                className="bg-[#222] text-sm rounded px-2 py-1 text-white w-32"
                placeholder="Search"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-[#232323] rounded-lg p-2">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-amber-500" />
                  <span className="text-white text-sm">Ken Carson Chain</span>
                </div>
                <button className="bg-amber-500 text-black px-3 py-1 rounded font-bold text-xs shadow hover:bg-amber-600 transition-colors">
                  Purchase for $1.99
                </button>
              </div>
              {/* Repeat for other listings */}
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-bold text-white">
              Growing <span className="text-amber-500">catalogue</span>
            </h4>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet. Aliquet urna arcu orci ac.
            </p>
          </div>
        </div>

        {/* Beginner Friendly Card */}
        <div className="bg-[#181818] rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[260px]">
          <div>
            <div className="flex items-center mb-4">
              <input
                className="bg-[#222] text-sm rounded px-2 py-1 text-white w-32"
                placeholder="Yeezy slides"
              />
              <span className="ml-auto text-xs text-gray-400">+5,000+</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg w-16 h-16 flex items-center justify-center">
                {/* Product Placeholder */}
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-white text-sm">Yeezy Slides</span>
                <button className="bg-amber-500 text-black px-3 py-1 rounded font-bold text-xs shadow hover:bg-amber-600 transition-colors mt-1">
                  View Details
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-xl font-bold text-white">
              Beginner <span className="text-amber-500">friendly</span>
            </h4>
            <p className="text-gray-400 text-sm">
              The site does feature a simple design with a vast catalogue.
            </p>
          </div>
        </div>

        {/* Verified Quality Card */}
        <div className="bg-[#181818] rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-black rounded-lg p-3 shadow-inner flex flex-col items-center">
              <img src="/chain-image.png" alt="Ken Carson X Chain" className="w-14 h-14 object-contain" />
              <span className="text-white text-sm mt-2">Ken Carson X Chain</span>
            </div>
            <FaStar className="text-amber-500 text-4xl ml-2" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              Verified <span className="text-amber-500">Quality</span>
            </h4>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet. Aliquet urna arcu orci ac.
            </p>
          </div>
        </div>

        {/* Reverse Image Search Card */}
        <div className="bg-[#181818] rounded-2xl shadow-lg p-6 flex flex-col justify-between min-h-[260px]">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <FaSearch className="absolute text-black text-4xl left-0 top-0"/>
              <div className="bg-gray-700 rounded-full w-20 h-20 flex items-center justify-center">
                <img src="/yeezy-slides.png" alt="Yeezy Slides" className="w-12 h-12 object-contain" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">
              Reverse <span className="text-amber-500">image search</span>
            </h4>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet. Aliquet urna arcu orci ac.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
