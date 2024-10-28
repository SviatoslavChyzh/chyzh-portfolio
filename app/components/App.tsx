import './App.css';
import 'ui/style.css';
// import { BsFiletypeCss, BsFiletypeHtml, BsFiletypeScss } from 'react-icons/bs';
// import { BiLogoJavascript, BiLogoReact, BiLogoTypescript } from 'react-icons/bi';
// import { useLocalStorage } from './shared/hooks/useLocalStorage';
import { useQuery } from '@tanstack/react-query';

function App() {
  // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', prefersDark ? 'dark' : 'light');

  const result = useQuery({
    queryKey: ['test'],
    queryFn: () =>
      Promise.resolve([
        { id: 1, name: 'test' },
        { id: 2, name: 'test2' },
        { id: 3, name: 'test3' },
      ]),
    staleTime: Infinity,
  });

  if (result.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <form className={'color-picker'}>
        <fieldset>
          <legend className={'visually-hidden'}>Pick a color scheme</legend>
          <label htmlFor="light" className={'visually-hidden'}>
            Light
          </label>
          <input
            type="radio"
            name="theme"
            id="light"
            // onChange={() => setTheme('light')}
            // checked={theme === 'light'}
            // value={theme}
          />
          <label htmlFor="dark" className={'visually-hidden'}>
            Dark
          </label>
          <input
            type="radio"
            name="theme"
            id="dark"
            // onChange={() => setTheme('dark')}
            // checked={theme === 'dark'}
            // value={theme}
          />
        </fieldset>
      </form>
      <div className={'grid-container'}>
        <aside>
          <ul className={'icon-list'} role="list"></ul>
        </aside>
        <main></main>
      </div>
    </>
  );
}

export default App;
