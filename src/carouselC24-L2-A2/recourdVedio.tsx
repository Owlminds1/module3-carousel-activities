'use client';

import React, { useRef, useState } from 'react';

const VideoRecorder = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const recordedChunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }

    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.current.push(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks.current, { type: 'video/webm' });
      setVideoURL(URL.createObjectURL(blob));
      recordedChunks.current = [];
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    const tracks = (videoRef.current?.srcObject as MediaStream)?.getTracks();
    tracks?.forEach(track => track.stop());
    setRecording(false);
  };

  return (
    <div className="p-4">
      <video ref={videoRef} autoPlay muted className="w-full max-w-md border rounded" />
      <div className="my-4 flex gap-2">
        {!recording ? (
          <button onClick={startRecording} className="px-4 text-lg py-2 cursor-pointer bg-green-600 text-white rounded-lg">
            Start Recording
          </button>
        ) : (
          <button onClick={stopRecording} className="px-4 py-2 text-lg cursor-pointer bg-red-600 text-white rounded-lg">
            Stop Recording
          </button>
        )}
      </div>

      {videoURL && (
        <div>
          <h3 className="text-lg font-semibold">Recorded Video:</h3>
          <video src={videoURL} controls className="w-full max-w-md mt-2" />
          <a href={videoURL} download="recorded-video.webm" className="text-blue-500 underline">
            Download Video
          </a>
        </div>
      )}
    </div>
  );
};

export default VideoRecorder;
