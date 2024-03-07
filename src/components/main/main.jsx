import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import Summary from "../summary/summary";
import ExpenseView from "../expense-view/expense-view";

const Main = () => {
    return (
    <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'}>
        <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'} mb={'5'}>
            <Heading color={'blue.400'} display={['none', 'block', 'block', 'block', 'block']}>
                Expense Tracker
            </Heading>

            <Flex alignItems={'center'}>
                <Button bg={'blue.300'} color={'black'} ml={'4'}>Add New Transaction</Button>
            </Flex>
        </Flex>

        <Summary />

        <Flex w={'full'} alignItems={'flex-start'} justifyContent={'space-evenly'} flexDirection={['column', 'column','column', 'row', 'row']}>
            <ExpenseView />
            <ExpenseView />
        </Flex>
    </Flex>
    )
};

export default Main;