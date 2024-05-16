import { getTrackBackground, Range } from "react-range";

const InputRange = ({ STEP, MIN, MAX, values, handleChanges }) => {
  return (
    <>
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(vals) => handleChanges(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "3px",
              width: "100%",
              background: getTrackBackground({
                values: values,
                colors: ["#EDEDED", "#ec3434", "#EDEDED"],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "17px",
              width: "5px",
              backgroundColor: "#ec3434",
              backgroundColor: isDragged ? "#ec3434" : "#ec3434",
            }}
          />
        )}
      />
    </>
  );
};

export default InputRange;
