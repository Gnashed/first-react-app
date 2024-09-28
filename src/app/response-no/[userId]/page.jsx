import React from 'react';
import FactCard from '@/components/Card';
import PropTypes from 'prop-types';

// In Next.js, Page components have access to a lot of things. Params is one of them. Similar to an event object in vanilla JS.
export default async function ResponseNoPage({ params }) {
  const response = await fetch(`https://planr-a1f90-default-rtdb.firebaseio.com/responseNo.json?orderBy="userId"&equalTo="${params.userId}"`, { cache: 'no-store' }); // { cache: 'no-store' } tells Next.js to not store the cached data.
  const facts = await response.json();

  // console.log(Object.values(facts)); // Server component. Will log facts
  return (
    <div>
      {Object.values(facts).map((fact) => (
        <FactCard fact={fact.text} />
      ))}
    </div>
  );
}

ResponseNoPage.propTypes = {
  params: PropTypes.string.isRequired,
};
