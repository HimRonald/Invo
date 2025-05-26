import { FormGenerator } from "@/components/form/form-generator";

export default function CreateInvoice() {
  return (
    <div className="container mx-auto">
      <div className="flex min-h-screen flex-col items-center justify-center">
        <FormGenerator />
      </div>
    </div>
  );
}
