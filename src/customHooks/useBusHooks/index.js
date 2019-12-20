import { useState } from 'react';
import bus from '../../busClass';

const useBusHooks = () => {
  const [position, setPosition] = useState({ x: bus.x, y: bus.y, f: bus.f });
  return {
    bus: bus.after(() => {
      setPosition({ x: bus.x, y: bus.y, f: bus.f });
    }),
    position
  };
};

export default useBusHooks;
