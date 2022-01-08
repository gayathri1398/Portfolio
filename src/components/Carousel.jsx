import React from 'react';

export const PrevArrow=(props)=>{
    return<>
    <div className={props.className}
    style={{...props, backgroundColor:"rgb(134,198,135)",borderRadius:"16px"}}
    onClick={props.onClick}>
    </div>
    </>
}
export const NextArrow=(props)=>{
    return<>
    <div className={props.className}
    style={{...props, backgroundColor:"rgb(134,198,135)", borderRadius:"16px"}}
    onClick={props.onClick}>
    </div>
    </>
}