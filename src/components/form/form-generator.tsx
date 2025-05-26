"use client";
import React, { type JSX, useState } from "react";
import { InvoicePreview } from "./invoice-prview";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { InvoiceRawPreview } from "./invoice-raw-preview";
import { BackButton } from "../module/back-button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DatePicker } from "../module/data-picker";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { generatePDF } from "@/lib/pdf";
import {
  FileText,
  UserCheck,
  UserPen,
  ShoppingCart,
  Printer,
} from "lucide-react";

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
  email: string;
}

interface Product {
  name: string;
  quantity: number;
  price: number;
}

export function FormGenerator(): JSX.Element {
  const [client, setClient] = useState<Client>({
    name: "",
    address: "",
    email: "",
  });
  const [seller, setSeller] = useState<Seller>({
    name: "",
    address: "",
    email: "",
  });
  const [products, setProducts] = useState<Product[]>([
    { name: "", quantity: 0, price: 0 },
  ]);
  const [invoice, setInvoice] = useState<Invoice>({
    id: "",
    issueDate: "",
    dueDate: "",
  });

  const [issueDate, setIssueDate] = useState<Date | undefined>();
  const [dueDate, setDueDate] = useState<Date | undefined>();

  const handleClientChange = (field: keyof Client, value: string) => {
    setClient({ ...client, [field]: value });
  };

  const handleSellerChange = (field: keyof Seller, value: string) => {
    setSeller({ ...seller, [field]: value });
  };

  const handleProductChange = (
    index: number,
    field: keyof Product,
    value: string | number,
  ) => {
    const newProducts = [...products];
    newProducts[index] = { ...newProducts[index], [field]: value };
    setProducts(newProducts);
  };

  const handleInvoiceChange = (field: keyof Invoice, value: string) => {
    setInvoice({ ...invoice, [field]: value });
  };

  const addProduct = () => {
    setProducts([...products, { name: "", quantity: 0, price: 0 }]);
  };

  return (
    <div className="mx-auto max-w-7xl p-4">
      <div className="mb-4 flex items-center justify-between">
        <BackButton
          title="Back Home"
          href="/home"
          className=""
        />
        <Button
          onClick={generatePDF}
          className="w-full cursor-pointer rounded bg-primary p-2 text-white hover:bg-primary/80 sm:w-auto"
        >
          <Printer className="size-4" />
          Generate PDF
        </Button>
      </div>
      <h1 className="mb-6 text-center font-bold text-3xl md:text-left">
        Invoice Generator
      </h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Tabs
          defaultValue="info"
          className="w-full"
        >
          <TabsList>
            <TabsTrigger value="info">Info</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>

          {/* Form Section */}
          <TabsContent value="info">
            <div className="space-y-4">
              {/* Invoice Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-lg">
                    <FileText className="size-5" />
                    Invoice Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 space-y-4 md:flex-row">
                  <div className="space-y-2">
                    <label
                      htmlFor="invoiceNumber"
                      className="font-medium text-sm"
                    >
                      Invoice Number #
                    </label>
                    <Input
                      id="invoiceNumber"
                      name="invoiceNumber"
                      placeholder="#123456"
                      value={invoice.id}
                      onChange={(e) =>
                        handleInvoiceChange("id", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="issueDate"
                      className="font-medium text-sm"
                    >
                      Issue Date
                    </label>
                    <Input
                      id="issueDate"
                      name="issueDate"
                      placeholder="DD/MM/YYYY"
                      value={invoice.issueDate}
                      onChange={(e) =>
                        handleInvoiceChange("issueDate", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="dueDate"
                      className="font-medium text-sm"
                    >
                      Due Date
                    </label>
                    <Input
                      id="dueDate"
                      name="dueDate"
                      placeholder="DD/MM/YYYY"
                      value={invoice.dueDate}
                      onChange={(e) =>
                        handleInvoiceChange("dueDate", e.target.value)
                      }
                    />
                  </div>
                </CardContent>
              </Card>
              {/* Client Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-lg">
                    <UserCheck className="size-5" />
                    Client Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 space-y-4 md:flex-row">
                  <div className="space-y-2">
                    <label
                      htmlFor="clientName"
                      className="font-medium text-sm"
                    >
                      Client Name
                    </label>
                    <Input
                      id="clientName"
                      name="clientName"
                      placeholder="John Doe"
                      value={client.name}
                      onChange={(e) =>
                        handleClientChange("name", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="clientAddress"
                      className="font-medium text-sm"
                    >
                      Client Address
                    </label>
                    <Input
                      id="clientAddress"
                      name="clientAddress"
                      placeholder="123 Main St, City, Country"
                      value={client.address}
                      onChange={(e) =>
                        handleClientChange("address", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="clientEmail"
                      className="font-medium text-sm"
                    >
                      Client Email
                    </label>
                    <Input
                      id="clientEmail"
                      name="clientEmail"
                      type="email"
                      placeholder="client@example.com"
                      value={client.email}
                      onChange={(e) =>
                        handleClientChange("email", e.target.value)
                      }
                    />
                  </div>
                </CardContent>
              </Card>
              {/* Seller Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-lg">
                    <UserPen className="size-5" />
                    Seller Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 space-y-4 md:flex-row">
                  <div className="space-y-2">
                    <label
                      htmlFor="sellerName"
                      className="font-medium text-sm"
                    >
                      Seller Name
                    </label>
                    <Input
                      id="sellerName"
                      name="sellerName"
                      placeholder="Jane Smith"
                      value={seller.name}
                      onChange={(e) =>
                        handleSellerChange("name", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="sellerAddress"
                      className="font-medium text-sm"
                    >
                      Seller Address
                    </label>
                    <Input
                      id="sellerAddress"
                      name="sellerAddress"
                      placeholder="456 Elm St, City, Country"
                      value={seller.address}
                      onChange={(e) =>
                        handleSellerChange("address", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="sellerEmail"
                      className="font-medium text-sm"
                    >
                      Seller Email
                    </label>
                    <Input
                      id="sellerEmail"
                      name="sellerEmail"
                      type="email"
                      placeholder="seller@example.com"
                      value={seller.email}
                      onChange={(e) =>
                        handleSellerChange("email", e.target.value)
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          {/* Products Section */}
          <TabsContent value="products">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-4 text-lg">
                    <ShoppingCart className="size-5" />
                    Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {products.map((product, index) => (
                    <div
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      key={index}
                      className="mb-2 flex flex-col gap-4 sm:flex-row sm:gap-6"
                    >
                      <div>
                        <label
                          htmlFor={`productName-${index}`}
                          className="font-medium text-sm"
                        >
                          Product Name
                        </label>
                        <Input
                          type="text"
                          placeholder="Product Name"
                          value={product.name}
                          onChange={(e) =>
                            handleProductChange(index, "name", e.target.value)
                          }
                          className="w-full rounded-md border p-2"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`productQuantity-${index}`}
                          className="font-medium text-sm"
                        >
                          Quantity
                        </label>
                        <Input
                          type="number"
                          placeholder="Quantity"
                          value={product.quantity}
                          onChange={(e) =>
                            handleProductChange(
                              index,
                              "quantity",
                              Number.parseInt(e.target.value),
                            )
                          }
                          className="w-full rounded-md border p-2"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor={`productPrice-${index}`}
                          className="font-medium text-sm"
                        >
                          Price
                        </label>
                        <Input
                          type="number"
                          placeholder="Price"
                          value={product.price}
                          onChange={(e) =>
                            handleProductChange(
                              index,
                              "price",
                              Number.parseFloat(e.target.value),
                            )
                          }
                          className="w-full rounded-md border p-2"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Button
                onClick={addProduct}
                className="w-full rounded bg-primary p-2 text-white hover:bg-primary-dark sm:w-auto"
              >
                Add Product
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            Live Invoice Preview
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-green-500" />
            </span>
          </h2>
          <div className="rounded-md border bg-gray-50 p-4">
            <InvoicePreview
              invoice={invoice}
              client={client}
              seller={seller}
              products={products}
            />
          </div>
        </div>

        {/* Preview Section */}
      </div>
      {/* Hidden Raw Preview for PDF Generation */}
      <div
        id="invoice-preview"
        style={{
          position: "absolute",
          top: 0,
          left: "-9999px",
          width: "800px",
          zIndex: -1,
          background: "#faf9f5",
          padding: "20px",
        }}
      >
        <InvoiceRawPreview
          invoice={invoice}
          client={client}
          seller={seller}
          products={products}
        />
      </div>
    </div>
  );
}
