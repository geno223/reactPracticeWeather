const Weather = (props) => {
    return(
        <div>
            <img src={props.img}/>
            <div>
                <b>conditons:</b>{props.conditions}
            </div>
            <div>
                <b>time:</b>{props.time}
            </div>

        </div>
    )
}

export default Weather;