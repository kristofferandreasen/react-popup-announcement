import React, { Component } from 'react'
import Announcement from 'react-popup-announcement'
import Logo from './banner-image.jpg'
import { FiBook } from "react-icons/fi";
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

class App extends Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
 
  constructor(props) {
    super(props);
 
    const { cookies } = props;
    cookies.remove('banner')
  }

  

  render () {
    
    function openLink() {
      window.open("https://github.com/kristofferandreasen/react-popup-announcement", "_blank");
    }

    return (
      <div style={backgroundStyles}>
        <div style={center}>
          <h1 className="title">react-popup-announcement</h1>
          <p className="subtitle">Wait a couple of seconds and see the banner</p>

          <br></br>
          
          <a style={buttonStyle} href="https://github.com/kristofferandreasen/react-popup-announcement">
            Documentation
            <FiBook 
              style={icon}
              size={20}
            />
          </a>

        </div>
        <Announcement
          title="Here is your component"
          subtitle="The best announcement component for React is finally here. Install it in all your projects. this is a test of length"
          link="https://github.com/kristofferandreasen/react-popup-announcement"
          buttonText="Click here"
          imageSource={Logo}
          closeIconSize={25}
          onBannerClick={openLink}
        />
      </div>
    )
  }
}

const backgroundStyles = {
  paddingTop: 100,
  paddingBottom: 100,
  paddingRight: 15,
  paddingLeft: 15,
  minHeight: '1000px'
}

const buttonStyle = {
  color: '#09282b',
  backgroundColor: '#DEDED9',
  fontWeight: 400,
  fontSize: 14,
  paddingRight: 14,
  paddingLeft: 14,
  paddingTop: 14,
  paddingBottom: 14,
  borderRadius: 10,
  outline: 'none',
  textDecoration: 'none'
}

const icon = {
  color: '#09282b',
  marginLeft: 10,
  marginBottom: 2,
  verticalAlign: 'middle'
}

const center = {
  textAlign: 'center'
}

export default withCookies(App);