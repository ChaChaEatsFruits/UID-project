setTimeout(() => {
    window.dispatchEvent(new Event('resize')); // Forces reflow
    document.activeElement?.blur();            // Release stuck focus
  }, 100);
  