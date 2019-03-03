import React from 'react';
import Loader from 'react-loader-spinner';

import ShowsForm from './ShowsForm';
import ShowList from './ShowList';

export const ShowsView = () => {
  const searchTerm = '';
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1>Shows {'🍿'}</h1>
      <ShowsForm handleSubmit={handleSubmit} />
      {searchTerm ? (
        <ShowList searchTerm={searchTerm} />
      ) : (
        <h3>Go ahead... Add a search term! {'😃'}</h3>
      )}
    </div>
  );
};
