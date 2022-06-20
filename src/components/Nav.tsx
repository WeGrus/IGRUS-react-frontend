import "./Nav.css"
import * as React from "react";
import { log } from "console";

function Nav(props: any) {
    type windowSizeType = {
        width:any,
        height:any
    }

    const {isCurrent} = props;

    const [windowSize, setWindowSize] = React.useState<windowSizeType>({width:window.innerWidth, height:window.innerHeight})
    const [loggedIn, setLoggedIn]= React.useState<boolean>(true) // 추후에 로그인 여부에 따라 값을 받을 예정.
    const [showBtn, setShowBtn] = React.useState<boolean>(window.innerWidth<1024?true:false); // btn은 윈도우 크기가 작을 때, 드롭다운으로 구현.
    const [btn, setBtn] = React.useState<boolean>(false);

    const nav:any = React.useRef(null);
    const navLink:any = React.useRef(null);
    const navListBtn:any = React.useRef(null);
    const aboutEl:any = React.useRef(null);
    const acrivitiesEl:any= React.useRef(null);
    const amdinEl:any = React.useRef(null);
    const linkBox:any = React.useRef(null);

    const ViewDropdown = () => {
        console.log(btn);
        setBtn((cur)=>!cur);
    }

    const HandleResize = () => {
        
        if(window.innerWidth>1024 && windowSize.width<1024){ // 작은 화면에서 커지면
            setShowBtn((cur) => false);
            if(navLink.current){
                if(loggedIn === true){ //로그인 했다면
                    navLink.current.style.width = '15.15rem';
                }
                else{
                    navLink.current.style.width = '9.5rem';
                }
            }

        }
        else if(window.innerWidth<1024 && windowSize.width>=1024){ // 큰 화면에서 작아지면
            setShowBtn((cur) => true);
            console.log("hhahaha");
            
        }
        setWindowSize({width:window.innerWidth,height:window.innerHeight});        
    }

    React.useEffect(()=>{
        window.addEventListener('resize',HandleResize);

        return(()=>{
            window.removeEventListener('resize',HandleResize);
        })
    },[windowSize])

 

    return (
        <>
            <nav className="nav"  ref={nav}>
                <div className="nav-item">
                    <img className="nav-icon" src={`${process.env.PUBLIC_URL}/logo.png`}></img>
                    <button className="nav-links-btn" ref={navListBtn} onClick={ViewDropdown}>V</button>
                    {(showBtn ?
                        <>
                            <div id="link-box" className={"link-box "+ (btn?`block`:"")} ref={linkBox}>
                                <button className="box-item">ABOUT</button>
                                <button className="box-item">ACTIVITIES</button>
                                <button className="box-item">ADMIN</button>
                            </div>
                        </>
                        :
                        <></>
                    )}
                    <ul className="nav-links" ref={navLink} >
                        <li className="nav-links-item" ref={aboutEl}>ABOUT</li>
                        <li className="nav-links-item" ref={acrivitiesEl}>ACTIVITIES</li>
                        <li className="nav-links-item" ref={amdinEl}>ADMIN</li>
                    </ul>
                    <button className="nav-btn">{(showBtn === true?`가입`:"IGRUS 가입하기")}</button>
                </div>
            </nav>
        </>)
}

export default Nav;