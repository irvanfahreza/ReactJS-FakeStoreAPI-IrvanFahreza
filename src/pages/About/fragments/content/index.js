import './styles.css';
import "@blueprintjs/core/lib/css/blueprint.css";

function Content (prop) {
  
  return(
    <section>
      <h1 className='content-wrapper'>About</h1>
      {/* <p>{prop.data}</p> */}
      <div>
            <h2>About</h2>
            <div className="bp4-card bp4-elevation-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
            </div>
        </div>
    </section>
    
  );
}

export default Content;