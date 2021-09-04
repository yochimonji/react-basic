import { Article, Counter } from "./components/index"

function App() {
  return (
    <div>
      <Article
        title={'新・日本一わかりやすいReact入門4'}
        content={'今日のトピックはpropsについて。'}
      />
      <Article
        title={'新・日本一わかりやすいReact入門5'}
        content={'今日のトピックはuseStateについて。'}
      />
      <Article
        title={'新・日本一わかりやすいReact入門6'}
        content={'今日のトピックはuseEffectについて。'}
      />
      <Counter></Counter>
    </div>
  );
}

export default App;
