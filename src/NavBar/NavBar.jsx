// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css'
// import img from './img/hamburger-8597938_1280 (1).webp'
// import { useTranslation } from 'react-i18next';
// import Languageselectors from '../components/language-selectors';
// function NavBar() {
//     const { t } = useTranslation()

//     return (
//         <>
//             <div className="bg-white">
//                 <header className="absolute inset-x-0 top-0 z-50">
//                     <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
//                         <div className="flex lg:flex-1">
//                             <a href="#" className="-m-1.5 p-1.5">
//                                 <span className="sr-only">Your Company</span>
//                                 <img className="h-8 w-auto" src={img} alt="" />
//                             </a>
//                         </div>
//                         <div className="flex lg:hidden">
//                             <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
//                                 <span className="sr-only">Open main menu</span>
//                                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className="hidden lg:flex lg:gap-x-12">
//                             <Link to="./pizza"><a href="#" className="text-sm font-semibold leading-6 text-gray-900">{t('Features')}</a></Link>
//                             <Link to="re"><a href="#" className="text-sm font-semibold leading-6 text-gray-900">{t('Marketplace')}</a></Link>
//                             <Link to="./company"><a href="#" className="text-sm font-semibold leading-6 text-gray-900">{t('Company')}</a></Link>
//                             <Languageselectors />
//                         </div>
//                         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//                             <Link to="/"> <a href="#" className="text-sm font-semibold leading-6 text-gray-900">{t('Log in')} <span aria-hidden="true">&rarr;</span></a></Link>
//                         </div>
//                     </nav>
//                     <div className="lg:hidden" role="dialog" aria-modal="true">
//                         <div className="fixed inset-0 z-50"></div>
//                         <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//                             <div className="flex items-center justify-between">
//                                 <a href="#" className="-m-1.5 p-1.5">
//                                     <span className="sr-only">Your Company</span>
//                                     <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
//                                 </a>
//                                 <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
//                                     <span className="sr-only">Close menu</span>
//                                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 </button>
//                             </div>
//                             <div className="mt-6 flow-root">
//                                 <div className="-my-6 divide-y divide-gray-500/10">
//                                     <div className="space-y-2 py-6">
//                                         <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
//                                         <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
//                                         <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
//                                         <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
//                                     </div>
//                                     <div className="py-6">
//                                         <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </header>

//                 <div className="relative isolate px-6 pt-14 lg:px-8">
//                     <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
//                         <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
//                     </div>
//                     <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//                         <div className="text-center ">
//                             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl letter-by-letter ">{t('Welcome to Famous Chinese food.')}</h1>
//                             <p className="mt-6 text-lg leading-8 text-gray-600">{t('Welcome to Chinese food. Discover and learn about the most beautiful foods with us.')}</p>
//                         </div>
//                     </div>
//                     <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
//                         <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }
// export default NavBar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';
// import img from './img/hamburger-8597938_1280 (1).webp';
// import { useTranslation } from 'react-i18next';
// import Languageselectors from '../components/language-selectors';

// function NavBar() {
//     const { t } = useTranslation();

//     return (
//         <>
//             <div className="bg-white">
//                 <header className="absolute inset-x-0 top-0 z-50">
//                     <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
//                         <div className="flex lg:flex-1">
//                             <a href="#" className="-m-1.5 p-1.5">
//                                 <span className="sr-only">Your Company</span>
//                                 <img className="h-8 w-auto" src={img} alt="Logo" />
//                             </a>
//                         </div>
//                         <div className="flex lg:hidden">
//                             <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
//                                 <span className="sr-only">Open main menu</span>
//                                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <div className="hidden lg:flex lg:gap-x-12">
//                             <Link to="./pizza" className="text-sm font-semibold leading-6 text-gray-900">{t('Features')}</Link>
//                             <Link to="./re" className="text-sm font-semibold leading-6 text-gray-900">{t('Marketplace')}</Link>
//                             <Link to="./company" className="text-sm font-semibold leading-6 text-gray-900">{t('Company')}</Link>
//                             <Languageselectors />
//                         </div>
//                         <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//                             <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">{t('Log in')} <span aria-hidden="true">&rarr;</span></Link>
//                         </div>
//                     </nav>
//                     <div className="lg:hidden" role="dialog" aria-modal="true">
//                         <div className="fixed inset-0 z-50"></div>
//                         <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//                             <div className="flex items-center justify-between">
//                                 <a href="#" className="-m-1.5 p-1.5">
//                                     <span className="sr-only">Your Company</span>
//                                     <img className="h-8 w-auto" src={img} alt="Logo" />
//                                 </a>
//                                 <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
//                                     <span className="sr-only">Close menu</span>
//                                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 </button>
//                             </div>
//                             <div className="mt-6 flow-root">
//                                 <div className="-my-6 divide-y divide-gray-500/10">
//                                     <div className="space-y-2 py-6">
//                                         <Link to="./product" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('Product')}</Link>
//                                         <Link to="./features" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('Features')}</Link>
//                                         <Link to="./marketplace" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('Marketplace')}</Link>
//                                         <Link to="./company" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('Company')}</Link>
//                                     </div>
//                                     <div className="py-6">
//                                         <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('Log in')}</Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </header>

//                 <div className="relative isolate px-6 pt-14 lg:px-8">
//                     <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
//                         <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
//                     </div>
//                     <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//                         <div className="text-center">
//                             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{t('Welcome to Famous Chinese food.')}</h1>
//                             <p className="mt-6 text-lg leading-8 text-gray-600">{t('Welcome to Chinese food. Discover and learn about the most beautiful foods with us.')}</p>
//                         </div>
//                     </div>
//                     <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
//                         <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import img from './img/hamburger-8597938_1280 (1).webp';
import { useTranslation } from 'react-i18next';
import Languageselectors from '../components/language-selectors';

function NavBar() {
    const { t } = useTranslation();

    return (
        <>
            <div className="bg-white">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src={img} alt="Logo" />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <Link to="/pizza" className="text-sm font-semibold leading-6 text-gray-900">{t('Features')}</Link>
                            <Link to="/re" className="text-sm font-semibold leading-6 text-gray-900">{t('Marketplace')}</Link>
                            <Link to="/company" className="text-sm font-semibold leading-6 text-gray-900">{t('Company')}</Link>
                            <Languageselectors />
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">{t('Log in')} <span aria-hidden="true">&rarr;</span></Link>
                        </div>
                    </nav>
                    <div className="hidden lg:hidden" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 z-50"></div>
                        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img className="h-8 w-auto" src={img} alt="Logo" />
                                </a>
                                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <Link to="/product" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('Product')}</Link>
                                        <Link to="/features" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('Features')}</Link>
                                        <Link to="/marketplace" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('Marketplace')}</Link>
                                        <Link to="/company" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('Company')}</Link>
                                    </div>
                                    <div className="py-6">
                                        <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{t('Log in')}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{t('Welcome to Famous Chinese food.')}</h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">{t('Welcome to Chinese food. Discover and learn about the most beautiful foods with us.')}</p>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;
