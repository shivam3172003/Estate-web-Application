import { useEffect, useRef } from "react";

const UploadWidget = ({ uwConfig, setState }) => {
  const uploadWidgetRef = useRef(null);
  const uploadButtonRef = useRef(null);

  useEffect(() => {
    // Ensure Cloudinary is available before initializing
    const checkCloudinary = () => {
      if (window.cloudinary) {
        initializeUploadWidget();
      } else {
        setTimeout(checkCloudinary, 500);
      }
    };

    const initializeUploadWidget = () => {
      uploadWidgetRef.current = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Upload successful:", result.info);
            setState((prev) => [...prev, result.info.secure_url]);
            // Update avatar state
          } else if (error) {
            console.error("Upload error:", error);
          }
        }
      );
    };

    checkCloudinary();
  }, [uwConfig, setState]);

  return (
    <button
      id="upload_widget"
      className="cloudinary-button"
      onClick={() => uploadWidgetRef.current && uploadWidgetRef.current.open()}
    >
      Upload Image
    </button>
  );
};

export default UploadWidget;
