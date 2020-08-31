import React from 'react';
import { createUseStyles, useTheme, Theme } from '../theme';
import { useAppState } from '../state/weather-state';
import { observer } from 'mobx-react-lite';
import { debounce } from '../utils';
import { SearchIcon } from '../components/icons/SearchIcon';

const useStyles = createUseStyles<Theme>(theme => ({
  root: {
  },
  icon: {
    color: theme.icon.main,
  },
}));

const Lookup: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles({theme});

  const state = useAppState();

  const handleSearch = debounce((query: string) => {
    state.setLookup(query);
  }, 300);

  return (
    <div className={classes.root}>
      <SearchIcon className={classes.icon}/>
      <input type="text" defaultValue={state.lookup} onChange={(event) => handleSearch(event.target.value)}/>
      <LookupResultList/>
    </div>
  );
};

export default Lookup;

const LookupResultList: React.FC = observer(() => {
  const state = useAppState();

  const results = state.lookupResult;

  return (
    <div>
      {results.map( result => (
        <div key={result.name}>{result.name} / {result.region} / {result.country}</div>
      ))}
    </div>
  )
});