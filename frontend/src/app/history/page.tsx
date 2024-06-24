"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const getHistory = async () => {
    const response = await axios.get("http://localhost:5000/api/v1/history");
    setHistory(response.data);
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div>
      <header className="flex justify-between items-center bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold">
            Roadmap Generator via WebSockets
          </h1>
        </Link>
        <Link href={"/history"}>
          <h1 className="text-2xl font-md cursor-pointer">History</h1>
        </Link>
      </header>

      <div className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">History</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {history.map((item : any) => (
            <div key={item._id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HistoryPage;