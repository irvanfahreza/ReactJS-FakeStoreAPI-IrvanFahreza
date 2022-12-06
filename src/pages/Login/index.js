import Content from './fragments/content';
import './styles.css';

function Login() {
  let data = "ini adalah Login menu";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
      </section>
    </div>
  );
}

export default Login;
