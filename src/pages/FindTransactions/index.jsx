import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// eslint-disable-next-line import/named
import { getBlocksRequested, getSortedTransactions } from '../../redux/actions';
import '../pages.css';

function Wallet() {
  const arr = [];
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const [selectedIndex, setSelectedIndex] = React.useState('0');
  const { blocksReducer: { blocks, fetching } } = useSelector((state) => state);
  const handleAlignment = (event, index) => {
    setSelectedIndex(index);
  };
  const handleChange = (event) => {
    if (/^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/g.test(event.target.value) || event.target.value.length === 0) setValue(event.target.value);
  };

  useEffect(() => {
    if (!blocks) dispatch(getBlocksRequested());
  }, []);
  const findTransactions = (currentValue = 0) => {
    blocks?.forEach(({ txs }) => {
      txs?.forEach((tx) => {
        switch (selectedIndex) {
          case '0': {
            if (Math.round(tx.value) === Math.round(currentValue)) {
              arr.push(tx);
            }
            break;
          }
          case '1': {
            if (tx.value === currentValue) {
              arr.push(tx);
            }
            break;
          }
          case '2': {
            if (parseFloat(tx.value) > currentValue) {
              arr.push(tx);
            }
            break;
          }
          case '3': {
            if (parseFloat(tx.value) < currentValue) {
              arr.push(tx);
            }
            break;
          }
          default:
            return [];
        }
        return arr;
      });
    });
    arr.sort((a, b) => a.value - b.value);
    dispatch(getSortedTransactions(arr));
  };
  return (
    <div className="wrap">
      {fetching
        && (
          <Box marginTop={35} flexDirection="column" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
            <Typography variant="overline" marginTop={5}>Fetching data</Typography>
          </Box>
        ) }
      { !fetching
        && (
          <div>
            <Paper
              sx={{
                p: '2px 4px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 35, marginBottom: 3,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Input transaction's value"
                value={value}
                onChange={handleChange}
              />
              <Link style={{ textDecoration: 'none' }} to="/result">
                <IconButton
                  type="button"
                  onClick={() => {
                    findTransactions(value);
                  }}
                  sx={{ p: '10px' }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Link>
            </Paper>
            <ToggleButtonGroup
              value={selectedIndex}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="0" aria-label="left aligned">
                EQUAL
              </ToggleButton>
              <ToggleButton value="1" aria-label="centered">
                STRICT EQUAL
              </ToggleButton>
              <ToggleButton value="2" aria-label="centered">
                GREATER
              </ToggleButton>
              <ToggleButton value="3" aria-label="right aligned">
                LESS
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

        )}
    </div>
  );
}

export default Wallet;
