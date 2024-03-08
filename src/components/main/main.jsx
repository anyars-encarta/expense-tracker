import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import Summary from "../summary/summary";
import ExpenseView from "../expense-view/expense-view";
import { useDisclosure } from "@chakra-ui/hooks";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/context";

const Main = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { allTransactions, totalExpense, setTotalExpense, totalIncome, setTotalIncome } = useContext(GlobalContext);

    useEffect(() => {
        let income = 0;
        let expense = 0;

        allTransactions.forEach(item => {
            item.type === 'income' ? 
            income = income + parseFloat(item.amount) : 
            expense = expense + parseFloat(item.amount)
        });

        setTotalExpense(expense)
        setTotalIncome(income)
    }, [allTransactions])
    return (
        <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'}>
            <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'} mb={'5'}>
                <Heading color={'blue.400'} display={['none', 'block', 'block', 'block', 'block']}>
                    Expense Tracker
                </Heading>

                <Flex alignItems={'center'}>
                    <Button onClick={onOpen} bg={'blue.300'} color={'black'} ml={'4'}>Add New Transaction</Button>
                </Flex>
            </Flex>

            <Summary totalExpense={totalExpense} totalIncome={totalIncome} isOpen={isOpen} onClose={onClose} />

            <Flex w={'full'} alignItems={'flex-start'} justifyContent={'space-evenly'} flexDirection={['column', 'column', 'column', 'row', 'row']}>
                <ExpenseView data={allTransactions.filter(item => item.type === 'income')} type={'income'}/>   
                <ExpenseView data={allTransactions.filter(item => item.type === 'expense')} type={'expense'}/>
            </Flex>
        </Flex>
    )
};

export default Main;