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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaMapMarkerAlt } from "react-icons/fa";

function App() {
  return (
    <div className="App mb-[50px]">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="mt-[30px] text-black font-bold text-[25px]">
          Selamat Datang di Suzuki NJS Naripan Bandung
        </div>
        <div className="mt-[30px] text-black font-semibold text-[15px] text-center leading-tight max-w-[1000px] mx-auto">
          Suzuki Indonesia dengan bangga berperan dalam industri otomotif,
          memproduksi, serta memasarkan berbagai pilihan kendaraan. Kami tidak
          hanya menyediakan produk berkualitas, tetapi juga menghadirkan
          pengalaman berkendara yang memuaskan untuk Anda.
        </div>
      </div>
      <div className="flex items-center justify-center mt-[40px]">
        <img src={LogoSuzuki} alt="" className="w-[100px]" />
      </div>
      <div className="mt-6 max-w-[800px] mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="rounded-lg shadow-lg"
        >
          <SwiperSlide>
            <img
              src={Promo1}
              alt="Slide 1"
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo2}
              alt="Slide 2"
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo3}
              alt="Slide 3"
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex justify-center items-center mt-8 px-4 w-full gap-[60px]">
        <div className="text-black font-semibold text-[20px]">
          SUZUKI NJS NARIPAN BANDUNG
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2">
          <FaMapMarkerAlt className="text-white text-lg" />
          Lihat Lokasi
        </button>
      </div>
      <div className="flex items-center justify-center mt-[40px] gap-2">
        <img src={Promo5} alt="" className="w-[360px] rounded-lg" />
        <img src={Promo6} alt="" className="w-[360px] rounded-lg" />
        <img src={Promo7} alt="" className="w-[360px] rounded-lg" />
        <img src={Promo8} alt="" className="w-[360px] rounded-lg" />
      </div>
      <div className="mt-[40px] relative">
        <img src={Promo9} alt="" className="w-full filter brightness-[0.7]" />
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
      </div>
      <div className="flex items-start justify-center gap-16 mt-[40px] px-6">
        <div>
          <div className="font-bold text-[23px]">
            PT. NUSANTARA JAYA SENTOSA
          </div>
          <div className="text-[17px] mt-2">
            Main Dealer Resmi Mobil Suzuki <br /> Jawa Barat
          </div>
        </div>

        <div>
          <div className="font-bold text-[23px]">
            SUZUKI NJS NARIPAN BANDUNG
          </div>
          <div className="text-[17px] mt-2">
            Jl. Naripan No.68, Kb. Pisang, Kec. Sumur Bandung, <br /> Kota
            Bandung, Jawa Barat 40112
          </div>
        </div>

        <div>
          <div className="font-bold text-[23px]">
            INFO TEST DRIVE / PEMESANAN HILGA JULIAN
          </div>
          <div className="text-[17px] mt-2">
            Cukup kasih tahu apa yang Anda butuhkan, dan saya <br />{" "}
            rekomendasikan yang terbaik
            <br></br>sesuai budget dan keinginan
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-[40px] gap-2 text-[25px] font-semibold">
        ALL NEW BALENO DAN S.PRESSO
      </div>
      <div className="mt-6 max-w-[500px] mx-auto">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
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
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo11}
              alt="Slide 11"
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo12}
              alt="Slide 12"
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo13}
              alt="Slide 13"
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo14}
              alt="Slide 14"
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Promo15}
              alt="Slide 15"
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default App;
