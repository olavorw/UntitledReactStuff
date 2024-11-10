import ListGroup from "./components/ListGroup.tsx";

function App() {
    const items = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
    const handleSelectItem = (item: string) => {
        console.log(item);
    }
    return <div><ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/></div>
}

export default App;