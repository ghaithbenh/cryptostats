import { Button } from "@mui/material";
import React from "react";
import { useAppSelector } from "../app/hooks";
import { TransactionGrid } from "../components/transactions/Transaction-grid.component";
import { selectCurrentUser } from "../slices/auth.slice";

const HomePage: React.FC = () => {
  const user = useAppSelector((state) => selectCurrentUser(state));
  const handleConnectCoinbase = () => {
    if (process.env.REACT_APP_COINBASE_URL) {
      window.location.href = process.env.REACT_APP_COINBASE_URL;
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      {user?.isCoinBaseAuthorized ? (
        <TransactionGrid />
      ) : (
        <Button
          variant="contained"
          size="large"
          onClick={handleConnectCoinbase}
        >
          connect coinbase
        </Button>
      )}
    </div>
  );
};

export { HomePage };
