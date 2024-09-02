
function Card(props) {
    return (
        <li className="card_list">
            <a href="#">
                <div className="imgbox">
                    <div className="card_img">
                        <img src={props.mimg} alt={props.mtit} />
                    </div>
                </div>
                <div>
                    <span className="card_tit">{props.mtit}</span>
                </div>
                <div>
                    <span className="card_rate">{props.mrate}</span>
                </div>
                <div>
                    <span className="card_price">{props.mprice}</span>
                </div>
            </a>
        </li>
    );
}