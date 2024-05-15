import { useState } from 'react';
import PropTypes from 'prop-types';

function CheckBox({ text, onChange }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-row items-center gap-2 px-4">
      <input
        type="checkbox"
        checked={checked}
        className="cursor-pointer"
        onChange={() => {
          setChecked(!checked);
          onChange(text);
        }}
      />
      <label
        className="cursor-pointer"
        onClick={() => {
          setChecked(!checked);
          onChange(text);
        }}
      >
        {text}
      </label>
    </div>
  );
}

export default CheckBox;

CheckBox.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
};
