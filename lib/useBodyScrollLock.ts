import { useEffect, useRef } from 'react';

// Reference count so multiple open dialogs don't prematurely unlock the body.
let lockCount = 0;
let savedScrollY = 0;
let savedPaddingRight = '';

function lock() {
  if (lockCount === 0) {
    savedScrollY = window.scrollY;
    savedPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
  }
  lockCount++;
}

function unlock() {
  if (lockCount <= 0) return;
  lockCount--;
  if (lockCount === 0) {
    document.body.style.overflow = '';
    document.body.style.paddingRight = savedPaddingRight;
    // Restore scroll position (iOS Safari can jump to 0 while locked)
    window.scrollTo({ top: savedScrollY, behavior: 'instant' as ScrollBehavior });
  }
}

/**
 * Locks document.body scroll while `active` is true.
 * Reference-counted: multiple concurrent locks are safe.
 */
export function useBodyScrollLock(active: boolean) {
  const lockedRef = useRef(false);

  useEffect(() => {
    if (active) {
      lock();
      lockedRef.current = true;
    } else if (lockedRef.current) {
      unlock();
      lockedRef.current = false;
    }
    return () => {
      if (lockedRef.current) {
        unlock();
        lockedRef.current = false;
      }
    };
  }, [active]);
}
