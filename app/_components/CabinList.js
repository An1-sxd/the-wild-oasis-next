import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";
import { unstable_noStore as noStore } from "next/cache";

async function CabinList({ capacity }) {
  // noStore(); // Disable caching for this component

  const cabins = await getCabins();

  const filteredCabins =
    capacity === "small"
      ? cabins.filter(
          (cabin) => cabin.maxCapacity >= 1 && cabin.maxCapacity <= 3,
        )
      : capacity === "medium"
        ? cabins.filter(
            (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
          )
        : capacity === "large"
          ? cabins.filter(
              (cabin) => cabin.maxCapacity >= 8 && cabin.maxCapacity <= 12,
            )
          : capacity === "all"
            ? cabins
            : [];

  if (!filteredCabins.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
