import React from "react";

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URL;

const App: React.FC = () => {
  // const [loading, setLoading] = useState(false);
  // const [open, setOpen] = useState(false);

  // const showModal = () => {
  //   setOpen(true);
  // };
  console.log(BASE_URL);
  // const handleOk = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     setOpen(false);
  //   }, 3000);
  // };

  // const handleCancel = () => {
  //   setOpen(false);
  // };

  return (
    <>
      {BASE_URL}
      {/* App 2 */}
      {/* <Button type="primary" onClick={showModal}>
        Open Modal with customized footer
      </Button>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> */}
    </>
  );
};

export default App;
