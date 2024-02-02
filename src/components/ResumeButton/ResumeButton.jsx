import { React } from "react";

import "./ResumeButton.css";

export default function ResumeButton() {
  return (
    <a
      className="btn-resume hover px-5 py-3 mt-4 text-center"
      title="Download Resume"
      href="/documents/ptsionis_resume_p.pdf"
      role="button"
      download
    >
      DOWNLOAD RESUME
    </a>
  );
}
