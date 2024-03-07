import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import { Radio, RadioGroup } from "@chakra-ui/radio";

const TransactionForm = ({onClose, isOpen}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Transaction</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input placeholder="Enter Transaction Amount" name="description" type="text" value="description" />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input placeholder="Enter Transaction Description" name="amount" type="number" value="amount" />
                        </FormControl>

                        <RadioGroup mt={'5'} >
                            <Radio value="income" colorScheme="blue" name="type">Income</Radio>
                            <Radio value="expense" colorScheme="red" name="type">Expense</Radio>
                        </RadioGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={'4'} onClick={onClose}>Cancel</Button>
                        <Button>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    );
};

export default TransactionForm;