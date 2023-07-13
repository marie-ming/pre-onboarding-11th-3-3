import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GetIssues } from 'apis/issues';
import { useIssue } from 'context/IssueContext';
import IssueTitle from 'components/IssueTitle';

const IssuesPage = () => {
  const { list, setList } = useIssue();
  const [page, setPage] = useState(1);

  const getIssue = async (page: string) => {
    setIsLoading(true);
    try {
      const response = await GetIssues(page);
      response.map((item: any) =>
        setList(prev => [
          ...prev,
          {
            number: item.number,
            title: item.title,
            userName: item.user.login,
            updated_at: item.updated_at,
            comments: item.comments,
            avatar_url: item.user.avatar_url,
            body: item.body,
          },
        ])
      );
      preventRef.current = true;

      return response;
    } finally {
      setIsLoading(false);
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const preventRef = useRef(true);
  const obsRef = useRef(null);
  const options = {
    threshold: 0.3,
  };
  const callback = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (!isLoading && target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (obsRef.current) observer.observe(obsRef.current);

    setList([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getIssue(page.toString());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div>
      {list.map((item: any) => (
        <Link to={`${item.number}`} key={item.number}>
          <IssueTitle {...item} />
        </Link>
      ))}
      <div ref={obsRef} />
    </div>
  );
};

export default IssuesPage;
