/* eslint-disable react/no-unescaped-entities */

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function NeedHelp() {
  return (
    <div className={inter.className}>
      <div className="flex justify-center p-4 bg-cyan-950">
        <a href="/">
          <img src="/createss-white.webp" alt="Createss Logo" />
        </a>
      </div>
      <div className="flex">
        <div>
          <div className="border border-slate-100 rounded-xl bg-slate-50 w-full my-6 ml-6">
            <div className="ml-2 py-2 flex flex-col">
              <div className="mb-4 mt-3">
                <a className="flex" href="/">
                <img src="/home.svg" alt="Home Icon" />
                <span className="ml-1">Back to home</span>
                </a>
              </div>
              <div className="mb-2">
                <a className="flex" href="/">
                <img src="/request.svg" alt="Request Icon" />
                <span className="ml-1">Submit a request</span>
                </a>
              </div>
              <h1 className="mt-6">FREQUENTLY ASKED QUESTIONS</h1>
              <h1 className="text-sky-600 font-bold my-3">ABOUT CREATESS</h1>
              <span>What is Createss?</span>
              <span>Why use Createss?</span>
              <span>What platforms are supported?</span>
              <span>What browser is best?</span>
              <span>What types of promotions are available?</span>
              <span>
                How do I add and manage multiple profiles on one account?
              </span>
              <span>How would I dispute an issue?</span>
              <span>Is there a referral program?</span>
              <span>Where can I find other creator resources?</span>
              <h1 className="text-sky-600 font-bold my-3">
                VERIFICATION AND SAFETY
              </h1>
              <span>Is Createss safe?</span>
              <span>How are buyers and sellers verified?</span>
              <span>What is the Createssm browser extension?</span>
              <h1 className="text-sky-600 font-bold my-3">BUYING PROMO</h1>
              <span>What kind of promo should I purchase?</span>
              <span>How long do promos last?</span>
              <span>What do star ratings indicate?</span>
              <span>How do I rate and review?</span>
              <span>
                Can I be refunded if I'm not satisfied with the outcome of a
                promo?
              </span>
              <span>What if the seller does not complete the promo?</span>
              <h1 className="text-sky-600 font-bold my-3">SELLING PROMO</h1>
              <span>
                How do I mark days as unavailable for promo scheduling?
              </span>
              <span>
                What kinds of promotions can I offer? How much should I charge?
              </span>
              <span>
                What if I don't feel comfortable promoting a buyer's content?
              </span>
              <span>Can I cancel a promo request if I change my mind?</span>
              <span>
                What if I am unable to fulfill a promo request due to an
                extenuating circumstance?
              </span>
              <span>What if someone gives me an unfair rating?</span>
            </div>
          </div>
        </div>
        <div className=" mt-6 pl-10">
          <div className="text-left flex flex-col">
            <div className="flex flex-col pl-2">
              <h1 className="font-bold text-xl">Welcome To Createss</h1>
              <h1 className="py-4">
                Feeling curious? You're in the right place. Browse our most
                popular questions and get the answers you're{" "}
                <p>
                  {" "}
                  looking for - if something isn't there, just let us know!
                </p>
              </h1>
            </div>
          </div>

          <div className="flex max-[720px]:flex-col">
            <div className="grid gap-y-10 gap-x-6 px-2 mb-3 w-full">
              <div className="pl-2 rounded-3xl border border-slate-300 shadow-md text-black text-left py-6 bg-white">
                <div className="">
                  <h1 className="text-sky-600 font-bold pb-4">
                    ABOUT CREATESS
                  </h1>
                  <p className="font-normal text-md py-4 text-black">
                    New to Createss? Start here!
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-y-10 gap-x-6 px-2 mb-3 w-full">
              <div className="pl-2 rounded-3xl border border-slate-300 shadow-md text-black text-left py-6 bg-white">
                <div className="">
                  <h1 className="text-sky-600 font-bold pb-4">
                    VERIFICATION AND SAFETY
                  </h1>
                  <p className="font-normal text-md py-4 text-black">
                    Learn how to get verified on Blossm and what we look for.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-[720px]:flex-col">
            <div className="grid gap-y-10 gap-x-6 px-2 mb-3 w-full">
              <div className="pl-2 rounded-3xl border border-slate-300 shadow-md text-black text-left py-6 bg-white">
                <div className="">
                  <h1 className="text-sky-600 font-bold pb-4">BUYING PROMO</h1>
                  <p className="font-normal text-md py-4 text-black">
                    Best practices, tips, and tricks on how to shop for promo.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-y-10 gap-x-6 px-2 mb-3 w-full">
              <div className="pl-2 rounded-3xl border border-slate-300 shadow-md text-black text-left py-6 bg-white">
                <div className="">
                  <h1 className="text-sky-600 font-bold pb-4">SELLING PROMO</h1>
                  <p className="font-normal text-md py-4 text-black">
                    Blossm's guide to effectively selling promo.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-y-10 gap-x-6 px-2 mb-3">
            <div className="rounded-3xl border border-slate-300 shadow-md text-black text-center py-6 bg-white">
              <div className="">
                <h1 className="text-sky-600 font-bold py-4">
                  Didn’t find what you were looking for?
                </h1>
                <p className="font-normal text-md py-4 text-black">
                  Let us help you!
                </p>
              </div>
              <div className="mt-4">
                <button
                  className="select-none text-sm rounded-2xl bg-sky-600 border border-sky-600 py-2 px-3 text-center align-middle font-sans font-bold uppercase text-white shadow-md shadow-sky-500/20 transition-all hover:bg-sky-600 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  <a href="">Submit A Request</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
