function buttonClick(props) {
    function clickHandler() {
        document.querySelectorAll(".clickMePls").innerHTML = props.text;
        // document.querySelector(".clickMePls").innerHTML = "Told you"
        // document.querySelector(".textDiv").innerHTML = "You clicked!"
        for (let i = 0; i < 10; i++) {
            let el = document.createElement("DIV");
            let text = document.createTextNode("You clicked!");
            el.appendChild(text);
            document.querySelector(".textDiv").appendChild(el)
        }
    }

    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(<button className="clickMePls" onClick={clickHandler}>Dont click me!</button>)
    }

    // let arr;
    // const elem = <button className="clickMePls" onClick={clickHandler}>Dont click me!</button>
    // const baseSecRoot = document.querySelector(".baseSec")

    // for (let i = 0; i < 10; i++) {
    //     arr += <button className="clickMePls" onClick={clickHandler}>Dont click me!</button>
    // }

    // baseSecRoot.appendChild(arr)


    // <button className="clickMePls" onClick={clickHandler}>Dont click me!</button>

    return (
        <div className="baseSec">
            <div className="buttonDiv">
                {arr}
            </div>
            <div className="textDiv"></div>
        </div>
    )
}

export default buttonClick
