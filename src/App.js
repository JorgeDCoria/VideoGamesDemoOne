import {} from "react-router-dom";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import {
  RiHome3Line,
  RiFirefoxLine,
  RiLayoutGridLine,
  RiUserLine,
  RiWirelessChargingFill,
  RiMailSendLine,
  RiLinksFill,
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
  RiNotification3Line,
  RiSearchLine,
  RiArrowRightSLine,
  RiArrowRightCircleLine,
  RiArrowLeftCircleLine,
  RiMailLine,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { useState } from "react";

function App() {
  const togleMenu = () => {
    setShowMenu(!showMenu);
  };
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="min-h-screen bg-[#141414]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* *************** side bar **************************** */}
      <div
        className={`fixed top-0 z-50  flex h-full w-80 flex-col justify-between overflow-y-auto  border-r border-gray-800 bg-[#141414] p-8 transition-all md:left-0 md:scroll-auto ${
          showMenu ? "left-0" : "-left-full"
        } duration-700`}
      >
        <div>
          <h1 className="mb-10 text-2xl font-bold uppercase tracking-[8px] text-gray-300">
            Tu Logo
          </h1>
          <ul>
            <li>
              <Link
                to={"/about"}
                className="flex items-center gap-4 rounded-xl py-3 px-4 text-gray-300 transition-colors hover:bg-[#232323]"
              >
                <RiHome3Line /> Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="flex items-center gap-4 rounded-xl py-3 px-4 text-gray-300 transition-colors hover:bg-[#232323]"
              >
                <RiFirefoxLine /> Store
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="flex items-center gap-4 rounded-xl py-3 px-4 text-gray-300 transition-colors hover:bg-[#232323]"
              >
                <RiLayoutGridLine /> Library
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="flex items-center gap-4 rounded-xl py-3 px-4 text-gray-300 transition-colors hover:bg-[#232323]"
              >
                <RiUserLine /> Friends
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="p3-4 flex items-center gap-4 rounded-xl py-3 px-4 text-gray-300 transition-colors hover:bg-[#232323]"
              >
                <RiWirelessChargingFill /> Live
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Link
                to={"/about"}
                className="flex items-center gap-4 rounded-xl py-3 px-4 text-gray-300 transition-colors hover:bg-[#232323]"
              >
                <RiMailSendLine /> Download
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="flex items-center gap-4 rounded-xl py-3 px-4 text-gray-300 transition-colors hover:bg-[#232323]"
              >
                <RiLinksFill /> Settings
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="relative flex items-center gap-4 rounded-xl py-3 px-4 text-gray-300 transition-colors hover:bg-[#232323]"
              >
                <img
                  className="h-6 w-6 rounded-full object-cover"
                  src="https://img.freepik.com/foto-gratis/primer-disparo-hombre-guapo-sonriendo_181624-41237.jpg?w=740&t=st=1671074933~exp=1671075533~hmac=cb6c6b35570a0d68c65aa7e9aee82b0e4dd6484ff70df5961ab0f3d8b1b0d256"
                />
                <RiCheckboxBlankCircleFill className="absolute bottom-3 left-8 text-[8px] text-green-600" />
                Trung Tran
              </Link>
            </li>
          </ul>
        </div>

        <button
          onClick={togleMenu}
          className="fixed bottom-8 right-6 z-50 rounded-full bg-blue-600 p-2 text-lg text-white md:hidden"
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </div>
      {/* ************ header ****************** */}
      <div
        className={`fixed top-0 z-40 flex w-full flex-col items-center gap-4 bg-[#141414]  p-4 md:pl-[340px]  lg:flex-row lg:justify-between lg:gap-0`}
      >
        <nav className="order-1 flex items-center gap-4 lg:order-[0]">
          <Link
            to={"#"}
            className="rounded-full bg-blue-600 py-2 px-4 text-white"
          >
            Discover
          </Link>
          <Link
            to={"#"}
            className="rounded-full border-[1px] border-gray-500 py-2 px-4 text-gray-500 "
          >
            Browser
          </Link>
          <Link
            to={"#"}
            className="rounded-full border-[1px] border-gray-500 py-2 px-4 text-gray-500 "
          >
            Wishlist
          </Link>
        </nav>
        <div className="">
          <ul className="flex items-center gap-4">
            <li>
              <Link to={"#"} className="text-lg text-gray-500">
                <RiNotification3Line />
              </Link>
            </li>
            <li>
              <form className="relative">
                <input
                  type="text"
                  className="rounded-full bg-[#232323] py-2 pl-8 pr-4 text-gray-300 outline-none  "
                  placeholder="Search"
                ></input>
                <RiSearchLine className="absolute top-3 left-2 text-lg text-gray-500" />
              </form>
            </li>
          </ul>
        </div>
      </div>
      {/* ********* content ************* */}
      <div className=" pt-24 pr-4 md:pl-[340px] lg:pt-16">
        <div className="mb-8 grid w-full grid-cols-1 gap-4 lg:h-96 lg:grid-cols-12">
          <div className="relative  lg:col-span-9   ">
            <img
              src="https://static-assets-prod.epicgames.com/competitive/static/webpack/1d89ee10c18f54afa33cf8063c27d7d4.jpg"
              className="h-96 w-full rounded-tl-xl rounded-bl-xl object-cover"
            />
            <h1 className="absolute left-4 top-4 text-3xl font-bold text-white">
              Fornite
            </h1>
            <div className="absolute bottom-1 left-1 max-w-lg p-4 text-white">
              <p className="text-gray-100">Update</p>
              <h2 className="mb-4  text-3xl font-extrabold text-white ">
                The hunt is on in Fornite Chapter 2- Season 5- Zero point
              </h2>
              <button className="group flex items-center gap-2 rounded-xl bg-blue-600 py-3 px-6 text-lg font-bold text-white ">
                Play for free
                <RiArrowRightSLine className="transition-all group-hover:translate-x-2" />
              </button>
            </div>
          </div>
          <div className="  bg-[#232323] lg:col-span-3 lg:h-96 lg:rounded-tr-xl lg:rounded-br-xl ">
            <ul className="flex flex-row  justify-center gap-5  p-3 md:h-full lg:flex-col lg:overflow-y-auto ">
              <li>
                <Link className="flex flex-col items-center gap-4 text-lg text-white lg:flex-row">
                  <img
                    src="https://m.media-amazon.com/images/M/MV5BNzU2YTY2OTgtZGZjZi00MTAyLThlYjUtMWM5ZmYzOGEyOWJhXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg"
                    className="h-16 w-14 object-cover"
                  />
                  Fornite
                </Link>
              </li>
              <li>
                <Link className="flex flex-col items-center gap-4 text-lg text-white lg:flex-row">
                  <img
                    src="https://media.vandal.net/m/61/tekken-tag-tournament-2016105185942_1.jpg"
                    className="h-16 w-14 object-cover"
                  />
                  Teken Tag
                </Link>
              </li>
              <li>
                <Link className="flex flex-col items-center gap-4 text-lg text-white lg:flex-row">
                  <img
                    src="https://img.redbull.com/images/c_crop,x_355,y_0,h_675,w_506/c_fill,w_400,h_540/q_auto:low,f_auto/redbullcom/2022/8/1/rsbzzfowbenf2kpnbpgj/free-fire"
                    className="h-16 w-14 object-cover"
                  />
                  Free Fire
                </Link>
              </li>
              <li>
                <Link className="flex flex-col items-center gap-4 text-lg text-white lg:flex-row">
                  <img
                    src="https://static-cdn.jtvnw.net/ttv-boxart/73914_IGDB-272x380.jpg"
                    className="h-16 w-14  object-cover"
                  />
                  Clash of
                </Link>
              </li>
              <li>
                <Link className="flex flex-col items-center gap-4 text-lg text-white lg:flex-row">
                  <img
                    src="https://howlongtobeat.com/games/250px-DotA2.jpg"
                    className="h-16 w-14  object-cover"
                  />
                  Dota 2
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*  ************* seccion de juegos abajo ********** */}
        <div className="mb-4 flex items-center justify-between  text-white">
          <h1 className="text-2xl">Games on sale</h1>
          <div className="flex gap-4 text-4xl text-gray-300">
            <RiArrowLeftCircleLine className="cursor-pointer text-gray-400" />
            <RiArrowRightCircleLine className="cursor-pointer" />
          </div>
        </div>
        <div className="grid gap-2  p-2 lg:grid-cols-5">
          <div>
            <img
              src="https://as01.epimg.net/meristation/imagenes/2021/01/26/cover/956560151611687466.jpg"
              className=" h-56 w-full rounded-xl object-cover"
            />
            <h3 className="text-lg text-gray-300">Valhein</h3>
            <p className="mb-2 text-gray-500">Action games</p>
            <span className="flex justify-center  text-white">$1250</span>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/6/6d/BioShock_cover.jpg"
              className=" h-56 w-full rounded-xl object-cover"
            />
            <h3 className="text-lg text-gray-300">Bioshock</h3>
            <p className="mb-2 text-gray-500">Action, RPG</p>
            <div className="flex items-center justify-center gap-2">
              <span className="rounded-lg bg-green-300 p-1 font-semibold text-gray-700">
                -80%
              </span>
              <span className="text-gray-500">$50</span>
              <span className="flex justify-center  text-white">$8.15</span>
            </div>
          </div>
          <div>
            <img
              src="https://media.contentapi.ea.com/content/dam/eacom/unravel/ea-hero-large-unravel-xl.jpg.adapt.crop3x5.320w.jpg"
              className=" h-56 w-full rounded-xl object-cover"
            />
            <h3 className="text-lg text-gray-300">Unravel</h3>
            <p className="mb-2 text-gray-500">Adventure games</p>
            <span className="flex justify-center  text-white">$20.38</span>
          </div>
          <div>
            <img
              src="https://images.justwatch.com/poster/261338572/s718/mortal-kombat-2021.%7Bformat%7D"
              className=" h-56 w-full rounded-xl object-cover"
            />
            <h3 className="text-lg text-gray-300">Mortal Kombat</h3>
            <p className="mb-2 text-gray-500">Action, Figth</p>
            <div className="flex items-center justify-center gap-2">
              <span className="rounded-lg bg-green-300 p-1 font-semibold text-gray-700">
                -80%
              </span>
              <span className="text-gray-500">$50</span>
              <span className="flex justify-center  text-white">$120</span>
            </div>
          </div>
          <div>
            <img
              src="https://image.api.playstation.com/cdn/UP0002/CUSA04762_00/LHc8qTz6JmLL46EdNWYEvqZEsIEYCbhy.png"
              className=" h-56 w-full rounded-xl object-cover"
            />
            <h3 className="text-lg text-gray-300">Call of Duty</h3>
            <p className="mb-2 text-gray-500">Action Fire</p>
            <span className="flex justify-center  text-white">$250</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-10 text-gray-500 md:flex-row md:justify-between md:pl-[340px]">
        <div className="text-center md:text-left">
          <p>Produce by Coria jorge- Analista Programador de Jujuy</p>
          <p>San Salvador de Jujuy- Argentina</p>
        </div>

        <div>
          <span>Contacto</span>
          <div className="flex items-center justify-around gap-2 text-xl">
            <Link>
              <RiMailLine />
            </Link>
            <Link>
              <RiGithubFill />
            </Link>
            <Link>
              <RiLinkedinFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
