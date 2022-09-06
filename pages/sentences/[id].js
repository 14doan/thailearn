export const getStaticPaths = async () => {
  const res = await fetch(
    "https://github.com/14doan/thailearn/blob/main/data/db.json/"
  );
  const data = await res.json();

  const paths = data.map((s) => {
    return {
      params: { id: s.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://github.com/14doan/thailearn/blob/main/data/db.json/" + id
  );
  const data = await res.json();

  return {
    props: { sentence: data },
  };
};

const Details = ({ sentence }) => {
  return (
    <div>
      <h2>{sentence.english}</h2>
      <p>{sentence.thai}</p>
      <p>{sentence.note}</p>
    </div>
  );
};

export default Details;
