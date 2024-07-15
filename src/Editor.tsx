import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/duotone-light.css";
import { FC } from "react";

const Editor: FC<{ code: string | undefined }> = ({ code }) => (
  <Flex vertical gap={24}>
    <Title level={2} style={{ fontSize: 24 }}>
      App source code
    </Title>

    <CodeMirror
      value={code}
      options={{
        lineNumbers: true,
      }}
    />
  </Flex>
);

export default Editor;
