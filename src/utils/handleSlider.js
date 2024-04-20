export const handleSlider = (type, slider) => {
  if (type === "prev") {
    slider.current.scrollBy({
      left: -340,
    });
  } else {
    slider.current.scrollBy({
      left: 340,
    });
  }
};
