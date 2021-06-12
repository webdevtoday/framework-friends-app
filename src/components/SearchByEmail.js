/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import TextInput from './TextInput';
export default function SearchByEmail({currentEmail, onChange}) {
  return (
    <TextInput
      type="text"
      value={currentEmail}
      placeholder="Search by email..."
      onChange={e => onChange(e.target.value)}
    />
  );
}
