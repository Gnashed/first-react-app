import React from 'react';
import PropTypes from 'prop-types';
import FactCard from '@/components/Card';

export default async function ResponseYesPage({ params }) {
  const response = await fetch(`https://planr-a1f90-default-rtdb.firebaseio.com/responseYes.json?orderBy="userId"&equalTo="${params.userId}"`, { cache: 'no-store' });
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

ResponseYesPage.propTypes = {
  params: PropTypes.string.isRequired,
};
