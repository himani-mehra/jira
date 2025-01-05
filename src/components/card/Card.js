import React from 'react'
import "./Card.css"
import Avatar from "../avatar/Avatar"

const Card = () => {
  return (
    <div className="card">
      <div>
        An issue's priority indicates its relative importance. Both the
        priorities and their meanings can be customized by your administrator to
        suit your organization.
      </div>
      <div className="card-bottom">
        <div className="bottom-left">
          <i class="bi bi-check-square-fill" style={{ color: "#4fade6" }}></i>
          <i class="bi bi-arrow-up" style={{ color: "#65ba43" }}></i>
          <i class="bi bi-arrow-down" style={{ color: "#e94a4a" }}></i>
          <i class="bi bi-bookmark-fill" style={{ color: "#65ba43" }}></i>
        </div>
        <Avatar />
      </div>
    </div>
  );
}

export default Card