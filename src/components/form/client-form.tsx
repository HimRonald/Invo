"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { DatePicker } from "../module/data-picker";
interface Invoice {
    id: string;
    issueDate: string;
    dueDate: string;
  }

  interface Client {
    name: string;
    address: string;
    email: string;
  }

  interface Seller {
    name: string;
    address: string;
    email?: string;
  }

  interface Product {
    name: string;
    quantity: number;
    price: number;
  }

interface InvoiceFormSectionProps {
  client: Client;
  seller: Seller;
  products: Product[];
  handleClientChange: (field: keyof Client, value: string) => void;
  handleSellerChange: (field: keyof Seller, value: string) => void;
  handleProductChange: (
    index: number,
    field: keyof Product,
    value: string | number
  ) => void;
  addProduct: () => void;
  issueDate: Date | undefined;
  dueDate: Date | undefined;
  setIssueDate: (date: Date | undefined) => void;
  setDueDate: (date: Date | undefined) => void;
  invoiceNumber: string;
  onInvoiceNumberChange: (value: string) => void;
  onGeneratePDF: () => void;
}

export function InvoiceFormSection({
  client,
  seller,
  products,
  handleClientChange,
  handleSellerChange,
  handleProductChange,
  addProduct,
  issueDate,
  dueDate,
  setIssueDate,
  setDueDate,
  invoiceNumber,
  onInvoiceNumberChange,
  onGeneratePDF,
}: InvoiceFormSectionProps) {
  return (
    <div className="space-y-4">
      {/* Invoice Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Invoice Details</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 space-y-4 md:flex-row">
          <div className="space-y-2">
            <label htmlFor="invoiceNumber" className="font-medium text-sm">
              Invoice Number #
            </label>
            <Input
              id="invoiceNumber"
              placeholder="#123456"
              value={invoiceNumber}
              onChange={(e) => onInvoiceNumberChange(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <span>Issue Date</span>
            <DatePicker date={issueDate} onChange={setIssueDate} />
          </div>
          <div className="space-y-2">
            <span>Due Date</span>
            <DatePicker date={dueDate} onChange={setDueDate} />
          </div>
        </CardContent>
      </Card>

      {/* Client Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Client Information</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 space-y-4 md:flex-row">
          <div className="space-y-2">
            <label htmlFor="clientName" className="font-medium text-sm">
              Client Name
            </label>
            <Input
              id="clientName"
              placeholder="John Doe"
              value={client.name}
              onChange={(e) => handleClientChange("name", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="clientAddress" className="font-medium text-sm">
              Client Address
            </label>
            <Input
              id="clientAddress"
              placeholder="123 Main St, City"
              value={client.address}
              onChange={(e) => handleClientChange("address", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="clientEmail" className="font-medium text-sm">
              Client Email
            </label>
            <Input
              id="clientEmail"
              type="email"
              placeholder="client@example.com"
              value={client.email}
              onChange={(e) => handleClientChange("email", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Seller Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Seller Information</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 space-y-4 md:flex-row">
          <div className="space-y-2">
            <label htmlFor="sellerName" className="font-medium text-sm">
              Seller Name
            </label>
            <Input
              id="sellerName"
              placeholder="Jane Smith"
              value={seller.name}
              onChange={(e) => handleSellerChange("name", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="sellerAddress" className="font-medium text-sm">
              Seller Address
            </label>
            <Input
              id="sellerAddress"
              placeholder="456 Elm St, City"
              value={seller.address}
              onChange={(e) => handleSellerChange("address", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="sellerEmail" className="font-medium text-sm">
              Seller Email
            </label>
            <Input
              id="sellerEmail"
              type="email"
              placeholder="seller@example.com"
              value={seller.email}
              onChange={(e) => handleSellerChange("email", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Products */}
      <div className="space-y-4">
        <h2 className="font-semibold text-xl">Products</h2>
        {products.map((product, index) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            className="mb-2 flex flex-col gap-4 sm:flex-row sm:gap-6"
          >
            <Input
              placeholder="Product Name"
              value={product.name}
              onChange={(e) =>
                handleProductChange(index, "name", e.target.value)
              }
            />
            <Input
              type="number"
              placeholder="Quantity"
              value={product.quantity}
              onChange={(e) =>
                handleProductChange(index, "quantity", +e.target.value)
              }
            />
            <Input
              type="number"
              placeholder="Price"
              value={product.price}
              onChange={(e) =>
                handleProductChange(index, "price", +e.target.value)
              }
            />
          </div>
        ))}
        <Button onClick={addProduct} className="w-full sm:w-auto">
          Add Product
        </Button>
      </div>

      <Button onClick={onGeneratePDF} className="w-full sm:w-auto">
        Generate PDF
      </Button>
    </div>
  );
}
