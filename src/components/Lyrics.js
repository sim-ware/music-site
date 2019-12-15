import React from 'react';
import { ipsum } from '../ipsum';

export default function Lyrics() {
  return (
    <div style={{ margin: 5 }}>
      <p style={{ width: 280 }}>
        {ipsum}
      </p>
    </div>
  );
}
