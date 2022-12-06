import Content from './fragments/content';
import './styles.css';

function About() {
  let data = "Ini adalah isi About";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
      </section>
    </div>
  );
}

export default About;
