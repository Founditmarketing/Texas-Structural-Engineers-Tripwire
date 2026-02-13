import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ThankYou: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl overflow-hidden text-center">
                <div className="bg-slate-900 p-8">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-10 h-10 text-slate-900" />
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-2">Thank You!</h1>
                    <p className="text-slate-300">We appreciate your business.</p>
                </div>

                <div className="p-8">
                    <h2 className="text-xl font-bold text-slate-800 mb-4">What happens next?</h2>
                    <p className="text-slate-600 mb-8">
                        We have received your request and will be in touch shortly. If you have any questions, please don't hesitate to reach out.
                    </p>

                    <div className="border-t border-slate-100 pt-6">
                        <Link to="/" className="text-slate-900 hover:text-slate-700 font-bold flex items-center justify-center gap-2">
                            Return to Home
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
