import dynamic from 'next/dynamic';

/* Debugging hydration mismatch */
const NoSsr = props => <>{props.children}</>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false
});
