import {useState} from "react";
import "./App.css";

function App() {
    const [titles, setTitles] = useState([
        "The Journey Begins: My Story",
        "Fashion Insights: Trends to Watch This Year",
        "Parenting Tips: Navigating the Journey of Parenthood"
    ]);

    let [thumbsUp, setThumbsUp] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [modalTitle, setModalTitle] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <span>SAMPLE BLOG</span>
            </div>
            <div className="container">
                <div className="btn-wrap">
                    <button
                        onClick={() => {
                            const sortedTitles = [...titles].sort();
                            setTitles(sortedTitles);
                        }}
                    >
                        ABC
                    </button>
                </div>
                <ul className="list">
                    {titles.map((v, i) => (
                        <li key={i}>
                            <div className="title_area">
                                <h4 onClick={() => {
                                    setModalTitle(i);
                                    setModal(true);
                                }}>{titles[i]}</h4>
                                <span onClick={() => {
                                    setThumbsUp((t) => {
                                        let copyThumbsUp = [...t];
                                        copyThumbsUp[i] += 1
                                        return copyThumbsUp;
                                    })
                                }}>👍</span>
                                <span>{thumbsUp[i]}</span>
                            </div>
                            <span>04/01/25</span>
                        </li>
                    ))}
                </ul>
                {
                    modal == true ? <Modal titles={titles} setTitles={setTitles} setModal={setModal} modalTitle={modalTitle} /> : null
                }
            </div>
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h4>{ props.titles[props.modalTitle] }</h4>
            <span>Date</span>
            <p>Content</p>
            <button onClick={() => {
                props.setModal(false);
            }}>close
            </button>
        </div>
    )
}

export default App;
