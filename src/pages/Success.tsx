import React from 'react';
import { Download, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Success: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl overflow-hidden text-center">
                <div className="bg-green-600 p-8">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Order Confirmed!</h1>
                    <p className="text-green-100">Thank you for your purchase.</p>
                </div>

                <div className="p-8">
                    <h2 className="text-xl font-bold text-slate-800 mb-4">Your Plans Are Ready</h2>
                    <p className="text-slate-600 mb-8">
                        We've sent a receipt to your email. You can download the complete "Engineer's Vault" bundle immediately using the button below.
                    </p>

                    <a href="/downloads/plans-bundle.zip" download className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-3 transition-all mb-4 group decoration-sky-500/0">
                        <Download className="w-5 h-5 group-hover:animate-bounce" />
                        <span>Download All 30 Plans (ZIP)</span>
                    </a>
                    <p className="text-xs text-slate-400 mb-8">File size: 145 MB • PDF Format</p>

                    <div className="border-t border-slate-100 pt-6">
                        <Link to="/" className="text-safety-orange hover:text-safety-orange-hover font-semibold flex items-center justify-center gap-2">
                            Return to Home
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
