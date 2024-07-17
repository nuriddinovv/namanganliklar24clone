"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaTelegram } from "react-icons/fa";
import nrgBanner from "../../../public/nrg-banner.png";
export default function Navbar() {
  const category = [
    {
      name: "Узбекистана",
      path: "/uzbekistan",
    },
    {
      name: "Мир",
      path: "/world",
    },
    {
      name: "Экономика",
      path: "/economy",
    },
    {
      name: "Политика",
      path: "/policy",
    },
    {
      name: "Общество",
      path: "/society",
    },
    {
      name: "Технологии",
      path: "/technologies",
    },
    {
      name: "Спорт",
      path: "/sport",
    },
    {
      name: "Культура",
      path: "/culture",
    },
    {
      name: "Происшествия",
      path: "/incidents",
    },
    {
      name: "Туризм",
      path: "/tourism",
    },
  ];

  const [usd, setUsd] = useState<string | undefined>();
  const [rub, setRub] = useState<string | undefined>();
  const [euro, setEuro] = useState<string | undefined>();

  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/1bd57ccca0d63a2def831cda/latest/USD"
    )
      .then((response) => response.json())
      .then((data) => {
        const usdToUzs = data.conversion_rates.UZS;
        const rubToUzs = data.conversion_rates.UZS / data.conversion_rates.RUB;
        const eurToUzs = data.conversion_rates.UZS / data.conversion_rates.EUR;
        setUsd(usdToUzs.toFixed(2));
        setRub(rubToUzs.toFixed(2));
        setEuro(eurToUzs.toFixed(2));
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="bg-gray-100 ">
      <div className="flex items-center justify-between container py-10">
        <div className="flex items-center gap-6">
          <h1 className="font-bold text-[28px] text-[#295091]">
            NAMANGANLIKLAR24
          </h1>
          <div className="flex gap-5 text-gray-500">
            <p>
              <span className="text-[#295091] font-bold">$</span>
              {usd}
            </p>
            <p>
              <span className="text-[#295091] font-bold">₽</span>
              {rub}
            </p>
            <p>
              <span className="text-[#295091] font-bold">€</span>
              {euro}
            </p>
          </div>
        </div>
        <button className="flex gap-4 bg-gradient-to-r from-[#1E96C8] to-[#37AEE2] items-center p-3 rounded text-white text-[16px]">
          <FaTelegram />
          Подписатся
        </button>
      </div>
      <div className="container mb-8">
        <ul className="flex justify-between px-[25px] py-[20px] bg-white rounded">
          {category.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="container pb-4">
        <Image width={1200} height={99} alt="image" src={nrgBanner} />
      </div>
    </div>
  );
}
