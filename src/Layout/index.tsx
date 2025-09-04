import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="wrapper font-iranYekan-400">
        <Outlet />
      </main>
      <footer className="wrapper mt-14"> footer </footer>
    </>
  );
}
