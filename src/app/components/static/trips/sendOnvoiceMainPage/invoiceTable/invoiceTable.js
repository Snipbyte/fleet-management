import React from 'react'

export default function InvoiceTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-black text-white text-left">
            <th className="p-3">Description</th>
            <th className="p-3">Price</th>
            <th className="p-3">VAT (20%)</th>
            <th className="p-3">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3">Child Seat</td>
            <td className="p-3">$443.00</td>
            <td className="p-3">$921.80</td>
            <td className="p-3">$9243</td>
          </tr>
          <tr className="border-b">
            <td className="p-3">Child Seat</td>
            <td className="p-3">$443.00</td>
            <td className="p-3">$921.80</td>
            <td className="p-3">$9243</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="font-semibold">
            <td colSpan={3} className="p-3 text-right">
              Total Due
            </td>
            <td className="p-3">$9,750</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}
