import { ArrowLeft, Shield, FileText, Users, Lock, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative bg-white rounded-2xl shadow-xl p-8 mb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-blue-500 animate-pulse">
              <polygon points="50,10 90,50 50,90 10,50" />
            </svg>
          </div>
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold text-slate-900">Terms and Conditions</h1>
            </div>
            <p className="text-slate-600 text-lg">Last updated: December 2024</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              By accessing and using TechFlow's services, you accept and agree to be bound by the terms and provision of
              this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">2. Use License</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of TechFlow's materials for personal,
              non-commercial transitory viewing only.
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-slate-900">3. Privacy Policy</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
              information when you use our services. Please review our Privacy Policy, which also governs your use of
              the Service.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-slate-900">4. Disclaimer</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              The materials on TechFlow's website are provided on an 'as is' basis. TechFlow makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including without limitation,
              implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
              of intellectual property or other violation of rights.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-slate-900">5. Limitations</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              In no event shall TechFlow or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on TechFlow's website, even if TechFlow or a TechFlow authorized representative has
              been notified orally or in writing of the possibility of such damage.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Questions about our Terms?</h3>
          <p className="mb-6">If you have any questions about these Terms and Conditions, please contact us.</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
