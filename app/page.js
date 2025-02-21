"use client";

import UsersList from "./users-list";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🚀 Next.js `useSWR` – Auto-Refreshing Data</h1>
      <UsersList />
    </div>
  );
}
