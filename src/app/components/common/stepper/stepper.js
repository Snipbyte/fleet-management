"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PickVehicle from "../../static/vehicleBooking/pickVehicle/pickVehicle";
import RideSummary from "../rideSummary/rideSummary";
import ExtraOptionCard from "../extraOption/extraOption";
import Input from "../input/input";
import DescriptionField from "../description/description";
import Checkbox from "../checkbox/checkbox";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // ✅ setup react-hook-form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // step 1
      vehicle: "",
      // step 2
      flightNumber: "",
      extras: [],
      chauffeurNotes: "",
      // step 3
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      passenger: "",
      luggage: "",
      driverNotes: "",
      // step 4
      billingFirstName: "",
      billingLastName: "",
      company: "",
      address: "",
      country: "",
      city: "",
      zip: "",
      cardType: "",
      cardholderName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      terms: false,
      newsletter: false,
    },
  });

  const steps = [
    { id: 1, title: "Vehicle", icon: "/images/png/car.png" },
    { id: 2, title: "Extras", icon: "/images/png/extras.png" },
    { id: 3, title: "Passenger", icon: "/images/png/users.png" },
    { id: 4, title: "Payment", icon: "/images/png/card.png" },
  ];

  // ✅ handle submit
  const onSubmit = (data) => {
    console.log("📌 Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full min-h-screen"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-6">
        {/* Progress Bar */}
        <div className="w-full overflow-x-auto pb-2">
          <div className="w-full flex items-center gap-6 justify-between">
            {steps.map((step, index) => {
              const isActive = index <= currentStep;
              return (
                <div
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={`flex items-center gap-2 border-b-2 transition-all cursor-pointer pb-2 w-full
                    ${isActive ? "border-b-black" : "border-b-gray-200"}`}
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full transition 
                      ${isActive ? "bg-black" : "bg-[#F0FBF7]"}`}
                  >
                    {/* <img
                      src={step.icon}
                      alt={step.title}
                      className={`w-5 h-5 object-contain transition ${isActive && currentStep === 1 ? "filter invert" : ""
                        }`}
                    /> */}
                    <img
                      src={step.icon}
                      alt={step.title}
                      className={`w-5 h-5 object-contain transition 
    ${index !== 0 && isActive ? "filter invert" : ""}`}
                    />



                  </div>
                  <div className="w-[80%] flex flex-row items-center justify-between">
                    <h1
                      className={`text-sm font-medium ${isActive ? "text-black" : "text-gray-500"
                        }`}
                    >
                      {step.title}
                    </h1>
                    <p className="text-xs sm:text-sm">0{index + 1}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form + Summary */}
        <div className="flex flex-col lg:flex-row w-full gap-6">
          {/* Left Side - Steps */}
          <div className="flex-1 min-h-screen py-6">
            {/* Step 1 - Vehicle */}
            {currentStep === 0 && <PickVehicle register={register} />}

            {/* Step 2 - Extras */}
            {currentStep === 1 && (
              <div className="w-full">
                <h1 className="font-medium mb-4">Extra Options</h1>
                <Input
                  type="search"
                  label="Flight/Train number"
                  {...register("flightNumber")}
                />
                <div className="grid grid-cols-1">
                  {[...Array(5)].map((_, i) => (
                    <ExtraOptionCard
                      key={i}
                      title="Booster Seat"
                      price="22"
                      description="Suitable for children 15–36 kg (approx 4–10 years)."
                      {...register("extras")}
                    />
                  ))}
                </div>
                <div className="mt-6">
                  <DescriptionField
                    label="Notes for the chauffeur"
                    {...register("chauffeurNotes")}
                  />
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 mt-4"
                  >
                    Continue ↗
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 - Passenger */}
            {currentStep === 2 && (
              <div className="w-full">
                <h1 className="font-medium mb-4">Passenger Details</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input type="text" label="First name" {...register("firstName")} />
                  <Input type="text" label="Last name" {...register("lastName")} />
                  <Input type="email" label="Email" {...register("email")} />
                  <Input type="number" label="Phone" {...register("phone")} />
                </div>
                <h1 className="font-medium mt-6 mb-4">Options</h1>
                <ExtraOptionCard title="Passenger" showPrice={false} {...register("passenger")} />
                <ExtraOptionCard title="Luggage" showPrice={false} {...register("luggage")} />
                <div className="mt-6">
                  <DescriptionField label="Notes to driver" {...register("driverNotes")} />
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 mt-4"
                >
                  Continue ↗
                </button>
              </div>
            )}

            {/* Step 4 - Payment */}
            {currentStep === 3 && (
              <div className="w-full">
                <h1 className="font-medium mb-4">Billing Address</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input type="text" label="First name" {...register("billingFirstName")} />
                  <Input type="text" label="Last name" {...register("billingLastName")} />
                </div>
                <Input type="text" label="Company" {...register("company")} />
                <Input type="text" label="Address" {...register("address")} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Input type="text" label="Country" {...register("country")} />
                  <Input type="text" label="City" {...register("city")} />
                  <Input type="number" label="Zip/Postal Code" {...register("zip")} />
                </div>

                <h1 className="font-medium mt-6 mb-4">Select Payment Method</h1>
                <Input type="number" label="Credit Card" {...register("cardType")} />
                <h1 className="font-medium mb-4">Credit Card Payment</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input type="text" label="Cardholder Name" {...register("cardholderName")} />
                  <Input type="number" label="Card Number" {...register("cardNumber")} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <Input type="date" label="Month" {...register("expiryMonth")} />
                  <Input type="date" label="Year" {...register("expiryYear")} />
                  <Input type="number" label="CVV" {...register("cvv")} />
                </div>
                <img src="/images/png/payment.png" className="w-full md:w-1/2 mt-4" />
                <div className="flex flex-col gap-4 mt-6">
                  <p className="text-sm">
                    The credit card must be issued in the driver's name. Debit cards are accepted at some locations.
                  </p>
                  <Checkbox label="I accept the Terms & Conditions." {...register("terms")} />
                  <Checkbox label="I want to subscribe to the newsletter" {...register("newsletter")} />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 mt-8"
                >
                  Submit ↗
                </button>
              </div>
            )}
          </div>

          {/* Right Side - Always Visible Summary */}
          <div className="w-full lg:w-[30%] xl:w-[25%]">
            <RideSummary />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Stepper;


// "use client";
// import { useState } from "react";
// import PickVehicle from "../../static/vehicleBooking/pickVehicle/pickVehicle";
// import RideSummary from "../rideSummary/rideSummary";
// import ExtraOptionCard from "../extraOption/extraOption";
// import Input from "../input/input";
// import DescriptionField from "../description/description";
// import Checkbox from "../checkbox/checkbox";

// const Stepper = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const steps = [
//     { id: 1, title: "Vehicle", icon: "/images/png/car.png" },
//     { id: 2, title: "Extras", icon: "/images/png/extras.png" },
//     { id: 3, title: "Passenger", icon: "/images/png/users.png" },
//     { id: 4, title: "Payment", icon: "/images/png/card.png" },
//   ];

//   return (
//     <div className="flex flex-col w-full min-h-screen">
//       <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-6">

//         {/* Progress Bar */}
//         <div className="w-full overflow-x-auto pb-2">
//           <div className="w-full flex items-center gap-6 justify-between">
//             {steps.map((step, index) => {
//               const isActive = index <= currentStep;
//               return (
//                 <div
//                   key={step.id}
//                   onClick={() => setCurrentStep(index)}
//                   className={`flex items-center gap-2 border-b-2 transition-all cursor-pointer pb-2 w-full
//                     ${isActive ? "border-b-black" : "border-b-gray-200"}`}
//                 >
//                   <div
//                     className={`w-12 h-12 flex items-center justify-center rounded-full transition 
//                       ${isActive ? "bg-black" : "bg-[#F0FBF7]"}`}
//                   >
//                     <img
//                       src={step.icon}
//                       alt={step.title}
//                       className={`w-5 h-5 object-contain transition ${isActive && currentStep === 1 ? "filter invert" : ""}`}
//                     />
//                   </div>
//                   <div className="w-[80%] flex flex-row items-center justify-between">
//                     <h1 className={`text-sm font-medium ${isActive ? "text-black" : "text-gray-500"}`}>
//                       {step.title}
//                     </h1>
//                     <p className="text-xs sm:text-sm">0{index + 1}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Form + Summary */}
//         <div className="flex flex-col lg:flex-row w-full gap-6">
//           {/* Left Side - Steps */}
//           <div className="flex-1 min-h-screen py-6">
//             {currentStep === 0 && <PickVehicle />}
//             {currentStep === 1 && (
//               <div className="w-full">
//                 <h1 className="font-medium mb-4">Extra Options</h1>
//                 <Input type="search" label="Flight/Train number" />
//                 <div className="grid grid-cols-1">
//                   {[...Array(5)].map((_, i) => (
//                     <ExtraOptionCard
//                       key={i}
//                       title="Booster Seat"
//                       price="22"
//                       description="Suitable for children 15–36 kg (approx 4–10 years)."
//                     />
//                   ))}
//                 </div>
//                 <div className="mt-6">
//                   <DescriptionField label="Notes for the chauffeur" />
//                   <button className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 mt-4">
//                     Continue ↗
//                   </button>
//                 </div>
//               </div>
//             )}
//             {currentStep === 2 && (
//               <div className="w-full">
//                 <h1 className="font-medium mb-4">Passenger Details</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <Input type="text" label="First name" />
//                   <Input type="text" label="Last name" />
//                   <Input type="email" label="Email Address" />
//                   <Input type="number" label="Phone Number" />
//                 </div>
//                 <h1 className="font-medium mt-6 mb-4">Options</h1>
//                 <ExtraOptionCard title="Passenger" showPrice={false} />
//                 <ExtraOptionCard title="Luggage" showPrice={false} />
//                 <div className="mt-6">
//                   <DescriptionField label="Notes to driver" />
//                 </div>
//                 <button className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 mt-4">
//                   Continue ↗
//                 </button>
//               </div>
//             )}
//             {currentStep === 3 && (
//               <div className="w-full">
//                 <h1 className="font-medium mb-4">Billing Address</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <Input type="text" label="First name" />
//                   <Input type="text" label="Last name" />
//                 </div>
//                 <Input type="text" label="Company" />
//                 <Input type="address" label="Address" />
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                   <Input type="text" label="Country" />
//                   <Input type="text" label="City" />
//                   <Input type="number" label="Zip/Postal Code" />
//                 </div>

//                 <h1 className="font-medium mt-6 mb-4">Select Payment Method</h1>
//                 <Input type="number" label="Credit Card" />
//                 <h1 className="font-medium mb-4">Credit Card Payment</h1>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <Input type="text" label="Cardholder Name" />
//                   <Input type="number" label="Card Number" />
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                   <Input type="date" label="Month" />
//                   <Input type="date" label="Year" />
//                   <Input type="number" label="CVV" />
//                 </div>
//                 <img src="/images/png/payment.png" className="w-full md:w-1/2 mt-4" />
//                 <div className="flex flex-col gap-4 mt-6">
//                   <p className="text-sm">
//                     The credit card must be issued in the driver's name. Debit cards are accepted at some locations.
//                   </p>
//                   <Checkbox label="I accept the Terms & Conditions." />
//                   <Checkbox label="I want to subscribe to the newsletter" />
//                 </div>
//                 <button className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 mt-8">
//                   Continue ↗
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Right Side - Always Visible Summary */}
//           <div className="w-full lg:w-[30%] xl:w-[25%]">
//             <RideSummary />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Stepper;
