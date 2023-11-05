import { React } from "react";

import "./ResumeButton.css";

export default function ResumeButton() {
  return (
    <a
      className="btn-resume p-3 m-4 fw-bold text-center"
      title="Download Resume"
      href="/documents/ptsionis_resume.pdf"
      role="button"
      download
    >
      DOWNLOAD RESUME
    </a>
  );
}
