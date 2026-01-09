"use client";

import AppCard from "@/components/app-card";
import Image from "next/image";

export default function DashboardWelcomePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-purple-500 text-white p-6 rounded-lg flex items-center justify-between mb-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Hi, Alyssa</h1>
          <h2 className="text-sm font-medium">Ready to start your day?</h2>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/welcome-dashboard.svg" // Replace with the correct path to your image file
            alt="Person working on a laptop"
            width={120}
            height={120}
            priority
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <AppCard link="/dashboard/book/new" title="Save A Book" />
        <AppCard
          link="/dashboard/book"
          title="Manage Your Book"
          bgColor="bg-orange-300"
        />
      </div>
    </div>
  );
}
