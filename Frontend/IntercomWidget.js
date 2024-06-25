import React, { useEffect } from 'react';

function IntercomWidget() {
  useEffect(() => {
    window.Intercom('boot', {
      app_id: 'your_app_id'
    });

    return () => {
      window.Intercom('shutdown');
    };
  }, []);

  return null;
}

export default IntercomWidget;

