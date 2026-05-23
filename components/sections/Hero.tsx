import { Box, Button, Container, Text, Title } from '@mantine/core';

import { COPY, LISTING, SECTION_IDS } from '@/content';
import { PlaceholderImage } from '@/components/PlaceholderImage';

export function Hero() {
  const { street, city, state, zip } = LISTING.address;

  return (
    <section id={SECTION_IDS.hero}>
      <Box style={{ backgroundColor: 'var(--color-snow)' }} py="xl">
        <Container size="lg">
          <Title order={1} size="2.5rem" c="slate.6" mb="xs">
            {street}
          </Title>
          <Text size="xl" c="dimmed" mb="xs">
            {city}, {state} {zip}
          </Text>
          <Text size="lg" c="sandstone.6" fw={500} mb="lg">
            {COPY.hero.tagline}
          </Text>
          <Button
            component="a"
            href={`#${SECTION_IDS.contact}`}
            size="lg"
            color="sage"
            radius="md"
            mb="xl"
          >
            {COPY.hero.cta}
          </Button>

          {LISTING.images.hero ? (
            <Box
              component="img"
              src={LISTING.images.hero}
              alt={`${street}, ${city} ${state}`}
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                objectFit: 'cover',
                borderRadius: 'var(--mantine-radius-md)',
              }}
            />
          ) : (
            <PlaceholderImage aspectRatio="16 / 9" />
          )}
        </Container>
      </Box>
    </section>
  );
}
