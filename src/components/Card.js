import React from 'react';

const Card = ({children, className, title, icon}) => {
  return (
    <section className={`Card-col ${className}`}>
      <article className="Card">
        <header className="Card__header">
          <h1>{title}</h1>
        </header>
        {children}
      </article>
    </section>
  );
};

export default Card;