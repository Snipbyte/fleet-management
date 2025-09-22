"use client";
import React from 'react';
import CustomModal from '../../../common/modal/modal';
import { getStatusColor } from '../../../../../utils/services';

const CustomerViewModal = ({ isOpen, onRequestClose, customer }) => {
    return (
        <CustomModal isOpen={isOpen} onRequestClose={onRequestClose} title="Customer Detail">
            <div className="p-4 space-y-6">
                <div className="flex justify-center">
                    <img src="/images/jpg/image.png" className="w-20 h-20 rounded-full" alt="profile" />
                </div>
                <div className="text-center">
                    <h3 className="text-lg font-semibold">{customer?.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="mt-1">{customer?.email}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Phone Number</p>
                        <p className="mt-1">{customer?.phoneNumber}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Joining Date</p>
                        <p className="mt-1">{customer?.joinDate}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="mt-1">{customer?.address}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <span className={`mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-sm ${getStatusColor(customer?.status)}`}>
                            {customer?.status}
                        </span>
                    </div>
                </div>
            </div>
        </CustomModal>
    );
};

export default CustomerViewModal;