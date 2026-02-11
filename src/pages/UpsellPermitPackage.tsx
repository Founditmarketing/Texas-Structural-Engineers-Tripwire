import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, AlertTriangle, FileText, MapPin, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const UpsellPermitPackage: React.FC = () => {
    const navigate = useNavigate();
    const [selectedPlan, setSelectedPlan] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleAccept = () => {
        if (!selectedPlan) {
            setError('Please select a plan to proceed.');
            return;
        }
        if (!address) {
            setError('Please enter the property address for the engineer\'s seal.');
            return;
        }
        // In a real app, we'd add this to the cart/order
        navigate('/upsell-site');
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
                            Do You Want These Plans <span className="text-red-600 underline decoration-4 underline-offset-4">Signed & Sealed</span> for Your Specific Lot?
                        </h1>
                        <p className="text-lg text-slate-600 text-center mb-10 max-w-2xl mx-auto">
                            The $30 bundle includes the design PDFs. But to get a <strong>Building Permit</strong>, your city will require a state-licensed engineer to seal the documents for your specific address.
                        </p>

                        {/* The Offer Box */}
                        <div className="bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl p-6 mb-10 relative">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-safety-orange text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                ONE-TIME OFFER: SAVE 70%
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-6 mb-8 mt-4">
                                <div className="w-32 h-32 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center p-2">
                                    <ShieldCheck className="w-16 h-16 text-slate-800" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Building Permit Ready Package</h2>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-3xl font-black text-green-600">$995</span>
                                        <span className="text-xl text-slate-400 line-through font-bold">$3,500</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mt-2">
                                        Select ONE plan from your bundle. We will engineer it specifically for your lot and provide the signed & sealed documents you need for the city.
                                    </p>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700"><strong>Foundation Plan</strong> designed for your soil conditions.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700"><strong>Structural Framing Plan</strong> with wind/snow load calcs.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700"><strong>MEP Plans</strong> (Mechanical, Electrical, Plumbing) included.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700"><strong>Signed & Sealed</strong> by a State-Licensed Engineer.</span>
                                </li>
                            </ul>

                            {/* Configuration Form */}
                            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-safety-orange" />
                                    Step 1: Select Your Plan
                                </h3>
                                <select
                                    value={selectedPlan}
                                    onChange={(e) => setSelectedPlan(e.target.value)}
                                    className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 mb-6 focus:ring-2 focus:ring-safety-orange focus:border-transparent outline-none"
                                >
                                    <option value="">-- Choose one plan from the bundle --</option>
                                    {plans.map(plan => (
                                        <option key={plan.id} value={plan.id}>{plan.name}</option>
                                    ))}
                                </select>

                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-safety-orange" />
                                    Step 2: Property Address
                                </h3>
                                <div className="space-y-4">
                                    <p className="text-xs text-slate-500">Required for the engineer's seal. This must be the actual building location.</p>
                                    <input
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="123 Main St, Austin, TX 78701"
                                        className="w-full border border-slate-300 rounded px-3 py-2 text-slate-900 focus:ring-2 focus:ring-safety-orange focus:border-transparent outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 p-3 rounded mb-4 text-sm font-bold text-center">
                                {error}
                            </div>
                        )}

                        <div className="flex flex-col gap-4">
                            <button
                                onClick={handleAccept}
                                className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-bold py-5 rounded-lg shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-95 group"
                            >
                                <ShieldCheck className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                <span>YES! Upgrade My Order for $995</span>
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
                    By clicking "Yes", you agree to the Terms of Service. The $995 engineering fee covers one specific plan for one specific address. Revisions or site changes may incur additional fees.
                </p>
            </div>
        </div>
    );
};
