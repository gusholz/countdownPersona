import './feed.css';

export default function Feed(){
    return(
        <div className='containerFeed' >
            <img src="images/feedUpscale.png" alt="Feed" className='feed' />
            <div>
                <h1 className='news'>NEWS</h1>
                <div className='parallelogram'></div>
            </div>
        </div>
    )
}