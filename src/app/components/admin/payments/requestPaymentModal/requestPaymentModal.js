"use client";
import React, { useState } from 'react';
import CustomModal from '../../../common/modal/modal';
import Button from '../../../common/button/button';

const RequestPaymentModal = ({ isOpen, onRequestClose, payment }) => {
    const [amount] = useState(payment?.totalAmount || "$0.00");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to process the payment request (e.g., API call)
        console.log("Request Payment:", { paymentId: payment?.paymentId, amount });
        onRequestClose();
    };

    // Format the current date and time for display (e.g., 11:39 AM PKT on Monday, September 22, 2025)
    const currentDate = new Date();
    const formattedDateTime = currentDate.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    }) + ' PKT';

    return (
        <CustomModal isOpen={isOpen} onRequestClose={onRequestClose} title="Request Payment">
            <div className="">
                <p className="text-sm text-gray-600 mb-4">
                    You're about to request a payout for your pending earnings. Please confirm the details below before submitting.
                </p>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span className="text-lg font-semibold text-gray-900">{payment?.totalAmount || "$0.00"}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                        <div>
                            <p>Date & Time</p>
                            <p className="font-medium">{formattedDateTime}</p>
                        </div>
                        <div>
                            <p>Booking ID</p>
                            <p className="font-medium">{payment?.bookingId || "#N/A"}</p>
                        </div>
                        <div>
                            <p>Payment Method</p>
                            <p className="font-medium">{payment?.paymentMethod || "N/A"}</p>
                        </div>
                        <div>
                            <p>Payout Date (Expected)</p>
                            <p className="font-medium">{payment?.payoutDate || "N/A"}</p>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 mt-6">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm hover:bg-gray-300 duration-300"
                            onClick={onRequestClose}
                        >
                            Cancel
                        </button>
                        <Button
                            type="submit"
                            className="px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-gray-800"
                            onClick={handleSubmit}
                        >
                            Confirm Request
                        </Button>
                    </div>
                </div>
            </div>
        </CustomModal>
    );
};

export default RequestPaymentModal;