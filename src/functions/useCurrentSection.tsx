import { useState, useEffect } from 'react';

export function useCurrentSeciton(sectionInfo:Array<any>,cur:number) {
  const [current, setCurrent] = useState<number>(0);

  const listener = () => {
    setCurrent(1);
  };

  useEffect(() => {
    let prev=0;
    for(let i=0; i<cur; i++){
        prev = prev + sectionInfo[i].scrollHeight;
    }
    
    const yOffset: number = window.scrollY;
    let enterNewScene: boolean = false;

    if (yOffset > prev + sectionInfo[cur].scrollHeight) { // 스크롤을 내려 다른 섹션으로 가게되면      
        setCurrent(cur + 1);
    }
    else if (yOffset < prev) { // 스크롤을 올려 윗 섹션으로 가면
        if (cur === 0) return;
        setCurrent(cur -1)
        enterNewScene = true;
    }
  });

  return {
    current
  };
}