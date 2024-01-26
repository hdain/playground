import { MDEditorProps } from "@uiw/react-md-editor";
import dynamic from "next/dynamic";

import useIsMobile from "@/lib/hooks/use-is-mobile";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const MdEditor = (props: MDEditorProps) => {
  const { value, onChange } = props;
  const isMobile = useIsMobile();

  return (
    <MDEditor
      value={value}
      onChange={onChange}
      extraCommands={[]}
      preview={isMobile ? "edit" : "live"}
      style={{ flex: 1, boxShadow: "none" }}
    />
  );
};

export default MdEditor;
