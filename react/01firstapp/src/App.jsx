import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="Card">
        {/* Content goes here */}
        
        <Card title="Card 1" desc="Description of card 1"/>
        <Card title="Card 2" desc="Description of card 2"/>
        <Card title="Card 3" desc="Description of card 3"/>
        <Card title="Card 4" desc="Description of card 4"/>
      </div>
      <Footer />
    </div>
  )
}
// we cant return two div we have to use wrap 
// we use classname because class is reserved keyword
// we 

export default App