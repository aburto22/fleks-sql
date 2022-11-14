"use client";

import { useEffect, useState } from "react";
import { parse } from "superjson";
import data from "../data/query";
import { TApiResponse } from "../types";
import Query from "./Query";
import Result from "./Result";

export default function Container() {
  const [query, setQuery] = useState(data.query);
  const [result, setResult] = useState<Array<Record<string, string>>>();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchResult = async () => {
      const res = await fetch("/api/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const data = parse<TApiResponse>(await res.text());

      if (data.status === "error") {
        setError(data.message);
        setResult(undefined);
        return;
      }

      setResult(data.data);
      setError("");
    };

    if (query) {
      fetchResult();
    }
  }, [query]);

  return (
    <main className="max-w-screen-lg p-4 pb-8 mx-auto">
      <Query query={query} setQuery={setQuery} />
      <p className="text-lg text-center text-red-500">{error}</p>
      <Result result={result} />
    </main>
  );
}
