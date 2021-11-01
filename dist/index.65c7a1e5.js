let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我是一名前端开发者名叫新海!
* 下面，我将演示下我的前端功底了
* 开始我将准备一个div
**/

#div1 {
    width: 200px;
    height: 200px;
}
/* 下面我将把div变为黑白相间的八卦图
*  请看好了
*  先把div变成一个圆圈
**/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
    border: none;
}
/*  阴阳黑白形成八卦图
*   一黑一白
 **/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加阴阳两球 */
#div1::before{
    width: 100px;
    height: 100px;
    left: 0;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    left: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        // string2 += string[n] === '\n'?"<br>":string[n];
        if (string[n] === "\n") // 如果是回车
        string2 += "<br>";
        else if (string[n] === " ") string2 += "&nbsp";
        else // 不是回车，照常执行
        string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        html.scrollTo(0, 9999);
        window.scrollTo(0, 9999);
        if (n < string.length - 1) {
            //n+1和n试出来 n不是最后一个
            n += 1;
            step();
        }
    }, 50);
};
step();

//# sourceMappingURL=index.65c7a1e5.js.map
