import React from "react";

import Name from "../../components/Name/Name";
import ResumeButton from "../../components/ResumeButton/ResumeButton";

const Home = () => {
  return (
    <div className="wrapper">
      <main className="container">
        <div className="flex-grow-1"></div>
        <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
          <Name />
          <div className="d-flex flex-column justify-content-center align-items-center text-center fw-bold mb-5">
            <h6>FULL STACK DEVELOPER @ DELOITTE</h6>
            <h6>
              APPLIED INFORMATICS @{" "}
              <span title="University of Macedonia">UoM</span>
            </h6>
            <p className="mt-5 fst-italic">contact@ptsionis.gr</p>
          </div>
          <ResumeButton />
        </div>
      </main>
    </div>
  );
};

export default Home;
