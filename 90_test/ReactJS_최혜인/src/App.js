// App 컴포넌트
function App() {
    return (
        <ul className="container">
            {cards.map((item, idx) => (
                <Card
                    key={idx}
                    mimg={item.cimg}
                    mtit={item.ctit}
                    mrate={item.crate}
                    mprice={item.cprice}
                />
            ))}
        </ul>
    );
}
