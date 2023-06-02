import React from 'react';

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="flex items-center space-x-2">
        <div>
          <div
            style={{ borderTopColor: 'transparent' }}
            className="w-10 h-10 border-4 border-green-400 border-solid rounded-full animate-spin"
          />
        </div>
        <span className="text-white">Carregando...</span>
      </div>
    </div>
  );
}

export default Loading;
