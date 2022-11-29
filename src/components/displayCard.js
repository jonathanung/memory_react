import {React, useState, useEffect} from 'react';

const DisplayCard = (props) => {
    const [cardURL, setCardURL] = useState(`${process.env.PUBLIC_URL}/assets/images/cards/back_of_card.png`);
    const backURL = `${process.env.PUBLIC_URL}/assets/images/cards/back_of_card.png`;
    const defURL = `${process.env.PUBLIC_URL}/assets/images/cards/` + props.card.url;
    useEffect(() => {
        if (!props.card.getFlipped()) {
            setCardURL(backURL);
        } else {
            setCardURL(defURL);
        }
    }, [props, backURL, defURL])

    const flip = () => {
        if (props.card.getFlipped()=== false) {
            props.card.flip();
            props.flipCheck(props.i, props.j)
        }
    };
    return (
        <img className="card" src={cardURL} onClick={flip} alt="deez"></img>
    )
}

export default DisplayCard;