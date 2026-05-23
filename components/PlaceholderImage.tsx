import { Center, Text } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

interface PlaceholderImageProps {
  readonly aspectRatio?: string;
  readonly label?: string;
}

export function PlaceholderImage({
  aspectRatio = '16 / 9',
  label = 'Photo coming soon',
}: PlaceholderImageProps) {
  return (
    <Center
      style={{
        aspectRatio,
        backgroundColor: 'var(--mantine-color-gray-1)',
        borderRadius: 'var(--mantine-radius-md)',
        width: '100%',
        flexDirection: 'column',
        gap: 8,
      }}
    >
      <IconPhoto size={48} stroke={1.2} color="var(--mantine-color-gray-5)" />
      <Text size="sm" c="dimmed">
        {label}
      </Text>
    </Center>
  );
}
