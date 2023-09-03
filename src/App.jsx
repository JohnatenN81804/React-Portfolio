import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Name</h1>
        <p>Web Developer</p>
      </header>

      <section className="About">
        <h2>About Me</h2>
        <p>
          Hello! I'm a web developer passionate about creating interactive and user-friendly websites.
        </p>
      </section>

      <section className="Portfolio">
        <h2>Portfolio</h2>
        {/* Add your portfolio projects here */}
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/100x180" alt="Project Image" />
          <Card.Body>
            <Card.Title>Project 1</Card.Title>
            <Card.Text>
              This is a description of my first project.
            </Card.Text>
            <Button variant="primary">Learn more</Button>
          </Card.Body>
        </Card>
      </section>

      <section className="Contact">
        <h2>Contact Me</h2>
        <p>Email: contact.johnaten@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
      </section>
    </div>
  );
}

export default App;
