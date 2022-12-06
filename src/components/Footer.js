import logo from '../logo.svg';
import './styles_footer.css';

function Footer(prop) {
//   const menu = ["Home", "Feature"];

//   const navigation = () => {
//     return menu.map((item, idx) => {
//       return <button onClick={() => prop.onClick(idx+1)} >{item}</button>
//     }) 
//   }
  return(
    <div>
      <header className='footer-wrapper'>
        <img src={logo} alt="logo" />
        <h5 className='footer-title' >Irvan Fahreza</h5>
        <h6 className='footer-tanggal' >03 Desember 2022</h6>
        {/* <nav className='navigation'>{navigation()}</nav> */}
      </header>
    </div>
  );
}

export default Footer;