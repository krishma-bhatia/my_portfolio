import React, {Component} from 'react';

export default class About extends Component {
    render(){
        return (<section id="about" className="about-section">
        <div className="container">
          <header className="text-center">
            <h2 data-animate="fadeInDown" className="title">About me</h2>
          </header>
          
            <div data-animate="fadeInUp" className="">
              <p>Hard Working and adaptable individual with strong educational background  in Computer Applications backed by 5 years of industry experience as Senior Software Developer. I recently transitioned into Web Development to follow my passion for IT and brainstorm ideas for creating solutions.</p>
              <p>My prior education and professional experience in different fields have assisted me in becoming a dynamic and fast learner and I am enthusiastic to build on my strengths and to grow my expertise in the Web Development space.</p>
            </div>
        </div>
      </section>);
    }
}