import * as React from 'react';
import './style.css';

export default function PetCard({ petData }) {
  const truncate = (input) =>
    input?.length > 300 ? `${input.substring(0, 100)}...` : input;

  return <div className="petCard"></div>;
}
