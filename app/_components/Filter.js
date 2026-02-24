"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const capacity = searchParams.get("capacity") || "all";

  function handleCapacityChange(newCapacity) {
    // clone existing params
    const params = new URLSearchParams(searchParams.toString());

    // set new value
    params.set("capacity", newCapacity);

    // update URL
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="border border-primary-800 flex">
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${capacity === "all" ? "bg-primary-700" : ""}`}
        onClick={() => handleCapacityChange("all")}
      >
        All cabins
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${capacity === "small" ? "bg-primary-700" : ""}`}
        onClick={() => handleCapacityChange("small")}
      >
        1&mdash;3 guests
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${capacity === "medium" ? "bg-primary-700" : ""}`}
        onClick={() => handleCapacityChange("medium")}
      >
        4&mdash;7 guests
      </button>
      <button
        className={`px-5 py-2 hover:bg-primary-700 ${capacity === "large" ? "bg-primary-700" : ""}`}
        onClick={() => handleCapacityChange("large")}
      >
        8&mdash;12 guests
      </button>
    </div>
  );
}

export default Filter;
