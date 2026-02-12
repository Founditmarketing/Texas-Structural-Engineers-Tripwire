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
        // For Option A ($39), we could route to a different checkout or pass a param
        navigate('/checkout?plan=drip');
    };

    const handleInstantAccessClick = () => {
        navigate('/checkout?plan=instant');
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-8 animate-fadeIn">
                        <span className="w-2 h-2 rounded-full bg-safety-orange animate-pulse"></span>
                        <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Licensed Professional Engineers in 26 U.S. States</span>
                    </div>

                    <h1 className="font-extrabold tracking-tight mb-6 leading-tight">
                        <span className="text-4xl md:text-6xl block mb-2 text-white">Build Smarter. Get 30 Modern Home & ADU Floor Plans</span>
                        <span className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 block">
                            Designed by a Multi-State Licensed Engineering Firm
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        From 400 sq ft ADUs to 5,000 sq ft custom homes — start planning today with professionally drafted layouts trusted by builders nationwide.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
                        <button
                            onClick={scrollToPricing}
                            className="bg-transparent border-2 border-slate-500 hover:border-white text-slate-300 hover:text-white text-lg font-bold py-4 px-8 rounded-lg transition-all duration-200 flex items-center gap-3"
                        >
                            Get 30 Plans for $39
                        </button>
                        <button
                            onClick={scrollToPricing}
                            className="bg-safety-orange hover:bg-safety-orange-hover text-white text-xl font-bold py-4 px-10 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-200 animate-pulse-fast flex items-center gap-3"
                        >
                            Join the Private Builder Membership
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="text-slate-400 text-sm mt-2 md:mt-0 font-medium tracking-wide uppercase">
                        Licensed Professional Engineers in 26 U.S. States
                    </div>

                    {/* Feature Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8 border-t border-slate-700/50 pt-8">
                        <div className="flex items-center justify-center gap-3 text-slate-300">
                            <span className="text-2xl">⚡</span>
                            <span className="text-lg font-bold text-white">Download in Seconds</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 text-slate-300">
                            <span className="text-2xl">📐</span>
                            <span className="text-lg font-bold text-white">Permit-Ready & Inspector-Friendly</span>
                        </div>
                        <div className="flex items-center justify-center gap-3 text-slate-300">
                            <span className="text-2xl">💰</span>
                            <span className="text-lg font-bold text-white">Save $5,000–$20,000 vs. Custom Design</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* 3. The Problem */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">Most Homeowners Start With Pinterest…<br />Then Hit a Permit Wall.</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
                        What many people don’t realize:
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <ul className="space-y-8">
                                <li className="flex items-start gap-4">
                                    <AlertTriangle className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900">Signed & Sealed Plans Are Often Required</h3>
                                        <p className="text-slate-600">Most jurisdictions require licensed structural calculations and stamped drawings before issuing a building permit.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <AlertTriangle className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900">Engineering Conditions Vary by Location</h3>
                                        <p className="text-slate-600">Wind speeds, seismic zones, soil types, and foundation requirements differ significantly by region.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <AlertTriangle className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900">Drainage & Grading Plans Are Frequently Mandatory</h3>
                                        <p className="text-slate-600">Many municipalities require drainage studies, grading plans, and site layouts before approving construction.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900">Incomplete Submissions Get Delayed or Rejected</h3>
                                        <p className="text-slate-600">
                                            If you’re serious about building, you need more than inspiration. You need a path to permit approval.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-4 text-xl">What You Get Inside the Builder Vault</h3>
                                <ul className="space-y-3 mb-6">
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" /> Architectural Floor Plan PDFs
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" /> Detailed Room Dimensions
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" /> Thoughtful Layout Concepts
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" /> Elevation Views
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" /> Modern Design Inspiration
                                    </li>
                                </ul>
                                <p className="text-sm text-slate-600 mb-4 italic">
                                    These plans are designed to help you explore, evaluate, and prepare for your building journey.
                                </p>
                                <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded border border-slate-100">
                                    <span className="font-bold text-slate-700 block mb-1">Important:</span>
                                    The base bundle includes architectural layouts only.
                                    Signed & sealed structural, MEP, and site-specific permit-ready engineering services are available as optional upgrades through our licensed engineering team.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Complete 30-Plan Portfolio Preview (Moved Up) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Complete 30-Plan Portfolio Preview</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
                            Studios. ADUs. 2–5 Bedroom Homes. Contemporary, Modern, Farmhouse, Compact Urban.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[
                            { id: 5, path: '/floorplans/5-3DPLAN.jpg' },
                            { id: 6, path: '/floorplans/6-3DPLAN.jpg' },
                            { id: 7, path: '/floorplans/7-3DPLAN.jpg' },
                            { id: 8, path: '/floorplans/8-3DPLAN.jpg' },
                            { id: 9, path: '/floorplans/9-3D9LAN-CABIN (1).jpg' },
                            { id: 10, path: '/floorplans/10-3DPLAN.jpg' },
                            { id: 11, path: '/floorplans/11-3DPLAN.jpg' },
                            { id: 12, path: '/floorplans/12-3DPLAN.jpg' },
                            { id: 14, path: '/floorplans/14-3DPLAN.jpg' },
                            { id: 21, path: '/floorplans/21-3DPLAN.jpg' },
                            { id: 22, path: '/floorplans/22-3DPLAN.jpg' },
                            { id: 24, path: '/floorplans/24-3DPLAN.jpg' }
                        ].map((plan) => (
                            <div key={plan.id} className="group relative aspect-square bg-white rounded-lg shadow-sm overflow-hidden border border-slate-200">
                                <img
                                    src={plan.path}
                                    alt={`Plan ${plan.id}`}
                                    className="w-full h-full object-cover blur-[2px] transition-all duration-500 group-hover:blur-[1px] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <span className="text-slate-900/40 font-black text-xs -rotate-45 select-none border border-slate-900/40 px-1">PREVIEW</span>
                                </div>
                                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">Plan #{plan.id}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <button
                            onClick={scrollToPricing}
                            className="text-safety-orange font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all"
                        >
                            View All 30 Plans in the Bundle <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 5. Interactive Calculator */}
            {/* 5. Interactive Calculator - HIDDEN PER REQUEST */}
            {/* <section className="py-20 bg-slate-100 border-y border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Can You Afford to Build?</h2>
                        <p className="text-slate-600 max-w-xl mx-auto">
                            Use our real-time materials calculator to estimate your project cost based on 2024 lumber prices.
                        </p>
                    </div>
                    <Calculator />
                </div>
            </section> */}

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



            {/* 7. The Stack (Offer Comparison) */}
            <section id="pricing-stack" className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950"></div>

                <div className="container relative z-10 mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Choose Your Planning Path</h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Option 1 - Builder Starter */}
                        <div className="bg-white text-slate-900 rounded-2xl shadow-xl overflow-hidden border-2 border-slate-200 transform hover:scale-[1.02] transition-transform duration-300">
                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <Clock className="w-6 h-6 text-slate-500" />
                                    <h3 className="text-2xl font-bold text-slate-800">Builder Starter</h3>
                                </div>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-black text-slate-900">$39</span>
                                    <span className="text-slate-500 font-bold">One-Time</span>
                                </div>
                                <p className="text-slate-600 mb-8 h-12">Perfect if you're exploring ideas or early in planning.</p>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <span>30 professionally drafted floor plans</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Delivered over 30 days</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Room dimensions included</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Multiple size ranges</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                        <span>Upgrade opportunities available</span>
                                    </li>
                                </ul>

                                <button
                                    onClick={handleBuyClick}
                                    className="w-full bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    Get 30 Plans for $39
                                </button>
                            </div>
                        </div>

                        {/* Option 2 - Private Builder Engineering Membership */}
                        <div className="bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden border-4 border-safety-orange relative transform hover:scale-[1.03] transition-transform duration-300">
                            <div className="absolute top-0 right-0 bg-safety-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                                Most Popular for Active Builders
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <ShieldCheck className="w-6 h-6 text-safety-orange" />
                                    <h3 className="text-2xl font-bold text-slate-800">Private Builder Membership</h3>
                                </div>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-black text-safety-orange">$129</span>
                                    <span className="text-slate-400 font-bold text-lg">/month</span>
                                </div>
                                <p className="text-slate-600 mb-8 h-12">For serious builders who want guidance and compliance confidence.</p>

                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-1" />
                                        <span className="font-bold">Instant access to all 30 plans</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-1" />
                                        <span>DWG files included</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-1" />
                                        <span>5 new custom plans added monthly</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-1" />
                                        <span className="font-bold">Weekly 2-hour Live Q&A with Dr. Mousavi</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-1" />
                                        <span>Permit education library</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-1" />
                                        <span>Member-only engineering discounts</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-1" />
                                        <span>Priority support</span>
                                    </li>
                                </ul>

                                <button
                                    onClick={handleInstantAccessClick}
                                    className="w-full bg-safety-orange hover:bg-safety-orange-hover text-white text-xl font-bold py-5 rounded-lg shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-95 group"
                                >
                                    Join the Builder Membership <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-xs text-slate-400 mt-12 max-w-2xl mx-auto">
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <span>SSL Secure Payment</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CreditCard className="w-4 h-4" />
                            <span>Secure Processing</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7.5 Authority & Backend Transition */}
            <section className="py-16 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8">Led by Dr. Mir Emad Mousavi, Ph.D., P.E.</h2>
                        <ul className="inline-block text-left space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-slate-700 text-lg">
                                <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0" />
                                <strong>Multi-state licensed professional engineer.</strong>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 text-lg">
                                <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0" />
                                <strong>Thousands of completed residential and commercial projects.</strong>
                            </li>
                            <li className="flex items-center gap-3 text-slate-700 text-lg">
                                <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0" />
                                <strong>Operating across 26 U.S. states.</strong>
                            </li>
                        </ul>
                        <p className="text-xl text-slate-600 font-medium italic">
                            "When you're ready for permit-ready structural and MEP plans — you’re already in the right place."
                        </p>
                    </div>

                    <div className="bg-slate-900 text-white p-8 rounded-xl shadow-lg border border-slate-700 inline-block text-left w-full max-w-4xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <ShieldCheck className="w-32 h-32 text-white" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                                <ShieldCheck className="w-8 h-8 text-safety-orange" />
                                <h3 className="text-2xl font-bold">For Builder Members (Premium Access)</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                                <div className="space-y-4">
                                    <li className="flex items-start gap-3 list-none">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                        <span className="text-slate-300"><strong>Immediate Access:</strong> All floor plans in both PDF and Revit formats.</span>
                                    </li>
                                    <li className="flex items-start gap-3 list-none">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                        <span className="text-slate-300"><strong>Fresh Content:</strong> Exclusive 5+ new custom plans added monthly (homes, ADUs, additions).</span>
                                    </li>
                                    <li className="flex items-start gap-3 list-none">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                        <span className="text-slate-300"><strong>Weekly Live Q&A:</strong> With Dr. Mir Emad Mousavi covering permitting, development strategy, and compliance.</span>
                                    </li>
                                </div>
                                <div className="space-y-4">
                                    <li className="flex items-start gap-3 list-none">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                        <span className="text-slate-300"><strong>Engineering Discounts:</strong> Discounted signed & sealed structural and MEP engineering plans.</span>
                                    </li>
                                    <li className="flex items-start gap-3 list-none">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                        <span className="text-slate-300"><strong>Expert Guidance:</strong> Support on permitting strategy and compliance challenges.</span>
                                    </li>
                                    <li className="flex items-start gap-3 list-none">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                                        <span className="text-slate-300"><strong>Priority Access:</strong> Direct communication and member-only engineering insights.</span>
                                    </li>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <button
                                    onClick={scrollToPricing}
                                    className="bg-safety-orange hover:bg-safety-orange-hover text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all inline-flex items-center gap-2"
                                >
                                    Join the Builder Membership <ArrowRight className="w-5 h-5" />
                                </button>
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
