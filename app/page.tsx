'use client'

import { useState } from 'react'

interface ESIMProvider {
  name: string
  freeData: string
  speed: string
  coverage: string
  limitations: string
  url: string
  type: 'free' | 'freemium' | 'trial'
  badge?: string
}

const providers: ESIMProvider[] = [
  {
    name: 'Airalo',
    freeData: '100MB-1GB free trial',
    speed: '4G/5G',
    coverage: '190+ countries',
    limitations: 'One-time trial per account',
    url: 'https://www.airalo.com',
    type: 'trial',
    badge: 'Popular'
  },
  {
    name: 'Nomad',
    freeData: '$3 credit (≈300MB-1GB)',
    speed: '4G/5G',
    coverage: '170+ countries',
    limitations: 'Credit on first purchase',
    url: 'https://www.getnomad.app',
    type: 'trial'
  },
  {
    name: 'Freemium Mobile',
    freeData: '100MB/month',
    speed: '4G',
    coverage: 'US only',
    limitations: 'Must watch ads, speed limited',
    url: 'https://www.freemobile.com',
    type: 'freemium'
  },
  {
    name: 'FreedomPop',
    freeData: '50-200MB/month',
    speed: '4G',
    coverage: 'US only',
    limitations: 'Limited to 50-200MB, requires registration',
    url: 'https://www.freedompop.com',
    type: 'freemium',
    badge: 'Ad-supported'
  },
  {
    name: 'Dent',
    freeData: 'Earn data through app',
    speed: '4G/5G',
    coverage: '80+ countries',
    limitations: 'Must complete tasks for data credits',
    url: 'https://www.dentwireless.com',
    type: 'freemium'
  },
  {
    name: 'eSIM.me',
    freeData: '100MB trial',
    speed: '4G',
    coverage: '150+ countries',
    limitations: 'One-time trial',
    url: 'https://esim.me',
    type: 'trial'
  }
]

export default function Home() {
  const [filter, setFilter] = useState<'all' | 'free' | 'freemium' | 'trial'>('all')

  const filteredProviders = filter === 'all'
    ? providers
    : providers.filter(p => p.type === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Free eSIM Internet Finder</h1>
              <p className="text-gray-600">Discover eSIM providers with free data plans</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                <strong>Important:</strong> Truly unlimited "lifetime free" eSIM internet is extremely rare. Most providers offer limited free trials, ad-supported plans, or earn-as-you-go data. Review each provider's limitations carefully.
              </p>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-6 flex gap-3 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Providers
          </button>
          <button
            onClick={() => setFilter('freemium')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'freemium'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Freemium
          </button>
          <button
            onClick={() => setFilter('trial')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'trial'
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Free Trials
          </button>
        </div>

        {/* Provider Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredProviders.map((provider) => (
            <div key={provider.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
                  {provider.badge && (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {provider.badge}
                    </span>
                  )}
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Free Data</p>
                      <p className="text-sm text-gray-600">{provider.freeData}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Speed</p>
                      <p className="text-sm text-gray-600">{provider.speed}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Coverage</p>
                      <p className="text-sm text-gray-600">{provider.coverage}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <p className="text-xs font-semibold text-red-800 mb-1">Limitations:</p>
                  <p className="text-xs text-red-700">{provider.limitations}</p>
                </div>

                <a
                  href={provider.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How to Get Started */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Get Started</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Step-by-Step Guide</h3>
              <ol className="space-y-2 list-decimal list-inside text-gray-700">
                <li>Check if your device supports eSIM (iPhone XS+, Pixel 3+, Samsung S20+, etc.)</li>
                <li>Choose a provider from the list above</li>
                <li>Download their app or visit their website</li>
                <li>Create an account and select a free plan</li>
                <li>Install the eSIM profile on your device</li>
                <li>Activate your free data and start browsing</li>
              </ol>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Tips & Recommendations</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>Try multiple providers to maximize free data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>Use free data for essential tasks only to make it last</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>Check coverage in your country before purchasing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>Read terms carefully - some require payment info upfront</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>Consider ad-supported plans for ongoing free data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Is truly free lifetime internet possible?</h4>
              <p className="text-gray-600 text-sm">Very rare. Most "free" plans have limitations like data caps, ads, or one-time trials. Sustainable free internet usually requires ads or task completion.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">What devices support eSIM?</h4>
              <p className="text-gray-600 text-sm">iPhone XS/XR and newer, Google Pixel 3+, Samsung Galaxy S20+, iPad Pro (2018+), and many newer Android devices. Check your device settings for eSIM support.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Can I use multiple eSIMs at once?</h4>
              <p className="text-gray-600 text-sm">Most modern devices support multiple eSIM profiles, though typically only 1-2 can be active simultaneously. You can store several and switch between them.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Are there any truly unlimited free options?</h4>
              <p className="text-gray-600 text-sm">No legitimate provider offers unlimited free internet permanently. Be cautious of scams. The options listed here offer limited free data with clear terms.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            Disclaimer: Offers and availability may vary by region. Always verify current plans on provider websites.
          </p>
        </div>
      </footer>
    </div>
  )
}
