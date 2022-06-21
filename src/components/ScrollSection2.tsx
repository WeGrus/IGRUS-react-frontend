import { log } from 'console';
import * as React from 'react'
import {useWidth} from "./../functions/useWidth" 
import './ScrollSection2.css'



function ScrollSection2(props: any){
    const [currentWidth, setCurrentWidth] = React.useState<number>(window.innerWidth);
    const [currentBtn, setCurrentBtn] = React.useState<number>(0);
    const [currentGroupDescription, setCurrentGroupDescription] = React.useState<string>(""); // 나중에 받아서 적용
    const {width} = useWidth();

    const ChangeCurBtn = (group:number) => {
        setCurrentBtn(group);
    }

    const Test = (num:number):any => {
        console.log('ddd ' + num);
    }

    React.useEffect(()=>{
        //console.log(width);
        setCurrentWidth(window.innerWidth);
    },[width])

    React.useEffect(()=>{
       
    },[currentBtn])
    


    
    return (
        <div className='nomal-section'>
            {(currentWidth>=522)?
            <p className='nomal-section-title'>다양한 <strong>소모임</strong>을 통해 적성을 찾고 역량을 쌓아보세요</p>
            :
            <div className='nomal-section-title'>
            <p >다양한 <strong>소모임</strong>을 통해 </p>
              <p >적성을 찾고</p>
              <p>역량을 쌓아보세요</p>
              </div>
            }
            
            {(currentWidth >= 522 ?
                <div className='button-box'>
                    <button className={'nomal-section-btn ' + (currentBtn === 0?"cur-btn":"")} onClick={()=>ChangeCurBtn(0)}>
                        <p className='group-subtitle'><strong>게임</strong> 소모임</p>
                        <p className='group-title'>IGDC</p>
                        <span className='btn-emoji'>🎮</span>
                    </button>
                    <button className={'nomal-section-btn ' + (currentBtn === 1?"cur-btn":"")} onClick={()=>ChangeCurBtn(1)}>
                        <p className='group-subtitle'><strong>웹/앱</strong> 제작 소모임</p>
                        <p className='group-title'>WEBGRUS</p>
                        <span className='btn-emoji'>📱</span>
                    </button>
                    <button className={'nomal-section-btn ' + (currentBtn === 2?"cur-btn":"")} onClick={()=>ChangeCurBtn(2)}>
                        <p className='group-subtitle'><strong>해킹</strong> 소모임</p>
                        <p className='group-title'>IXPLOIT</p>
                        <span className='btn-emoji'>🔓</span>
                    </button>
                    <button className={'nomal-section-btn ' + (currentBtn === 3?"cur-btn":"")} onClick={()=>ChangeCurBtn(3)}>
                        <p className='group-subtitle'><strong>알고리즘</strong> 문제 풀이</p>
                        <p className='group-title'>매주 1과제</p>
                        <span className='btn-emoji'>🎲</span>
                    </button>
                </div>
                :
                <div className='button-box-mini'>
                    <div className='mini-button-row'>
                    <button className={'nomal-section-btn-mini ' + (currentBtn === 0?"cur-btn":"")} onClick={()=>ChangeCurBtn(0)}>IGDC</button>
                    <button className={'nomal-section-btn-mini ' + (currentBtn === 1?"cur-btn":"")} onClick={()=>ChangeCurBtn(1)}>WEBGRUS</button>
                    </div>
                    <div className='mini-button-row'>
                    <button className={'nomal-section-btn-mini ' + (currentBtn === 2?"cur-btn":"")} onClick={()=>ChangeCurBtn(2)}>IXPLOIT</button>
                    <button className={'nomal-section-btn-mini ' + (currentBtn === 3?"cur-btn":"")} onClick={()=>ChangeCurBtn(3)}>매주 1과제</button>
                    </div>
                </div>
                )}

            <div className='group-section-description'>
                <div className='text-box'>
                    <h3 className='text-box-title'>최고의 소모임</h3>
                    <p className='text-box-description'>쿤스는 비틀스만 한 문화적 영향력을 갖겠다는 목표를 내걸었고, 비틀스는 자신들이 예수보다 더 영향력이 크다는 주장으로 사람들을 격분시켰으며, 
                        이는 “나는 신이다”라고 선언한 웨스트에 의해 업데이트됐다. 이러한 야망들은 물론 실현 불가능했는데, 
                        이렇게 영향력 있고 독보적인 사람들은 자신들에게 주어진 틀을 평생 벗어나지 못하기 때문이었다. 
                        비틀스는 하나의 대중음악 현상으로 남았고, 쿤스는 영원히 많은 사람들이 이름을 들어봤을 법한 미술 작가일 테고, 
                        카녜이는 카녜이로 남을 테며, 하느님은 하느님이었다. {currentBtn}
                    </p>
                </div>
                <img className='image-box' src={`${process.env.PUBLIC_URL}/background-image.png`}  alt="" />
            </div>
        </div>
    )
}

export default ScrollSection2;