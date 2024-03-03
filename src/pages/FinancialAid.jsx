import "../App.css";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { RightArrowIcon } from '@heroicons/react/24/outline';

export default function FinancialAid() {
  return (
    <div className="w-full h-full">
      <a className="w-full flex gap-2" href="/">
        <RightArrowIcon className="h-7" /> <span>Back to home</span>
      </a>
      <div className="flex gap-3">
        
        <h1 className="font-bold text-3xl text-blue-500">Financial Aid</h1>
        {/* <span className="w-full h-5 bg-blue-500"></span> */}
      </div>
      <a className="w-full flex gap-2" href="/">
        <RightArrowIcon className="h-7" /> <span>Back to home</span>
      </a>
      <div className="w-full grid gap-3 grid-cols-3">
        <Card title="Estimate Financial Aid" description="Estimate federal financial aid from FAFSA" link="https://studentaid.gov/aid-estimator/" />
        <Card title="Scholarship Match Tools" description= "Find scholarships and financial aid" />
      </div>
    </div>
  );
}

function PFACalculator() {
  return (
    <div className="w-full h-full">
      <div className="text-3xl font-bold text-blue-500">Personal Financial Aid Calculator</div>
      
    </div>
  )
}

function Card({ title, description, link }) {
  return (
    <a href={link}>
      <div className="w-full rounded-lg bg-slate-200 relative block">
        <div className="card-header bg-gradient-to-br from-blue-300 to-indigo-400 rounded-t-lg h-18 w-full"></div>
        <div className="p-4">
          <div className="font-bold text-lg">{title}</div>
          <div className="text-sm">{description}</div>
        </div>
      </div>
    </a>
  );
}
