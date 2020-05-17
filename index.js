const hexToRGBA = (hex, opacity) => {
  return (
    "rgba(" +
    ((hex = hex.replace("#", ""))
      .match(new RegExp("(.{" + hex.length / 3 + "})", "g")) || '#fafafa' )
      .map(function (l) {
        return parseInt(hex.length % 2 ? l + l : l, 16);
      })
      .concat(opacity || 0.22)
      .join(",") +
    ")"
  );
};

const colorBoxShadow = (options) => {
  // lets rundown through the images
  let images = document.querySelectorAll(".colorBoxShadow");

  //set your options

  switch (options.shadow_type) {
    case "light-1":
      options.shadow_type = `0 1px 3px ${hexToRGBA(options.shadow_color,0.12)},0 1px 2px ${hexToRGBA(options.shadow_color,0.24)}`;
      break;
    case "light-2":
      options.shadow_type = `0 3px 6px ${hexToRGBA(options.shadow_color,0.16)},0 3px 6px ${hexToRGBA(options.shadow_color,0.23)}`;
      break;
    case "medium-1":
      options.shadow_type = `0 10px 20px ${hexToRGBA(options.shadow_color,0.19)},0 3px 6px ${hexToRGBA(options.shadow_color,0.23)}`;
      break;
    case "medium-2":
      options.shadow_type = `0 14px 28px ${hexToRGBA(options.shadow_color,0.25)},0 3px 6px ${hexToRGBA(options.shadow_color,0.22)}`;
      break;
    case "hard":
      options.shadow_type = `0 19px 38px ${hexToRGBA(options.shadow_color,0.30)},0 3px 6px ${hexToRGBA(options.shadow_color,0.22)}`;
      break;
    default:
        options.shadow_type = `0 1px 3px ${hexToRGBA(options.color,0.12)},0 1px 2px ${hexToRGBA(options.color,0.24)}`;
    }

  images.forEach((image) => {
    image.style.boxShadow = `${options.shadow_type}`;
  });
};

module.exports.colorBoxShadow = colorBoxShadow;
