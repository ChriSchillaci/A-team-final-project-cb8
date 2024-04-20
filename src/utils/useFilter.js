import { useState } from "react";

const useFilter = () => {
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const [genreDropdownOpen, setGenreDropdownOpen] = useState(false);
  const togglePlatformDropdown = () => {
    setPlatformDropdownOpen(!platformDropdownOpen);
  };

  const toggleGenreDropdown = () => {
    setGenreDropdownOpen(!genreDropdownOpen);
  };

  return {
    platformDropdownOpen,
    genreDropdownOpen,
    togglePlatformDropdown,
    toggleGenreDropdown,
  };
};

export default useFilter;
