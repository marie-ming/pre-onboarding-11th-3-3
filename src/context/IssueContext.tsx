import React, { createContext, useContext, useState } from 'react';
import { IssueType } from 'interface/type';

const IssueContext = createContext<ProviderType | undefined>(undefined);

export function IssueProvider({ children }: { children: React.ReactNode }) {
  const [anIssue, setAnIssue] = useState<IssueType>({
    number: 0,
    title: '',
    userName: '',
    updated_at: '',
    comments: 0,
    avatar_url: '',
    body: '',
  });

  return (
    <IssueContext.Provider value={{ anIssue, setAnIssue }}>
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
  anIssue: IssueType;
  setAnIssue: React.Dispatch<React.SetStateAction<IssueType>>;
}
