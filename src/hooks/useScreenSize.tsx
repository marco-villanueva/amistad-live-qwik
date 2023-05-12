
import { useComputed$ } from '@builder.io/qwik';
import { Breakpoints, useBreakpointSignal } from 'qwik-breakpoints';

export const useScreenSize = () => {
  const bpSignal = useBreakpointSignal([
    Breakpoints.XSmall,
    Breakpoints.Small,
    Breakpoints.Medium,
    Breakpoints.Large,
    Breakpoints.XLarge,
  ]);

  const currentScreenSize = useComputed$(() => {
    const displayNameMap = new Map([
      [Breakpoints.XSmall, 'mobile'],
      [Breakpoints.Small, 'mobile'],
      [Breakpoints.Medium, 'desktop'],
      [Breakpoints.Large, 'desktop'],
      [Breakpoints.XLarge, 'desktop'],
    ]);
    for (const query of Object.keys(bpSignal.value.breakpoints)) {
      if (bpSignal.value.breakpoints[query]) {
        return displayNameMap.get(query) ?? 'Unknown';
      }
    }
  });

  return (currentScreenSize.value);

}