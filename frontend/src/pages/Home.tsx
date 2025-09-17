// frontend/src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Shield, Users, Brain, CheckCircle } from "lucide-react";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Header / brand */}
      <header className="w-full border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight">NDIS Management</h1>
          </div>
          <nav className="flex items-center gap-3">
            <Link
              to="/login"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium border hover:bg-gray-50 transition-colors"
            >
              Staff Login
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Register Service Provider
            </Link>
            <Link
              to="/referral"
              className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Submit a Referral
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-blue-600" />
              <p className="text-sm font-medium text-blue-600">AI-Powered NDIS Solutions</p>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Intelligent NDIS Management Platform
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Streamline participant care, automate compliance, and optimize operations with AI-driven 
              tools designed specifically for NDIS service providers.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                Start Free Trial
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold border hover:bg-gray-50 transition-colors"
              >
                Staff Login
              </Link>
              <Link
                to="/referral"
                className="inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Submit Referral →
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>NDIS Compliant</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                <span>Privacy Protected</span>
              </div>
              <div className="flex items-center gap-1">
                <Brain className="w-4 h-4" />
                <span>AI-Enhanced</span>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">For Service Providers</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Comprehensive management tools for participants, staff, and compliance. 
                    Get started with our free trial plan.
                  </p>
                  <Link 
                    to="/register" 
                    className="mt-3 inline-flex text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Register Now →
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">For Staff & Workers</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Role-based dashboards, mobile rostering, and AI-powered support 
                    for managers and support workers.
                  </p>
                  <Link 
                    to="/login" 
                    className="mt-3 inline-flex text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Staff Login →
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">For Participants & Families</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Simple referral process to connect with quality NDIS service providers 
                    and begin your care journey.
                  </p>
                  <Link 
                    to="/referral" 
                    className="mt-3 inline-flex text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    Submit Referral →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Everything You Need for NDIS Management
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From participant onboarding to compliance reporting, our AI-enhanced platform 
              streamlines every aspect of NDIS service delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Participant Management</h4>
              <p className="text-sm text-gray-600">
                Comprehensive profiles, care plans, and progress tracking
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AI-Powered Tools</h4>
              <p className="text-sm text-gray-600">
                Intelligent scheduling, risk assessment, and decision support
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Compliance & Reporting</h4>
              <p className="text-sm text-gray-600">
                Automated NDIS reporting and audit-ready documentation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900">NDIS Management</span>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} NDIS Management Platform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;