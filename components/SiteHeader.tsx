'use client';

import { Anchor, Container, Group, Text } from '@mantine/core';

import { NAV_ITEMS } from '@/content';

export function SiteHeader() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--color-snow)',
        borderBottom: '1px solid var(--mantine-color-gray-2)',
      }}
    >
      <Container size="lg" py="sm">
        <Group justify="space-between" wrap="nowrap">
          <Text fw={700} size="lg" c="sage.6">
            637 Somerset
          </Text>

          <Group component="nav" gap="md" visibleFrom="sm">
            {NAV_ITEMS.map((item) => (
              <Anchor
                key={item.id}
                href={`#${item.id}`}
                underline="never"
                size="sm"
                c="slate.6"
                fw={500}
              >
                {item.label}
              </Anchor>
            ))}
          </Group>
        </Group>
      </Container>
    </header>
  );
}
