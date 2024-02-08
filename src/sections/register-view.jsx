"use client";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function RegisterView() {
  {
    return (
      <div className={inter.className}>
      <div className="flex min-h-screen items-center justify-center bg-cyan-950">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-white shadow-none">
          <h4 className="mb-4 block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
            Createss
          </h4>
          <h4 className="mt-1 block font-sans text-lg font-semibold leading-relaxed text-white antialiased">
            Ready to get started.
          </h4>
          <p>Enter your email to create your account</p>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="peer h-full w-full rounded-md border border-sky-600 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-sky-600 placeholder-shown:border-t-sky-600 focus:border-2 focus:border-sky-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-sky-600"
                  placeHolder=""
                  required
                  type="email"
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-sky-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-sky-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Username
                </label>
              </div>
            </div>
            <div className="inline-flex items-center"></div>
            <button
              className="block w-full select-none rounded-lg bg-sky-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:shadow-lg hover:shadow-sky-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Register
            </button>
            <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-white antialiased">
              By signing up you are agree to the
              <a
                className="ml-1 font-semibold text-sky-600 transition-colors hover:text-blue-700"
                href="/terms"
              >
                Terms & conditions
              </a>
            </p>
          </form>
          <div className="w-full pt-5 px-4 items-center text-center">
            <div className="text-sm text-sky-600 py-1">
              <span className="mr-1">Have an Account?</span>
              <a href="/login" className="text-sky-600 font-semibold">
                Log In Stead
              </a>
              .
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
