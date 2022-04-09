import { Button } from "@chakra-ui/react";

const ActionButton = ({ content }) => {
  return (
    <Button
      background="linear-gradient(125.41deg, #3D6BF5 -4.22%, #C53DF5 120.93%)"
      borderRadius="25px"
      color="white"
      fontSize={16}
      size="lg"
    >
      {content}
    </Button>
  );
};

export default ActionButton;
