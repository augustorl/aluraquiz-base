/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
    width: 100%;
    border: none;
    padding: 8px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.mainBG};
    background-color: ${({ theme }) => theme.colors.mainBG};
    outline: 0;
`;

function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase placeholder={placeholder} onChange={onChange} {...props} />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.func.isRequired,
  name: PropTypes.func.isRequired,
  value: PropTypes.string,
};
export default Input;
