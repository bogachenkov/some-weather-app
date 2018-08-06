import React from 'react';

const Error = ({error}) => {
  return (
    <div className="Error">
      <article>
        <header>
          Произошла ошибка!
        </header>
        <p>{error}</p>
      </article>
    </div>
  );
};

export default Error;