import Link from 'next/link';
import Head from 'next/head';
import { FiHome, FiTruck } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineTruck } from 'react-icons/ai';

export default function NotFound404() {
  return (
    <>
      <Head>
        <title>Page Not Found | YourRide</title>
        <meta name="description" content="The page you're looking for doesn't exist. Book your ride with us instead." />
      </Head>

      <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-lg w-full space-y-8 bg-white p-10">
          <div className="text-center">
            {/* Animated 404 text */}
            <div className="mb-6">
              <h1 className="text-9xl font-bold text-gray-800">
                <span className="text-black animate-pulse">4</span>
                <span className="text-black animate-bounce">0</span>
                <span className="text-black animate-pulse">4</span>
              </h1>
            </div>

            {/* Illustration */}
            <div className="mb-8">
              <div className="relative w-64 h-48 mx-auto">
                <div className="absolute inset-0 bg-blue-200 rounded-lg"></div>
                <div className="absolute top-4 left-8 w-48 h-32 bg-blue-300 rounded-lg transform -rotate-6"></div>
                <div className="absolute top-8 left-4 w-48 h-32 bg-indigo-300 rounded-lg transform rotate-3">
                  <div className="flex flex-col items-center justify-center h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-white font-semibold mt-2">Page Not Found</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Lost in transit?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Sorry, we couldn't find the page you're looking for. Perhaps you'd like to book a ride instead?
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/" passHref>
                <button className="group relative w-full sm:w-auto flex justify-center items-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transition-all duration-200">
                  <AiOutlineHome size={20} className='mr-1' />
                  Go Home
                </button>
              </Link>

              <Link href="/ride-booking" passHref>
                <button className="group relative w-full sm:w-auto flex justify-center items-center py-3 px-6 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm hover:shadow-md transition-all duration-200">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h4.05a2.5 2.5 0 014.9 0H20a1 1 0 001-1v-6a1 1 0 00-.293-.707l-4-4A1 1 0 0016 4H3z" />
                  </svg> */}
                  <AiOutlineTruck size={20} className='mr-1' />
                  Book a Ride
                </button>
              </Link>
            </div>

            {/* Support link */}
            <div className="mt-8">
              <Link href="/contact-support" passHref>
                <span className="text-black hover:text-blue-800 font-medium cursor-pointer transition-colors duration-150">
                  Contact Support →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer branding */}
        {/* <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} YourRide. Getting you where you need to go.
          </p>
        </div> */}
      </div>
    </>
  );
}