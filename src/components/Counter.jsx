import { useEffect, useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(prevState => prevState + 1);
    };

    const countDown = () => {
        setCount(prevState => prevState - 1);
    };

    useEffect(() => {
        console.log("Current count is...", count);
    });  // レンダリング後に常に実行
    // }, []);  // 初回レンダリング後のみ実行
    // }, [count]);  // countが変更された後に実行

    return (
        <div>
            <p>現在のカウント：{count}</p>
            <button onClick={countUp}>up</button>
            <button onClick={countDown}>down</button>
        </div>
    );
};

export default Counter;