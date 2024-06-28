"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [changeService, setChangeService] = useState("Quartr Core");

  type Offer = {
    id: number;
    title: string;
    description: string;
    image: string;
  };

  const quartrOffer: Offer[] = [
    {
      id: 1,
      title: "Quartr Core",
      description:
        "Our web app tier designed for personal desktop use. Quartr Core simplifies tracking and researching the qualitative aspects of public companies.",
      image: "/img/quartr_core.webp",
    },
    {
      id: 2,
      title: "Mobile App",
      description:
        "The #1 free app for live earnings calls, searchable and timestamped transcripts connected to each event, earnings reports, slide decks, consensus estimates, and much more.",
      image: "/img/quartr_mobile_app.webp",
    },
    {
      id: 3,
      title: "Api",
      description:
        "Build your own custom solutions using our unique API, covering live and recorded events such as earnings calls and capital markets days from public companies globally.",
      image: "/img/quartr_api.webp",
    },
    {
      id: 4,
      title: "Quartr Pro",
      description:
        "Our web app tier designed for business desktop use. Quartr Pro assists leading finance professionals worldwide to increase productivity and unlock qualitative insights.",
      image: "/img/quartr_pro.webp",
    },
  ];

  return (
    <main className='w-dvw h-dvh md:py-24 bg-gradient-to-b md:bg-gradient-to-r from-gray-500 to-gray-950'>
      <div className='h-full py-12 md:py-0 md:flex md:flex-row items-center justify-center space-y-14 md:space-x-10 md:space-y-0'>
        <div className='flex flex-col items-center space-y-4 md:ml-20'>
          <h1 className='text-5xl md:text-7xl lg:text-8xl uppercase font-semibold text-white/90 text-center'>
            Go beyond numbers
          </h1>
          <div className='text-md md:text-2xl text-center text-white max-w-lg'>
            Transforming the way finance professionals conduct qualitative
            public market research.
          </div>
          <button
            type='button'
            className='px-6 py-4 rounded-md bg-blue-600 text-white transition-all hover:bg-blue-700 '
          >
            Get started
          </button>
        </div>
        <div>
          {quartrOffer.map((offer) => (
            <div key={offer.id}>
              {changeService === offer.title && (
                <>
                  <Image
                    src={offer.image}
                    alt={`${offer.title} image`}
                    width={800}
                    height={800}
                    priority
                  ></Image>
                  <div className='hidden md:relative md:flex md:justify-center md:items-center'>
                    <p className='md:absolute md:rounded-md md:text-white md:bottom-[-5rem] md:p-4 md:bg-gray-400/90 mw-11/12'>
                      {offer.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='md:px-28 px-4 w-full text-xs md:text-base absolute bottom-8 flex justify-between items-center'>
        {quartrOffer.map((offer) => (
          <p
            key={offer.id}
            className={`cursor-pointer  uppercase underline underline-offset-8 decoration-4, ${
              offer.title === changeService
                ? "font-bold underline-offset-8 decoration-4 text-gray-50"
                : "font-normal text-gray-400"
            }`}
          >
            <span onClick={() => setChangeService(offer.title)}>
              {offer.title}
            </span>
          </p>
        ))}
      </div>
    </main>
  );
}
