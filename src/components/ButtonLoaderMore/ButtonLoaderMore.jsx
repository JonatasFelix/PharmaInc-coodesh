import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import CachedIcon from "@mui/icons-material/Cached";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

const LoadingButtonsTransition = ({ setPage, page, lenght }) => {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPage(page + 10);
    }, 500);
  }

  const ActiveButton = () => {
    return (
      <Button
        onClick={handleClick}
        variant="outlined"
        size="large"
        startIcon={<CachedIcon />}
        sx={{ width: "220px" }}
      >
        Load More
      </Button>
    );
  };

  const InactiveButton = () => {
    return (
      <LoadingButton
        loading
        variant="outlined"
        size="large"
        sx={{ width: "220px" }}
      >
        Submit
      </LoadingButton>
    );
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center", margin: "25px 0" }}>
      {page > lenght ? null : loading ? <InactiveButton /> : <ActiveButton />}
    </Container>
  );
};

export default LoadingButtonsTransition;
