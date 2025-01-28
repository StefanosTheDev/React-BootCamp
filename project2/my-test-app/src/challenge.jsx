/*
Challenges for Practice
Component Composition:

Create a parent component that renders multiple child components.
Example: A Dashboard component that renders a Header, Sidebar, and MainContent.
Dynamic Props:

Create a Counter component that starts at a given initialValue (passed as a prop) and increments when a button is clicked.
Styling with Props:

Create a Box component that takes a color prop and applies it to the background of a div.
*/

import './challenge.css';
function Dashboard(props) {
  return (
    <div>
      <Header />
      <SideBar />
      <MainContent />
    </div>
  );
}

function Header() {
  return <div> From Header </div>;
}

function SideBar() {
  return (
    <div>
      <div class="sidenav">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}

function MainContent() {
  return <div> From Main Content </div>;
}
export default Dashboard;
