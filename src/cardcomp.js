import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export default function Card(props) {
    let localbutton =()=>{
        props.handleButtonClick()
    }
    return <>
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
                    <h6 className="card-price text-center">{props.data.cur}{props.data.Price}<span className="period">/{props.data.period}</span></h6>
                    <hr>

                    </hr>
                    <ul className="fa-ul">
{
    props.data.offers.map((offers)=>{
        return  <li className={offers.isEnbl?"":"text-muted"}><span className="fa-li"><i className={offers.isEnbl?"fa-check":""}></i></span>
       {offers.name}
        </li>
    })
}
                    </ul>
                    <a href="#" className="btn btn-block btn-primary text-uppercase" onClick={localbutton}>Button</a>
                </div>
            </div>

        </div>
    </>
}