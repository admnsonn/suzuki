import { useState } from "react";
import Navbar from "./Component/Navbar";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import xl7 from "./Asset/xl7.jpg";

const pricelistData = [
  {
    id: 1,
    name: "Suzuki XL7",
    image: xl7,
    variants: [
      { type: "XL7 ZETA M/T", price: "Rp 272.250.000" },
      { type: "XL7 ZETA A/T", price: "Rp 283.600.000" },
      { type: "XL7 BETA HYBRID M/T", price: "Rp 300.400.000" },
      { type: "XL7 BETA HYBRID A/T", price: "Rp 311.450.000" },
      { type: "XL7 ALPHA HYBRID M/T", price: "Rp 310.350.000" },
      { type: "XL7 ALPHA HYBRID A/T", price: "Rp 321.400.000" },
      { type: "XL7 ALPHA HYBRID 2 TONE M/T", price: "Rp 312.450.000" },
      { type: "XL7 ALPHA HYBRID 2 TONE A/T", price: "Rp 323.600.000" },
    ],
  },
  {
    id: 2,
    name: "Suzuki Grand Vitara",
    image: "https://source.unsplash.com/400x300/?suv",
    variants: [
      { type: "Grand Vitara GX A/T", price: "Rp 405.300.000" },
      { type: "Grand Vitara GX 2 TONE", price: "Rp 408.250.000" },
    ],
  },
  {
    id: 3,
    name: "Suzuki Jimny",
    image: "https://source.unsplash.com/400x300/?sedan",
    variants: [
      { type: "Jimny 5 Door M/T", price: "Rp 495.000.000" },
      { type: "Jimny 5 Door A/T", price: "Rp 507.650.000" },
      { type: "Jimny 5 Door 2 TONE M/T", price: "Rp 498.350.000" },
      { type: "Jimny 5 Door 2 TONE A/T", price: "Rp 51.850.000" },
    ],
  },
  {
    id: 4,
    name: "Suzuki All New BALENO",
    image: "https://source.unsplash.com/400x300/?truck",
    variants: [{ type: "ALL NEW BALENO A/T", price: "Rp 298.800.000" }],
  },
  {
    id: 5,
    name: "Suzuki S.PRESSO",
    image: "https://source.unsplash.com/400x300/?truck",
    variants: [
      { type: "S.PRESSO M/T", price: "Rp 177.950.000" },
      { type: "S.PRESSO A/T", price: "Rp 187.550.000" },
    ],
  },
  {
    id: 6,
    name: "Suzuki All New Ertiga",
    image: "https://source.unsplash.com/400x300/?truck",
    variants: [
      { type: "Ertiga GL M/T", price: "Rp 267.700.000" },
      { type: "Ertiga GL A/T", price: "Rp 278.600.000" },
      { type: "Ertiga GX HYBRID M/T", price: "Rp 289.050.000" },
      { type: "Ertiga GX HYBRID A/T", price: "Rp 300.200.000" },
      { type: "Ertiga CRUISE HYBRID M/T", price: "Rp 301.800.000" },
      { type: "Ertiga CRUISE HYBRID A/T", price: "Rp 312.850.000" },
      { type: "Ertiga CRUISE HYBRID 2 TONE M/T", price: "Rp 303.750.000" },
      { type: "Ertiga CRUISE HYBRID 2 TONE A/T", price: "Rp 314.900.000" },
    ],
  },
  {
    id: 7,
    name: "Suzuki New Carry",
    image: "https://source.unsplash.com/400x300/?truck",
    variants: [
      { type: "CARRY 1.5 FD M/T", price: "Rp 176.650.000" },
      { type: "CARRY 1.5 FD AC PS M/T", price: "Rp 186.150.000" },
      { type: "CARRY 1.5 WD M/T", price: "Rp 177.750.000" },
      { type: "CARRY 1.5 WD AC PS M/T", price: "Rp 187.100.000" },
    ],
  },
];

function Pricelist() {
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  const filteredCars = pricelistData.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-[90px] mb-[20px]">
          Daftar Harga Suzuki
        </h2>

        <input
          type="text"
          placeholder="Cari model..."
          className="w-full p-3 mb-6 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="space-y-6">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 bg-blue-500 text-white text-lg font-semibold focus:outline-none"
                onClick={() =>
                  setOpenDropdown(openDropdown === car.id ? null : car.id)
                }
              >
                <span>{car.name}</span>
                {openDropdown === car.id ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {openDropdown === car.id && (
                <div className="p-4 border-t border-gray-300 animate-fadeIn">
                  {car.variants.map((variant, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b last:border-b-0"
                    >
                      <span className="text-gray-800">{variant.type}</span>
                      <span className="text-blue-400 font-bold">
                        {variant.price}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricelist;
