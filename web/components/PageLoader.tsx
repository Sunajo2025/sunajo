'use client';

import { Riple } from 'react-loading-indicators';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-lg z-[9999]">
      <Riple
        color="#4169E1"
        size="large"
        textColor="#ffffff"
      />
    </div>
  );
}
