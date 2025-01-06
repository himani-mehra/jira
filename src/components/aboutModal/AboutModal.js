import React from "react";
import "./AboutModal.css";
import Feedback from "../../assets/feedback.png"

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="about-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <img src={Feedback} />
          <p className="font-medium about-text">
            This simplified Jira clone is built with React on the front-end and
            Node/TypeScript on the back-end.
          </p>

          <p>
            Read more on my website or reach out via{" "}
            <span className="website-link">himani.mehra@outlook</span>
          </p>
          <div className="bottom-button">
            <a
              href="https://himani-mehra.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="close-button">Visit Website</button>
            </a>
            <a
              href="https://github.com/himani-mehra"
              target="_blank"
              rel="noreferrer"
            >
              <button className="github-repo">
                <i class="bi bi-github"></i>
                Github Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
