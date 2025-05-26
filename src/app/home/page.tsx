import NavBar from "@/components/navbar/nav";
import InvoiceCards from "@/components/invoice/invoice-cards";
import Welcome from "@/components/module/home/welcome";
export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <NavBar />
      <div className="container mx-auto px-30 py-10">
        <Welcome />
        <InvoiceCards />
      </div>
    </div>
  );
}
