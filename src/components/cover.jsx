import React, {Component} from 'react';

export default class Cover extends Component {
    render() {
        return (   <section id="intro" style={{background: 'url(img/home.jpg) center center no-repeat', backgroundSize: 'cover'}} classname="intro-section pb-2">
        <div className="container text-center ">
          
          <h1 data-animate="fadeInDown" className="text-shadow mt-5 mb-5 text-white">Hello, I am Krishma !</h1>
          <p data-animate="slideInUp" className="h3 text-shadow text-400 text-white">I develop solutions to make people's lives simple.</p>
        </div>
      </section>);

    }
}