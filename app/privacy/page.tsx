import { ArrowLeft, Shield, Eye, Database, Cookie, Mail, Lock } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="relative bg-white rounded-2xl shadow-xl p-8 mb-8 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-purple-500 animate-spin-slow">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-blue-500 animate-pulse">
              <rect x="20" y="20" width="60" height="60" rx="10" />
            </svg>
          </div>
          <div className="relative z-10">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
            </div>
            <p className="text-slate-600 text-lg">Last updated: December 2024</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Eye className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, use our services,
              or contact us for support.
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Personal information (name, email address, phone number)</li>
              <li>Professional information (company, job title, industry)</li>
              <li>Technical information (IP address, browser type, device information)</li>
              <li>Usage data (how you interact with our services)</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Database className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use the information we collect to provide, maintain, and improve our services, including to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Provide and deliver the services you request</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect, investigate, and prevent fraudulent transactions</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Cookie className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-slate-900">Cookies and Tracking</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our service and hold certain
              information. Cookies are files with small amount of data which may include an anonymous unique identifier.
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Lock className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-slate-900">Data Security</h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However, no method of
              transmission over the Internet or electronic storage is 100% secure.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Mail className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-slate-900">Your Rights</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              You have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to erase your personal information</li>
              <li>The right to restrict processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Questions about Privacy?</h3>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, please don't hesitate to contact us.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
