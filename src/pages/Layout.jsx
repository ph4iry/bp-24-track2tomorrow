import { Outlet, Link } from "react-router-dom";
import "../App.css";

export default function Layout() {
  return (
    <div className="overflow-hidden">
      <div className="w-full bg-blue-500 h-24 flex px-20 items-center">
        <h1 className="font-bold text-3xl text-black text-center">Track2Tomorrow</h1>
      </div>
      <div className="w-full min-h-screen flex flex-col px-20 py-8">
        <Outlet />
      </div>
    </div>
  );
}
