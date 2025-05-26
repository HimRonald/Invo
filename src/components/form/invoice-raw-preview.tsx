import React from "react";
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

interface InvoiceProps {
  invoice: Invoice;
  client: Client;
  seller: Seller;
  products: Product[];
}

export function InvoiceRawPreview({
  invoice,
  client,
  seller,
  products,
}: InvoiceProps) {
  const totalAmount = products.reduce(
    (total, p) => total + p.quantity * p.price,
    0,
  );

  return (
    <div
      id="invoice-preview"
      style={{
        backgroundColor: "#faf9f5",
        color: "#1a1915",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        border: "1px solid #ccc",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        {/* biome-ignore lint/nursery/noImgElement: <explanation> */}
        <img
          src="logo/invo.png"
          alt="Logo"
          width={100}
          height={100}
          style={{ marginBottom: "16px" }}
        />
      </div>
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>{invoice.id || "N/A"}</p>
        <div style={{ marginBottom: "16px" }}>
          <p>
            <strong>Issue Date:</strong> {invoice.issueDate || "N/A"}
          </p>
          <p>
            <strong>Due Date:</strong> {invoice.dueDate || "N/A"}
          </p>
        </div>
      </div>

      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
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
        <div>
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

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "16px",
        }}
      >
        <thead>
          <tr>
            <th style={cellStyle}>Product</th>
            <th style={cellStyle}>Quantity</th>
            <th style={cellStyle}>Price</th>
            <th style={cellStyle}>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <tr key={i}>
              <td style={cellStyle}>{p.name}</td>
              <td style={cellStyle}>{p.quantity}</td>
              <td style={cellStyle}>${p.price.toFixed(2)}</td>
              <td style={cellStyle}>${(p.quantity * p.price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ textAlign: "right", fontWeight: "bold" }}>
        Total: ${totalAmount.toFixed(2)}
      </p>
    </div>
  );
}

const cellStyle: React.CSSProperties = {
  border: "1px solid #ccc",
  padding: "8px",
  textAlign: "center",
  verticalAlign: "middle",
};
