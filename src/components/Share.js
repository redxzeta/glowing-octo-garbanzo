import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestIcon,
  PinterestShareButton,
} from "react-share";

export default function Share({ url, title }) {
  return (
    <div>
      <h4>SHARE:</h4>
      <FacebookShareButton url={url}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>
      <PinterestShareButton url={url}>
        <PinterestIcon size={40} round={true} />
      </PinterestShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={40} round={true} />
      </EmailShareButton>
    </div>
  );
}
