import React from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const ShareURLButton = () => {
  const [searchParams] = useSearchParams();

  const handleCopyToClipboard = () => {
    // Construct the full URL with current search params
    const shareableURL = `${window.location.origin}${
      window.location.pathname
    }?${searchParams.toString()}`;

    // Copy the URL to the clipboard
    navigator.clipboard
      .writeText(shareableURL)
      .then(() => {
        toast.success("URL copied to clipboard!");
      })
      .catch((error) => {
        toast.error("Failed to copy URL.");
        console.error("Copy failed:", error);
      });
  };

  return (
    <button
      onClick={handleCopyToClipboard}
      className="flex w-full bg-[#1E293B] rounded-lg text-[#D2C4AF] justify-center items-center p-2"
    >
      Share URL
      <FontAwesomeIcon icon={faShareAlt} className="px-2" />
    </button>
  );
};

export default ShareURLButton;
