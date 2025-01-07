import React from "react";
import "./CreateIssueModal.css";
import RichTextEditor from "../richTextEditor/RichTextEditor"

const CreateIssueModal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  return (
    <div className="issue-modal-overlay" onClick={handleClose}>
      <div className="issue-modal" onClick={(e) => e.stopPropagation()}>
        <div className="issue-modal-content">Create issue</div>
        <div className="issue-type">
          <div className="heading">Issue Type</div>
          <div className="modal-input">
            <input type="text"></input>
            <i class="bi bi-chevron-down"></i>
            <i class="bi bi-chevron-up"></i>
          </div>
        </div>
        <div className="footnote">
          Start typing to get a list of possible matches.
        </div>
        <div className="horizontal-space"></div>
        <hr />
        <div className="horizontal-space"></div>
        <div className="issue-type">
          <div className="heading">Short Summary</div>
          <div className="modal-input">
            <input type="text"></input>
            <i class="bi bi-chevron-down"></i>
            <i class="bi bi-chevron-up"></i>
          </div>
        </div>
        <div className="footnote">
          Concisely summarize the issue in one or two sentences.
        </div>
        <div className="horizontal-space"></div>
        <RichTextEditor />
        <div className="issue-type">
          <div className="heading">Reporter</div>
          <div className="modal-input">
            <input type="text"></input>
            <i class="bi bi-chevron-down"></i>
            <i class="bi bi-chevron-up"></i>
          </div>
        </div>

        <div className="horizontal-space"></div>
        <div className="issue-type">
          <div className="heading">Assignees</div>
          <div className="modal-input">
            <input type="text"></input>
            <i class="bi bi-chevron-down"></i>
            <i class="bi bi-chevron-up"></i>
          </div>
        </div>

        <div className="horizontal-space"></div>
        <div className="issue-type">
          <div className="heading">Priority</div>
          <div className="modal-input">
            <input type="text"></input>
            <i class="bi bi-chevron-down"></i>
            <i class="bi bi-chevron-up"></i>
          </div>
        </div>
        <div className="footnote">Priority in relation to other issues.</div>
        <div className="horizontal-space"></div>
        <button className="submit-btn">Create Issue</button>
        <button className="close-btn">Cancel</button>
      </div>
    </div>
  );
};

export default CreateIssueModal;
