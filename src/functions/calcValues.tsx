import * as React from 'react'

const calcValues = (values:any, currentYOffset:number, sectionHeight:number, ):number => {
    const scrollRatio = currentYOffset/sectionHeight;
    let rv:number = 0;

    if(values.length === 3){
        const partStart:number = values[2].start * sectionHeight;
        const partEnd:number = values[2].end * sectionHeight;
        const partSectionHeight:number = partEnd - partStart;

        if(currentYOffset >= partStart && currentYOffset <= partEnd){
            rv = ((currentYOffset - partStart)/ partSectionHeight * (values[1]-values[0])) + values[0];
        }
        else if(currentYOffset<partStart){
            rv = values[0];
        }
        else if(partEnd<currentYOffset){
            rv = values[1];
        }
    }
    else{
        rv = scrollRatio * (values[1]-values[0]) + values[0];
    }

    return rv;
}


export default calcValues;