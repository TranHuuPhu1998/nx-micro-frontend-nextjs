import { useState } from 'react';

export const useHandleToggle = () => {
  const [open, setOpen] = useState('1');

  function toggle(id: any): any {
    setOpen(id);
  }

  return { open, toggle };
};
