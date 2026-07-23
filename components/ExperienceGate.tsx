"use client";

import { createContext, useContext, type ReactNode } from "react";

/** When false, entrance motions stay in `hidden` until the splash reveals the page. */
const ExperienceReadyContext = createContext(true);

export function ExperienceProvider({
  ready,
  children,
}: {
  ready: boolean;
  children: ReactNode;
}) {
  return (
    <ExperienceReadyContext.Provider value={ready}>
      {children}
    </ExperienceReadyContext.Provider>
  );
}

export function useExperienceReady() {
  return useContext(ExperienceReadyContext);
}
