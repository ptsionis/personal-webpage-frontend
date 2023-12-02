import { React } from "react";

import "./ResumeButton.css";

export default function ResumeButton() {
  return (
    <a
      className="hover btn-resume p-3 mt-4 text-center"
      title="DOWNLOAD RESUME"
      href="/documents/ptsionis_resume.pdf"
      role="button"
      download
    >
      DOWNLOAD RESUME
    </a>
  );
}
