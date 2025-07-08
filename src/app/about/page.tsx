"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function About() {
  const searchParams = useSearchParams();
  // 使用entries()方法将URLSearchParams对象转换为可迭代的键值对数组
  // 每个键值对都是一个包含两个元素的数组：[参数名, 参数值]
  // 例如：如果URL是 /about?test=123&name=john
  // entries()将返回：[['test', '123'], ['name', 'john']]
  // Array.from()将这个可迭代对象转换为真正的数组
  console.log("All search params:", Array.from(searchParams.entries()));
  const test = searchParams.get("test");
  console.log("test param value:", test);

  const [getResult, setGetResult] = useState(null);
  const [postResult, setPostResult] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleGet = async () => {
    const res = await fetch("/api/hello?hello=world");
    const data = await res.json();
    setGetResult(data);
  };

  const handlePost = async () => {
    const res = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ data: inputValue })
    });
    const data = await res.json();
    setPostResult(data);
  };

  return (
    <div>
      <h1>About Page</h1>

      <div>
        <h2>GET Request</h2>
        <button onClick={handleGet}>Test GET</button>
        {getResult && <pre>{JSON.stringify(getResult, null, 2)}</pre>}
      </div>

      <div>
        <h2>POST Request</h2>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter data"
        />
        <button onClick={handlePost}>Test POST</button>
        {postResult && <pre>{JSON.stringify(postResult, null, 2)}</pre>}
      </div>
    </div>
  );
}
