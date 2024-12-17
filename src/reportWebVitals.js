const reportWebVitals = async (onPerfEntry) => {
  if (!onPerfEntry || !(onPerfEntry instanceof Function)) {
    return;
  }

  try {
    const { onCLS, onFID, onFCP, onLCP, onTTFB } = await import('web-vitals');
    
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  } catch (error) {
    console.error('Web Vitalsの読み込みに失敗しました:', error);
  }
};

export default reportWebVitals;
