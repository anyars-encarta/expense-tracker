import { Box, Flex, Heading, Text } from "@chakra-ui/layout"

const Summary = () => {
    return (
    <Box display={'flex'} p={'6'} border={'1px solid'} borderColor={'gray.100'} overflow={'hidden'} borderRadius={'10'} background={'white'}>
        <Flex w={'full'} justifyContent={'center'} alignItems={'center'} flexDirection={{base: 'column', sm:'column', md: 'column', lg: 'row', xl: 'row'}}>
            <Flex flex={1} w={'full'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'} ml={'-20'} mr={'2'}>
                <Heading size={'md'} mb={'4'} color={'gray.600'}>
                    Balance is 100
                </Heading>

                <Flex justifyContent={'space-evenly'} alignItems={'center'} bg={'gray.50'} w={'full'} h={'100px'} border={'1px solid'} borderColor={'gray.100'}>
                    <Flex flexDirection={'column'}>
                        <Heading color={'gray.700'}>$ 400</Heading>
                        <Text color={'gray.600'}>Total Income</Text>
                    </Flex>
                </Flex>

                <Flex justifyContent={'space-evenly'} alignItems={'center'} bg={'gray.50'} w={'full'} h={'100px'} border={'1px solid'} borderColor={'gray.100'}>
                    <Flex flexDirection={'column'}>
                        <Heading color={'gray.700'}>$ 200</Heading>
                        <Text color={'gray.600'}>Total Expense</Text>
                    </Flex>
                </Flex>
            </Flex>

            <Box flex={1} mt={'10'} ml={'-90px'} mr={'5'} w={'300px'} h={'300px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Heading>Chart</Heading>
            </Box>
        </Flex>
    </Box>
    )
};

export default Summary;