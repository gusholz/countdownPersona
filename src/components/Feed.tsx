import './feed.css';

export default function Feed(){
    return(
        <>
            <div className='containerFeed' >
                <h1 className='news'>News Feed</h1>
                <div>
                    <div className='parallelogram'></div>
                    <div className='parallelogram2'></div>
                </div>
            </div>
            <div className='footer'>
                <ul className='footerList'>
                    <a className='footerLink' href='https://github.com/gusholz/countdownPersona'><li>Github</li></a>
                    <a className='footerLink' href='https://www.linkedin.com/in/gustavo-holzmann-771781175/'><li>Linkedin</li></a>
                    <a className='footerLink' href='https://www.behance.net/gusholz'><li>Behance</li></a>
                    <a className='footerLink' href='https://github.com/gusholz/countdownPersona'><li>Paypal</li></a>
                </ul>
            </div>
        </>
    )
}