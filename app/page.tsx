"use client";
import { useEffect, useState } from "react";
import VerticalCard from "./components/cards/VerticalCard";
import { NewsProps } from "./interfaces";
import HorizontalCard from "./components/cards/HorizontalCard";
import axios from "axios";
import Spinner from "./components/spinner/Spinner";

export default function Home() {
  const [data, setData] = useState<NewsProps[]>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://66976cd002f3150fb66d8c73.mockapi.io/api/v1/news"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {loader ? (
        <Spinner />
      ) : (
        <div className="news grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {data.map((item) => (
            <VerticalCard key={item.id} {...item} />
          ))}
        </div>
      )}
      <div className="flex flex-wrap ">
        {loader ? (
          <Spinner />
        ) : (
          <div className="horizontal-news flex flex-col gap-4 w-3/4">
            {data.map((item) => (
              <HorizontalCard key={item.id} {...item} />
            ))}
          </div>
        )}
        <div className="w-1/4 flex flex-col">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
