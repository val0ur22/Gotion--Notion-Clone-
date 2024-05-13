import { BlockNoteViewProps } from '@blocknote/react';

declare module '@blocknote/react' {
  interface BlockNoteViewProps {
    readOnly?: boolean;
  }
}
