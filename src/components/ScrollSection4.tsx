import * as React from 'react'
import './ScrollSection4.css'
import {useWidth} from './../functions/useWidth'
import MapContainer from './MapContainer';

function ScrollSection4(props: any){
    const boxEl:any=  React.useRef(null);
    const contentEl:any= React.useRef(null);
    const canvasEl:any = React.useRef(null);
    const defaultEl:any = React.useRef(null);
    const [canvasHeight, setCanvasHeight] = React.useState(0)
    const [canvasWidth, setCanvasWidth] =  React.useState(0);
    const {width} = useWidth();

    const Test = () => {
       // console.log(boxEl?.current?.scrollHeight);
       // console.log(contentEl?.current?.scrollHeight);
       console.log(defaultEl?.current?.clientWidth);
       
    }

    React.useEffect(()=>{
        //console.log(contentEl?.current?.scrollHeight);
        setCanvasHeight(contentEl?.current?.scrollHeight)
        setCanvasWidth(defaultEl?.current?.clientWidth)
    },[])

    React.useEffect(()=>{
        setCanvasHeight(contentEl?.current?.scrollHeight)
        setCanvasWidth(defaultEl?.current?.clientWidth)
    },[width])

    return (
        <div className='section-4-content'>
            <h2 className='section-title-4'>연혁</h2>
            <div className='history-box' >
                <canvas ref={canvasEl} className='line' width={`${canvasWidth}px`} height={canvasHeight + 'px'}></canvas>
                <div className='history-content-box' ref={contentEl}>
                <div className='test'>
                    <div className='year'>2022년</div>
                    <div className='year-history'>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                    </div>
                </div>
                <div className='test'>
                    <div className='year'>2022년</div>
                    <div className='year-history'>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                    </div>
                </div>
                <div className='test'>
                    <div className='year'>2022년</div>
                    <div className='year-history'>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                    </div>
                </div>
                <div className='test'>
                    <div className='year'>2022년</div>
                    <div className='year-history'>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                    </div>
                </div>
                <div className='test'>
                    <div className='year'>2022년</div>
                    <div className='year-history'>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                    </div>
                </div>
                <div className='test'>
                    <div className='year'>2022년</div>
                    <div className='year-history'>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                    </div>
                </div>
                <div className='test'>
                    <div className='year'>2022년</div>
                    <div className='year-history'>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                    </div>
                </div>
                <div className='test'>
                    <div className='year'>2022년</div>
                    <div className='year-history'>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                        <p>동아리원 돌파</p>
                    </div>
                </div>
                </div>
                <div className='default' ref={defaultEl}>0000년</div>
            </div>
            
            <h2 className='section-title-4'>IGRUS 동아리방 위치</h2>
            
            <MapContainer/>
            
        </div>
    )
}

export default ScrollSection4;