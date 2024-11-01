import {
  IconCircleArrowDownFilled,
  IconCircleArrowUpFilled,
} from '@tabler/icons-react';
import { FC } from 'react';

interface ChatScrollButtonsProps {
  isAtTop: boolean;
  isAtBottom: boolean;
  isOverflowing: boolean;
  scrollToTop: () => void;
  scrollToBottom: () => void;
}

export const ChatScrollButtons: FC<ChatScrollButtonsProps> = ({
  isAtTop,
  isAtBottom,
  isOverflowing,
  scrollToTop,
  scrollToBottom,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={scrollToTop}
        className={`${
          isAtTop ? 'hidden' : 'block'
        } bg-white rounded-full p-2 shadow-md`}
      >
        <IconCircleArrowUpFilled className="size-16" />
      </button>
      <button
        onClick={scrollToBottom}
        className={`${
          isAtBottom || !isOverflowing ? 'hidden' : 'block'
        } bg-white rounded-full p-2 shadow-md`}
      >
        <IconCircleArrowDownFilled className="size-16" />
      </button>
    </div>
  );
};