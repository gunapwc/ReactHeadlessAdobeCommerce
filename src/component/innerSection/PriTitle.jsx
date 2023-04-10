import React from "react";
import "./title.scss";

function PriTitle(props) {
  const { title, subTitle, details } = props;
  return (
    <div className="innerSection">
      {title && <h1 className="innerSection_title">{title}</h1>}
      {subTitle && <h4 className="innerSection_subTitle">{subTitle}</h4>}
      {details && <p className="innerSection_detail">{details}</p>}
    </div>
  );
}

export default PriTitle;
