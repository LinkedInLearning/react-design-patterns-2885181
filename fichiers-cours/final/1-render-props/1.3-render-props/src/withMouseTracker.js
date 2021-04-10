import { useState, useEffect } from 'react';

const withMouseTracker = Component = (props) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const handleOnMouseMove = event => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        });
    }
    useEffect(() => {
        console.log(position)
    }, [position])

    return (
        <header className="App-header" onMouseMove={handleOnMouseMove} style={library.style}>
            <Component {...props.library} />
        </header>
    )
}
export default withMouseTracker