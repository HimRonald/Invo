"use client";

import { useState } from "react";
import { Grid2X2, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import InvoiceCard from "./card";

// Invoice type definition
type Invoice = {
  id: string;
  client: string;
  amount: number;
  date: string;
  status: "paid" | "pending" | "overdue";
};

// Sample invoice data
const invoices: Invoice[] = [
  {
    id: "INV-001",
    client: "Acme Corp",
    amount: 1250.0,
    date: "2024-05-15",
    status: "paid",
  },
  {
    id: "INV-002",
    client: "Globex Inc",
    amount: 850.75,
    date: "2024-05-10",
    status: "pending",
  },
  {
    id: "INV-003",
    client: "Stark Industries",
    amount: 3200.5,
    date: "2024-05-05",
    status: "paid",
  },
  {
    id: "INV-004",
    client: "Wayne Enterprises",
    amount: 1750.25,
    date: "2024-04-28",
    status: "overdue",
  },
  {
    id: "INV-005",
    client: "Umbrella Corp",
    amount: 920.0,
    date: "2024-04-20",
    status: "pending",
  },
  {
    id: "INV-006",
    client: "Cyberdyne Systems",
    amount: 1500.0,
    date: "2024-04-15",
    status: "paid",
  },
];

export default function InvoiceCards() {
  const [viewMode, setViewMode] = useState<"grid" | "row">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInvoices = invoices.filter(
    (invoice) =>
      invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      invoice.client.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between space-x-2">
        <h1 className="font-bold text-4xl">Invoices</h1>
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
            aria-label="Grid view"
          >
            <Grid2X2 className="size-4" />
          </Button>
          <Button
            variant={viewMode === "row" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("row")}
            aria-label="Row view"
          >
            <List className="size-4" />
          </Button>
        </div>
      </div>

      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            : "flex flex-col space-y-4"
        }
      >
        {filteredInvoices.map((invoice) => (
          <InvoiceCard
            key={invoice.id}
            invoice={invoice}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
}
