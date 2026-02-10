import React from 'react';
import { ArrowLeft, CheckCircle2, Lock, ShieldCheck, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Checkout: React.FC = () => {
    const navigate = useNavigate();

    const handlePayment = () => {
        // Placeholder for Stripe Payment Link redirection
        // window.location.href = 'YOUR_STRIPE_PAYMENT_LINK';
        navigate('/success'); // Simulating success for now
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Offer
                </button>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Column: Order Details */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">
                                Review Your Order
                            </h2>
                            <div className="flex gap-4 items-start">
                                <div className="w-24 h-24 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FileCheckIcon className="w-10 h-10 text-slate-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900">The Engineer's Vault: 30-Plan Bundle</h3>
                                    <p className="text-slate-500 text-sm mb-2">Complete Tiny House Architectural & Structural Set</p>
                                    <div className="flex gap-2 text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded inline-block">
                                        <CheckCircle2 className="w-3 h-3" />
                                        <span>In Stock & Ready for Download</span>
                                    </div>
                                </div>
                                <div className="ml-auto text-right">
                                    <p className="font-bold text-xl text-slate-900">$17.00</p>
                                    <p className="text-slate-400 line-through text-sm">$3,100.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">Customer Information</h2>
                            <div className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                                        <input type="text" className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:ring-2 focus:ring-safety-orange focus:border-transparent outline-none" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                                        <input type="text" className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:ring-2 focus:ring-safety-orange focus:border-transparent outline-none" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                    <input type="email" className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:ring-2 focus:ring-safety-orange focus:border-transparent outline-none" placeholder="john@example.com" />
                                    <p className="text-xs text-slate-500 mt-1">We will send your download link to this email.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Payment & Summary */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 sticky top-4">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-slate-600">Original Price</span>
                                <span className="text-slate-400 line-through">$3,100.00</span>
                            </div>
                            <div className="flex items-center justify-between mb-4 text-green-600">
                                <span>Discount</span>
                                <span>-$3,083.00</span>
                            </div>
                            <div className="border-t border-slate-100 pt-4 mb-6 flex items-center justify-between">
                                <span className="font-bold text-slate-900 text-lg">Total</span>
                                <span className="font-black text-2xl text-slate-900">$17.00</span>
                            </div>

                            <button
                                onClick={handlePayment}
                                className="w-full bg-safety-orange hover:bg-safety-orange-hover text-white font-bold py-4 rounded-lg shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
                            >
                                <Lock className="w-4 h-4" />
                                <span>Complete Secure Payment</span>
                            </button>

                            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                                <ShieldCheck className="w-3 h-3" />
                                <span>256-Bit SSL Encrypted Payment</span>
                            </div>
                            <div className="mt-2 flex justify-center gap-2 opacity-50">
                                <CreditCard className="w-6 h-6 text-slate-400" />
                                {/* Add more payment icons if needed */}
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="mt-12 text-center text-slate-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Texas Structural Engineers, LLC. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

// Helper component for the placeholder image
function FileCheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M9 15l2 2 4-4" />
        </svg>
    )
}
