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
import { LibraryDetailsCard } from "../../components/Cards/LibraryDetailsCard";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function LibraryDetails({ isOpen, onClose }: Props) {
  const { details } = useAppState().library || {};

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Libraries</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {details && <LibraryDetailsCard library={details} />}
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
