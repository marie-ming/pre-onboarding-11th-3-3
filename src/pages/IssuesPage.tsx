import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GetIssues } from 'apis/issues';
import { useIssue } from 'context/IssueContext';
import IssueTitle from 'components/IssueTitle';
import { IssueType } from 'interface/type';

const IssuesPage = () => {
  const { setAnIssue } = useIssue();
  const [list, setList] = useState<IssueType[]>([]);
  const [page, setPage] = useState(1);

  const getIssue = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await GetIssues({ page, sort: 'comments' });
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
    getIssue(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div>
      {list.map((item: any, idx: number) => (
        <Link
          to={
            (idx + 1) % 5 === 0 ? 'https://www.wanted.co.kr/' : `${item.number}`
          }
          key={idx}
          onClick={() =>
            setAnIssue(
              list.filter((listItem: any) => listItem.number === item.number)[0]
            )
          }
          style={{ display: 'flex', margin: '1rem' }}
        >
          {(idx + 1) % 5 === 0 ? (
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
              alt="광고"
              style={{ padding: '1rem' }}
            />
          ) : (
            <IssueTitle {...item} />
          )}
        </Link>
      ))}
      <div ref={obsRef} />
    </div>
  );
};

export default IssuesPage;
