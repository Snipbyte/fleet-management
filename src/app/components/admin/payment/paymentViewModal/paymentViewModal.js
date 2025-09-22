"use client";
import React from 'react';
import CustomModal from '../../../common/modal/modal';
import { getStatusColor } from '../../../../../utils/services';
import Images from '../../../common/Image/Image';

const PaymentViewModal = ({ isOpen, onRequestClose, payment }) => {
    // Current date and time (11:44 AM PKT on Monday, September 22, 2025)
    const currentDate = new Date('2025-09-22T11:44:00+05:00');
    const formattedDate = currentDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
    const formattedDueDate = new Date(currentDate);
    formattedDueDate.setDate(currentDate.getDate() + 7); // Assuming due date is 7 days from issue date
    const formattedDueDateStr = formattedDueDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });

    return (
        <CustomModal isOpen={isOpen} onRequestClose={onRequestClose} title="Payment Detail">
            <div className="">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <p className="text-sm text-gray-500">Invoice Number:</p>
                        <p className="font-medium">{payment?.paymentId || "INV-2025-001"}</p>
                        <p className="text-sm text-gray-500">Date Issued:</p>
                        <p className="font-medium">{formattedDate}</p>
                        <p className="text-sm text-gray-500">Due Date:</p>
                        <p className="font-medium">{formattedDueDateStr}</p>
                    </div>
                    <div className="text-right">
                        <Images src="/images/png/footer-logo.png" alt="Company Logo" className="h-32 w-full mb-2" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Ride Details</h3>
                        <p className="text-sm text-gray-500">Pickup Location:</p>
                        <p className="font-medium">{payment?.pickupLocation || "123 Main St, City, State"}</p>
                        <p className="text-sm text-gray-500">Drop-off Location:</p>
                        <p className="font-medium">{payment?.dropoffLocation || "456 Oak Ave, City, State"}</p>
                        <p className="text-sm text-gray-500">Date & Time:</p>
                        <p className="font-medium">{formattedDate} - 2:00 PM</p>
                        <p className="text-sm text-gray-500">Booking ID:</p>
                        <p className="font-medium">{payment?.bookingId || "#C123"}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Driver & Company Info</h3>
                        <p className="text-sm text-gray-500">Driver Name:</p>
                        <p className="font-medium">{payment?.customerName || "John Smith"}</p>
                        <p className="text-sm text-gray-500">Driver ID:</p>
                        <p className="font-medium">123456</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Bill To:</h3>
                        <p className="text-sm text-gray-500">Vikram AjohnSmithiya</p>
                        <p className="text-sm text-gray-500">H. No. 6-A/B, Bistrol tower, Azad Nagar New Delhi, India</p>
                        <p className="text-sm text-gray-500">+91 0000000000</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Payment Mode</h3>
                        <p className="text-sm text-gray-500">Credit Card (Visa/McCard)</p>
                        <p className="text-sm text-gray-500">Payment order Number:</p>
                        <p className="font-medium">ASXXXX</p>
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Fare Breakdown</h3>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-black text-white">
                                <th className="py-2 px-4 text-left">Items</th>
                                <th className="py-2 px-4 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-2 px-4">Base Fare</td>
                                <td className="py-2 px-4 text-right">{payment?.fareAmount || "$45"}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">Add-ons</td>
                                <td className="py-2 px-4 text-right">{payment?.addOns || "$20"}</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4">Tolls</td>
                                <td className="py-2 px-4 text-right">$20</td>
                            </tr>
                            <tr className="font-semibold">
                                <td className="py-2 px-4">Total Due</td>
                                <td className="py-2 px-4 text-right">{payment?.totalAmount || "$75.00"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                    <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm hover:bg-gray-300">
                        Email Receipt
                    </button>
                    <button className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800">
                        Download Receipt
                    </button>
                </div>
            </div>
        </CustomModal>
    );
};

export default PaymentViewModal;