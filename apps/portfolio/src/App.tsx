import './App.css';
import 'ui/style.css';
import { BsFiletypeCss, BsFiletypeHtml, BsFiletypeScss } from 'react-icons/bs';
import { BiLogoJavascript, BiLogoReact, BiLogoTypescript } from 'react-icons/bi';
import { useLocalStorage } from './shared/hooks/useLocalStorage';
import { useQuery } from '@tanstack/react-query';

function App() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', prefersDark ? 'dark' : 'light');

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
            onChange={() => setTheme('light')}
            checked={theme === 'light'}
            value={theme}
          />
          <label htmlFor="dark" className={'visually-hidden'}>
            Dark
          </label>
          <input
            type="radio"
            name="theme"
            id="dark"
            onChange={() => setTheme('dark')}
            checked={theme === 'dark'}
            value={theme}
          />
        </fieldset>
      </form>
      <div className={'grid-container'}>
        <aside>
          <ul className={'icon-list'} role="list">
            <li>
              <BsFiletypeHtml size={50} />
            </li>
            <li>
              <BsFiletypeCss size={50} />
            </li>
            <li>
              <BsFiletypeScss size={50} />
            </li>
            <li>
              <BiLogoJavascript size={50} />
            </li>
            <li>
              <BiLogoTypescript size={50} />
            </li>
            <li>
              <BiLogoReact size={50} />
            </li>
          </ul>
        </aside>
        <main>
          <p className={'eyebrow'}>skills & experience</p>
          <h1 className={'page-title'}>My Resume</h1>
          <p className={'intro'}>Intro</p>
          <div className={'job-experience'}>
            <div className={'job-experience__item'}>
              <h2 className={'job-experience__year'}>Job Year</h2>
              <div className={'job-experience__details'}>
                <h2 className={'job-experience__role'}>Job Role</h2>
                <span className={'job-experience__company'}>Company name</span>
              </div>
              <p>Description</p>
            </div>

            <div className={'job-experience__item'}>
              <h2 className={'job-experience__year'}>Job Year</h2>
              <div className={'job-experience__details'}>
                <h2 className={'job-experience__role'}>Job Role</h2>
                <span className={'job-experience__company'}>Company name</span>
              </div>
              <p>Description</p>
            </div>

            <div className={'job-experience__item'}>
              <h2 className={'job-experience__year'}>Job Year</h2>
              <div className={'job-experience__details'}>
                <h2 className={'job-experience__role'}>Job Role</h2>
                <span className={'job-experience__company'}>Company name</span>
              </div>
              <p>Description</p>
            </div>

            <div className={'job-experience__item'}>
              <h2 className={'job-experience__year'}>Job Year</h2>
              <div className={'job-experience__details'}>
                <h2 className={'job-experience__role'}>Job Role</h2>
                <span className={'job-experience__company'}>Company name</span>
              </div>
              <p>Description</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
