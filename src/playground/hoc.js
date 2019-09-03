// Higher Order Component - A component that renders another component.
// The goal of HOC is to reuse code.

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Some info: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private bruh!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>Nah son!</p>) }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDom.render(<AdminInfo isAdmin={true} info="holi" />, document.getElementById('app'));
ReactDom.render(<AuthInfo isAuthenticated={true} info="holi" />, document.getElementById('app'));