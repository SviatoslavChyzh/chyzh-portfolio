'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Link from 'next/link';

export default function DownloadResumeButton() {
  const handleDownload = () => {
    const resumeUrl = '/sviatoslav-chyzh-resume.pdf';

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'sviatoslav-chyzh-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} className="m-auto">
      <Download className="mr-2 h-4 w-4" />
      <Link href="/sviatoslav-chyzh-resume.pdf" target="_blank">
        Download Resume
      </Link>
    </Button>
  );
}
