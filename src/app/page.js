'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.
// anything in the src dir, you can use the @ instead of relative paths
import { useAuth } from '@/utils/context/authContext';
import { useEffect, useState } from 'react';

function Home() {
  // Since the returned data is an object, we must set the initial state as an empty object.
  const [uselessFact, SetUselessFact] = useState({});
  const { user } = useAuth();

  const fetchFact = async () => {
    const response = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
    const fact = await response.json();

    SetUselessFact(fact);
  };

  const selectResponse = (boolean) => {
    const obj = {
      userId: user.uid,
      permaLink: uselessFact.permalink,
      response: boolean,
    };
    fetchFact();
    return obj;
  };

  /*
  Without a useEffect hook, calling fetchFact() would continuously loop through fetches.

  useEffect runs after the rendering/re-rendering of the component only if its dependencies change.
    -> Runs after the component is rendered (mounted).
    -> Accepts two arguments - the function you want to execute when useEffect runs and a dependency array. The dependency array keeps track of value updates that will trigger the useEffect to run again and rerender the component.
  */
  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <>
      <h1>Fact</h1>
      <h5>{uselessFact.text}</h5>
      <h6>Did you know this fact? 🤔</h6>
      <button className="btn btn-success" type="button" onClick={() => selectResponse(true)}>
        YES
      </button>
      <button className="btn btn-danger" type="button" onClick={() => selectResponse(false)}>
        NO
      </button>
    </>
  );
}

export default Home;
