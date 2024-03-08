import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";

const TransactionForm = ({ onClose, isOpen }) => {
    const { formData, setFormData, value, setValue, handleFormSubmit } = useContext(GlobalContext);

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFormSubmit(formData)
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Transaction</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Enter Description</FormLabel>
                            <Input onChange={handleFormChange} placeholder="Enter Transaction Amount" name="description" type="text" />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Enter Amount</FormLabel>
                            <Input onChange={handleFormChange} placeholder="0.00" name="amount" type="number" />
                        </FormControl>

                        <RadioGroup mt={'5'} value={value} onChange={setValue}>
                            <Radio checked={formData.type === 'income'} onChange={handleFormChange} mr={'4'} value="income" colorScheme="blue" name="type">Income</Radio>
                            <Radio checked={formData.type === 'expense'} onChange={handleFormChange} value="expense" colorScheme="red" name="type">Expense</Radio>
                        </RadioGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={'4'} onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type="submit">Add</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    );
};

export default TransactionForm;