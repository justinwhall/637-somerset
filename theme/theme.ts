'use client';

import { createTheme, type MantineColorsTuple } from '@mantine/core';

const sage: MantineColorsTuple = [
  '#f0f5ee',
  '#dde8da',
  '#b8cfb2',
  '#90b487',
  '#6f9d63',
  '#5a8d4d',
  '#4A6741',
  '#3f6838',
  '#355c2f',
  '#294f24',
];

const sandstone: MantineColorsTuple = [
  '#fdf8f0',
  '#f5ebe0',
  '#e6d5be',
  '#d6bd98',
  '#C4A77D',
  '#b8976a',
  '#a98a5e',
  '#93764d',
  '#836942',
  '#725a34',
];

const slate: MantineColorsTuple = [
  '#eef3f7',
  '#dde5eb',
  '#b7c8d4',
  '#8eaabc',
  '#6b91a8',
  '#54809c',
  '#3D4F5F',
  '#3a5f77',
  '#30536a',
  '#23475d',
];

const sky: MantineColorsTuple = [
  '#edf5f9',
  '#dce9f0',
  '#b5d1e1',
  '#8cb8d1',
  '#6aa3c3',
  '#5B8FA8',
  '#4686a8',
  '#377493',
  '#2c6784',
  '#1b5974',
];

export const theme = createTheme({
  primaryColor: 'sage',
  colors: {
    sage,
    sandstone,
    slate,
    sky,
  },
  fontFamily:
    "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  headings: {
    fontFamily:
      "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  defaultRadius: 'md',
});
