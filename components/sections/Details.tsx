import { Box, Container, Table, TableTbody, TableTd, TableTr, Title } from '@mantine/core';

import { COPY, LISTING, SECTION_IDS } from '@/content';

export function Details() {
  return (
    <section id={SECTION_IDS.details} aria-labelledby="details-title">
      <Box py="xl" style={{ backgroundColor: 'var(--color-cream)' }}>
        <Container size="sm">
          <Title
            id="details-title"
            order={2}
            size="1.75rem"
            c="slate.6"
            mb="lg"
            ta="center"
          >
            {COPY.details.title}
          </Title>

          <Table
            striped
            highlightOnHover
            withTableBorder
            withColumnBorders
            verticalSpacing="sm"
          >
            <TableTbody>
              {LISTING.details.map((row) => (
                <TableTr key={row.label}>
                  <TableTd fw={600} w="40%">
                    {row.label}
                  </TableTd>
                  <TableTd>{row.value}</TableTd>
                </TableTr>
              ))}
            </TableTbody>
          </Table>
        </Container>
      </Box>
    </section>
  );
}
