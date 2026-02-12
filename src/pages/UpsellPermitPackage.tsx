import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, AlertTriangle, FileText, MapPin, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const UpsellPermitPackage: React.FC = () => {
    const navigate = useNavigate();
    const handleAccept = () => {
        window.location.href = 'https://sf.quigpro.com/quiplans/165672';
    };

    const handleDecline = () => {
        navigate('/upsell-site');
    };

    const plans = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        name: `Plan #${i + 1} - ${[
            'Studio', 'One-Bedroom', 'Modern Loft', 'Family Cabin', 'Retreat',
            'Bungalow', 'Cottage', 'Chalet', 'Tiny Villa', 'Eco-Pod'
        ][i % 10]}`
    }));

    return (
        <div className="min-h-screen bg-slate-50 font-sans py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Progress Bar */}
                <div className="mb-8 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span className="text-green-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Order Confirmed</span>
                    <span className="text-safety-orange flex items-center gap-1">Step 2 of 3</span>
                    <span>Finalizing</span>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="bg-red-600 text-white p-4 text-center font-bold animate-pulse">
                        ⚠️ WAIT! YOUR ORDER IS NOT COMPLETE.
                    </div>

                    <div className="p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight text-center">
                            Important: The Plans You Just Purchased Are Concepts Only — <span className="text-red-600 underline decoration-4 underline-offset-4">Not Permit-Ready</span>
                        </h1>
                        <p className="text-lg text-slate-600 text-center mb-10 max-w-2xl mx-auto">
                            Without signed & sealed structural engineering, your local building department will reject these plans. We can fix that.
                            As a licensed engineering firm operating in 26 states, we can guide you through compliance.
                        </p>

                        {/* The Offer Box */}
                        <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 mb-10 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-safety-orange text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                SPECIAL OFFER: LOCK IN MEMBER ACCESS
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-6 mb-8 mt-4">
                                <div className="w-32 h-32 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center p-2">
                                    <ShieldCheck className="w-16 h-16 text-slate-800" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Private Builder Engineering Membership</h2>
                                    <div className="flex items-center gap-1 mt-1 text-xs font-bold text-slate-500 uppercase tracking-wide">
                                        <ShieldCheck className="w-3 h-3 text-safety-orange" />
                                        Led by Dr. Mir Emad Mousavi, P.E.
                                    </div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-3xl font-black text-green-600">$129/mo</span>
                                        <span className="text-xl text-slate-400 font-bold">cancel anytime</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mt-2">
                                        Upgrade to instant access for all 30 plans plus ongoing engineering support.
                                    </p>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700"><strong>Instant Access</strong> to Revit files.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700"><strong>Weekly live Q&A</strong> with Dr. Mousavi.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700"><strong>Permit regulation updates</strong>.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700"><strong>Members only 15% off</strong> engineering discount.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700"><strong>Members live access</strong> to private chat group.</span>
                                </li>
                            </ul>

                        </div>



                        <div className="flex flex-col gap-4">
                            <button
                                onClick={handleAccept}
                                className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-5 rounded-lg shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-95 group"
                            >
                                <ShieldCheck className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                <span>Upgrade to Membership ($129/mo)</span>
                            </button>

                            <button
                                onClick={handleDecline}
                                className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors flex items-center justify-center gap-1"
                            >
                                No thanks, I'll figure out the engineering myself later.
                            </button>
                        </div>
                    </div>
                </div>

                <p className="text-center text-slate-400 text-xs mt-8 max-w-lg mx-auto">
                    By clicking "Upgrade", you join the monthly membership. You can cancel anytime. Engineering services for specific plans are billed separately with member discounts.
                </p>

                <footer className="mt-12 text-center text-slate-400 text-xs border-t border-slate-200 pt-8">
                    <p className="mb-4">&copy; {new Date().getFullYear()} Licensed Structural Engineers. All rights reserved.</p>
                    <div className="flex justify-center gap-6">
                        <a href="https://www.quigig.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
                        <a href="https://www.quigig.com/terms-of-use/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Terms of Service</a>
                        <a href="mailto:support@quiplans.com" className="hover:text-slate-600 transition-colors">Support</a>
                    </div>
                </footer>
            </div >
        </div >
    );
};
