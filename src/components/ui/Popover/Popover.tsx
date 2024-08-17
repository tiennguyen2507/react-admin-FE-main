import {
  PopoverContent,
  PopoverTrigger,
  Popover as PopoverWrapper,
  PopoverProps,
} from '@nextui-org/react';
import { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren &
  Omit<PopoverProps, 'children' | 'content'> & { content?: ReactNode };

export const Popover: React.FC<Props> = (props) => {
  const { children, content, ...popover } = props;
  return (
    <PopoverWrapper {...popover}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </PopoverWrapper>
  );
};
