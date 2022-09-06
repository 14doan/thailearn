import Link from "next/link";
import styles from "../../styles/sentences.module.css";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8000/sentences");
  const data = await res.json();

  return {
    props: { sentences: data },
  };
};

const Sentences = ({ sentences }) => {
  return (
    <div>
      <h2>All Basic Sentences</h2>
      {sentences.map((s) => (
        <div key={s.id}>
          <Link href={"/sentences/" + s.id}>
            <a className={styles.single}>
              <p>{s.english}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sentences;
