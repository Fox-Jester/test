

interface BlockProps{
    word: string,
    outerColor: string,
    innerColor: string
}

export default function Block({word, outerColor, innerColor}: BlockProps){
    

    return (
        <div className="block" style={{backgroundColor: outerColor}}>
            <div style={{backgroundColor: innerColor}}>
                {word}
            </div>

        </div>
    )
}