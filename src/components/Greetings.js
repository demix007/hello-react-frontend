import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/reducer';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  const NewGreetingLoadingCss = {
    position: 'absolute',
    fontSize: '2rem',
    top: '50%',
    left: '50%',
    color: 'lightgreen',
    transform: 'translate(-50%,-50%)',
  };

  const GreetingCss = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    backgroundColor: 'grey',
    color: 'lightgreen',
    fontSize: '3rem',
    transform: 'translate(-50%,-50%)',
    padding: '1.3rem',
  };

  if (greeting.length === 0) return <h3 style={NewGreetingLoadingCss}>New Greeting loading...</h3>;

  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'green', marginTop: '2.3rem' }}>
        Generate More Greetings By Refreshing The Page
      </h1>
      <div>
        <h3 style={GreetingCss}>{greeting.greeting}</h3>
      </div>
    </>
  );
};

export default Greeting;
