import { formatDistanceToNow } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "@/components/ui/button";

interface Invoice {
  id: string;
  client: string;
  amount: number;
  date: string;
  status: "paid" | "pending" | "overdue";
}

interface InvoiceCardProps {
  invoice: Invoice;
  viewMode: "grid" | "row";
}

export default function InvoiceCard({ invoice, viewMode }: InvoiceCardProps) {
  const statusColors = {
    paid: "bg-green-100 text-green-800 hover:bg-green-200",
    pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
    overdue: "bg-red-100 text-red-800 hover:bg-red-200",
  };

  const formattedDate = formatDistanceToNow(new Date(invoice.date), {
    addSuffix: true,
  });

  return (
    <Card
      className={`overflow-hidden transition-all duration-200 hover:shadow-md ${viewMode === "row" ? "w-full" : ""}`}
    >
      <CardContent
        className={`p-0 ${viewMode === "row" ? "flex items-center justify-between" : "flex flex-col"}`}
      >
        <div
          className={`p-5 ${viewMode === "row" ? "flex flex-1 items-center gap-4" : "w-full"}`}
        >
          <div
            className={
              viewMode === "row"
                ? "flex w-full items-center justify-between"
                : ""
            }
          >
            <div className={viewMode === "row" ? "flex-1" : ""}>
              <div
                className={
                  viewMode === "row"
                    ? "flex items-center gap-4"
                    : "mb-4 space-y-2"
                }
              >
                <div className={viewMode === "row" ? "w-32" : ""}>
                  <p className="text-muted-foreground text-sm">Invoice</p>
                  <p className="font-medium">{invoice.id}</p>
                </div>
                <div className={viewMode === "row" ? "w-48" : ""}>
                  <p className="text-muted-foreground text-sm">Client</p>
                  <p className="font-medium">{invoice.client}</p>
                </div>
              </div>
            </div>

            <div
              className={
                viewMode === "row"
                  ? "flex items-center gap-4"
                  : "flex items-center justify-between"
              }
            >
              <div className={viewMode === "row" ? "w-32 text-right" : ""}>
                <p className="text-muted-foreground text-sm">Amount</p>
                <p className="font-medium">
                  $
                  {invoice.amount.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div className={viewMode === "row" ? "w-32 text-right" : ""}>
                <p className="text-muted-foreground text-sm">Date</p>
                <p className="font-medium">{formattedDate}</p>
              </div>
              <div className={viewMode === "row" ? "w-24 text-right" : ""}>
                <Badge
                  className={`font-normal ${statusColors[invoice.status]} capitalize`}
                  variant="outline"
                >
                  {invoice.status}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${viewMode === "row" ? "py-3 pr-5 pl-4" : "p-3"}`}
        >
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-between hover:bg-transparent hover:text-primary"
          >
            <span>View details</span>
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
