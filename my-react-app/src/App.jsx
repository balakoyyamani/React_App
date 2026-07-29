import Header from "./components/Header"
import Profile from "./components/Profile"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Header name="Hello this prop"/>
      <Profile 
      name="Bala"
      role="React Developer"/>
      <Profile 
      name="Irai"
      role="Java Developer"/>
      <Footer />
    </div>
  );
}

export default App
