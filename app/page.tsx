import { Suspense } from "react";
import HomeClient from "./home-client";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="text-center p-10 text-gray-500">
          Loading movies...
        </div>
      }
    >
      <HomeClient />
    </Suspense>
  );
}
