
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, ArrowLeft, Shield, Lock, Eye, Database, AlertCircle } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Live Like a Winner</title>
        <meta name="description" content="Privacy Policy for Live Like a Winner course" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <Image 
                src="/LLAWLOGO.png" 
                alt="Live Like a Winner Logo" 
                width={60} 
                height={60}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold leading-tight">Live Like a Winner</h1>
                <p className="text-sm text-muted-foreground">Indian Institute of Professional Skills Development</p>
              </div>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </header>

        <main className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-8 h-8 text-primary" />
                  <CardTitle className="text-3xl">Privacy Policy</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">
                  Last Updated: November 25, 2025
                </p>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert space-y-6">
                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                  <p className="text-sm text-amber-900 dark:text-amber-100 font-medium mb-0">
                    This Privacy Policy is governed by the laws of India, including but not limited to the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                  </p>
                </div>

                <section>
                  <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    1. Introduction
                  </h2>
                  <p>
                    This Privacy Policy describes how Indian Institute of Professional Skills Development ("we", "us", "our", "IIPSD") collects, uses, stores, and protects your personal information when you access and use the "Live Like a Winner" online course platform available at learnwinning.iiskills.in (the "Platform").
                  </p>
                  <p>
                    By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the Platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
                    <Database className="w-5 h-5 text-primary" />
                    2. Information We Collect
                  </h2>
                  <h3 className="text-lg font-semibold mt-4 mb-2">2.1 Personal Information</h3>
                  <p>We collect the following personal information from you:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Full Name:</strong> As it will appear on your course completion certificate</li>
                    <li><strong>Phone Number:</strong> For account verification and communication</li>
                    <li><strong>Age:</strong> For demographic analysis and course improvement</li>
                    <li><strong>Educational Qualification:</strong> For understanding our learner base</li>
                    <li><strong>Course Progress Data:</strong> Chapters completed, test results, time spent</li>
                    <li><strong>Payment Information:</strong> UPI transaction details (we do not store UPI IDs or banking credentials)</li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-4 mb-2">2.2 Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Device information (type, operating system, browser)</li>
                    <li>IP address and approximate location</li>
                    <li>Usage data (pages visited, time on platform, features used)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
                    <Eye className="w-5 h-5 text-primary" />
                    3. How We Use Your Information
                  </h2>
                  <p>We use your information for the following purposes:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Course Delivery:</strong> To provide access to course content, track progress, and issue certificates</li>
                    <li><strong>Account Management:</strong> To create and manage your account, authenticate your identity</li>
                    <li><strong>Communication:</strong> To send course updates, verification codes, and important notices</li>
                    <li><strong>Payment Processing:</strong> To process and verify your course payment</li>
                    <li><strong>Platform Improvement:</strong> To analyze usage patterns and improve course quality</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable Indian laws and regulations</li>
                    <li><strong>Security:</strong> To protect against fraud, unauthorized access, and security threats</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
                    <Lock className="w-5 h-5 text-primary" />
                    4. Data Protection and Security
                  </h2>
                  <p>
                    We implement reasonable security practices and procedures as required under the Information Technology Act, 2000 and applicable rules to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                  </p>
                  <h3 className="text-lg font-semibold mt-4 mb-2">4.1 Security Measures</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Secure server infrastructure with encryption</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Regular security audits and updates</li>
                    <li>Data backup and disaster recovery procedures</li>
                    <li>Employee confidentiality agreements</li>
                  </ul>
                  <p className="mt-3">
                    However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">5. Data Sharing and Disclosure</h2>
                  <p>We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating the Platform (e.g., hosting, payment processing), subject to confidentiality obligations</li>
                    <li><strong>Legal Requirements:</strong> When required by Indian law, court order, or government authority</li>
                    <li><strong>Protection of Rights:</strong> To protect our rights, property, safety, or that of our users</li>
                    <li><strong>Business Transfer:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. Data Retention</h2>
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Course completion records and certificates may be retained indefinitely for verification purposes.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">7. Your Rights</h2>
                  <p>Under Indian law, you have the following rights regarding your personal information:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Access:</strong> Right to access your personal information we hold</li>
                    <li><strong>Correction:</strong> Right to correct inaccurate or incomplete information (except certificate name which cannot be changed after payment)</li>
                    <li><strong>Withdrawal of Consent:</strong> Right to withdraw consent for data processing (subject to contractual obligations)</li>
                    <li><strong>Review:</strong> Right to review information before it is disclosed to third parties</li>
                  </ul>
                  <p className="mt-3">
                    To exercise these rights, please contact us at the details provided in Section 12.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">8. Cookies and Tracking Technologies</h2>
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on the Platform. Cookies are small data files stored on your device. You can control cookie preferences through your browser settings, but disabling cookies may affect Platform functionality.
                  </p>
                  <h3 className="text-lg font-semibold mt-4 mb-2">Types of Cookies We Use:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Essential Cookies:</strong> Required for Platform operation and security</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the Platform</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">9. Third-Party Links</h2>
                  <p>
                    The Platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any information.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">10. Children's Privacy</h2>
                  <p>
                    The Platform is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">11. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on the Platform with a revised "Last Updated" date. Your continued use of the Platform after such changes constitutes your acceptance of the updated Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">12. Contact Information</h2>
                  <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                  <div className="bg-secondary/50 p-4 rounded-lg mt-3">
                    <p className="font-semibold">Indian Institute of Professional Skills Development</p>
                    <p className="text-sm mt-2">Email: support@iiskills.in</p>
                    <p className="text-sm">Website: learnwinning.iiskills.in</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">13. Governing Law and Jurisdiction</h2>
                  <p>
                    This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to this Privacy Policy shall be subject to the exclusive jurisdiction of the courts in India.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">14. Grievance Redressal</h2>
                  <p>
                    In accordance with the Information Technology Act, 2000 and applicable rules, we have designated a Grievance Officer to address any concerns or grievances regarding privacy and data protection.
                  </p>
                  <div className="bg-secondary/50 p-4 rounded-lg mt-3">
                    <p className="font-semibold">Grievance Officer</p>
                    <p className="text-sm mt-2">Name: Roy Devaiah</p>
                    <p className="text-sm">Email: grievance@iiskills.in</p>
                    <p className="text-sm mt-2">The Grievance Officer shall respond to complaints within one month from the date of receipt.</p>
                  </div>
                </section>

                <div className="border-t pt-6 mt-8">
                  <p className="text-sm text-muted-foreground">
                    By using the Live Like a Winner Platform, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your personal information as described herein.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="border-t mt-20 py-8 bg-background">
          <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Indian Institute of Professional Skills Development. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm font-medium text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
