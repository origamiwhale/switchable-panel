import React from "react";

const View = ({ name, surname }) => {
  return (
    <div className="view">
      <dl>
        <dt>Name</dt>
        <dd>
          {name}
        </dd>
      </dl>
      <dl>
        <dt>Surname</dt>
        <dd>
          {surname}
        </dd>
      </dl>
    </div>
  );
};

export default View;
