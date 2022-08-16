import './feed.css';
import News from './News/News';

export default function Feed(){
    return(
        <>
            <div className='containerFeed' >
                <img className='newsImg' src='images/news.png'/>
                <div>
                    <div className='parallelogram'>
                        <h1 className='feed'>Feed</h1>
                        <News/>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <ul className='footerList'>
                    <a className='footerLink' href='https://github.com/gusholz/countdownPersona'><li>Github</li></a>
                    <a className='footerLink' href='https://www.linkedin.com/in/gustavo-holzmann-771781175/'><li>Linkedin</li></a>
                    <a className='footerLink' href='https://www.behance.net/gusholz'><li>Behance</li></a>
                </ul>
                <h3 className='credits'>Fan made site devoloped by Gustavo Holzmann (Design and Code)</h3>
                <h3 className='credits'>&</h3>
                <h3 className='credits'>Levi Rios (API implementation)</h3>
                <h3 className='copyright'>Original Content Made By ©ATLUS. ©SEGA. All rights reserved</h3>
            </div>
        </>
    )
}