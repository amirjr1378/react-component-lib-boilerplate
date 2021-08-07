import React, { useEffect } from 'react';

export interface ThemeColors {
    '--fontFamilyBase'?: string;
    '--primary-1'?: string;
    '--primary-2'?: string;
    '--primary-3'?: string;
    '--primary-4'?: string;
    '--secondary-1'?: string;
    '--secondary-2'?: string;
    '--secondary-3'?: string;
    '--secondary-4'?: string;
    '--error-1'?: string;
    '--error-2'?: string;
    '--error-3'?: string;
    '--success-1'?: string;
    '--success-2'?: string;
    '--success-3'?: string;
    '--warning-1'?: string;
    '--warning-2'?: string;
    '--warning-3'?: string;
    '--gray-1'?: string;
    '--gray-2'?: string;
    '--gray-3'?: string;
    '--gray-4'?: string;
    '--background-color'?: string;
    '--shadow-small'?: string;
    '--shadow-medium'?: string;
    '--overlay'?: string;
}

export const defaultTheme = {
    '--fontFamilyBase': `IRANSans, 'Vazir', 'Segoe UI', 'HelveticaNeue-Light', 'sans-serif'`,
    '--primary-1': ' #212b4a',
    '--primary-2': ' #1898a9',
    '--primary-3': ' #36cee2',
    '--primary-4': ' #eefbfd',
    '--secondary-1': ' #21e0be',
    '--secondary-2': ' #19b499',
    '--secondary-3': ' #d6eeea',
    '--secondary-4': ' #f0fdfb',
    '--error-1': ' #f2194a',
    '--error-2': ' #da0c3a',
    '--error-3': ' #fddce3',
    '--success-1': ' #0cda77',
    '--success-2': ' #038345',
    '--success-3': ' #edfef6',
    '--warning-1': ' #ffc952',
    '--warning-2': ' #f8b64c',
    '--warning-3': ' #fdeccf',
    '--gray-1': ' #4e555f',
    '--gray-2': ' #929cb3',
    '--gray-3': ' #d7d9de',
    '--gray-4': ' #f0f0f0',
    '--background-color': ' #faf9f9',
    '--shadow-small': ' 0 4px 4px rgba(188, 188, 188, 0.16)',
    '--shadow-medium': ' 0 4px 4px rgba(188, 188, 188, 0.4)',
    '--overlay': ' rgba(33, 43, 74, 0.4)',
};

export const ThemeProvider: React.FC<{
    theme: ThemeColors;
}> = (props) => {
    const { theme, children } = props;

    useEffect(() => {
        Object.entries(theme).forEach(([key, value]) => document.documentElement.style.setProperty(key, value));
    }, []);

    return <>{children}</>;
};
