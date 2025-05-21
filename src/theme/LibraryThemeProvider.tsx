// src/theme/LibraryThemeProvider.tsx
import React from 'react';
import { ConfigProvider } from 'antd';
import './libraryStyles.css'; // Importamos estilos globales

// Tokens por defecto de tu librería
export const DESIGN_TOKENS = {
  INPUT_HEIGHT: 25,
  FONT_SIZE: 12,
};

export interface LibraryThemeProviderProps {
  children: React.ReactNode;
  customTokens?: Partial<typeof DESIGN_TOKENS>;
}

const LibraryThemeProvider: React.FC<LibraryThemeProviderProps> = ({ 
  children, 
  customTokens = {} 
}) => {
  // Combina los tokens por defecto con los personalizados
  const tokens = { ...DESIGN_TOKENS, ...customTokens };
  
  return (
    <ConfigProvider
      theme={{
        token: {
          controlHeight: tokens.INPUT_HEIGHT,
          fontSize: tokens.FONT_SIZE,
        },
        components: {
          Input: {
            controlHeight: tokens.INPUT_HEIGHT,
            paddingBlock: 2,
          },
          Select: {
            controlHeight: tokens.INPUT_HEIGHT,
          },
          DatePicker: {
            controlHeight: tokens.INPUT_HEIGHT,
          },
          // Otros componentes según necesidad
        }
      }}
    >
      <div className="library-components-wrapper" 
           data-input-height={tokens.INPUT_HEIGHT}
           data-font-size={tokens.FONT_SIZE}>
        {children}
      </div>
    </ConfigProvider>
  );
};

export default LibraryThemeProvider;