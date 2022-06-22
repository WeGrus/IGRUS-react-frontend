import * as React from 'react'
import {useScroll} from "./../functions/useScroll"
import './ScrollSection3.css'

function ScrollSection3(props: any){
    const [aaa, setAaa] = React.useState<any>("");
    const itemsRef = React.useRef<any>([]);
    const arr = [1,2,3,4,5,6,7,8,9,10];
    let zoomInElement:any[] = [];

    React.useEffect(()=>{
        const k =  arr.map((item,i)=>(
            <div key = {i} ref={el => itemsRef.current[i]=el} className={(i%2 === 0)?'zoom-in-box  box-left':'zoom-in-box  box-right'} data-side = {(i%2 === 0)?'left':'right'}>
                <p className={ (i%2 === 0)?'zoom-in-box-text text-left':'zoom-in-box-text text-right'}>와서 배우세염</p>
            </div>
        ));
        setAaa(k);
    },[])
    const ZoomInAnimation = new IntersectionObserver(entries => {
        entries.forEach((entry:any) => {
            // console.log(scrollY);
            // console.log(entry.boundingClientRect.top+44);
            // console.log(window.scrollY);
           // console.log(window.pageYOffset);
           const side:string  = entry?.target?.dataset?.side;
           const left:string = 'left';
           const right:string  = 'right';
           
            if (entry.boundingClientRect.top > 0) {
                if (side === left)
                    entry.target.classList.remove('zoom-in-animation-left');
                else if (side === right)
                    entry.target.classList.remove('zoom-in-animation-right');
            }
            if (entry.intersectionRatio > 0) {
                if(side === left)
                    entry.target.classList.add('zoom-in-animation-left');
                else if(side=== right)
                    entry.target.classList.add('zoom-in-animation-right');
            }
        })
    })

    React.useEffect(()=>{
        if(aaa != ""){
            if(itemsRef.current != null){
                for(let i = 0; i<itemsRef.current.length; i++){
                    zoomInElement.push(itemsRef.current[i])
                }
            }
            //console.log(ttt);
            console.log(itemsRef.current);
            zoomInElement.forEach((el)=>{
                ZoomInAnimation.observe(el);
            })
        }
    },[aaa])

    return(
        <div  className='section-3'>
        <h2 className='section-title'>자주 물어보는 질문</h2>
        {aaa}
        </div>
    )
}

export default ScrollSection3;