import { Box, Button, Container, List, ListItem, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCheck, IconMapPin } from '@tabler/icons-react';

import { COPY, LISTING, SECTION_IDS } from '@/content';

export function Location() {
  const { street, city, state, zip } = LISTING.address;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street}, ${city}, ${state} ${zip}`)}`;

  return (
    <section id={SECTION_IDS.location} aria-labelledby="location-title">
      <Box py="xl" style={{ backgroundColor: 'var(--color-snow)' }}>
        <Container size="sm">
          <Title
            id="location-title"
            order={2}
            size="1.75rem"
            c="slate.6"
            mb="md"
            ta="center"
          >
            {COPY.location.title}
          </Title>

          <Text size="md" ta="center" mb="xl" lh={1.7}>
            {COPY.location.description}
          </Text>

          <List
            spacing="sm"
            icon={
              <ThemeIcon color="sage" size="sm" radius="xl">
                <IconCheck size={14} />
              </ThemeIcon>
            }
            mb="xl"
          >
            {COPY.location.highlights.map((item) => (
              <ListItem key={item}>
                <Text size="sm">{item}</Text>
              </ListItem>
            ))}
          </List>

          <Box ta="center">
            <Button
              component="a"
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              color="sage"
              leftSection={<IconMapPin size={18} />}
            >
              {COPY.location.mapLabel}
            </Button>
          </Box>
        </Container>
      </Box>
    </section>
  );
}
