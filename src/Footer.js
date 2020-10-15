import React from 'react';

const Footer = () => {
    return (
        <div className="mt-5" style={{backgroundColor: '#fbd062', height: '300px'}}>
            <div className='row pt-3'>
                <div className='col-md-4 offset-md-1'>
                    <h3>Let us handle your project, professionally.</h3>
                    <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus urna sed ornare tempus.</small>

                </div>

                <div className='col-md-6'>


                <form>
  <div class="form-group">
    
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email"></input>
  </div>
  <div class="form-group">
    
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name/Company's Name"></input>
  </div>

  <div class="form-group">
    
    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Your Message' rows="3"></textarea>
  </div>
  <button type="button" class="btn btn-dark">Send</button>
</form>


                </div>


            </div>

            
        </div>
    );
};

export default Footer;