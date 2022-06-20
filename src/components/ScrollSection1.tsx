import * as React from 'react'
import './ScrollSection1.css'
import calcValues from '../functions/calcValues';

function ScrollSection1(props: any){
    const {setTotal, currentSection, prevScrollHeight} = props;
    const [scroll,setScroll] = React.useState<number>(0);
    const [isCurrent, setIsCurrent] = React.useState<number>(currentSection);
    const scrollSection:any = React.useRef(null);
    const flexSection:any =React.useRef(null);

    type Info = {
        height:number,
        scrollHeight:number,
        obj:any,
        value:any
    }

    const scrollInfo:Array<Info> = [
        { 
            height:5,
            scrollHeight:0,
            obj:{
                container:scrollSection,
                section_1:flexSection
            },
            value:{
                flexSection_opacity_out:[1,0,{start:0.3,end:0.5}],
                flexSection_translateY_out:[0,-20,{start:0.3,end:0.5}]
            }}
    ]

    const SetLayout = ():void => {
        scrollInfo[0].scrollHeight =  scrollInfo[0].height * window.innerHeight;
        if(scrollInfo[0].obj.container.current){
            scrollInfo[0].obj.container.current.style.height = `${scrollInfo[0].scrollHeight}px`;
            setTotal((cur:[number,number,number,number])=>[scrollInfo[0].scrollHeight,cur[1],cur[2],cur[3]])
        }
    } 

    const playAnmation = ():void => {
        console.log(props);
        console.log(currentSection);
        console.log(isCurrent);
        
        if(isCurrent === 0){
            console.log("지금은 1번 섹션!");
            const sectionHeight:number = scrollInfo[0].scrollHeight;
            const currentYOffset:number =window.scrollY - prevScrollHeight;
            const scrollRatio:number = currentYOffset/sectionHeight;
    
            if(scrollRatio<=0.5){
                flexSection.current.style.opacity = calcValues(scrollInfo[0].value,currentYOffset,sectionHeight)
            }
            setScroll(window.scrollY)
        }
        else{
            console.log("지금은 1번 섹션이 아님!");
        }
    }



    React.useEffect(()=>{
        window.addEventListener('load',SetLayout);
        
        
        return(()=>{
            window.removeEventListener('load',SetLayout);
        })
    },[])

    React.useEffect(()=>{
        window.addEventListener('scroll',playAnmation)
        return (() => {
          window.removeEventListener('scroll',playAnmation)
        })
      },[scroll])



    return (
        <section className='scroll-section' ref={scrollSection}>
        <div className='sticky-elem 1'>
            <div className='flex-section' ref={flexSection}>
                <img className='icon' src={`${process.env.PUBLIC_URL}/favicon-96x96.png`} alt="" />
                <div className='text'>
                    <h1 className='description'>인하대 최대 규모의 소프트웨어 동아리</h1>
                    <h2 className='description'>Inha Group of Research for unix security</h2>
                </div>
            </div>
        </div>
        {/* <canvas className="image-blend-canvas" width="1920" height="1080"></canvas>
        <div className='sticky-elem message b'></div> */}
        
        </section>)
}

export default ScrollSection1;