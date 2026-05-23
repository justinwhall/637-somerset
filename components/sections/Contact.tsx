import { Box, Button, Container, Group, Text, Title } from '@mantine/core';
import { IconMail, IconPhone } from '@tabler/icons-react';

import { COPY, LISTING, SECTION_IDS } from '@/content';

export function Contact() {
  const { contact } = LISTING;
  const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(COPY.contact.emailSubject)}`;
  const telHref = `tel:${contact.phone.replace(/\D/g, '')}`;

  return (
    <section id={SECTION_IDS.contact} aria-labelledby="contact-title">
      <Box py="xl" style={{ backgroundColor: 'var(--color-snow)' }}>
        <Container size="sm" ta="center">
          <Title
            id="contact-title"
            order={2}
            size="1.75rem"
            c="slate.6"
            mb="xs"
          >
            {COPY.contact.title}
          </Title>
          <Text size="md" c="dimmed" mb="xs">
            {COPY.contact.subtitle}
          </Text>
          <Text size="lg" fw={600} mb="lg">
            {contact.name} &middot; {contact.phone}
          </Text>

          <Group justify="center" gap="md">
            <Button
              component="a"
              href={mailtoHref}
              color="sage"
              leftSection={<IconMail size={18} />}
            >
              {COPY.contact.emailCta}
            </Button>
            <Button
              component="a"
              href={telHref}
              variant="outline"
              color="sage"
              leftSection={<IconPhone size={18} />}
            >
              {COPY.contact.callCta}
            </Button>
          </Group>
        </Container>
      </Box>
    </section>
  );
}
