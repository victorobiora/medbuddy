const Backdrop = props => {
    return <div style={{
        height: '100%',
        width: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        background: 'rgba(0,0,0.0.8)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: '150'
    }} onClick={() => {
        props.remove()
    }}></div>
}


export default Backdrop