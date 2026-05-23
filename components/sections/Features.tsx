import { Box, Container, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import {
  IconBath,
  IconCar,
  IconChefHat,
  IconFlame,
  IconMountain,
  IconRuler,
  IconSun,
  IconTree,
} from '@tabler/icons-react';

import { COPY, LISTING, SECTION_IDS } from '@/content';

import type { ReactNode } from 'react';

const ICON_MAP: Record<string, ReactNode> = {
  mountain: <IconMountain size={24} />,
  car: <IconCar size={24} />,
  flame: <IconFlame size={24} />,
  tree: <IconTree size={24} />,
  sun: <IconSun size={24} />,
  'chef-hat': <IconChefHat size={24} />,
  bath: <IconBath size={24} />,
  ruler: <IconRuler size={24} />,
};

export function Features() {
  return (
    <section id={SECTION_IDS.features} aria-labelledby="features-title">
      <Box py="xl" style={{ backgroundColor: 'var(--color-cream)' }}>
        <Container size="lg">
          <Title
            id="features-title"
            order={2}
            size="1.75rem"
            c="slate.6"
            mb="lg"
            ta="center"
          >
            {COPY.features.title}
          </Title>

          <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="lg">
            {LISTING.features.map((feature) => (
              <Box key={feature.label} ta="center">
                <ThemeIcon
                  variant="light"
                  color="sage"
                  size="xl"
                  radius="xl"
                  mx="auto"
                  mb="xs"
                >
                  {ICON_MAP[feature.icon] ?? <IconMountain size={24} />}
                </ThemeIcon>
                <Text size="sm" fw={500}>
                  {feature.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </section>
  );
}
