import { Box, Container, SimpleGrid, Text, Title } from '@mantine/core';

import { COPY, LISTING, SECTION_IDS } from '@/content';

interface StatItemProps {
  readonly value: string | number;
  readonly label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <Box ta="center">
      <Title order={3} size="1.75rem" c="sage.6">
        {value}
      </Title>
      <Text size="sm" c="dimmed">
        {label}
      </Text>
    </Box>
  );
}

export function StatsBar() {
  const { stats } = LISTING;

  return (
    <section id={SECTION_IDS.stats}>
      <Box py="xl" style={{ backgroundColor: 'var(--color-cream)' }}>
        <Container size="lg">
          <SimpleGrid
            cols={{ base: 2, sm: 3, md: 6 }}
            spacing="lg"
          >
            <StatItem value={stats.priceLabel} label={COPY.stats.price} />
            <StatItem value={stats.beds} label={COPY.stats.beds} />
            <StatItem value={stats.baths} label={COPY.stats.baths} />
            <StatItem
              value={stats.sqft.toLocaleString()}
              label={COPY.stats.sqft}
            />
            <StatItem
              value={`${stats.lotAcres} ac`}
              label={COPY.stats.lotAcres}
            />
            <StatItem value={stats.yearBuilt} label={COPY.stats.yearBuilt} />
          </SimpleGrid>
        </Container>
      </Box>
    </section>
  );
}
