import * as React from "react";
import './ScrollSection.css'
import {useScroll} from "./../functions/useScroll"
import  {useWidth} from "./../functions/useWidth"
import calcValues from "./../functions/calcValues"
import ScrollSection2 from "./ScrollSection2";
import ScrollSection3 from "./ScrollSection3";
import ScrollSection4 from "./ScrollSection4";

function ScrollSection(){
    
    const [currentSection, setCurrentSection] = React.useState<number>(0); // 현재 몇번쨰 섹션인지.
    const [prevScrollHeight,setPrevScrollHeight] = React.useState<number>(0); // 이전 섹션에서의 높이
    const [scroll,setScroll] = React.useState<number>(0);
    const [sectionInfo, setSectionInfo] = React.useState<any>(null);
    const [check,setCheck] = React.useState<boolean>(false);

    const scrollSection1:any = React.useRef(null);
    const scrollSection2:any = React.useRef(null);
    const scrollSection3:any = React.useRef(null);
    const scrollSection4:any = React.useRef(null);
    const flexSection1:any =React.useRef(null);
    const contenSection2:any =React.useRef(null);
    const contenSection3:any =React.useRef(null);
    const contenSection4:any =React.useRef(null);
    const flexSection2:any =React.useRef(null);
    const image0:any =React.useRef(null);

    let current=0;
    let prevHeight = 0;

    type Info = {
        type:string,
        height:number,
        scrollHeight:number,
        obj:any,
        value:any
    }

    const sectionInfos:Array<Info> = [
        { 
            type:"sticky",
            height:5,
            scrollHeight:0,
            obj:{
                container:scrollSection1,
            },
            value:{
                flexSection1_opacity_out:[1,0,{start:0.1,end:0.25}],
                flexSection1_translateY_out:[0,-20,{start:0.1,end:0.25}],

                image0_opacity_in:[0,1,{start:0.3,end:0.4}],
                flexSection2_opacity_in:[0,1,{start:0.4,end:0.55}],
                flexSection2_translateY_in:[20,0,{start:0.4,end:0.55}],

                flexSection2_opacity_out:[1,0,{start:0.6,end:0.75}],
                flexSection2_translateY_out:[0,-20,{start:0.6,end:0.75}],
                image0_opacity_out:[1,0,{start:0.8,end:0.9}],
                
            }
        },
        { 
            type:"normal",
            height:5,
            scrollHeight:0,
            obj:{
                container:scrollSection2,
                content:contenSection2
            },
            value:{

            }
        },
        { 
            type:"normal",
            height:5,
            scrollHeight:0,
            obj:{
                container:scrollSection3,
                content:contenSection3
            },
            value:{

            }
        },
        { 
            type:"normal",
            height:5,
            scrollHeight:0,
            obj:{
                container:scrollSection4,
                content:contenSection4
            },
            value:{

            }
        }

    ]

    const {scrollY} = useScroll();
    const {width} = useWidth();

    const SetLayout = ():void => {
        for (let i = 0; i < sectionInfos.length; i++) {
            //console.log(i);
            
			if (sectionInfos[i].type === 'sticky') {
				sectionInfos[i].scrollHeight = sectionInfos[i].height * window.innerHeight;
			} else if (sectionInfos[i].type === 'normal')  {
				sectionInfos[i].scrollHeight = sectionInfos[i].obj.content.current.offsetHeight;
			}
            sectionInfos[i].obj.container.current.style.height = `${sectionInfos[i].scrollHeight}px`;
		}
        let total=0;
        
        for(let i=0;i<sectionInfos.length; i++){
          total+=sectionInfos[i].scrollHeight;
          if(total>window.scrollY){
            setCurrentSection((cur)=>i);
            console.log("로드된 뒤의" + i);
            break;
          }
        }
        setSectionInfo(sectionInfos);
        setCheck(true);
        return;
      }

    React.useEffect(() => {
        //console.log(scrollSection3);
        //console.log(scrollSection3.current.children[1].className);
        //console.log(scrollSection3.current);
        
        window.addEventListener('load', SetLayout);
        return (() => {
            window.removeEventListener('load', SetLayout);
        })
    }, [])

     const playAniamtion = () => {
        const values =sectionInfo[currentSection].value;
        const objs =sectionInfo[currentSection].obj;
       // console.log(currentSection,prevScrollHeight);
        
        const currentYOffset = window.scrollY - prevScrollHeight;
        const sectionHeight = sectionInfo[currentSection].scrollHeight
        const scrollRatio = currentYOffset/sectionHeight;

     //  console.log(currentYOffset,sectionHeight,scrollRatio);

       switch(currentSection){
           case 0:    
            // image0_opacity_in:[0,1,{start:0.3,end:0.4}],
            // flexSection2_opacity_in:[0,1,{start:0.4,end:0.55}],
            // flexSection2_translateY_in:[20,0,{start:0.4,end:0.55}],

            // flexSection2_opacity_out:[1,0,{start:0.6,end:0.75}],
            // flexSection2_translateY_out:[0,-20,{start:0.6,end:0.75}],
            // image0_opacity_out:[1.0,{start:0.8,end:0.9}],

               if(0<=scrollRatio){
                const opacity:number = calcValues(values.flexSection1_opacity_out,currentYOffset,sectionHeight);
                flexSection1.current.style.opacity = opacity;
               }

               if(scrollRatio<0.575){
                image0.current.style.opacity = calcValues(values.image0_opacity_in,currentYOffset,sectionHeight);
                flexSection2.current.style.opacity = calcValues(values.flexSection2_opacity_in,currentYOffset,sectionHeight);
                flexSection2.current.style.transform = `translate3d(0,${calcValues(values.flexSection2_translateY_in,currentYOffset,sectionHeight)}%,0`;
               }
               else{
                image0.current.style.opacity = calcValues(values.image0_opacity_out,currentYOffset,sectionHeight);
                flexSection2.current.style.opacity = calcValues(values.flexSection2_opacity_out,currentYOffset,sectionHeight);
                flexSection2.current.style.transform = `translate3d(0,${calcValues(values.flexSection2_translateY_out,currentYOffset,sectionHeight)}%,0`;
               }
       }
        
     }


    React.useEffect(()=>{
        if(check === true && sectionInfo!= null){
            let enterNewScene: boolean = false;
            prevHeight = 0;

            for (let i = 0; i < currentSection; i++) {
                prevHeight = prevHeight + sectionInfo[i].scrollHeight;
            }
            setPrevScrollHeight(prevHeight)
            //console.log(currentSection);
    
            if (scrollY > prevHeight + sectionInfo[currentSection].scrollHeight) { // 스크롤을 내려 다른 섹션으로 가게되면      
                current = current + 1;
                setCurrentSection((cur)=>cur+1)
                enterNewScene = true;
            }
            else if (scrollY < prevHeight) { // 스크롤을 올려 윗 섹션으로 가면
                if (currentSection === 0) return;
                current = current - 1;
                setCurrentSection((cur)=>cur-1)
                enterNewScene = true;
            }
            //console.log(scrollY);
            
            playAniamtion();
        }
    }, [scrollY])

    React.useEffect(()=>{
        SetLayout()
    },[width])

    React.useEffect(()=>{
       // console.log(currentSection);
    },[currentSection])



    //const testList = 
    

    return(
    <>
            <section className={'scroll-section ' + (currentSection == 0 ?`current`:"")}  ref={scrollSection1}>
                <div className='sticky-elem elem-1'>
                    <div className='flex-section' ref={flexSection1}>
                        <img className='icon' src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
                        <div className='text'>
                            <h1 className='description'>인하대 최대 규모의 소프트웨어 동아리</h1>
                            <h2 className='description'>Inha Group of Research for unix security</h2>
                        </div>
                    </div>
                </div>
                <div className="sticky-elem non-padding" >
                    <img src={`${process.env.PUBLIC_URL}/background-image.png`} alt=""  className="backgroung-image" ref={image0}/>

                </div>

                <div className="sticky-elem elem-2" >
                    <div className="flex-col" ref={flexSection2}>
                        <p>
                            <small>탄생한지 </small>
                            22년
                        </p>
                        <p>
                            <small>누적 동아리원 수</small>
                            1972+명
                        </p>
                        <p>
                            <small>각종 수상 횟수</small>
                            1972번
                        </p>
                    </div>
                </div>
               
                {/* <canvas className="image-blend-canvas" width="1920" height="1080"></canvas>
        <div className='sticky-elem message b'></div> */}

            </section>
            <div className='scroll-section' ref={scrollSection2}>
                <div ref={contenSection2}>
                <ScrollSection2 />
                </div>
            
            </div>
            <div className='scroll-section' ref={scrollSection3}>
                <div ref={contenSection3}>
                <ScrollSection3 />
                </div>
            </div>
            <div className='scroll-section' ref={scrollSection4}>
                <div ref={contenSection4}>
                    <ScrollSection4 />
                </div>
            </div>
            <h2>{currentSection}</h2>
    </>
    )
}

export default ScrollSection;