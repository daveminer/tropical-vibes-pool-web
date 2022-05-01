import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

import BlogCard from "./BlogCard";

const blogs = [
  {
    title: "Egestas Tortor Velit",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tortor malesuada vel sed aenean facilisis. In turpis risus phasellus lorem. Diam nisl id tristique sit tristique duis. A vel velit",
  },
  {
    title: "Diam Nisl Id Tristique",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tortor malesuada vel sed aenean facilisis. In turpis risus phasellus lorem. Diam nisl id tristique sit tristique duis. A vel velit",
  },
  {
    title: "Risus Phasellus",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tortor malesuada vel sed aenean facilisis. In turpis risus phasellus lorem. Diam nisl id tristique sit tristique duis. A vel velit",
  },
];

const Blog = () => (
  <Box
    backgroundColor="#0f133c"
    flex={1}
    paddingTop="4rem"
    paddingBottom="2rem"
  >
    <Flex
      color="#FFFFFF"
      fontFamily="Montserrat"
      fontSize="55px"
      fontWeight="800"
      justifyContent={"center"}
    >
      BLOG
    </Flex>
    <Box margin="4rem">
      <Grid column={3} gap={12} margin="4rem">
        {blogs.map((blog, idx) => (
          <GridItem
            backgroundColor="#010920"
            borderRadius={"40px"}
            colEnd={idx + 1}
            colStart={idx + 1}
            key={`blog-${idx}`}
          >
            <Box margin="2rem">
              <BlogCard key={idx} blog={blog} idx={idx} />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default Blog;
