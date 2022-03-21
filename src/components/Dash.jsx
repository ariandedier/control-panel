import React, {useEffect} from 'react'
import styled from "styled-components";
import frame from '../assets/frame.png';
import frame1 from '../assets/frame1.png';
import { gsap } from "gsap";

const Dash = () => {

    const timeline = gsap.timeline();

    useEffect(() =>{
        const Board = document.querySelectorAll(".Board");
        timeline.from(Board, { opacity:0, y:-50, duration:1, stagger: 1});
    },[])

  return (
    <Container className='Board'>

        <ContainerUp className='Board'>
        <Mrr>
            <div className='title'>
                <h3>MRR</h3> <h2>+32%</h2>
            </div>
            <div className='amount'>
                 <h1>$64,233</h1>
            </div>
            <img src={frame} alt="frame" />
        </Mrr>
        <RevCustomer>
            <div className='rev'>
                <h3>Total Revenue</h3>
                <h1>$132,848</h1>
                <div className='line'><h3 className='desc'>Stripe</h3></div>
            </div>
            <div className='rev'>
                <h3>Customers</h3>
                <h1>1,726</h1>
                <div className='line'><h3 className='desc'>Stripe</h3></div>
            </div>
        </RevCustomer>
        <SocialUp>
            <div className='social'>
                <h3>Followers</h3>
                <h1>6,224</h1>
                <div className='line'><h3 className='desc'>Twitter</h3></div>
            </div>
            <div className='social'>
                <h3>Followers</h3>
                <h1>19,485</h1>
                <div className='line'><h3 className='desc'>Instagram</h3></div>
            </div>
        </SocialUp>
        </ContainerUp>

        <ContainerUp className='Board'>
            <RevCustomer>
            <div className='rev-down'>
                <h3>Page Views</h3>
                <h1>87,402</h1>
                <div className='line'><h3 className='desc'>ariandedier</h3></div>
            </div>
            <div className='rev-down'>
                <h3>Bounce Rate</h3>
                <h1>3.87%</h1>
                <div className='line'><h3 className='desc'>ariandedier</h3></div>
            </div>
            </RevCustomer>
            <Mrr>
            <div className='title'>
                <h3>Site Visitors</h3> <h2>+18%</h2>
            </div>
            <div className='amount'>
                 <h1>34,203</h1>
            </div>
            <img src={frame1} alt="frame1" />
            </Mrr>
            <SocialUp>
            <div className='social'>
                <h3>Subscribers</h3>
                <h1>28,557</h1>
                <div className='line'><h3 className='desc'>Youtube</h3></div>
            </div>
            <div className='social'>
                <h3>Subscribers</h3>
                <h1>24,632</h1>
                <div className='line'><h3 className='desc'>Twitch</h3></div>
            </div>
            </SocialUp>
        </ContainerUp>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 120px;
    margin-left: 220px;
    color: #fff;
    gap: 20px;
`

const ContainerUp = styled.div`
    display: flex;
    flex-direction: row;
`
const Mrr = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 600px;
    height: 320px;
    flex-direction: column;
    background: #121214;
    border-radius: 10px;
    border: 1px solid #393941;
    color: #f3f6fb;

    h1{
        font-weight: 600;
    }
    h2{
        color: #42FF77;
        font-weight: 600;

    }
    div.title{
        display: flex;
        justify-content: space-between;
        padding: 20px;
        font-size: 10px;
        color: #424146;
    }
    div.amount{
        font-size: 15px;
        margin-left: 20px;
    }
    img{
        position: absolute;
        max-width: 100%;
        height: auto;
    }
`
const RevCustomer = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    
    h3{
        font-weight: 300;
        font-size: 15px;
        color: #424146;
        margin-bottom: 10px ;
    }
    h1{
        font-weight: 600;
        font-size: 30px;
    }
    div.rev{
        margin-left: 20px;
        padding: 20px;
        box-sizing: border-box;
        width: 320px;
        height: 150px;
        background: #121214;
        border-radius: 10px;
        border: 1px solid #393941;
        color: #f3f6fb;
    }
    div.rev-down{
        margin-right: 20px;
        padding: 20px;
        box-sizing: border-box;
        width: 320px;
        height: 150px;
        background: #121214;
        border-radius: 10px;
        border: 1px solid #393941;
        color: #f3f6fb;
    }
    div.line{
        margin-top: 20px;
        width: 280px;
        height: 2px;
        border-bottom: 1px solid #393941;
        position: absolute;
    }
    h3.desc{
        margin-top: 8px;
    }
`

const SocialUp = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;

    h3{
        font-weight: 300;
        font-size: 15px;
        color: #424146;
        margin-bottom: 10px ;
    }
    h1{
        font-weight: 600;
        font-size: 30px;
    }
    div.social{
        margin-left: 20px;
        padding: 20px;
        box-sizing: border-box;
        width: 200px;
        height: 150px;
        background: #121214;
        border-radius: 10px;
        border: 1px solid #393941;
        color: #f3f6fb;
    }
    div.line{
        margin-top: 20px;
        width: 160px;
        height: 2px;
        border-bottom: 1px solid #393941;
        position: absolute;
    }
    h3.desc{
        margin-top: 8px;
    }
`

export default Dash