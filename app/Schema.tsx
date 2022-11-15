"use client";

import Image from "next/image";
import { useState } from "react";
import schema from "../public/assets/schema.png";

export default function Schema() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-8">
      <button
        className="px-4 py-2 font-semibold text-white rounded-full bg-fleks-light"
        type="button"
        onClick={() => setIsShowing((is) => !is)}
      >
        {isShowing ? "Hide Schema" : "Show Schema"}
      </button>
      {isShowing && <Image src={schema} alt="Schema of Fleks SQL DB" />}
    </div>
  );
}
