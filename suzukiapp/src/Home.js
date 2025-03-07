import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import LogoSuzuki from "./Asset/4.png";
import Promo1 from "./Asset/1.jpg";
import Promo2 from "./Asset/2.jpg";
import Promo3 from "./Asset/3.jpg";
import Promo5 from "./Asset/5.jpg";
import Promo6 from "./Asset/6.jpg";
import Promo7 from "./Asset/7.jpg";
import Promo8 from "./Asset/8.jpg";
import Promo9 from "./Asset/9.jpg";
import Promo10 from "./Asset/10.jpg";
import Promo11 from "./Asset/11.jpg";
import Promo12 from "./Asset/12.jpg";
import Promo13 from "./Asset/13.jpg";
import Promo14 from "./Asset/14.jpg";
import Promo15 from "./Asset/15.jpg";
import Promo16 from "./Asset/16.jpg";
import Promo17 from "./Asset/17.jpg";
import Promo18 from "./Asset/18.jpg";
import Promo19 from "./Asset/19.jpg";
import Promo20 from "./Asset/20.jpg";
import Promo21 from "./Asset/21.jpg";
import Promo22 from "./Asset/22.jpg";
import gambar1 from "./Asset/gambar1.jpg";
import gambar2 from "./Asset/gambar2.jpg";
import gambar3 from "./Asset/gambar3.jpg";
import gambar4 from "./Asset/gambar4.jpg";
import gambar5 from "./Asset/gambar5.jpg";
import gambar6 from "./Asset/gambar6.jpg";
import gambar7 from "./Asset/gambar7.jpg";
import gambar8 from "./Asset/gambar8.jpg";
import gambar9 from "./Asset/gambar9.jpg";
import testimoni1 from "./Asset/testimoni1.jpg";
import testimoni2 from "./Asset/testimoni2.jpg";
import testimoni3 from "./Asset/testimoni3.jpg";
import Promo010 from "./Asset/010.png";
import Promo020 from "./Asset/020.png";
import Promo030 from "./Asset/030.png";
import Promo040 from "./Asset/040.png";
import Promo050 from "./Asset/050.png";
import Promo060 from "./Asset/060.png";
import profil from "./Asset/profil.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import React, { useRef, useState } from "react";

function Home() {
  const lokasiRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToLokasi = () => {
    if (lokasiRef.current) {
      lokasiRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="App mb-[5px]">
      <div>
        <Navbar />
      </div>
      <br></br>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="mt-16 sm:mt-16 xl:mt-[90px] text-black font-bold text-xl sm:text-2xl md:text-3xl text-center">
          Selamat Datang di Suzuki NJS Naripan Bandung
        </div>
        <div className="mt-5 sm:mt-8 text-black font-medium text-sm sm:text-base md:text-lg text-center leading-relaxed max-w-3xl mx-auto">
          Suzuki Indonesia dengan bangga berperan dalam industri otomotif,
          memproduksi, serta memasarkan berbagai pilihan kendaraan. Kami tidak
          hanya menyediakan produk berkualitas, tetapi juga menghadirkan
          pengalaman berkendara yang memuaskan untuk Anda.
        </div>
      </div>

      <div className="flex items-center justify-center mt-10">
        <img
          src={LogoSuzuki}
          alt="Logo Suzuki"
          className="w-20 sm:w-24 md:w-32"
        />
      </div>

      <div className="mt-6 max-w-[800px] mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="rounded-lg shadow-lg"
        >
          <SwiperSlide>
            <img
              src={Promo010}
              alt="Slide 1"
              className="w-full xl:h-auto lg:h-auto md:h-auto h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo020}
              alt="Slide 2"
              className="w-full xl:h-auto lg:h-auto md:h-auto h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo030}
              alt="Slide 3"
              className="w-full xl:h-auto lg:h-auto md:h-auto h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo040}
              alt="Slide 3"
              className="w-full xl:h-auto lg:h-auto md:h-auto h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo050}
              alt="Slide 3"
              className="w-full xl:h-auto lg:h-auto md:h-auto h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo060}
              alt="Slide 3"
              className="w-full xl:h-auto lg:h-auto md:h-auto h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-8 px-4 w-full max-w-[800px] mx-auto gap-4 md:gap-[60px] text-center md:text-left">
        <div className="text-black font-semibold text-[18px] md:text-[20px]">
          SUZUKI NJS NARIPAN BANDUNG
        </div>
        <button
          onClick={scrollToLokasi}
          className="bg-blue-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
        >
          <FaMapMarkerAlt className="text-white text-lg" />
          Lihat Lokasi
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center mt-10 px-4">
        <img src={Promo5} alt="" className="w-full rounded-lg" />
        <img src={Promo6} alt="" className="w-full rounded-lg" />
        <img src={Promo7} alt="" className="w-full rounded-lg" />
        <img src={Promo8} alt="" className="w-full rounded-lg" />
      </div>

      <div className="mt-10 relative w-full">
        <img
          src={Promo9}
          alt=""
          className="w-full h-[250px] md:h-[350px] lg:h-auto object-cover filter brightness-[0.7] rounded-sm"
        />
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-12 lg:gap-16 mt-10 px-6 text-center md:text-left">
        <div>
          <div className="font-bold text-[20px] md:text-[23px]">
            PT. NUSANTARA JAYA SENTOSA
          </div>
          <div className="text-[15px] md:text-[17px] mt-2">
            Main Dealer Resmi Mobil Suzuki <br className="hidden md:block" />
            Jawa Barat
          </div>
        </div>

        <div>
          <div className="font-bold text-[20px] md:text-[23px]">
            SUZUKI NJS NARIPAN BANDUNG
          </div>
          <div className="text-[15px] md:text-[17px] mt-2">
            Jl. Naripan No.68, Kb. Pisang, Kec. Sumur Bandung,{" "}
            <br className="hidden md:block" />
            Kota Bandung, Jawa Barat 40112
          </div>
        </div>

        <div>
          <div className="font-bold text-[20px] md:text-[23px]">
            INFO TEST DRIVE / PEMESANAN HILGA JULIAN
          </div>
          <div className="text-[15px] md:text-[17px] mt-2">
            Cukup kasih tahu apa yang Anda butuhkan, dan saya{" "}
            <br className="hidden md:block" />
            rekomendasikan yang terbaik sesuai budget dan keinginan
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[40px] gap-2 text-xl sm:text-2xl md:text-3xl font-semibold">
        ALL NEW BALENO DAN S.PRESSO
      </div>
      <div className="mt-6 max-w-[500px] mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="rounded-lg shadow-lg"
        >
          <SwiperSlide>
            <img
              src={Promo10}
              alt="Slide 10"
              className="w-full xl:h-auto lg:h-auto md:h-auto h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo11}
              alt="Slide 11"
              className="w-full xl:h-auto lg:h-auto md:h-auto h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo12}
              alt="Slide 12"
              className="w-full xl:h-auto lg:h-auto md:h-auto h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo13}
              alt="Slide 13"
              className="w-full xl:h-auto lg:h-auto md:h-auto h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo14}
              alt="Slide 14"
              className="w-full xl:h-auto lg:h-auto md:h-auto h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo15}
              alt="Slide 15"
              className="w-full xl:h-auto lg:h-auto md:h-auto h-[200px] object-cover rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="w-full bg-sky-100 mt-8 p-4 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
          {[Promo16, Promo17, Promo19, Promo18, Promo20, Promo21, Promo22].map(
            (image, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
                  <img
                    className="w-full h-30 object-cover rounded-xl"
                    src={image}
                    alt="Promo"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 text-center">
                      {index === 0
                        ? "XL 7 HYBRID"
                        : index === 1
                        ? "GRAND VITARA"
                        : index === 2
                        ? "ALL NEW BALENO"
                        : index === 3
                        ? "JIMNY"
                        : index === 4
                        ? "S. PRESSO"
                        : index === 5
                        ? "ALL NEW ERTIGA"
                        : "NEW CARRY"}
                    </h2>
                    <p className="mt-2 text-gray-600 text-center">
                      {index === 0
                        ? "Suzuki New XL7 hadir kembali dengan teknologi Smart Hybrid Vehicle by Suzuki (SHVS). Teknologi cerdas membuat New XL7 menjadi kendaraan ramah lingkungan."
                        : index === 1
                        ? "Menghadirkan SUV dengan desain exterior yang lebih berkarakter, lebih kokoh, dan tampilan lebih tangguh. Dilengkapi mesin Smart Hybrid Vehicle by Suzuki (SHVS)."
                        : index === 2
                        ? "Suzuki Baleno kini hadir dengan desain yang mencolok dan elegan, berkendara nyaman dengan bahan bakar bensin yang irit."
                        : index === 3
                        ? "Suzuki Jimny menggunakan mesin K15B berkapasitas 1.500 cc, dengan tenaga sebesar 102 PS / 6.000 rpm, dan torsi 130 Nm / 4000 rpm."
                        : index === 4
                        ? "Suzuki S. PRESSO sporty di jalan, stylish luar dalam. Tampil fresh sebagai compact city car dengan rasa SUV."
                        : index === 5
                        ? "Suzuki All New Ertiga Hybrid dilengkapi Electronic Stability Program (ESP) untuk menghindari selip saat bermanuver saat di perjalanan."
                        : "New Carry Pick Up kini dilengkapi dengan bak yang lebih luas dan sasis yang lebih kuat membuat kapasitas angkut hingga 1 ton. Hadir dalam varian wide deck dan flat deck yang lebih ekonomis."}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center items-center mt-10 px-4">
        <img src={gambar1} alt="" className="w-[285px] rounded-lg" />
        <img src={gambar2} alt="" className="w-[285px] rounded-lg" />
        <img src={gambar3} alt="" className="w-[285px] rounded-lg" />
        <img src={gambar4} alt="" className="w-[285px] rounded-lg" />
        <img src={gambar5} alt="" className="w-[285px] rounded-lg" />
      </div>
      <div className="w-full bg-sky-100 text-center pt-[50px]">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          Serah Terima Kendaraan
        </h2>
      </div>
      <div className="w-full bg-sky-100 p-4 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* CARD 1 */}
          <div className="mt-[20px] mb-[30px]">
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4 mb-[20px]">
              <img
                className="w-full h-60 object-cover rounded-xl"
                src={testimoni1}
                alt={""}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Haji Deden & Hj. Yani
                </h2>
                <p className="mt-2 text-gray-600">
                  (Pengusaha Kulit Bahan Sepatu dan Tas) "Mudah-mudahan mobil
                  barunya membawa lancar buat usaha saya"
                </p>
              </div>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="mt-[20px] mb-[30px]">
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4 mb-[20px]">
              <img
                className="w-full h-60 object-cover rounded-xl"
                src={testimoni2}
                alt={""}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pak Jusak dan Pak Petrus
                </h2>
                <p className="mt-2 text-gray-600">
                  (Operasional GKI Guntur) "Terima kasih Hilga udah bantuin urus
                  urus dokumennya sampai beres. Semoga Hilga jualannya lebih
                  banyak lagi"
                </p>
              </div>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="mt-[20px] mb-[30px]">
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4 mb-[20px]">
              <img
                className="w-full h-60 object-cover rounded-xl"
                src={testimoni3}
                alt={""}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pak Yadi & Bu Lilis
                </h2>
                <p className="mt-2 text-gray-600">
                  (Pemilik Grosir Sembako) "Mantap A Hilga, XL7nya mantap pisan,
                  bersih wangi pokonya mobil siap tempur"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={lokasiRef} className="relative w-full">
        <img
          src={Promo9}
          alt=""
          className="w-full filter brightness-[0.7] object-cover h-[400px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]"
        />

        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10 text-white font-bold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-5">
          <p>Lokasi Dealer Suzuki NJS Naripan Bandung</p>
        </div>

        <div className="absolute inset-0 flex items-center justify-center mt-[50px]">
          <iframe
            className="w-[90%] max-w-4xl h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7470806668325!2d107.6131284749965!3d-6.920809593078841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e753d6100b27%3A0xf5b0d9a5f7e31abe!2sSuzuki%20Naripan%20Bandung%20PT%20Nusantara%20Jaya%20Sentosa!5e0!3m2!1sid!2sid!4v1739417598395!5m2!1sid!2sid"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center items-center mt-10 px-4">
        <img src={gambar6} alt="" className="w-[360px] rounded-lg" />
        <img src={gambar7} alt="" className="w-[360px] rounded-lg" />
        <img src={gambar8} alt="" className="w-[360px] rounded-lg" />
        <img src={gambar9} alt="" className="w-[360px] rounded-lg" />
      </div>

      <div className="text-center py-10 mt-5 px-4">
        <p className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
          Hubungi Kontak
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 font-semibold">
          <a
            href="https://wa.me/6287720701827"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center space-x-2 bg-green-500 text-white px-4 sm:px-5 py-3 rounded-full shadow-md hover:bg-green-600 transition duration-300">
              <FaWhatsapp size={18} />
              <span>WhatsApp</span>
            </button>
          </a>

          <a
            href="https://www.instagram.com/juliansuzukibandung"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center space-x-2 bg-pink-500 text-white px-4 sm:px-5 py-3 rounded-full shadow-md hover:bg-pink-600 transition duration-300">
              <FaInstagram size={18} />
              <span>Instagram</span>
            </button>
          </a>

          <a href="mailto:suzuki.naripan.hilga.julian@gmail.com">
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 sm:px-5 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
              <FaEnvelope size={18} />
              <span>Email</span>
            </button>
          </a>

          <a
            href="https://www.facebook.com/people/Julian-Suzuki-Bandung/61564726183095/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center space-x-2 bg-blue-700 text-white px-4 sm:px-5 py-3 rounded-full shadow-md hover:bg-blue-800 transition duration-300">
              <FaFacebook size={18} />
              <span>Facebook</span>
            </button>
          </a>
        </div>

        <div className="mt-8 text-gray-800">
          <p className="text-base sm:text-lg">Suzuki Bandung</p>
          <p className="text-base sm:text-lg mt-2">
            PT. NUSANTARA JAYA SENTOSA
          </p>
          <p className="text-sm sm:text-base mt-2">
            © 2025 Suzuki NJS Naripan Bandung by Ghive
          </p>
        </div>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={30} />
      </button>

      {isOpen && (
        <div className="fixed bottom-[90px] right-5 bg-white shadow-lg rounded-lg p-4 w-64">
          <p className="text-black text-center font-semibold mb-3">
            Customer Service
          </p>
          <img
            src={profil}
            className="w-24 h-24 object-cover rounded-full mb-3 mx-auto"
          />
          <a
            href="https://wa.me/6287720701827"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white text-center py-2 rounded-lg mt-3 hover:bg-green-600 transition"
          >
            Chat via Whatsapp
          </a>
        </div>
      )}
    </div>
  );
}

export default Home;
