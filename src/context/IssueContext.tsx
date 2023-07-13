import React, { createContext, useContext, useState } from 'react';
import { IssueType } from 'interface/type';

const IssueContext = createContext<ProviderType | undefined>(undefined);

export function IssueProvider({ children }: { children: React.ReactNode }) {
  const [list, setList] = useState<IssueType[]>([]);

  return (
    <IssueContext.Provider value={{ list, setList }}>
      {children}
    </IssueContext.Provider>
  );
}

export const useIssue = () => {
  const state = useContext(IssueContext);
  if (!state) throw new Error('IssueProvider not found');
  return state;
};

interface ProviderType {
  list: IssueType[];
  setList: React.Dispatch<React.SetStateAction<IssueType[]>>;
}
