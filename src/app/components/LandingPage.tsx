import Image from 'next/image';
import img1 from '../assets/Owner.jpeg';
import img2 from '../assets/Vaccination.jpeg';
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server';

export default function LandingPage() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-gray-900 text-white">

            {/* Hero Section */}
            <header className="flex flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-gray-800 to-gray-900">
                <h1 className="text-5xl font-extrabold mb-6">
                    Protect Yourself from Fraud
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                    Stay informed and vigilant against scams and fraudulent activities.
                </p>
               
                <a
                    href="#stats"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 mt-6"
                >
                    Learn More
                </a>
            </header>

            {/* Statistics Section */}
            <section id="stats" className="px-6 py-16 bg-gray-800">
                <h2 className="text-3xl font-bold text-center mb-10">Fraud Detection Statistics</h2>
                <p className="text-center text-xl font-bold text-green-400 mb-8">
                    Nearly 1 in 5 people reported a financial loss due to an imposter scam
                </p>
                <p className="text-center text-xl font-bold text-green-400 mb-8">
                    In 2023, the FTC reported $10.0 billion in losses as a result of fraudulent activity — an increase of $1.2 billion over 2022 💸
                </p>
                <p className="text-center text-xl font-bold text-green-400 mb-8">
                    Highest Fraud Detection Rate in North America 🌏
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                    <div className="flex flex-col items-center bg-gray-700 p-6 rounded-lg shadow-lg">
                        <Image src={img1} alt="Owner" width={300} height={300} className="rounded-lg" />
                        <h3 className="text-xl font-semibold mt-4">Top Countries Represented</h3>
                        <p className="text-lg text-gray-400 font-bold">
                            *United States, India, Australia, UK, Canada*
                        </p>
                    </div>
                    <div className="flex flex-col items-center bg-gray-700 p-6 rounded-lg shadow-lg">
                        <Image src={img2} alt="Vaccination" width={300} height={300} className="rounded-lg" />
                        <h3 className="text-xl font-semibold mt-4">Global Impact</h3>
                        <p className="text-lg text-gray-400 font-bold">
                            *Fraud cases rising globally, with billions lost every year.*
                        </p>
                    </div>
                </div>
            </section>
        </div>

    );
}

const DropletsIcon = ({ className }: { className: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={className}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.172L5.05 10.122c-2.34 2.34-2.34 6.142 0 8.482 2.34 2.34 6.142 2.34 8.482 0 2.34-2.34 2.34-6.142 0-8.482L12 3.172z"
        />
    </svg>
);
