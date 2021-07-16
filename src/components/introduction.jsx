import React, {Component} from 'react';

export default class Introduction extends Component {
    render(){
        return (<header className="header">
        <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container"><a href="#intro" className="navbar-brand scrollTo">Krishma Bhatia</a>
          <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><span className="fa fa-bars"></span></button>
          <div id="navbarcollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="#intro" className="nav-link link-scroll">Home</a></li>
              <li className="nav-item"><a href="#about" className="nav-link link-scroll">About</a></li>
              <li className="nav-item"><a href="#projects" className="nav-link link-scroll">Projects</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link link-scroll">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      </header>);
    }
}