import loading from '../../../assets/loading/Loading_2.gif'

const Loading = () => {
    return(
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-[1%]'>
            <img className='w-20 h-20 z-50' src={loading}  alt=''/>
            <span className='text-primary'>Loading</span>
        </div>
    )
}

export default Loading;