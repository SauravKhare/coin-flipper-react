const CoinFlipper = (props) => {
    const coinPossibilities = ['Heads', 'Tails'];
    const coinFlip = () => {
        let coin = Math.floor(Math.random(coinPossibilities) * coinPossibilities.length);
        setTimeout(() => {
            props.onCoinChange(coinPossibilities[coin]);
        }, 800);
    }

    return (
        <>
        <button onClick={coinFlip}>Flip</button>
        </>
    );
}

export default CoinFlipper;