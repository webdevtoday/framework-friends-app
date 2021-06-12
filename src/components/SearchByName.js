/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import TextInput from './TextInput';
export default function SearchByName({currentName, onChange}) {
  return (
    <TextInput
      type="text"
      value={currentName}
      placeholder="Search by name..."
      onChange={e => onChange(e.target.value)}
    />
  );
}
