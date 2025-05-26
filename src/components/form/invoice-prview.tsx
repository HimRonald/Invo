import React from "react";
import Image from "next/image";
import { Logo } from "../navbar/logo";
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

interface InvoicePreviewProps {
  invoice: Invoice;
  client: Client;
  seller: Seller;
  products: Product[];
}

export function InvoicePreview({
  invoice,
  client,
  seller,
  products,
}: InvoicePreviewProps) {
  const totalAmount = products.reduce(
    (total, product) => total + product.quantity * product.price,
    0,
  );

  return (
    <div className=" text-black">
      <Logo />
      <div className="mb-4 flex justify-between">
        <p>{invoice.id || "N/A"}</p>
        <div>
          <p>
            <strong>Issue Date:</strong> {invoice.issueDate || "N/A"}
          </p>
          <p>
            <strong>Due Date:</strong> {invoice.dueDate || "N/A"}
          </p>
        </div>
      </div>
      <div className="mb-4 flex justify-between">
        <div className="mb-4">
          <p>
            <strong>Client:</strong> {client.name || "N/A"}
          </p>
          <p>
            <strong>Address:</strong> {client.address || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {client.email || "N/A"}
          </p>
        </div>
        <div className="mb-4">
          <p>
            <strong>Seller:</strong> {seller.name || "N/A"}
          </p>
          <p>
            <strong>Address:</strong> {seller.address || "N/A"}
          </p>
          <p>
            <strong>Email:</strong> {seller.email || "N/A"}
          </p>
        </div>
      </div>

      <table className="mb-4 w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Product</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <tr key={index}>
              <td className="border p-2">{product.name || "N/A"}</td>
              <td className="border p-2">{product.quantity || 0}</td>
              <td className="border p-2">${product.price.toFixed(2) || 0}</td>
              <td className="border p-2">
                ${(product.quantity * product.price).toFixed(2) || 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-right font-bold">
        Total Amount: ${totalAmount.toFixed(2)}
      </p>
    </div>
  );
}
