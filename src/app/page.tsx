import Dashboard from "./component/dashboard";
import SideBar from "./component/sideBar";

export default function Home() {
  return (
    <section className="h-full">
      <SideBar/>
      <Dashboard/>
    </section>
  );
}
