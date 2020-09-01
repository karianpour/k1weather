import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import { useAppState } from '../state/weather-state';
import { observer } from 'mobx-react-lite';
import { debounce } from '../utils';
import { SearchIcon } from '../components/icons/SearchIcon';
import clsx from 'clsx';
import { CSSTransition } from 'react-transition-group';
import { useFadeTransitionStyles } from '../components/transitions';
import { useHistory } from 'react-router-dom';
import { ICity } from '../api/AppApi';

/**
 * This search combo box is made with the specifications of the following page:
 * https://www.w3.org/TR/wai-aria-practices-1.1/examples/combobox/aria1.1pattern/listbox-combo.html
 * 
 */

const KeyCode = {
  UP: 38,
  DOWN: 40,
  ESC: 27,
  RETURN: 13,
  SPACE: 32,
  BACKSPACE: 8,
  TAB: 7,
}

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: `${theme.primary.dark}cc`,
    padding: 4,
    color: theme.primary.text,
    width: 32,
    maxWidth: 480,
    transition: `width 300ms ease`,
  },
  rootActive: {
    width: '100%',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: theme.primary.text,
  },
  query: {
    border: 0,
    borderRadius: 4,
    width: 0,
    padding: 0,
    transition: `width 300ms ease`,
  },
  queryFocused: {
    // border: 'unset',
    marginLeft: 4,
    padding: 4,
    width: `calc(100% - 30px)`,
  },
  hidden: {
    display: 'none',
  },
  listbox: {
    background: theme.background.main,
    border: `1px solid ${theme.border.main}`,
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'absolute',
    top: 42,
    width: 'calc(100% - 16px)',
    left: 8,
    maxWidth: 480,
    maxHeight: 'calc(100% - 52px)',
    zIndex: 1,
    overflow: 'auto',
    borderRadius: '0 0 4px 4px',
  },
  resultRow: {
    padding: 2,
    cursor: 'default',
    color: theme.text.primary,
    margin: 0,
    '&:hover': {
      backgroundColor: `${theme.primary.main}11`,
    },
  },
  resultRowActive: {
    backgroundColor: `${theme.primary.main}55`,
  },
}));

const Lookup: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles({theme});

  const state = useAppState();

  const handleSearch = debounce((query: string) => {
    state.setLookup(query);
  }, 300);

  const [active, setActive] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleActivateLookup = () => {
    setActive( a => !a );
  }

  const history = useHistory();

  const showResult = (city: ICity) => {
    history.push(`/city/${city.country}/${city.region}/${city.name}`);
    setActive(false);
  }

  const handleKeyUp = function (evt: React.KeyboardEvent) {
    const key = evt.which || evt.keyCode;
  
    switch (key) {
      case KeyCode.UP:
      case KeyCode.DOWN:
      case KeyCode.ESC:
      case KeyCode.RETURN:
        evt.preventDefault();
        return;
      default:
    }
  };

  const handleKeyDown = function (evt: React.KeyboardEvent) {
    var key = evt.which || evt.keyCode;
  
    if (key === KeyCode.ESC) {
      setActive(false)
      // setTimeout((function () {
      //   // On Firefox, input does not get cleared here unless wrapped in
      //   // a setTimeout
      //   this.input.value = '';
      // }).bind(this), 1);
      return;
    }
 
    let activeIndex = state.lookupActiveIndex ?? -1;

    switch (key) {
      case KeyCode.UP:
        if (activeIndex <= 0) {
          state.setLookupActiveIndex(state.lookupResult.length - 1);
        }
        else {
          state.setLookupActiveIndex(activeIndex - 1);
        }
        break;
      case KeyCode.DOWN:
        if (activeIndex === -1 || activeIndex >= state.lookupResult.length - 1) {
          state.setLookupActiveIndex(0);
        }
        else {
          state.setLookupActiveIndex(activeIndex + 1);
        }
        break;
      case KeyCode.RETURN:
        if(state.lookupActiveIndex!==null){
          showResult(state.lookupResult[state.lookupActiveIndex]);
        }
        return;
      case KeyCode.TAB:
        setActive(false);
        return;
      default:
        return;
    }
  
    evt.preventDefault();
  
    inputRef.current?.setAttribute(
      'aria-activedescendant',
      state.lookupActiveIndex === null ? '' : 'result-item-' + state.lookupActiveIndex,
    );
  };

  return (
    <div
      className={clsx(classes.root, active && classes.rootActive)}
      id="lookup"
      role="combobox"
      aria-owns="lookup-listbox"
      aria-expanded={active? 'true': 'false'}
      aria-controls="lookup-listbox"
      aria-haspopup="listbox"
    >
      <label htmlFor="lookup-input" id="lookup-label" className={classes.label}>
        <SearchIcon className={classes.icon} onClick={handleActivateLookup}/>
      </label>
      <input
        ref={inputRef}
        type="text"
        className={clsx(classes.query, active && classes.queryFocused)}
        defaultValue={state.lookup} onChange={(event) => handleSearch(event.target.value)}
        id="lookup-input"
        aria-autocomplete="list"
        aria-controls="lookup-listbox"
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
      />
      <LookupResultList active={active} showResult={showResult}/>
    </div>
  );
};

export default Lookup;

const LookupResultList: React.FC<{active: boolean, showResult: (city: ICity)=>void}> = observer(({active, showResult}) => {
  const theme = useTheme();
  const classes = useStyles({theme});
  const transitionClasses = useFadeTransitionStyles({theme});

  const state = useAppState();

  const results = state.lookupResult;

  return (
    <CSSTransition in={active} unmountOnExit timeout={500} classNames={transitionClasses}>
      <ul
        id="lookup-listbox"
        role="listbox"
        aria-labelledby="lookup-label"
        className={clsx(classes.listbox)}
      >
        {results.map( (result, index) => {
          const active = state.lookupActiveIndex === index;
          return (
            <li
              key={result.name}
              role="option"
              id={`result-item-${index}`}
              aria-selected={active ? 'true' : 'false'}
              className={clsx(classes.resultRow, active && classes.resultRowActive)}
              onClick={() => showResult(result)}
            >
              {result.name} / {result.region} / {result.country}
            </li>
          );
        })}
      </ul>
    </CSSTransition>
  )
});