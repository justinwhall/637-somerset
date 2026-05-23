import { Box, Container, SimpleGrid, Title } from '@mantine/core';

import { COPY, LISTING, SECTION_IDS } from '@/content';
import { PlaceholderImage } from '@/components/PlaceholderImage';

export function Gallery() {
  return (
    <section id={SECTION_IDS.gallery} aria-labelledby="gallery-title">
      <Box py="xl" style={{ backgroundColor: 'var(--color-cream)' }}>
        <Container size="lg">
          <Title
            id="gallery-title"
            order={2}
            size="1.75rem"
            c="slate.6"
            mb="lg"
            ta="center"
          >
            {COPY.gallery.title}
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md">
            {LISTING.images.gallery.map((src, index) =>
              src ? (
                <Box
                  key={src}
                  component="img"
                  src={src}
                  alt={`Property photo ${String(index + 1)}`}
                  style={{
                    width: '100%',
                    aspectRatio: '4 / 3',
                    objectFit: 'cover',
                    borderRadius: 'var(--mantine-radius-md)',
                  }}
                />
              ) : (
                <PlaceholderImage
                  // eslint-disable-next-line react/no-array-index-key
                  key={`placeholder-${String(index)}`}
                  aspectRatio="4 / 3"
                  label={COPY.gallery.emptyLabel}
                />
              ),
            )}
          </SimpleGrid>
        </Container>
      </Box>
    </section>
  );
}
