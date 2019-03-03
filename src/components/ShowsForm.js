import React from 'react';

const ShowsForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <p>Search for TV shows:</p>
    <input type="text" name="searchTerm" />
    <button type="submit">Submit</button>
  </form>
);

export default ShowsForm;
