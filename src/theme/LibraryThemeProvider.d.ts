import React from 'react';
import './libraryStyles.css';
export declare const DESIGN_TOKENS: {
    INPUT_HEIGHT: number;
    FONT_SIZE: number;
};
export interface LibraryThemeProviderProps {
    children: React.ReactNode;
    customTokens?: Partial<typeof DESIGN_TOKENS>;
}
declare const LibraryThemeProvider: React.FC<LibraryThemeProviderProps>;
export default LibraryThemeProvider;
