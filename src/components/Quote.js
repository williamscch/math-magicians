import React from 'react';

export default function Quote() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
    }}
    >
      <h3 style={{ textAlign: 'center', fontSize: '2rem', width: '70%' }}>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding. -William Paul Thurston
      </h3>
    </div>
  );
}
