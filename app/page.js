"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState([]);

  const functionData = async () => {
    const response = await fetch(
      `https://65786cfaf08799dc804548db.mockapi.io/todos`
    );
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    functionData();
  }, []);
  return (
    <>
      <div className="w-full flex flex-wrap min-h-screen">
        <h1>Client Side Rendering</h1>
        {todos.map((cur, i) => {
          return (
            <div key={i} className="border w-1/3 mx-4 my-2">
              <p>{cur.title}</p>
              <p>{cur.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
