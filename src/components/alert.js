import React from 'react';

export default ({handleClose}) => (
<div>
      <article className="message is-primary">
      <div className="message-header">
        <p>Updated!!</p>
        <button className="delete" aria-label="delete" onClick={handleClose}></button>
      </div>
      <div className="message-body">
        Values Updated Successfully.... <i className="fa"> </i>
      </div>
      </article>
</div>
);
