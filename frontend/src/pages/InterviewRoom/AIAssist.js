import React, { useState } from "react";
import axios from "axios";
import "./aiassist.css";
import InterviewRoom from "./InterviewRoom";
import AIimg from "../../assets/images/GIFvoiceassistant.gif";

const AIAssist = () => {
  const [recordingInProgress, setRecordingInProgress] = useState(false); // Track whether recording is in progress

  const startInterview = async () => {
    try {
      // Start recording when starting the interview
      startRecording();
      
      const formData = {
        value: true,
      };

      const res = await axios.post(
        "http://localhost:8000/api/start-interview/",
        formData
      );
      const data = res.data;
      console.log(data);
      if (data.call === true) {
        // If response from backend is true, stop recording and submit
        stopRecordingAndSubmit();
      }
    } catch (error) {
      console.error("Error starting interview:", error);
    }
  };

  const startRecording = () => {
    // Logic to start recording
    setRecordingInProgress(true);
  };

  const stopRecordingAndSubmit = async () => {
    // Logic to stop recording and submit
    setRecordingInProgress(false);
  };

  return (
    <>
      <div className="col-12 AIpage pt-5">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 col-12">
              <div className="cam-recorder">
                <InterviewRoom recordingInProgress={recordingInProgress} />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div>
                <div className="ai-img">
                  <img src={AIimg} alt="AI
                  " className="img-fluid w-100 h-100" />
                  <button className="btn btn-primary" onClick={startInterview}>
                    Start Interview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAssist;


