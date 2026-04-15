import Dashboard from "../components/dashboard";
import SideBar from "../components/sidebar";

export default function Home() {
  return (
    <section className="h-full">
      <SideBar/>
      <Dashboard/>
    </section>
  );
}
