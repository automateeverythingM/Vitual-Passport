import React, { useCallback, useState } from "react";
import InputWithLabel from "../form/inputWithLabel";
import { ImSpinner4 } from "react-icons/im";
import { BsCardImage } from "react-icons/bs";

function ImageUrlChecker({ register, errors, trigger, ...rest }) {
  const [loading, setLoading] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(null);

  const validateImage = async (value) => {
    if (!value) return true;
    const image = new Image();
    image.src = value;
    setLoading(true);
    const imgPromise = await new Promise((res, rej) => {
      image.onload = () => {
        setImageLoaded(image);
        res(true);
      };
      image.onerror = () => {
        setImageLoaded(false);
        res(false);
      };
    });
    setLoading(false);

    return imgPromise || "Invalid image url";
  };

  const imagePreviewOrFallback = useCallback(() => {
    return imageLoaded ? (
      <div className="bg-gray-700  rounded-sm">
        <img
          src={imageLoaded.src}
          alt="visited city"
          className="w-full h-24 object-cover neo_shadow my-2"
        />
      </div>
    ) : (
      <div className="w-full h-40 flex flex-col justify-center items-center">
        <div>
          <BsCardImage size="3rem" />
        </div>
        <div>no preview available</div>
      </div>
    );
  }, [imageLoaded]);

  return (
    <>
      {imagePreviewOrFallback()}
      <InputWithLabel
        id="image"
        label="Image Url"
        type="text"
        name="image"
        {...register("image", {
          pattern: {
            value: /^(http|https):\/\//,
            message: "Invalid must start with http or https.",
          },
          validate: validateImage,
        })}
        validationError={errors.image?.message}
        autoComplete="off"
        onBlur={() => trigger("image")}
        {...rest}
      />
      {loading && (
        <div>
          <ImSpinner4 size="12px" className="animate-spin inline mr-2" />
          <span>checking url</span>
        </div>
      )}
    </>
  );
}

export default ImageUrlChecker;
