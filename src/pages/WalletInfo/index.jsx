import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';

import { walletInfo } from '../../redux/actions';
import '../pages.css';

function Wallet() {
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const dispatch = useDispatch();
  const { walletInfoReducer: { wallet } } = useSelector((state) => state);
  const { walletInfoReducer: { received } } = useSelector((state) => state);
  const { walletInfoReducer: { spent } } = useSelector((state) => state);

  const send = () => {
    dispatch(walletInfo(value));
    setValue('');
  };

  console.log(wallet.data);
  console.log(spent.data);
  console.log(received.data);
  const txTableReceived = received.data.txs;
  const txTableSpent = spent.data.txs;

  useEffect(() => {
    dispatch(walletInfo());
  }, [dispatch]);

  const abc = (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Hash</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {txTableReceived.map((row) => (
          <TableRow key={row.txid}>
            <TableCell>{row.txid}</TableCell>
            <TableCell>{new Date(row.time * 1000).toDateString()}</TableCell>
            <TableCell>{row.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const bca = (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Hash</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {txTableSpent.map((row) => (
          <TableRow key={row.txid}>
            <TableCell>{row.txid}</TableCell>
            <TableCell>{(row.time * 1000).toLocaleString()}</TableCell>
            <TableCell>{row.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div className="wrap">

      <Paper
        sx={{
          p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Введите адрес"
          value={value}
          onChange={handleChange}
        />
        <IconButton type="button" onClick={send} sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box padding="30px">
        {bca}
      </Box>
      <Box>
        {abc}
      </Box>
    </div>
  );
}

export default Wallet;
