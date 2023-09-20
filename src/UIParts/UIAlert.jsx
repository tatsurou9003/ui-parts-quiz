import { Alert, AlertIcon, Stack } from "@chakra-ui/react";

export const UIAlert = () => {
  return (
    <Stack spacing={3}>
      <Alert status="error">
        <AlertIcon />
        There was an error processing your request
      </Alert>

      <Alert status="success">
        <AlertIcon />
        Data uploaded to the server.
      </Alert>

      <Alert status="info">
        <AlertIcon />
        Chakra is going live on August 30th.
      </Alert>
    </Stack>
  );
};
