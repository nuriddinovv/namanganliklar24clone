import { NewsProps } from "@/app/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function HorizontalCard(props: NewsProps) {
  return (
    <Link href={"/"} className="flex">
      <div className="w-1/4 flex items-center justify-center ">
        <Image
          width={252}
          height={143}
          alt="content"
          className="rounded"
          src={props.image}
        />
      </div>
      <div className="w-3/4 flex flex-col justify-between p-4">
        <h1 className="text-[17px] font-bold">{props.title}</h1>
        <p>{props.description}</p>
        <p className="text-gray-400 flex items-center gap-2">
          <FaCalendarAlt />
          {props.data}
        </p>
      </div>
    </Link>
  );
}
