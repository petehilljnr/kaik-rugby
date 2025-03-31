import React from 'react';
import { ChakraProvider, Button, Box } from '@chakra-ui/react';
import { createSystem, defaultConfig } from '@chakra-ui/react';
import { useColorMode } from '@/components/ui/color-mode';

// Custom theme
const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        background: { value: 'gray.100' },
        text: { value: 'black' },
      },
    },
  },
});

const ThemeChanger = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

const App = () => {
  return (
    <ChakraProvider value={system}>
      <Box p={4}>
        <ThemeChanger />
        <Button mt={4} colorScheme="teal">
          Click Me
        </Button>
      </Box>
    </ChakraProvider>
  );
};

export default App;