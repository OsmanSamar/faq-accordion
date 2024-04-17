import { questions } from "./questions";
import bgMobile from "./assets/images/background-pattern-mobile.svg";
import bgDesktop from "./assets/images/background-pattern-desktop.svg";
import star from "./assets/images/icon-star.svg";
import Question from "./Question";
import { Container, Heading, Box, Image } from "@chakra-ui/react";

export default function App() {
  return (
    <Box
      as="section"
      bg="hsl(275, 100%, 97%)"
      bgImage={{
        base: `url(${bgMobile})`,
        md: `url(${bgDesktop})`,
      }}
      bgSize={{ base: "100%", md: "100%" }}
      bgRepeat="no-repeat"
      w="100%"
      maxW="100%"
      pt="5px" // Padding top
      minHeight="100vh" // Set min-height to cover the entire viewport height
    >
      {/* Section wrapper with background color */}

      <Container
        maxW={{ base: "90%", md: "550px" }} // Responsive max-width
        bg="white" // Background color
        borderRadius="lg" // Border radius
        boxShadow="xl" // Box shadow
        p="21px" // Padding
        mt="135px" // Margin-top
        pos="relative" // Position
        mx="auto" // Margin horizontal
      >
        <Heading fontSize="2xl" mb="4" display="flex" alignItems="center">
          <Image src={star} alt="Star icon" boxSize="6" mr="2" /> FAQs
        </Heading>

        <Box as="div" className="questions-container">
          {/* Render the list of questions using the Question component */}
          {questions.map((question, index) => (
            <Question key={index} {...question} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
