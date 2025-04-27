import { PageProps as OriginalPageProps } from 'next/dist/shared/lib/get-page-files';

declare module 'next' {
  export interface PageProps extends Omit<OriginalPageProps, 'params'> {
    params?: Record<string, string>;
  }
} 