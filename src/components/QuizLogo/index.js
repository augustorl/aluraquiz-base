import styled from 'styled-components';
import Image from 'next/image';

import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <Image width={330} height={130} src="/images/LoL-logo.png" />
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin:  auto;
  display: flex;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
