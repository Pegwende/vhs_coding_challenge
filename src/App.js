import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <header>
        <h1>Setting</h1>
      </header>
      <body>
        <form >

          <label for="fname">FIRST NAME*</label><br/>
          <input type="text" id="fname" name="fname" required/><br/>

          <label for="lname">LAST NAME*</label><br/>
          <input type="text" id="lname" name="lname" required/><br/>

          <label for="email">EMAIL*</label><br/>
          <input type="text" id="email" name="email"  required/><br/>

          <label for="fnumber">PHONE*</label><br/>
          <input type="number" id="fnumber" name="fnumber" required/><br/>

          <div>
            <label for="fname">SELECT YOUR DATE OF BIRTH*</label><br/>
            <div>
              <input type="date" id="fname" name="fname" required/><br/>
              <input type="date" id="fname" name="fname" required/><br/>
              <input type="date" id="fname" name="fname" required/><br/>
            </div>
          </div>

          <label for="bio">BIO*</label><br/>
          <input type="text" id="bio" name="bio" required/><br/>

          <div>
            <input type="submit" value="Submit" />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </body>
    </div>
  );
}

export default App;
