import React from "react";
import Container from "./Container";

export default function WeatherSkeleton() {
  return (
    <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
      {/* today */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="flex gap-1 text-2xl items-end animate-pulse">
            <p className="bg-gray-300 rounded w-24 h-6"></p>
            <p className="bg-gray-300 rounded w-32 h-5"></p>
          </h2>
          <Container className="gap-10 px-6 items-center">
            {/* temperature */}
            <div className="flex flex-col px-4 animate-pulse">
              <span className="bg-gray-300 rounded w-20 h-12"></span>
              <p className="text-xs space-x-1 whitespace-nowrap">
                <span className="bg-gray-300 rounded w-16 h-4"></span>
                <span className="bg-gray-300 rounded w-12 h-4"></span>
              </p>
              <p className="text-xs space-x-2">
                <span className="bg-gray-300 rounded w-12 h-4"></span>
                <span className="bg-gray-300 rounded w-12 h-4"></span>
              </p>
            </div>
            {/* time and weather */}
            <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between pr-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col justify-between gap-2 items-center text-xs font-semibold animate-pulse"
                >
                  <p className="bg-gray-300 rounded w-16 h-4"></p>
                  <div className="bg-gray-300 rounded-full w-12 h-12"></div>
                  <p className="bg-gray-300 rounded w-12 h-4"></p>
                </div>
              ))}
            </div>
          </Container>
        </div>
        <div className="flex gap-4">
          <Container className="w-fit justify-center flex-col px-4 items-center animate-pulse">
            <p className="bg-gray-300 rounded w-32 h-4"></p>
            <div className="bg-gray-300 rounded-full w-16 h-16"></div>
          </Container>
          <Container className="bg-yellow-300/80 px-6 gap-4 justify-between overflow-x-auto animate-pulse">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="bg-gray-300 rounded w-20 h-4"></div>
                <div className="bg-gray-300 rounded w-32 h-4"></div>
                <div className="bg-gray-300 rounded w-16 h-4"></div>
              </div>
            ))}
          </Container>
        </div>
      </section>
      <section className="flex w-full flex-col gap-4">
        {/* 7 days forecast data */}
        <p className="text-2xl bg-gray-300 rounded w-40 h-6 animate-pulse"></p>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4 animate-pulse">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <div className="bg-gray-300 rounded w-16 h-4"></div>
                <div className="bg-gray-300 rounded w-16 h-4"></div>
              </div>
              <div className="bg-gray-300 rounded w-12 h-12"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-2">
                <div className="bg-gray-300 rounded w-20 h-4"></div>
                <div className="bg-gray-300 rounded w-16 h-4"></div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-gray-300 rounded w-16 h-4"></div>
                <div className="bg-gray-300 rounded w-12 h-4"></div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
