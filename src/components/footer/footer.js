import React from 'react'
import {Layout } from 'antd'
import { iconAssets } from '../../assets/icons';
import './footer.css'
const { Footer } = Layout;

export default function FooterComponent() {
    return (
        <Footer className='footer'>
              <div>
                  <a href="https://www.instagram.com">
                    <img
                      alt="instagram logo"
                      loading="lazy"
                      src={iconAssets.instagramLogo}
                      className="instagram"
                    />
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com">
                    <img
                      alt="twitter logo"
                      loading="lazy"
                      src={iconAssets.twitterLogo}
                      className="twitter"
                    />
                  </a>
                </div>
        </Footer>
    )
}
