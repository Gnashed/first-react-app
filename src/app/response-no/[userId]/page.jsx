import React from 'react';
import PropTypes from 'prop-types';

// In Next.js, Page components have access to a lot of things. Params is one of them. Similar to an event object in vanilla JS.
export default function ResponseNoPage({ params }) {
  return <div>{params.userId}</div>;
}

ResponseNoPage.propTypes = {
  params: PropTypes.string.isRequired,
};
