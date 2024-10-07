import * as React from 'react';

export default function Slack({ className, ...props }) {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-sb-field-path={props['data-sb-field-path']}>
            <path d="M19.5 0a4.5 4.5 0 0 1 4.5 4.5v15a4.5 4.5 0 0 1-4.5 4.5H4.5A4.5 4.5 0 0 1 0 19.5v-15A4.5 4.5 0 0 1 4.5 0h15zM6 6h12v12H6V6zm2 2v8h8V8H8z"></path>
        </svg>
    );
}
