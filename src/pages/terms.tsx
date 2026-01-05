import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Home, ArrowLeft, FileText, XCircle, AlertTriangle, Scale } from "lucide-react";

export default function TermsConditionsPage() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Live Like a Winner</title>
        <meta name="description" content="Terms and Conditions for Live Like a Winner course" />
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
                  <FileText className="w-8 h-8 text-primary" />
                  <CardTitle className="text-3xl">Terms and Conditions</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">
                  Last Updated: November 25, 2025
                </p>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none dark:prose-invert space-y-6">
                <Alert className="border-red-500/50 bg-red-500/10 mb-6">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <AlertDescription className="text-red-900 dark:text-red-100">
                    <p className="font-bold text-base mb-2">CRITICAL - NO REFUND POLICY</p>
                    <p className="mb-0">
                      ALL PAYMENTS MADE FOR THE COURSE ARE FINAL AND NON-REFUNDABLE. Once payment is made, NO refund requests will be entertained under any circumstances. By proceeding with payment, you explicitly acknowledge and agree to this no-refund policy. Please ensure you review the sample lesson before purchasing.
                    </p>
                  </AlertDescription>
                </Alert>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                  <p className="text-sm text-amber-900 dark:text-amber-100 font-medium mb-0">
                    These Terms and Conditions are governed by the laws of India, including but not limited to the Indian Contract Act, 1872, the Information Technology Act, 2000, and the Consumer Protection Act, 2019.
                  </p>
                </div>

                <section>
                  <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                    1. Agreement to Terms
                  </h2>
                  <p>
                    These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User", "you", "your") and Indian Institute of Professional Skills Development ("IIPSD", "we", "us", "our") governing your access to and use of the "Live Like a Winner" online course platform available at learnwinning.iiskills.in (the "Platform").
                  </p>
                  <p>
                    BY ACCESSING OR USING THE PLATFORM, MAKING A PAYMENT, OR CLICKING "I AGREE" OR SIMILAR BUTTON, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT USE THE PLATFORM OR MAKE ANY PAYMENT.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
                    <XCircle className="w-5 h-5 text-red-600" />
                    2. Payment and No Refund Policy
                  </h2>
                  <div className="bg-red-50 dark:bg-red-950/20 border-2 border-red-500 rounded-lg p-5 my-4">
                    <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-3">2.1 NO REFUNDS - ABSOLUTE POLICY</h3>
                    <p className="text-red-900 dark:text-red-100 font-semibold mb-2">
                      ALL COURSE PAYMENTS ARE STRICTLY NON-REFUNDABLE AND FINAL.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-red-900 dark:text-red-100">
                      <li>Once you complete the payment of ₹99 via UPI, NO refund will be issued under ANY circumstances whatsoever.</li>
                      <li>This no-refund policy applies regardless of the reason for requesting a refund, including but not limited to:
                        <ul className="list-circle pl-6 mt-1 space-y-1">
                          <li>Change of mind</li>
                          <li>Inability to complete the course</li>
                          <li>Technical difficulties on your end</li>
                          <li>Dissatisfaction with course content</li>
                          <li>Personal circumstances</li>
                          <li>Any other reason whatsoever</li>
                        </ul>
                      </li>
                      <li>NO exceptions will be made to this policy for any reason.</li>
                      <li>NO refund requests will be entertained, processed, or responded to.</li>
                      <li>By making payment, you explicitly and irrevocably waive any right to claim a refund.</li>
                    </ul>
                  </div>

                  <h3 className="text-lg font-semibold mt-5 mb-2">2.2 Payment Terms</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The course fee is ₹99 (Rupees Ninety-Nine Only), inclusive of all applicable taxes.</li>
                    <li>Payment is accepted exclusively via UPI (Unified Payments Interface) to Phil Dass.</li>
                    <li>Payment must be completed before accessing the full course content.</li>
                    <li>We do not store your UPI ID, banking credentials, or payment method details.</li>
                    <li>You are responsible for ensuring payment is made from a legitimate source and with proper authorization.</li>
                    <li>Failed or incomplete payments do not grant access to the course.</li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-4 mb-2">2.3 Sample Lesson</h3>
                  <p>
                    A free sample lesson (Chapter One and Interlude One) is provided to allow you to evaluate the course content and teaching style before making a payment decision. We strongly encourage you to review the sample lesson thoroughly before purchasing. Your decision to purchase after reviewing the sample constitutes acceptance of the course content and the no-refund policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">3. Course Access and License</h2>
                  <h3 className="text-lg font-semibold mt-4 mb-2">3.1 License Grant</h3>
                  <p>
                    Upon successful payment, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the course content for your personal, non-commercial use only.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2">3.2 Access Period</h3>
                  <p>
                    Course access is provided for a reasonable period to complete the course. We reserve the right to modify access terms with prior notice.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2">3.3 Account Responsibility</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                    <li>You must not share your login credentials with others.</li>
                    <li>You are responsible for all activities that occur under your account.</li>
                    <li>You must notify us immediately of any unauthorized use of your account.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">4. Certificate of Completion</h2>
                  <h3 className="text-lg font-semibold mt-4 mb-2">4.1 Certificate Issuance</h3>
                  <p>
                    Upon successful completion of all course chapters and passing all required tests, you will receive a digital Certificate of Completion issued by the Indian Institute of Professional Skills Development, digitally signed by Phil Dass.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2">4.2 Certificate Name Policy</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The name you provide during registration will appear on your certificate.</li>
                    <li><strong className="text-red-600">IMPORTANT: The name on your certificate CANNOT be changed after payment is made.</strong></li>
                    <li>Ensure your full legal name is entered correctly during registration.</li>
                    <li>No corrections, amendments, or reissuance of certificates with different names will be provided.</li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-4 mb-2">4.3 Certificate Requirements</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Complete all course chapters and interludes.</li>
                    <li>Pass all required chapter tests.</li>
                    <li>Users who choose to skip tests will not receive a certificate.</li>
                    <li>The certificate is provided in digital format only.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">5. Intellectual Property Rights</h2>
                  <h3 className="text-lg font-semibold mt-4 mb-2">5.1 Ownership</h3>
                  <p>
                    All content on the Platform, including but not limited to the course materials, text, graphics, logos, images, videos, and software, is the property of IIPSD, Phil Dass, or our licensors and is protected by Indian and international copyright, trademark, and other intellectual property laws.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2">5.2 Restrictions</h3>
                  <p>You are strictly prohibited from:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Copying, reproducing, distributing, or republishing any course content</li>
                    <li>Modifying, adapting, or creating derivative works from the content</li>
                    <li>Selling, renting, licensing, or sublicensing access to the course</li>
                    <li>Reverse engineering or attempting to extract source code</li>
                    <li>Removing or altering any copyright, trademark, or proprietary notices</li>
                    <li>Using the content for commercial purposes without written permission</li>
                    <li>Sharing course materials with non-enrolled individuals</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">6. User Conduct and Prohibited Activities</h2>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Violate any applicable laws, regulations, or third-party rights</li>
                    <li>Use the Platform for any unlawful, fraudulent, or malicious purpose</li>
                    <li>Attempt to gain unauthorized access to the Platform or other user accounts</li>
                    <li>Interfere with or disrupt the Platform's operation or servers</li>
                    <li>Upload or transmit viruses, malware, or other harmful code</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                    <li>Engage in any activity that could damage our reputation or business</li>
                    <li>Use automated systems (bots, scrapers) to access the Platform</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">7. Disclaimer of Warranties</h2>
                  <p>
                    THE PLATFORM AND COURSE CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                  </p>
                  <p>We do not warrant that:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>The Platform will be uninterrupted, timely, secure, or error-free</li>
                    <li>The results obtained from the course will meet your expectations</li>
                    <li>The course content is accurate, complete, or up-to-date</li>
                    <li>Any errors or defects in the Platform will be corrected</li>
                  </ul>
                  <p className="mt-3">
                    TO THE FULLEST EXTENT PERMITTED BY INDIAN LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY INDIAN LAW, IN NO EVENT SHALL IIPSD, ITS DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES ARISING FROM:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Your access to or use of or inability to access or use the Platform</li>
                    <li>Any conduct or content of any third party on the Platform</li>
                    <li>Unauthorized access, use, or alteration of your content or data</li>
                    <li>Any other matter relating to the Platform or course</li>
                  </ul>
                  <p className="mt-3">
                    OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO THE PLATFORM OR THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE COURSE (₹99).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">9. Indemnification</h2>
                  <p>
                    You agree to indemnify, defend, and hold harmless IIPSD, its directors, officers, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Your use or misuse of the Platform</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any rights of another party</li>
                    <li>Your violation of any applicable laws or regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">10. Term and Termination</h2>
                  <h3 className="text-lg font-semibold mt-4 mb-2">10.1 Termination by You</h3>
                  <p>
                    You may discontinue using the Platform at any time. However, termination does not entitle you to any refund of the course fee.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2">10.2 Termination by Us</h3>
                  <p>
                    We reserve the right to suspend or terminate your access to the Platform immediately, without prior notice or liability, for any reason, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Breach of these Terms</li>
                    <li>Fraudulent, abusive, or illegal activity</li>
                    <li>At our sole discretion for any other reason</li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-4 mb-2">10.3 Effect of Termination</h3>
                  <p>
                    Upon termination, your right to access and use the Platform will cease immediately. Termination does not entitle you to any refund. Sections of these Terms that by their nature should survive termination shall survive.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">11. Modifications to Platform and Terms</h2>
                  <h3 className="text-lg font-semibold mt-4 mb-2">11.1 Changes to Platform</h3>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any aspect of the Platform at any time without prior notice or liability.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2">11.2 Changes to Terms</h3>
                  <p>
                    We may update these Terms from time to time. The updated Terms will be posted on the Platform with a revised "Last Updated" date. Your continued use of the Platform after changes are made constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
                    <Scale className="w-5 h-5 text-primary" />
                    12. Governing Law and Dispute Resolution
                  </h2>
                  <h3 className="text-lg font-semibold mt-4 mb-2">12.1 Governing Law</h3>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. The Information Technology Act, 2000, Indian Contract Act, 1872, and Consumer Protection Act, 2019 shall apply.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2">12.2 Jurisdiction</h3>
                  <p>
                    Any disputes, claims, or controversies arising out of or relating to these Terms or the Platform shall be subject to the exclusive jurisdiction of the courts located in India. You consent to the personal jurisdiction of such courts.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2">12.3 Dispute Resolution</h3>
                  <p>
                    In the event of any dispute, the parties agree to first attempt to resolve the matter through good faith negotiations. If the dispute cannot be resolved through negotiation within 30 days, either party may pursue resolution through the appropriate courts in India.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">13. Miscellaneous Provisions</h2>
                  <h3 className="text-lg font-semibold mt-4 mb-2">13.1 Entire Agreement</h3>
                  <p>
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and IIPSD regarding the Platform and supersede all prior agreements and understandings.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2">13.2 Severability</h3>
                  <p>
                    If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, such provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2">13.3 Waiver</h3>
                  <p>
                    No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or any other term. Our failure to assert any right under these Terms shall not constitute a waiver of that right.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2">13.4 Assignment</h3>
                  <p>
                    You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.
                  </p>

                  <h3 className="text-lg font-semibold mt-4 mb-2">13.5 Force Majeure</h3>
                  <p>
                    We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, natural disasters, war, terrorism, riots, strikes, or governmental actions.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">14. Contact Information</h2>
                  <p>If you have any questions or concerns about these Terms, please contact us:</p>
                  <div className="bg-secondary/50 p-4 rounded-lg mt-3">
                    <p className="font-semibold">Indian Institute of Professional Skills Development</p>
                    <p className="text-sm mt-2">Email: support@iiskills.in</p>
                    <p className="text-sm">Website: learnwinning.iiskills.in</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-3">15. Acknowledgment</h2>
                  <p>
                    BY USING THE PLATFORM OR MAKING A PAYMENT, YOU ACKNOWLEDGE THAT:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 font-semibold">
                    <li>You have read and understood these Terms and Conditions in their entirety</li>
                    <li>You agree to be legally bound by these Terms</li>
                    <li>You have reviewed the sample lesson before purchasing</li>
                    <li>You explicitly understand and accept the NO REFUND POLICY</li>
                    <li>You understand that no refund requests will be entertained under any circumstances</li>
                    <li>You understand that the certificate name cannot be changed after payment</li>
                    <li>You consent to the jurisdiction of Indian courts for dispute resolution</li>
                  </ul>
                </section>

                <div className="border-t pt-6 mt-8">
                  <Alert className="border-red-500/50 bg-red-500/10">
                    <XCircle className="h-5 w-5 text-red-600" />
                    <AlertDescription className="text-red-900 dark:text-red-100">
                      <p className="font-bold mb-2">FINAL REMINDER:</p>
                      <p className="mb-0">
                        All payments are FINAL and NON-REFUNDABLE. No refund requests will be entertained. By proceeding with payment, you acknowledge and accept this policy without reservation.
                      </p>
                    </AlertDescription>
                  </Alert>
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
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm font-medium text-foreground">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
