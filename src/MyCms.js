import React from "react";
import { Editor } from "@tinymce/tinymce-react";
export default function Mycms(props) {
  const editorRef = React.useRef(null);
  const log = async () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={"<p>Vishal Kardam</p>"}
        init={{
          height: 440,
          menubar: true,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount"
          ],
          toolbar:
            "undo redo | formatselect |  fontselect  | bold italic underline |  forecolor |  backcolor  | \
                  alignleft aligncenter alignright  |  bullist numlist outdent indent | Table Image ClipArt SuperScript Subscript|  help"
        }}
      />
      <button
        style={props.Customstyle}
        onClick={() => {
          log();
        }}
      >
        {" "}
        get Cms Code
      </button>
    </>
  );
}
