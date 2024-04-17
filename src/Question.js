import { useState } from "react";
import plus from "./assets/images/icon-plus.svg";
import minus from "./assets/images/icon-minus.svg";
import { Heading, Box, Image, Button } from "@chakra-ui/react";

export default function Question({ question, answer }) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Box as="article" borderBottom="2px solid #ececec" py="4">
      <Box
        as="div"
        className="question"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setIsShowing(!isShowing)}
        cursor="pointer"
      >
        <Heading as="h2" fontSize="lg" mb="1" _hover={{ textColor: "#805AD5" }}>
          {question}
        </Heading>
        <Button bg="transparent" border="none" outline="none">
          {isShowing ? (
            <Image src={minus} alt="Minus icon" boxSize="6" />
          ) : (
            <Image src={plus} alt="Plus icon" boxSize="6" />
          )}
        </Button>
      </Box>
      {isShowing && (
        <Box as="p" lineHeight="1.8" color="#253454">
          {answer}
        </Box>
      )}
    </Box>
  );
}
