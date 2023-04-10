import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import UserDetails from "../../components/Cards/UserDetails";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function BookwormsDetails({ isOpen, onClose }: Props) {
  const { bookwormDetailsApi } = useAppState().bookworm;
  const bookwormDetails = bookwormDetailsApi?.data;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Bookworm</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {bookwormDetails && <UserDetails user={bookwormDetails} />}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default BookwormsDetails;
