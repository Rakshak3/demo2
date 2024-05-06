import React, { useRef, useState, useEffect } from "react";
import RecordRTC from "recordrtc";
import axios from "axios";
import "./interviewroom.css";

const InterviewRoom = ({ recordingInProgress }) => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (recordingInProgress) {
      startRecording();
    } else {
      stopRecordingAndSubmit();
    }
  }, [recordingInProgress]);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        const recorder = RecordRTC(stream, { type: "video" });
        recorder.startRecording();
        mediaRecorderRef.current = recorder;
        setRecording(true);
        setTimer(0); // Reset timer when recording starts
        webcamRef.current.srcObject = stream; // Set webcam stream to the video element
      })
      .catch((error) => {
        console.error("Error starting recording:", error);
      });
  };

  const stopRecordingAndSubmit = async () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stopRecording(async () => {
        const blob = mediaRecorderRef.current.getBlob();
        const formData = new FormData();
        formData.append("video", blob, "recorded_video.webm");

        try {
          const response = await axios.post(
            "http://localhost:8000/api/video",
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          if (response.status === 200 || response.status === 201) {
            console.log("Video uploaded successfully");
          } else {
            console.error("Failed to upload video:", response.statusText);
          }
        } catch (error) {
          console.error("Error uploading video:", error.message);
        }

        setRecording(false);
      });
    }
  };

  return (
    <div className="col-12 webcamera">
      <video ref={webcamRef} autoPlay muted className="video-cam" />
      {recording && (
        <div className="recording">
          Recording: {Math.floor(timer / 60)}:
          {(timer % 60).toLocaleString("en-US", { minimumIntegerDigits: 2 })}
        </div>
      )}
    </div>
  );
};

export default InterviewRoom;
