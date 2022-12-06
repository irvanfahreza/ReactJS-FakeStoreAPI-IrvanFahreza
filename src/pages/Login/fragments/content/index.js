import './styles.css';
import "@blueprintjs/core/lib/css/blueprint.css";

function Content (prop) {
  
  return(
    <section>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"/>
      <div>
        <div class="bd-example-snippet bd-code-snippet"> 
          <div class="bd-example"> 
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail" class="form-label">
                  Email Address
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input type="password" class="form-control" id="exampleInputPassword1"/>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* <p>{prop.data}</p> */}
    </section>
  );
}

export default Content;