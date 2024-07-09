'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const ComingSoon = () => {
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 90);
    return date;
  });

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full h-screen" style={{ backgroundImage: "url('https://vojislavd.com/ta-template-demo/assets/img/coming-soon.jpg')" }}>
      <div className="w-full h-screen bg-black bg-opacity-70">
        <div className="w-full h-full flex flex-col items-start justify-between container mx-auto py-8 px-8 lg:px-4 xl:px-0">
          <div className="bg-white bg-opacity-10 px-4 py-2 rounded-xl flex items-center justify-center text-cyan-100 space-x-4">
            <Image src="/logo.png" alt='logo' width={200} height={100} />
          </div>
          <div className="flex-1 flex flex-col items-start justify-center">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center md:text-left">
              We Are <span className="text-yellow-300">Coming</span> Soon
            </h1>
            <div className="mt-12 flex flex-col items-center mt-8 ml-2">
              <p className="text-gray-300 uppercase text-sm">Time left until launching</p>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <div className="flex flex-col items-center px-4">
                  {/* @ts-ignore */}
                  <span className="text-4xl lg:text-5xl text-gray-200">{timeLeft.days || '00'}</span>
                  <span className="text-gray-400 mt-2">Days</span>
                </div>
                <span className="w-[1px] h-24 bg-gray-400"></span>
                <div className="flex flex-col items-center px-4">
                  {/* @ts-ignore */}
                  <span className="text-4xl lg:text-5xl text-gray-200">{timeLeft.hours || '00'}</span>
                  <span className="text-gray-400 mt-2">Hours</span>
                </div>
                <span className="w-[1px] h-24 bg-gray-400"></span>
                <div className="flex flex-col items-center px-4">
                  {/* @ts-ignore */}
                  <span className="text-4xl lg:text-5xl text-gray-200">{timeLeft.minutes || '00'}</span>
                  <span className="text-gray-400 mt-2">Minutes</span>
                </div>
                <span className="w-[1px] h-24 bg-gray-400"></span>
                <div className="flex flex-col items-center px-4">
                  {/* @ts-ignore */}
                  <span className="text-4xl lg:text-5xl text-gray-200">{timeLeft.seconds || '00'}</span>
                  <span className="text-gray-400 mt-2">Seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
