import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

export default function AboutPagePreview({ entry, widgetFor }) {
  return (
    <div>
      <AboutPageTemplate
        title={entry.getIn(["data", "title"])}
        content={widgetFor("body")}
      />
    </div>
  );
}
