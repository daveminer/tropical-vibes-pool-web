import { Button, Link } from "@chakra-ui/react";

const ActionButton = ({ content, onclick }) => {
  return (
    <Button
      background="linear-gradient(125.41deg, #3D6BF5 -4.22%, #C53DF5 120.93%)"
      borderRadius="25px"
      color="white"
      fontSize={16}
      onClick={onclick}
      size="lg"
    >
      <Link href="#about">Get Started</Link>
    </Button>
  );
};

export default ActionButton;
