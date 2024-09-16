import React from "react";

export default function Button(props) {
  const {
    icon: IconComponent,
    icon,
    color,
    bgColor,
    height,
    width,
    text,
    border,
    padding,
    textSize,
    borderRadius,
    dispaly,
  } = props;

  return (
    <button
      style={{
        dispaly: dispaly,
        padding: padding,
        color: color,
        backgroundColor: bgColor,
        height: height,
        width: width,
        border: border,
        textSize: textSize,
        borderRadius: borderRadius,
      }}
      className="flex items-center justify-center"
    >
      {IconComponent ? <IconComponent /> : text ? <span>{text}</span> : ""}
    </button>
  );
}
