import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";

const BlogCard = ({ blog, idx }) => {
  return (
    <Stack>
      <Image marginBottom="2rem" src={`/test-blog-${idx + 1}.png`} />
      <Flex alignItems="center" paddingBottom="1rem">
        <Button
          background="linear-gradient(125.41deg, #3D6BF5 -4.22%, #C53DF5 120.93%)"
          borderRadius="25px"
          marginRight="2rem"
        />
        <Text color="#FFFFFF" fontFamily="Montserrat" fontSize="24px">
          {blog.title}
        </Text>
      </Flex>
      <Box h="full">
        <Text color="white" fontFamily="Montserrat" fontSize="14px">
          {blog.content}
        </Text>
      </Box>
      <Flex>
        <Button
          background="linear-gradient(125.41deg, #3D6BF5 -4.22%, #C53DF5 120.93%)"
          marginLeft="2rem"
          marginRight="2rem"
          marginTop="3rem"
          maxHeight="10px"
        ></Button>
      </Flex>
    </Stack>
  );
};

export default BlogCard;
