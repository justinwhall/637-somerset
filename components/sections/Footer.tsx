import { Box, Container, Text } from '@mantine/core';

import { COPY, LISTING } from '@/content';

export function Footer() {
  const { street, city, state, zip } = LISTING.address;
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      py="xl"
      style={{
        backgroundColor: 'var(--mantine-color-slate-6)',
      }}
    >
      <Container size="lg" ta="center">
        <Text size="sm" c="white" fw={500} mb="xs">
          {street}, {city}, {state} {zip}
        </Text>
        <Text size="xs" c="gray.4" mb="xs">
          {COPY.footer.disclaimer}
        </Text>
        <Text size="xs" c="gray.5">
          &copy; {year} All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
