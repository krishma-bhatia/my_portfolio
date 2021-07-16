import React,{Component} from 'react';
export default class Footer extends Component{
    render(){
        return( <div class="text-center bg-secondary mt-4 mt-lg-0">
        <p className="text-white">© 2021 Krishma Bhatia. All rights reserved.</p>
        <p className="mt-2 mb-2 text-white">Thanks  <a href='https://bootstrapious.com/p/bootstrap-carousel'>Bootstrapious</a> & <a href="https://fity.cz/ostrava">Fity</a> for Design Inspiration</p>
      </div>);
    }
}