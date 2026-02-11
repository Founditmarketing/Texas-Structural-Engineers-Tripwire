import React from 'react';
import { CheckCircle2, ArrowRight, TrendingUp, AlertTriangle, Layers, X, FileCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const UpsellSitePlan: React.FC = () => {
    const navigate = useNavigate();

    const handleAccept = () => {
        // In a real app, add to cart/order
        navigate('/success');
    };

    const handleDecline = () => {
        navigate('/success');
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Progress Bar */}
                <div className="mb-8 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span className="text-green-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Order Confirmed</span>
                    <span className="text-green-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Permit Package</span>
                    <span className="text-safety-orange flex items-center gap-1">Step 3 of 3</span>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="bg-slate-900 text-white p-4 text-center font-bold">
                        FINAL OFFER - COMPLETE YOUR PROJECT
                    </div>

                    <div className="p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight text-center">
                            Are You Building on <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700">Raw Land?</span>
                        </h1>
                        <p className="text-lg text-slate-600 text-center mb-10 max-w-2xl mx-auto">
                            Don't let drainage issues or utility conflicts kill your project.
                            If you're developing a new lot, you need a <strong>Civil Site Plan</strong>.
                        </p>

                        {/* The Offer Box */}
                        <div className="bg-white border-2 border-slate-200 rounded-xl p-6 mb-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)]">
                            <div className="flex flex-col md:flex-row items-center gap-6 mb-8 mt-4">
                                <div className="w-32 h-32 bg-slate-100 rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                                    <Layers className="w-16 h-16 text-slate-700" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">Custom Site Development Plan</h2>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-3xl font-black text-slate-900">$2,500</span>
                                        <span className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded font-bold">Professional Civil Engineering</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mt-2">
                                        We will design the grading, drainage, and utility connections for your specific property to ensure your home is safe from flooding and accessible.
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-2">
                                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                                        <TrendingUp className="w-4 h-4 text-safety-orange" /> Grading & Drainage
                                    </h4>
                                    <p className="text-xs text-slate-500">Prevent flooding. We calculate exactly how to slope the land away from your foundation.</p>
                                </div>
                                <div className="bg-slate-50 p-4 rounded border border-slate-100">
                                    <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                                        <FileCheck className="w-4 h-4 text-safety-orange" /> Utility Plan
                                    </h4>
                                    <p className="text-xs text-slate-500">Water, sewer, and electric connection paths designed to code.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <button
                                onClick={handleAccept}
                                className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xl font-bold py-5 rounded-lg shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-95 group"
                            >
                                <CheckCircle2 className="w-6 h-6" />
                                <span>Add Site Plan to Order - $2,500</span>
                            </button>

                            <button
                                onClick={handleDecline}
                                className="text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors flex items-center justify-center gap-1"
                            >
                                No thanks, I have an existing lot or don't need civil engineering.
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
