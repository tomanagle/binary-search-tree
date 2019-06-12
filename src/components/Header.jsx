import React from 'react';
const Sidebar = ({ current, setCurrent, insert, data }) => {
  return (
    <header className="sidebar-wrapper fullwidth">
      <input
        className="next-node-input fullwidth"
        type="number"
        name="current"
        value={current}
        onChange={e => setCurrent(e.target.value)}
        placeholder="Next node value"
      />

      <button
        className="next-node-button fullwidth"
        disabled={!current || isNaN(current)}
        onClick={() => {
          insert(parseInt(current, 10));
          setCurrent('');
        }}
      >
        Add node
      </button>
    </header>
  );
};

export default Sidebar;
