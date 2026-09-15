"use client";

import { useEffect, useRef, useState } from "react";
import { defaultCvName, defaultCvPath } from "@/lib/data";

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];

function triggerDownload(url, filename) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function CvActions() {
  const fileInputRef = useRef(null);
  const objectUrlRef = useRef(null);
  const [cvUrl, setCvUrl] = useState(defaultCvPath);
  const [cvName, setCvName] = useState(defaultCvName);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const base64Cv = localStorage.getItem("cvBase64");
    const storedName = localStorage.getItem("cvFileName");

    if (base64Cv && storedName && storedName !== "avijeetshahcv.pdf") {
      fetch(base64Cv)
        .then((res) => res.blob())
        .then((blob) => {
          if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
          const nextUrl = URL.createObjectURL(blob);
          objectUrlRef.current = nextUrl;
          setCvUrl(nextUrl);
          setCvName(storedName);
        })
        .catch(() => {
          localStorage.removeItem("cvBase64");
          localStorage.removeItem("cvFileName");
        });
    }

    return () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  function handleFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      alert("Please upload a valid CV file (PDF, DOC, DOCX).");
      return;
    }

    if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    const blobUrl = URL.createObjectURL(file);
    objectUrlRef.current = blobUrl;
    setCvUrl(blobUrl);
    setCvName(file.name);

    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        localStorage.setItem("cvBase64", ev.target.result);
        localStorage.setItem("cvFileName", file.name);
        localStorage.setItem("cvType", file.type);
      } catch (error) {
        console.warn("LocalStorage capacity note", error);
      }
    };
    reader.readAsDataURL(file);
  }

  function downloadCv() {
    if (cvUrl && cvName) {
      triggerDownload(cvUrl, cvName);
      return;
    }
    alert("No CV uploaded yet. Please upload your CV first.");
  }

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  const fileExtension = cvName ? cvName.split(".").pop().toUpperCase() : "";

  return (
    <>
      <div className="mt-8 border-t border-[#f0e4dc] pt-4 reveal delay-5">
        <h3 className="section-title">
          <i className="fas fa-file-alt" /> Curriculum Vitae
        </h3>
        <div className="mt-3 flex flex-col gap-3">
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileChange}
          />
          <button type="button" className="btn-primary" onClick={downloadCv}>
            <i className="fas fa-download" /> Download CV
          </button>
          <button type="button" className="btn-primary btn-view-cv" onClick={openModal}>
            <i className="fas fa-eye" /> View CV with Animation
          </button>
        </div>
      </div>

      <div
        className={`modal-overlay${modalOpen ? " active" : ""}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}
      >
        <div className="modal-container">
          <div className="flex items-center justify-between border-b border-[#f0e4dc] bg-gradient-to-br from-[#fff8f4] to-[#eef2ff] px-6 py-[1.2rem]">
            <h3 className="text-[1.4rem] font-semibold text-ink">
              <i className="fas fa-file-alt" /> Curriculum Vitae Preview
            </h3>
            <button type="button" className="close-modal" onClick={closeModal} aria-label="Close">
              &times;
            </button>
          </div>
          <div className="px-[1.8rem] py-8 text-center">
            <div className="cv-preview-icon">
              <i className="fas fa-file-pdf" />
            </div>
            <div className="my-5 rounded-2xl border border-line bg-[#f8fafc] p-4 break-words">
              {cvUrl && cvName ? (
                <>
                  <p className="my-2 text-[0.9rem]">
                    <strong>Document ready for preview</strong>
                  </p>
                  <p className="my-2 text-[0.9rem]">
                    <i className="fas fa-file" /> {cvName}
                  </p>
                  <p className="my-2 text-[0.9rem]">
                    <span className="skill-tag">{fileExtension} document</span>
                  </p>
                  <p className="mt-3 text-[0.8rem] text-muted">
                    Click the button below to download and view full CV.
                  </p>
                </>
              ) : (
                <div className="p-4 text-[#c2410c]">
                  <i className="fas fa-exclamation-triangle text-[2rem]" />
                  <p className="mt-3">No CV uploaded yet.</p>
                  <p>Please use the &quot;Upload CV&quot; button to add your Curriculum Vitae.</p>
                </div>
              )}
            </div>
            <div className="mt-6 flex justify-center gap-[15px]">
              <button
                type="button"
                className="modal-download-btn"
                onClick={() => {
                  if (cvUrl && cvName) {
                    triggerDownload(cvUrl, cvName);
                    closeModal();
                  } else {
                    alert("CV is not available for download.");
                  }
                }}
              >
                <i className="fas fa-download" /> Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
