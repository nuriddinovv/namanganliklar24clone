"use client";

import { NewsProps } from "@/app/interfaces";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export default function VerticalCard(props: NewsProps) {
  const router = useRouter();
  return (
    <div
      className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
      onClick={() => {
        router.push(`/lorem`);
      }}
    >
      <Image
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={props.image}
        width={721}
        height={401}
        alt="blog"
      />
      <div className="p-6">
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          {props.title}
        </h1>
        <p className="leading-relaxed mb-3 line-clamp-2">{props.description}</p>
        <div className="flex items-center justify-between flex-wrap">
          <span>{props.data}</span>
          <span className="flex items-center cursor-pointer">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            {props.view}
          </span>
        </div>
      </div>
    </div>
  );
}
