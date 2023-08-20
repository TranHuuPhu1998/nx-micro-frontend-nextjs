function PAGE_INDEX() {
  return <h2>index</h2>;
}

export async function getStaticProps() {
  const content = null;

  if (!content) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }

  return {
    props: {},
  };
}

export default PAGE_INDEX;
