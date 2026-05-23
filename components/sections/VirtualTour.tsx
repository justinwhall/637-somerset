import { Box, Center, Container, Text, Title } from '@mantine/core';
import { IconView360 } from '@tabler/icons-react';

import { COPY, LISTING, SECTION_IDS } from '@/content';

export function VirtualTour() {
  const { matterportModelId } = LISTING;

  return (
    <section id={SECTION_IDS.tour} aria-labelledby="tour-title">
      <Box py="xl" style={{ backgroundColor: 'var(--color-snow)' }}>
        <Container size="lg">
          <Title
            id="tour-title"
            order={2}
            size="1.75rem"
            c="slate.6"
            mb="lg"
            ta="center"
          >
            {COPY.tour.title}
          </Title>

          {matterportModelId ? (
            <Box
              component="iframe"
              title="637 Somerset virtual tour"
              src={`https://my.matterport.com/show/?m=${matterportModelId}`}
              allow="fullscreen; xr-spatial-tracking"
              style={{
                width: '100%',
                height: 'min(70vh, 600px)',
                border: 0,
                borderRadius: 'var(--mantine-radius-md)',
              }}
            />
          ) : (
            <Center
              style={{
                aspectRatio: '16 / 9',
                backgroundColor: 'var(--mantine-color-gray-1)',
                borderRadius: 'var(--mantine-radius-md)',
                border: '2px dashed var(--mantine-color-gray-4)',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <IconView360
                size={64}
                stroke={1}
                color="var(--mantine-color-gray-5)"
              />
              <Text size="md" c="dimmed" maw={400} ta="center">
                {COPY.tour.placeholder}
              </Text>
            </Center>
          )}
        </Container>
      </Box>
    </section>
  );
}
