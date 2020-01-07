import React from 'react';
export default React.memo(function Instruction() {
  return (
    <div style={{ width: 350 }}>
      <span style={{ fontSize: 18, fontWeight: '600' }}>Instruction:</span>
      <br /> Click buttons to generate task sheet. <br />
      Random adds random tasks to task sheet. <br />
      Select speed and click START to execute. <br />
      All task results and reports will be shown.
      <br />
      Repeat!
    </div>
  );
});
