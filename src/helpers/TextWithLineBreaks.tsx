import React from "react";

interface TextWithLineBreaksProps {
  text: string;
}

export const TextWithLineBreaks: React.FC<TextWithLineBreaksProps> = ({ text }) => {
  const lines = text.split("\n");
  const textWithBreaks = lines.map((line, index) => (
    <React.Fragment key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 && <br />}
    </React.Fragment>
  ));

  return <React.Fragment>{textWithBreaks}</React.Fragment>;
};
