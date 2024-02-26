import React from "react";

// import styles from "./test.module.scss";

interface TestIdProps {
  params: {
    id: string;
  };
}

const TestId: React.FC<TestIdProps> = ({ params }) => {
  return <div>Test Component: {params.id}</div>;
};

export default TestId;
