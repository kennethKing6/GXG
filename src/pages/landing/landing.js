import React from 'react'
import './landing.css';
import {Layout } from 'antd'
import { ImageAssets } from '../../assets/images';
import HeaderComponent from '../../components/header/header';
import FooterComponent from '../../components/footer/footer';
const {  Content } = Layout;

export default function Landing() {
    return (
        <Layout className="MainLayout">

        <HeaderComponent/>

        <Content className='content-1'>
            <div className="img_intro">
                <img
                  alt="Joe Picture"
                  loading="lazy"
                  src={ImageAssets.joePicture}
                  className="content_pic1"
                />
                <img
                  alt="another Picture"
                  loading="lazy"
                  src={ImageAssets.headerPic2}
                  className="content_pic2"
                />
            </div>
  
            <div className="content_2">
                <div className="content_2_text">
                  <p>At GXG, we provide the best religious brand but can be used like any cloth. Wear religion without a stigma</p>
                </div>
                <div>
                  <img
                    alt="woman skirt"
                    loading="lazy"
                    src={ImageAssets.womanImage}
                    className="content_pic3"
                  />
                </div>
            </div>
  
            <div className="content_3">
                <div>
                  <img
                    alt="woman skirt"
                    loading="lazy"
                    src={ImageAssets.robeImage}
                    className="content_pic4"
                  />
                </div>
                <div className="content_3_text">
                  <p>At GXG, we provide the best religious brand but can be used like any cloth. Wear religion without a stigma</p>
                </div>
            </div>
        </Content>

        <FooterComponent/>

      </Layout>
    )
}
