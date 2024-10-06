import React from "react";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  TelegramShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
  TelegramIcon,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Left.css";
// export default class App extends Component {
//   render() {
const SharePopup = ({ onClose }) => {
  const shareUrl = "https://www.resources.iitacademy.in/";
  const quotes =
    "Check out this awesome website for all types of Educational Resources!";
  const hshs = "#iitacademy";
  const EmailBody =
    "Check out this awesome website for all types of Educational Resources!";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    // You may want to provide some feedback to the user that the link is copied
    alert("Link copied to clipboard!");
  };
  return (
    <div className="share-popup">
      <div className="modal-content">
        <div className="column1">
          <h1
            style={{ color: "black", fontSize: "30px", marginBottom: "15px" }}
          >
            Share our page on :-
          </h1>

          <div className="share-icons-container">
            <FacebookShareButton
              url={shareUrl}
              subject={EmailBody}
              quote={quotes}
              hashtag={hshs}
            >
              <FacebookIcon size={40} round={true} />
            </FacebookShareButton>

            <WhatsappShareButton url={shareUrl} quote={quotes} hashtag={hshs}>
              <WhatsappIcon size={40} round={true} />
            </WhatsappShareButton>

            <TwitterShareButton url={shareUrl} quote={quotes} hashtag={hshs}>
              <TwitterIcon size={40} round={true} />
            </TwitterShareButton>

            <LinkedinShareButton
              url={shareUrl}
              title="Resources - IIT Academy"
              summary={EmailBody}
              source="IIT Academy"
              quote={quotes}
              hashtag={hshs}
            >
              <LinkedinIcon size={40} round={true} />
            </LinkedinShareButton>

            <EmailShareButton url={shareUrl} subject={EmailBody}>
              <EmailIcon size={40} round={true} />
            </EmailShareButton>

            <TelegramShareButton
              url={shareUrl}
              title={EmailBody}
              hashtag={hshs}
            >
              <TelegramIcon size={40} round={true} />
            </TelegramShareButton>

            <div className="copy-link-icon" onClick={handleCopyLink}>
              <FontAwesomeIcon
                icon={faCopy}
                style={{
                  fontSize: "35px",
                  borderRadius: "15px",
                  color: "#0D6AF9",
                }}
              />
            </div>
          </div>
        </div>
        <div className="column2">
          <button className="close" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
