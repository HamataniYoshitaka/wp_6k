
import React from 'react';

export const useReloadFonts = () => {
  const reloadFonts = () => { 
      window.reload_fontPlus()
  }
  return reloadFonts
};