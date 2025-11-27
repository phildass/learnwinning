
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Home, Award } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface UserCertificate {
  userId: string;
  fullName: string;
  completionDate: string;
  certificateNumber: string;
}

export default function CertificatePage() {
  const router = useRouter();
  const { userId } = router.query;
  const [certificate, setCertificate] = useState<UserCertificate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      const mockCertificate: UserCertificate = {
        userId: userId as string,
        fullName: "Student Name",
        completionDate: new Date().toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        certificateNumber: `LLAW-${new Date().getFullYear()}-${String(userId).padStart(4, "0")}`,
      };
      setCertificate(mockCertificate);
      setLoading(false);
    }
  }, [userId]);

  const handleDownload = async () => {
    const certificateElement = document.getElementById("certificate-content");
    if (!certificateElement || !certificate) return;

    try {
      const button = document.querySelector("[data-download-button]") as HTMLButtonElement;
      if (button) {
        button.disabled = true;
        button.textContent = "Generating PDF...";
      }

      // Wait for images to load
      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = await html2canvas(certificateElement, {
        scale: 4,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: "#ffffff",
        width: 297 * 3.7795275591, // A4 landscape width in pixels at 96 DPI
        height: 210 * 3.7795275591, // A4 landscape height in pixels at 96 DPI
      });

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const imgData = canvas.toDataURL("image/png", 1.0);
      pdf.addImage(imgData, "PNG", 0, 0, 297, 210);

      const fileName = `certificate-${certificate.fullName.replace(/\s+/g, "-")}-${new Date().toISOString().split("T")[0]}.pdf`;
      pdf.save(fileName);

      if (button) {
        button.disabled = false;
        button.innerHTML = '<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Download';
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");

      const button = document.querySelector("[data-download-button]") as HTMLButtonElement;
      if (button) {
        button.disabled = false;
        button.innerHTML = '<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Download';
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary">
        <div className="text-center">
          <Award className="w-16 h-16 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-lg text-muted-foreground">Loading your certificate...</p>
        </div>
      </div>
    );
  }

  if (!certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <Award className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold">Certificate Not Found</h2>
            <p className="text-muted-foreground">
              This certificate does not exist or has not been issued yet.
            </p>
            <Link href="/">
              <Button>
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Course Completion Certificate | {certificate.fullName}</title>
        <meta name="description" content="Live Like a Winner Course Completion Certificate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <header className="border-b bg-white shadow-sm">
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
                <p className="text-sm text-muted-foreground">Certificate of Completion</p>
              </div>
            </Link>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={handleDownload}
                data-download-button
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
              <Link href="/">
                <Button variant="ghost">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="container py-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Certificate Content - Optimized for PDF */}
              <div 
                id="certificate-content"
                style={{
                  width: "1122px",
                  height: "794px",
                  position: "relative",
                  backgroundColor: "#ffffff",
                  overflow: "hidden",
                }}
              >
                {/* Left Navy Panel with Gold Badge */}
                <div 
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "320px",
                    height: "794px",
                    backgroundColor: "#1e3a5f",
                  }}
                >
                  {/* Gold Badge Circle */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "192px",
                      height: "192px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)",
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* White Inner Circle */}
                    <div
                      style={{
                        width: "144px",
                        height: "144px",
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src="/LLAWLOGO.png"
                        alt="LLAW Logo"
                        width={80}
                        height={80}
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                  </div>

                  {/* Gold Vertical Stripe */}
                  <div
                    style={{
                      position: "absolute",
                      right: "0",
                      top: "0",
                      width: "12px",
                      height: "794px",
                      background: "linear-gradient(to right, #f59e0b, #d97706)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "0",
                      width: "4px",
                      height: "794px",
                      backgroundColor: "#fbbf24",
                    }}
                  />
                </div>

                {/* Right Content Panel */}
                <div
                  style={{
                    position: "absolute",
                    left: "320px",
                    top: "0",
                    width: "802px",
                    height: "794px",
                    padding: "80px 100px",
                  }}
                >
                  {/* Top Right Corner Decoration */}
                  <div style={{ position: "absolute", top: "32px", right: "32px", width: "64px", height: "64px" }}>
                    <div style={{ position: "absolute", top: "0", right: "0", width: "100%", height: "4px", background: "linear-gradient(to left, #f59e0b, transparent)" }} />
                    <div style={{ position: "absolute", top: "0", right: "0", width: "4px", height: "100%", background: "linear-gradient(to bottom, #f59e0b, transparent)" }} />
                  </div>

                  {/* Bottom Right Corner Decoration */}
                  <div style={{ position: "absolute", bottom: "32px", right: "32px", width: "64px", height: "64px" }}>
                    <div style={{ position: "absolute", bottom: "0", right: "0", width: "100%", height: "4px", background: "linear-gradient(to left, #f59e0b, transparent)" }} />
                    <div style={{ position: "absolute", bottom: "0", right: "0", width: "4px", height: "100%", background: "linear-gradient(to top, #f59e0b, transparent)" }} />
                  </div>

                  {/* Certificate Header */}
                  <div style={{ textAlign: "center", marginBottom: "60px" }}>
                    <p style={{ fontSize: "14px", letterSpacing: "0.3em", color: "#6b7280", textTransform: "uppercase", marginBottom: "16px" }}>
                      Certificate of
                    </p>
                    <h1 style={{ fontSize: "72px", fontWeight: "bold", color: "#1e3a5f", letterSpacing: "0.05em", marginBottom: "0", lineHeight: "1" }}>
                      COMPLETION
                    </h1>

                    {/* Decorative Divider */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "24px" }}>
                      <div style={{ height: "1px", width: "80px", background: "linear-gradient(to right, transparent, #f59e0b, #d97706)" }} />
                      <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#f59e0b" }} />
                      <div style={{ height: "1px", width: "80px", background: "linear-gradient(to left, transparent, #f59e0b, #d97706)" }} />
                    </div>
                  </div>

                  {/* Student Name Section */}
                  <div style={{ textAlign: "center", marginBottom: "48px" }}>
                    <p style={{ fontSize: "20px", color: "#6b7280", fontFamily: "Georgia, serif", marginBottom: "24px" }}>
                      proudly awarded to
                    </p>

                    <h2 style={{ fontSize: "60px", fontWeight: "bold", color: "#1e3a5f", fontFamily: "Georgia, serif", marginBottom: "16px", lineHeight: "1.2" }}>
                      {certificate.fullName}
                    </h2>
                    <div style={{ height: "4px", width: "300px", margin: "0 auto", background: "linear-gradient(to right, transparent, #1e3a5f, transparent)" }} />

                    <p style={{ fontSize: "16px", color: "#6b7280", fontFamily: "Georgia, serif", marginTop: "32px", marginBottom: "16px" }}>
                      by
                    </p>

                    <p style={{ fontSize: "24px", color: "#1f2937", fontWeight: "500", marginBottom: "8px" }}>
                      Indian Institute of Professional Skills Development
                    </p>
                    <p style={{ fontSize: "16px", color: "#6b7280", marginBottom: "8px" }}>
                      for successful completion of
                    </p>
                    <p style={{ fontSize: "28px", fontWeight: "600", color: "#1e3a5f" }}>
                      Live Like a Winner Course
                    </p>
                  </div>

                  {/* Footer with Date, Signature, Certificate Number */}
                  <div style={{ position: "absolute", bottom: "80px", left: "100px", right: "100px", paddingTop: "32px", borderTop: "2px solid #e5e7eb" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                      {/* Date */}
                      <div style={{ textAlign: "left" }}>
                        <p style={{ fontSize: "14px", fontWeight: "600", color: "#6b7280", marginBottom: "8px" }}>
                          Date
                        </p>
                        <p style={{ fontSize: "16px", fontWeight: "500", color: "#1f2937" }}>
                          {certificate.completionDate}
                        </p>
                      </div>

                      {/* Signature */}
                      <div style={{ textAlign: "center", flex: "1", padding: "0 32px" }}>
                        <div style={{ display: "inline-block" }}>
                          <div style={{ marginBottom: "8px" }}>
                            <Image
                              src="/sign.png"
                              alt="Phil Das Signature"
                              width={160}
                              height={80}
                            />
                          </div>
                          <div style={{ borderTop: "2px solid #1f2937", paddingTop: "8px" }}>
                            <p style={{ fontWeight: "bold", fontSize: "16px", color: "#1f2937", marginBottom: "4px" }}>
                              Phil Dass
                            </p>
                            <p style={{ fontSize: "14px", color: "#6b7280" }}>
                              Author & Course Director
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Certificate Number */}
                      <div style={{ textAlign: "right" }}>
                        <p style={{ fontSize: "14px", fontWeight: "600", color: "#6b7280", marginBottom: "8px" }}>
                          Certificate No.
                        </p>
                        <p style={{ fontSize: "16px", fontWeight: "500", fontFamily: "monospace", color: "#1f2937" }}>
                          {certificate.certificateNumber}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <Button 
                size="lg" 
                onClick={handleDownload}
                className="shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Certificate
              </Button>
              <Link href="/lessons/sample">
                <Button size="lg" variant="outline" className="shadow-lg">
                  Return to Lessons
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <footer className="border-t mt-20 py-8 bg-white">
          <div className="container text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Indian Institute of Professional Skills Development. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
