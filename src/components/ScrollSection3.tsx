import * as React from 'react'
import './ScrollSection1.css'

function ScrollSection3(props: any){
    const {setTotal} = props;
    const scrollSection:any = React.useRef(null);

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
            },
            value:{

            }}
    ]

    const SetLayout = ():void => {
        scrollInfo[0].scrollHeight =  scrollInfo[0].height * window.innerHeight;
        console.log("scroll3: " + scrollInfo[0].scrollHeight );
        if(scrollInfo[0].obj.container.current){
            scrollInfo[0].obj.container.current.style.height = `${scrollInfo[0].scrollHeight}px`;
            setTotal((cur:[number,number,number,number])=>[cur[0],cur[1],scrollInfo[0].scrollHeight,cur[3]])
        }
    } 


    React.useEffect(()=>{
        window.addEventListener('load',SetLayout);
        return(()=>{
            window.removeEventListener('load',SetLayout);
        })
    },[])
    return (
        <div className='scroll-section' ref={scrollSection}>
            <h1>3</h1>
        </div>
    )
}

export default ScrollSection3;