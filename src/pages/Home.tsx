import React from 'react';
import {
    AlertTriangle,
    CheckCircle2,
    FileCheck,
    HardHat,
    Lock,
    ShieldCheck,
    XCircle,
    ArrowRight,
    Shield,
    CreditCard,
    Clock,
    Wallet,
    TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Calculator } from '../../components/Calculator';
import { Faq } from '../../components/Faq';
import { Testimonials } from '../../components/Testimonials';
import { CountdownTimer } from '../../components/CountdownTimer';
import { FAQ_ITEMS, STATES, TESTIMONIALS } from '../../constants';

export const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleBuyClick = () => {
        navigate('/checkout');
    };

    const scrollToPricing = () => {
        const element = document.getElementById('pricing-stack');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen font-sans">
            {/* 1. Sticky Banner */}
            <div className="sticky top-0 z-50 bg-yellow-400 text-slate-900 px-4 py-2 font-bold text-center text-sm md:text-base shadow-md flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-slate-900" />
                    <span>WARNING: Do not build without Engineer-Approved Plans.</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-slate-900/20"></div>
                <CountdownTimer />
            </div>

            {/* 2. Hero Section */}
            <header className="relative bg-slate-900 text-white overflow-hidden pb-10">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center"></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900/80 to-slate-900"></div>

                <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-4 py-1.5 rounded-full text-sm font-semibold text-safety-orange mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Licensed Professional Engineer Verified</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                        Build a Debt-Free Tiny Home in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">30 Days</span> for <br className="hidden md:block" /> Under <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">$40k.</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Stop renting and start owning. Get 30 Engineer-Designed, City-Ready house plans that make building simple, safe, and affordable.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                        <button
                            onClick={scrollToPricing}
                            className="bg-safety-orange hover:bg-safety-orange-hover text-white text-xl font-bold py-4 px-10 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-200 animate-pulse-fast flex items-center gap-3"
                        >
                            Get the 30-Plan Bundle – $17
                            <ArrowRight className="w-6 h-6" />
                        </button>
                        <p className="text-slate-400 text-sm mt-2 md:mt-0">
                            <span className="block">Instant Digital Download.</span>
                            <span className="block">30-Day Money Back Guarantee.</span>
                        </p>
                    </div>

                    {/* Feature Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8 border-t border-slate-700/50 pt-8">
                        <div className="flex items-center justify-center gap-3 text-slate-300">
                            <Clock className="w-6 h-6 text-safety-orange" />
                            <span className="text-lg font-bold text-white">Fast 30-Day Build</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 text-slate-300">
                            <Wallet className="w-6 h-6 text-safety-orange" />
                            <span className="text-lg font-bold text-white">Under $40k Budget</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 text-slate-300">
                            <TrendingUp className="w-6 h-6 text-safety-orange" />
                            <span className="text-lg font-bold text-white">Passive Income Ready</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* 3. The Problem */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Why 90% of DIY Builds Get Red-Tagged</h2>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900">Graphic Designers ≠ Engineers</h3>
                                    <p className="text-slate-600">Most online plan sites are run by artists. They draw lines that look good but defy gravity. Inspectors spot these "cartoons" instantly.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900">No Load Calculations</h3>
                                    <p className="text-slate-600">Without beam sizing and foundation load paths, your structure is a liability. You risk roof collapse and insurance denial.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg text-slate-900">Permit Rejection Hell</h3>
                                    <p className="text-slate-600">Revising bad plans costs thousands in consulting fees. Start with the right documents and save your budget.</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500/10 rounded-lg transform rotate-3"></div>
                            <img
                                src="https://picsum.photos/600/400?grayscale"
                                alt="Rejected Building Permit"
                                className="relative rounded-lg shadow-xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white font-black text-2xl py-2 px-6 rounded border-4 border-white -rotate-12 opacity-90 shadow-lg">
                                REJECTED
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. The Solution - ENHANCED VISUALS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-sm font-bold tracking-widest text-safety-orange uppercase mb-3">Introducing</h2>
                    <h3 className="text-4xl font-bold text-slate-900 mb-8">The Engineer's Vault</h3>
                    <p className="max-w-2xl mx-auto text-slate-600 mb-12 text-lg">
                        We opened our firm's archive of approved tiny house projects. You get the exact same blueprints we charged custom clients $3,500+ to create.
                    </p>

                    {/* Visual Mockup Area */}
                    <div className="relative max-w-5xl mx-auto mb-16">
                        <div className="bg-slate-800 rounded-xl p-8 shadow-2xl overflow-hidden relative">
                            {/* Decorative "blueprint" grid background */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                                {/* Blueprint cards */}
                                {['The Alpine (12x20)', 'The Summit (16x24)', 'The Creek (8x24)', 'The Haven (20x30)'].map((name, i) => (
                                    <div key={i} className="bg-blue-900 border border-blue-400/30 p-3 rounded shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center">
                                        <div className="w-full aspect-[3/4] bg-blue-800 border-2 border-white/20 mb-3 flex flex-col justify-center items-center p-2 relative overflow-hidden">
                                            {/* Fake Blueprint Lines */}
                                            <div className="absolute inset-4 border border-white/30"></div>
                                            <div className="absolute top-1/2 left-4 right-4 h-px bg-white/30"></div>
                                            <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/30"></div>
                                            <FileCheck className="text-white/40 w-10 h-10 relative z-10" />
                                        </div>
                                        <p className="text-blue-100 text-xs font-mono font-bold">{name}</p>
                                        <p className="text-blue-300 text-[10px] uppercase tracking-wider">Approved</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 relative z-10 border-t border-slate-600 pt-6">
                                <h4 className="font-bold text-white text-xl mb-2">30 Complete Sets Included</h4>
                                <p className="text-slate-400 text-sm">Includes: Floor Plans, Framing Schedules, Foundation Plans, Roof Logic, Connection Details.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Interactive Calculator */}
            <section className="py-20 bg-slate-100 border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Can You Afford to Build?</h2>
                        <p className="text-slate-600 max-w-xl mx-auto">
                            Use our real-time materials calculator to estimate your project cost based on 2024 lumber prices.
                        </p>
                    </div>
                    <Calculator />
                </div>
            </section>

            {/* 6. Social Proof - TESTIMONIALS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Real Builders, Real Permits</h2>
                        <div className="flex justify-center items-center gap-2 mb-8">
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map(i => <ShieldCheck key={i} className="w-6 h-6 text-safety-orange" />)}
                            </div>
                            <span className="font-bold text-slate-700">100% Approval Rate</span>
                        </div>
                    </div>
                    <Testimonials items={TESTIMONIALS} />

                    <div className="mt-16 pt-10 border-t border-slate-100">
                        <p className="text-slate-500 font-semibold text-center mb-6 uppercase tracking-wider text-sm">Trusted in States with Strict Codes</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
                            {STATES.map(state => (
                                <div key={state.code} className="flex items-center gap-3 border border-slate-200 rounded-full px-6 py-2 bg-slate-50">
                                    <span className="font-black text-slate-400">{state.code}</span>
                                    <span className="font-bold text-slate-600">{state.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. The Stack (Offer) */}
            <section id="pricing-stack" className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950"></div>

                <div className="container relative z-10 mx-auto px-4">
                    <div className="max-w-lg mx-auto bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ring-4 ring-safety-orange/20">
                        <div className="bg-safety-orange p-4 text-center">
                            <span className="text-white font-bold tracking-wider text-sm flex items-center justify-center gap-2">
                                <AlertTriangle className="w-4 h-4" />
                                LIMITED TIME TRIPWIRE OFFER
                            </span>
                        </div>

                        <div className="p-8">
                            <h2 className="text-3xl font-bold text-center mb-8">Here's What You Get:</h2>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="text-safety-orange w-6 h-6" />
                                        <span className="font-medium">30 Engineer-stamped Floor Plans</span>
                                    </div>
                                    <span className="font-bold text-slate-400">$1,500</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="text-safety-orange w-6 h-6" />
                                        <span className="font-medium">Structural Load Calculations</span>
                                    </div>
                                    <span className="font-bold text-slate-400">$850</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="text-safety-orange w-6 h-6" />
                                        <span className="font-medium">Material Take-off Lists</span>
                                    </div>
                                    <span className="font-bold text-slate-400">$500</span>
                                </li>
                                <li className="flex items-center justify-between border-b border-slate-100 pb-2">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="text-safety-orange w-6 h-6" />
                                        <span className="font-medium">City Permit Submission Guide</span>
                                    </div>
                                    <span className="font-bold text-slate-400">$250</span>
                                </li>
                            </ul>

                            <div className="flex items-center justify-between mb-2">
                                <span className="text-lg font-bold text-slate-500">Total Value</span>
                                <span className="text-2xl font-bold text-slate-400 line-through decoration-red-500">$3,100</span>
                            </div>

                            <div className="flex items-center justify-between mb-8">
                                <span className="text-xl font-bold text-slate-900">Today's Price</span>
                                <span className="text-6xl font-black text-safety-orange">$17</span>
                            </div>

                            <button
                                onClick={handleBuyClick}
                                className="w-full bg-safety-orange hover:bg-safety-orange-hover text-white text-xl font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 group transition-colors mb-4"
                            >
                                <Lock className="w-5 h-5" />
                                <span>Secure My Plans Now</span>
                            </button>

                            <div className="flex items-center justify-center gap-4 text-xs text-slate-400 border-t border-slate-100 pt-4">
                                <div className="flex items-center gap-1">
                                    <Shield className="w-3 h-3" />
                                    <span>SSL Secure Payment</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <CreditCard className="w-3 h-3" />
                                    <span>30-Day Money Back</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                    </div>
                    <Faq items={FAQ_ITEMS} />
                </div>
            </section>

            {/* 9. Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
                <div className="container mx-auto px-4 text-center md:text-left">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <HardHat className="text-safety-orange w-8 h-8" />
                            <span className="text-xl font-bold text-white tracking-tight">Texas Structural Engineers</span>
                        </div>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Support</a>
                        </div>
                    </div>
                    <div className="text-sm border-t border-slate-800 pt-8">
                        <p>&copy; {new Date().getFullYear()} Texas Structural Engineers, LLC. All rights reserved.</p>
                        <p className="mt-2 text-xs text-slate-500 max-w-3xl">
                            Disclaimer: Purchase of these plans includes a license for construction of one single-family residence per plan.
                            Local zoning laws and soil conditions vary. While plans are engineered to IRC standards, site-specific engineering (such as foundation design based on soil tests) may be required by your local building department.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
