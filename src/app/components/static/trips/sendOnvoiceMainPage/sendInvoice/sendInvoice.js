"use client";
import InvoiceDetails from "../invoiceDetails/invoiceDetails"
import DriverInvoiceCard from "../driverInvoiceCard/driverInvoiceCard"

export default function SendInvoice() {
  return (
    <div className="mt-2.5">
      <div className="w-full rounded-2xl grid md:grid-cols-3 gap-4">
        <InvoiceDetails />
        <DriverInvoiceCard />
      </div>
    </div>
  );
}
