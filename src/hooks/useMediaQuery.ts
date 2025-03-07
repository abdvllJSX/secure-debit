import { useState, useEffect } from 'react';

/**
 * A hook that returns whether a media query matches the current viewport.
 * @param query - The media query to check, e.g. '(min-width: 768px)'
 * @returns A boolean indicating whether the media query matches
 */
const useMediaQuery = (query: string): boolean => {
  // Initialize with the match state, or false if window is not available (SSR)
  const [matches, setMatches] = useState<boolean>(() => {
    // Check if window is available (browser environment, not SSR)
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    // Skip effect on server-side
    if (typeof window === 'undefined') {
      return undefined;
    }

    // Create media query list
    const mediaQueryList = window.matchMedia(query);

    // Update state initially
    setMatches(mediaQueryList.matches);

    // Define listener function
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener for changes
    // Use the modern approach for browsers that support it
    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
    } else {
      // Fallback for older browsers
      mediaQueryList.addListener(listener);
    }

    // Clean up function
    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } else {
        // Fallback for older browsers
        mediaQueryList.removeListener(listener);
      }
    };
  }, [query]); // Re-run effect if query changes

  return matches;
};

export default useMediaQuery;