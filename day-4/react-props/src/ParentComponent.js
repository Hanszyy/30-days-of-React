import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent name="John" age={30} />
    </div>
  );
};

export default ParentComponent;
