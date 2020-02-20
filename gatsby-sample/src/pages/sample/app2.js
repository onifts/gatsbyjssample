
import React, { useState } from 'react';

import Info from '../../components/sample/Info5';

const App = () => {
    const [visible, setVisible] = useState(false);
    return (
      <div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
        <hr />
        {visible && <Info />}
      </div>
    );

};

export default App;

// https://velog.io/@velopert/react-hooks