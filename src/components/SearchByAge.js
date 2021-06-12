/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import TextInput from './TextInput';
export default function SearchByAge({currentAge, onChange}) {
  return (
    <TextInput
      value={currentAge}
      placeholder="Search by age..."
      onChange={e => onChange(e.target.value)}
    />
  );
}
