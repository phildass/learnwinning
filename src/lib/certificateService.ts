
export interface CertificateData {
  userId: string;
  fullName: string;
  completionDate: Date;
  courseTitle: string;
  issuer: string;
  signatory: string;
}

export const generateCertificateNumber = (userId: string): string => {
  const year = new Date().getFullYear();
  const paddedId = String(userId).padStart(6, "0");
  return `LLAW-${year}-${paddedId}`;
};

export const getCertificateUrl = (userId: string): string => {
  return `/certificate/${userId}`;
};

export const verifyCertificateEligibility = (
  completedChapters: number[],
  totalChapters: number,
  wantsCertificate: boolean
): boolean => {
  return (
    wantsCertificate &&
    completedChapters.length === totalChapters &&
    completedChapters.length > 0
  );
};

export const formatCertificateDate = (date: Date): string => {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const generateCertificateHTML = (data: CertificateData): string => {
  const certificateNumber = generateCertificateNumber(data.userId);
  const formattedDate = formatCertificateDate(data.completionDate);

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Certificate - ${data.fullName}</title>
        <style>
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            font-family: 'Times New Roman', serif;
            margin: 0;
            padding: 0;
            width: 297mm;
            height: 210mm;
            position: relative;
          }
          .certificate-container {
            width: 100%;
            height: 100%;
            position: relative;
            background: url('/certificate.png') center/cover no-repeat;
          }
          .content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 80%;
          }
          .name {
            font-size: 48px;
            font-weight: bold;
            margin: 20px 0;
            color: #1a1a1a;
          }
          .course-title {
            font-size: 28px;
            margin: 15px 0;
            color: #333;
          }
          .signature {
            margin-top: 40px;
            display: inline-block;
            border-top: 2px solid #333;
            padding-top: 10px;
          }
          .signatory-name {
            font-size: 20px;
            font-weight: bold;
          }
          .signatory-title {
            font-size: 14px;
            color: #666;
          }
          .certificate-details {
            margin-top: 20px;
            font-size: 14px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="certificate-container">
          <div class="content">
            <div class="name">${data.fullName}</div>
            <p>for successfully completing</p>
            <div class="course-title">${data.courseTitle}</div>
            <div class="signature">
              <div class="signatory-name">${data.signatory}</div>
              <div class="signatory-title">Author & Course Director</div>
            </div>
            <div class="certificate-details">
              <p>Date: ${formattedDate}</p>
              <p>Certificate No: ${certificateNumber}</p>
              <p>${data.issuer}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};
