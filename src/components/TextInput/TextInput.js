/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import styles from './TextInput.css';

export default function TextInput({
    value = '',
    placeholder = '',
    onChange = null,
}) {
    return (
        <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={styles.TextInput}
        />
    );
}