import { Box, Container, SimpleGrid, Text, Title } from '@mantine/core';

import { COPY, SECTION_IDS } from '@/content';
import { PlaceholderImage } from '@/components/PlaceholderImage';

export function About() {
  return (
    <section id={SECTION_IDS.about} aria-labelledby="about-title">
      <Box py="xl" style={{ backgroundColor: 'var(--color-snow)' }}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
            <div>
              <Title id="about-title" order={2} size="1.75rem" c="slate.6" mb="md">
                {COPY.about.title}
              </Title>
              {COPY.about.paragraphs.map((paragraph) => (
                <Text key={paragraph.slice(0, 30)} size="md" mb="sm" lh={1.7}>
                  {paragraph}
                </Text>
              ))}
            </div>
            <PlaceholderImage aspectRatio="4 / 3" />
          </SimpleGrid>
        </Container>
      </Box>
    </section>
  );
}
