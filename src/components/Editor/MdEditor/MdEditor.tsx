import React from "react";

import MDEditor from "@uiw/react-md-editor";
import { ContextStore } from "@uiw/react-md-editor/src/Context";

type MdEditorProps = {
  value: string | undefined;
  onChange: (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: ContextStore
  ) => void;
};

const MdEditor = (props: MdEditorProps) => {
  const { value, onChange } = props;

  return (
    <MDEditor
      value={value}
      onChange={onChange}
      extraCommands={[]}
      style={{ flex: 1, boxShadow: "none" }}
    />
  );
};

export default MdEditor;
