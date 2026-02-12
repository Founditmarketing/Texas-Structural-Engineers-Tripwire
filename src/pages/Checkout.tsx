import React from 'react';
import { ArrowLeft, CheckCircle2, Lock, ShieldCheck, CreditCard } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Checkout: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const planType = searchParams.get('plan') || 'drip'; // default to drip (Starter)

    const isMembership = planType === 'instant';

    const product = isMembership ? {
        name: "Private Builder Membership",
        subtitle: "Private access to engineering-backed home design resources and live guidance for serious builders, homeowners, and developers.",
        price: 129.00,
        originalPrice: 5000.00, // Arbitrary anchor
        isRecurring: true,
        features: ["Instant Access", "Weekly Q&A", "Permit Regulation Updates", "Private Chat Group"],
        paymentLink: "https://buy.stripe.com/00w7sN0gi0IebsEblB1gs01"
    } : {
        name: "Builder Starter Bundle",
        subtitle: "Get instant access to a curated collection of 30 professionally designed residential floor plans.",
        price: 39.00,
        originalPrice: 3100.00,
        isRecurring: false,
        features: ["30 Floor Plans", "Delivered Instantly", "Room Dimensions"],
        paymentLink: "https://buy.stripe.com/3cIfZjaUWbmSaoAcpF1gs00"
    };

    const handlePayment = () => {
        // Redirect to the specific Stripe Payment Link based on plan selection
        window.location.href = product.paymentLink;
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
                                <div className="w-24 h-24 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden border border-slate-200 relative">
                                    <img src="/floorplans/1-3DPLAN.jpg" alt="Plan Bundle" className="w-full h-full object-cover blur-[1px]" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-[8px] font-bold text-slate-900/50 -rotate-45 border border-slate-900/50 px-1">PREVIEW</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900">{product.name}</h3>
                                    <p className="text-slate-500 text-sm mb-2">{product.subtitle}</p>
                                    <div className="flex gap-2 text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded inline-block">
                                        <CheckCircle2 className="w-3 h-3" />
                                        <span>In Stock & Ready for Download</span>
                                    </div>
                                </div>
                                <div className="ml-auto text-right">
                                    <p className="font-bold text-xl text-slate-900">
                                        ${product.price}{product.isRecurring && <span className="text-base font-normal text-slate-500">/mo</span>}
                                    </p>
                                    <p className="text-slate-400 line-through text-sm">${product.originalPrice.toLocaleString()}</p>
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
                                <span className="text-slate-400 line-through">${product.originalPrice.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between mb-4 text-green-600">
                                <span>Discount</span>
                                <span>-${(product.originalPrice - product.price).toLocaleString()}</span>
                            </div>
                            <div className="border-t border-slate-100 pt-4 mb-6 flex items-center justify-between">
                                <span className="font-bold text-slate-900 text-lg">{product.isRecurring ? 'Monthly Total' : 'Total'}</span>
                                <span className="font-black text-2xl text-slate-900">
                                    ${product.price}{product.isRecurring && <span className="text-lg font-normal text-slate-500">/mo</span>}
                                </span>
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
                    <div className="flex justify-center gap-6 mt-4">
                        <a href="https://www.quigig.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
                        <a href="https://www.quigig.com/terms-of-use/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Terms of Service</a>
                        <a href="mailto:support@quiplans.com" className="hover:text-slate-600 transition-colors">Support</a>
                    </div>
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
