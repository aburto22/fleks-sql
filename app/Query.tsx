"use client";

import React, { useState } from "react";

type QueryProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function Query({ query, setQuery }: QueryProps) {
  const [input, setInput] = useState(query);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center max-w-screen-lg gap-2 mx-auto mb-6"
    >
      <textarea
        className="w-full p-4 rounded-lg shadow-lg resize-none bg-gray-50 h-112"
        spellCheck={false}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="flex px-8 py-2 mt-4 font-semibold text-white transition-colors border-2 rounded-full shadow-lg bg-fleks-dark border-fleks-dark hover:bg-white hover:text-fleks-dark"
      >
        Get Data
      </button>
    </form>
  );
}
