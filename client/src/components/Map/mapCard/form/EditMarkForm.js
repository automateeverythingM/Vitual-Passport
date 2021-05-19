import { useForm, Controller } from "react-hook-form";
import RattingInput from "../ratting/ratting";
import InputWithLabel from "./inputWithLabel";
import ImageUrlChecker from "../image-preview/ImageUrlChecker";
import { useContext, useEffect, useMemo, useRef } from "react";
import { Context } from "../../../../globalState/index";
import { setMarkerToNull } from "../../../../globalState/actions";

const setMultipleValues = (values, setValue) => {
  const { title, description, comments, visitDate, ratting, image } = values;
  const obj = { title, description, comments, visitDate, ratting, image };

  for (const key in obj) {
    if (values.hasOwnProperty(key)) {
      const element = values[key];
      setValue(key, element, { shouldValidate: true });
    }
  }
};

function EditMarkForm({ pushToServer }) {
  const {
    state: { addEditMarkerLocation },
    dispatch,
  } = useContext(Context);
  const formRef = useRef();

  const {
    handleSubmit,
    register,
    formState: { errors },
    trigger,
    setValue,
    control,
  } = useForm();

  // useEffect(() => {
  //   document.getElementById("titleLabel").click();
  // }, []);

  useEffect(() => {
    setMultipleValues(addEditMarkerLocation, setValue);
  }, [addEditMarkerLocation, setValue]);

  const { buttonText, titleText } = useMemo(() => {
    const buttonText =
      addEditMarkerLocation.type === "add" ? "Add New Log" : "Update Log";
    const titleText =
      addEditMarkerLocation.type === "add"
        ? "New Travel Log"
        : "Update Travel Log";

    return { buttonText, titleText };
  }, [addEditMarkerLocation]);

  return (
    <form
      ref={formRef}
      className="relative bg-gray-200 py-6 px-4 rounded-md w-2/3 text-xs sm:w-96 sm:mx-5 sm:text-base"
      onSubmit={handleSubmit(pushToServer)}
      onClick={(e) => e.stopPropagation()}
    >
      <button className="close_btn" onClick={() => dispatch(setMarkerToNull())}>
        &times;
      </button>
      <h3>{titleText}</h3>
      <hr className="mb-2" />
      <InputWithLabel
        id="title"
        label="Title"
        type="text"
        name="title"
        {...register("title", {
          required: "Title is required",
        })}
        validationError={errors.title?.message}
        autoComplete="off"
        autoFocus
      />
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={4}
          type="text"
          name="description"
          {...register("description")}
          className="mt-1 rounded-md"
        />
      </div>
      <InputWithLabel
        type="text"
        id="comments"
        label="Comments"
        name="comments"
        {...register("comments")}
        autoComplete="off"
      />
      <ImageUrlChecker
        register={register}
        errors={errors}
        trigger={trigger}
        setValue={setValue}
      />

      <Controller
        control={control}
        name="visitDate"
        rules={{ required: "Date of visit is required" }}
        render={({ field: { ref, value, ...inputRest } }) => {
          const date = new Date(value).toLocaleDateString("en-CA");
          return (
            <InputWithLabel
              type="date"
              id="visitDate"
              label="Visit date"
              value={date}
              ref={ref}
              {...inputRest}
              validationError={errors.visitDate?.message}
            />
          );
        }}
      />
      <div>
        Rate this destination
        <RattingInput
          {...register("ratting")}
          currentRatting={addEditMarkerLocation.ratting}
        />
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  );
}

export default EditMarkForm;
