"use client";
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */

import { Inter } from "next/font/google";
import MoreDropDown from "@/components/dropdown/more-dropdown";
import FilterBy from "@/components/dropdown/filterby";
import PriceDropDown from "@/components/dropdown/startingprice-dropdown";
import FollowingDropDown from "@/components/dropdown/following-dropdown";
import TypesDropDown from "@/components/dropdown/promotypes-dropdown";
import TagsDropDown from "@/components/dropdown/tags-dropdown";

const inter = Inter({
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <div className={inter.className}>
      <div className="flex">
        <img
          className="absolute xl:hidden lg:w-40 sm:w-40 max-[400px]:w-28 min-[400px]:left-5 top-5 left-2"
          src="/createss-white.webp"
          alt="Createss Logo"
        />
        <div className="flex flex-col h-screen p-8 max-xl:hidden">
          <img src="/createss.webp" alt="Createss Logo" />
          <button className="flex w-24 mt-4 text-center rounded-2xl py-2 border-b-2 text-black hover:bg-cyan-950 hover:text-sky-600">
            <img className="px-1" src="icons/compass-black.svg" alt="Compass Icon" />{" "}
            Explore
          </button>
          <button className="flex w-24 mt-4 text-center rounded-2xl border-b-2  py-2 text-black hover:bg-cyan-950 hover:text-sky-600">
            <img className="px-1" src="icons/login-icon.svg" alt="Login Icon" />{" "}
            <a href="/login">Login</a>
          </button>
          <hr className="mt-4" />
          <button className="flex w-32 mt-4 rounded-2xl border-b-2 py-2 text-black hover:bg-cyan-950 hover:text-sky-600">
            <img className="px-1" src="icons/needhelp.svg" alt="Need Help Icon" />{" "}
            <a href="/needhelp">Need Help?</a>
          </button>
          <hr className="mt-4" />
          <span className="mt-4 text-center">
            <a href="/terms">Terms of Service</a>
          </span>
          <span className="text-center mt-4">
            {" "}
            <a href="/privacy">Privacy</a>
          </span>
          <div className="mt-4 flex justify-between">
            <img src="social/instagram.svg" alt="Instagram Logo" />
            <img src="social/twitter.svg" alt="Twitter Logo" />
            <img src="social/tiktok.svg" alt="Tiktok Logo" />
            <img src="social/youtube.svg" alt="Youtube Logo" />
            <img src="social/reddit.svg" alt="Reddit Logo" />
          </div>
        </div>

        {/* Hasta acá columna 1 */}

        <div className="w-screen">
          <div className="bg-cyan-950 h-72">
            <div className="flex flex-col">
              <div className="flex justify-end mt-3 mr-3">
                <span className="text-white mt-2 mr-2 text-md">
                  What's Createss
                </span>
                <a href="/landing">
                  <button
                    className="select-none text-sm rounded-2xl bg-transparent border border-sky-600 py-2 px-3 text-center align-middle font-sans font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:bg-sky-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                  >
                    Sign Up
                  </button>
                </a>
              </div>
              <div className="flex justify-center mt-11">
                <article className="text-white text-2xl font-bold">
                  <h1>
                    Promote <span className="text-sky-600">yourself</span>
                  </h1>
                  <h1>
                    whit the perfect{" "}
                    <span className="text-sky-600">creator</span>.
                  </h1>
                  <input
                    type="text"
                    className="bg-transparent border border-sky-600 rounded-2xl text-xs font-normal p-2 mt-3 pr-14 placeholder:pl-1"
                    placeholder="Search for creators"
                  />
                </article>
              </div>
            </div>
          </div>
          <div className="bg-slate-200">
            <article>
              <div className="flex justify-between text-center font-normal max-xl:hidden max-xl:mt-10">
                <span className="m-4">Filter by platform</span>
                <span className="m-4">Get more specific...</span>
              </div>
              <div className="font-semibold text-sm inline p-1 xl:flex 2xl:justify-between max-lg:hidden xl:justify-center max-[1280px]:hidden">
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-1 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  ALL
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-0.5 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  ONLYFANS
                </button>
                <button
                  type="button"
                  className="border border-gray-300 text-gray-700 rounded-2xl border-b-4 px-1 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline bg-slate-100"
                >
                  INSTAGRAM
                </button>
                <MoreDropDown />
                <PriceDropDown/>
                <FollowingDropDown/>
                <TypesDropDown/>
                <TagsDropDown/>
              </div>
            </article>
            <div className="bg-slate-200">
              <h1 className="font-bold pl-6 py-4 max-xl:hidden">
                Featured Sellers
              </h1>
              <FilterBy/>
              <div className="px-4 mb-3 grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-2">
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/perfil.webp"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="social/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="social/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/perfil.webp"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="social/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="social/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/perfil.webp"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="social/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="social/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/perfil.webp"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="social/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="social/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/perfil.webp"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="social/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="social/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/perfil.webp"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="social/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="social/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 border border-slate-600 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/perfil.webp"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="social/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="social/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block px-4 py-2 text-xs border border-slate-600 font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
                  <div className="rounded-3xl border shadow-md text-black bg-white">
                    <a href="#">
                      <img
                        className="rounded-t-xl w-screen"
                        src="/perfil.webp"
                        alt="Foto Perfil"
                      />
                    </a>
                    <div className="p-5 ">
                      <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          Fielaursen
                        </h5>
                      </a>
                      <div className="text-xs font-bold uppercase text-black mt-1 mb-2">
                        ★4.5 (4)
                      </div>
                      <p className="mb-3 font-normal text-sm text-black">
                        I have 220k subs + 230k following on onlyfans. 0.0%
                        creator since 3 years
                      </p>
                      <div className="pt-4">
                        <div className="flex">
                          <img
                            className="mr-2"
                            src="social/instagram.svg"
                            alt="Instagram Logo"
                            width={18}
                            height={14}
                          />
                          <img src="social/onlyfans.svg" alt="Onlyfans Logo" />
                        </div>
                        <div className="pt-2">
                          <button className="block border border-slate-600 px-4 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-gray-100 rounded shadow ripple hover:shadow-lg hover:bg-gray-300 focus:outline-none">
                            Offers from $200
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mb-4">
                  <button className="bg-transparent mt-2 max-[370px]:px-2 px-4 text-center rounded-3xl py-2 border-b-2 text-black hover:text-slate-600">
                    ←
                  </button>
                  <button className="bg-cyan-950 mt-2  mr-4 px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    1
                  </button>
                  <button className="bg-cyan-950 mt-2  mr-4 px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    2
                  </button>
                  <button className="bg-cyan-950 mt-2  mr-4 px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    3
                  </button>
                  <button className="bg-cyan-950 mt-2  mr-4 px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    4
                  </button>
                  <button className="bg-cyan-950 mt-2  px-4 text-center rounded-3xl py-2 border-b-2 text-white hover:bg-sky-600">
                    5
                  </button>
                  <button className="bg-transparent mt-2 max-[370px]:px-2 px-4 text-center rounded-3xl py-2 border-b-2 text-black hover:text-slate-600">
                    →
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-cyan-950 h-14 xl:hidden">
              <div className="flex justify-between mt-2 px-2">
                <button>
                  <img className="mt-4" src="icons/compass.svg" alt="Compass Icon" />
                </button>
                <button>
                  <img
                    className="mt-4"
                    src="icons/campaign.svg"
                    alt="Campaign Icon"
                  />
                </button>
                <button>
                  <img className="mt-4" src="icons/chat-icon.svg" alt="Chat Icon" />
                </button>
                <button>
                  <img
                    className="mt-4"
                    src="icons/eyelashes.svg"
                    alt="Eyelash Icon"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hasta acá columna 2 */}

            <div className="flex h-screen max-xl:hidden p-6">
              <img
                className="h-6 translate-x-4"
                src="icons/sendmessage.svg"
                alt="Message Logo"
              />
              <h1 className="text-sm text-center w-36">Send us a message</h1>
            </div>

        {/* Hasta acá columna 3 pete */}
      </div>
    </div>
  );
}
