"use client";

import { useEffect, useState } from "react";
import { parse } from "superjson";
import { query as sqlQuery } from "../data/query";
import { TApiResponse, TQuery } from "../types";
import Query from "./Query";
import Result from "./Result";
import Warning from "./Warning";

export default function Container() {
  const [query, setQuery] = useState(sqlQuery);
  const [result, setResult] = useState<TQuery>();
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
    <main className="p-4 mx-auto pb-28 sm:px-8 max-w-screen-2xl">
      <Query query={query} setQuery={setQuery} />
      {error && <p className="text-lg text-center text-red-500">{error}</p>}
      {result && <Result result={result} />}
      <Warning />
    </main>
  );
}
