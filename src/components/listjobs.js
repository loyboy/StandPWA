import React from 'react';
import Protected from './protected';
import UserLayout from './user-layout';

export default () => (
  <Protected>
    <UserLayout>
      <div className="columns is-multiline">

      </div>
    </UserLayout>
  </Protected>
);
