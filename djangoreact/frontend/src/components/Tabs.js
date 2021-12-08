import React, { useState } from 'react';
import '../styles/Tabs.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [data, setData] = useState(null);
  const { access } = useSelector((state) => state.auth);
  const toggleTab = (index) => {
    setToggleState(index);
    const config = {
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line prettier/prettier
        'Authorization': `Bearer ${access}`,
      },
    };

    axios.get('http://127.0.0.1:8000/api/user-pill-list/', config).then((response) => {
      setData(response.data);
    });
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button type="button" className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>
          최근 검색한 알약
        </button>
        <button type="button" className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>
          즐겨찾기한 알약
        </button>
      </div>

      <div className="content-tabs">
        <div className={toggleState === 1 ? 'content  active-content' : 'content'}>
          <h2>내가 검색한 알약을 보여줘유</h2>
          <hr />
        </div>

        <div className={toggleState === 2 ? 'content  active-content' : 'content'}>
          <h2>즐겨찾기한 알약을 보여줘유</h2>
          <hr />
          <p>{data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly />}</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
