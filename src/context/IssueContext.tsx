import React, { createContext, useContext, useState } from 'react';

const IssueContext = createContext<ProviderType | undefined>(undefined);

export function IssueProvider({ children }: { children: React.ReactNode }) {
  const [list, setList] = useState<IssueType[]>([]);

  const saveIssues = (issues: any) => {
    issues.map((item: any) =>
      setList(prev => [
        ...prev,
        {
          number: item.number,
          title: item.title,
          userName: item.user.login,
          updated_at: item.updated_at,
          comments: item.comments,
        },
      ])
    );
  };

  return (
    <IssueContext.Provider value={{ list, saveIssues }}>
      {children}
    </IssueContext.Provider>
  );
}

export const useIssue = () => {
  const state = useContext(IssueContext);
  if (!state) throw new Error('IssueProvider not found');
  return state;
};

interface IssueType {
  number: number;
  title: string;
  userName: string;
  updated_at: string;
  comments: number;
}
interface ProviderType {
  list: IssueType[];
  saveIssues: (issues: any) => void;
}
